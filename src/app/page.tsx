import { LoanApplicationForm } from "@/components/loan-application-form";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-8">
        <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/30 dark:text-blue-400 mb-3">
          928 Lending Platform
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">
          Commercial Loan Application
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Fast, flexible financing solutions for your business.
        </p>
      </div>

      <div className="w-full max-w-xl mx-auto">
        <LoanApplicationForm />
      </div>
    </div>
  );
}
