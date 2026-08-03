import { describe, it, expect } from "vitest";
import {
  sanitizeString,
  sanitizeEmail,
  sanitizePhone,
  sanitizePayload,
} from "../sanitize";

describe("Sanitization Utilities", () => {
  describe("sanitizeString", () => {
    it("should trim whitespace by default", () => {
      expect(sanitizeString("  hello world  ")).toBe("hello world");
    });

    it("should escape HTML tags to prevent XSS", () => {
      const input = '<script>alert("xss")</script>';
      const sanitized = sanitizeString(input);
      expect(sanitized).not.toContain("<script>");
      expect(sanitized).toBe("&lt;script&gt;alert(&quot;xss&quot;)&lt;&#x2F;script&gt;");
    });

    it("should strip low control characters", () => {
      const input = "Hello\x00World\x07!";
      expect(sanitizeString(input)).toBe("HelloWorld!");
    });

    it("should return empty string for non-string input", () => {
      // @ts-expect-error testing invalid input types
      expect(sanitizeString(null)).toBe("");
      // @ts-expect-error testing invalid input types
      expect(sanitizeString(123)).toBe("");
    });
  });

  describe("sanitizeEmail", () => {
    it("should normalize email addresses", () => {
      expect(sanitizeEmail(" Test.User@Example.COM ")).toBe("test.user@example.com");
    });

    it("should strip leading/trailing whitespace", () => {
      expect(sanitizeEmail("  user@domain.com  ")).toBe("user@domain.com");
    });
  });

  describe("sanitizePhone", () => {
    it("should retain digits and leading plus sign for E.164 phone numbers", () => {
      expect(sanitizePhone("+63 (917) 123-4567")).toBe("+639171234567");
    });

    it("should strip letters, punctuation, and spaces", () => {
      expect(sanitizePhone("Phone: 0917-555-1234 ext 99")).toBe("0917555123499");
    });
  });

  describe("sanitizePayload", () => {
    it("should recursively sanitize string fields in nested objects", () => {
      const payload = {
        fullName: "  John <b>Doe</b> ",
        email: " USER@EXAMPLE.COM ",
        phone: "+63 (917) 999 8888",
        requestedAmount: 500000,
        nested: {
          note: "<script>bad()</script>",
          contactEmail: " CONTACT@BIZ.PH ",
        },
      };

      const sanitized = sanitizePayload(payload);

      expect(sanitized.fullName).toBe("John &lt;b&gt;Doe&lt;&#x2F;b&gt;");
      expect(sanitized.email).toBe("user@example.com");
      expect(sanitized.phone).toBe("+639179998888");
      expect(sanitized.requestedAmount).toBe(500000);
      expect(sanitized.nested.note).toBe("&lt;script&gt;bad()&lt;&#x2F;script&gt;");
      expect(sanitized.nested.contactEmail).toBe("contact@biz.ph");
    });
  });
});
