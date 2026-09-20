"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export type MediaItem = {
  type: "image" | "video";
  src: string;
  poster?: string;
};

interface MediaCarouselProps {
  items: MediaItem[];
  alt: string;
}

export default function MediaCarousel({ items, alt }: MediaCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const current = items[currentSlide];
  const useThumbStrip = items.length > 4;

  const handleSlideChange = (newIndex: number) => {
    if (isTransitioning || newIndex === currentSlide) return;
    videoRef.current?.pause();
    setIsTransitioning(true);
    setCurrentSlide(newIndex);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  useEffect(() => {
    if (current?.type !== "video" || !videoRef.current) return;
    videoRef.current.play().catch(() => {
      /* autoplay may be blocked */
    });
  }, [currentSlide, current?.type]);

  if (!items.length) return null;

  const nextSlide = () =>
    handleSlideChange((currentSlide + 1) % items.length);
  const prevSlide = () =>
    handleSlideChange(
      currentSlide === 0 ? items.length - 1 : currentSlide - 1,
    );

  const carouselArrowBtn =
    "absolute top-1/2 z-10 flex -translate-y-1/2 touch-manipulation items-center justify-center rounded-full border border-white/10 bg-[var(--hero-base)] p-2 text-white shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.04)] transition-[opacity,background-color,border-color] duration-300 hover:border-white/15 hover:bg-[var(--surface-1)] disabled:opacity-50 sm:p-2.5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100";

  return (
    <div className="group relative flex w-full min-w-0 flex-col items-center overflow-hidden rounded-lg">
      {items.length > 1 ? (
        <button
          type="button"
          onClick={prevSlide}
          disabled={isTransitioning}
          className={`left-2 ${carouselArrowBtn}`}
          aria-label="Previous media"
        >
          <svg
            className="h-6 w-6"
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
      ) : null}

      <div className="relative flex max-h-[480px] w-full max-w-full items-center justify-center rounded-xl border border-white/10 bg-transparent p-1 sm:p-2">
        {current.type === "image" ? (
          <Image
            key={current.src}
            src={current.src}
            alt={`${alt} ${currentSlide + 1}`}
            width={1200}
            height={2400}
            sizes="(max-width: 768px) 100vw, 60vw"
            priority={currentSlide === 0}
            className="mx-auto h-auto max-h-[460px] w-auto max-w-full rounded-lg object-contain shadow-2xl"
          />
        ) : (
          <video
            key={current.src}
            ref={videoRef}
            src={current.src}
            poster={current.poster}
            controls
            muted
            loop
            playsInline
            preload="metadata"
            className="mx-auto h-auto max-h-[460px] w-auto max-w-full rounded-lg object-contain shadow-2xl"
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {items.length > 1 ? (
        <button
          type="button"
          onClick={nextSlide}
          disabled={isTransitioning}
          className={`right-2 ${carouselArrowBtn}`}
          aria-label="Next media"
        >
          <svg
            className="h-6 w-6"
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
      ) : null}

      {items.length > 1 && useThumbStrip ? (
        <div className="mt-3 flex w-full max-w-full gap-2 overflow-x-auto pb-1 [scrollbar-width:thin]">
          {items.map((item, index) => {
            const selected = index === currentSlide;
            return (
              <button
                key={`${item.src}-thumb`}
                type="button"
                onClick={() => handleSlideChange(index)}
                disabled={isTransitioning}
                className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400/45 ${
                  selected
                    ? "border-rose-300/50 ring-1 ring-rose-400/30"
                    : "border-white/10 opacity-70 hover:opacity-100"
                }`}
                aria-label={`Go to media ${index + 1}`}
                aria-current={selected ? "true" : undefined}
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                ) : (
                  <span className="flex h-full w-full items-center justify-center bg-white/[0.06] text-[0.65rem] font-medium text-slate-300">
                    Video
                  </span>
                )}
              </button>
            );
          })}
        </div>
      ) : null}

      {items.length > 1 && !useThumbStrip ? (
        <div className="mt-3 flex gap-2">
          {items.map((_, index) => (
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
              aria-label={`Go to media ${index + 1}`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
