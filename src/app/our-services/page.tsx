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
    <div className="w-full  overflow-hidden">
      <section className="relative w-full  pt-0 pb-4 sm:pb-6 lg:pb-8 min-h-[150px] sm:min-h-[190px] lg:min-h-[240px] flex items-stretch overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 w-full my-auto">
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

          <div className="relative z-10 min-h-[160px] sm:min-h-[200px] lg:min-h-[240px] flex items-center">

            {/* Masked Hero Background Image */}
            <div 
              className="absolute inset-y-0 right-0 w-3/5 sm:w-2/3 lg:w-7/12 z-0 overflow-hidden pointer-events-none"
              style={{
                WebkitMaskImage: "radial-gradient(circle at 80% 50%, black 30%, transparent 75%)",
                maskImage: "radial-gradient(circle at 80% 50%, black 30%, transparent 75%)",
              }}
            >
              <Image
                src="/images/building.jpg"
                alt="928 Credit Concept Financial Advisory Team"
                fill
                sizes="(max-width: 640px) 60vw, (max-width: 1024px) 66vw, 58vw"
                className="object-cover object-center"
                priority
              />
            </div>
            
            <div className="w-[57%] sm:w-[70%] lg:w-[60%] space-y-2 sm:space-y-3 z-30 relative px-4 sm:px-6 lg:px-10 py-4 sm:py-6 my-auto flex flex-col justify-center">
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B192C] leading-tight [text-shadow:_0_0_4px_#ffffff,_0_0_4px_#ffffff]">
                  Business Loan Solutions
                </h1>
              </div>

              <div className="w-12 h-1 bg-[#E87722] rounded-full"></div>

              <p className="text-xs sm:text-sm text-slate-900 max-w-md leading-relaxed [text-shadow:_0_0_4px_#ffffff,_0_0_4px_#ffffff]">
                Helping businesses move forward.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-6 sm:py-8 lg:py-10 ">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-10 sm:space-y-12">

          <div className="bg-[#0B192C] text-white rounded-2xl p-8 sm:p-10 lg:p-12 space-y-5 shadow-xl border border-slate-800">
            <div className="space-y-2">
              <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.15em]">Main Service</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
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
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B192C] mt-1">Why Businesses Choose Us</h2>
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
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B192C] mt-1">Loan Process</h2>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute left-0 right-0 top-4 h-px bg-slate-200" />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4 relative">
                {process.map((step) => (
                  <div key={step.n} className="text-center">
                    <div className="relative z-10 w-8 h-8 mx-auto rounded-full border border-[#0B192C]  text-[#0B192C] text-xs font-bold flex items-center justify-center mb-2 shadow-sm">
                      {step.n}
                    </div>
                    <div className="font-bold text-xs text-[#0B192C]">{step.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-10">
            <div className="space-y-3">
              <div className="flex items-center gap-2 sm:gap-2.5 text-[#0B192C]">
                <BadgeCheck className="w-4 h-4 text-[#E87722] shrink-0" strokeWidth={1.5} />
                <h3 className="text-base sm:text-lg font-bold text-[#0B192C]">Eligibility</h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {eligibility.map((item) => (
                  <li key={item} className="flex gap-1.5 sm:gap-3">
                    <span className="text-[#E87722] shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 sm:gap-2.5 text-[#0B192C]">
                <FileText className="w-4 h-4 text-[#E87722] shrink-0" strokeWidth={1.5} />
                <h3 className="text-base sm:text-lg font-bold text-[#0B192C]">Requirements</h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {requirements.map((item) => (
                  <li key={item} className="flex gap-1.5 sm:gap-3">
                    <span className="text-[#E87722] shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Operations Gallery Callout */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.15em]">Office &amp; Activities</span>
              <h3 className="text-xl font-bold text-[#0B192C]">Our Operations Gallery</h3>
              <p className="text-xs text-slate-500 max-w-lg leading-relaxed">
                Take a look inside 928 Credit Concept Lending business operations, corporate activities, and headquarters.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-[#0B192C] text-[#0B192C] hover:bg-[#0B192C] hover:text-white font-bold text-xs px-6 py-2.5 rounded-md shrink-0 transition-colors bg-white"
            >
              <Link href="/operations-gallery" className="flex items-center gap-2">
                View Full Gallery <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.15em]">Questions &amp; Answers</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B192C] mt-1">Frequently Asked Questions</h2>
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