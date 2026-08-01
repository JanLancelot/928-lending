import { z } from "zod";

export const loanApplicationSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  businessName: z.string().min(2, "Business name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  requestedAmount: z.number().positive("Loan amount must be positive"),
  annualRevenue: z.number().nonnegative("Annual revenue must be non-negative"),
  turnstileToken: z.string().min(1, "CAPTCHA verification is required"),
});

export type LoanApplicationInput = z.infer<typeof loanApplicationSchema>;
