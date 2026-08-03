import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { generateHmacSignature, verifyHmacSignature } from "../hmac";

describe("HMAC Security Utilities", () => {
  const originalEnv = process.env;

  const setNodeEnv = (value: string | undefined) => {
    (process.env as Record<string, string | undefined>).NODE_ENV = value;
  };

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it("should generate deterministic HMAC SHA-256 signatures", () => {
    const payload = '{"fullName":"Alice"}';
    const secret = "test-hmac-secret-12345";
    const timestamp = 1700000000000;

    const sig1 = generateHmacSignature(payload, secret, timestamp);
    const sig2 = generateHmacSignature(payload, secret, timestamp);

    expect(sig1).toBe(sig2);
    expect(sig1.length).toBe(64);
  });

  it("should verify valid HMAC signature correctly", () => {
    setNodeEnv("production");
    process.env.HMAC_SECRET_KEY = "super-secret-key-32-chars-long";
    delete process.env.SKIP_HMAC;

    const payload = '{"amount":500000}';
    const timestamp = Date.now();
    const signature = generateHmacSignature(
      payload,
      process.env.HMAC_SECRET_KEY,
      timestamp
    );

    const result = verifyHmacSignature(
      payload,
      signature,
      timestamp.toString()
    );

    expect(result.valid).toBe(true);
    expect(result.reason).toBeUndefined();
  });

  it("should reject when signature or timestamp is missing", () => {
    setNodeEnv("production");
    process.env.HMAC_SECRET_KEY = "super-secret-key-32-chars-long";
    delete process.env.SKIP_HMAC;

    expect(verifyHmacSignature("payload", "", "123456").reason).toBe("Missing signature or timestamp headers");
    expect(verifyHmacSignature("payload", "sig", "").reason).toBe("Missing signature or timestamp headers");
  });

  it("should reject invalid non-numeric timestamp strings", () => {
    setNodeEnv("production");
    process.env.HMAC_SECRET_KEY = "super-secret-key-32-chars-long";
    delete process.env.SKIP_HMAC;

    const result = verifyHmacSignature("payload", "validsig", "invalid-number");
    expect(result.valid).toBe(false);
    expect(result.reason).toBe("Invalid timestamp header format");
  });

  it("should reject signature length mismatch", () => {
    setNodeEnv("production");
    process.env.HMAC_SECRET_KEY = "super-secret-key-32-chars-long";
    delete process.env.SKIP_HMAC;

    const result = verifyHmacSignature("payload", "abcd", Date.now().toString());
    expect(result.valid).toBe(false);
    expect(result.reason).toBe("Invalid signature length");
  });

  it("should handle malformed hex signature errors gracefully", () => {
    setNodeEnv("production");
    process.env.HMAC_SECRET_KEY = "super-secret-key-32-chars-long";
    delete process.env.SKIP_HMAC;

    const result = verifyHmacSignature("payload", "ZZZZZZZZ", Date.now().toString());
    expect(result.valid).toBe(false);
  });

  it("should reject tampered payload", () => {
    setNodeEnv("production");
    process.env.HMAC_SECRET_KEY = "super-secret-key-32-chars-long";
    delete process.env.SKIP_HMAC;

    const payload = '{"amount":500000}';
    const tamperedPayload = '{"amount":99999999}';
    const timestamp = Date.now();
    const signature = generateHmacSignature(
      payload,
      process.env.HMAC_SECRET_KEY,
      timestamp
    );

    const result = verifyHmacSignature(
      tamperedPayload,
      signature,
      timestamp.toString()
    );

    expect(result.valid).toBe(false);
    expect(result.reason).toBe("HMAC signature mismatch");
  });

  it("should reject signatures outside the timestamp window (replay attack)", () => {
    setNodeEnv("production");
    process.env.HMAC_SECRET_KEY = "super-secret-key-32-chars-long";
    delete process.env.SKIP_HMAC;

    const payload = '{"test":"replay"}';
    const expiredTimestamp = Date.now() - 10 * 60 * 1000;
    const signature = generateHmacSignature(
      payload,
      process.env.HMAC_SECRET_KEY,
      expiredTimestamp
    );

    const result = verifyHmacSignature(
      payload,
      signature,
      expiredTimestamp.toString(),
      5 * 60 * 1000
    );

    expect(result.valid).toBe(false);
    expect(result.reason).toBe("Request timestamp outside allowed window");
  });

  it("should fail gracefully if HMAC_SECRET_KEY is missing in production", () => {
    setNodeEnv("production");
    delete process.env.HMAC_SECRET_KEY;
    delete process.env.SKIP_HMAC;

    const result = verifyHmacSignature(
      "payload",
      "sig",
      Date.now().toString()
    );

    expect(result.valid).toBe(false);
    expect(result.reason).toBe("HMAC_SECRET_KEY is not configured on the server");
  });

  it("should bypass verification if SKIP_HMAC=true", () => {
    process.env.SKIP_HMAC = "true";

    const result = verifyHmacSignature("payload", "invalid-sig", "invalid-time");
    expect(result.valid).toBe(true);
  });
});
