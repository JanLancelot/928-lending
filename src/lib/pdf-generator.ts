import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { encryptPDF } from "@pdfsmaller/pdf-encrypt";

export async function generateEncryptedApplication(
  data: any,
  documents: { filename: string; buffer: Buffer; mimeType: string }[],
  password: string
): Promise<Buffer> {
  const pdfDoc = await PDFDocument.create();
  
  // 1. Create main text page
  const page = pdfDoc.addPage([600, 850]);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  
  const { width, height } = page.getSize();

  // Branding Colors
  const navyColor = rgb(10 / 255, 26 / 255, 47 / 255);    // #0A1A2F
  const goldColor = rgb(217 / 255, 144 / 255, 38 / 255);  // #D99026
  const darkTextColor = rgb(33 / 255, 43 / 255, 54 / 255);
  const mutedTextColor = rgb(99 / 255, 115 / 255, 129 / 255);
  const borderGrey = rgb(240 / 255, 242 / 255, 245 / 255);
  const zebraGrey = rgb(248 / 255, 249 / 255, 250 / 255);

  // Draw Header Banner
  page.drawRectangle({
    x: 0,
    y: height - 100,
    width: width,
    height: 100,
    color: navyColor,
  });

  // Draw Gold Accent Line
  page.drawRectangle({
    x: 0,
    y: height - 105,
    width: width,
    height: 5,
    color: goldColor,
  });

  // Header Title
  page.drawText("COMMERCIAL LOAN APPLICATION", {
    x: 40,
    y: height - 60,
    size: 20,
    font: boldFont,
    color: rgb(1, 1, 1),
  });

  page.drawText("928 Credit Concept Lending Investor Corp.", {
    x: 40,
    y: height - 80,
    size: 11,
    font: font,
    color: rgb(0.8, 0.8, 0.8),
  });

  // Timestamp
  const dateStr = new Date().toLocaleString("en-PH", { timeZone: "Asia/Manila" }) + " PHT";
  page.drawText(`Submitted: ${dateStr}`, {
    x: width - 240,
    y: height - 80,
    size: 10,
    font: font,
    color: rgb(0.8, 0.8, 0.8),
  });

  let y = height - 150;

  // Helper to draw section header
  const drawSectionHeader = (title: string) => {
    page.drawText(title.toUpperCase(), {
      x: 40,
      y,
      size: 13,
      font: boldFont,
      color: navyColor,
    });
    // Draw thin underline
    page.drawLine({
      start: { x: 40, y: y - 5 },
      end: { x: width - 40, y: y - 5 },
      thickness: 1,
      color: goldColor,
    });
    y -= 25;
  };

  // Helper to draw clean metadata table rows
  const drawRow = (label: string, value: string, isZebra: boolean) => {
    if (isZebra) {
      page.drawRectangle({
        x: 40,
        y: y - 18,
        width: width - 80,
        height: 24,
        color: zebraGrey,
      });
    }

    // Border bottom line
    page.drawLine({
      start: { x: 40, y: y - 18 },
      end: { x: width - 40, y: y - 18 },
      thickness: 0.5,
      color: borderGrey,
    });

    page.drawText(label, {
      x: 50,
      y: y - 12,
      size: 10,
      font: boldFont,
      color: mutedTextColor,
    });

    page.drawText(value || "-", {
      x: 200,
      y: y - 12,
      size: 10,
      font: font,
      color: darkTextColor,
    });

    y -= 24;
  };

  // Section 1: Applicant Profile
  drawSectionHeader("Applicant Profile");
  const profileFields = [
    { label: "Applicant Name", value: data.fullName },
    { label: "Email Address", value: data.email },
    { label: "Phone Number", value: data.phone },
  ];
  profileFields.forEach((field, i) => drawRow(field.label, field.value, i % 2 === 0));

  y -= 20;

  // Section 2: Business details
  drawSectionHeader("Business Profile");
  const businessFields = [
    { label: "Business Name", value: data.businessName },
    { label: "Registration / TIN", value: data.tinNumber },
    { label: "Business Type", value: data.businessType },
    { label: "Years in Business", value: data.yearsInBusiness?.toString() },
    { label: "Business Address", value: data.businessAddress },
  ];
  businessFields.forEach((field, i) => drawRow(field.label, field.value, i % 2 === 0));

  y -= 20;

  // Section 3: Loan Details
  drawSectionHeader("Loan & Financial Information");
  const loanFields = [
    { label: "Requested Amount", value: `PHP ${data.requestedAmount?.toLocaleString()}` },
    { label: "Annual Revenue", value: `PHP ${data.annualRevenue?.toLocaleString()}` },
    { label: "Purpose of Loan", value: data.purposeOfLoan },
  ];
  loanFields.forEach((field, i) => drawRow(field.label, field.value, i % 2 === 0));

  // Footer Disclaimer
  page.drawText("CONFIDENTIAL · For Internal Processing Only", {
    x: 40,
    y: 35,
    size: 9,
    font: boldFont,
    color: mutedTextColor,
  });

  page.drawText("928 Credit Concept Lending Investor Corp. · SEC Reg. No. CS201314115", {
    x: 40,
    y: 20,
    size: 8,
    font: font,
    color: mutedTextColor,
  });

  // 2. Process documents
  for (const doc of documents) {
    if (doc.mimeType === "application/pdf") {
      try {
        const externalPdf = await PDFDocument.load(doc.buffer);
        const copiedPages = await pdfDoc.copyPages(externalPdf, externalPdf.getPageIndices());
        copiedPages.forEach(p => pdfDoc.addPage(p));
      } catch (err) {
        console.error(`Failed to embed PDF ${doc.filename}:`, err);
      }
    } else if (doc.mimeType === "image/jpeg" || doc.mimeType === "image/png") {
      try {
        const image = doc.mimeType === "image/jpeg" 
          ? await pdfDoc.embedJpg(doc.buffer) 
          : await pdfDoc.embedPng(doc.buffer);
        
        // Scale and embed image to standard page size nicely
        const imgPage = pdfDoc.addPage([600, 850]);
        const { width: pWidth, height: pHeight } = imgPage.getSize();
        
        // Max bounds with margins
        const maxW = pWidth - 80;
        const maxH = pHeight - 160;
        
        const imgW = image.width;
        const imgH = image.height;
        const ratio = Math.min(maxW / imgW, maxH / imgH, 1);
        
        const finalW = imgW * ratio;
        const finalH = imgH * ratio;
        
        // Center image
        const xPos = (pWidth - finalW) / 2;
        const yPos = (pHeight - finalH) / 2;

        // Banner header on attachment page
        imgPage.drawRectangle({
          x: 0,
          y: pHeight - 50,
          width: pWidth,
          height: 50,
          color: navyColor,
        });

        imgPage.drawText(`Attachment: ${doc.filename}`, {
          x: 30,
          y: pHeight - 32,
          size: 11,
          font: boldFont,
          color: rgb(1, 1, 1),
        });

        imgPage.drawImage(image, {
          x: xPos,
          y: yPos,
          width: finalW,
          height: finalH,
        });

        // Footer on attachment page
        imgPage.drawText("928 Credit Concept Lending Investor Corp. · Confidential", {
          x: 40,
          y: 20,
          size: 8,
          font: font,
          color: mutedTextColor,
        });
      } catch (err) {
        console.error(`Failed to embed image ${doc.filename}:`, err);
      }
    }
  }

  // 3. Save to Uint8Array and encrypt
  const pdfBytes = await pdfDoc.save();
  const encryptedPdfUint8 = await encryptPDF(pdfBytes, password);
  
  return Buffer.from(encryptedPdfUint8);
}
