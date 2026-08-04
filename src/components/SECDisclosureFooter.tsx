import Link from "next/link";
import { ExternalLink } from "lucide-react";

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
    <footer className="w-full bg-[#0B192C] text-slate-300 py-10 border-t border-slate-800 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Mandatory Regulatory Disclosure Banner */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-4 sm:p-5 space-y-1.5">
          <p className="font-bold text-[#E87722] uppercase tracking-wider text-[11px]">
            Mandatory Regulatory Disclosure (Republic Act No. 9474 & SEC MC No. 19):
          </p>
          <p className="text-slate-300 leading-relaxed">
            Please study the terms and conditions in the Disclosure Statement before proceeding with any loan transaction. 
            928 Lending strictly adheres to truth-in-lending disclosure standards set by the Securities and Exchange Commission (SEC) and Bangko Sentral ng Pilipinas (BSP).
          </p>
        </div>

        {/* Corporate Entity & Compliance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2 border-t border-slate-800/60">
          
          {/* Corporate Entity Details */}
          <div className="space-y-2">
            <h3 className="font-bold text-white text-sm">{companyName}</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Licensed Financing & Lending Institution regulated by the Securities and Exchange Commission of the Philippines.
            </p>
            <div className="space-y-1 text-slate-300 pt-1 text-xs">
              <p><span className="text-slate-400">SEC Reg. No:</span> {secRegNo}</p>
              <p><span className="text-slate-400">Certificate of Authority (CA):</span> {caNo}</p>
              <p><span className="text-slate-400">NPC Reg. Seal:</span> {npcRegistrationNo}</p>
            </div>
          </div>

          {/* Quick Legal & Compliance Links */}
          <div className="space-y-2">
            <h3 className="font-bold text-white text-sm">Legal & Compliance</h3>
            <ul className="space-y-1.5 text-slate-300 text-xs">
              <li>
                <Link href="/privacy-policy" className="hover:text-[#E87722] transition-colors">
                  Privacy Policy (Data Privacy Act RA 10173)
                </Link>
              </li>
              <li>
                <span className="text-slate-400">Terms & Conditions of Lending (Draft)</span>
              </li>
              <li>
                <span className="text-slate-400">Truth in Lending Disclosure Statement</span>
              </li>
              <li>
                <a
                  href="https://www.sec.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  SEC Verification Portal <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* Data Protection Contact */}
          <div className="space-y-2">
            <h3 className="font-bold text-white text-sm">Data Protection Officer</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              For privacy concerns or exercising Data Subject rights under RA 10173:
            </p>
            <p className="font-semibold text-slate-200">
              Email: <a href="mailto:dpo@928lending.com" className="text-[#E87722] hover:underline">dpo@928lending.com</a>
            </p>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-slate-800/60 text-center text-slate-400 text-xs">
          &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
