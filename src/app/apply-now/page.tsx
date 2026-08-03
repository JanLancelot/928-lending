import Image from "next/image";
import { LoanApplicationForm } from "@/components/loan-application-form";

export default function ApplyNowPage() {
  return (
    <div className="w-full  overflow-hidden">
      <section className="relative w-full  pt-0 pb-4 sm:pb-6 lg:pb-8 min-h-[150px] sm:min-h-[190px] lg:min-h-[240px] flex items-stretch overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 w-full my-auto">
          <div className="absolute inset-y-0 left-0 sm:left-6 lg:left-8 right-0 sm:right-6 lg:right-8 pointer-events-none z-0 overflow-hidden opacity-30">
            <Image
              src="/images/bg.jpg"
              alt="Background Pattern"
              fill
              className="object-cover object-left"
              priority
            />
          </div>

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

          <div className="grid grid-cols-12 gap-3 sm:gap-6 items-center relative z-10 px-0">
            
            <div className="col-span-7 lg:col-span-6 space-y-2 sm:space-y-3 z-30 relative px-4 sm:px-6 lg:px-10 py-4 sm:py-6 my-auto flex flex-col justify-center">
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0B192C] leading-tight">
                  Loan Application
                </h1>
              </div>

              <div className="w-12 h-1 bg-[#E87722] rounded-full"></div>

              <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
                Fill out the form below to start your commercial loan application. Our team will review your information and get in touch as soon as possible.
              </p>
            </div>

            <div className="col-span-5 lg:col-span-6 relative min-h-[150px] sm:min-h-[190px] lg:min-h-[240px] flex items-stretch justify-end z-0 self-stretch">
              <div 
                className="absolute inset-0 z-5 overflow-hidden"
                style={{
                  WebkitMaskImage: "radial-gradient(circle at 60% 50%, black 25%, transparent 65%)",
                  maskImage: "radial-gradient(circle at 60% 50%, black 25%, transparent 65%)",
                }}
              >
                <Image
                  src="/images/loanpicc.png"
                  alt="928 Credit Concept Lending Application Portal"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
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