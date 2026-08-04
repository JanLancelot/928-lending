import type { Metadata } from "next";
import { PrivacyContent } from "./privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy | 928 Lending",
  description:
    "Data Privacy Policy of 928 Credit Concept Lending Corp. compliant with Philippine Republic Act No. 10173 (Data Privacy Act of 2012) and NPC Regulations.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyContent />;
}
