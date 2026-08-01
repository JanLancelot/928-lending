"use client";

import Link from "next/link";

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
    <div className="space-y-2">
      <div className="flex items-start space-x-3 p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-950 text-amber-500 focus:ring-amber-500 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        />
        <label
          htmlFor={id}
          className={`text-xs text-slate-300 leading-relaxed select-none ${
            disabled ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          I have read and accept the{" "}
          <Link
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 underline hover:text-amber-300 transition-colors font-medium"
          >
            Data Privacy Policy
          </Link>{" "}
          and explicitly consent to <strong>928 Credit Concept Lending Corp.</strong> collecting and processing my personal and financial information in accordance with Republic Act No. 10173 (Data Privacy Act of 2012).
        </label>
      </div>

      {error && (
        <p id={errorId} role="alert" className="text-xs text-red-400 font-medium pl-1">
          {error}
        </p>
      )}
    </div>
  );
}
