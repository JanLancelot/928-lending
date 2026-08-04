import type { Metadata } from "next";
import Link from "next/link";
import { TableOfContents } from "@/components/TableOfContents";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | 928 Credit Concept Lending Investor Corp.",
  description:
    "Terms and Conditions of Lending for 928 Credit Concept Lending Investor Corp. Regulated by the Securities and Exchange Commission (SEC CS202002431 / CA No. 3247).",
};

const navItems = [
  { id: "acceptance", label: "1. Acceptance & SEC Status" },
  { id: "eligibility", label: "2. Borrower Eligibility" },
  { id: "truth-in-lending", label: "3. Truth in Lending & Rates" },
  { id: "credit-investigation", label: "4. Credit Investigation" },
  { id: "repayment-collection", label: "5. Repayment & Collection" },
  { id: "governing-law", label: "6. Governing Law" },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen text-slate-900 flex flex-col font-sans">
      {/* Header Banner */}
      <section className="bg-[#0B192C] text-[#ffffff] py-12 sm:py-14 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-[#E87722] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Home
          </Link>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Terms &amp; Conditions of Lending
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              928 Credit Concept Lending Investor Corp. &bull; SEC Reg. No. CS202002431 &bull; CA No. 3247
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
            <section id="acceptance" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
              <h2 className="text-lg font-bold text-[#0B192C] border-b border-slate-200 pb-2">
                1. Acceptance of Terms &amp; Regulatory Status
              </h2>
              <p>
                By accessing our platform, submitting an online loan application, or executing financing documentation with us, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions of Lending.
              </p>
              <p>
                <strong>928 Credit Concept Lending Investor Corporation</strong> (&quot;928 Lending&quot;) is a corporate financing entity duly organized under the laws of the Republic of the Philippines, registered with the Securities and Exchange Commission (SEC Reg. No. CS202002431) under Certificate of Authority (CA) No. 3247.
              </p>
            </section>

            {/* Section 2 */}
            <section id="eligibility" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
              <h2 className="text-lg font-bold text-[#0B192C] border-b border-slate-200 pb-2">
                2. Borrower Eligibility Requirements
              </h2>
              <p>
                To qualify for SME non-collateralized business financing from 928 Lending, applicants must satisfy the following baseline eligibility criteria:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>Be a legal resident of the Philippines, aged 21 to 65 years old at loan maturity.</li>
                <li>Be a sole proprietor, partner, or authorized corporate signatory of an active Small or Medium Enterprise (SME) operating in Luzon.</li>
                <li>Provide valid government-issued identification and business registration documents (DTI/SEC/BIR).</li>
                <li>Demonstrate verifiable operational business cash flows and active commercial bank accounts.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="truth-in-lending" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
              <h2 className="text-lg font-bold text-[#0B192C] border-b border-slate-200 pb-2">
                3. Truth in Lending &amp; Interest Disclosures
              </h2>
              <p>
                In strict compliance with Republic Act No. 3765 (Truth in Lending Act) and SEC Memorandum Circular No. 19, Series of 2019:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  <strong>Disclosure Statement:</strong> Prior to loan release, a comprehensive Disclosure Statement detailing the principal amount, interest rate, finance charges, net proceeds, and payment schedule is provided to the borrower.
                </li>
                <li>
                  <strong>Interest Rates:</strong> Monthly interest rates range from 1.5% to 3.5% per month, calculated based on risk evaluation and tenure.
                </li>
                <li>
                  <strong>Transparency Guarantee:</strong> No undisclosed fees or hidden charges will be deducted from your account.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="credit-investigation" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
              <h2 className="text-lg font-bold text-[#0B192C] border-b border-slate-200 pb-2">
                4. Credit Investigation &amp; Verification Authorization
              </h2>
              <p>
                By submitting an application, you grant express authority to 928 Lending and its accredited credit evaluation officers to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>Verify submitted personal, employment, and business details with relevant government agencies, financial institutions, and credit bureaus.</li>
                <li>Conduct background and creditworthiness investigations in compliance with Anti-Money Laundering Regulations (RA 9160 as amended).</li>
                <li>Contact provided character or trade references solely for application confirmation.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="repayment-collection" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
              <h2 className="text-lg font-bold text-[#0B192C] border-b border-slate-200 pb-2">
                5. Repayment &amp; Fair Debt Collection Practices
              </h2>
              <p>
                Borrowers are obligated to adhere strictly to the agreed repayment schedule (Monthly, Semi-Monthly, Weekly, or Daily instalments).
              </p>
              <p>
                928 Lending strictly complies with SEC Memorandum Circular No. 18, Series of 2019 regarding Fair Debt Collection Practices. We prohibit any form of harassment, unreasonable pressure, false representation, or breach of confidentiality during collection activities.
              </p>
            </section>

            {/* Section 6 */}
            <section id="governing-law" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
              <h2 className="text-lg font-bold text-[#0B192C] border-b border-slate-200 pb-2">
                6. Governing Law &amp; Data Privacy
              </h2>
              <p>
                These Terms and Conditions are governed by and construed in accordance with the laws of the Republic of the Philippines. All personal data processed hereunder is protected under Republic Act No. 10173 (Data Privacy Act of 2012). For detailed information on data processing, please inspect our{" "}
                <Link href="/privacy-policy" className="text-[#E87722] font-semibold hover:underline">
                  Data Privacy Policy
                </Link>.
              </p>
            </section>

          </article>
        </div>
      </main>
    </div>
  );
}
