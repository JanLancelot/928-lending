import Link from "next/link";
import Image from "next/image";
import { Shield, Award, CheckCircle2, Target, HeartHandshake, Building2, ChevronRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutUsPage() {
  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Compact Page Header Label */}
      <section className="relative w-full bg-white pt-0 pb-6 lg:pb-8 min-h-[140px] sm:min-h-[160px] flex items-center overflow-hidden border-b border-slate-100">
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

          {/* Connected Overlays (Compact scale for About Us header) */}
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
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Who We Are Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[#E87722] font-extrabold text-xs uppercase tracking-wider">
                  Who We Are
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0B192C] mt-1 tracking-tight">
                  Your Premier Financial Lending Partner
                </h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Established in 2020, 928 Credit Concept Lending Investor Corporation is an SEC-registered lending investor corporation based in Baliwag City, Bulacan. We specialize in non-collateralized lending facilities tailored specifically for Small and Medium Enterprises (SMEs) across Luzon.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our mission is to bridge the funding requirements of growing businesses by providing fast, transparent, and hassle-free access to business capital.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <div className="text-2xl font-black text-[#0B192C]">SEC Registered</div>
                  <div className="text-xs text-slate-500 mt-1">100% Compliant & Transparent</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <div className="text-2xl font-black text-[#E87722]">2020</div>
                  <div className="text-xs text-slate-500 mt-1">Founded in Bulacan, Luzon</div>
                </div>
              </div>
            </div>

            {/* Side Image Showcase */}
            <div className="lg:col-span-6">
              <div className="relative rounded-lg overflow-hidden shadow-lg border border-slate-200">
                <Image
                  src="/images/hero_meeting.png"
                  alt="928 Lending Team Discussion"
                  width={600}
                  height={450}
                  className="w-full h-[360px] sm:h-[400px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="rounded-lg border-slate-200 shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <div className="p-3 rounded-full bg-slate-900 text-[#E87722]">
                  <Target className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-bold text-[#0B192C]">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm leading-relaxed">
                To provide Small and Medium Enterprises (SMEs) with accessible, high-quality lending facilities and streamlined loan processing systems that enable them to satisfy immediate capital requirements and achieve sustainable growth.
              </CardContent>
            </Card>

            <Card className="rounded-lg border-slate-200 shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <div className="p-3 rounded-full bg-slate-900 text-[#E87722]">
                  <Building2 className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-bold text-[#0B192C]">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm leading-relaxed">
                To be the top-of-mind alternative financial lending partner for Small and Medium Enterprises across the Philippines, recognized for operating with unwavering honesty, integrity, quality, and accountability.
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[#E87722] font-extrabold text-xs uppercase tracking-wider">
                Guided Principles
              </span>
              <h2 className="text-3xl font-black text-[#0B192C]">Our Core Values</h2>
              <p className="text-slate-600 text-sm">
                Every transaction and relationship at 928 Credit Concept is guided by our four core pillars.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="rounded-lg border-slate-200 p-6 text-center space-y-3 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center mx-auto text-[#0B192C]">
                  <Shield className="w-6 h-6 text-[#E87722]" />
                </div>
                <h3 className="font-bold text-base text-[#0B192C]">Honesty</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We maintain complete transparency in all our interest rates, terms, and loan conditions.
                </p>
              </Card>

              <Card className="rounded-lg border-slate-200 p-6 text-center space-y-3 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center mx-auto text-[#0B192C]">
                  <HeartHandshake className="w-6 h-6 text-[#E87722]" />
                </div>
                <h3 className="font-bold text-base text-[#0B192C]">Integrity</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We uphold the highest standard of business ethics in every client and partner interaction.
                </p>
              </Card>

              <Card className="rounded-lg border-slate-200 p-6 text-center space-y-3 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center mx-auto text-[#0B192C]">
                  <Award className="w-6 h-6 text-[#E87722]" />
                </div>
                <h3 className="font-bold text-base text-[#0B192C]">Quality</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We deliver outstanding products and premium customer service designed for business needs.
                </p>
              </Card>

              <Card className="rounded-lg border-slate-200 p-6 text-center space-y-3 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center mx-auto text-[#0B192C]">
                  <CheckCircle2 className="w-6 h-6 text-[#E87722]" />
                </div>
                <h3 className="font-bold text-base text-[#0B192C]">Accountability</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We guarantee full accountability in fulfilling our financial commitments to our partners.
                </p>
              </Card>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-[#0B192C] text-white rounded-lg p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold">Ready to Grow Your Business?</h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                Apply for non-collateralized SME business loans with fast turnaround times and dedicated support.
              </p>
            </div>
            <Button
              asChild
              className="bg-[#E87722] hover:bg-[#d46716] text-white font-bold px-8 py-3.5 rounded-md shadow-md shrink-0 transition-all duration-300 transform hover:-translate-y-0.5"
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
