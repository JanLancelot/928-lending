import { describe, it, expect } from "vitest";
import { loanApplicationSchema } from "../application";

describe("Loan Application Zod Schema Validation", () => {
  const validPayload = {
    fullName: "Juan Dela Cruz",
    businessName: "Dela Cruz Trading Enterprise",
    businessAddress: "123 Mabini St., Makati City, Metro Manila",
    businessType: "Sole Proprietorship",
    yearsInBusiness: 5,
    tinNumber: "123-456-789-000",
    email: "juan.delacruz@example.ph",
    phone: "+639171234567",
    requestedAmount: 750000,
    annualRevenue: 3000000,
    purposeOfLoan: "Working Capital & Inventory Expansion",
    agreedToTerms: true,
    turnstileToken: "0.XXXXXXX.YYYYYYY",
  };

  it("should validate a completely valid application payload", () => {
    const result = loanApplicationSchema.safeParse(validPayload);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.fullName).toBe("Juan Dela Cruz");
      expect(result.data.requestedAmount).toBe(750000);
    }
  });

  it("should fail when required fields are empty", () => {
    const invalid = { ...validPayload, fullName: "A" }; // Name < 2 chars
    const result = loanApplicationSchema.safeParse(invalid);

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toContain("Full name is required");
    }
  });

  it("should fail for invalid email address format", () => {
    const invalid = { ...validPayload, email: "not-an-email" };
    const result = loanApplicationSchema.safeParse(invalid);

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toContain("Invalid email address");
    }
  });

  it("should fail when agreedToTerms is false", () => {
    const invalid = { ...validPayload, agreedToTerms: false };
    const result = loanApplicationSchema.safeParse(invalid);

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toContain("You must agree to the terms");
    }
  });

  it("should fail for non-positive loan amounts", () => {
    const invalid = { ...validPayload, requestedAmount: -5000 };
    const result = loanApplicationSchema.safeParse(invalid);

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toContain("Loan amount must be positive");
    }
  });

  it("should fail when turnstileToken is empty", () => {
    const invalid = { ...validPayload, turnstileToken: "" };
    const result = loanApplicationSchema.safeParse(invalid);

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toContain("CAPTCHA verification is required");
    }
  });
});
