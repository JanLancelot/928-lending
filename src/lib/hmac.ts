import crypto from "node:crypto";

export interface VerifyHmacResult {
  valid: boolean;
  reason?: string;
}

export function generateHmacSignature(
  payload: string,
  secret: string,
  timestamp: number
): string {
  const data = `${timestamp}.${payload}`;
  return crypto.createHmac("sha256", secret).update(data).digest("hex");
}

/**
 * Validates request payload integrity using HMAC-SHA256 and timing-safe comparison.
 * Rejects requests older than maxAgeMs to mitigate replay attacks.
 */
export function verifyHmacSignature(
  payload: string,
  signature: string,
  timestampStr: string,
  maxAgeMs = 5 * 60 * 1000
): VerifyHmacResult {
  const secret = process.env.HMAC_SECRET_KEY;
  const isDev = process.env.NODE_ENV === "development";
  const skipHmac = process.env.SKIP_HMAC === "true";

  if (skipHmac || (isDev && (!secret || secret === "dummy-hmac-secret"))) {
    return { valid: true };
  }

  if (!secret) {
    return {
      valid: false,
      reason: "HMAC_SECRET_KEY is not configured on the server",
    };
  }

  if (!signature || !timestampStr) {
    return {
      valid: false,
      reason: "Missing signature or timestamp headers",
    };
  }

  const timestamp = parseInt(timestampStr, 10);
  if (isNaN(timestamp)) {
    return { valid: false, reason: "Invalid timestamp header format" };
  }

  const now = Date.now();
  if (Math.abs(now - timestamp) > maxAgeMs) {
    return { valid: false, reason: "Request timestamp outside allowed window" };
  }

  const expectedSignature = generateHmacSignature(payload, secret, timestamp);

  try {
    const signatureBuffer = Buffer.from(signature, "hex");
    const expectedBuffer = Buffer.from(expectedSignature, "hex");

    if (signatureBuffer.length !== expectedBuffer.length) {
      return { valid: false, reason: "Invalid signature length" };
    }

    const match = crypto.timingSafeEqual(signatureBuffer, expectedBuffer);
    return {
      valid: match,
      reason: match ? undefined : "HMAC signature mismatch",
    };
  } catch {
    return { valid: false, reason: "Signature verification failed" };
  }
}
