import { describe, it, expect, beforeEach, vi } from "vitest";
import { saveIdempotencyRecord, getIdempotencyRecord } from "../idempotency";

describe("Idempotency Engine Utilities", () => {
  beforeEach(() => {
    vi.useRealTimers();
  });

  it("should store and retrieve idempotency records", () => {
    const key = "idem-key-1001";
    const body = { success: true, applicationId: "APP-9280" };

    saveIdempotencyRecord(key, 200, body);
    const retrieved = getIdempotencyRecord(key);

    expect(retrieved).not.toBeNull();
    expect(retrieved?.statusCode).toBe(200);
    expect(retrieved?.body).toEqual(body);
  });

  it("should handle invalid keys gracefully in saveIdempotencyRecord", () => {
    // @ts-expect-error testing invalid input types
    saveIdempotencyRecord(null, 200, { ok: true });
    saveIdempotencyRecord("", 200, { ok: true });
    expect(getIdempotencyRecord("")).toBeNull();
  });

  it("should return null for non-existent or invalid key", () => {
    expect(getIdempotencyRecord("non-existent-key")).toBeNull();
    // @ts-expect-error testing invalid input types
    expect(getIdempotencyRecord(null)).toBeNull();
  });

  it("should return null if record has expired past maxAgeMs", () => {
    vi.useFakeTimers();
    const now = Date.now();
    vi.setSystemTime(now);

    const key = "idem-key-expired";
    saveIdempotencyRecord(key, 200, { ok: true });

    // Advance time by 25 hours (maxAgeMs defaults to 24h)
    vi.setSystemTime(now + 25 * 60 * 60 * 1000);

    const record = getIdempotencyRecord(key);
    expect(record).toBeNull();

    vi.useRealTimers();
  });
});
