"use server";

import { Resend } from "resend";
import crypto from "crypto";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { loanApplicationSchema } from "@/schemas/application";

const resend = new Resend(process.env.RESEND_API_KEY);
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || "";
const ADMIN_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL || "";

function checkEncryptionKey() {
  if (!ENCRYPTION_KEY || ENCRYPTION_KEY.length !== 32) {
    throw new Error("Invalid ENCRYPTION_KEY. It must be exactly 32 characters long.");
  }
}

// Encrypts a file buffer
function encryptFile(buffer: Buffer): Buffer {
  checkEncryptionKey();
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-gcm", Buffer.from(ENCRYPTION_KEY, "utf-8"), iv);
  
  const encrypted = Buffer.concat([cipher.update(buffer), cipher.final()]);
  const authTag = cipher.getAuthTag();
  
  // File format: [16 bytes IV][16 bytes AuthTag][Encrypted Data]
  return Buffer.concat([iv, authTag, encrypted]);
}

// Generates a PDF from the application data
async function generateApplicationPDF(data: any): Promise<Buffer> {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 800]);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  
  const { height } = page.getSize();
  let y = height - 60;

  const drawLine = (text: string, isBold: boolean = false, size: number = 12, indent: number = 50) => {
    page.drawText(text, {
      x: indent,
      y,
      size,
      font: isBold ? boldFont : font,
      color: rgb(0.1, 0.1, 0.1),
    });
    y -= size + 10;
  };

  drawLine("Commercial Loan Application", true, 22);
  y -= 20;

  const fields = [
    { label: "Submitted At", value: new Date().toLocaleString() },
    { label: "Business Name", value: data.businessName },
    { label: "Applicant Name", value: data.fullName },
    { label: "Business Address", value: data.businessAddress },
    { label: "Registration / TIN", value: data.tinNumber },
    { label: "Business Type", value: data.businessType },
    { label: "Years in Business", value: data.yearsInBusiness?.toString() },
    { label: "Email Address", value: data.email },
    { label: "Phone Number", value: data.phone },
    { label: "Requested Amount", value: `$${data.requestedAmount?.toLocaleString()}` },
    { label: "Annual Revenue", value: `$${data.annualRevenue?.toLocaleString()}` },
    { label: "Purpose of Loan", value: data.purposeOfLoan },
  ];

  fields.forEach(field => {
    page.drawText(`${field.label}:`, {
      x: 50,
      y,
      size: 12,
      font: boldFont,
      color: rgb(0.2, 0.2, 0.2),
    });
    
    page.drawText(`${field.value}`, {
      x: 200,
      y,
      size: 12,
      font: font,
      color: rgb(0, 0, 0),
    });
    
    y -= 25;
  });

  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
}

export async function submitApplication(formData: FormData) {
  try {
    // 1. Extract and convert text fields
    const rawData = {
      fullName: formData.get("fullName") as string,
      businessName: formData.get("businessName") as string,
      businessAddress: formData.get("businessAddress") as string,
      businessType: formData.get("businessType") as string,
      yearsInBusiness: Number(formData.get("yearsInBusiness")),
      tinNumber: formData.get("tinNumber") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      requestedAmount: Number(formData.get("requestedAmount")),
      annualRevenue: Number(formData.get("annualRevenue")),
      purposeOfLoan: formData.get("purposeOfLoan") as string,
      turnstileToken: formData.get("turnstileToken") as string,
    };

    // 2. Validate data
    const parsed = loanApplicationSchema.safeParse(rawData);
    if (!parsed.success) {
      console.error(parsed.error.issues);
      return { success: false, error: "Invalid form data. Please check your inputs." };
    }

    // 3. Generate and encrypt the application PDF
    const pdfBuffer = await generateApplicationPDF(parsed.data);
    const encryptedPdfBuffer = encryptFile(pdfBuffer);
    
    const attachments = [
      {
        filename: `Application-${parsed.data.businessName.replace(/[^a-zA-Z0-9]/g, "")}.pdf.enc`,
        content: encryptedPdfBuffer,
      }
    ];

    // 4. Handle additional file attachments
    const files = formData.getAll("documents") as File[];
    let totalSize = pdfBuffer.length;

    for (const file of files) {
      if (file.size > 0) {
        totalSize += file.size;
        if (totalSize > 10 * 1024 * 1024) {
          return { success: false, error: "Total document size exceeds the 10MB limit." };
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const encryptedBuffer = encryptFile(buffer);
        
        attachments.push({
          filename: `${file.name}.enc`,
          content: encryptedBuffer,
        });
      }
    }

    // 5. Send email with Resend
    if (!ADMIN_EMAIL) {
      throw new Error("Missing ADMIN_NOTIFICATION_EMAIL in environment variables.");
    }

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ADMIN_EMAIL,
      subject: `New Commercial Loan Application from ${parsed.data.businessName}`,
      attachments,
      html: `
        <h2>New Commercial Loan Application</h2>
        <p>A new loan application has been submitted by <strong>${parsed.data.businessName}</strong>.</p>
        <p>The application details and supporting documents have been compiled into encrypted PDF/file attachments.</p>
        <p>Please download the <code>.enc</code> attachments below and drag them into the secure decryption page to view them.</p>
        <br/>
        <p><a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/decrypt" style="display: inline-block; padding: 10px 20px; background-color: #10b981; color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">Go to Decryption Page</a></p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: "Failed to send notification email." };
    }

    return { success: true };
  } catch (err: any) {
    console.error("Submit application error:", err);
    return { success: false, error: err.message || "An unexpected error occurred." };
  }
}
