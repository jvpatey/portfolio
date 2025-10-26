"use client";

import { motion, type Variants } from "framer-motion";
import { useState, useEffect } from "react";

// Hero section component - includes name, title, and work button
export default function Hero() {
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

  // Typewriter effect for "full stack software developer"
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "full stack software developer";
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    // Add delay before typing starts so users can see the animation
    const startTyping = setTimeout(() => {
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < fullText.length) {
          setDisplayedText(fullText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          // Keep cursor blinking after typing is complete
          setTimeout(() => setShowCursor(false), 3000);
        }
      }, 80); // Slightly faster typing speed

      return () => clearInterval(typingInterval);
    }, 800); // 0.8 second delay before typing starts

    return () => clearTimeout(startTyping);
  }, []);

  // Cursor blink effect - only when not typing
  useEffect(() => {
    if (!isTyping && showCursor) {
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);
      return () => clearInterval(cursorInterval);
    }
  }, [isTyping, showCursor]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      <motion.div
        className="relative max-w-6xl w-full z-20"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div>
          {/* Section 1: Name */}
          <div className="mb-12 md:mb-16">
            <motion.p
              variants={item}
              className="text-base sm:text-lg font-medium text-slate-400 mb-3"
            >
              Hi, my name is
            </motion.p>
            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white"
            >
              Jeffrey Patey.
            </motion.h1>
          </div>

          {/* Section 2: Role */}
          <div className="mb-12 md:mb-16 space-y-2">
            <motion.div
              variants={item}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight whitespace-nowrap"
            >
              I&apos;m a{" "}
              <span
                className="font-semibold tracking-tight"
                style={{
                  background:
                    "linear-gradient(135deg, #3478F6 0%, #FF2D55 50%, #FF9500 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 0 30px rgba(52, 120, 246, 0.4)",
                  fontFamily:
                    "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
                }}
              >
                {displayedText}
                <span style={{ visibility: showCursor ? "visible" : "hidden" }}>
                  |
                </span>
              </span>
            </motion.div>
            <motion.div
              variants={item}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
            >
              with a healthcare background.
            </motion.div>
          </div>

          {/* Section 3: Passion Statement */}
          <div className="mb-12 md:mb-16">
            <motion.p
              variants={item}
              className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed"
            >
              My passion for{" "}
              <motion.span
                className="font-medium cursor-pointer inline-block"
                style={{
                  background:
                    "linear-gradient(135deg, #3478F6 0%, #FF2D55 50%, #FF9500 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 0 20px rgba(255, 45, 85, 0.4)",
                }}
                whileHover={{
                  scale: 1.15,
                  rotate: [0, -3, 3, 0],
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
                whileTap={{ scale: 0.9 }}
              >
                health tech
              </motion.span>{" "}
              drives every solution I create.
            </motion.p>
          </div>

          {/* Section 4: CTA Button */}
          <div>
            <motion.div variants={item}>
              <motion.a
                href="#projects"
                className="relative group inline-block px-10 sm:px-12 py-5 sm:py-6 rounded-full font-semibold text-base sm:text-lg transition-all duration-500 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(52, 120, 246, 0.25) 0%, rgba(255, 45, 85, 0.25) 50%, rgba(255, 149, 0, 0.25) 100%)",
                  color: "white",
                  boxShadow:
                    "0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 0.5px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(20px) saturate(200%)",
                  border: "0.5px solid rgba(255, 255, 255, 0.2)",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 12px 40px rgba(0, 0, 0, 0.25), 0 0 0 0.5px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileTap={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500 rounded-full"></div>

                <span className="relative z-10">Check out my work</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
