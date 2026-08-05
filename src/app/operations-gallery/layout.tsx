import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operations Media Gallery | Corporate Facilities & Activities",
  description:
    "Explore official high-definition photo gallery of 928 Credit Concept Lending Investor Corp., showcasing corporate headquarters, client consultation facilities, and daily credit operations.",
};

export default function OperationsGalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
