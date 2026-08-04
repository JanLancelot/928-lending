"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Lock, 
  Database, 
  Eye, 
  UserCheck, 
  Clock, 
  Mail, 
  ArrowLeft, 
  Building2, 
  FileText, 
  KeyRound, 
  CheckCircle2, 
  ChevronRight,
  Shield,
  Phone,
  MapPin,
  Calendar,
  Sparkles
} from "lucide-react";
import { SECDisclosureFooter } from "@/components/SECDisclosureFooter";

const sections = [
  { id: "policy-statement", title: "1. Statement of Policy", icon: ShieldCheck },
  { id: "information-collected", title: "2. Information We Collect", icon: Database },
  { id: "purpose-of-processing", title: "3. Purpose of Processing", icon: Eye },
  { id: "data-security", title: "4. Security & Encryption", icon: Lock },
  { id: "data-retention", title: "5. Data Retention Schedule", icon: Clock },
  { id: "data-subject-rights", title: "6. Data Subject Rights", icon: UserCheck },
  { id: "dpo-contact", title: "7. Contact DPO", icon: Mail },
];

const retentionSchedule = [
  {
    category: "Temporary Application Artifacts",
    description: "Unencrypted temporary PDF packages, raw submission payload dumps, and server temp files",
    retention: "30 Days",
    basis: "DPA RA 10173 Sec. 11(e)",
    action: "Automated Permanent Purge",
  },
  {
    category: "Active Loan Applicant PII",
    description: "Full name, business details, contact numbers, loan application terms",
    retention: "Duration of active loan + 5 Years",
    basis: "SEC MC No. 19 & BSP Regs",
    action: "Secure Archival & Anonymization",
  },
  {
    category: "Security Audit & System Logs",
    description: "IP address hashes, timestamp logs, rate limit events, Turnstile metrics",
    retention: "5 Years",
    basis: "Anti-Money Laundering Act (AMLA)",
    action: "Secure Permanent Purge",
  },
];

const dataSubjectRights = [
  {
    title: "Right to be Informed",
    desc: "To know how your personal data is collected, stored, and processed by 928 Lending.",
    badge: "Sec. 16(a)",
  },
  {
    title: "Right to Access",
    desc: "To request reasonable access to your personal data held in our records.",
    badge: "Sec. 16(c)",
  },
  {
    title: "Right to Rectification",
    desc: "To request correction or updating of inaccurate, incomplete, or outdated records.",
    badge: "Sec. 16(d)",
  },
  {
    title: "Right to Erasure & Blocking",
    desc: "To request deletion or blocking of personal data, subject to mandatory 5-year AMLA retention holds.",
    badge: "Sec. 16(e)",
  },
  {
    title: "Right to Object",
    desc: "To object to data processing for direct marketing or unauthorized third-party sharing.",
    badge: "Sec. 16(b)",
  },
  {
    title: "Right to Data Portability",
    desc: "To obtain a copy of your personal data in an electronic or structured format.",
    badge: "Sec. 18",
  },
];

