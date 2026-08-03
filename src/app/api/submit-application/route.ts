import { NextResponse } from "next/server";
import { loanApplicationSchema } from "@/schemas/application";
import { verifyTurnstileToken } from "@/lib/turnstile";
import { checkRateLimit, getClientIp } from "@/lib/ratelimit";

export async function POST(request: Request) {
  const clientIp = getClientIp(request);
  const configuredLimit = Number.parseInt(process.env.RATE_LIMIT_MAX_REQUESTS ?? "5", 10);
  const configuredWindowSeconds = Number.parseInt(
    process.env.RATE_LIMIT_WINDOW_SECONDS ?? "60",
    10
  );
  const rateLimitMaxRequests = Number.isFinite(configuredLimit) && configuredLimit > 0
    ? configuredLimit
    : 5;
  const rateLimitWindowSeconds =
    Number.isFinite(configuredWindowSeconds) && configuredWindowSeconds > 0
      ? configuredWindowSeconds
      : 60;

  const rateLimit = checkRateLimit(clientIp, {
    limit: rateLimitMaxRequests,
    windowMs: rateLimitWindowSeconds * 1000,
  });
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
    const validatedData = loanApplicationSchema.parse(body);

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

    // Pipeline: PDF generation -> encryption -> email delivery -> SMS key delivery

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
