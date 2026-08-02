import Link from "next/link";
import Image from "next/image";
import { 
  Shield, 
  Award, 
  CheckCircle2, 
  Target, 
  Building2, 
  ChevronRight, 
  BadgeCheck,
  FileCheck,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutUsPage() {
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
                  About Us
                </h1>
              </div>

              <div className="w-12 h-1 bg-[#E87722] rounded-full"></div>

              <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
                Empowering Small and Medium Enterprises across Luzon with alternative capital funding and fast, reliable loan facilities.
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
                  src="/images/building.jpg"
                  alt="928 Credit Concept Lending Headquarters"
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
          
          {/* Section 1: Company Profile (Grid matching Home page) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: Portrait Storefront Image */}
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

            {/* Right Column: Corporate History & Details */}
            <div className="lg:col-span-7 flex flex-col justify-between py-1 space-y-4">
              <div>
                <span className="text-[#E87722] font-extrabold text-base sm:text-lg">
                  Company Profile
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#0B192C] leading-tight tracking-tight mt-1">
                  SEC Registered <br className="hidden sm:inline" />
                  Financial Partner
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Incorporated on February 20, 2020, <strong>928 CREDIT CONCEPT LENDING INVESTOR CORPORATION</strong> is a Securities and Exchange Commission registered corporation in the Philippines (SEC Reg. No. <strong>CS202002431</strong>).
              </p>
              
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The company operates under Certificate of Authority No. <strong>3247</strong> pursuant to the Lending Company Regulation Act of 2007 (Republic Act No. 9474). Headquartered at Unit E 2nd Floor Violago Plaza, Pagala, Baliwag City, Bulacan, we specialize in non-collateralized business loans for registered enterprises across Luzon and Metro Manila.
              </p>

              {/* SEC Badges */}
              <div className="grid grid-cols-2 gap-4 pt-1">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="flex items-center space-x-2 text-[#0B192C]">
                    <BadgeCheck className="w-5 h-5 text-[#E87722]" />
                    <span className="font-bold text-xs sm:text-sm">SEC Reg. No.</span>
                  </div>
                  <div className="text-base font-black text-[#0B192C] mt-1">CS202002431</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Incorporated Feb 20, 2020</div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="flex items-center space-x-2 text-[#0B192C]">
                    <FileCheck className="w-5 h-5 text-[#E87722]" />
                    <span className="font-bold text-xs sm:text-sm">Authority Cert.</span>
                  </div>
                  <div className="text-base font-black text-[#E87722] mt-1">CA No. 3247</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Republic Act No. 9474</div>
                </div>
              </div>

            </div>

          </div>

          {/* Section 2: Core Values (Clean 3-Column matching Home Page) */}
          <div className="space-y-6 pt-2">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-[#E87722] font-extrabold text-xs uppercase tracking-wider">
                Guided Principles
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C]">Our Core Values</h2>
              <p className="text-xs text-slate-500">
                Every transaction and partnership at 928 Credit Concept is guided by our core pillars.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center sm:text-left space-y-2 p-6 rounded-2xl border border-slate-100 bg-slate-50/50">
                <div className="w-12 h-12 rounded-full border-2 border-[#0B192C] flex items-center justify-center mx-auto sm:mx-0 text-[#0B192C]">
                  <Shield className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-sm text-[#0B192C]">Honesty and Integrity</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We uphold the highest standard of integrity and honesty in all our actions.
                </p>
              </div>

              <div className="text-center sm:text-left space-y-2 p-6 rounded-2xl border border-slate-100 bg-slate-50/50">
                <div className="w-12 h-12 rounded-full border-2 border-[#0B192C] flex items-center justify-center mx-auto sm:mx-0 text-[#0B192C]">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-sm text-[#0B192C]">Quality</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We provide outstanding products and deliver premium services.
                </p>
              </div>

              <div className="text-center sm:text-left space-y-2 p-6 rounded-2xl border border-slate-100 bg-slate-50/50">
                <div className="w-12 h-12 rounded-full border-2 border-[#0B192C] flex items-center justify-center mx-auto sm:mx-0 text-[#0B192C]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-sm text-[#0B192C]">Accountability</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We guarantee our accountability in delivering our commitments.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Vision & Mission (Dark Navy Card Block matching Home page feature section) */}
          <div className="bg-[#0B192C] text-white rounded-2xl p-8 sm:p-10 border border-slate-800 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800">
              
              {/* Vision */}
              <div className="space-y-3 pr-0 md:pr-6 pt-2 md:pt-0">
                <div className="flex items-center space-x-3 text-[#E87722]">
                  <Building2 className="w-6 h-6" />
                  <h3 className="text-xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  To be the leading provider of financial products for Small and Medium Enterprises across the country, recognized for operating with unwavering honesty, integrity, quality, and accountability.
                </p>
              </div>

              {/* Mission */}
              <div className="space-y-3 pl-0 md:pl-6 pt-6 md:pt-0">
                <div className="flex items-center space-x-3 text-[#E87722]">
                  <Target className="w-6 h-6" />
                  <h3 className="text-xl font-bold text-white">Our Mission</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#E87722] font-bold">•</span>
                    <span>To provide SME partners alternative sources of funds through high-quality lending facilities and efficient loan processing.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#E87722] font-bold">•</span>
                    <span>To provide employees competitive work environments with opportunities for professional growth and attractive compensation.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#E87722] font-bold">•</span>
                    <span>To provide shareholders optimum returns on investment through transparent financial reporting systems.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Section 4: CTA Banner */}
          <div className="bg-[#0B192C] text-white rounded-2xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold">Bridge Your Capital Funding Needs</h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                SEC Registered CS202002431 | CA No. 3247. Fast, non-collateralized business loans for growing SMEs.
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
