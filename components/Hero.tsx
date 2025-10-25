"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";

// Hero section component - includes name, title, and work button
export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePosition({ x, y });
  };

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.4,
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

  // Scramble text animation for name
  const nameChars = "Jeffrey Patey.".split("");

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.5 + i * 0.03,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    }),
  };

  return (
    <section
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="relative max-w-4xl mx-auto w-full z-20"
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          transform: `perspective(1000px) rotateX(${
            mousePosition.y * 2
          }deg) rotateY(${mousePosition.x * 2}deg)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div className="space-y-4 sm:space-y-6">
          <motion.p
            variants={item}
            className="text-base sm:text-lg font-medium"
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Hi, my name is
            </span>
          </motion.p>

          {/* Enhanced name with character-by-character animation */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-100">
            {nameChars.map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="show"
                className="inline-block"
                style={{ display: char === " " ? "inline" : "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          <motion.h2
            variants={item}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-300"
          >
            I&apos;m a{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              full stack software developer
            </span>{" "}
            with a healthcare background.
          </motion.h2>

          <motion.p
            variants={item}
            className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed"
          >
            My passion for{" "}
            <span className="text-cyan-400 font-medium">health tech</span>{" "}
            drives every solution I create.
          </motion.p>

          <motion.div variants={item} className="pt-6 sm:pt-8">
            <motion.a
              href="#projects"
              className="relative group inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white rounded-full font-medium text-base sm:text-lg shadow-xl shadow-blue-500/25 overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 60px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Check out my work
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.span>
              </span>

              {/* Hover gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-600 rounded-full"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Ripple effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ scale: 0, opacity: 0.5 }}
                whileHover={{
                  scale: 1.5,
                  opacity: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                }}
                style={{
                  background:
                    "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
                }}
              />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
