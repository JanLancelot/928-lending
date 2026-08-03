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
    <div>
      <div>
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
        />
        <label htmlFor={id}>
          I have read and accept the{" "}
          <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer">
            Data Privacy Policy
          </Link>{" "}
          and explicitly consent to <strong>928 Credit Concept Lending Corp.</strong> collecting and processing my personal and financial information in accordance with Republic Act No. 10173 (Data Privacy Act of 2012).
        </label>
      </div>

      {error && (
        <p id={errorId} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
