"use client";

import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Building2, ShieldCheck, Phone } from "lucide-react";
import { SECDisclosureFooter } from "@/components/SECDisclosureFooter";

const sections = [
  { id: "policy-statement", title: "1. Statement of Policy" },
  { id: "information-collected", title: "2. Information We Collect" },
  { id: "purpose-of-processing", title: "3. Purpose of Processing" },
  { id: "data-security", title: "4. Data Security Measures" },
  { id: "data-retention", title: "5. Data Retention Schedule" },
  { id: "data-subject-rights", title: "6. Rights of Data Subjects" },
  { id: "dpo-contact", title: "7. Data Protection Officer Contact" },
];

export function PrivacyContent() {
  return (
    <div className="w-full bg-slate-100/70 min-h-screen font-sans text-slate-800 antialiased">
      {/* Header Banner */}
      <header className="bg-[#0B192C] text-white py-10 sm:py-14 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-6">
            <Link 
              href="/" 
              className="inline-flex items-center text-xs text-slate-300 hover:text-[#E87722] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
              Return to Home Page
            </Link>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#E87722]">
              928 Credit Concept Lending Investor Corporation
            </p>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Data Privacy Policy
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2">
              <span><strong>Last Updated:</strong> August 1, 2026</span>
              <span>•</span>
              <span>Compliant with <strong>RA 10173 (Data Privacy Act of 2012)</strong></span>
              <span>•</span>
              <span>NPC Seal: <strong>NPC-REG-2026-928</strong></span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Document Layout */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-8">
        
        {/* Quick Navigation Bar */}
        <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-5 shadow-sm">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Table of Contents
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
            {sections.map((sec) => (
              <a 
                key={sec.id} 
                href={`#${sec.id}`}
                className="text-slate-700 hover:text-[#E87722] hover:underline transition-colors py-1"
              >
                {sec.title}
              </a>
            ))}
          </div>
        </div>

        {/* Policy Content Card */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 sm:p-10 lg:p-12 space-y-10 leading-relaxed text-sm text-slate-700">
          
          {/* Section 1 */}
          <section id="policy-statement" className="scroll-mt-24 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#0B192C] border-b border-slate-200 pb-2">
              1. Statement of Policy
            </h2>
            <p>
              928 Credit Concept Lending Investor Corporation (&quot;928 Lending&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is dedicated to protecting your personal and financial data. This Data Privacy Policy outlines our procedures for collecting, processing, storing, and securing personal information in accordance with <strong>Republic Act No. 10173</strong> (Data Privacy Act of 2012 or &quot;DPA&quot;), its Implementing Rules and Regulations (IRR), and relevant issuances of the National Privacy Commission (NPC) and the Securities and Exchange Commission (SEC).
            </p>
            <p>
              By accessing our website, applying for financing products, or utilizing our services, you consent to the data collection and processing practices described in this document.
            </p>
          </section>

          {/* Section 2 */}
          <section id="information-collected" className="scroll-mt-24 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#0B192C] border-b border-slate-200 pb-2">
              2. Information We Collect
            </h2>
            <p>
              To evaluate loan applications, verify borrower identity, and fulfill statutory compliance requirements, we collect the following categories of personal and financial information:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2 text-slate-700">
              <li>
                <strong>Personal Identity Data:</strong> Full legal name, date of birth, residential address, mobile phone number, personal email address, and valid government-issued ID numbers.
              </li>
              <li>
                <strong>Business & Financial Data:</strong> Registered business name, trade name, business permit details, annual gross revenue, requested loan amount, bank account details, and supporting financial documentation.
              </li>
              <li>
                <strong>Technical Security Data:</strong> IP address hashes, timestamp logs, device identifiers, browser parameters, and CAPTCHA challenge metrics provided via Cloudflare Turnstile for automated fraud and bot detection.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="purpose-of-processing" className="scroll-mt-24 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#0B192C] border-b border-slate-200 pb-2">
              3. Purpose of Processing
            </h2>
            <p>
              Your personal data is processed strictly for declared, specified, and legitimate business purposes:
            </p>
            <ol className="list-decimal list-outside pl-5 space-y-2 text-slate-700">
              <li>Evaluating loan applications and conducting credit underwriting assessments.</li>
              <li>Verifying identity and complying with mandatory Anti-Money Laundering (AML) standards under Bangko Sentral ng Pilipinas (BSP) and SEC regulations.</li>
              <li>Generating encrypted loan application packages and processing application documentation.</li>
              <li>Communicating application status updates and essential notifications via SMS and email.</li>
            </ol>
          </section>

          {/* Section 4 */}
          <section id="data-security" className="scroll-mt-24 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#0B192C] border-b border-slate-200 pb-2">
              4. Data Security Measures
            </h2>
            <p>
              We maintain reasonable and appropriate physical, technical, and organizational security measures to protect personal data against accidental or unlawful destruction, alteration, disclosure, or unauthorized access:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2 text-slate-700">
              <li>
                <strong>Data Encryption:</strong> Data in transit is protected using TLS 1.3 protocol. Stored documents and sensitive submission payloads are protected using AES-256 bit encryption algorithms.
              </li>
              <li>
                <strong>Access Authorization:</strong> Strict role-based access controls ensure that personal data is accessible only to authorized underwriting personnel.
              </li>
              <li>
                <strong>System Monitoring:</strong> Automated security monitors log system access events and filter out sensitive data attributes from error diagnostics.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="data-retention" className="scroll-mt-24 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#0B192C] border-b border-slate-200 pb-2">
              5. Data Retention Schedule
            </h2>
            <p>
              Personal data is retained only for the duration necessary to satisfy the purpose for which it was collected or to comply with statutory retention mandates under Philippine law:
            </p>
            
            <div className="overflow-x-auto border border-slate-200 rounded my-4">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 uppercase">
                  <tr>
                    <th className="py-3 px-4 font-semibold">Data Category</th>
                    <th className="py-3 px-4 font-semibold">Retention Period</th>
                    <th className="py-3 px-4 font-semibold">Regulatory Basis</th>
                    <th className="py-3 px-4 font-semibold">Action Upon Expiry</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-900">Temporary Submission Files</td>
                    <td className="py-3 px-4 text-slate-700">30 Days</td>
                    <td className="py-3 px-4 text-slate-600">DPA RA 10173 Sec. 11(e)</td>
                    <td className="py-3 px-4 text-slate-600">Automated Permanent Purge</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-900">Active Borrower Records</td>
                    <td className="py-3 px-4 text-slate-700">Duration of Loan + 5 Years</td>
                    <td className="py-3 px-4 text-slate-600">SEC MC No. 19 & BSP Rules</td>
                    <td className="py-3 px-4 text-slate-600">Secure Archival / Anonymization</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-900">Audit & Transaction Logs</td>
                    <td className="py-3 px-4 text-slate-700">5 Years</td>
                    <td className="py-3 px-4 text-slate-600">Anti-Money Laundering Act (AMLA)</td>
                    <td className="py-3 px-4 text-slate-600">Secure Destruction</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 6 */}
          <section id="data-subject-rights" className="scroll-mt-24 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#0B192C] border-b border-slate-200 pb-2">
              6. Rights of Data Subjects
            </h2>
            <p>
              Under Chapter IV of the Data Privacy Act of 2012, applicants and data subjects are entitled to statutory rights, including:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2 text-slate-700">
              <li><strong>Right to be Informed:</strong> To know whether personal data concerning you is being collected or processed.</li>
              <li><strong>Right to Access:</strong> To request access to personal data held by 928 Lending.</li>
              <li><strong>Right to Rectification:</strong> To request correction of inaccurate, incomplete, or outdated personal information.</li>
              <li><strong>Right to Erasure or Blocking:</strong> To request removal of your personal data from our systems, subject to statutory 5-year AMLA retention obligations.</li>
              <li><strong>Right to Object:</strong> To object to data processing where such processing is based on consent or legitimate interest.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section id="dpo-contact" className="scroll-mt-24 space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-lg sm:text-xl font-bold text-[#0B192C]">
              7. Data Protection Officer (DPO) Contact Information
            </h2>
            <p>
              If you have inquiries, privacy concerns, or wish to exercise any of your statutory data privacy rights, please direct your request to our Data Protection Officer:
            </p>

            <div className="bg-slate-50 border border-slate-200 p-5 rounded-md space-y-3 text-xs">
              <div className="font-bold text-[#0B192C] text-sm">Data Protection Officer</div>
              <div className="text-slate-600">928 Credit Concept Lending Investor Corporation</div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <div className="flex items-center space-x-2 text-slate-700">
                  <Mail className="w-4 h-4 text-[#E87722]" />
                  <span>Email: <a href="mailto:dpo@928lending.com" className="font-semibold hover:underline text-[#0B192C]">dpo@928lending.com</a></span>
                </div>
                <div className="flex items-center space-x-2 text-slate-700">
                  <Phone className="w-4 h-4 text-[#E87722]" />
                  <span>Phone: (044) 792 2913</span>
                </div>
              </div>

              <div className="flex items-start space-x-2 text-slate-700 pt-1">
                <MapPin className="w-4 h-4 text-[#E87722] shrink-0 mt-0.5" />
                <span>Address: Unit E 2nd Floor, Violago Plaza, Pagala, Baliwag City, Bulacan 3006</span>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* SEC Regulatory Disclosure Footer */}
      <SECDisclosureFooter />
    </div>
  );
}
