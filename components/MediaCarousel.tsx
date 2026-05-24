"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface MediaCarouselProps {
  images: string[];
  videos: string[];
  alt: string;
}

// MediaCarousel component - displays images or videos with a toggle switch
export default function MediaCarousel({
  images,
  videos,
  alt,
}: MediaCarouselProps) {
  const [currentMediaType, setCurrentMediaType] = useState<"images" | "videos">(
    "images",
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Create refs for videos using a single ref object
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  // Reset to first slide when switching media types
  useEffect(() => {
    setCurrentSlide(0);
  }, [currentMediaType]);

  const handleSlideChange = (newIndex: number) => {
    if (isTransitioning) return;

    // Pause current video if switching from videos
    if (currentMediaType === "videos" && videoRefs.current[currentSlide]) {
      videoRefs.current[currentSlide]?.pause();
    }

    setIsTransitioning(true);
    setCurrentSlide(newIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Auto-play the video when it becomes active
  useEffect(() => {
    if (currentMediaType === "videos") {
      const currentVideo = videoRefs.current[currentSlide];
      if (currentVideo) {
        currentVideo.play().catch(() => {
          // Autoplay might be blocked by browser
        });
      }
    }
  }, [currentSlide, currentMediaType]);

  const nextSlide = () => {
    const items = currentMediaType === "images" ? images : videos;
    const newIndex = (currentSlide + 1) % items.length;
    handleSlideChange(newIndex);
  };

  const prevSlide = () => {
    const items = currentMediaType === "images" ? images : videos;
    const newIndex = currentSlide === 0 ? items.length - 1 : currentSlide - 1;
    handleSlideChange(newIndex);
  };

  const currentItems = currentMediaType === "images" ? images : videos;

  const carouselArrowBtn =
    "absolute top-1/2 z-10 flex -translate-y-1/2 touch-manipulation items-center justify-center rounded-full border border-white/10 bg-[var(--hero-base)] p-2 text-white shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.04)] transition-[opacity,background-color,border-color] duration-300 hover:border-white/15 hover:bg-[var(--surface-1)] disabled:opacity-50 sm:p-2.5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100";

  return (
    <div className="relative group rounded-lg flex flex-col items-center w-full min-w-0 overflow-hidden">
      {/* Media type toggle — HeroAside-style */}
      <div className="relative z-20 mb-4 flex items-center">
        <div className="relative inline-flex items-center rounded-full border border-white/10 bg-[var(--hero-base)] p-0.5 shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.04)]">
          <div
            className="absolute h-[calc(100%-4px)] rounded-full bg-white/[0.08] transition-all duration-500 ease-out"
            style={{
              width: "calc(50% - 2px)",
              left: currentMediaType === "images" ? "2px" : "calc(50% + 0px)",
              top: "2px",
              boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.08)",
            }}
          />

          <button
            type="button"
            onClick={() => setCurrentMediaType("images")}
            className={`relative z-10 rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
              currentMediaType === "images"
                ? "text-white"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Images
          </button>
          <button
            type="button"
            onClick={() => setCurrentMediaType("videos")}
            className={`relative z-10 rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
              currentMediaType === "videos"
                ? "text-white"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Videos
          </button>
        </div>
      </div>

      {/* Previous */}
      <button
        type="button"
        onClick={prevSlide}
        disabled={isTransitioning}
        className={`left-2 ${carouselArrowBtn}`}
        aria-label={`Previous ${currentMediaType}`}
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

      {/* Media — subtle inset surface */}
      <div className="relative flex max-h-[500px] w-full max-w-full items-center justify-center rounded-xl border border-white/10 bg-transparent p-1 sm:p-2">
        {/* Images */}
        {images.map((image, index) => (
          <div
            key={`img-${index}`}
            className={`transition-all duration-500 ease-in-out ${
              currentMediaType === "images" && index === currentSlide
                ? "opacity-100 translate-x-0 relative"
                : "opacity-0 absolute top-0 left-0 translate-x-4 pointer-events-none"
            }`}
            style={{
              transitionProperty: "opacity, transform",
            }}
          >
            {currentMediaType === "images" && index === currentSlide && (
              <Image
                src={image}
                alt={`${alt} ${index + 1}`}
                width={1200}
                height={2400}
                sizes="(max-width: 768px) 100vw, 60vw"
                priority={index === 0}
                className="max-h-[500px] max-w-full w-auto h-auto object-contain mx-auto rounded-lg shadow-2xl"
              />
            )}
          </div>
        ))}

        {/* Videos */}
        {videos.map((video, index) => (
          <div
            key={`vid-${index}`}
            className={`transition-all duration-500 ease-in-out ${
              currentMediaType === "videos" && index === currentSlide
                ? "opacity-100 translate-x-0 relative"
                : "opacity-0 absolute top-0 left-0 translate-x-4 pointer-events-none"
            }`}
            style={{
              transitionProperty: "opacity, transform",
            }}
          >
            {currentMediaType === "videos" && index === currentSlide && (
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={video}
                controls
                muted
                loop
                playsInline
                className="max-h-[500px] max-w-full w-auto h-auto object-contain mx-auto rounded-lg shadow-2xl"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>

      {/* Next */}
      <button
        type="button"
        onClick={nextSlide}
        disabled={isTransitioning}
        className={`right-2 ${carouselArrowBtn}`}
        aria-label={`Next ${currentMediaType}`}
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
        {currentItems.map((_, index) => (
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
            aria-label={`Go to ${currentMediaType.slice(0, -1)} ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
