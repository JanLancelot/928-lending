"use client";

import React, { useState, useSyncExternalStore } from "react";
import Link from "next/link";

const DEFAULT_STORAGE_NAME = "928_lending_privacy_consent";
const emptySubscribe = () => () => {};

export interface CookieConsentBannerProps {
  consentStorageName?: string;
}

export function CookieConsentBanner({
  consentStorageName = DEFAULT_STORAGE_NAME,
}: CookieConsentBannerProps) {
  const [userDismissed, setUserDismissed] = useState(false);

  const storedConsent = useSyncExternalStore(
    emptySubscribe,
    () => {
      try {
        return localStorage.getItem(consentStorageName);
      } catch {
        return null;
      }
    },
    () => "accepted"
  );

  const isVisible = !userDismissed && !storedConsent;

  const handleAccept = () => {
    try {
      localStorage.setItem(consentStorageName, "accepted");
    } catch {
      // localStorage disabled fallback
    }
    setUserDismissed(true);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem(consentStorageName, "essential_only");
    } catch {
      // localStorage disabled fallback
    }
    setUserDismissed(true);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div>
      <div>
        <div>
          <h4>Privacy & Cookie Preference Notice</h4>
          <p>
            We use essential cookies and security tokens (Cloudflare Turnstile)
            necessary to process loan applications safely in compliance with the{" "}
            <strong>Data Privacy Act of 2012 (RA 10173)</strong>. Read our{" "}
            <Link href="/privacy-policy">Privacy Policy</Link> to learn more
            about data protection rights.
          </p>
        </div>

        <div>
          <button onClick={handleDecline} type="button">
            Essential Only
          </button>
          <button onClick={handleAccept} type="button">
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
