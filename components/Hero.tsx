"use client";

import { motion, type Variants } from "framer-motion";

// Hero section component - includes name, title, and work button
export default function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl mx-auto w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="space-y-4 sm:space-y-6">
          <motion.p
            variants={item}
            className="text-base sm:text-lg bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent"
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-100"
          >
            Jeffrey Patey.
          </motion.h1>
          <motion.h2
            variants={item}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-300"
          >
            I&apos;m a full stack software developer.
          </motion.h2>
          <motion.p
            variants={item}
            className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed"
          >
            I build web and mobile applications that solve real problems.
          </motion.p>
          <motion.div variants={item} className="pt-6 sm:pt-8">
            <a
              href="#projects"
              className="relative group inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white rounded-full font-medium text-base sm:text-lg shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Check out my work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
