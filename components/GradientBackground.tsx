"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * 2025 gradient mesh background with animated grain texture
 * Sophisticated, Apple-style aesthetic
 */
export default function GradientBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Sophisticated mesh gradient base */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(at 20% 30%, rgba(59, 130, 246, 0.18) 0px, transparent 50%),
            radial-gradient(at 80% 20%, rgba(99, 102, 241, 0.16) 0px, transparent 50%),
            radial-gradient(at 40% 70%, rgba(6, 182, 212, 0.14) 0px, transparent 50%),
            radial-gradient(at 90% 80%, rgba(139, 92, 246, 0.12) 0px, transparent 50%),
            radial-gradient(at 10% 80%, rgba(59, 130, 246, 0.10) 0px, transparent 50%)
          `,
        }}
        animate={{
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated mesh gradient layer 1 */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 1000px 700px at 50% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)
          `,
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated mesh gradient layer 2 */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 1100px 800px at 100% 50%, rgba(99, 102, 241, 0.13) 0%, transparent 50%)
          `,
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Animated mesh gradient layer 3 */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 900px 1000px at 0% 100%, rgba(6, 182, 212, 0.11) 0%, transparent 50%)
          `,
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Animated grain/noise texture overlay */}
      {mounted && (
        <motion.div
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
          }}
          animate={{
            opacity: [0.1, 0.15, 0.1],
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}

      {/* Subtle vignette for depth */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(15, 23, 42, 0.4) 100%)",
        }}
      />
    </div>
  );
}
