"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import HeroAside from "./HeroAside";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: reduceMotion ? 1 : 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.08,
        delayChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: reduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.55,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  };

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-x-clip px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
    >
      <motion.div
        className="relative z-20 mx-auto w-full max-w-6xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="grid w-full grid-cols-1 items-center gap-5 sm:gap-8 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
          <header className="order-1 space-y-2.5 sm:space-y-4 lg:col-span-6 lg:col-start-1 lg:row-start-1">
            <motion.p
              variants={item}
              className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 sm:text-sm"
            >
              <span
                className="inline-block h-2 w-2 shrink-0 rounded-[2px] bg-[var(--accent-primary)]"
                aria-hidden
              />
              Full stack developer
            </motion.p>

            <motion.h1
              variants={item}
              className="text-balance text-5xl font-bold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-8xl"
            >
              Jeffrey Patey
            </motion.h1>

            <motion.p
              variants={item}
              className="max-w-xl text-balance text-xl font-semibold leading-snug tracking-tight sm:text-3xl md:text-4xl"
            >
              <span className="text-white/95">Health tech</span>
              <span className="text-white/35">
                {" "}
                products that simplify real workflows.
              </span>
            </motion.p>
          </header>

          <HeroAside item={item} />

          <div className="order-3 flex flex-col gap-5 sm:gap-6 lg:col-span-6 lg:col-start-1 lg:row-start-2 lg:gap-8">
            <motion.p
              variants={item}
              className="max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base md:text-lg"
            >
              <a
                href="#chairside"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = "chairside";
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: reduceMotion ? "auto" : "smooth",
                    block: "start",
                  });
                }}
                className="font-medium text-slate-200 underline decoration-[var(--accent-primary)]/40 underline-offset-4 transition-colors hover:text-white hover:decoration-[var(--accent-primary)]/70"
              >
                Chairside
              </a>{" "}
              is live on web and the App Store—plus HomeKeep and client work
              shipping in production.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            >
              <motion.a
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, "#projects")}
                className="relative inline-flex w-full cursor-pointer items-center justify-center rounded-full border border-orange-300/30 px-8 py-3.5 text-center text-base font-semibold text-white shadow-[0_8px_28px_rgba(201,98,78,0.36)] transition-[box-shadow,background-color] duration-300 hover:border-orange-200/40 hover:shadow-[0_12px_36px_rgba(201,98,78,0.46)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hero-base)] sm:w-auto sm:px-10 sm:py-4"
                style={{ backgroundColor: "var(--cta-solid)" }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 1.03,
                        backgroundColor: "var(--cta-solid-hover)",
                      }
                }
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Check out my work
              </motion.a>

              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-8 py-3.5 text-base font-medium text-slate-200 transition-colors hover:border-white/25 hover:bg-white/[0.04] sm:w-auto sm:py-4"
              >
                Let&apos;s talk
              </a>
            </motion.div>

            <motion.p variants={item} className="text-sm text-slate-500">
              <a
                href="/jeff_resume_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-white/15 underline-offset-4 transition-colors hover:text-slate-300 hover:decoration-white/35"
              >
                View resume (PDF)
              </a>
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
