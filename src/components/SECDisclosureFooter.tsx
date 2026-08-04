import React from "react";
import Link from "next/link";
import { Clock, Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export interface SECDisclosureFooterProps {
  companyName?: string;
  secRegNo?: string;
  caNo?: string;
}

export function SECDisclosureFooter({
  companyName = "928 Credit Concept Lending Investor Corporation",
  secRegNo = "CS202002431",
  caNo = "CA No. 3247",
}: SECDisclosureFooterProps) {
  return (
    <footer className="w-full bg-[#0B192C] text-white pt-10 pb-6 border-t border-slate-800 rounded-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800/80 text-sm">
          
          <div className="space-y-3">
            <div className="text-base sm:text-lg font-black tracking-tight text-white leading-snug">
              928 Credit Concept <span className="text-[#E87722]">Lending Investor Corp.</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Licensed Financing &amp; Lending Institution regulated by the Securities and Exchange Commission of the Philippines.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-200 text-xs uppercase tracking-wider">Legal &amp; Compliance</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <Link href="/privacy-policy" className="hover:text-[#E87722] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-[#E87722] transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <a
                  href="https://www.sec.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E87722] transition-colors inline-flex items-center gap-1"
                >
                  SEC Verification Portal <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-200 text-xs uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E87722] shrink-0 mt-0.5" />
                <span>Unit E 2nd Floor, Violago Plaza, Pagala, Baliwag City, Bulacan 3006</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E87722] shrink-0" />
                <span>(044) 792 2913</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E87722] shrink-0" />
                <span>928creditconcept@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E87722] shrink-0" />
                <span>Mon–Fri | 9:00 AM – 4:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-medium pt-1">
          <div className="flex items-center gap-3 text-slate-300">
            <span>SEC Reg. No. {secRegNo}</span>
            <span className="text-slate-600">&bull;</span>
            <span>SEC COA No. {caNo}</span>
          </div>
          <div>
            &copy; 2020-{new Date().getFullYear()} {companyName}. All Rights Reserved.
          </div>
        </div>

      </div>
    </div>
  );
}
