import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
        Welcome to 928 Lending
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
        Your trusted partner for commercial loans and business financing solutions.
      </p>
      <div>
        <Button asChild size="lg">
          <Link href="/apply-now">Apply Now</Link>
        </Button>
      </div>
    </div>
  );
}
