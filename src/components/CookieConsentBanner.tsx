"use client";

import React, { useState } from "react";
import Link from "next/link";

const DEFAULT_STORAGE_NAME = "928_lending_privacy_consent";

export interface CookieConsentBannerProps {
  consentStorageName?: string;
}

export function CookieConsentBanner({
  consentStorageName = DEFAULT_STORAGE_NAME,
}: CookieConsentBannerProps) {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    try {
      const consent = localStorage.getItem(consentStorageName);
      return !consent;
    } catch {
      return true;
    }
  });

  const handleAccept = () => {
    try {
      localStorage.setItem(consentStorageName, "accepted");
    } catch {
      // localStorage disabled fallback
    }
    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem(consentStorageName, "essential_only");
    } catch {
      // localStorage disabled fallback
    }
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1 max-w-3xl">
          <h4 className="font-semibold text-white text-sm sm:text-base">
            Privacy & Cookie Preference Notice
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            We use essential cookies and security tokens (Cloudflare Turnstile)
            necessary to process loan applications safely in compliance with the{" "}
            <strong className="text-white">Data Privacy Act of 2012 (RA 10173)</strong>.
            Read our{" "}
            <Link
              href="/privacy-policy"
              className="text-amber-400 underline hover:text-amber-300 font-medium"
            >
              Privacy Policy
            </Link>{" "}
            to learn more about data protection rights.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <button
            onClick={handleDecline}
            type="button"
            className="px-4 py-2 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            Essential Only
          </button>
          <button
            onClick={handleAccept}
            type="button"
            className="px-5 py-2 text-xs font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors shadow-sm cursor-pointer"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
