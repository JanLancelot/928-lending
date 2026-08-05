"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSlideshowProps {
  images?: string[];
  interval?: number;
  className?: string;
  fitMode?: "cover" | "contain";
}

const defaultImages = [
  "/images/gallery/1.JPG",
  "/images/gallery/2.JPG",
  "/images/gallery/3.JPG",
];

export function ImageSlideshow({
  images = defaultImages,
  interval = 4000,
  className,
  fitMode = "cover",
}: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const containerStyle = className
    ? className
    : "relative w-full aspect-[4/3] sm:aspect-[5/4] rounded-2xl overflow-hidden border border-slate-100 shadow-md group bg-slate-950";

  return (
    <div className={containerStyle}>
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out bg-slate-950 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Blurred Background Filler for Adapting All Image Dimensions */}
          <Image
            src={src}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            className="object-cover blur-xl scale-110 opacity-30 pointer-events-none"
          />

          {/* Foreground Crisp Main Image */}
          <Image
            src={src}
            alt={`928 Credit Concept Office Gallery ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            className={`${
              fitMode === "contain" ? "object-contain p-2" : "object-cover object-center"
            } rounded-2xl`}
            priority={index === 0}
          />
        </div>
      ))}

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 text-white hover:bg-[#E87722] transition-colors opacity-0 group-hover:opacity-100 backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 text-white hover:bg-[#E87722] transition-colors opacity-0 group-hover:opacity-100 backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Slide Indicators / Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#E87722] w-6"
                  : "bg-white/60 hover:bg-white w-2"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
