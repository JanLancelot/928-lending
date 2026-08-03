import Image from "next/image";
import { LoanApplicationForm } from "@/components/loan-application-form";

export default function ApplyNowPage() {
  return (
    <div className="w-full bg-white overflow-hidden">
      <section className="relative w-full bg-white pt-4 lg:pt-0 pb-6 lg:pb-8 min-h-[120px] sm:min-h-[160px] flex items-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="absolute inset-y-0 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8 pointer-events-none z-0 overflow-hidden opacity-30">
            <Image
              src="/images/bg.jpg"
              alt="Background Pattern"
              fill
              className="object-cover object-left"
              priority
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center relative z-10">
            
            <div className="lg:col-span-6 space-y-2 z-20 pl-2 sm:pl-6 lg:pl-10 my-auto flex flex-col justify-center">
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

            <div className="lg:col-span-6 relative min-h-[100px] sm:min-h-[160px] lg:min-h-[180px] flex items-center justify-end">
              <div 
                className="absolute inset-0 z-10 overflow-hidden"
                style={{
                  WebkitMaskImage: "radial-gradient(ellipse 85% 85% at 75% 50%, black 35%, transparent 75%)",
                  maskImage: "radial-gradient(ellipse 85% 85% at 75% 50%, black 35%, transparent 75%)",
                }}
              >
                <Image
                  src="/images/building.jpg"
                  alt="928 Credit Concept Lending Application Portal"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

          </div>

          <div className="absolute inset-y-0 right-2 sm:right-6 lg:right-8 h-full pointer-events-none z-20 flex justify-end">
            <Image
              src="/images/wholeoverlay.png"
              alt="Decorative Header Overlay"
              width={632}
              height={770}
              className="h-full w-auto max-w-[40vw] sm:max-w-none object-contain sm:object-cover object-right"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-8 lg:py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
          <LoanApplicationForm />
        </div>
      </section>
    </div>
  );
}