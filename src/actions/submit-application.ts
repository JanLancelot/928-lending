"use server";

import crypto from "crypto";
import { loanApplicationSchema } from "@/schemas/application";
import { generateEncryptedApplication } from "@/lib/pdf-generator";
import { sendAdminNotification } from "@/lib/email";

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
      agreedToTerms: formData.get("agreedToTerms") === "true",
    };

    // 2. Validate data
    const parsed = loanApplicationSchema.safeParse(rawData);
    if (!parsed.success) {
      console.error(parsed.error.issues);
      return { success: false, error: "Invalid form data. Please check your inputs." };
    }

    const data = parsed.data;

    // 3. Generate Reference ID and Password
    const refId = "LOAN-" + crypto.randomBytes(4).toString("hex").toUpperCase();
    const lastName = (data.fullName.split(" ").pop() || "UNKNOWN").toUpperCase();
    const pdfPassword = `${lastName}-${refId.slice(-4)}`;

    // 4. Handle files
    const files = formData.getAll("documents") as File[];
    const documents = [];
    let totalSize = 0;

    for (const file of files) {
      if (file.size > 0) {
        totalSize += file.size;
        if (totalSize > 10 * 1024 * 1024) {
          return { success: false, error: "Total document size exceeds the 10MB limit." };
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
    await sendAdminNotification(refId, encryptedPdfBuffer, data.fullName);

    return { success: true, referenceId: refId };
  } catch (err: any) {
    console.error("Submit application error:", err);
    return { success: false, error: err.message || "An unexpected error occurred." };
  }
}
