"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Our Services", href: "/our-services" },
  ];

  return (
    <header className="w-full bg-[#0B192C] text-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          {/* Logo Symbol: Angled Parallel Bars */}
          <div className="flex items-center space-x-1 py-1">
            <div className="w-2.5 h-7 bg-white transform -skew-x-12 rounded-sm"></div>
            <div className="w-2.5 h-7 bg-[#E87722] transform -skew-x-12 rounded-sm"></div>
            <div className="w-2.5 h-7 bg-white transform -skew-x-12 rounded-sm"></div>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors">
              928 Credit
            </span>
            <span className="text-[10px] font-bold tracking-widest text-slate-300 uppercase">
              Concept Lending
            </span>
          </div>
        </Link>

        {/* Navigation Links & Apply Button */}
        <nav className="flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition-all relative py-2 ${
                  isActive
                    ? "text-white font-bold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#E87722] rounded-full"></span>
                )}
              </Link>
            );
          })}

          <Link
            href="/apply-now"
            className="bg-[#E87722] hover:bg-[#d46716] text-white text-sm font-bold px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            Apply Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
