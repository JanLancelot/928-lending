import Link from "next/link";
import Image from "next/image";
import { Zap, Target, ShieldCheck, TrendingUp, CheckCircle2, Award, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full bg-white overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-12 pb-24 lg:pt-16 lg:pb-36 bg-gradient-to-b from-slate-50 to-white">
        {/* Background Geometric Watermark Pattern (Chevron) */}
        <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100 200 L300 600 L700 200" stroke="#0B192C" strokeWidth="80" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M-100 400 L300 800 L700 400" stroke="#E87722" strokeWidth="80" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Text Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-1">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0B192C] leading-none">
                  We Listen
                </h1>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#E87722] leading-none">
                  We Work
                </h1>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0B192C] leading-none">
                  We Lend
                </h1>
              </div>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                To provide our Small and Medium Enterprises partners alternative sources of funds through high-quality lending facilities with efficient loan processing system to bridge their capital funding requirements.
              </p>

              <div className="pt-2">
                <Link
                  href="/apply-now"
                  className="inline-block bg-[#E87722] hover:bg-[#d46716] text-white text-base font-bold px-8 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Right Hero Image Column with Decorative Curved Overlays */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg lg:max-w-none">
                
                {/* Top-Right Decorative Swoosh Overlay */}
                <div className="absolute -top-10 -right-8 w-64 h-64 z-20 pointer-events-none">
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M50 0 C120 0 200 80 200 150 L200 0 Z" fill="#0B192C" />
                    <path d="M70 0 C140 0 200 60 200 130 C200 100 130 0 70 0 Z" fill="#E87722" />
                  </svg>
                </div>

                {/* Main Hero Image with Masked Soft Bottom Fade */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-100 border border-slate-200/80">
                  <Image
                    src="/images/hero_meeting.png"
                    alt="928 Credit Concept Lending Team Meeting"
                    width={700}
                    height={520}
                    className="w-full h-[400px] sm:h-[460px] object-cover"
                    priority
                  />
                  {/* Soft Gradient Mask at Bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
                </div>

                {/* Bottom-Right Decorative Curved Swoosh Overlay */}
                <div className="absolute -bottom-8 -right-6 w-72 h-44 z-20 pointer-events-none">
                  <svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
                    <path d="M30 180 C120 180 300 120 300 20 L300 180 Z" fill="#E87722" />
                    <path d="M80 180 C160 180 300 140 300 60 L300 180 Z" fill="#0B192C" opacity="0.9" />
                  </svg>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 4-FEATURE HIGHLIGHTS BANNER ================= */}
      <section className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20">
        <div className="bg-[#0B192C] text-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y md:divide-y-0 lg:divide-x divide-slate-800">
            
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center px-4 pt-4 md:pt-0">
              <div className="w-14 h-14 rounded-full bg-slate-900 border-2 border-[#E87722] flex items-center justify-center mb-4 text-[#E87722] shadow-md">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Fast and Reliable</h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-xs">
                Streamlined loan processes designed to effectively accommodate urgent business capital requirements.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center px-4 pt-6 md:pt-0">
              <div className="w-14 h-14 rounded-full bg-slate-900 border-2 border-[#E87722] flex items-center justify-center mb-4 text-[#E87722] shadow-md">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">SME Focused</h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-xs">
                Dedicated alternative funding sources tailored for Small and Medium Enterprises across Luzon.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center px-4 pt-6 md:pt-0">
              <div className="w-14 h-14 rounded-full bg-slate-900 border-2 border-[#E87722] flex items-center justify-center mb-4 text-[#E87722] shadow-md">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Trusted Partner</h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-xs">
                SEC-registered lending investor corporation operating with unwavering honesty and integrity.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center px-4 pt-6 md:pt-0">
              <div className="w-14 h-14 rounded-full bg-slate-900 border-2 border-[#E87722] flex items-center justify-center mb-4 text-[#E87722] shadow-md">
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

      {/* ================= ABOUT US SECTION ================= */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Office Building Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
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

            {/* Right Column: About Us Content & Core Values */}
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

              {/* Core Values 3-Column Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                {/* Core Value 1 */}
                <div className="text-center sm:text-left space-y-2">
                  <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center mx-auto sm:mx-0 text-[#0B192C]">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm text-[#0B192C]">Honesty and Integrity</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    We uphold the highest standard of integrity and honesty in all our actions.
                  </p>
                </div>

                {/* Core Value 2 */}
                <div className="text-center sm:text-left space-y-2">
                  <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center mx-auto sm:mx-0 text-[#0B192C]">
                    <Award className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm text-[#0B192C]">Quality</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    We provide outstanding products and deliver premium services.
                  </p>
                </div>

                {/* Core Value 3 */}
                <div className="text-center sm:text-left space-y-2">
                  <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center mx-auto sm:mx-0 text-[#0B192C]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm text-[#0B192C]">Accountability</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    We guarantee our accountability in delivering our commitments.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href="/about-us"
                  className="inline-block bg-[#0B192C] hover:bg-slate-800 text-white text-sm font-bold px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  Learn More About Us
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
