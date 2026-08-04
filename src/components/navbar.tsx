"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Our Services", href: "/our-services" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/50 backdrop-blur-md overflow-x-clip relative">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[#0B192C] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between h-16 sm:h-20 px-0 sm:px-6 lg:px-8">
        
        <div className="flex items-center h-full shrink-0 pl-3 sm:pl-4 lg:pl-6 pr-12 sm:pr-16 md:pr-24 lg:pr-32 py-2 z-10 my-auto">
          <Link href="/" className="flex items-center justify-center h-full group">
            <Image
              src="/images/928logo.png"
              alt="928 Credit Concept Lending"
              width={220}
              height={56}
              className="h-8 sm:h-10 lg:h-12 w-auto object-contain my-auto transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />
          </Link>
        </div>

        <div className="relative flex-1 h-full flex items-center justify-end z-20 min-w-0">
          <div className="relative flex items-center justify-between h-full w-full bg-[#0B192C] text-white pl-12 sm:pl-16 md:pl-24 lg:pl-32 pr-3 sm:pr-5 lg:pr-6 shadow-md rounded-none">
            
            <div className="absolute -left-12 sm:-left-16 md:-left-24 lg:-left-32 top-0 h-full w-12 sm:w-16 md:w-24 lg:w-32 pointer-events-none">
              <svg
                viewBox="0 0 128 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-[#0B192C]"
                preserveAspectRatio="none"
              >
                <path
                  d="M 0 0 C 36 24 72 80 112 80 L 128 80 L 128 0 Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <nav className="flex items-center gap-1.5 sm:gap-3 md:gap-6 lg:gap-12 ml-auto mr-1.5 sm:mr-3 md:mr-6 lg:mr-8 min-w-0">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative group py-1.5 font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base tracking-tight transition-all duration-300 whitespace-nowrap"
                  >
                    <span
                      className={`inline-block transition-all duration-300 transform group-hover:-translate-y-0.5 ${
                        isActive
                          ? "text-[#E87722] font-bold"
                          : "text-slate-200 group-hover:text-white"
                      }`}
                    >
                      {item.name}
                    </span>

                    <span
                      className={`absolute -bottom-0.5 left-0 h-[2px] sm:h-[2.5px] bg-[#E87722] rounded-full transition-all duration-300 ease-out ${
                        isActive
                          ? "w-full opacity-100"
                          : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                      }`}
                    ></span>
                  </Link>
                );
              })}
            </nav>

            <Button
              asChild
              className="bg-[#E87722] hover:bg-[#d46716] text-white text-[10px] sm:text-xs md:text-sm lg:text-base font-bold px-2 sm:px-3 md:px-5 lg:px-6 py-1 sm:py-2.5 h-auto rounded-md shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-[1.02] shrink-0 whitespace-nowrap"
            >
              <Link href="/apply-now">Apply Now</Link>
            </Button>

          </div>
        </div>

      </div>
    </header>
  );
}