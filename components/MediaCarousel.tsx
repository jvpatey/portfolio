"use client";

import { useState, useEffect, useRef } from "react";

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
    "images"
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

  return (
    <div className="relative group rounded-lg flex flex-col items-center overflow-hidden">
      {/* Media Type Toggle - Apple Liquid Glass Style */}
      <div className="relative z-20 mb-4 flex items-center">
        <div
          className="relative inline-flex items-center"
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(20px) saturate(200%)",
            borderRadius: "9999px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow:
              "0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            padding: "3px",
          }}
        >
          {/* Animated background */}
          <div
            className="absolute h-[calc(100%-6px)] transition-all duration-500 ease-out"
            style={{
              width: "calc(50% - 3px)",
              left: currentMediaType === "images" ? "3px" : "calc(50% + 0px)",
              background:
                "linear-gradient(135deg, rgba(52, 120, 246, 0.15) 0%, rgba(255, 45, 85, 0.15) 50%, rgba(255, 149, 0, 0.15) 100%)",
              borderRadius: "9999px",
              backdropFilter: "blur(10px)",
              boxShadow:
                "0 2px 8px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              top: "3px",
            }}
          />

          <button
            onClick={() => setCurrentMediaType("images")}
            className="relative px-4 py-1.5 text-sm font-medium transition-all duration-300 z-10"
            style={{
              color:
                currentMediaType === "images"
                  ? "white"
                  : "rgba(255, 255, 255, 0.6)",
            }}
          >
            Images
          </button>
          <button
            onClick={() => setCurrentMediaType("videos")}
            className="relative px-4 py-1.5 text-sm font-medium transition-all duration-300 z-10"
            style={{
              color:
                currentMediaType === "videos"
                  ? "white"
                  : "rgba(255, 255, 255, 0.6)",
            }}
          >
            Videos
          </button>
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/80 backdrop-blur-sm hover:bg-slate-900/90 text-white p-3 rounded-full shadow-lg disabled:opacity-50"
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

      {/* Media Container */}
      <div className="relative max-h-[500px] w-full">
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
              <img
                src={image}
                alt={`${alt} ${index + 1}`}
                className="max-h-[500px] w-auto mx-auto rounded-lg shadow-2xl"
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
                className="max-h-[500px] w-auto mx-auto rounded-lg shadow-2xl"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/80 backdrop-blur-sm hover:bg-slate-900/90 text-white p-3 rounded-full shadow-lg disabled:opacity-50"
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
            onClick={() => handleSlideChange(index)}
            disabled={isTransitioning}
            className={`w-2 h-2 rounded-full transition-all duration-300 disabled:opacity-50 ${
              index === currentSlide
                ? "bg-blue-400 w-8"
                : "bg-slate-600 hover:bg-slate-500"
            }`}
            aria-label={`Go to ${currentMediaType.slice(0, -1)} ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
