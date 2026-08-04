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

export const metadata: Metadata = {
  title: "928 Credit Concept Lending Investor Corporation",
  description: "Premier financial partner providing non-collateralized business loans to Small and Medium Enterprises (SMEs) across Luzon.",
  icons: {
    icon: "/images/minilogo.png",
    shortcut: "/images/minilogo.png",
    apple: "/images/minilogo.png",
  },
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
