import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LoanCalculatorWidget } from "@/components/LoanCalculatorWidget";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://928creditconcept.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "928 Credit Concept Lending Investor Corporation | Business Loans Philippines",
    template: "%s | 928 Credit Concept Lending Investor Corp.",
  },
  description:
    "Premier SEC-registered financial partner providing non-collateralized business loans to Micro, Small, and Medium Enterprises (MSMEs) across Luzon, Philippines. SEC Reg. CS202002431 | CA No. 3247.",
  keywords: [
    "928 Credit Concept",
    "928 Credit Concept Lending Investor Corporation",
    "business loan Philippines",
    "SME loans Luzon",
    "non-collateral business loan",
    "MSME financing Philippines",
    "lending investor Bulacan",
    "SEC registered lender Philippines",
    "Baliwag lending company",
  ],
  authors: [{ name: "928 Credit Concept Lending Investor Corp." }],
  creator: "928 Credit Concept Lending Investor Corp.",
  publisher: "928 Credit Concept Lending Investor Corp.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "928 Credit Concept Lending Investor Corporation | Business Loans Philippines",
    description:
      "Premier SEC-registered financial partner providing non-collateralized business loans to MSMEs across Luzon. SEC Reg. CS202002431.",
    url: siteUrl,
    siteName: "928 Credit Concept Lending Investor Corp.",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/images/hero-1.JPG",
        width: 1200,
        height: 630,
        alt: "928 Credit Concept Lending Investor Corporation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "928 Credit Concept Lending Investor Corporation",
    description:
      "Premier SEC-registered financial partner providing non-collateralized business loans to MSMEs across Luzon.",
    images: ["/images/hero-1.JPG"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
  icons: {
    icon: "/images/minilogo.png",
    shortcut: "/images/minilogo.png",
    apple: "/images/minilogo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "928 Credit Concept Lending Investor Corporation",
  "legalName": "928 Credit Concept Lending Investor Corporation",
  "url": siteUrl,
  "logo": `${siteUrl}/images/minilogo.png`,
  "image": `${siteUrl}/images/hero-1.JPG`,
  "description": "Premier SEC-registered financing institution providing non-collateralized business loans to Small and Medium Enterprises (SMEs) across Luzon.",
  "telephone": "+63-44-792-2913",
  "email": "928creditconcept@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Unit E 2nd Floor, Violago Plaza, Pagala",
    "addressLocality": "Baliwag City",
    "addressRegion": "Bulacan",
    "postalCode": "3006",
    "addressCountry": "PH",
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "16:00",
  },
  "priceRange": "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} font-sans h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col text-slate-900 font-sans relative">
        <div
          className="fixed inset-0 pointer-events-none -z-10 opacity-50"
          style={{
            backgroundImage: "url('/images/bg.jpg')",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <LoanCalculatorWidget />
      </body>
    </html>
  );
}

