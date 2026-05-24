"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

// ImageCarousel component - displays a carousel of images for a project
export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSlideChange = (newIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(newIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % images.length;
    handleSlideChange(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    handleSlideChange(newIndex);
  };

  const carouselArrowBtn =
    "absolute top-1/2 z-10 flex -translate-y-1/2 touch-manipulation items-center justify-center rounded-full border border-white/10 bg-[var(--hero-base)] p-2 text-white shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.04)] transition-[opacity,background-color,border-color] duration-300 hover:border-white/15 hover:bg-[var(--surface-1)] disabled:opacity-50 sm:p-2.5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100";

  return (
    <div className="relative group rounded-lg flex justify-center w-full min-w-0 overflow-hidden">
      <button
        type="button"
        onClick={prevSlide}
        disabled={isTransitioning}
        className={`left-2 ${carouselArrowBtn}`}
        aria-label="Previous screenshot"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <div className="relative flex max-h-[500px] w-full max-w-full items-center justify-center rounded-xl border border-white/10 bg-transparent p-1 sm:p-2">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`${alt} ${index + 1}`}
            width={1200}
            height={2400}
            sizes="(max-width: 768px) 100vw, 60vw"
            priority={index === 0}
            className={`max-h-[500px] max-w-full h-auto w-auto object-contain rounded-lg shadow-2xl transition-all duration-500 ease-in-out ${
              index === currentSlide
                ? "opacity-100 translate-x-0 relative"
                : "opacity-0 absolute top-0 left-0 translate-x-4 pointer-events-none"
            }`}
            style={{
              transitionProperty: "opacity, transform",
            }}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={nextSlide}
        disabled={isTransitioning}
        className={`right-2 ${carouselArrowBtn}`}
        aria-label="Next screenshot"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleSlideChange(index)}
            disabled={isTransitioning}
            className={`h-2 rounded-full transition-all duration-300 disabled:opacity-50 ${
              index === currentSlide
                ? "w-8 bg-[var(--accent-primary)]/90"
                : "w-2 bg-white/20 hover:bg-white/35"
            }`}
            aria-label={`Go to screenshot ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
