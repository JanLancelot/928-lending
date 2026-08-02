import Link from "next/link";
import Image from "next/image";
import { 
  Zap, 
  Target, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  ChevronRight, 
  ArrowRight,
  FileText,
  Search,
  FileCheck,
  CheckCircle,
  Banknote
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Hero Section (Unchanged as requested) */}
      <section className="relative w-full bg-white pt-0 pb-6 lg:pb-8 min-h-[420px] lg:min-h-[460px] flex items-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="absolute inset-y-0 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8 pointer-events-none z-0 overflow-hidden opacity-30">
            <Image
              src="/images/bg.jpg"
              alt="Hero Background"
              fill
              className="object-cover object-left"
              priority
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-5 space-y-5 z-20 pl-2 sm:pl-6 lg:pl-10 my-auto flex flex-col justify-center">
              <div className="space-y-1">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0B192C] leading-none">
                  We Listen
                </h1>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#E87722] leading-none">
                  We Work
                </h1>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0B192C] leading-none">
                  We Lend
                </h1>
              </div>

              <div className="w-14 h-1 bg-[#E87722] rounded-full"></div>

              <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed">
                Helping Small and Medium Enterprises across Luzon access fast, non-collateralized business financing through a streamlined and professional lending process.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-[#E87722] hover:bg-[#d46716] text-white text-xs sm:text-sm font-bold px-7 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Link href="/apply-now">Apply Now</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-slate-300 text-[#0B192C] hover:bg-slate-100 text-xs sm:text-sm font-bold px-6 py-3 rounded-md"
                >
                  <Link href="/about-us">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] flex items-center justify-end">
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

          <div className="absolute top-0 right-4 sm:right-6 lg:right-8 w-[38%] sm:w-[32%] lg:w-[26%] max-w-[340px] pointer-events-none z-20">
            <Image
              src="/images/overlay top.png"
              alt="Top Overlay"
              width={632}
              height={385}
              className="w-full h-auto object-contain object-right-top"
              priority
            />
          </div>

          <div className="absolute bottom-0 right-4 sm:right-6 lg:right-8 w-[38%] sm:w-[32%] lg:w-[26%] max-w-[340px] pointer-events-none z-30">
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

      {/* Section 1: Why Choose 928 Credit? (4 cards) */}
      <section className="relative z-30 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 mt-2 sm:mt-3">
        <div className="bg-[#0B192C] text-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-slate-800">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-[#E87722] font-extrabold text-xs uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-1">Why Choose 928 Credit?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y md:divide-y-0 lg:divide-x divide-slate-800">
            
            <div className="group flex flex-col items-center text-center px-4 pt-4 md:pt-0 cursor-default">
              <div className="w-14 h-14 rounded-full bg-slate-900 border-2 border-[#E87722] flex items-center justify-center mb-4 text-[#E87722] shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E87722] group-hover:text-white">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">Streamlined Processing</h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-xs">
                Quick and efficient loan evaluation designed to serve urgent needs.
              </p>
            </div>

            <div className="group flex flex-col items-center text-center px-4 pt-6 md:pt-0 cursor-default">
              <div className="w-14 h-14 rounded-full bg-slate-900 border-2 border-[#E87722] flex items-center justify-center mb-4 text-[#E87722] shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E87722] group-hover:text-white">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">Non-Collateralized Loans</h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-xs">
                Accessible business funding without requiring traditional collateral.
              </p>
            </div>

            <div className="group flex flex-col items-center text-center px-4 pt-6 md:pt-0 cursor-default">
              <div className="w-14 h-14 rounded-full bg-slate-900 border-2 border-[#E87722] flex items-center justify-center mb-4 text-[#E87722] shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E87722] group-hover:text-white">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">Trusted Lending Partner</h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-xs">
                Operating with honesty, integrity, and accountability since 2020.
              </p>
            </div>

            <div className="group flex flex-col items-center text-center px-4 pt-6 md:pt-0 cursor-default">
              <div className="w-14 h-14 rounded-full bg-slate-900 border-2 border-[#E87722] flex items-center justify-center mb-4 text-[#E87722] shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E87722] group-hover:text-white">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">SME Focused</h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-xs">
                Helping businesses secure the capital they need to grow.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: About Preview */}
      <section className="py-8 sm:py-12 lg:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            <div className="lg:col-span-5 flex">
              <div className="relative w-full h-[400px] sm:h-[450px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                <Image
                  src="/images/building.png"
                  alt="928 Credit Concept Lending Storefront Unit E"
                  fill
                  className="object-cover object-center rounded-2xl"
                  priority
                />
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between py-1 space-y-4 sm:space-y-5">
              <div>
                <span className="text-[#E87722] font-extrabold text-base sm:text-lg">
                  About Preview
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#0B192C] leading-tight tracking-tight mt-1">
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

      {/* Section 3: Our Loan Product (Large Card) */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="bg-[#0B192C] text-white rounded-2xl p-8 sm:p-10 lg:p-12 shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-8 space-y-4">
                <span className="text-[#E87722] font-extrabold text-xs uppercase tracking-wider">
                  Our Primary Loan Product
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                  Non-Collateralized Business Loan
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                  Designed for registered businesses looking for flexible financing without requiring collateral.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0" />
                    <span className="font-semibold">Fast Processing</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0" />
                    <span className="font-semibold">Competitive Lending</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0" />
                    <span className="font-semibold">Business Growth Support</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex items-center lg:justify-end">
                <Button
                  asChild
                  className="bg-[#E87722] hover:bg-[#d46716] text-white text-xs sm:text-sm font-bold px-8 py-3.5 rounded-md shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Link href="/apply-now">Apply for Loan</Link>
                </Button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Section 4: How It Works (5 Steps Timeline) */}
      <section className="py-8 sm:py-12 lg:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <span className="text-[#E87722] font-extrabold text-xs uppercase tracking-wider">Simple Step-by-Step</span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C]">How It Works</h2>
            <p className="text-xs text-slate-500">From application to fund release in 5 simple steps.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#0B192C] text-[#E87722] font-black text-sm flex items-center justify-center mx-auto">1</div>
              <FileText className="w-5 h-5 mx-auto text-[#0B192C]" />
              <h4 className="font-bold text-xs sm:text-sm text-[#0B192C]">Submit Application</h4>
              <p className="text-[11px] text-slate-500">Complete online form details.</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#0B192C] text-[#E87722] font-black text-sm flex items-center justify-center mx-auto">2</div>
              <Search className="w-5 h-5 mx-auto text-[#0B192C]" />
              <h4 className="font-bold text-xs sm:text-sm text-[#0B192C]">Evaluation</h4>
              <p className="text-[11px] text-slate-500">Fast credit evaluation.</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#0B192C] text-[#E87722] font-black text-sm flex items-center justify-center mx-auto">3</div>
              <FileCheck className="w-5 h-5 mx-auto text-[#0B192C]" />
              <h4 className="font-bold text-xs sm:text-sm text-[#0B192C]">Document Verification</h4>
              <p className="text-[11px] text-slate-500">Review submitted docs.</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#0B192C] text-[#E87722] font-black text-sm flex items-center justify-center mx-auto">4</div>
              <CheckCircle className="w-5 h-5 mx-auto text-[#0B192C]" />
              <h4 className="font-bold text-xs sm:text-sm text-[#0B192C]">Loan Approval</h4>
              <p className="text-[11px] text-slate-500">Notice of approval.</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#0B192C] text-[#E87722] font-black text-sm flex items-center justify-center mx-auto">5</div>
              <Banknote className="w-5 h-5 mx-auto text-[#0B192C]" />
              <h4 className="font-bold text-xs sm:text-sm text-[#0B192C]">Fund Release</h4>
              <p className="text-[11px] text-slate-500">Capital delivered.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: CTA Banner */}
      <section className="py-8 sm:py-12 bg-white">
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