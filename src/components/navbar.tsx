"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Our Services", href: "/our-services" },
  ];

  return (
    <header className="w-full bg-white relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
        
        {/* Left: 928 Logo on White Background - Prominent Space & Vertically Centered */}
        <div className="flex items-center h-full shrink-0 pr-18 sm:pr-28 lg:pr-36 py-2 z-10 my-auto">
          <Link href="/" className="flex items-center justify-center h-full group">
            <Image
              src="/images/928logo.png"
              alt="928 Credit Concept Lending"
              width={220}
              height={56}
              className="h-9 sm:h-11 lg:h-12 w-auto object-contain my-auto transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />
          </Link>
        </div>

        {/* Right: Dark Navy Container with Nav Links */}
        <div className="relative flex-1 h-full flex items-center justify-end">
          <div className="relative flex items-center justify-between h-full w-full bg-[#0B192C] text-white pl-16 sm:pl-24 lg:pl-32 pr-5 sm:pr-6 shadow-md rounded-none">
            
            {/* Smooth Diagonal Curved Swoop Edge */}
            <div className="absolute -left-16 sm:-left-24 lg:-left-32 top-0 h-full w-16 sm:w-24 lg:w-32 pointer-events-none">
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

            {/* Nav Links - Wider Spacing */}
            <nav className="flex items-center space-x-8 sm:space-x-12 lg:space-x-16 ml-auto mr-8 sm:mr-10">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative group py-1.5 font-semibold text-xs sm:text-sm lg:text-base tracking-wide transition-all duration-300"
                  >
                    {/* Text */}
                    <span
                      className={`inline-block transition-all duration-300 transform group-hover:-translate-y-0.5 ${
                        isActive
                          ? "text-[#E87722] font-bold"
                          : "text-slate-200 group-hover:text-white"
                      }`}
                    >
                      {item.name}
                    </span>

                    {/* Underline */}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-[2.5px] bg-[#E87722] rounded-full transition-all duration-300 ease-out ${
                        isActive
                          ? "w-full opacity-100"
                          : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                      }`}
                    ></span>
                  </Link>
                );
              })}
            </nav>

            {/* Apply Now Orange Button */}
            <Link
              href="/apply-now"
              className="bg-[#E87722] hover:bg-[#d46716] text-white text-xs sm:text-sm lg:text-base font-bold px-6 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-[1.02] shrink-0"
            >
              Apply Now
            </Link>

          </div>
        </div>

      </div>
    </header>
  );
}