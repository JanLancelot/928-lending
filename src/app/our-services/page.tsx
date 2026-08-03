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
      <section className="relative w-full bg-white pt-0 pb-4 sm:pb-6 lg:pb-8 min-h-[150px] sm:min-h-[190px] lg:min-h-[240px] flex items-stretch overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 w-full my-auto">
          {/* Background pattern matching Footer container width */}
          <div className="absolute inset-y-0 left-0 sm:left-6 lg:left-8 right-0 sm:right-6 lg:right-8 pointer-events-none z-0 overflow-hidden opacity-30">
            <Image
              src="/images/bg.jpg"
              alt="Background Pattern"
              fill
              className="object-cover object-left"
              priority
            />
          </div>

          {/* Header Overlay matching Footer right edge (z-20 layer over picture) */}
          <div className="absolute inset-y-0 right-0 sm:right-6 lg:right-8 h-full pointer-events-none z-20 flex justify-end overflow-hidden">
            <Image
              src="/images/wholeoverlay.png"
              alt="Decorative Header Overlay"
              width={632}
              height={770}
              className="h-full w-auto object-right object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-12 gap-3 sm:gap-6 items-center relative z-10 px-0">
            
            <div className="col-span-7 lg:col-span-6 space-y-2 sm:space-y-3 z-30 relative px-4 sm:px-6 lg:px-10 py-4 sm:py-6 my-auto flex flex-col justify-center">
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0B192C] leading-tight">
                  Business Loan Solutions
                </h1>
              </div>

              <div className="w-12 h-1 bg-[#E87722] rounded-full"></div>

              <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
                Helping businesses move forward.
              </p>
            </div>

            {/* Picture Column under wholeoverlay (z-5 layer) fitting full header height */}
            <div className="col-span-5 lg:col-span-6 relative min-h-[150px] sm:min-h-[190px] lg:min-h-[240px] flex items-stretch justify-end z-0 self-stretch">
              <div 
                className="absolute inset-0 z-5 overflow-hidden"
                style={{
                  WebkitMaskImage: "radial-gradient(circle at 60% 50%, black 25%, transparent 65%)",
                  maskImage: "radial-gradient(circle at 60% 50%, black 25%, transparent 65%)",
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
        </div>
      </section>

      <section className="py-6 sm:py-8 lg:py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-10 sm:space-y-12">

          <div className="bg-[#0B192C] text-white rounded-2xl p-8 sm:p-10 lg:p-12 space-y-5 shadow-xl border border-slate-800">
            <div className="space-y-2">
              <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.15em]">Main Service</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Non-Collateralized Business Loan
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                Provide financing without requiring traditional collateral.
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
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

          <div className="space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.15em]">Advantages</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C] mt-1">Why Businesses Choose Us</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
              {advantages.map(({ icon: Icon, title, desc }) => (
                <div key={title}>
                  <Icon className="w-5 h-5 text-[#E87722] mb-2.5" strokeWidth={1.5} />
                  <h4 className="font-bold text-sm text-[#0B192C] mb-1">{title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.15em]">Step-by-Step</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C] mt-1">Loan Process</h2>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute left-0 right-0 top-4 h-px bg-slate-200" />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4 relative">
                {process.map((step) => (
                  <div key={step.n} className="text-center">
                    <div className="relative z-10 w-8 h-8 mx-auto rounded-full border border-[#0B192C] bg-white text-[#0B192C] text-xs font-bold flex items-center justify-center mb-2 shadow-sm">
                      {step.n}
                    </div>
                    <div className="font-bold text-xs text-[#0B192C]">{step.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-[#0B192C]">
                <BadgeCheck className="w-4 h-4 text-[#E87722]" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-[#0B192C]">Eligibility</h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {eligibility.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[#E87722]">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-[#0B192C]">
                <FileText className="w-4 h-4 text-[#E87722]" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-[#0B192C]">Requirements</h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {requirements.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[#E87722]">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.15em]">Questions & Answers</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C] mt-1">Frequently Asked Questions</h2>
            </div>

            <div className="max-w-3xl mx-auto divide-y divide-slate-200">
              {faqs.map(({ q, a }) => (
                <div key={q} className="py-4 first:pt-0">
                  <h4 className="font-bold text-sm text-[#0B192C] mb-1">{q}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0B192C] text-white rounded-2xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold">Need Financing?</h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                Apply today or contact our lending specialists.
              </p>
            </div>
            <Button
              asChild
              className="bg-[#E87722] hover:bg-[#d46716] text-white font-bold text-sm px-8 py-3.5 rounded-md shadow-md shrink-0 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
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