import { NextResponse } from "next/server";
import { checkRateLimit, getClientIp } from "@/lib/ratelimit";
import { verifyTurnstileToken } from "@/lib/turnstile";
import { verifyHmacSignature } from "@/lib/hmac";
import { sanitizePayload } from "@/lib/sanitize";

export interface SecurityGuardOptions {
  requireTurnstile?: boolean;
  requireHmac?: boolean;
  rateLimitMax?: number;
  rateLimitWindowSec?: number;
}

export type SecureRouteHandler<T = unknown> = (
  request: Request,
  context: { clientIp: string; body: T }
) => Promise<NextResponse>;

/**
 * Route wrapper that enforces rate-limiting, CAPTCHA validation, HMAC signing,
 * and payload sanitization prior to delegating to the route handler.
 */
export function withSecurityGuard<T = unknown>(
  handler: SecureRouteHandler<T>,
  options: SecurityGuardOptions = {}
) {
  return async (request: Request): Promise<NextResponse> => {
    const clientIp = getClientIp(request);
    const limit =
      options.rateLimitMax ??
      Number.parseInt(process.env.RATE_LIMIT_MAX_REQUESTS ?? "5", 10);
    const windowSec =
      options.rateLimitWindowSec ??
      Number.parseInt(process.env.RATE_LIMIT_WINDOW_SECONDS ?? "60", 10);

    const rateLimit = checkRateLimit(clientIp, {
      limit,
      windowMs: windowSec * 1000,
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
      const rawText = await request.clone().text();
      let bodyData: T = {} as T;

      if (rawText.trim().length > 0) {
        try {
          const parsed = JSON.parse(rawText);
          bodyData = sanitizePayload(parsed) as T;
        } catch {
          return NextResponse.json(
            { error: "Invalid JSON request payload" },
            { status: 400, headers: rateLimitHeaders }
          );
        }
      }

      if (options.requireHmac) {
        const signature = request.headers.get("x-signature") ?? "";
        const timestamp = request.headers.get("x-timestamp") ?? "";
        const hmacResult = verifyHmacSignature(rawText, signature, timestamp);

        if (!hmacResult.valid) {
          return NextResponse.json(
            { error: hmacResult.reason || "Invalid HMAC payload signature" },
            { status: 401, headers: rateLimitHeaders }
          );
        }
      }

      if (options.requireTurnstile) {
        const turnstileToken = (bodyData as Record<string, unknown>)
          ?.turnstileToken as string;

        const turnstileResult = await verifyTurnstileToken(
          turnstileToken,
          clientIp
        );

        if (!turnstileResult.success) {
          return NextResponse.json(
            {
              message: turnstileResult.message || "CAPTCHA verification failed",
              error: "Invalid Turnstile token",
              errorCodes: turnstileResult.errorCodes,
            },
            { status: 400, headers: rateLimitHeaders }
          );
        }
      }

      const response = await handler(request, { clientIp, body: bodyData });

      for (const [key, value] of Object.entries(rateLimitHeaders)) {
        response.headers.set(key, value);
      }

      return response;
    } catch (error) {
      const isDev = process.env.NODE_ENV === "development";
      const message =
        isDev && error instanceof Error
          ? error.message
          : "An unexpected server error occurred";

      return NextResponse.json(
        { error: message },
        { status: 500, headers: rateLimitHeaders }
      );
    }
  };
}
