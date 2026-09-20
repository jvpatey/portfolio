"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type TransitionEvent,
} from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";

export type MediaItem = {
  type: "image" | "video";
  src: string;
  poster?: string;
  /** Defaults to "web". Used for thumb shape and strip dividers. */
  device?: "web" | "mobile";
};

interface MediaCarouselProps {
  items: MediaItem[];
  alt: string;
}

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function MediaCarousel({ items, alt }: MediaCarouselProps) {
  const reduceMotion = useReducedMotion();
  const durationMs = reduceMotion ? 0 : 420;

  /** Fully visible slide (and the one that remains on top after a fade). */
  const [active, setActive] = useState(0);
  /** Previous slide held opaque underneath during the fade — never animated. */
  const [underlay, setUnderlay] = useState<number | null>(null);
  /** Active slide opacity target; starts false on navigate, then true to fade in. */
  const [topOpaque, setTopOpaque] = useState(true);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const clearTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const raf1 = useRef<number | null>(null);
  const raf2 = useRef<number | null>(null);

  const busy = underlay !== null;

  const clearScheduled = () => {
    if (clearTimer.current) clearTimeout(clearTimer.current);
    if (raf1.current !== null) cancelAnimationFrame(raf1.current);
    if (raf2.current !== null) cancelAnimationFrame(raf2.current);
    clearTimer.current = null;
    raf1.current = null;
    raf2.current = null;
  };

  const settle = useCallback(() => {
    // Drop underlay only after top is solid — top layer never unmounts/swaps.
    setUnderlay(null);
    setTopOpaque(true);
  }, []);

  const goTo = useCallback(
    (next: number) => {
      if (next === active || busy || next < 0 || next >= items.length) return;

      videoRefs.current[active]?.pause();
      clearScheduled();

      // Hold current as opaque underlay; mount next on top at opacity 0.
      setUnderlay(active);
      setActive(next);
      setTopOpaque(false);

      // Two rAFs so the browser paints opacity 0 before transitioning to 1.
      raf1.current = requestAnimationFrame(() => {
        raf2.current = requestAnimationFrame(() => {
          setTopOpaque(true);
          clearTimer.current = setTimeout(settle, durationMs + 32);
        });
      });
    },
    [active, busy, durationMs, items.length, settle],
  );

  useEffect(() => {
    clearScheduled();
    setActive(0);
    setUnderlay(null);
    setTopOpaque(true);
  }, [items]);

  useEffect(() => {
    return () => clearScheduled();
  }, []);

  useEffect(() => {
    const video = videoRefs.current[active];
    if (!video || items[active]?.type !== "video" || busy) return;
    video.play().catch(() => {
      /* autoplay may be blocked */
    });
  }, [active, busy, items]);

  if (!items.length) return null;

  const onTopTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.propertyName !== "opacity") return;
    if (!topOpaque || underlay === null) return;
    clearScheduled();
    settle();
  };

  const carouselArrowBtn =
    "absolute top-1/2 z-30 flex -translate-y-1/2 touch-manipulation items-center justify-center rounded-full border border-white/10 bg-[var(--hero-base)]/90 p-2 text-white shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition-[opacity,background-color,border-color] duration-300 hover:border-white/15 hover:bg-[var(--surface-1)] disabled:opacity-50 sm:p-2.5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100";

  return (
    <div className="group relative flex w-full min-w-0 flex-col items-stretch overflow-hidden rounded-md">
      {items.length > 1 ? (
        <button
          type="button"
          onClick={() => goTo((active - 1 + items.length) % items.length)}
          disabled={busy}
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

      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-transparent sm:aspect-[16/9]">
        {items.map((item, index) => {
          const isActive = index === active;
          const isUnderlay = index === underlay;

          // Active fades in on top. Underlay stays fully opaque with no transition.
          // Everything else stays mounted at opacity 0 for decode cache.
          let opacity = 0;
          let zIndex = 0;
          let transition = "none";

          if (isUnderlay) {
            opacity = 1;
            zIndex = 1;
            transition = "none";
          } else if (isActive) {
            opacity = topOpaque ? 1 : 0;
            zIndex = 2;
            transition =
              durationMs > 0 ? `opacity ${durationMs}ms ${EASE}` : "none";
          }

          return (
            <div
              key={item.src}
              aria-hidden={!isActive}
              onTransitionEnd={isActive ? onTopTransitionEnd : undefined}
              className="absolute inset-0 flex items-center justify-center p-1 sm:p-2"
              style={{
                opacity,
                zIndex,
                transition,
                pointerEvents: isActive && !busy ? "auto" : "none",
                willChange: isActive && busy ? "opacity" : "auto",
              }}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={isActive ? `${alt} ${index + 1}` : ""}
                  width={1600}
                  height={900}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1152px"
                  priority={index <= 1}
                  draggable={false}
                  className="h-full w-full rounded-sm object-contain"
                />
              ) : (
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={item.src}
                  poster={item.poster}
                  controls={isActive && !busy}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full rounded-sm object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          );
        })}
      </div>

      {items.length > 1 ? (
        <button
          type="button"
          onClick={() => goTo((active + 1) % items.length)}
          disabled={busy}
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

      {items.length > 1 ? (
        <div className="mt-3 flex w-full items-center gap-2 overflow-x-auto pb-0.5 [scrollbar-width:thin]">
          {items.map((item, index) => {
            const device = item.device ?? "web";
            const prevDevice = index > 0 ? (items[index - 1].device ?? "web") : device;
            const showDivider = index > 0 && device !== prevDevice;
            const selected = index === active;
            const isMobile = device === "mobile";

            return (
              <div key={`${item.src}-thumb-wrap`} className="flex shrink-0 items-center gap-2">
                {showDivider ? (
                  <div
                    className="mx-0.5 flex h-14 w-px shrink-0 self-center bg-white/20 sm:h-16"
                    role="separator"
                    aria-orientation="vertical"
                    aria-label="Web and mobile"
                  />
                ) : null}
                <button
                  type="button"
                  onClick={() => goTo(index)}
                  disabled={busy}
                  className={`relative shrink-0 overflow-hidden border transition-[opacity,border-color,box-shadow] duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/45 ${
                    isMobile
                      ? "h-[4.25rem] w-9 rounded-[0.65rem] sm:h-[4.75rem] sm:w-10 sm:rounded-[0.7rem]"
                      : "h-14 w-[5.5rem] rounded-md sm:h-[4.5rem] sm:w-28"
                  } ${
                    selected
                      ? "border-[var(--accent-primary)]/50 ring-1 ring-[var(--accent-primary)]/30"
                      : "border-white/10 opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`Go to ${isMobile ? "mobile" : "web"} media ${index + 1}`}
                  aria-current={selected ? "true" : undefined}
                >
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt=""
                      fill
                      className="object-cover object-top"
                      sizes={isMobile ? "40px" : "112px"}
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center bg-white/[0.06] text-[0.65rem] font-medium text-slate-300">
                      Video
                    </span>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
