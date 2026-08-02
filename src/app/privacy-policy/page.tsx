import type { Metadata } from "next";
import Link from "next/link";
import { SECDisclosureFooter } from "@/components/SECDisclosureFooter";

export const metadata: Metadata = {
  title: "Privacy Policy | 928 Lending",
  description:
    "Data Privacy Policy of 928 Credit Concept Lending Corp. compliant with Philippine Republic Act No. 10173 (Data Privacy Act of 2012).",
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <header>
        <div>
          <Link href="/">
            928 <span>Lending</span>
          </Link>
          <Link href="/">
            &larr; Back to Home
          </Link>
        </div>
      </header>

      <main>
        <div>
          <h1>Data Privacy Policy</h1>
          <p>
            Last Updated: August 1, 2026 &bull; Compliant with RA 10173 (Data Privacy Act of 2012)
          </p>
        </div>

        <section>
          <h2>1. Statement of Policy</h2>
          <p>
            928 Credit Concept Lending Corp. (&quot;928 Lending&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal and financial information. This Data Privacy Policy outlines how we collect, store, process, share, and protect personal data in compliance with Republic Act No. 10173, otherwise known as the Data Privacy Act of 2012 (DPA), its Implementing Rules and Regulations (IRR), and relevant issuances of the National Privacy Commission (NPC) and Securities and Exchange Commission (SEC).
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>
            When you submit a loan application or interact with our platform, we collect personal and financial information necessary to evaluate your eligibility, including:
          </p>
          <ul>
            <li><strong>Personal Identification Data:</strong> Full name, date of birth, mobile phone number, email address, and residential address.</li>
            <li><strong>Business & Financial Data:</strong> Registered business name, trade name, annual gross revenue, requested loan amount, bank details, and financial statements.</li>
            <li><strong>Technical & Device Data:</strong> IP address, device identifier, browser type, and CAPTCHA token metrics via Cloudflare Turnstile.</li>
          </ul>
        </section>

        <section>
          <h2>3. Purpose of Data Processing</h2>
          <p>
            Your personal data is collected and processed exclusively for legitimate business purposes:
          </p>
          <ul>
            <li>Evaluating and processing credit and loan applications.</li>
            <li>Performing identity verification and Anti-Money Laundering (AML) checks under BSP and SEC guidelines.</li>
            <li>Generating encrypted loan documentation and password-protected PDF application packages.</li>
            <li>Communicating application updates via SMS and encrypted email transmission.</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Security & Encryption</h2>
          <p>
            We implement rigorous technical, organizational, and physical security measures to safeguard your information:
          </p>
          <ul>
            <li><strong>Encryption at Rest & Transit:</strong> Form submissions and generated PDF application artifacts are protected using AES-256 bit encryption and TLS 1.3 encrypted transport layer protocol.</li>
            <li><strong>Out-of-Band Password Delivery:</strong> Encryption passwords for application documents are delivered via secure two-factor SMS channels.</li>
            <li><strong>Access Control:</strong> Strict role-based access control limits data access to authorized credit underwriting personnel only.</li>
          </ul>
        </section>

        <section>
          <h2>5. Your Rights as a Data Subject</h2>
          <p>
            Under RA 10173, you are entitled to the following statutory rights as a Data Subject:
          </p>
          <ul>
            <li><strong>Right to be Informed:</strong> To know how your personal data is being processed.</li>
            <li><strong>Right to Access:</strong> To request access to your personal data in our records.</li>
            <li><strong>Right to Object & Erasure:</strong> To object to processing or request deletion of data, subject to legal and regulatory retention requirements.</li>
            <li><strong>Right to Rectification:</strong> To request correction of inaccurate or incomplete personal records.</li>
          </ul>
        </section>

        <section>
          <h2>6. Contact Our Data Protection Officer (DPO)</h2>
          <p>
            For questions, requests, or concerns regarding your privacy rights or this policy, please contact our designated Data Protection Officer at:
          </p>
          <div>
            <p>Data Protection Officer</p>
            <p>928 Credit Concept Lending Corp.</p>
            <p>Email: <span>dpo@928lending.com</span></p>
          </div>
        </section>
      </main>

      <SECDisclosureFooter />
    </div>
  );
}
