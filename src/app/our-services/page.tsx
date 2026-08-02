import Link from "next/link";
import Image from "next/image";
import { 
  Building2, 
  CheckCircle2, 
  ChevronRight, 
  Zap, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  FileText,
  Search,
  FileCheck,
  CheckCircle,
  Banknote,
  HelpCircle,
  BadgeCheck,
  Lock,
  Clock,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OurServicesPage() {
  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Compact Page Header Label */}
      <section className="relative w-full bg-white pt-0 pb-6 lg:pb-8 min-h-[140px] sm:min-h-[160px] flex items-center overflow-hidden">
        {/* Banner Content, Background & Overlays Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Background image bg.jpg constrained within max-w-7xl width */}
          <div className="absolute inset-y-0 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8 pointer-events-none z-0 overflow-hidden opacity-30">
            <Image
              src="/images/bg.jpg"
              alt="Background Pattern"
              fill
              className="object-cover object-left"
              priority
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center relative z-10">
            
            {/* Left Column: Page Title & Subtext */}
            <div className="lg:col-span-6 space-y-2 z-20 pl-2 sm:pl-6 lg:pl-10 my-auto flex flex-col justify-center">
              <div className="space-y-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0B192C] leading-none">
                  Business Loan Solutions
                </h1>
              </div>

              <div className="w-12 h-1 bg-[#E87722] rounded-full"></div>

              <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
                Helping Businesses Move Forward.
              </p>
            </div>

            {/* Right Column: Compact Feathered Image Placeholder */}
            <div className="lg:col-span-6 relative min-h-[140px] sm:min-h-[160px] lg:min-h-[180px] flex items-center justify-end">
              <div 
                className="absolute inset-0 z-10 overflow-hidden"
                style={{
                  WebkitMaskImage: "radial-gradient(ellipse 85% 85% at 75% 50%, black 35%, transparent 75%)",
                  maskImage: "radial-gradient(ellipse 85% 85% at 75% 50%, black 35%, transparent 75%)",
                }}
              >
                <Image
                  src="/images/hero_meeting.png"
                  alt="928 Credit Concept Financial Advisory Team"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

          </div>

          {/* Connected Overlays (Compact scale matching site design system) */}
          <div className="absolute top-0 right-4 sm:right-6 lg:right-8 w-[20%] sm:w-[15%] lg:w-[12%] max-w-[150px] pointer-events-none z-20">
            <Image
              src="/images/overlay top.png"
              alt="Top Overlay"
              width={632}
              height={385}
              className="w-full h-auto object-contain object-right-top"
              priority
            />
          </div>

          <div className="absolute bottom-0 right-4 sm:right-6 lg:right-8 w-[20%] sm:w-[15%] lg:w-[12%] max-w-[150px] pointer-events-none z-30">
            <Image
              src="/images/overlay bottom.png"
              alt="Bottom Overlay"
              width={632}
              height={385}
              className="w-full h-auto object-contain object-right-bottom"
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Page Content (Matching max-w-6xl margin spacing) */}
      <section className="py-8 sm:py-12 lg:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-10 sm:space-y-14">

          {/* Section 1: Main Service (Large Card) */}
          <div className="bg-[#0B192C] text-white rounded-2xl p-8 sm:p-10 lg:p-12 shadow-xl border border-slate-800 space-y-6">
            <div className="space-y-2">
              <span className="text-[#E87722] font-extrabold text-xs uppercase tracking-wider">Main Service</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Non-Collateralized Business Loan
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                Provide financing without requiring traditional collateral.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#E87722]">Ideal for:</p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl">
                  Working Capital
                </span>
                <span className="bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl">
                  Inventory
                </span>
                <span className="bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl">
                  Equipment
                </span>
                <span className="bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl">
                  Expansion
                </span>
                <span className="bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl">
                  Business Operations
                </span>
              </div>
            </div>
          </div>

          {/* Section 2: Why Businesses Choose Us (Grid of 6) */}
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-[#E87722] font-extrabold text-xs uppercase tracking-wider">Advantages</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C]">Why Businesses Choose Us</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                <Zap className="w-6 h-6 text-[#E87722]" />
                <h4 className="font-bold text-sm text-[#0B192C]">Fast Approval</h4>
                <p className="text-xs text-slate-500">Quick turnaround times for business loan evaluations.</p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                <Users className="w-6 h-6 text-[#E87722]" />
                <h4 className="font-bold text-sm text-[#0B192C]">Professional Team</h4>
                <p className="text-xs text-slate-500">Dedicated specialists operating with full corporate standards.</p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                <TrendingUp className="w-6 h-6 text-[#E87722]" />
                <h4 className="font-bold text-sm text-[#0B192C]">Flexible Financing</h4>
                <p className="text-xs text-slate-500">Loan packages tailored to your exact capital requirements.</p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                <BadgeCheck className="w-6 h-6 text-[#E87722]" />
                <h4 className="font-bold text-sm text-[#0B192C]">Transparent Process</h4>
                <p className="text-xs text-slate-500">Clear rates, zero hidden charges, and honest terms.</p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                <ShieldCheck className="w-6 h-6 text-[#E87722]" />
                <h4 className="font-bold text-sm text-[#0B192C]">Reliable Support</h4>
                <p className="text-xs text-slate-500">Responsive customer service from application to release.</p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                <Lock className="w-6 h-6 text-[#E87722]" />
                <h4 className="font-bold text-sm text-[#0B192C]">Secure Transactions</h4>
                <p className="text-xs text-slate-500">Encrypted information handling and strict privacy protection.</p>
              </div>
            </div>
          </div>

          {/* Section 3: Loan Process (Timeline of 6) */}
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-[#E87722] font-extrabold text-xs uppercase tracking-wider">Step-by-Step</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C]">Loan Process</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center space-y-1">
                <div className="w-8 h-8 rounded-full bg-[#0B192C] text-[#E87722] font-bold text-xs flex items-center justify-center mx-auto">1</div>
                <div className="font-bold text-xs text-[#0B192C]">Application</div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center space-y-1">
                <div className="w-8 h-8 rounded-full bg-[#0B192C] text-[#E87722] font-bold text-xs flex items-center justify-center mx-auto">2</div>
                <div className="font-bold text-xs text-[#0B192C]">Initial Review</div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center space-y-1">
                <div className="w-8 h-8 rounded-full bg-[#0B192C] text-[#E87722] font-bold text-xs flex items-center justify-center mx-auto">3</div>
                <div className="font-bold text-xs text-[#0B192C]">Document Submission</div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center space-y-1">
                <div className="w-8 h-8 rounded-full bg-[#0B192C] text-[#E87722] font-bold text-xs flex items-center justify-center mx-auto">4</div>
                <div className="font-bold text-xs text-[#0B192C]">Evaluation</div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center space-y-1">
                <div className="w-8 h-8 rounded-full bg-[#0B192C] text-[#E87722] font-bold text-xs flex items-center justify-center mx-auto">5</div>
                <div className="font-bold text-xs text-[#0B192C]">Approval</div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center space-y-1">
                <div className="w-8 h-8 rounded-full bg-[#0B192C] text-[#E87722] font-bold text-xs flex items-center justify-center mx-auto">6</div>
                <div className="font-bold text-xs text-[#0B192C]">Release</div>
              </div>
            </div>
          </div>

          {/* Section 4: Eligibility & Requirements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Eligibility */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex items-center space-x-2 text-[#0B192C]">
                <BadgeCheck className="w-5 h-5 text-[#E87722]" />
                <h3 className="text-lg font-bold text-[#0B192C]">Eligibility</h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0" />
                  <span>Registered Business</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0" />
                  <span>Business Owner</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0" />
                  <span>Valid Government IDs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0" />
                  <span>Business Registration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0" />
                  <span>Supporting Documents</span>
                </li>
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex items-center space-x-2 text-[#0B192C]">
                <FileText className="w-5 h-5 text-[#E87722]" />
                <h3 className="text-lg font-bold text-[#0B192C]">Requirements</h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0" />
                  <span>Business Permit</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0" />
                  <span>DTI/SEC Registration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0" />
                  <span>Financial Statements</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0" />
                  <span>Valid ID</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0" />
                  <span>Other Supporting Documents</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 5: Frequently Asked Questions */}
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-[#E87722] font-extrabold text-xs uppercase tracking-wider">Questions & Answers</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C]">Frequently Asked Questions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-2 shadow-sm">
                <div className="flex items-center space-x-2 text-[#0B192C]">
                  <HelpCircle className="w-4 h-4 text-[#E87722]" />
                  <h4 className="font-bold text-xs sm:text-sm text-[#0B192C]">Who can apply?</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Registered business owners operating within Luzon.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-2 shadow-sm">
                <div className="flex items-center space-x-2 text-[#0B192C]">
                  <HelpCircle className="w-4 h-4 text-[#E87722]" />
                  <h4 className="font-bold text-xs sm:text-sm text-[#0B192C]">Do I need collateral?</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  No. Our business loan is non-collateralized.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-2 shadow-sm">
                <div className="flex items-center space-x-2 text-[#0B192C]">
                  <HelpCircle className="w-4 h-4 text-[#E87722]" />
                  <h4 className="font-bold text-xs sm:text-sm text-[#0B192C]">How long is processing?</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Applications are evaluated as quickly as possible after complete document submission.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6: Contact CTA Banner */}
          <div className="bg-[#0B192C] text-white rounded-2xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold">Need Financing?</h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                Apply today or contact our lending specialists.
              </p>
            </div>
            <Button
              asChild
              className="bg-[#E87722] hover:bg-[#d46716] text-white font-bold text-sm px-8 py-3.5 rounded-md shadow-md shrink-0 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Link href="/apply-now" className="flex items-center gap-2">
                Apply Now <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
}
