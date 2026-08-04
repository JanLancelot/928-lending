import Link from "next/link";
import { 
  AlertTriangle, 
  ShieldCheck, 
  Building2, 
  ExternalLink, 
  FileText, 
  Mail, 
  Scale, 
  ShieldAlert,
  Award
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
    <footer className="w-full pt-8 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B192C] text-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-slate-800 space-y-8 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute right-0 top-0 w-80 h-80 bg-[#E87722]/5 rounded-full blur-3xl pointer-events-none" />

          {/* SEC Statutory Mandatory Disclosure Banner */}
          <div className="bg-amber-500/10 border border-amber-500/25 rounded-xl p-4 sm:p-5 flex items-start space-x-3.5 text-xs sm:text-sm">
            <div className="p-2 bg-[#E87722]/20 text-[#E87722] rounded-lg shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-[#E87722] uppercase tracking-wider text-xs">
                Mandatory Regulatory Disclosure (Republic Act No. 9474 & SEC MC No. 19)
              </h4>
              <p className="text-slate-300 leading-relaxed text-xs">
                Please study the terms and conditions in the Disclosure Statement before proceeding with any loan transaction. 
                928 Lending strictly adheres to truth-in-lending disclosure standards set by the Securities and Exchange Commission (SEC) 
                and Bangko Sentral ng Pilipinas (BSP).
              </p>
            </div>
          </div>

          {/* 3-Column Corporate & Compliance Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2 border-t border-slate-800/80">
            
            {/* Column 1: Corporate Entity Details */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-[#E87722]">
                <Building2 className="w-5 h-5" />
                <h4 className="font-bold text-sm text-white uppercase tracking-wider">Corporate Information</h4>
              </div>

              <div className="space-y-2">
                <h5 className="font-bold text-slate-100 text-sm">{companyName}</h5>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Licensed Financing & Lending Institution regulated by the Securities and Exchange Commission of the Philippines.
                </p>
              </div>

              <div className="space-y-2 pt-1 text-xs">
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400">SEC Reg. No:</span>
                  <span className="font-semibold text-slate-200">{secRegNo}</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400">Certificate of Authority (CA):</span>
                  <span className="font-semibold text-slate-200">{caNo}</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400">NPC Reg. Seal:</span>
                  <span className="font-semibold text-emerald-400">{npcRegistrationNo}</span>
                </div>
              </div>
            </div>

            {/* Column 2: Legal & Compliance Links */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-[#E87722]">
                <Scale className="w-5 h-5" />
                <h4 className="font-bold text-sm text-white uppercase tracking-wider">Legal & Compliance</h4>
              </div>

              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link 
                    href="/privacy-policy"
                    className="flex items-center space-x-2 text-slate-300 hover:text-[#E87722] transition-colors p-2 rounded-lg hover:bg-slate-900/60"
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Privacy Policy (Data Privacy Act RA 10173)</span>
                  </Link>
                </li>
                <li>
                  <span className="flex items-center space-x-2 text-slate-400 p-2 rounded-lg bg-slate-900/40 border border-slate-800/50">
                    <FileText className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>Terms & Conditions of Lending (Draft)</span>
                  </span>
                </li>
                <li>
                  <span className="flex items-center space-x-2 text-slate-400 p-2 rounded-lg bg-slate-900/40 border border-slate-800/50">
                    <Award className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>Truth in Lending Disclosure Statement</span>
                  </span>
                </li>
                <li>
                  <a
                    href="https://www.sec.gov.ph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors p-2 rounded-lg hover:bg-slate-900/60"
                  >
                    <ExternalLink className="w-4 h-4 shrink-0" />
                    <span>SEC Official Verification Portal</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Data Protection & Officer Contact */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-[#E87722]">
                <ShieldAlert className="w-5 h-5" />
                <h4 className="font-bold text-sm text-white uppercase tracking-wider">Data Protection</h4>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl space-y-3">
                <h5 className="font-bold text-xs text-slate-200">Data Protection Officer (DPO)</h5>
                <p className="text-xs text-slate-400 leading-relaxed">
                  For privacy inquiries or exercising Data Subject rights under RA 10173:
                </p>
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#E87722]">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:dpo@928lending.com" className="hover:underline">
                    dpo@928lending.com
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Statutory Bar */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
            <p>
              &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-[11px] text-slate-400">
              <span>SEC Reg. {secRegNo}</span>
              <span>•</span>
              <span>{caNo}</span>
              <span>•</span>
              <span className="text-emerald-400">{npcRegistrationNo}</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
