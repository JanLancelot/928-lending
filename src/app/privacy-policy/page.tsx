import type { Metadata } from "next";
import Link from "next/link";
import { SectionNavigation } from "@/components/SectionNavigation";
import {
  ShieldCheck,
  Lock,
  UserCheck,
  Building2,
  Mail,
  ArrowLeft,
  Shield,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Data Privacy Policy | 928 Credit Concept Lending Investor Corp.",
  description:
    "Data Privacy Policy of 928 Credit Concept Lending Investor Corp. compliant with Philippine Republic Act No. 10173 (Data Privacy Act of 2012) and National Privacy Commission (NPC) regulations.",
};

const navItems = [
  { id: "statement", label: "1. Statement of Policy" },
  { id: "information-collected", label: "2. Information We Collect" },
  { id: "processing-purpose", label: "3. Purpose of Processing" },
  { id: "security-measures", label: "4. Security & Encryption" },
  { id: "data-subject-rights", label: "5. Your Data Subject Rights" },
  { id: "dpo-contact", label: "6. Contact DPO" },
];

export default function PrivacyPolicyPage() {
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
              <ShieldCheck className="w-4 h-4 text-[#E87722]" />
              <span>RA 10173 Compliant &bull; NPC Registered</span>
            </div>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Data Privacy <span className="text-[#E87722]">Policy</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              How 928 Credit Concept Lending Corp. collects, protects, processes, and respects your personal and financial information under the Data Privacy Act of 2012.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span><strong>Last Revised:</strong> August 1, 2026</span>
              <span>&bull;</span>
              <span><strong>Entity:</strong> 928 Credit Concept Lending Investor Corp.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Quick Navigation Sidebar */}
          <aside className="hidden lg:block lg:col-span-4 space-y-6">
            <SectionNavigation title="Policy Navigation" items={navItems} />
          </aside>

          {/* Detailed Content */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Section 1 */}
            <section
              id="statement"
              className="scroll-mt-24 sm:scroll-mt-28 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 text-[#E87722] rounded-xl font-bold text-sm">
                  01
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B192C]">
                  Statement of Policy
                </h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>928 Credit Concept Lending Corp.</strong> (&quot;928 Lending&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is deeply committed to maintaining the confidentiality, integrity, and security of your personal and financial information.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                This Data Privacy Policy outlines our standards for collecting, storing, processing, sharing, and safeguarding data in strict compliance with Republic Act No. 10173 (Data Privacy Act of 2012), its Implementing Rules and Regulations (IRR), and all applicable directives of the National Privacy Commission (NPC) and Securities and Exchange Commission (SEC).
              </p>
            </section>

            {/* Section 2 */}
            <section
              id="information-collected"
              className="scroll-mt-24 sm:scroll-mt-28 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 text-[#E87722] rounded-xl font-bold text-sm">
                  02
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B192C]">
                  Information We Collect
                </h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                When you submit a loan application or interact with our digital platform, we collect only data that is strictly necessary for credit assessment and statutory verification:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-xs text-[#0B192C]">
                    <UserCheck className="w-4 h-4 text-[#E87722]" /> Personal Identification
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                    <li>Full Name &amp; Date of Birth</li>
                    <li>Mobile Phone &amp; Email Address</li>
                    <li>Residential Address</li>
                    <li>Government-Issued ID details</li>
                  </ul>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-xs text-[#0B192C]">
                    <Building2 className="w-4 h-4 text-[#E87722]" /> Business &amp; Financial
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                    <li>Registered Business Name &amp; TIN</li>
                    <li>Annual Gross Revenue &amp; Cashflow</li>
                    <li>Requested Loan Amount &amp; Terms</li>
                    <li>Bank Account Details</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section
              id="processing-purpose"
              className="scroll-mt-24 sm:scroll-mt-28 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 text-[#E87722] rounded-xl font-bold text-sm">
                  03
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B192C]">
                  Purpose of Data Processing
                </h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Your personal data is used solely for legitimate, authorized lending operations:
              </p>
              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Evaluating credit eligibility and underwriting non-collateralized loan applications.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Performing Know-Your-Customer (KYC) identity verification and Anti-Money Laundering (AML) checks under BSP and SEC guidelines.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Generating password-protected, encrypted loan application packages and formal agreements.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Communicating application status updates via automated SMS notification and secure email.</span>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section
              id="security-measures"
              className="scroll-mt-24 sm:scroll-mt-28 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 text-[#E87722] rounded-xl font-bold text-sm">
                  04
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B192C]">
                  Data Security &amp; Encryption
                </h2>
              </div>
              
              <div className="bg-[#0B192C] text-white p-5 rounded-xl space-y-3">
                <div className="flex items-center gap-2 font-bold text-sm text-[#E87722]">
                  <Lock className="w-4 h-4" /> Enterprise Security Standards
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
                  <div>
                    <span className="font-bold text-white block mb-1">AES-256 Encryption at Rest:</span>
                    All generated application PDF files and database records are encrypted with military-grade 256-bit AES algorithms.
                  </div>
                  <div>
                    <span className="font-bold text-white block mb-1">TLS 1.3 Transport Encryption:</span>
                    Data in transit between your browser and our servers is protected by HTTPS with TLS 1.3 protocols.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section
              id="data-subject-rights"
              className="scroll-mt-24 sm:scroll-mt-28 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 text-[#E87722] rounded-xl font-bold text-sm">
                  05
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B192C]">
                  Your Rights as a Data Subject
                </h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Under Republic Act No. 10173, you possess statutory rights as a Data Subject:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 text-xs">
                  <strong className="text-[#0B192C] block mb-0.5">Right to be Informed</strong>
                  <span className="text-slate-500">To know how your data is collected and processed.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 text-xs">
                  <strong className="text-[#0B192C] block mb-0.5">Right to Access</strong>
                  <span className="text-slate-500">To request copies of your personal records.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 text-xs">
                  <strong className="text-[#0B192C] block mb-0.5">Right to Rectification</strong>
                  <span className="text-slate-500">To correct inaccurate or outdated information.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 text-xs">
                  <strong className="text-[#0B192C] block mb-0.5">Right to Erasure / Object</strong>
                  <span className="text-slate-500">To request data deletion, subject to SEC retention laws.</span>
                </div>
              </div>
            </section>

            {/* Section 6 - DPO Contact Card */}
            <section
              id="dpo-contact"
              className="scroll-mt-24 sm:scroll-mt-28 bg-[#0B192C] text-white rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden"
            >
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#E87722] uppercase tracking-wider">
                  <Mail className="w-4 h-4" /> Data Protection Officer
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Have Privacy Questions or Requests?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                  Our Data Protection Officer (DPO) is available to handle inquiries, access requests, or privacy concerns regarding your data.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-slate-800/80 p-4 rounded-xl border border-slate-700/80">
                  <div>
                    <div className="text-xs text-slate-400">Designated DPO Email:</div>
                    <a
                      href="mailto:dpo@928lending.com"
                      className="text-sm font-bold text-white hover:text-[#E87722] transition-colors"
                    >
                      dpo@928lending.com
                    </a>
                  </div>
                  <div className="sm:ml-auto">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-semibold">
                      <Shield className="w-3.5 h-3.5" /> Verified SEC &amp; NPC Entity
                    </span>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
