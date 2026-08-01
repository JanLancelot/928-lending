import crypto from "node:crypto";

export type AuditEventType =
  | "APPLICATION_SUBMITTED"
  | "RATE_LIMIT_EXCEEDED"
  | "CAPTCHA_FAILED"
  | "HMAC_VERIFICATION_FAILED"
  | "VALIDATION_FAILED";

export interface AuditLogEntry {
  id: string;
  eventType: AuditEventType;
  timestamp: string;
  payloadHash: string;
  clientIpHash: string;
  success: boolean;
}

/**
 * Hashes an IP address using SHA-256 for privacy-preserving audit logs.
 */
function hashIp(ip: string): string {
  return crypto.createHash("sha256").update(ip || "127.0.0.1").digest("hex").slice(0, 16);
}

/**
 * Hashes an arbitrary payload object using SHA-256 for tamper-evidence.
 */
function hashPayload(payload: unknown): string {
  const serialized = typeof payload === "string" ? payload : JSON.stringify(payload || {});
  return crypto.createHash("sha256").update(serialized).digest("hex");
}

/**
 * Creates a structured, zero-PII security audit log entry.
 */
export function createAuditLogEntry(
  eventType: AuditEventType,
  clientIp: string,
  payload?: unknown,
  success = true
): AuditLogEntry {
  const timestamp = new Date().toISOString();
  const payloadHash = hashPayload(payload);
  const clientIpHash = hashIp(clientIp);
  const id = crypto.randomUUID();

  const entry: AuditLogEntry = {
    id,
    eventType,
    timestamp,
    payloadHash,
    clientIpHash,
    success,
  };

  // Structured security audit log output (can be shipped to CloudWatch / Sentry / Datadog)
  console.log(`[AUDIT_LOG] ${JSON.stringify(entry)}`);

  return entry;
}
