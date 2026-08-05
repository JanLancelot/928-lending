import Link from "next/link";
import Image from "next/image";
import { Shield, ShieldCheck, Award, Building2, CheckCircle2, ExternalLink, ChevronRight, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const complianceHighlights = [
  {
    icon: ShieldCheck,
    title: "SEC Licensed & Regulated",
    desc: "Fully registered with the Securities and Exchange Commission (SEC CS202002431) operating under CA No. 3247 pursuant to R.A. 9474.",
  },
  {
    icon: Shield,
    title: "AMLC Registered Institution",
    desc: "Strictly adheres to Anti-Money Laundering Council guidelines ensuring legal compliance and secure financial practices.",
  },
  {
    icon: Award,
    title: "CMAP Member",
    desc: "Official member of the Credit Management Association of the Philippines, committed to ethical and professional credit practices.",
  },
  {
    icon: FileCheck,
    title: "Fair Lending Standards",
    desc: "Guarantees complete interest transparency, zero hidden charges, and adherence to Philippine consumer lending regulations.",
  },
];

export default function CompliancePage() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full pt-0 pb-4 sm:pb-6 lg:pb-8 min-h-[150px] sm:min-h-[190px] lg:min-h-[240px] flex items-stretch overflow-hidden">
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
                alt="928 Credit Concept Corporate Governance"
                fill
                sizes="(max-width: 640px) 60vw, (max-width: 1024px) 66vw, 58vw"
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="w-[57%] sm:w-[70%] lg:w-[60%] space-y-2 sm:space-y-3 z-30 relative px-4 sm:px-6 lg:px-10 py-4 sm:py-6 my-auto flex flex-col justify-center">
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B192C] leading-tight [text-shadow:_0_0_4px_#ffffff,_0_0_4px_#ffffff]">
                  Compliance &amp; Memberships
                </h1>
              </div>

              <div className="w-12 h-1 bg-[#E87722] rounded-full"></div>

              <p className="text-xs sm:text-sm text-slate-900 max-w-md leading-relaxed [text-shadow:_0_0_4px_#ffffff,_0_0_4px_#ffffff]">
                Committed to legal integrity, regulatory oversight, and legal standards set by Philippine financial governing bodies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-6 sm:py-8 lg:py-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">
          {/* Key Authority Badges */}
          <div className="bg-white text-[#0B192C] rounded-2xl p-8 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
            <div className="space-y-1.5">
              <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.15em]">Primary Authorization</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B192C]">SEC Registration &amp; Licensing</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                928 Credit Concept Lending Investor Corporation is officially licensed by the Securities and Exchange Commission (SEC) under the Lending Company Regulation Act of 2007 (Republic Act No. 9474).
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 space-y-1">
                <div className="text-xs font-bold text-[#E87722] uppercase tracking-wider">SEC Registration No.</div>
                <div className="text-xl sm:text-2xl font-bold text-[#0B192C]">CS202002431</div>
                <div className="text-xs text-slate-500">Incorporated on February 20, 2020</div>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 space-y-1">
                <div className="text-xs font-bold text-[#E87722] uppercase tracking-wider">Certificate of Authority (COA)</div>
                <div className="text-xl sm:text-2xl font-bold text-[#0B192C]">CA No. 3247</div>
                <div className="text-xs text-slate-500">Authorized Lending Institution</div>
              </div>
            </div>

            <div className="pt-1">
              <a
                href="https://www.sec.gov.ph"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#E87722] hover:underline"
              >
                Verify Certificate on SEC Verification Portal <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Memberships & Compliance Cards */}
          <div className="space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.15em]">Institutional Accreditation</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B192C] mt-1">Regulatory Affiliations</h2>
              <p className="text-xs text-slate-500">Official memberships and regulatory compliance registrations.</p>
            </div>

            <div className="border border-slate-300 rounded-2xl overflow-hidden shadow-sm bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-300">
                {/* AMLC Card */}
                <div className="flex flex-col sm:flex-row items-center gap-6 px-8 py-8 text-center sm:text-left">
                  <div className="relative w-36 h-24 flex-shrink-0">
                    <Image
                      src="/images/compliance/amlclogo.png"
                      alt="Anti-Money Laundering Council (AMLC)"
                      fill
                      sizes="144px"
                      className="object-contain object-center sm:object-left"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-xs font-bold text-[#E87722] uppercase tracking-[0.15em]">AMLC Registered</div>
                    <h3 className="font-bold text-base text-[#0B192C]">Anti-Money Laundering Council</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Registered with the Anti-Money Laundering Council, maintaining strict adherence to anti-money laundering protocols and financial transparency laws.
                    </p>
                  </div>
                </div>

                {/* CMAP Card */}
                <div className="flex flex-col sm:flex-row items-center gap-6 px-8 py-8 text-center sm:text-left">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src="/images/compliance/cmaplogo.png"
                      alt="Credit Management Association of the Philippines (CMAP)"
                      fill
                      sizes="96px"
                      className="object-contain object-center sm:object-left"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-xs font-bold text-[#E87722] uppercase tracking-[0.15em]">CMAP Active Member</div>
                    <h3 className="font-bold text-base text-[#0B192C]">Credit Management Association of the Philippines</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      A proud corporate member of CMAP — the nation&apos;s leading credit management association established in 1932, committed to high credit governance standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Principles Grid */}
          <div className="space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.15em]">Governance &amp; Trust</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B192C] mt-1">Compliance Commitments</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceHighlights.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-6 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
                  <Icon className="w-6 h-6 text-[#E87722]" strokeWidth={1.5} />
                  <h4 className="font-bold text-sm text-[#0B192C]">{title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-[#0B192C] text-white rounded-2xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-[#E87722]">
                <Building2 className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-[0.15em]">Official Lending Partner</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold">Apply With Confidence</h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                Experience transparent, legal, and non-collateralized business financing tailored for Philippines SMEs.
              </p>
            </div>
            <Button
              asChild
              className="bg-[#E87722] hover:bg-[#d46716] text-white font-bold text-sm px-8 py-3.5 rounded-md shadow-md shrink-0 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
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
