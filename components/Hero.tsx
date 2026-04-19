"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import HeroAside from "./HeroAside";

// Hero: editorial layout, soft depth backdrop, paired CTAs
export default function Hero() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: reduceMotion ? 1 : 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.07,
        delayChildren: reduceMotion ? 0 : 0.12,
      },
    },
  };

  const item: Variants = {
    hidden: reduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 18 },
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
      className="relative flex min-h-[calc(100dvh-4rem)] items-center justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 overflow-hidden"
    >
      <motion.div
        className="relative z-20 max-w-6xl w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="w-full lg:grid lg:grid-cols-12 lg:gap-x-12 lg:gap-y-10 lg:items-center">
          <div className="lg:col-span-7 flex flex-col gap-8 sm:gap-10">
            <header className="space-y-2 sm:space-y-3">
              <motion.p
                variants={item}
                className="text-sm font-medium uppercase tracking-widest text-slate-400 mb-1"
              >
                Hi, my name is
              </motion.p>
              <motion.h1
                variants={item}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight text-balance"
              >
                Jeffrey Patey
              </motion.h1>
              <motion.p
                variants={item}
                className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/95 leading-snug text-balance max-w-xl"
              >
                Full stack software developer
                <span className="mt-1.5 block font-normal text-slate-400 text-base sm:text-lg md:text-xl">
                  with a healthcare background.
                </span>
              </motion.p>
            </header>

            <motion.p
              variants={item}
              className="max-w-2xl text-base md:text-lg leading-relaxed text-slate-400"
            >
              My passion for{" "}
              <span className="font-medium text-slate-200">health tech</span>{" "}
              drives every solution I create.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center pt-1"
            >
              <motion.a
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, "#projects")}
                className="relative inline-flex justify-center items-center w-full sm:w-auto text-center px-10 py-4 rounded-full font-semibold text-base text-white cursor-pointer border border-cyan-300/35 shadow-[0_8px_28px_rgba(6,182,212,0.38)] transition-[box-shadow,background-color] duration-300 hover:border-cyan-200/45 hover:shadow-[0_12px_36px_rgba(6,182,212,0.48)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hero-base)]"
                style={{ backgroundColor: "var(--cta-solid)" }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 1.04,
                        backgroundColor: "var(--cta-solid-hover)",
                      }
                }
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10 drop-shadow-sm">
                  Check out my work
                </span>
              </motion.a>

              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="inline-flex justify-center items-center w-full sm:w-auto px-8 py-4 rounded-full font-medium text-base text-slate-200 border border-white/15 hover:border-white/25 hover:bg-white/[0.04] transition-colors"
              >
                Get in touch
              </a>
            </motion.div>

            <motion.p variants={item} className="text-sm text-slate-400">
              <a
                href="/jeffpatey_resume_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-white/20 underline-offset-4 hover:text-slate-300 hover:decoration-white/40 transition-colors"
              >
                View resume (PDF)
              </a>
            </motion.p>
          </div>

          <HeroAside item={item} />
        </div>
      </motion.div>
    </section>
  );
}
