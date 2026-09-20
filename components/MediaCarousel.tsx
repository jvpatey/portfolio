"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type TouchEvent,
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
const SWIPE_THRESHOLD = 48;

function nearActive(
  index: number,
  active: number,
  underlay: number | null,
  length: number,
) {
  if (index === active || index === underlay) return true;
  if (length <= 1) return index === active;
  const prev = (active - 1 + length) % length;
  const next = (active + 1) % length;
  return index === prev || index === next;
}

export default function MediaCarousel({ items, alt }: MediaCarouselProps) {
  const reduceMotion = useReducedMotion();
  const durationMs = reduceMotion ? 0 : 420;

  const [active, setActive] = useState(0);
  const [underlay, setUnderlay] = useState<number | null>(null);
  const [topOpaque, setTopOpaque] = useState(true);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const clearTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const raf1 = useRef<number | null>(null);
  const raf2 = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

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
    setUnderlay(null);
    setTopOpaque(true);
  }, []);

  const goTo = useCallback(
    (next: number) => {
      if (next === active || busy || next < 0 || next >= items.length) return;

      videoRefs.current[active]?.pause();
      clearScheduled();

      setUnderlay(active);
      setActive(next);
      setTopOpaque(false);

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
    touchStartX.current = null;
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

  const onTouchStart = (event: TouchEvent) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: TouchEvent) => {
    if (touchStartX.current === null || busy || items.length < 2) return;
    const endX = event.changedTouches[0]?.clientX;
    if (endX === undefined) return;
    const delta = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    if (delta < 0) {
      goTo((active + 1) % items.length);
    } else {
      goTo((active - 1 + items.length) % items.length);
    }
  };

  const carouselArrowBtn =
    "absolute top-1/2 z-30 flex -translate-y-1/2 touch-manipulation items-center justify-center rounded-full border border-white/10 bg-[var(--hero-base)]/90 p-2 text-white shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition-[opacity,background-color,border-color] duration-300 hover:border-white/15 hover:bg-[var(--surface-1)] disabled:opacity-50 sm:p-2.5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100";

  const renderFramedMedia = (item: MediaItem, index: number, isActive: boolean) => {
    const device = item.device ?? "web";
    const media =
      item.type === "image" ? (
        <Image
          src={item.src}
          alt={isActive ? `${alt} ${index + 1}` : ""}
          width={1600}
          height={900}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1280px"
          priority={index === 0}
          draggable={false}
          className="h-full w-full object-contain"
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
          className="h-full w-full object-contain"
        >
          Your browser does not support the video tag.
        </video>
      );

    if (device === "mobile") {
      return (
        <div className="relative mx-auto flex h-full max-h-full w-auto max-w-[min(100%,280px)] items-center justify-center sm:max-w-[320px]">
          <div className="relative flex h-full max-h-full aspect-[9/19] max-w-full overflow-hidden rounded-[1.35rem] border-[2.5px] border-white/18 bg-[#050507] p-[3px] shadow-[0_20px_50px_rgba(0,0,0,0.45)] sm:rounded-[1.5rem] sm:border-[3px] sm:p-1">
            <div className="relative h-full w-full overflow-hidden rounded-[1.05rem] bg-black sm:rounded-[1.15rem]">
              {media}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-md border border-white/12 bg-[#0a0a0e] shadow-[0_16px_48px_rgba(0,0,0,0.35)]">
        <div
          className="flex h-7 shrink-0 items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-3 sm:h-8"
          aria-hidden
        >
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="h-2 w-2 rounded-full bg-white/18" />
          <span className="h-2 w-2 rounded-full bg-white/12" />
          <div className="ml-2 h-3.5 flex-1 rounded-sm bg-white/[0.06] sm:ml-3 sm:h-4" />
        </div>
        <div className="relative min-h-0 flex-1 bg-black/40 p-1 sm:p-1.5">
          {media}
        </div>
      </div>
    );
  };

  return (
    <div className="group relative flex w-full min-w-0 flex-col items-stretch overflow-hidden rounded-md">
      {items.length > 1 ? (
        <button
          type="button"
          onClick={() => goTo((active - 1 + items.length) % items.length)}
          disabled={busy}
          className={`left-1.5 sm:left-2 ${carouselArrowBtn}`}
          aria-label="Previous media"
        >
          <svg
            className="h-5 w-5 sm:h-6 sm:w-6"
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

      <div
        className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-transparent touch-pan-y sm:aspect-[16/10] md:aspect-[16/9]"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {items.map((item, index) => {
          if (!nearActive(index, active, underlay, items.length)) {
            return null;
          }

          const isActive = index === active;
          const isUnderlay = index === underlay;

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
              className="absolute inset-0 flex items-center justify-center p-1.5 sm:p-3"
              style={{
                opacity,
                zIndex,
                transition,
                pointerEvents: isActive && !busy ? "auto" : "none",
                willChange: isActive && busy ? "opacity" : "auto",
              }}
            >
              {renderFramedMedia(item, index, isActive)}
            </div>
          );
        })}
      </div>

      {items.length > 1 ? (
        <button
          type="button"
          onClick={() => goTo((active + 1) % items.length)}
          disabled={busy}
          className={`right-1.5 sm:right-2 ${carouselArrowBtn}`}
          aria-label="Next media"
        >
          <svg
            className="h-5 w-5 sm:h-6 sm:w-6"
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
        <div className="-mx-1 mt-3 flex w-[calc(100%+0.5rem)] items-center gap-2 overflow-x-auto px-1 pb-0.5 [scrollbar-width:thin]">
          {items.map((item, index) => {
            const device = item.device ?? "web";
            const prevDevice =
              index > 0 ? (items[index - 1].device ?? "web") : device;
            const showDivider = index > 0 && device !== prevDevice;
            const selected = index === active;
            const isMobile = device === "mobile";

            return (
              <div
                key={`${item.src}-thumb-wrap`}
                className="flex shrink-0 items-center gap-2"
              >
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
                  className={`relative h-14 w-[4.75rem] shrink-0 overflow-hidden rounded-md border transition-[opacity,border-color,box-shadow] duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/45 sm:h-[4.25rem] sm:w-[5.5rem] ${
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
                      sizes="88px"
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
