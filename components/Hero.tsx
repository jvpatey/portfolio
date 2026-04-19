"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import GradientBackground from "./GradientBackground";
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
      className="relative min-h-screen flex items-start lg:items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pt-28 sm:pb-16 overflow-hidden"
    >
      <GradientBackground />

      <motion.div
        className="relative z-20 max-w-6xl w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="w-full lg:grid lg:grid-cols-12 lg:gap-x-12 lg:gap-y-10 lg:items-center">
          <div className="lg:col-span-7 space-y-8 sm:space-y-9">
            <header className="space-y-3 sm:space-y-4">
              <motion.p
                variants={item}
                className="text-sm font-medium uppercase tracking-widest text-slate-500"
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
                className="text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-snug text-balance max-w-xl"
              >
                Full stack software developer
                <span className="mt-2 block text-lg sm:text-xl md:text-2xl font-medium text-slate-400">
                  with a healthcare background.
                </span>
              </motion.p>
            </header>

            <motion.p
              variants={item}
              className="text-lg sm:text-xl text-slate-200 max-w-2xl leading-relaxed"
            >
              My passion for{" "}
              <span className="font-semibold text-white">health tech</span>{" "}
              drives every solution I create.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center pt-1"
            >
              <motion.a
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, "#projects")}
                className="relative group inline-flex justify-center items-center w-full sm:w-auto text-center px-10 py-4 rounded-full font-semibold text-base transition-all duration-500 overflow-hidden cursor-pointer"
                style={{
                  background: "var(--accent-gradient-soft)",
                  color: "white",
                  boxShadow:
                    "0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 0.5px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(20px) saturate(200%)",
                  border: "0.5px solid rgba(255, 255, 255, 0.2)",
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 1.04,
                        boxShadow:
                          "0 12px 40px rgba(0, 0, 0, 0.25), 0 0 0 0.5px rgba(255, 255, 255, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.28)",
                      }
                }
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileTap={
                      reduceMotion ? undefined : { scale: 1, opacity: 1 }
                    }
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  />
                </div>
                <div className="absolute inset-0 -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500 rounded-full" />
                <span className="relative z-10">Check out my work</span>
              </motion.a>

              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="inline-flex justify-center items-center w-full sm:w-auto px-8 py-4 rounded-full font-medium text-base text-slate-200 border border-white/15 hover:border-white/25 hover:bg-white/[0.04] transition-colors"
              >
                Get in touch
              </a>
            </motion.div>

            <motion.p variants={item} className="text-sm text-slate-500">
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
