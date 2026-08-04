import Link from "next/link";
import { ExternalLink, AlertCircle } from "lucide-react";

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
    <div className="w-full py-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200 rounded-lg p-5 sm:p-6 space-y-4 text-xs text-slate-600 shadow-sm">
          {/* Statutory Regulatory Alert */}
          <div className="flex items-start space-x-3 pb-3 border-b border-slate-200">
            <AlertCircle className="w-4 h-4 text-[#E87722] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                Mandatory Regulatory Disclosure (Republic Act No. 9474 & SEC MC No. 19)
              </h4>
              <p className="text-slate-600 leading-relaxed text-xs">
                Please study the terms and conditions in the Disclosure Statement before proceeding with any loan transaction. 
                928 Lending strictly adheres to truth-in-lending disclosure standards set by the Securities and Exchange Commission (SEC) and Bangko Sentral ng Pilipinas (BSP).
              </p>
            </div>
          </div>

          {/* Licensing Credentials & Quick Links */}
          <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-4 text-slate-500 text-xs">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="font-semibold text-slate-800">{companyName}</span>
              <span>•</span>
              <span>SEC Reg. No. {secRegNo}</span>
              <span>•</span>
              <span>CA No. {caNo}</span>
              <span>•</span>
              <span className="text-emerald-700 font-medium">NPC: {npcRegistrationNo}</span>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/privacy-policy" className="text-slate-600 hover:text-[#E87722] hover:underline transition-colors">
                Privacy Policy
              </Link>
              <a
                href="https://www.sec.gov.ph"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:underline"
              >
                SEC Portal <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
