export interface SentryEventLike {
  extra?: Record<string, unknown>;
  request?: {
    headers?: Record<string, string>;
    data?: unknown;
  };
  user?: Record<string, unknown>;
  [key: string]: unknown;
}

const PII_KEYS = new Set([
  "email",
  "fullName",
  "fullname",
  "name",
  "phone",
  "phoneNumber",
  "mobile",
  "businessName",
  "requestedAmount",
  "annualRevenue",
  "turnstileToken",
  "password",
  "secret",
  "ssn",
  "tin",
]);

/**
 * Recursively redacts PII keys from event context objects before sending to error monitoring.
 */
export function scrubPII<T>(data: T): T {
  if (data === null || data === undefined) {
    return data;
  }

  if (typeof data === "string") {
    return data as T;
  }

  if (Array.isArray(data)) {
    return data.map((item) => scrubPII(item)) as unknown as T;
  }

  if (typeof data === "object") {
    const redacted: Record<string, unknown> = {};

    for (const [key, value] of Object.entries(data)) {
      if (PII_KEYS.has(key.toLowerCase()) || PII_KEYS.has(key)) {
        redacted[key] = "[REDACTED_PII]";
      } else if (typeof value === "object" && value !== null) {
        redacted[key] = scrubPII(value);
      } else {
        redacted[key] = value;
      }
    }

    return redacted as T;
  }

  return data;
}

/**
 * Sentry beforeSend hook to prevent applicant PII from reaching external servers.
 */
export function beforeSendScrubber(event: SentryEventLike): SentryEventLike {
  if (event.extra) {
    event.extra = scrubPII(event.extra);
  }

  if (event.request?.data) {
    event.request.data = scrubPII(event.request.data);
  }

  if (event.user) {
    event.user = { id: "[ANONYMIZED_USER_ID]" };
  }

  return event;
}

/**
 * Safe error logger that scrubs PII context before printing/logging.
 */
export function captureSecurityError(
  error: unknown,
  context?: Record<string, unknown>
): void {
  const errorMessage =
    error instanceof Error ? error.message : "Unknown security exception";
  const sanitizedContext = context ? scrubPII(context) : {};

  console.error(
    `[SECURITY_ERROR] ${errorMessage}`,
    JSON.stringify(sanitizedContext)
  );
}
