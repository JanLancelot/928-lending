import Link from "next/link";
import { 
  ShieldAlert, 
  Building2, 
  Scale, 
  ShieldCheck, 
  ExternalLink, 
  Mail, 
  FileText,
  Lock
} from "lucide-react";

export interface SECDisclosureFooterProps {
  companyName?: string;
  secRegNo?: string;
  caNo?: string;
  npcRegistrationNo?: string;
}

export function SECDisclosureFooter({
  companyName = "928 Credit Concept Lending Investor Corporation",
  secRegNo = "CS202002431",
  caNo = "CA No. 3247",
  npcRegistrationNo = "NPC-REG-2026-928",
}: SECDisclosureFooterProps) {
  return (
    <section className="w-full py-8 sm:py-12 bg-[#081220] border-t border-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* SEC Statutory Mandatory Disclosure Alert Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-amber-200/90 text-xs sm:text-sm leading-relaxed flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4 shadow-inner">
          <div className="p-2.5 bg-amber-500/20 text-amber-400 rounded-xl shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-amber-300 tracking-wide text-xs uppercase">
              Mandatory Regulatory Disclosure (Republic Act No. 9474 & SEC MC No. 19)
            </h4>
            <p className="text-slate-300 text-xs leading-relaxed">
              Please study the terms and conditions in the Disclosure Statement before proceeding with any loan transaction. <strong>928 Lending</strong> strictly adheres to truth-in-lending disclosure standards set by the Securities and Exchange Commission (SEC) and Bangko Sentral ng Pilipinas (BSP).
            </p>
          </div>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
          
          {/* Corporate Entity Details */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-white font-bold text-sm">
              <Building2 className="w-4 h-4 text-[#E87722]" />
              <h3>Corporate Entity</h3>
            </div>
            <p className="text-xs text-slate-400 font-semibold leading-snug">
              {companyName}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Licensed Financing & Lending Institution regulated by the Securities and Exchange Commission of the Philippines.
            </p>

            <div className="space-y-1.5 pt-2 text-xs">
              <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400">SEC Reg. No:</span>
                <span className="font-mono font-semibold text-white">{secRegNo}</span>
              </div>
              <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400">Cert. of Authority (CA):</span>
                <span className="font-mono font-semibold text-white">{caNo}</span>
              </div>
              <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400">NPC Reg. Seal:</span>
                <span className="font-mono font-semibold text-emerald-400">{npcRegistrationNo}</span>
              </div>
            </div>
          </div>

          {/* Quick Legal & Compliance Links */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-white font-bold text-sm">
              <Scale className="w-4 h-4 text-[#E87722]" />
              <h3>Legal & Compliance</h3>
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link 
                  href="/privacy-policy" 
                  className="flex items-center space-x-2 text-slate-300 hover:text-[#E87722] transition-colors py-1 group"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E87722] shrink-0" />
                  <span className="group-hover:underline">Privacy Policy (Data Privacy Act RA 10173)</span>
                </Link>
              </li>
              <li>
                <div className="flex items-center space-x-2 text-slate-400 py-1">
                  <FileText className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>Terms & Conditions of Lending (Draft)</span>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-2 text-slate-400 py-1">
                  <FileText className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>Truth in Lending Disclosure Statement</span>
                </div>
              </li>
              <li className="pt-1">
                <a
                  href="https://www.sec.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-[#E87722] hover:text-amber-400 font-semibold group"
                >
                  <span>SEC Verification Portal</span>
                  <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Data Protection & Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-white font-bold text-sm">
              <Lock className="w-4 h-4 text-[#E87722]" />
              <h3>Data Protection Officer</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              For privacy concerns or exercising Data Subject rights under Republic Act No. 10173:
            </p>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <div className="flex items-center space-x-2 text-xs">
                <Mail className="w-3.5 h-3.5 text-[#E87722]" />
                <a href="mailto:dpo@928lending.com" className="font-bold text-[#E87722] hover:underline">
                  dpo@928lending.com
                </a>
              </div>
            </div>
            <div className="pt-2 text-[11px] text-slate-500 leading-relaxed">
              &copy; {new Date().getFullYear()} {companyName}. All statutory rights reserved.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
