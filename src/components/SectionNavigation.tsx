"use client";

import React, { useState, useEffect } from "react";
import { FileText, ExternalLink } from "lucide-react";

export interface NavItem {
  id: string;
  label: string;
}

interface SectionNavigationProps {
  title: string;
  items: NavItem[];
}

export function SectionNavigation({ title, items }: SectionNavigationProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const isAbsoluteBottom = scrollPosition >= document.documentElement.scrollHeight - 20;

      if (isAbsoluteBottom && items.length > 0) {
        setActiveId(items[items.length - 1].id);
        return;
      }

      const headerOffset = 140;
      let currentSectionId = items[0]?.id || "";

      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerOffset) {
            currentSectionId = item.id;
          }
        }
      }

      if (currentSectionId) {
        setActiveId(currentSectionId);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items]);

  return (
    <div className="sticky top-28 bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-4">
      <div className="flex items-center gap-2 font-bold text-sm text-[#0B192C] uppercase tracking-wider border-b border-slate-100 pb-3">
        <FileText className="w-4 h-4 text-[#E87722]" /> {title}
      </div>
      <nav className="space-y-1.5 text-xs font-semibold">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveId(item.id)}
              className={`block py-2.5 px-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-[#0B192C] text-white font-bold shadow-sm translate-x-1"
                  : "text-slate-600 hover:text-[#0B192C] hover:bg-slate-100"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      <div className="pt-4 border-t border-slate-100 bg-slate-50 p-4 rounded-xl space-y-2">
        <div className="text-xs font-bold text-[#0B192C]">Need Legal Verification?</div>
        <p className="text-[11px] text-slate-500 leading-normal">
          Our company is officially registered with the Securities and Exchange Commission (SEC CS202002431).
        </p>
        <a
          href="https://www.sec.gov.ph"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-bold text-[#E87722] hover:underline"
        >
          SEC Verification Portal <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
