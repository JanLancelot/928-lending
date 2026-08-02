import Link from "next/link";
import Image from "next/image";
import { Zap, Target, ShieldCheck, TrendingUp, CheckCircle2, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full bg-white overflow-hidden">
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
                To provide our Small and Medium Enterprises partners alternative sources of funds through high-quality lending facilities with efficient loan processing system to bridge their capital funding requirements.
              </p>

              <div className="pt-2">
                <Button
                  asChild
                  className="bg-[#E87722] hover:bg-[#d46716] text-white text-xs sm:text-sm font-bold px-7 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Link href="/apply-now">Apply Now</Link>
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

          {/* Connected Overlays (Smaller scale, connected along right edge) */}
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

      <section className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-3 sm:mt-4">
        <div className="bg-[#0B192C] text-white rounded-lg shadow-2xl p-6 sm:p-8 lg:p-10 border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y md:divide-y-0 lg:divide-x divide-slate-800">
            
            <div className="group flex flex-col items-center text-center px-4 pt-4 md:pt-0 transition-transform duration-300 hover:-translate-y-1 cursor-default">
              <div className="w-14 h-14 rounded-full bg-slate-900 border-2 border-[#E87722] flex items-center justify-center mb-4 text-[#E87722] shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E87722] group-hover:text-white">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Fast and Reliable</h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-xs">
                Streamlined loan processes designed to effectively accommodate urgent business capital requirements.
              </p>
            </div>

            <div className="group flex flex-col items-center text-center px-4 pt-6 md:pt-0 transition-transform duration-300 hover:-translate-y-1 cursor-default">
              <div className="w-14 h-14 rounded-full bg-slate-900 border-2 border-[#E87722] flex items-center justify-center mb-4 text-[#E87722] shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E87722] group-hover:text-white">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">SME Focused</h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-xs">
                Dedicated alternative funding sources tailored for Small and Medium Enterprises across Luzon.
              </p>
            </div>

            <div className="group flex flex-col items-center text-center px-4 pt-6 md:pt-0 transition-transform duration-300 hover:-translate-y-1 cursor-default">
              <div className="w-14 h-14 rounded-full bg-slate-900 border-2 border-[#E87722] flex items-center justify-center mb-4 text-[#E87722] shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E87722] group-hover:text-white">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Trusted Partner</h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-xs">
                SEC-registered lending investor corporation operating with unwavering honesty and integrity.
              </p>
            </div>

            <div className="group flex flex-col items-center text-center px-4 pt-6 md:pt-0 transition-transform duration-300 hover:-translate-y-1 cursor-default">
              <div className="w-14 h-14 rounded-full bg-slate-900 border-2 border-[#E87722] flex items-center justify-center mb-4 text-[#E87722] shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E87722] group-hover:text-white">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Growth Driven</h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-xs">
                High-quality non-collateralized lending facilities empowering business growth and development.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="relative rounded-lg overflow-hidden shadow-xl border border-slate-200 group transition-all duration-500 hover:shadow-2xl">
                <Image
                  src="/images/building.png"
                  alt="928 Credit Concept Lending Plaza Storefront"
                  width={600}
                  height={750}
                  className="w-full h-[450px] lg:h-[520px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/40 via-transparent to-transparent"></div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[#E87722] font-extrabold text-sm uppercase tracking-wider">
                  About Us
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0B192C] mt-2 tracking-tight">
                  Supporting Businesses, Building Futures
                </h2>
              </div>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Established in 2020, 928 Credit Concept Lending Investor Corporation is an SEC-registered lending company in the Philippines. Our goal is to be the premier financial partner for Small and Medium Enterprises (SMEs) by operating with unwavering honesty, integrity, quality, and accountability.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="group text-center sm:text-left space-y-2 transition-transform duration-300 hover:-translate-y-0.5">
                  <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center mx-auto sm:mx-0 text-[#0B192C] transition-all duration-300 group-hover:bg-[#0B192C] group-hover:text-white group-hover:border-[#0B192C] group-hover:scale-110">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm text-[#0B192C]">Honesty and Integrity</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    We uphold the highest standard of integrity and honesty in all our actions.
                  </p>
                </div>

                <div className="group text-center sm:text-left space-y-2 transition-transform duration-300 hover:-translate-y-0.5">
                  <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center mx-auto sm:mx-0 text-[#0B192C] transition-all duration-300 group-hover:bg-[#0B192C] group-hover:text-white group-hover:border-[#0B192C] group-hover:scale-110">
                    <Award className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm text-[#0B192C]">Quality</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    We provide outstanding products and deliver premium services.
                  </p>
                </div>

                <div className="group text-center sm:text-left space-y-2 transition-transform duration-300 hover:-translate-y-0.5">
                  <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center mx-auto sm:mx-0 text-[#0B192C] transition-all duration-300 group-hover:bg-[#0B192C] group-hover:text-white group-hover:border-[#0B192C] group-hover:scale-110">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm text-[#0B192C]">Accountability</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    We guarantee our accountability in delivering our commitments.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  asChild
                  className="bg-[#0B192C] hover:bg-slate-800 text-white text-sm font-bold px-8 py-3.5 rounded-md shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Link href="/about-us">Learn More About Us</Link>
                </Button>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}