import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const SENDER_EMAIL = process.env.SENDER_EMAIL || "onboarding@resend.dev";
const ADMIN_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL || "";
const ADMIN_CC_EMAIL = process.env.ADMIN_CC_EMAIL || "";

export async function sendAdminNotification(refId: string, encryptedPdfBuffer: Buffer) {
  if (!ADMIN_EMAIL) {
    throw new Error("Missing ADMIN_NOTIFICATION_EMAIL in environment variables.");
  }

  const { error } = await resend.emails.send({
    from: SENDER_EMAIL,
    to: ADMIN_EMAIL,
    ...(ADMIN_CC_EMAIL ? { cc: ADMIN_CC_EMAIL } : {}),
    subject: `New Commercial Loan Application: ${refId}`,
    attachments: [
      {
        filename: `application_${refId}.pdf`,
        content: encryptedPdfBuffer,
      }
    ],
    html: `
      <h2>New Loan Application: ${refId}</h2>
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
