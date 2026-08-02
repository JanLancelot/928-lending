import Link from "next/link";
import Image from "next/image";
import { 
  Shield, 
  Award, 
  CheckCircle2, 
  Building2, 
  ChevronRight, 
  BadgeCheck,
  FileCheck,
  Users,
  Target,
  Clock,
  MapPin,
  TrendingUp,
  HeartHandshake
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
                  About 928 Credit Concept Lending
                </h1>
              </div>

              <div className="w-12 h-1 bg-[#E87722] rounded-full"></div>

              <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
                Supporting Filipino Businesses Through Responsible Lending.
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

      {/* Main Page Content (Matching max-w-6xl margin spacing) */}
      <section className="py-8 sm:py-12 lg:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-10 sm:space-y-14">
          
          {/* Section 1: Company Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            <div className="lg:col-span-5 flex">
              <div className="relative w-full h-[380px] sm:h-[420px] lg:h-full min-h-[380px] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                <Image
                  src="/images/building.png"
                  alt="928 Credit Concept Storefront"
                  fill
                  className="object-cover object-center rounded-2xl"
                  priority
                />
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between py-1 space-y-4">
              <div>
                <span className="text-[#E87722] font-extrabold text-xs uppercase tracking-wider">
                  Company Overview
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0B192C] leading-tight tracking-tight mt-1">
                  SEC Registered Lending Company
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                928 Credit Concept Lending Investor Corporation is an SEC-registered lending company incorporated on February 20, 2020 (SEC Reg. No. CS202002431). The company is authorized to operate under the Lending Company Regulation Act of 2007 (Republic Act No. 9474, CA No. 3247) and provides business financing solutions to registered enterprises across Luzon.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="flex items-center space-x-2 text-[#0B192C]">
                    <BadgeCheck className="w-5 h-5 text-[#E87722]" />
                    <span className="font-bold text-xs sm:text-sm">SEC Registration</span>
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

          {/* Section 2: Company Timeline */}
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-[#E87722] font-extrabold text-xs uppercase tracking-wider">Our Journey</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C]">Company Timeline</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2 relative">
                <div className="text-xs font-black text-[#E87722] uppercase tracking-wider">2020</div>
                <h4 className="font-bold text-sm text-[#0B192C]">Company Incorporated</h4>
                <p className="text-xs text-slate-500">Official SEC registration CS202002431 on Feb 20, 2020.</p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2 relative">
                <div className="text-xs font-black text-[#E87722] uppercase tracking-wider">2020</div>
                <h4 className="font-bold text-sm text-[#0B192C]">Started Lending Operations</h4>
                <p className="text-xs text-slate-500">Launched non-collateralized business loans for MSMEs.</p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2 relative">
                <div className="text-xs font-black text-[#E87722] uppercase tracking-wider">2021 - Present</div>
                <h4 className="font-bold text-sm text-[#0B192C]">Expanded Loan Services</h4>
                <p className="text-xs text-slate-500">Catering business loan applications across Luzon and Metro Manila.</p>
              </div>

              <div className="bg-[#0B192C] text-white p-5 rounded-2xl border border-slate-800 space-y-2 relative">
                <div className="text-xs font-black text-[#E87722] uppercase tracking-wider">Future</div>
                <h4 className="font-bold text-sm text-white">Nationwide Expansion</h4>
                <p className="text-xs text-slate-300">Expanding presence across strategic regions in the country.</p>
              </div>
            </div>
          </div>

          {/* Section 3: Vision & Mission (4 Cards) */}
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-[#E87722] font-extrabold text-xs uppercase tracking-wider">Purpose & Direction</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C]">Vision & Mission</h2>
            </div>

            {/* Vision Banner */}
            <div className="bg-[#0B192C] text-white p-6 rounded-2xl border border-slate-800 shadow-md">
              <div className="flex items-center space-x-3 text-[#E87722] mb-2">
                <Building2 className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                To become the leading provider of financial products for Small and Medium Enterprises across the country.
              </p>
            </div>

            {/* Mission 4 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="w-10 h-10 rounded-full border-2 border-[#0B192C] flex items-center justify-center text-[#0B192C]">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#0B192C]">SMEs</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Provide accessible financing through high-quality lending services.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="w-10 h-10 rounded-full border-2 border-[#0B192C] flex items-center justify-center text-[#0B192C]">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#0B192C]">Employees</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Create a competitive workplace with continuous professional growth.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="w-10 h-10 rounded-full border-2 border-[#0B192C] flex items-center justify-center text-[#0B192C]">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#0B192C]">Shareholders</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Deliver sustainable returns through transparency and responsible management.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="w-10 h-10 rounded-full border-2 border-[#0B192C] flex items-center justify-center text-[#0B192C]">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#0B192C]">Communities</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Support business development and economic growth.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Core Values (3 Icon Cards) */}
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-[#E87722] font-extrabold text-xs uppercase tracking-wider">Guided Principles</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C]">Our Core Values</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center sm:text-left space-y-2 p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="w-12 h-12 rounded-full border-2 border-[#0B192C] flex items-center justify-center mx-auto sm:mx-0 text-[#0B192C]">
                  <Shield className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-sm text-[#0B192C]">Honesty & Integrity</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We uphold the highest standards of honesty and integrity in every transaction.
                </p>
              </div>

              <div className="text-center sm:text-left space-y-2 p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="w-12 h-12 rounded-full border-2 border-[#0B192C] flex items-center justify-center mx-auto sm:mx-0 text-[#0B192C]">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-sm text-[#0B192C]">Quality</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We provide outstanding financial products and exceptional customer service.
                </p>
              </div>

              <div className="text-center sm:text-left space-y-2 p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="w-12 h-12 rounded-full border-2 border-[#0B192C] flex items-center justify-center mx-auto sm:mx-0 text-[#0B192C]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-sm text-[#0B192C]">Accountability</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We honor every commitment with professionalism and transparency.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5 & 6: Operations & Areas of Operation & Business Partners */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
              <Clock className="w-6 h-6 text-[#E87722]" />
              <h4 className="font-bold text-sm text-[#0B192C]">Company Operations</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Since beginning operations in 2020, the company has continuously expanded its lending services by providing efficient financing solutions to registered business owners.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
              <MapPin className="w-6 h-6 text-[#E87722]" />
              <h4 className="font-bold text-sm text-[#0B192C]">Areas of Operation</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                We currently accept business loan applications throughout Luzon, with a strong client base in Metro Manila.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
              <Users className="w-6 h-6 text-[#E87722]" />
              <h4 className="font-bold text-sm text-[#0B192C]">Business Partners</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Our lending operations are supported by trusted business partners and banking institutions, ensuring sustainable financial capacity for our borrowers.
              </p>
            </div>
          </div>

          {/* Section 7: Future Expansion (Checklist) */}
          <div className="bg-[#0B192C] text-white rounded-2xl p-8 sm:p-10 border border-slate-800 space-y-6">
            <div className="space-y-1">
              <span className="text-[#E87722] font-extrabold text-xs uppercase tracking-wider">Strategic Goals</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Future Expansion</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-[#E87722] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">Expand into rural provinces</span>
              </div>
              <div className="flex items-center space-x-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-[#E87722] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">Increase MSME borrowers</span>
              </div>
              <div className="flex items-center space-x-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-[#E87722] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">Develop new loan products</span>
              </div>
              <div className="flex items-center space-x-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-[#E87722] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">Open branches in Metro Manila</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
