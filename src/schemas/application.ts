import { z } from "zod";

export const loanApplicationSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  businessName: z.string().min(2, "Business name is required"),
  businessAddress: z.string().min(5, "Business address is required"),
  businessType: z.string().min(2, "Business type is required"),
  yearsInBusiness: z.number().nonnegative("Years in business must be non-negative"),
  tinNumber: z.string().min(5, "Registration No. / TIN is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(13, "Enter a valid Philippine mobile number"),
  requestedAmount: z.number().positive("Loan amount must be positive"),
  annualRevenue: z.number().nonnegative("Annual revenue must be non-negative"),
  purposeOfLoan: z.string().min(2, "Purpose of loan is required"),
  agreedToTerms: z.boolean().refine(val => val === true, "You must agree to the terms and conditions"),
  turnstileToken: z.string().min(1, "CAPTCHA verification is required"),
});

export type LoanApplicationInput = z.infer<typeof loanApplicationSchema>;
