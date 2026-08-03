import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { CookieConsentBanner } from "../CookieConsentBanner";

describe("CookieConsentBanner Component", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should render cookie banner when no consent is stored", () => {
    render(<CookieConsentBanner consentStorageName="test_consent_key" />);

    expect(
      screen.getByText("Privacy & Cookie Preference Notice")
    ).toBeInTheDocument();
    expect(screen.getByText("Accept All")).toBeInTheDocument();
    expect(screen.getByText("Essential Only")).toBeInTheDocument();
  });

  it("should not render banner if consent was already accepted", () => {
    localStorage.setItem("test_consent_key", "accepted");

    const { container } = render(
      <CookieConsentBanner consentStorageName="test_consent_key" />
    );

    expect(container.firstChild).toBeNull();
  });

  it("should set localStorage to 'accepted' and hide banner when clicking Accept All", () => {
    render(<CookieConsentBanner consentStorageName="test_consent_key" />);

    const acceptBtn = screen.getByText("Accept All");
    fireEvent.click(acceptBtn);

    expect(localStorage.getItem("test_consent_key")).toBe("accepted");
    expect(
      screen.queryByText("Privacy & Cookie Preference Notice")
    ).not.toBeInTheDocument();
  });

  it("should set localStorage to 'essential_only' when clicking Essential Only", () => {
    render(<CookieConsentBanner consentStorageName="test_consent_key" />);

    const declineBtn = screen.getByText("Essential Only");
    fireEvent.click(declineBtn);

    expect(localStorage.getItem("test_consent_key")).toBe("essential_only");
    expect(
      screen.queryByText("Privacy & Cookie Preference Notice")
    ).not.toBeInTheDocument();
  });

  it("should handle localStorage getItem and setItem throwing errors gracefully", () => {
    const getItemSpy = vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("SecurityError: localStorage is disabled");
    });
    const setItemSpy = vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("SecurityError: localStorage is disabled");
    });

    render(<CookieConsentBanner consentStorageName="test_consent_key" />);
    expect(screen.getByText("Privacy & Cookie Preference Notice")).toBeInTheDocument();

    const acceptBtn = screen.getByText("Accept All");
    fireEvent.click(acceptBtn);

    expect(screen.queryByText("Privacy & Cookie Preference Notice")).not.toBeInTheDocument();

    getItemSpy.mockRestore();
    setItemSpy.mockRestore();
  });
});
