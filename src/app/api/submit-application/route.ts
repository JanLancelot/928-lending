import { NextResponse } from "next/server";
import { loanApplicationSchema } from "@/schemas/application";
import { verifyTurnstileToken } from "@/lib/turnstile";
import { checkRateLimit, getClientIp } from "@/lib/ratelimit";

export async function POST(request: Request) {
  const clientIp = getClientIp(request);

  // 1. Rate Limiting Check (5 requests per 60s per IP)
  const rateLimit = checkRateLimit(clientIp, { limit: 5, windowMs: 60 * 1000 });
  const rateLimitHeaders = {
    "X-RateLimit-Limit": String(rateLimit.limit),
    "X-RateLimit-Remaining": String(rateLimit.remaining),
    "X-RateLimit-Reset": String(rateLimit.reset),
  };

  if (!rateLimit.success) {
    return NextResponse.json(
      {
        message: "Too many requests. Please try again shortly.",
        error: "Rate limit exceeded",
      },
      {
        status: 429,
        headers: {
          ...rateLimitHeaders,
          "Retry-After": String(rateLimit.reset),
        },
      }
    );
  }

  try {
    const body = await request.json();

    // 2. Server-side Zod validation
    const validatedData = loanApplicationSchema.parse(body);

    // 3. Server-side Cloudflare Turnstile token verification
    const turnstileResult = await verifyTurnstileToken(
      validatedData.turnstileToken,
      clientIp
    );

    if (!turnstileResult.success) {
      return NextResponse.json(
        {
          message: turnstileResult.message || "CAPTCHA verification failed",
          error: "Invalid Turnstile CAPTCHA token",
          errorCodes: turnstileResult.errorCodes,
        },
        { status: 400, headers: rateLimitHeaders }
      );
    }

    // 4. TODO (Dev 2): Generate branded PDF & AES-256 encrypt with password protection
    // 5. TODO (Dev 2): Deliver PDF via SES / Resend to business owner
    // 6. TODO (Dev 2): Deliver PDF password via Twilio SMS to pre-registered phone number
    // 7. TODO (OPTIONAL): Record immutable audit log entry

    return NextResponse.json(
      {
        message: "Application submitted successfully",
        submittedAt: new Date().toISOString(),
      },
      { status: 200, headers: rateLimitHeaders }
    );
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Invalid payload";

    return NextResponse.json(
      {
        message: "Validation or processing error",
        error: errorMessage,
      },
      { status: 400, headers: rateLimitHeaders }
    );
  }
}

