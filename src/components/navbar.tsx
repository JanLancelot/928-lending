"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Home, Building2, Briefcase, Images, ShieldCheck, Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About Us", href: "/about-us", icon: Building2 },
    { name: "Our Services", href: "/our-services", icon: Briefcase },
    { name: "Gallery", href: "/operations-gallery", icon: Images },
    { name: "Compliance", href: "/compliance", icon: ShieldCheck },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md overflow-x-clip relative">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[#0B192C] z-0 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between h-16 sm:h-20 px-0 sm:px-6 lg:px-8">
          
          {/* Logo Section */}
          <div className="flex items-center h-full shrink-0 pl-3 sm:pl-4 lg:pl-6 pr-12 sm:pr-16 md:pr-24 lg:pr-32 py-2 z-10 my-auto">
            <Link href="/" className="flex items-center justify-center h-full group">
              <Image
                src="/images/928logo.png"
                alt="928 Credit Concept Lending"
                width={220}
                height={56}
                className="hidden sm:block h-8 sm:h-10 lg:h-12 w-auto object-contain my-auto transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
              <Image
                src="/images/minilogo.png"
                alt="928 Credit Concept Lending"
                width={48}
                height={48}
                className="block sm:hidden h-8 sm:h-9 w-auto object-contain my-auto transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Navy Right Section */}
          <div className="relative flex-1 h-full flex items-center justify-end z-20 min-w-0">
            <div className="rounded-bl-[4px] relative flex items-center justify-between h-full w-full bg-[#0B192C] text-white pl-8 sm:pl-12 md:pl-16 lg:pl-20 xl:pl-28 pr-3 sm:pr-4 lg:pr-6 shadow-md rounded-none">
              
              <div className="absolute -left-8 sm:-left-12 md:-left-16 lg:-left-20 xl:-left-28 top-0 h-full w-[calc(2rem+4px)] sm:w-[calc(3rem+4px)] md:w-[calc(4rem+4px)] lg:w-[calc(5rem+4px)] xl:w-[calc(7rem+4px)] pointer-events-none">
                <svg
                  viewBox="0 -10 128 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-[#0B192C]"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 0 -10 L 128 -10 L 128 80 C 72 80 36 24 0 -10 Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-2.5 lg:gap-3.5 xl:gap-6 ml-auto mr-3 lg:mr-4 xl:mr-6 min-w-0">
                {navItems.map(({ name, href, icon: Icon }) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`relative group flex items-center gap-1.5 py-1.5 font-semibold text-xs xl:text-sm tracking-tight transition-all duration-300 whitespace-nowrap ${
                        isActive ? "text-[#E87722] font-bold" : "text-slate-200 hover:text-white"
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-300 ${isActive ? "text-[#E87722]" : "text-slate-300 group-hover:text-white"}`} />
                      <span>{name}</span>
                      <span
                        className={`absolute -bottom-0.5 left-0 h-[2px] bg-[#E87722] rounded-full transition-all duration-300 ease-out ${
                          isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                        }`}
                      ></span>
                    </Link>
                  );
                })}
              </nav>

              {/* Tablet Navigation */}
              <nav className="hidden md:flex lg:hidden items-center gap-2 lg:gap-3 ml-auto mr-3 min-w-0">
                {navItems.map(({ name, href, icon: Icon }) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`relative group flex flex-col items-center justify-center py-1 px-1.5 rounded-lg transition-all duration-300 ${
                        isActive ? "text-[#E87722] font-bold" : "text-slate-300 hover:text-white"
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 shrink-0 transition-transform duration-300 ${isActive ? "text-[#E87722]" : "text-slate-300 group-hover:text-white"}`} />
                      <span className="text-[10px] tracking-tight whitespace-nowrap mt-0.5 leading-none">{name}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* Apply Now CTA + Mobile Menu Button */}
              <div className="flex items-center gap-2 ml-auto lg:ml-0 shrink-0">
                <Button
                  asChild
                  className="bg-[#E87722] hover:bg-[#d46716] text-white text-xs xl:text-sm font-bold px-3 lg:px-4 xl:px-6 py-1.5 lg:py-2.5 h-auto rounded-md shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 shrink-0 whitespace-nowrap"
                >
                  <Link href="/apply-now">Apply Now</Link>
                </Button>

                {/* Mobile Hamburger Toggle Button */}
                <button
                  onClick={() => setMobileOpen((prev) => !prev)}
                  className="md:hidden p-2 text-white hover:text-[#E87722] focus:outline-none transition-colors shrink-0"
                  aria-label="Toggle navigation menu"
                >
                  <div className={`transition-transform duration-300 transform ${mobileOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"}`}>
                    {mobileOpen ? <X className="w-6 h-6 text-[#E87722]" /> : <Menu className="w-6 h-6" />}
                  </div>
                </button>
              </div>

            </div>
          </div>

        </div>
      </header>

      {/* Standalone Mobile Slide-Down Overlay with Pristine Glass Blur */}
      <div className="sticky top-16 sm:top-20 z-40 w-full md:hidden -mt-px">
        <div
          className={`w-full grid transition-[grid-template-rows] duration-250 ease-out bg-white/80 backdrop-blur-md text-[#0B192C] shadow-xl border-slate-200/80 transform-gpu will-change-[grid-template-rows] ${
            mobileOpen
              ? "grid-rows-[1fr] border-b"
              : "grid-rows-[0fr] border-b-0"
          }`}
        >
          <div className="overflow-hidden">
            <nav className="space-y-1 py-3.5 px-5">
              {navItems.map(({ name, href, icon: Icon }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between py-2.5 px-3.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "border border-[#E87722] text-[#E87722] bg-[#E87722]/10 font-bold shadow-sm"
                        : "border border-transparent text-slate-700 hover:text-[#0B192C] hover:bg-slate-100/80"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? "text-[#E87722]" : "text-slate-500"}`} />
                      <span>{name}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isActive ? "text-[#E87722] opacity-100 translate-x-0.5" : "text-slate-400 opacity-60"}`} />
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}