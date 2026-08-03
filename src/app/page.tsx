import Link from "next/link";
import Image from "next/image";
import { 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Target, 
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Initial push to website
const whyChooseUs = [
  {
    icon: Zap,
    title: "Streamlined Processing",
    desc: "Quick and efficient loan evaluation designed to serve urgent needs.",
  },
  {
    icon: ShieldCheck,
    title: "Non-Collateralized Loans",
    desc: "Accessible business funding without requiring traditional collateral.",
  },
  {
    icon: TrendingUp,
    title: "Trusted Lending Partner",
    desc: "Operating with honesty, integrity, and accountability since 2020.",
  },
  {
    icon: Target,
    title: "SME Focused",
    desc: "Helping businesses secure the capital they need to grow.",
  },
];

const steps = [
  { n: "1", title: "Submit Application", desc: "Complete the online form with your business details." },
  { n: "2", title: "Evaluation", desc: "Our team reviews your application promptly." },
  { n: "3", title: "Document Verification", desc: "Submitted documents are checked and confirmed." },
  { n: "4", title: "Loan Approval", desc: "You're notified once your loan is approved." },
  { n: "5", title: "Fund Release", desc: "Capital is delivered directly to your business." },
];

export default function Home() {
  return (
    <div className="w-full bg-white overflow-hidden">
      <section className="relative w-full bg-white pt-0 pb-6 lg:pb-8 min-h-[340px] sm:min-h-[400px] lg:min-h-[440px] flex items-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Background pattern matching Footer container width */}
          <div className="absolute inset-y-0 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8 pointer-events-none z-0 overflow-hidden opacity-30">
            <Image
              src="/images/bg.jpg"
              alt="Hero Background"
              fill
              className="object-cover object-left"
              priority
            />
          </div>

          {/* Header Overlay matching Footer right edge */}
          <div className="absolute inset-y-0 right-4 sm:right-6 lg:right-8 h-full pointer-events-none z-20 flex justify-end overflow-hidden">
            <Image
              src="/images/wholeoverlay.png"
              alt="Decorative Header Overlay"
              width={632}
              height={770}
              className="h-full w-auto object-right object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-12 gap-3 sm:gap-6 lg:gap-8 items-center relative z-10">
            
            <div className="col-span-7 lg:col-span-5 space-y-3 sm:space-y-5 z-20 pl-2 sm:pl-6 lg:pl-10 my-auto flex flex-col justify-center">
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0B192C] leading-none">
                  We Listen
                </h1>
                <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#E87722] leading-none">
                  We Work
                </h1>
                <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0B192C] leading-none">
                  We Lend
                </h1>
              </div>

              <div className="w-10 sm:w-14 h-1 bg-[#E87722] rounded-full"></div>

              <p className="text-[11px] sm:text-sm text-slate-600 max-w-sm leading-relaxed">
                Helping Small and Medium Enterprises across Luzon access fast, non-collateralized business financing through a streamlined and professional lending process.
              </p>

              <div className="pt-1 sm:pt-2 flex flex-wrap gap-2 sm:gap-3">
                <Button
                  asChild
                  className="bg-[#E87722] hover:bg-[#d46716] text-white text-[11px] sm:text-sm font-bold px-4 sm:px-7 py-2 sm:py-3 rounded-md shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Link href="/apply-now">Apply Now</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-slate-300 text-[#0B192C] hover:bg-slate-100 text-[11px] sm:text-sm font-bold px-3.5 sm:px-6 py-2 sm:py-3 rounded-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Link href="/about-us">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="col-span-5 lg:col-span-7 relative min-h-[160px] sm:min-h-[340px] lg:min-h-[480px] flex items-center justify-end">
              <div 
                className="absolute inset-0 z-10 overflow-hidden"
                style={{
                  WebkitMaskImage: "radial-gradient(ellipse 85% 85% at 75% 50%, black 35%, transparent 75%)",
                  maskImage: "radial-gradient(ellipse 85% 85% at 75% 50%, black 35%, transparent 75%)",
                }}
              >
                <Image
                  src="/images/hero_meeting.png"
                  alt="928 Credit Concept Lending Team Meeting"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="relative z-30 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 my-4 sm:my-6">
        <div className="bg-[#0B192C] text-white rounded-2xl p-8 sm:p-10 lg:p-12 shadow-xl border border-slate-800">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.15em]">Why Choose Us</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1.5">Why Choose 928 Credit?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-slate-800">
            {whyChooseUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="py-5 first:pt-0 lg:py-0 lg:px-8 lg:first:pl-0 lg:last:pr-0">
                <Icon className="w-5 h-5 text-[#E87722] mb-2.5" strokeWidth={1.5} />
                <h3 className="text-sm font-bold text-white mb-1">{title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-8 lg:py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            <div className="lg:col-span-5 flex">
              <div className="relative w-full h-[380px] sm:h-[420px] lg:h-full min-h-[380px] rounded-2xl overflow-hidden border border-slate-100 shadow-md">
                <Image
                  src="/images/building.png"
                  alt="928 Credit Concept Lending Storefront Unit E"
                  fill
                  className="object-cover object-center rounded-2xl"
                  priority
                />
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between py-1 space-y-4">
              <div>
                <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.15em]">
                  About Us
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#0B192C] leading-tight tracking-tight mt-1.5">
                  About 928 Credit Concept Lending
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                Established in 2020, 928 Credit Concept Lending Investor Corporation is an SEC-registered lending company dedicated to helping Small and Medium Enterprises access alternative funding solutions.
              </p>

              <div className="pt-2">
                <Button
                  asChild
                  className="bg-[#0B192C] hover:bg-[#060e18] text-white text-xs sm:text-sm font-bold px-8 py-3 rounded-md shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Link href="/about-us" className="flex items-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="py-6 sm:py-8 lg:py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="bg-[#0B192C] text-white rounded-2xl p-8 sm:p-10 lg:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-8 space-y-3.5">
                <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.15em]">
                  Our Primary Loan Product
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                  Non-Collateralized Business Loan
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                  Designed for registered businesses looking for flexible financing without requiring collateral.
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-xs sm:text-sm text-slate-300 font-medium">
                  <span>Fast Processing</span>
                  <span className="text-slate-600">/</span>
                  <span>Competitive Lending</span>
                  <span className="text-slate-600">/</span>
                  <span>Business Growth Support</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex items-center lg:justify-end">
                <Button
                  asChild
                  className="bg-[#E87722] hover:bg-[#d46716] text-white text-xs sm:text-sm font-bold px-8 py-3.5 rounded-md shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Link href="/apply-now">Apply for Loan</Link>
                </Button>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-8 lg:py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.15em]">Simple Step-by-Step</span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C] mt-1">How It Works</h2>
            <p className="text-xs text-slate-500">From application to fund release in 5 simple steps.</p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-0 right-0 top-4 h-px bg-slate-200" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-4 relative">
              {steps.map((step) => (
                <div key={step.n} className="text-left sm:text-center">
                  <div className="relative z-10 w-8 h-8 sm:mx-auto rounded-full border border-[#0B192C] bg-white text-[#0B192C] text-xs font-bold flex items-center justify-center mb-2.5 shadow-sm">
                    {step.n}
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0B192C] mb-1">{step.title}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-8 lg:py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="bg-[#0B192C] text-white rounded-2xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold">Ready to Grow Your Business?</h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                Apply today and let us help finance your next opportunity.
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