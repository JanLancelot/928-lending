import type { Metadata } from "next";
import Image from "next/image";
import { LoanApplicationForm } from "@/components/loan-application-form";

export const metadata: Metadata = {
  title: "Apply Now | Business Loan Application",
  description:
    "Apply for a non-collateralized business loan online with 928 Credit Concept Lending Investor Corp. Fast processing & simple requirements for MSMEs.",
};


export default function ApplyNowPage() {
  return (
    <div className="w-full  overflow-hidden">
      <section className="relative w-full  pt-0 pb-4 sm:pb-6 lg:pb-8 min-h-[150px] sm:min-h-[190px] lg:min-h-[240px] flex items-stretch overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 w-full my-auto">
          <div className="absolute inset-y-0 right-0 sm:right-6 lg:right-8 h-full pointer-events-none z-20 flex justify-end overflow-hidden">
            <Image
              src="/images/wholeoverlay.png"
              alt="Decorative Header Overlay"
              width={632}
              height={770}
              className="h-full w-auto object-right object-cover"
              priority
            />
          </div>

          <div className="relative z-10 min-h-[160px] sm:min-h-[200px] lg:min-h-[240px] flex items-center">

            {/* Masked Hero Background Image */}
            <div 
              className="absolute inset-y-0 right-0 w-3/5 sm:w-2/3 lg:w-7/12 z-0 overflow-hidden pointer-events-none"
              style={{
                WebkitMaskImage: "radial-gradient(circle at 80% 50%, black 30%, transparent 75%)",
                maskImage: "radial-gradient(circle at 80% 50%, black 30%, transparent 75%)",
              }}
            >
              <Image
                src="/images/loanpicc.png"
                alt="928 Credit Concept Lending Application Portal"
                fill
                sizes="(max-width: 640px) 60vw, (max-width: 1024px) 66vw, 58vw"
                className="object-cover object-center"
                priority
              />
            </div>
            
            <div className="w-[57%] sm:w-[70%] lg:w-[60%] space-y-2 sm:space-y-3 z-30 relative px-4 sm:px-6 lg:px-10 py-4 sm:py-6 my-auto flex flex-col justify-center">
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B192C] leading-tight [text-shadow:_0_0_4px_#ffffff,_0_0_4px_#ffffff]">
                  Loan Application
                </h1>
              </div>

              <div className="w-12 h-1 bg-[#E87722] rounded-full"></div>

              <p className="text-xs sm:text-sm text-slate-900 max-w-md leading-relaxed [text-shadow:_0_0_4px_#ffffff,_0_0_4px_#ffffff]">
                Fill out the form below to start your commercial loan application. Our team will review your information and get in touch as soon as possible.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-6 sm:py-8 lg:py-10 ">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
          <LoanApplicationForm />
        </div>
      </section>
    </div>
  );
}