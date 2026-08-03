import { describe, it, expect } from "vitest";
import {
  evaluateRetentionStatus,
  anonymizeRecord,
  RETENTION_LIMITS,
} from "../retention";

describe("Data Retention & Privacy Utilities", () => {
  describe("evaluateRetentionStatus", () => {
    it("should evaluate temporary artifacts correctly within limit", () => {
      const recentDate = new Date(Date.now() - 1000 * 60 * 60 * 24 * 5); // 5 days ago
      const status = evaluateRetentionStatus(recentDate, "TEMP_ARTIFACT");

      expect(status.isExpired).toBe(false);
      expect(status.retentionType).toBe("TEMP_ARTIFACT");
      expect(status.maxAgeMs).toBe(RETENTION_LIMITS.TEMP_ARTIFACT);
    });

    it("should mark temporary artifacts as expired after 30 days", () => {
      const expiredDate = new Date(Date.now() - 1000 * 60 * 60 * 24 * 31); // 31 days ago
      const status = evaluateRetentionStatus(expiredDate, "TEMP_ARTIFACT");

      expect(status.isExpired).toBe(true);
    });

    it("should keep audit logs retained for 5 years", () => {
      const fourYearsOld = new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 4);
      const status = evaluateRetentionStatus(fourYearsOld, "AUDIT_LOG");

      expect(status.isExpired).toBe(false);
    });
  });

  describe("anonymizeRecord", () => {
    it("should mask PII fields with [ANONYMIZED]", () => {
      const record = {
        id: "REC-12345",
        fullName: "Jane Doe",
        email: "jane@example.com",
        phone: "+639171234567",
        requestedAmount: 1000000,
        status: "APPROVED",
      };

      const anonymized = anonymizeRecord(record);

      expect(anonymized.id).toBe("REC-12345");
      expect(anonymized.fullName).toBe("[ANONYMIZED]");
      expect(anonymized.email).toBe("[ANONYMIZED]");
      expect(anonymized.phone).toBe("[ANONYMIZED]");
      expect(anonymized.requestedAmount).toBe(1000000);
      expect(anonymized.status).toBe("APPROVED");
    });

    it("should handle nested arrays and objects", () => {
      const payload = {
        metadata: { source: "web" },
        applicants: [
          { name: "John Smith", tin: "123-456-789" },
          { name: "Mary Smith", tin: "987-654-321" },
        ],
      };

      const result = anonymizeRecord(payload);

      expect(result.metadata.source).toBe("web");
      expect(result.applicants[0].name).toBe("[ANONYMIZED]");
      expect(result.applicants[0].tin).toBe("[ANONYMIZED]");
      expect(result.applicants[1].name).toBe("[ANONYMIZED]");
    });
  });
});
