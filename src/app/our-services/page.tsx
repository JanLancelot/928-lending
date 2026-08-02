import Link from "next/link";
import Image from "next/image";
import { 
  ChevronRight, 
  Zap, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  BadgeCheck,
  Lock,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const advantages = [
  { icon: Zap, title: "Fast Approval", desc: "Quick turnaround times for business loan evaluations." },
  { icon: Users, title: "Professional Team", desc: "Dedicated specialists operating with full corporate standards." },
  { icon: TrendingUp, title: "Flexible Financing", desc: "Loan packages tailored to your exact capital requirements." },
  { icon: BadgeCheck, title: "Transparent Process", desc: "Clear rates, zero hidden charges, and honest terms." },
  { icon: ShieldCheck, title: "Reliable Support", desc: "Responsive customer service from application to release." },
  { icon: Lock, title: "Secure Transactions", desc: "Encrypted information handling and strict privacy protection." },
];

const process = [
  { n: "1", title: "Application" },
  { n: "2", title: "Initial Review" },
  { n: "3", title: "Document Submission" },
  { n: "4", title: "Evaluation" },
  { n: "5", title: "Approval" },
  { n: "6", title: "Release" },
];

const eligibility = [
  "Registered Business",
  "Business Owner",
  "Valid Government IDs",
  "Business Registration",
  "Supporting Documents",
];

const requirements = [
  "Business Permit",
  "DTI/SEC Registration",
  "Financial Statements",
  "Valid ID",
  "Other Supporting Documents",
];

const faqs = [
  { q: "Who can apply?", a: "Registered business owners operating within Luzon." },
  { q: "Do I need collateral?", a: "No. Our business loan is non-collateralized." },
  { q: "How long is processing?", a: "Applications are evaluated as quickly as possible after complete document submission." },
];

export default function OurServicesPage() {
  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Compact Page Header */}
      <section className="relative w-full bg-white pt-0 pb-6 lg:pb-8 min-h-[140px] sm:min-h-[160px] flex items-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
            
            <div className="lg:col-span-6 space-y-2 z-20 pl-2 sm:pl-6 lg:pl-10 my-auto flex flex-col justify-center">
              <div className="space-y-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0B192C] leading-none">
                  Business Loan Solutions
                </h1>
              </div>

              <div className="w-12 h-1 bg-[#E87722] rounded-full"></div>

              <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
                Helping businesses move forward.
              </p>
            </div>

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

      <section className="py-10 sm:py-14 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-14 sm:space-y-16">

          {/* Section 1: Main Service */}
          <div className="bg-[#0B192C] text-white rounded-2xl p-8 sm:p-10 lg:p-12 space-y-6">
            <div className="space-y-2">
              <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.15em]">Main Service</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Non-Collateralized Business Loan
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                Provide financing without requiring traditional collateral.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#E87722]">Ideal for</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-200 font-medium">
                <span>Working Capital</span>
                <span className="text-slate-600">/</span>
                <span>Inventory</span>
                <span className="text-slate-600">/</span>
                <span>Equipment</span>
                <span className="text-slate-600">/</span>
                <span>Expansion</span>
                <span className="text-slate-600">/</span>
                <span>Business Operations</span>
              </div>
            </div>
          </div>

          {/* Section 2: Why Businesses Choose Us */}
          <div className="space-y-10">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.15em]">Advantages</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C] mt-1">Why Businesses Choose Us</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
              {advantages.map(({ icon: Icon, title, desc }) => (
                <div key={title}>
                  <Icon className="w-5 h-5 text-[#E87722] mb-3" strokeWidth={1.5} />
                  <h4 className="font-bold text-sm text-[#0B192C] mb-1.5">{title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Loan Process */}
          <div className="space-y-10">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.15em]">Step-by-Step</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C] mt-1">Loan Process</h2>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute left-0 right-0 top-4 h-px bg-slate-200" />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4 relative">
                {process.map((step) => (
                  <div key={step.n} className="text-center">
                    <div className="relative z-10 w-8 h-8 mx-auto rounded-full border border-[#0B192C] bg-white text-[#0B192C] text-xs font-bold flex items-center justify-center mb-2.5">
                      {step.n}
                    </div>
                    <div className="font-bold text-xs text-[#0B192C]">{step.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 4: Eligibility & Requirements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="border-t border-slate-200 pt-6 space-y-4">
              <div className="flex items-center gap-2.5 text-[#0B192C]">
                <BadgeCheck className="w-4 h-4 text-[#E87722]" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-[#0B192C]">Eligibility</h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                {eligibility.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[#E87722]">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-200 pt-6 space-y-4">
              <div className="flex items-center gap-2.5 text-[#0B192C]">
                <FileText className="w-4 h-4 text-[#E87722]" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-[#0B192C]">Requirements</h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                {requirements.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[#E87722]">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 5: Frequently Asked Questions */}
          <div className="space-y-10">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.15em]">Questions & Answers</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C] mt-1">Frequently Asked Questions</h2>
            </div>

            <div className="max-w-3xl mx-auto divide-y divide-slate-200 border-t border-b border-slate-200">
              {faqs.map(({ q, a }) => (
                <div key={q} className="py-5">
                  <h4 className="font-bold text-sm text-[#0B192C] mb-1">{q}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: Contact CTA Banner */}
          <div className="bg-[#0B192C] text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold">Need Financing?</h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                Apply today or contact our lending specialists.
              </p>
            </div>
            <Button
              asChild
              className="bg-[#E87722] hover:bg-[#d46716] text-white font-bold text-sm px-8 py-3.5 rounded-md shrink-0 transition-colors duration-300"
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