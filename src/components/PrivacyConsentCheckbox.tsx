"use client";

import Link from "next/link";
import { AlertCircle } from "lucide-react";

export interface PrivacyConsentCheckboxProps {
  id?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
  disabled?: boolean;
}

export function PrivacyConsentCheckbox({
  id = "privacy-consent",
  checked,
  onChange,
  error,
  disabled = false,
}: PrivacyConsentCheckboxProps) {
  const errorId = `${id}-error`;

  return (
    <div className="space-y-1.5">
      <div className="flex items-start space-x-3">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className="mt-1 h-4 w-4 rounded border-slate-300 text-[#E87722] focus:ring-[#E87722] disabled:opacity-50 cursor-pointer accent-[#E87722]"
        />
        <label htmlFor={id} className="text-xs sm:text-sm text-slate-700 leading-relaxed cursor-pointer select-none">
          I have read and accept the{" "}
          <Link 
            href="/privacy-policy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#E87722] hover:underline font-semibold"
          >
            Data Privacy Policy
          </Link>{" "}
          and explicitly consent to <strong>928 Credit Concept Lending Corp.</strong> collecting and processing my personal and financial information in accordance with Republic Act No. 10173 (Data Privacy Act of 2012).
        </label>
      </div>

      {error && (
        <p id={errorId} role="alert" className="text-xs text-rose-600 font-medium flex items-center gap-1 pl-7">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}
