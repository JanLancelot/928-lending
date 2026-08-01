import { NextResponse } from "next/server";
import { loanApplicationSchema } from "@/schemas/application";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Server-side Zod validation
    loanApplicationSchema.parse(body);

    // 2. TODO: Verify Cloudflare Turnstile token
    // 3. TODO: Generate branded PDF & AES-256 encrypt and password protected
    // 4. TODO: Deliver PDF via SES / Resend to business owner
    // 5. TODO: Deliver PDF password via Twilio SMS (ikaw bahala na Ady) to pre-registered phone number
    // 6. TODO (OPTIONAL): Record immutable audit log entry (Vercel Postgres / Supabase / DynamoDB)

    return NextResponse.json(
      {
        message: "Application submitted successfully",
        submittedAt: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Invalid payload";

    return NextResponse.json(
      {
        message: "Validation or processing error",
        error: errorMessage,
      },
      { status: 400 }
    );
  }
}
