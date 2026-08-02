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
  MapPin, 
  FileText
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
                  Our Services
                </h1>
              </div>

              <div className="w-12 h-1 bg-[#E87722] rounded-full"></div>

              <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
                High-quality non-collateralized business loans and financing facilities designed to satisfy the capital requirements of Small and Medium Enterprises.
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

      {/* Main Page Content (Professional Clean Style matching Home Page) */}
      <section className="py-8 sm:py-12 lg:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-10 sm:space-y-14">

          {/* Section 1: Featured Service (Grid matching Home Page layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: Real Office Photo */}
            <div className="lg:col-span-5 flex">
              <div className="relative w-full h-[400px] sm:h-[450px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                <Image
                  src="/images/hero_meeting.png"
                  alt="928 Credit Concept Advisory Services"
                  fill
                  className="object-cover object-center rounded-2xl"
                  priority
                />
              </div>
            </div>

            {/* Right Column: Service Details */}
            <div className="lg:col-span-7 flex flex-col justify-between py-1 space-y-4">
              <div>
                <span className="text-[#E87722] font-extrabold text-base sm:text-lg">
                  Primary Offering
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#0B192C] leading-tight tracking-tight mt-1">
                  Non-Collateralized <br className="hidden sm:inline" />
                  Business Loan
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our primary offering is the <strong>Non-Collateralized Business Loan</strong>. This accessible funding solution is designed specifically to fuel the growth of registered businesses without requiring traditional collateral assets.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Since beginning operations in 2020, we have continuously expanded our lending footprint to bridge the capital funding requirements of registered business owners across Luzon, with a primary client concentration in Metro Manila.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0" />
                  <span className="font-semibold">No Traditional Collateral</span>
                </div>
                <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0" />
                  <span className="font-semibold">Streamlined Application Process</span>
                </div>
                <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0" />
                  <span className="font-semibold">Tailored Business Capital</span>
                </div>
                <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0" />
                  <span className="font-semibold">Transparent Rates & Terms</span>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  asChild
                  className="bg-[#E87722] hover:bg-[#d46716] text-white text-xs sm:text-sm font-bold px-8 py-3 rounded-md shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Link href="/apply-now">Apply For Loan</Link>
                </Button>
              </div>

            </div>

          </div>

          {/* Section 2: Why Partner With Us (Clean Dark Navy Card Block matching Home Page) */}
          <div className="bg-[#0B192C] text-white rounded-2xl p-8 sm:p-10 border border-slate-800 shadow-xl">
            <div className="text-center max-w-xl mx-auto space-y-1 mb-8">
              <span className="text-[#E87722] font-extrabold text-xs uppercase tracking-wider">
                Why Partner With Us
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Why Choose 928 Lending?</h2>
              <p className="text-xs text-slate-300">
                Partnering with us means you benefit from 4 dedicated corporate pillars.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 lg:divide-x divide-slate-800">
              
              <div className="flex flex-col items-center text-center px-3 pt-3 sm:pt-0 cursor-default">
                <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-[#E87722] flex items-center justify-center mb-3 text-[#E87722]">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-sm text-white mb-1.5">Streamlined Processes</h3>
                <p className="text-xs text-slate-300 leading-relaxed max-w-xs">
                  Efficient loan processing systems designed to effectively accommodate urgent business capital needs.
                </p>
              </div>

              <div className="flex flex-col items-center text-center px-3 pt-6 lg:pt-0 cursor-default">
                <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-[#E87722] flex items-center justify-center mb-3 text-[#E87722]">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-sm text-white mb-1.5">Professional Team</h3>
                <p className="text-xs text-slate-300 leading-relaxed max-w-xs">
                  Highly trained and reliable office personnel operating under professional corporate standards.
                </p>
              </div>

              <div className="flex flex-col items-center text-center px-3 pt-6 lg:pt-0 cursor-default">
                <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-[#E87722] flex items-center justify-center mb-3 text-[#E87722]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-sm text-white mb-1.5">Uncompromising Integrity</h3>
                <p className="text-xs text-slate-300 leading-relaxed max-w-xs">
                  SEC-registered corporation operating with unwavering honesty, quality, and accountability.
                </p>
              </div>

              <div className="flex flex-col items-center text-center px-3 pt-6 lg:pt-0 cursor-default">
                <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-[#E87722] flex items-center justify-center mb-3 text-[#E87722]">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-sm text-white mb-1.5">Future-Focused Growth</h3>
                <p className="text-xs text-slate-300 leading-relaxed max-w-xs">
                  Committed to empowering sustainable MSME business expansion across the country.
                </p>
              </div>

            </div>
          </div>

          {/* Section 3: Future Expansion Roadmap */}
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-[#E87722] font-extrabold text-xs uppercase tracking-wider">
                Strategic Goals
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C]">Future Expansion Roadmap</h2>
              <p className="text-xs text-slate-500">
                Over the succeeding years, 928 Credit Concept remains committed to expanding its footprint across the country.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="w-10 h-10 rounded-full border-2 border-[#0B192C] flex items-center justify-center text-[#0B192C]">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#0B192C]">Provincial Expansion</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Expand business operations to rural areas in regional provinces.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="w-10 h-10 rounded-full border-2 border-[#0B192C] flex items-center justify-center text-[#0B192C]">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#0B192C]">Increase MSME Reach</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Increase the present numbers of MSME borrowers and business partners.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="w-10 h-10 rounded-full border-2 border-[#0B192C] flex items-center justify-center text-[#0B192C]">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#0B192C]">Custom Financial Packages</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Develop new financial loan packages tailored to business needs.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="w-10 h-10 rounded-full border-2 border-[#0B192C] flex items-center justify-center text-[#0B192C]">
                  <Building2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#0B192C]">Strategic Branches</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Open branches in strategic areas of Metro Manila.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: CTA Banner */}
          <div className="bg-[#0B192C] text-white rounded-2xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold">Bridge Your Capital Requirements</h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                Apply for our Non-Collateralized Business Loan with fast turnaround times and transparent processing.
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
