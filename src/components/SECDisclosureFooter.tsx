import React from "react";
import Link from "next/link";

export interface SECDisclosureFooterProps {
  companyName?: string;
  secRegNo?: string;
  caNo?: string;
  npcRegistrationNo?: string;
}

export function SECDisclosureFooter({
  companyName = "928 Credit Concept Lending Corp.",
  secRegNo = "CS202600928",
  caNo = "CA-2026-0928",
  npcRegistrationNo = "NPC-REG-2026-928",
}: SECDisclosureFooterProps) {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* SEC Statutory Mandatory Disclosure Banner */}
        <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-200/90 text-xs sm:text-sm leading-relaxed">
          <strong className="font-semibold text-amber-400 block mb-1">
            Mandatory Regulatory Disclosure (Republic Act No. 9474 & SEC MC No. 19):
          </strong>
          Please study the terms and conditions in the Disclosure Statement
          before proceeding with any loan transaction. 928 Lending strictly
          adheres to truth-in-lending disclosure standards set by the Securities
          and Exchange Commission (SEC) and Bangko Sentral ng Pilipinas (BSP).
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-slate-800">
          {/* Corporate Entity Details */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white text-base">{companyName}</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Licensed Financing & Lending Institution regulated by the
              Securities and Exchange Commission of the Philippines.
            </p>
            <div className="text-xs text-slate-400 space-y-1 pt-2">
              <p>
                <span className="font-medium text-slate-300">SEC Reg. No:</span>{" "}
                {secRegNo}
              </p>
              <p>
                <span className="font-medium text-slate-300">Certificate of Authority (CA) No:</span>{" "}
                {caNo}
              </p>
              <p>
                <span className="font-medium text-slate-300">NPC Reg. Seal:</span>{" "}
                {npcRegistrationNo}
              </p>
            </div>
          </div>

          {/* Quick Legal & Compliance Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white text-base">Legal & Compliance</h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-amber-400 transition-colors"
                >
                  Privacy Policy (Data Privacy Act RA 10173)
                </Link>
              </li>
              <li>
                <span className="text-slate-500">Terms & Conditions of Lending (Draft)</span>
              </li>
              <li>
                <span className="text-slate-500">Truth in Lending Disclosure Statement</span>
              </li>
              <li>
                <a
                  href="https://www.sec.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  SEC Verification Portal &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Data Protection & Contact Info */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white text-base">Data Protection Officer</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              For privacy concerns or exercising Data Subject rights under RA 10173:
            </p>
            <p className="text-xs text-slate-300 font-mono pt-1">
              dpo@928lending.com
            </p>
            <p className="text-xs text-slate-500 pt-2">
              &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
