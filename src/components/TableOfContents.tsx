"use client";

import React, { useState, useEffect } from "react";

export interface NavItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  title?: string;
  items: NavItem[];
}

export function TableOfContents({ title = "Table of Contents", items }: TableOfContentsProps) {
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
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [items]);

  return (
    <div className="sticky top-28 bg-white rounded-xl p-5 shadow-sm border border-slate-200 space-y-3">
      <div className="text-xs font-bold text-[#0B192C] uppercase tracking-wider border-b border-slate-100 pb-2.5">
        {title}
      </div>
      <nav className="space-y-1 text-xs">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveId(item.id)}
              className={`block py-2 px-3 border-l-2 transition-all duration-150 ${
                isActive
                  ? "border-[#E87722] text-[#0B192C] font-bold bg-slate-50"
                  : "border-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
