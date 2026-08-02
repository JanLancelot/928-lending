/**
 * Data retention policy limits in milliseconds.
 * - Temporary application artifacts (e.g. temporary PDFs, raw submission payload dumps): 30 days
 * - Statutory audit & compliance logs (AMLA / SEC MC 19 requirement): 5 years
 */
export const RETENTION_LIMITS = {
  TEMP_ARTIFACT: 30 * 24 * 60 * 60 * 1000,
  AUDIT_LOG: 5 * 365 * 24 * 60 * 60 * 1000,
} as const;

export type RetentionRecordType = keyof typeof RETENTION_LIMITS;

export interface RetentionStatus {
  isExpired: boolean;
  ageMs: number;
  maxAgeMs: number;
  retentionType: RetentionRecordType;
}

const PII_FIELDS = new Set([
  "fullname",
  "fullName",
  "name",
  "email",
  "phone",
  "phonenumber",
  "phoneNumber",
  "mobile",
  "address",
  "businessname",
  "businessName",
  "tin",
  "ssn",
]);

/**
 * Evaluates whether a record has exceeded its statutory data retention period.
 */
export function evaluateRetentionStatus(
  createdAt: Date | string | number,
  type: RetentionRecordType
): RetentionStatus {
  const timestamp =
    createdAt instanceof Date
      ? createdAt.getTime()
      : typeof createdAt === "string"
      ? new Date(createdAt).getTime()
      : createdAt;

  const now = Date.now();
  const maxAgeMs = RETENTION_LIMITS[type];
  const ageMs = Math.max(0, now - timestamp);

  return {
    isExpired: ageMs > maxAgeMs,
    ageMs,
    maxAgeMs,
    retentionType: type,
  };
}

/**
 * Recursively anonymizes PII fields within a record for compliant archival or purging.
 */
export function anonymizeRecord<T>(data: T): T {
  if (data === null || data === undefined) {
    return data;
  }

  if (typeof data !== "object") {
    return data;
  }

  if (Array.isArray(data)) {
    return data.map((item) => anonymizeRecord(item)) as unknown as T;
  }

  const result: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(data as Record<string, unknown>)) {
    if (PII_FIELDS.has(key) || PII_FIELDS.has(key.toLowerCase())) {
      result[key] = "[ANONYMIZED]";
    } else if (value !== null && typeof value === "object") {
      result[key] = anonymizeRecord(value);
    } else {
      result[key] = value;
    }
  }

  return result as T;
}
