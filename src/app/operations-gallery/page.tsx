"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ImageSlideshow } from "@/components/ImageSlideshow";
import { 
  ChevronRight, 
  ChevronLeft, 
  Camera, 
  Building2, 
  X, 
  Maximize2,
  Images,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  "/images/servicesgallery/1.jpg",
  "/images/servicesgallery/2.jpg",
  "/images/servicesgallery/3.png",
  "/images/servicesgallery/4.jpg",
  "/images/servicesgallery/5.png",
  "/images/servicesgallery/6.JPG",
  "/images/servicesgallery/7.JPG",
  "/images/servicesgallery/8.jpg",
  "/images/servicesgallery/9.jpg",
  "/images/servicesgallery/10.jpg",
  "/images/servicesgallery/11.jpg",
  "/images/servicesgallery/12.jpg",
  "/images/servicesgallery/13.jpg",
  "/images/servicesgallery/14.jpg",
];

const PREVIEW_COUNT = 4; // Show exactly 4 photos in the Fandom-style collage grid

export default function OperationsGalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length));
  }, [selectedIndex]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % galleryImages.length));
  }, [selectedIndex]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    },
    [selectedIndex, handlePrev, handleNext]
  );

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      thumbnailRefs.current[selectedIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, handleKeyDown]);

  const remainingCount = galleryImages.length - PREVIEW_COUNT;

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full pt-0 pb-4 sm:pb-6 lg:pb-8 min-h-[150px] sm:min-h-[190px] lg:min-h-[240px] flex items-stretch overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 w-full my-auto">
          <div className="absolute inset-y-0 right-0 sm:right-6 lg:right-8 h-full pointer-events-none z-20 flex justify-end overflow-hidden">
            <Image
              src="/images/wholeoverlay.png"
              alt="Decorative Header Overlay"
              width={632}
              height={770}
              className="h-full w-auto object-right object-cover"
              priority
            />
          </div>

          <div className="relative z-10 min-h-[160px] sm:min-h-[200px] lg:min-h-[240px] flex items-center">
            {/* Masked Hero Background Image */}
            <div
              className="absolute inset-y-0 right-0 w-3/5 sm:w-2/3 lg:w-7/12 z-0 overflow-hidden pointer-events-none"
              style={{
                WebkitMaskImage: "radial-gradient(circle at 80% 50%, black 30%, transparent 75%)",
                maskImage: "radial-gradient(circle at 80% 50%, black 30%, transparent 75%)",
              }}
            >
              <Image
                src="/images/companypicc.png"
                alt="928 Credit Concept Operations"
                fill
                sizes="(max-width: 640px) 60vw, (max-width: 1024px) 66vw, 58vw"
                className="object-cover object-center scale-105"
                priority
              />
            </div>

            <div className="w-[57%] sm:w-[70%] lg:w-[60%] space-y-2 sm:space-y-3 z-30 relative px-4 sm:px-6 lg:px-10 py-4 sm:py-6 my-auto flex flex-col justify-center">
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B192C] leading-tight [text-shadow:_0_0_4px_#ffffff,_0_0_4px_#ffffff]">
                  Operations Gallery
                </h1>
              </div>

              <div className="w-12 h-1 bg-[#E87722] rounded-full"></div>

              <p className="text-xs sm:text-sm text-slate-900 max-w-md leading-relaxed [text-shadow:_0_0_4px_#ffffff,_0_0_4px_#ffffff]">
                Inside 928 Credit Concept Lending — taking a look at our headquarters, team operations, and client engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery Content */}
      <section className="py-6 sm:py-8 lg:py-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">
          {/* Featured Showcase Gallery */}
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.15em]">Operational Highlights</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B192C] mt-1">Corporate Facilities & Operations</h2>
              <p className="text-xs text-slate-500">Official visual record of 928 Credit Concept&apos;s corporate headquarters, customer consultation areas, and loan processing operations.</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <ImageSlideshow
                images={galleryImages}
                interval={4500}
                className="relative w-full aspect-[4/3] sm:aspect-[16/9] max-h-[540px] rounded-2xl overflow-hidden border border-slate-100 shadow-xl group bg-slate-950 cursor-pointer"
              />
            </div>
          </div>

          {/* Compact Photo Grid */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.15em]">Photo Archive</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0B192C]">Operations Media Gallery</h2>
                <p className="text-xs text-slate-500">Photo repository of accredited office facilities, administrative departments, and daily credit operations.</p>
              </div>

              <button
                onClick={() => setSelectedIndex(0)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 bg-white text-[#0B192C] hover:bg-slate-100 text-xs font-bold shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Images className="w-4 h-4 text-[#E87722]" />
                View All ({galleryImages.length} Photos)
              </button>
            </div>

            {/* Fandom 4-Tile Grid Layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {galleryImages.slice(0, PREVIEW_COUNT).map((src, index) => {
                const isFourthTile = index === PREVIEW_COUNT - 1;

                return (
                  <div
                    key={src}
                    onClick={() => setSelectedIndex(index)}
                    className="group relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                  >
                    <Image
                      src={src}
                      alt={`928 Credit Concept Photo ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
                      className={`object-cover object-center transition-transform duration-500 ${
                        isFourthTile ? "blur-[1px] scale-105 group-hover:scale-110" : "group-hover:scale-105"
                      }`}
                    />

                    {/* Fandom-style +X Overlay on 4th Tile */}
                    {isFourthTile ? (
                      <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px] flex flex-col items-center justify-center text-white space-y-1 transition-all group-hover:bg-black/75">
                        <div className="flex items-center text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                          <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-[#E87722]" />
                          <span>{remainingCount}</span>
                        </div>
                        <span className="text-[11px] sm:text-xs font-semibold text-slate-200 uppercase tracking-wider">
                          View All
                        </span>
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3">
                        <span className="text-white text-[11px] font-semibold flex items-center gap-1">
                          <Camera className="w-3 h-3 text-[#E87722]" /> Photo {index + 1}
                        </span>
                        <span className="bg-black/50 p-1 rounded-full text-white backdrop-blur-sm">
                          <Maximize2 className="w-3 h-3 text-[#E87722]" />
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-[#0B192C] text-white rounded-2xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-[#E87722]">
                <Building2 className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-[0.15em]">Visit Our Office</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold">Partner With 928 Credit Concept</h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                Looking for accessible non-collateralized business loans for your enterprise? Contact us today.
              </p>
            </div>
            <Button
              asChild
              className="bg-[#E87722] hover:bg-[#d46716] text-white font-bold text-sm px-8 py-3.5 rounded-md shadow-md shrink-0 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Link href="/apply-now" className="flex items-center gap-2">
                Apply Now <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Zoom Focus Modal with Thumbnail Strip */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Modal Content */}
          <div
            className="relative max-w-5xl w-full h-full max-h-[92vh] flex flex-col justify-between items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="w-full flex items-center justify-between pt-1 pb-3 text-white">
              <div className="flex items-center gap-2 text-xs font-bold bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                <Camera className="w-3.5 h-3.5 text-[#E87722]" />
                <span>Photo {selectedIndex + 1} of {galleryImages.length}</span>
              </div>

              <button
                onClick={() => setSelectedIndex(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-[#E87722] text-white transition-colors backdrop-blur-md border border-white/10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Focus Image View */}
            <div className="relative w-full flex-1 rounded-2xl overflow-hidden bg-black/80 border border-slate-800 shadow-2xl flex items-center justify-center my-2">
              <Image
                src={galleryImages[selectedIndex]}
                alt={`928 Credit Concept Photo ${selectedIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain p-2 select-none"
                priority
              />

              {/* Prev / Next Navigation overlay buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#E87722] text-white transition-all backdrop-blur-md border border-white/10 shadow-lg hover:scale-110"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#E87722] text-white transition-all backdrop-blur-md border border-white/10 shadow-lg hover:scale-110"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Thumbnail Strip */}
            <div className="w-full pt-2 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin max-w-full">
              {galleryImages.map((src, idx) => (
                <button
                  key={src}
                  ref={(el) => { thumbnailRefs.current[idx] = el; }}
                  onClick={() => setSelectedIndex(idx)}
                  className={`relative w-14 h-11 sm:w-16 sm:h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    idx === selectedIndex
                      ? "border-[#E87722] scale-105 opacity-100 shadow-md"
                      : "border-transparent opacity-40 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
