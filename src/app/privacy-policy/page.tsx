import type { Metadata } from "next";
import Link from "next/link";
import { TableOfContents } from "@/components/TableOfContents";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Data Privacy Policy | 928 Credit Concept Lending Investor Corp.",
  description:
    "Data Privacy Policy of 928 Credit Concept Lending Investor Corp. compliant with Philippine Republic Act No. 10173 (Data Privacy Act of 2012).",
};

const navItems = [
  { id: "statement", label: "1. Statement of Policy" },
  { id: "information-collected", label: "2. Information We Collect" },
  { id: "processing-purpose", label: "3. Purpose of Processing" },
  { id: "security-measures", label: "4. Security & Retention" },
  { id: "data-subject-rights", label: "5. Rights of the Data Subject" },
  { id: "privacy-contact", label: "6. Privacy Contact & Inquiries" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen text-slate-900 flex flex-col font-sans">
      {/* Header Banner */}
      <section className="bg-[#0B192C] text-white py-12 sm:py-14 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-[#E87722] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Home
          </Link>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Data Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              928 Credit Concept Lending Investor Corp. &bull; Compliant with Republic Act No. 10173 (Data Privacy Act of 2012)
            </p>
            <p className="text-xs text-slate-400">
              Effective Date: August 1, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Table of Contents Sidebar */}
          <aside className="hidden lg:block lg:col-span-4">
            <TableOfContents title="Table of Contents" items={navItems} />
          </aside>

          {/* Legal Document Article */}
          <article className="lg:col-span-8 bg-white rounded-xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-10 text-sm leading-relaxed text-slate-700">
            
            {/* Section 1 */}
            <section id="statement" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
              <h2 className="text-lg font-bold text-[#0B192C] border-b border-slate-200 pb-2">
                1. Statement of Policy
              </h2>
              <p>
                <strong>928 Credit Concept Lending Investor Corporation</strong> (&quot;928 Lending&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your right to privacy and is committed to ensuring that all personal data collected from applicants, borrowers, and users is processed in accordance with the principles of transparency, legitimate purpose, and proportionality under Republic Act No. 10173, otherwise known as the Data Privacy Act of 2012 (DPA), its Implementing Rules and Regulations (IRR), and applicable Philippine data privacy regulations.
              </p>
            </section>

            {/* Section 2 */}
            <section id="information-collected" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
              <h2 className="text-lg font-bold text-[#0B192C] border-b border-slate-200 pb-2">
                2. Information We Collect
              </h2>
              <p>
                In the course of evaluating and processing credit applications, we collect personal and financial information necessary to verify identity, establish creditworthiness, and fulfill legal requirements:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  <strong>Personal Identity Information:</strong> Full legal name, date of birth, nationality, civil status, contact numbers, email address, residential address, and government-issued identification details (e.g., SSS, GSIS, TIN, Passport, Driver&apos;s License, or National ID).
                </li>
                <li>
                  <strong>Business &amp; Commercial Data:</strong> Business trade name, DTI/SEC registration numbers, BIR Tax Identification Number (TIN), office address, years of operation, gross annual revenue, and commercial bank account details.
                </li>
                <li>
                  <strong>Financial &amp; Credit Information:</strong> Financial statements, bank statements, proof of income, existing credit obligations, and trade reference information.
                </li>
                <li>
                  <strong>Technical Data:</strong> IP address, device specifications, browser type, and verification metrics via Cloudflare Turnstile during digital application submission.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="processing-purpose" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
              <h2 className="text-lg font-bold text-[#0B192C] border-b border-slate-200 pb-2">
                3. Purpose of Data Processing
              </h2>
              <p>
                Your personal data is collected and processed strictly for legitimate commercial and regulatory purposes, including:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>Underwriting, evaluating, and processing business loan applications.</li>
                <li>Conducting Know-Your-Customer (KYC) procedures and Anti-Money Laundering (AML) verifications pursuant to BSP and SEC regulations.</li>
                <li>Preparing password-protected loan agreements and disclosure documentation.</li>
                <li>Communicating application progress, loan decisions, and account notifications.</li>
                <li>Complying with statutory reporting requirements established by government regulatory authorities.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="security-measures" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
              <h2 className="text-lg font-bold text-[#0B192C] border-b border-slate-200 pb-2">
                4. Data Security &amp; Retention
              </h2>
              <p>
                We enforce technical, organizational, and physical security measures to prevent unauthorized access, disclosure, alteration, or destruction of personal records:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  <strong>Encryption Standard:</strong> Digital form transmissions are secured using TLS 1.3 encryption. Application documents and PDF records are encrypted at rest using AES-256 standards.
                </li>
                <li>
                  <strong>Access Control:</strong> Access to borrower records is restricted strictly to authorized credit underwriting personnel operating under non-disclosure obligations.
                </li>
                <li>
                  <strong>Data Retention:</strong> Personal information is retained only for as long as necessary to fulfill the purpose of processing or to comply with SEC and BSP statutory record retention mandates.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="data-subject-rights" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
              <h2 className="text-lg font-bold text-[#0B192C] border-b border-slate-200 pb-2">
                5. Rights of the Data Subject
              </h2>
              <p>
                As a Data Subject under Republic Act No. 10173, you are entitled to exercise the following statutory rights:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li><strong>Right to be Informed:</strong> To be notified whether personal data pertaining to you is being collected or processed.</li>
                <li><strong>Right to Access:</strong> To request reasonable access to your personal data held in our system.</li>
                <li><strong>Right to Rectification:</strong> To request correction of inaccurate, erroneous, or outdated records.</li>
                <li><strong>Right to Erasure or Blocking:</strong> To suspend, withdraw, or order the removal of your personal data, subject to legal and statutory retention constraints.</li>
                <li><strong>Right to File a Complaint:</strong> To lodge a complaint if your privacy rights have been violated, subject to statutory guidelines.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="privacy-contact" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
              <h2 className="text-lg font-bold text-[#0B192C] border-b border-slate-200 pb-2">
                6. Privacy Contact &amp; Inquiries
              </h2>
              <p>
                If you have questions, inquiries, or wish to exercise your rights regarding your personal data, please direct your communication to our company privacy team:
              </p>
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-1 text-xs text-slate-700">
                <p className="font-bold text-[#0B192C] text-sm">928 Credit Concept Lending Investor Corporation</p>
                <p>Unit E 2nd Floor, Violago Plaza, Pagala, Baliwag City, Bulacan 3006</p>
                <p>Telephone: (044) 792-2913</p>
                <p className="pt-1">Email: <a href="mailto:928creditconcept@gmail.com" className="text-[#E87722] font-semibold hover:underline">928creditconcept@gmail.com</a></p>
              </div>
            </section>

          </article>
        </div>
      </main>
    </div>
  );
}
