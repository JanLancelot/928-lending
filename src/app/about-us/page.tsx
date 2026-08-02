import Image from "next/image";
import { 
  Shield, 
  Award, 
  CheckCircle2, 
  Building2, 
  Users,
  Target,
  TrendingUp,
  HeartHandshake
} from "lucide-react";

const timeline = [
  { year: "2020", title: "Company Incorporated", desc: "Official SEC registration CS202002431 on Feb 20, 2020." },
  { year: "2020", title: "Started Lending Operations", desc: "Launched non-collateralized business loans for MSMEs." },
  { year: "2021–Present", title: "Expanded Loan Services", desc: "Catering business loan applications across Luzon and Metro Manila." },
  { year: "Future", title: "Nationwide Expansion", desc: "Expanding presence across strategic regions in the country." },
];

const mission = [
  { icon: Target, title: "SMEs", desc: "Provide accessible financing through high-quality lending services." },
  { icon: Users, title: "Employees", desc: "Create a competitive workplace with continuous professional growth." },
  { icon: TrendingUp, title: "Shareholders", desc: "Deliver sustainable returns through transparency and responsible management." },
  { icon: HeartHandshake, title: "Communities", desc: "Support business development and economic growth." },
];

const values = [
  { icon: Shield, title: "Honesty & Integrity", desc: "We uphold the highest standards of honesty and integrity in every transaction." },
  { icon: Award, title: "Quality", desc: "We provide outstanding financial products and exceptional customer service." },
  { icon: CheckCircle2, title: "Accountability", desc: "We honor every commitment with professionalism and transparency." },
];

const goals = [
  "Expand into rural provinces",
  "Increase MSME borrowers",
  "Develop new loan products",
  "Open branches in Metro Manila",
];

export default function AboutUsPage() {
  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Compact Page Header */}
      <section className="relative w-full bg-white pt-0 pb-6 lg:pb-8 min-h-[140px] sm:min-h-[160px] flex items-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
            
            <div className="lg:col-span-6 space-y-2 z-20 pl-2 sm:pl-6 lg:pl-10 my-auto flex flex-col justify-center">
              <div className="space-y-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0B192C] leading-none">
                  About 928 Credit Concept Lending
                </h1>
              </div>

              <div className="w-12 h-1 bg-[#E87722] rounded-full"></div>

              <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
                Supporting Filipino businesses through responsible lending.
              </p>
            </div>

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

      <section className="py-6 sm:py-8 lg:py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-10 sm:space-y-12">
          
          {/* Section 1: Company Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            <div className="lg:col-span-5 flex">
              <div className="relative w-full h-[380px] sm:h-[420px] lg:h-full min-h-[380px] rounded-2xl overflow-hidden border border-slate-100 shadow-md">
                <Image
                  src="/images/building.png"
                  alt="928 Credit Concept Storefront"
                  fill
                  className="object-cover object-center rounded-2xl"
                  priority
                />
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between py-1 space-y-4 sm:space-y-5">
              <div>
                <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.15em]">
                  Company Overview
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0B192C] leading-tight tracking-tight mt-1.5">
                  SEC Registered Lending Company
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                928 Credit Concept Lending Investor Corporation is an SEC-registered lending company incorporated on February 20, 2020 (SEC Reg. No. CS202002431). The company is authorized to operate under the Lending Company Regulation Act of 2007 (Republic Act No. 9474, CA No. 3247) and provides business financing solutions to registered enterprises across Luzon.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-3">
                <div>
                  <div className="text-[11px] font-bold text-[#E87722] uppercase tracking-wider mb-1">SEC Registration</div>
                  <div className="text-lg font-black text-[#0B192C]">CS202002431</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Incorporated Feb 20, 2020</div>
                </div>

                <div>
                  <div className="text-[11px] font-bold text-[#E87722] uppercase tracking-wider mb-1">Authority Certificate</div>
                  <div className="text-lg font-black text-[#0B192C]">CA No. 3247</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Republic Act No. 9474</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Company Timeline */}
          <div className="space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.15em]">Our Journey</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C] mt-1">Company Timeline</h2>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute left-0 right-0 top-1.5 h-px bg-slate-200" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 relative">
                {timeline.map((t) => (
                  <div key={t.title}>
                    <div className="flex items-center gap-2 mb-2 relative z-10">
                      <span className="w-2 h-2 rounded-full bg-[#E87722]" />
                      <span className="text-xs font-black text-[#E87722] uppercase tracking-wider">{t.year}</span>
                    </div>
                    <h4 className="font-bold text-sm text-[#0B192C] mb-1">{t.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3: Vision & Mission */}
          <div className="space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.15em]">Purpose & Direction</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C] mt-1">Vision & Mission</h2>
            </div>

            <div className="bg-[#0B192C] text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2.5 text-[#E87722] mb-2">
                <Building2 className="w-4 h-4" strokeWidth={1.5} />
                <h3 className="text-xs font-bold uppercase tracking-[0.15em]">Our Vision</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
                To become the leading provider of financial products for Small and Medium Enterprises across the country.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-slate-200">
              {mission.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="py-5 first:pt-0 lg:py-4 lg:px-6 lg:first:pl-0 lg:last:pr-0">
                  <Icon className="w-5 h-5 text-[#0B192C] mb-2.5" strokeWidth={1.5} />
                  <h4 className="font-bold text-sm text-[#0B192C] mb-1">{title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Core Values */}
          <div className="space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.15em]">Guided Principles</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C] mt-1">Our Core Values</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title}>
                  <Icon className="w-5 h-5 text-[#0B192C] mb-2.5" strokeWidth={1.5} />
                  <h4 className="font-bold text-sm text-[#0B192C] mb-1">{title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Operations, Areas of Operation & Business Partners */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="py-5 md:py-2 md:px-6 md:first:pl-0 space-y-1.5">
              <h4 className="font-bold text-sm text-[#0B192C]">Company Operations</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Since beginning operations in 2020, the company has continuously expanded its lending services by providing efficient financing solutions to registered business owners.
              </p>
            </div>

            <div className="py-5 md:py-2 md:px-6 space-y-1.5">
              <h4 className="font-bold text-sm text-[#0B192C]">Areas of Operation</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                We currently accept business loan applications throughout Luzon, with a strong client base in Metro Manila.
              </p>
            </div>

            <div className="py-5 md:py-2 md:px-6 md:last:pr-0 space-y-1.5">
              <h4 className="font-bold text-sm text-[#0B192C]">Business Partners</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Our lending operations are supported by trusted business partners and banking institutions, ensuring sustainable financial capacity for our borrowers.
              </p>
            </div>
          </div>

          {/* Section 6: Future Expansion */}
          <div className="bg-[#0B192C] text-white rounded-2xl p-8 sm:p-10 space-y-5 border border-slate-800 shadow-xl">
            <div className="space-y-1">
              <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.15em]">Strategic Goals</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Future Expansion</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2.5">
              {goals.map((goal) => (
                <div key={goal} className="flex items-baseline gap-3 border-b border-slate-800/80 pb-2.5">
                  <span className="text-[#E87722] text-sm leading-none">—</span>
                  <span className="text-sm text-slate-200">{goal}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}