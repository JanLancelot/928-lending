import type { Metadata } from "next";
import Link from "next/link";
import { SectionNavigation } from "@/components/SectionNavigation";
import {
  ShieldCheck,
  Building2,
  Percent,
  SearchCheck,
  Scale,
  ArrowLeft,
  CheckCircle2,
  Award,
} from "lucide-react";

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
  { id: "repayment-collection", label: "5. Repayment & Fair Collection" },
  { id: "governing-law", label: "6. Governing Law" },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Hero Header Banner */}
      <section className="relative bg-[#0B192C] text-white py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E87722_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-[#E87722] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Return to Home
            </Link>
            <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700/80 px-3 py-1 rounded-full text-xs text-slate-300">
              <Award className="w-4 h-4 text-[#E87722]" />
              <span>SEC Reg. CS202002431 &bull; CA No. 3247</span>
            </div>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Terms &amp; Conditions <span className="text-[#E87722]">of Lending</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Standard commercial lending terms, credit authorization disclosures, and statutory compliance guidelines for 928 Credit Concept Lending Investor Corp.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span><strong>Last Revised:</strong> August 1, 2026</span>
              <span>&bull;</span>
              <span><strong>Compliance:</strong> SEC MC No. 19 &amp; Truth in Lending Act</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Quick Navigation Sidebar */}
          <aside className="hidden lg:block lg:col-span-4 space-y-6">
            <SectionNavigation title="Terms Navigation" items={navItems} />
          </aside>

          {/* Detailed Content */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Section 1 */}
            <section
              id="acceptance"
              className="scroll-mt-24 sm:scroll-mt-28 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 text-[#E87722] rounded-xl font-bold text-sm">
                  01
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B192C]">
                  Acceptance of Terms &amp; Regulatory Status
                </h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                By accessing our web platform, submitting a business loan application, or executing financing documentation with us, you confirm that you have read, understood, and agreed to be bound by these Terms and Conditions.
              </p>
              
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 font-bold text-xs text-[#0B192C]">
                  <ShieldCheck className="w-4 h-4 text-[#E87722]" /> Licensed Financing Institution
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>928 Credit Concept Lending Investor Corporation</strong> is a corporate financing entity registered with the Securities and Exchange Commission of the Philippines (SEC Reg. No. CS202002431) under Certificate of Authority (CA) No. 3247.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section
              id="eligibility"
              className="scroll-mt-24 sm:scroll-mt-28 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 text-[#E87722] rounded-xl font-bold text-sm">
                  02
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B192C]">
                  Borrower Eligibility Requirements
                </h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                To qualify for SME non-collateralized business financing, applicants must fulfill the following baseline criteria:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200/60 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Resident of the Philippines, aged 21 to 65 years old at loan maturity.</span>
                </div>
                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200/60 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Sole Proprietor, Partner, or Corporate Officer of an active SME operating in Luzon.</span>
                </div>
                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200/60 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Registered business entity with valid DTI / SEC registration &amp; BIR TIN.</span>
                </div>
                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200/60 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Verifiable commercial cashflows and active operational bank account.</span>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section
              id="truth-in-lending"
              className="scroll-mt-24 sm:scroll-mt-28 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 text-[#E87722] rounded-xl font-bold text-sm">
                  03
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B192C]">
                  Truth in Lending &amp; Interest Disclosures
                </h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                In compliance with Republic Act No. 3765 (Truth in Lending Act) and SEC Memorandum Circular No. 19, Series of 2019:
              </p>

              <div className="bg-[#0B192C] text-white p-5 rounded-xl space-y-3">
                <div className="flex items-center gap-2 font-bold text-sm text-[#E87722]">
                  <Percent className="w-4 h-4" /> Full Transparency Standards
                </div>
                <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                  <li><strong>Disclosure Statement:</strong> Prior to loan release, a detailed Disclosure Statement containing principal, interest, term, and schedule is issued to the borrower.</li>
                  <li><strong>Monthly Interest Rates:</strong> Ranging from 1.5% to 3.5% per month depending on credit assessment.</li>
                  <li><strong>Zero Undisclosed Fees:</strong> 928 Lending strictly prohibits hidden charges or unannounced fee subtractions.</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section
              id="credit-investigation"
              className="scroll-mt-24 sm:scroll-mt-28 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 text-[#E87722] rounded-xl font-bold text-sm">
                  04
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B192C]">
                  Credit Investigation &amp; Verification Authorization
                </h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                By submitting your application form, you grant express authority to 928 Lending to verify all provided business and personal data:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 text-xs space-y-1">
                  <div className="font-bold text-[#0B192C] flex items-center gap-1.5">
                    <SearchCheck className="w-4 h-4 text-[#E87722]" /> Reference Checks
                  </div>
                  <p className="text-slate-500">Contacting provided character and trade references solely for application confirmation.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 text-xs space-y-1">
                  <div className="font-bold text-[#0B192C] flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#E87722]" /> Statutory AML Verification
                  </div>
                  <p className="text-slate-500">Checking business filings with government registries under Anti-Money Laundering guidelines.</p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section
              id="repayment-collection"
              className="scroll-mt-24 sm:scroll-mt-28 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 text-[#E87722] rounded-xl font-bold text-sm">
                  05
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B192C]">
                  Repayment &amp; Fair Debt Collection Practices
                </h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Borrowers are expected to honor payment due dates strictly according to their selected frequency schedule (Monthly, Semi-Monthly, Weekly, or Daily).
              </p>
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200/80 text-xs text-emerald-900 space-y-1.5">
                <strong className="font-bold text-emerald-950 flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-emerald-600" /> SEC Fair Collection Standard (SEC MC No. 18, Series 2019)
                </strong>
                <p className="leading-relaxed text-emerald-800">
                  928 Lending strictly complies with SEC rules prohibiting unfair, abusive, or harassing collection tactics. We treat all clients with utmost professionalism, dignity, and respect.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section
              id="governing-law"
              className="scroll-mt-24 sm:scroll-mt-28 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 text-[#E87722] rounded-xl font-bold text-sm">
                  06
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B192C]">
                  Governing Law &amp; Data Privacy
                </h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                These Terms and Conditions are governed by and construed under the laws of the Republic of the Philippines. Any data submitted hereunder is handled in compliance with Republic Act No. 10173 (Data Privacy Act of 2012). For complete details, inspect our{" "}
                <Link href="/privacy-policy" className="text-[#E87722] hover:underline font-semibold">
                  Data Privacy Policy
                </Link>.
              </p>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
