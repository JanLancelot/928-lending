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

function hashIp(ip: string): string {
  return crypto.createHash("sha256").update(ip || "127.0.0.1").digest("hex").slice(0, 16);
}

function hashPayload(payload: unknown): string {
  const serialized = typeof payload === "string" ? payload : JSON.stringify(payload || {});
  return crypto.createHash("sha256").update(serialized).digest("hex");
}

/**
  * Emits a privacy-preserving security audit log entry.
  * IP addresses and payloads are hashed to avoid persisting raw PII.
  */
export function createAuditLogEntry(
  eventType: AuditEventType,
  clientIp: string,
  payload?: unknown,
  success = true
): AuditLogEntry {
  const entry: AuditLogEntry = {
    id: crypto.randomUUID(),
    eventType,
    timestamp: new Date().toISOString(),
    payloadHash: hashPayload(payload),
    clientIpHash: hashIp(clientIp),
    success,
  };

  console.log(`[AUDIT_LOG] ${JSON.stringify(entry)}`);
  return entry;
}
