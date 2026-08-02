import { NextResponse } from "next/server";

export async function GET() {
  const isDev = process.env.NODE_ENV === "development";

  const configStatus = {
    turnstileConfigured:
      Boolean(process.env.TURNSTILE_SECRET_KEY) &&
      process.env.TURNSTILE_SECRET_KEY !== "dummy-secret-key",
    turnstileBypassed: process.env.SKIP_TURNSTILE === "true",
    hmacConfigured:
      Boolean(process.env.HMAC_SECRET_KEY) &&
      process.env.HMAC_SECRET_KEY !== "local-dev-hmac-secret-key-32-chars-min",
    hmacBypassed: process.env.SKIP_HMAC === "true",
    sentryConfigured: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN),
    resendConfigured: Boolean(process.env.RESEND_API_KEY),
    twilioConfigured:
      Boolean(process.env.TWILIO_ACCOUNT_SID) &&
      Boolean(process.env.TWILIO_AUTH_TOKEN),
  };

  const isHealthy = true;

  return NextResponse.json(
    {
      status: "ok",
      environment: process.env.NODE_ENV ?? "development",
      timestamp: new Date().toISOString(),
      config: isDev ? configStatus : undefined,
    },
    {
      status: isHealthy ? 200 : 503,
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    }
  );
}
