"use server";

import crypto from "crypto";
import { headers } from "next/headers";
import { loanApplicationSchema } from "@/schemas/application";
import { generateEncryptedApplication } from "@/lib/pdf-generator";
import { sendAdminNotification } from "@/lib/email";
import { checkRateLimit } from "@/lib/ratelimit";
import { verifyTurnstileToken } from "@/lib/turnstile";
import { sanitizePayload } from "@/lib/sanitize";

export async function submitApplication(formData: FormData) {
  try {
    // Rate Limiting
    const headersList = await headers();
    const clientIp = headersList.get("x-forwarded-for")?.split(",")[0]?.trim() || headersList.get("x-real-ip")?.trim() || "127.0.0.1";
    
    const rateLimit = checkRateLimit(clientIp, { limit: 5, windowMs: 60 * 60 * 1000 });
    if (!rateLimit.success) {
      return { success: false, error: "Too many applications submitted. Please try again later." };
    }

    const turnstileToken = formData.get("turnstileToken") as string;
    
    // Turnstile Verification
    const turnstileResult = await verifyTurnstileToken(turnstileToken, clientIp);
    if (!turnstileResult.success) {
      return { success: false, error: "Security check failed. Please refresh and try again." };
    }

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
      turnstileToken,
      agreedToTerms: formData.get("agreedToTerms") === "true",
    };

    // Sanitize Payload
    const sanitizedData = sanitizePayload(rawData);

    // 2. Validate data
    const parsed = loanApplicationSchema.safeParse(sanitizedData);
    if (!parsed.success) {
      console.error(parsed.error.issues);
      return { success: false, error: "Invalid form data. Please check your inputs." };
    }

    const data = parsed.data;

    // 3. Generate Reference ID and Password
    const refId = "LOAN-" + crypto.randomBytes(4).toString("hex").toUpperCase();
    const pdfPassword = process.env.PDF_DECRYPTION_PASSWORD;
    if (!pdfPassword) {
      throw new Error("PDF decryption password is not configured in environment variables.");
    }

    // 4. Handle files
    const files = formData.getAll("documents") as File[];
    const documents = [];
    let totalSize = 0;
    
    const allowedMimeTypes = ["application/pdf", "image/jpeg", "image/png", "image/jpg"];

    for (const file of files) {
      if (file.size > 0) {
        if (!allowedMimeTypes.includes(file.type)) {
          return { success: false, error: `Invalid file type for ${file.name}. Only PDF, JPG, and PNG are allowed.` };
        }
        
        totalSize += file.size;
        if (totalSize > 5 * 1024 * 1024) {
          return { success: false, error: "Total document size exceeds the 5MB limit." };
        }
        
        const buffer = Buffer.from(await file.arrayBuffer());
        documents.push({
          filename: file.name,
          mimeType: file.type,
          buffer,
        });
      }
    }

    // 5. Generate encrypted PDF
    const encryptedPdfBuffer = await generateEncryptedApplication(data, documents, pdfPassword);

    // 6. Send notification
    await sendAdminNotification(refId, encryptedPdfBuffer);

    return { success: true, referenceId: refId };
  } catch (err: any) {
    console.error("Submit application error:", err);
    return { success: false, error: err.message || "An unexpected error occurred." };
  }
}
