import Link from "next/link";
import Image from "next/image";
import { 
  Shield, 
  Award, 
  CheckCircle2, 
  Target, 
  HeartHandshake, 
  Building2, 
  ChevronRight, 
  FileCheck, 
  Users, 
  TrendingUp, 
  Briefcase,
  BadgeCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

      {/* Main Page Content */}
      <section className="py-8 sm:py-12 lg:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12 sm:space-y-16">
          
          {/* Who We Are & Company Profile */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-[#E87722] font-extrabold text-xs uppercase tracking-wider">
                  Company Profile
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0B192C] mt-1 tracking-tight">
                  Who We Are
                </h2>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Established in 2020, <strong>928 CREDIT CONCEPT LENDING INVESTOR CORPORATION</strong> is a Securities and Exchange Commission (SEC) registered corporation in the Philippines, incorporated on February 20, 2020 with Registration No. <strong>CS202002431</strong>.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                The company is granted Certificate of Authority No. <strong>3247</strong> under the Lending Company Regulation Act of 2007 (Republic Act No. 9474), authorizing operations at Unit E 2nd Floor Violago Plaza, Pagala, Baliwag City, Bulacan. We specialize in non-collateralized lending facilities tailored to satisfy the funding requirements of registered business owners across Luzon.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
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

            {/* Side Image Showcase */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                <Image
                  src="/images/hero_meeting.png"
                  alt="928 Lending Team Discussion"
                  width={600}
                  height={450}
                  className="w-full h-[360px] sm:h-[400px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Mission & Vision Statements */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[#E87722] font-extrabold text-xs uppercase tracking-wider">
                Purpose & Direction
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C]">Vision & Mission</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision Card */}
              <Card className="rounded-xl border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                  <div className="p-3 rounded-full bg-slate-900 text-[#E87722]">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-[#0B192C]">Our Vision</CardTitle>
                    <p className="text-xs text-slate-500">To be the leading financial partner for MSMEs</p>
                  </div>
                </CardHeader>
                <CardContent className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-2">
                  To be the leading provider of financial products for Small and Medium Enterprises across the country, recognized for operating with unwavering honesty, integrity, quality, and accountability.
                </CardContent>
              </Card>

              {/* Mission Card */}
              <Card className="rounded-xl border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                  <div className="p-3 rounded-full bg-slate-900 text-[#E87722]">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-[#0B192C]">Our Mission</CardTitle>
                    <p className="text-xs text-slate-500">Commitment to partners, employees & shareholders</p>
                  </div>
                </CardHeader>
                <CardContent className="text-slate-600 text-xs sm:text-sm space-y-2 pt-2 leading-relaxed">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0 mt-0.5" />
                    <span>To provide SME partners alternative sources of funds through high-quality lending facilities with efficient loan processing.</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0 mt-0.5" />
                    <span>To provide employees competitive work environments with opportunities for professional growth and attractive compensation.</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0 mt-0.5" />
                    <span>To provide shareholders optimum returns on investment through transparent financial reporting systems.</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Core Values */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[#E87722] font-extrabold text-xs uppercase tracking-wider">
                Guided Principles
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C]">Our Core Values</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Every transaction and relationship at 928 Credit Concept is guided by our core pillars.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Card className="rounded-xl border-slate-200 p-6 text-center space-y-3 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-[#E87722]">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-sm text-[#0B192C]">Honesty and Integrity</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We uphold the highest standard of integrity and honesty in all our actions.
                </p>
              </Card>

              <Card className="rounded-xl border-slate-200 p-6 text-center space-y-3 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-[#E87722]">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-sm text-[#0B192C]">Quality</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We provide outstanding products and deliver premium services.
                </p>
              </Card>

              <Card className="rounded-xl border-slate-200 p-6 text-center space-y-3 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-[#E87722]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-sm text-[#0B192C]">Accountability</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We guarantee our accountability in delivering our commitments.
                </p>
              </Card>
            </div>
          </div>

          {/* Operational Infrastructure Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
              <Briefcase className="w-6 h-6 text-[#E87722]" />
              <h4 className="font-bold text-sm text-[#0B192C]">Streamlined Operations</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Since 2020, we continuously expand our lending operations by providing business loans to registered owners via efficient, accommodating loan processes.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
              <TrendingUp className="w-6 h-6 text-[#E87722]" />
              <h4 className="font-bold text-sm text-[#0B192C]">Strong Funding Partners</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                We source funds from individual creditors, business partners, and bank loans to sustain operational growth and increase partner profitability.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
              <Users className="w-6 h-6 text-[#E87722]" />
              <h4 className="font-bold text-sm text-[#0B192C]">Trained Professional Workforce</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Composed of highly trained office personnel operating under a professional development hierarchy to carry out dedicated operating functions.
              </p>
            </div>
          </div>

          {/* CTA Banner */}
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
