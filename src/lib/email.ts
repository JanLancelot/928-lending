import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL || "";

export async function sendAdminNotification(refId: string, encryptedPdfBuffer: Buffer, applicantName: string) {
  if (!ADMIN_EMAIL) {
    throw new Error("Missing ADMIN_NOTIFICATION_EMAIL in environment variables.");
  }

  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: ADMIN_EMAIL,
    subject: `New Commercial Loan Application: ${refId} (${applicantName})`,
    attachments: [
      {
        filename: `application_${refId}.pdf`,
        content: encryptedPdfBuffer,
      }
    ],
    html: `
      <h2>New Loan Application: ${refId}</h2>
      <p><strong>Applicant Name:</strong> ${applicantName}</p>
      <p>The attached PDF is AES-256 encrypted.</p>
      <p>Please use the standard organizational password format to unlock it.</p>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    throw new Error("Failed to send notification email.");
  }

  return { success: true };
}
