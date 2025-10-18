"use client";

import { useState } from "react";

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

  return (
    <div className="relative group bg-slate-800 rounded-lg p-8 border border-slate-700 flex justify-center overflow-hidden">
      {/* Previous Button */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/80 backdrop-blur-sm hover:bg-slate-900/90 text-white p-3 rounded-full shadow-lg disabled:opacity-50"
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

      {/* Images Container with Fade and Slide Effect */}
      <div className="relative max-h-[500px]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${alt} ${index + 1}`}
            className={`max-h-[500px] w-auto rounded-lg shadow-2xl transition-all duration-500 ease-in-out ${
              index === currentSlide
                ? "opacity-100 translate-x-0 relative"
                : "opacity-0 absolute top-0 left-0 translate-x-4"
            }`}
            style={{
              transitionProperty: "opacity, transform",
            }}
          />
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/80 backdrop-blur-sm hover:bg-slate-900/90 text-white p-3 rounded-full shadow-lg disabled:opacity-50"
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
            onClick={() => handleSlideChange(index)}
            disabled={isTransitioning}
            className={`w-2 h-2 rounded-full transition-all duration-300 disabled:opacity-50 ${
              index === currentSlide
                ? "bg-blue-400 w-8"
                : "bg-slate-600 hover:bg-slate-500"
            }`}
            aria-label={`Go to screenshot ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
