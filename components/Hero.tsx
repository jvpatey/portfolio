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
      style={{ backgroundColor: "#000000" }}
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
            style={{
              background: "linear-gradient(135deg, #60a5fa 0%, #34d399 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Hi, my name is
          </motion.p>

          {/* Enhanced name with character-by-character animation */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white">
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
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-white"
          >
            I&apos;m a{" "}
            <span
              className="font-semibold"
              style={{
                background: "linear-gradient(135deg, #60a5fa 0%, #34d399 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              full stack software developer
            </span>{" "}
            with a healthcare background.
          </motion.h2>

          <motion.p
            variants={item}
            className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed"
          >
            My passion for{" "}
            <span
              className="font-medium"
              style={{
                background: "linear-gradient(135deg, #60a5fa 0%, #34d399 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              health tech
            </span>{" "}
            drives every solution I create.
          </motion.p>

          <motion.div variants={item} className="pt-6 sm:pt-8">
            <motion.a
              href="#projects"
              className="relative group inline-block px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{
                background: "linear-gradient(135deg, #60a5fa 0%, #34d399 100%)",
                color: "white",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="flex items-center gap-2">
                Check out my work
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.span>
              </span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
