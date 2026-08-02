import { LoanApplicationForm } from"@/components/loan-application-form";

export default function ApplyNowPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 min-h-screen">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-8">
        <h1 className="text-3xl font-extrabold text-[#0A1A2F] tracking-tight">
          Commercial Loan Application
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Fast, flexible financing solutions for your business.
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto">
        <LoanApplicationForm />
      </div>
    </div>
  );
}