export function PrivacyContent() {
  const [activeSection, setActiveSection] = useState("policy-statement");
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("dpo@928lending.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="w-full overflow-hidden bg-slate-50/50 min-h-screen">
      {/* Hero Header Section */}
      <section className="relative w-full bg-[#0B192C] text-white pt-8 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
        {/* Background glow & accents */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B192C] via-[#132A4A] to-[#0B192C] opacity-95" />
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#E87722]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Breadcrumb Bar */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800/80">
            <Link 
              href="/" 
              className="inline-flex items-center text-xs sm:text-sm font-semibold text-slate-300 hover:text-[#E87722] transition-colors duration-200 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-200 group-hover:-translate-x-1" />
              Back to Home
            </Link>
            <div className="flex items-center space-x-2 text-xs text-slate-400">
              <Shield className="w-3.5 h-3.5 text-[#E87722]" />
              <span>Official Regulatory Policy</span>
            </div>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E87722]/15 border border-[#E87722]/30 text-[#E87722] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Data Protection & Statutory Compliance</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Data Privacy Policy
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              928 Credit Concept Lending Corp. is committed to maintaining the confidentiality, integrity, and security of your personal data in accordance with Philippine Data Privacy laws.
            </p>

            {/* Badges / Metadata info */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center space-x-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
                <Calendar className="w-3.5 h-3.5 text-[#E87722]" />
                <span><strong>Last Updated:</strong> August 1, 2026</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span><strong>RA 10173</strong> Compliant</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
                <Building2 className="w-3.5 h-3.5 text-blue-400" />
                <span>NPC Reg: <strong>NPC-REG-2026-928</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Banner Cards */}
      <section className="relative z-20 -mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex items-start space-x-4">
            <div className="p-2.5 bg-[#E87722]/10 text-[#E87722] rounded-lg shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">RA 10173 Compliant</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">Full compliance with the Data Privacy Act of 2012 & NPC rules.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex items-start space-x-4">
            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">AES-256 & TLS 1.3</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">Bank-level data encryption in transit and at rest.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex items-start space-x-4">
            <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-lg shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Auto Data Purging</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">Temporary artifacts permanently purged within 30 days.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex items-start space-x-4">
            <div className="p-2.5 bg-amber-50 text-amber-600 rounded-lg shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Direct DPO Support</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">Dedicated channel to exercise your privacy rights anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body Section with Table of Contents */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Table of Contents (Sticky Sidebar) */}
          <aside className="lg:col-span-4 sticky top-24 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <div className="flex items-center space-x-2 pb-4 mb-4 border-b border-slate-100">
                <FileText className="w-4 h-4 text-[#E87722]" />
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Policy Sections</h3>
              </div>

              <nav className="space-y-1">
                {sections.map((sec) => {
                  const Icon = sec.icon;
                  const isActive = activeSection === sec.id;
                  return (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 group ${
                        isActive
                          ? "bg-[#0B192C] text-white font-semibold shadow-sm"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-[#E87722]" : "text-slate-400 group-hover:text-slate-600"}`} />
                        <span className="truncate">{sec.title}</span>
                      </div>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isActive ? "text-[#E87722] translate-x-0.5" : "text-slate-300 opacity-0 group-hover:opacity-100"}`} />
                    </a>
                  );
                })}
              </nav>

              <div className="mt-6 pt-4 border-t border-slate-100 bg-slate-50 p-4 rounded-xl space-y-2">
                <p className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Official Compliance Document
                </p>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Issued by 928 Credit Concept Lending Corp., regulated by the SEC and NPC.
                </p>
              </div>
            </div>
          </aside>

          {/* Content Column */}
          <main className="lg:col-span-8 space-y-10">

            {/* 1. Statement of Policy */}
            <div id="policy-statement" className="scroll-mt-28 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                <div className="p-2 bg-[#E87722]/10 text-[#E87722] rounded-lg">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E87722]">Section 01</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1. Statement of Policy</h2>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>928 Credit Concept Lending Corp.</strong> (&quot;928 Lending&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is deeply committed to safeguarding your personal and financial information. This Data Privacy Policy outlines how we collect, store, process, share, and protect personal data in strict compliance with <strong>Republic Act No. 10173</strong>, otherwise known as the <em>Data Privacy Act of 2012 (DPA)</em>, its Implementing Rules and Regulations (IRR), and relevant regulatory issuances of the <strong>National Privacy Commission (NPC)</strong> and <strong>Securities and Exchange Commission (SEC)</strong>.
              </p>

              <div className="bg-slate-50 border-l-4 border-[#E87722] p-4 rounded-r-xl text-xs text-slate-700 leading-relaxed">
                By accessing our website, submitting loan applications, or interacting with our services, you acknowledge and agree to the data processing practices described in this policy manual.
              </div>
            </div>

            {/* 2. Information We Collect */}
            <div id="information-collected" className="scroll-mt-28 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Section 02</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">2. Information We Collect</h2>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When you submit a loan application or interact with our digital platform, we collect personal and financial information necessary to evaluate your creditworthiness and process your request:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 space-y-2">
                  <div className="flex items-center space-x-2 text-[#0B192C] font-bold text-xs">
                    <UserCheck className="w-4 h-4 text-[#E87722]" />
                    <span>Personal Identification</span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                    <li>Full Name & Date of Birth</li>
                    <li>Mobile Phone Number</li>
                    <li>Email Address</li>
                    <li>Residential Address</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 space-y-2">
                  <div className="flex items-center space-x-2 text-[#0B192C] font-bold text-xs">
                    <Building2 className="w-4 h-4 text-blue-600" />
                    <span>Business & Financial</span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                    <li>Registered Business Name</li>
                    <li>Annual Gross Revenue</li>
                    <li>Requested Loan Amount</li>
                    <li>Bank Account Details</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 space-y-2">
                  <div className="flex items-center space-x-2 text-[#0B192C] font-bold text-xs">
                    <Lock className="w-4 h-4 text-emerald-600" />
                    <span>Technical & Device</span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                    <li>IP Address & Hashing</li>
                    <li>Device Identifier</li>
                    <li>Browser & OS Metrics</li>
                    <li>Turnstile Token Payload</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Purpose of Data Processing */}
            <div id="purpose-of-processing" className="scroll-mt-28 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">Section 03</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">3. Purpose of Data Processing</h2>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Your personal data is collected and processed exclusively for legitimate business and regulatory purposes:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                  <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-medium">Evaluating and processing credit and loan applications.</span>
                </div>
                <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                  <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-medium">Performing Anti-Money Laundering (AML) checks under BSP & SEC guidelines.</span>
                </div>
                <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                  <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-medium">Generating encrypted application documents and password-protected PDF packages.</span>
                </div>
                <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                  <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-medium">Communicating application updates via SMS and encrypted email transmission.</span>
                </div>
              </div>
            </div>

            {/* 4. Data Security & Encryption */}
            <div id="data-security" className="scroll-mt-28 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Section 04</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">4. Data Security & Encryption</h2>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We implement robust technical, organizational, and physical security controls to safeguard your data against unauthorized access, disclosure, or alteration:
              </p>

              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-4 rounded-xl border border-slate-200/70 bg-slate-50/50">
                  <KeyRound className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Encryption at Rest & Transit</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Form submissions and generated PDF application artifacts are encrypted at rest with AES-256-GCM. All HTTP communication is secured via TLS 1.3 with HSTS headers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 rounded-xl border border-slate-200/70 bg-slate-50/50">
                  <Phone className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Out-of-Band Password Delivery</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Encryption passwords required to open application PDF documents are sent via two-factor SMS directly to applicant mobile numbers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 rounded-xl border border-slate-200/70 bg-slate-50/50">
                  <UserCheck className="w-5 h-5 text-[#E87722] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Access Control & Automated Scrubbing</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Role-based access restrictions limit data to authorized underwriters. Automated Sentry logging rules filter out sensitive PII to prevent accidental leakage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Data Retention Schedule */}
            <div id="data-retention" className="scroll-mt-28 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">Section 05</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">5. Statutory Data Retention Schedule</h2>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                In compliance with Philippine regulatory requirements, personal data is retained only for the period necessary to fulfill its declared purpose or statutory legal holds:
              </p>

              {/* Styled Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#0B192C] text-white uppercase tracking-wider text-[10px]">
                    <tr>
                      <th className="py-3 px-4 font-semibold">Data Category</th>
                      <th className="py-3 px-4 font-semibold">Retention Period</th>
                      <th className="py-3 px-4 font-semibold">Basis</th>
                      <th className="py-3 px-4 font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {retentionSchedule.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          {row.category}
                          <p className="text-[11px] font-normal text-slate-500 mt-0.5">{row.description}</p>
                        </td>
                        <td className="py-3.5 px-4 text-[#E87722] font-semibold whitespace-nowrap">{row.retention}</td>
                        <td className="py-3.5 px-4 text-slate-600 font-medium whitespace-nowrap">{row.basis}</td>
                        <td className="py-3.5 px-4 text-slate-700 whitespace-nowrap">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-800 border border-slate-200">
                            {row.action}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 6. Data Subject Rights */}
            <div id="data-subject-rights" className="scroll-mt-28 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600">Section 06</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">6. Your Rights as a Data Subject</h2>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Under Chapter IV of RA 10173, you possess statutory rights regarding your personal information:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dataSubjectRights.map((right, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 space-y-1.5 hover:border-[#E87722]/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-slate-900">{right.title}</h4>
                      <span className="text-[10px] font-semibold px-2 py-0.5 bg-slate-200 text-slate-700 rounded-full">{right.badge}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{right.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. Contact DPO Card */}
            <div id="dpo-contact" className="scroll-mt-28 bg-[#0B192C] text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute right-0 top-0 w-64 h-64 bg-[#E87722]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
                <div className="p-2.5 bg-[#E87722] text-white rounded-xl">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E87722]">Section 07</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">7. Contact Our Data Protection Officer</h2>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                If you have questions, privacy concerns, or wish to exercise any of your statutory Data Subject Rights, please contact our designated Data Protection Officer (DPO):
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-900/90 p-5 rounded-xl border border-slate-800">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Data Protection Officer</h4>
                    <p className="text-xs text-slate-400">928 Credit Concept Lending Corp.</p>
                  </div>

                  <div className="flex items-center space-x-2 text-xs">
                    <Mail className="w-4 h-4 text-[#E87722]" />
                    <span className="text-slate-300">Email:</span>
                    <button 
                      onClick={copyEmail}
                      className="font-bold text-[#E87722] hover:underline cursor-pointer flex items-center gap-1"
                    >
                      dpo@928lending.com
                    </button>
                    {copiedEmail && <span className="text-[10px] text-emerald-400 font-semibold ml-1">Copied!</span>}
                  </div>
                </div>

                <div className="space-y-3 border-t md:border-t-0 md:border-l border-slate-800 pt-3 md:pt-0 md:pl-6">
                  <div className="flex items-start space-x-2 text-xs">
                    <MapPin className="w-4 h-4 text-[#E87722] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-200">Office Location</p>
                      <p className="text-slate-400 leading-relaxed">
                        Unit E 2nd Floor, Violago Plaza, Pagala, Baliwag City, Bulacan 3006
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </main>
        </div>
      </section>

      {/* Mandatory Statutory SEC Disclosure Footer */}
      <SECDisclosureFooter />
    </div>
  );
}
