# 928 Lending — Data Retention & Data Privacy Compliance Policy Manual

This document outlines the mandatory compliance policies, data retention schedules, anonymization protocols, and Data Subject Rights mechanisms for **928 Credit Concept Lending Corp.**, pursuant to **Republic Act No. 10173 (Data Privacy Act of 2012)**, **SEC Memorandum Circular No. 19**, and relevant issuances of the **National Privacy Commission (NPC)** and **Bangko Sentral ng Pilipinas (BSP)**.

---

## 1. Statutory Data Retention Schedule

Under Philippine regulatory frameworks, personal and financial data must be retained only as long as necessary for fulfillment of declared credit evaluation purposes or statutory compliance mandates.

| Data Category | Description | Retention Period | Regulatory Basis | Action Upon Expiration |
| :--- | :--- | :--- | :--- | :--- |
| **Temporary Application Artifacts** | Unencrypted temporary PDF packages, raw submission payload dumps, and server temp files | **30 Days** | DPA RA 10173 Sec. 11(e) | Automated Permanent Purge |
| **Active Loan Applicant PII** | Full name, business details, contact numbers, loan application terms | Duration of active loan + **5 Years** | SEC MC No. 19 & BSP Regs | Secure Archival & Anonymization |
| **Security Audit & System Logs** | IP address hashes, timestamp logs, rate limit events, HMAC failure events | **5 Years** | Anti-Money Laundering Act (AMLA) RA 9160 | Secure Purging |

---

## 2. Technical Security & Encryption Architecture

1. **Transit Encryption**: All HTTP requests are strictly encrypted in transit using **TLS 1.3** and enforced via **HSTS** (`max-age=63072000`).
2. **At-Rest Document Protection**: Form submissions and generated PDF packages are protected using **AES-256-GCM** bit encryption.
3. **Out-of-Band Password Delivery**: Encryption keys to open application PDF documents are sent via two-factor **Twilio SMS** to applicant mobile numbers.
4. **PII Redaction in Error Logs**: Sentry error monitoring automatically redacts sensitive PII attributes (`fullName`, `email`, `phone`, `turnstileToken`) via `scrubPII` filters in [`src/lib/sentry.ts`](file:///Users/janlancelot/Desktop/Projects/928-lending/src/lib/sentry.ts).

---

## 3. Automated Data Anonymization Engine

When records exceed their statutory retention limits, the automated retention engine (`src/lib/retention.ts`) executes recursive anonymization:

```ts
import { evaluateRetentionStatus, anonymizeRecord } from "@/lib/retention";

// Example retention evaluation for a 30-day temporary artifact
const status = evaluateRetentionStatus(recordCreatedAt, "TEMP_ARTIFACT");

if (status.isExpired) {
  const sanitizedRecord = anonymizeRecord(originalPayload);
  // Persist zero-PII anonymized summary or purge file from disk
}
```

---

## 4. Data Subject Rights Request Protocol (RA 10173)

Data subjects (loan applicants) may exercise statutory privacy rights under RA 10173 by contacting the Data Protection Officer:

- **Email**: `dpo@928lending.com`
- **Right to Access**: Applicants may request a machine-readable report of personal data held.
- **Right to Rectification**: Inaccurate credit details may be updated upon identity verification.
- **Right to Erasure / Blocking**: Applicants may request deletion of their records, subject to mandatory 5-year AMLA legal retention holds.
