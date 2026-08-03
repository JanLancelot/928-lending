import React from "react";
import { Clock, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full  pt-8 pb-0">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="bg-[#0B192C] text-white p-6 sm:p-8 lg:p-10 shadow-lg rounded-none">
          <h3 className="text-lg font-bold text-slate-200 mb-6">Contact Us</h3>
          
          {/* Contact Info Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 border-b border-slate-800/80 text-sm">
            {/* Business Hours */}
            <div className="flex items-start space-x-3">
              <div className="p-2.5 bg-slate-900 rounded-full border border-slate-700/60 text-[#E87722]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-slate-200">Business Hours</p>
                <p className="text-slate-400 text-xs mt-0.5">Mon–Fri | 9AM–4PM</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-3">
              <div className="p-2.5 bg-slate-900 rounded-full border border-slate-700/60 text-[#E87722]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-slate-200">Phone</p>
                <p className="text-slate-400 text-xs mt-0.5">(044) 792 2913</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-3">
              <div className="p-2.5 bg-slate-900 rounded-full border border-slate-700/60 text-[#E87722]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-slate-200">Email</p>
                <p className="text-slate-400 text-xs mt-0.5">928creditconcept@gmail.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-3">
              <div className="p-2.5 bg-slate-900 rounded-full border border-slate-700/60 text-[#E87722] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-slate-200">Office Location</p>
                <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                  Unit E 2nd Floor, Violago Plaza, Pagala, Baliwag City, Bulacan 3006
                </p>
              </div>
            </div>
          </div>

          {/* Regulatory Information & Copyright Bar */}
          <div className="mt-6 pt-2 text-center text-xs text-slate-400 font-medium space-y-1.5">
            <div className="text-slate-300 font-semibold tracking-wide">
              <span>SEC Reg. No. CS202002431</span>
              <span className="mx-2 text-slate-600">|</span>
              <span>SEC COA No. 3247</span>
            </div>
            <div>
              © 2020-2026 928 Credit Concept Lending Investor Corporation. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
