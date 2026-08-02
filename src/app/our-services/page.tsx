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
  FileText,
  BadgePercent,
  Clock,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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
                High-quality non-collateralized lending facilities designed specifically to bridge the capital funding requirements of Small and Medium Enterprises.
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

          {/* Connected Overlays (Compact scale matching About Us) */}
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

      {/* Main Page Content Container (max-w-6xl with matching margin spacing) */}
      <section className="py-8 sm:py-12 lg:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12 sm:space-y-16">

          {/* Featured Primary Offering: Non-Collateralized Business Loan */}
          <div className="bg-[#0B192C] text-white rounded-2xl p-8 sm:p-10 lg:p-12 shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E87722]/20 border border-[#E87722]/40 text-[#E87722] text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" /> Primary Financial Product
                </div>
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                  Non-Collateralized Business Loan
                </h2>
                
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                  Our primary offering is designed specifically to fuel the growth of registered businesses without requiring traditional collateral assets. We provide accessible alternative capital to satisfy your working capital, inventory, or operational expansion requirements.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0" />
                    <span>No Traditional Collateral Required</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0" />
                    <span>Streamlined Loan Application</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0" />
                    <span>Tailored Capital Funding Facilities</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0" />
                    <span>Transparent Interest & Terms</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center pt-4 lg:pt-0">
                <Button
                  asChild
                  className="bg-[#E87722] hover:bg-[#d46716] text-white font-bold text-sm px-8 py-3.5 rounded-md shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Link href="/apply-now" className="flex items-center gap-2">
                    Apply Now <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>

            </div>
          </div>

          {/* What We Do Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-[#E87722] font-extrabold text-xs uppercase tracking-wider">
                  What We Do
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B192C] mt-1 tracking-tight">
                  Empowering Small & Medium Enterprises
                </h2>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We provide SME partners alternative sources of funds through high-quality lending facilities. Since beginning operations in 2020, we have continuously expanded our lending footprint to bridge the capital funding requirements of registered business owners.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Currently, we cater to business loan applications across Luzon, with a primary client concentration in Metro Manila and headquarters in Baliwag City, Bulacan.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <MapPin className="w-5 h-5 text-[#E87722] mb-1.5" />
                  <div className="font-bold text-xs sm:text-sm text-[#0B192C]">Areas of Operation</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Luzon & Metro Manila</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <BadgePercent className="w-5 h-5 text-[#E87722] mb-1.5" />
                  <div className="font-bold text-xs sm:text-sm text-[#0B192C]">Target Segment</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Registered MSME Owners</div>
                </div>
              </div>
            </div>

            {/* Showcase Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                <Image
                  src="/images/building.png"
                  alt="928 Credit Concept Storefront Plaza"
                  width={600}
                  height={420}
                  className="w-full h-[320px] sm:h-[380px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Why Us Section */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[#E87722] font-extrabold text-xs uppercase tracking-wider">
                Why Partner With Us
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C]">Why Choose 928 Lending?</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                We understand the fast-paced needs of growing businesses. Partnering with us means you benefit from dedicated service pillars.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="rounded-xl border-slate-200 p-6 text-center space-y-3 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-[#E87722]">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-sm text-[#0B192C]">Streamlined Processes</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Efficient loan processing systems designed to accommodate urgent capital needs promptly.
                </p>
              </Card>

              <Card className="rounded-xl border-slate-200 p-6 text-center space-y-3 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-[#E87722]">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-sm text-[#0B192C]">Professional Team</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Highly trained and reliable personnel operating under professional corporate standards.
                </p>
              </Card>

              <Card className="rounded-xl border-slate-200 p-6 text-center space-y-3 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-[#E87722]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-sm text-[#0B192C]">Uncompromising Integrity</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Full SEC compliance operating with unwavering honesty, quality, and accountability.
                </p>
              </Card>

              <Card className="rounded-xl border-slate-200 p-6 text-center space-y-3 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-[#E87722]">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-sm text-[#0B192C]">Future-Focused Growth</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Committed to empowering long-term business expansion and sustainable economic success.
                </p>
              </Card>
            </div>
          </div>

          {/* Future Expansion Roadmap */}
          <div className="bg-slate-50 rounded-2xl p-8 sm:p-10 border border-slate-200 space-y-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-[#E87722] font-extrabold text-xs uppercase tracking-wider">
                Strategic Growth
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C]">Future Expansion Roadmap</h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                928 Credit Concept Lending Investor Corporation remains committed to expanding its presence across the Philippines to cater to more business owners. Over the succeeding years, we aim to:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-slate-900 text-[#E87722] shrink-0 mt-0.5">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0B192C]">Expand to Rural Areas</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Extend business lending operations to rural areas in regional provinces.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-slate-900 text-[#E87722] shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0B192C]">Increase MSME Reach</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Scale the present number of MSME borrowers and community partners.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-slate-900 text-[#E87722] shrink-0 mt-0.5">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0B192C]">Tailored Loan Packages</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Develop new financial loan packages custom-fit to business needs.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-slate-900 text-[#E87722] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0B192C]">Strategic Metro Manila Branches</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Open new branch locations across strategic areas of Metro Manila.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
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
