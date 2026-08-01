import { NextResponse } from "next/server";
import { loanApplicationSchema } from "@/schemas/application";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Server-side Zod validation
    const validatedData = loanApplicationSchema.parse(body);

    // 2. TODO: Verify Cloudflare Turnstile token
    // 3. TODO: Generate branded PDF & AES-256 encrypt (e.g. using pdf-lib)
    // 4. TODO: Deliver PDF via SES / Resend to business owner
    // 5. TODO: Deliver PDF password via Twilio SMS to pre-registered phone number
    // 6. TODO: Record immutable audit log entry (Vercel Postgres / Supabase / DynamoDB)

    return NextResponse.json(
      {
        message: "Application submitted successfully",
        submittedAt: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Validation or processing error",
        error: error.message || "Invalid payload",
      },
      { status: 400 }
    );
  }
}
