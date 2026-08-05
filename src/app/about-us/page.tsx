import Link from "next/link";
import Image from "next/image";
import { 
  Shield, 
  Award, 
  CheckCircle2, 
  Building2, 
  Users,
  Target,
  TrendingUp,
  HeartHandshake,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <div className="w-full  overflow-hidden">
      <section className="relative w-full  pt-0 pb-4 sm:pb-6 lg:pb-8 min-h-[150px] sm:min-h-[190px] lg:min-h-[240px] flex items-stretch overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 w-full my-auto">

          <div className="absolute inset-y-0 right-0 sm:right-6 lg:right-8 h-full pointer-events-none z-20 flex justify-end overflow-hidden">
            <Image
              src="/images/wholeoverlay.png"
              alt="Decorative Header Overlay"
              width={632}
              height={770}
              className="h-full w-auto object-right object-cover"
              priority
            />
          </div>

          <div className="relative z-10 min-h-[160px] sm:min-h-[200px] lg:min-h-[240px] flex items-center">

            {/* Masked Hero Background Image */}
            <div 
              className="absolute inset-y-0 right-0 w-3/5 sm:w-2/3 lg:w-7/12 z-0 overflow-hidden pointer-events-none"
              style={{
                WebkitMaskImage: "radial-gradient(circle at 80% 50%, black 30%, transparent 75%)",
                maskImage: "radial-gradient(circle at 80% 50%, black 30%, transparent 75%)",
              }}
            >
              <Image
                src="/images/loanpicc.png"
                alt="928 Credit Concept Lending Headquarters"
                fill
                sizes="(max-width: 640px) 60vw, (max-width: 1024px) 66vw, 58vw"
                className="object-cover object-center"
                priority
              />
            </div>
            
            <div className="w-[57%] sm:w-[70%] lg:w-[60%] space-y-2 sm:space-y-3 z-30 relative px-4 sm:px-6 lg:px-10 py-4 sm:py-6 my-auto flex flex-col justify-center">
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B192C] leading-tight [text-shadow:_0_0_4px_#ffffff,_0_0_4px_#ffffff]">
                  About 928 Credit Concept Lending
                </h1>
              </div>

              <div className="w-12 h-1 bg-[#E87722] rounded-full"></div>

              <p className="text-xs sm:text-sm text-slate-900 max-w-md leading-relaxed [text-shadow:_0_0_4px_#ffffff,_0_0_4px_#ffffff]">
                SEC-registered since 2020, 928 Credit Concept Lending is a trusted financial partner for Philippine SMEs, built on integrity, quality, and accountability.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-6 sm:py-8 lg:py-10 ">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-10 sm:space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            <div className="lg:col-span-5 flex">
              <div className="relative w-full aspect-[4/3] sm:aspect-[5/4] min-h-[260px] rounded-2xl overflow-hidden border border-slate-100 shadow-md bg-slate-950">
                <Image
                  src="/images/gallery/1.JPG"
                  alt="928 Credit Concept Office"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
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
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0B192C] leading-tight tracking-tight mt-1.5">
                  SEC Registered Lending Company
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                928 Credit Concept Lending Investor Corporation is an SEC-registered lending company incorporated on February 20, 2020 (SEC Reg. No. CS202002431). The company is authorized to operate under the Lending Company Regulation Act of 2007 (Republic Act No. 9474, CA No. 3247) and provides business financing solutions to registered enterprises across Luzon.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-3">
                <div>
                  <div className="text-[11px] font-bold text-[#E87722] uppercase tracking-wider mb-1">SEC Registration</div>
                  <div className="text-lg font-bold text-[#0B192C]">CS202002431</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Incorporated Feb 20, 2020</div>
                </div>

                <div>
                  <div className="text-[11px] font-bold text-[#E87722] uppercase tracking-wider mb-1">Authority Certificate</div>
                  <div className="text-lg font-bold text-[#0B192C]">CA No. 3247</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Republic Act No. 9474</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.15em]">Our Journey</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B192C] mt-1">Company Timeline</h2>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute left-0 right-0 top-1.5 h-px bg-slate-200" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 relative">
                {timeline.map((t) => (
                  <div key={t.title}>
                    <div className="flex items-center gap-2 mb-2 relative z-10">
                      <span className="w-2 h-2 rounded-full bg-[#E87722]" />
                      <span className="text-xs font-bold text-[#E87722] uppercase tracking-wider">{t.year}</span>
                    </div>
                    <h4 className="font-bold text-sm text-[#0B192C] mb-1">{t.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.15em]">Purpose & Direction</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B192C] mt-1">Vision & Mission</h2>
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

          <div className="space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.15em]">Guided Principles</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B192C] mt-1">Our Core Values</h2>
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

          <div className="bg-[#0B192C] text-white rounded-2xl p-8 sm:p-10 space-y-5 border border-slate-800 shadow-xl">
            <div className="space-y-1">
              <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.15em]">Strategic Goals</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Future Expansion</h2>
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

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.15em]">Regulatory Governance</span>
              <h3 className="text-xl font-bold text-[#0B192C]">Compliance &amp; Memberships</h3>
              <p className="text-xs text-slate-500 max-w-lg leading-relaxed">
                Review our official SEC licensing, Anti-Money Laundering Council (AMLC) registration, and Credit Management Association (CMAP) accreditation details.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-[#0B192C] text-[#0B192C] hover:bg-[#0B192C] hover:text-white font-bold text-xs px-6 py-2.5 rounded-md shrink-0 transition-colors bg-white"
            >
              <Link href="/compliance" className="flex items-center gap-2">
                View Compliance <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
}