"use client";

import { motion } from "framer-motion";
import { Code, HeartPulse } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import TypewriterHeader from "./TypewriterHeader";
import SectionTitleRule from "./SectionTitleRule";

// Experience card component with glassmorphism
const ExperienceCard = ({
  children,
  className = "",
  delay = 0,
  featured = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  featured?: boolean;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: delay * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: featured ? -4 : -2,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className={`group relative overflow-hidden rounded-3xl transition-all duration-500 ${className}`}
      style={{
        background: featured
          ? "rgba(255, 255, 255, 0.08)"
          : "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(20px) saturate(200%)",
        border: featured
          ? "1px solid rgba(255, 255, 255, 0.2)"
          : "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: featured
          ? "0 8px 32px rgba(0, 0, 0, 0.2), 0 0 40px rgba(34, 211, 238, 0.1), 0 0 60px rgba(129, 140, 248, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
          : "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
      }}
    >
      {/* Gradient overlay - more visible on featured card */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          featured
            ? "opacity-60 group-hover:opacity-100"
            : "opacity-0 group-hover:opacity-100"
        }`}
        style={{
          background: "var(--accent-gradient-medium)",
        }}
      />

      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </motion.div>
  );
};

// Experience section component with card layout
export default function Experience() {
  return (
    <section
      id="experience"
      className="py-8 sm:py-12 md:py-16 mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: "var(--hero-base)", scrollMarginTop: "60px" }}
    >
      <div className="max-w-6xl mx-auto overflow-hidden">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="text-left mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-0">
            <TypewriterHeader
              fullText="Where I've Worked"
              delay={100}
              speed={80}
              style={{
                background:
                  "var(--accent-gradient)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            />
          </h2>
          <SectionTitleRule className="mt-3" />
          <p className="mt-4 text-slate-400 text-base max-w-2xl">
            My professional experience in technology and healthcare
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 min-w-0 items-stretch">
          {/* ThinkRad Consultant Card - 3/5 width */}
          <ExperienceCard
            delay={0.2}
            featured
            className="h-full p-6 lg:p-8 lg:col-span-3 flex flex-col self-stretch"
          >
            <div
              className="flex-1 grid text-center gap-0 min-h-0"
              style={{
                gridTemplateRows:
                  "80px 4rem 2rem 1.5rem minmax(8rem, 1fr) auto",
              }}
            >
              <div
                className="w-16 h-16 rounded-full mx-auto flex items-center justify-center flex-shrink-0"
                style={{
                  background:
                    "var(--accent-gradient)",
                }}
              >
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white flex items-center justify-center">
                Consultant
              </h3>
              <p
                className="text-base md:text-lg flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(125, 211, 252, 0.95) 0%, rgba(165, 180, 252, 0.9) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ThinkRad
              </p>
              <p className="text-sm text-slate-400 flex items-center justify-center">
                Sept 2025 - Present
              </p>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed flex items-start justify-center pt-2">
                Collaborated on the design and development of multiple iOS apps
                using Swift, SwiftUI, CloudKit, and Xcode, contributing to core
                features, architecture, and UX.
              </p>
              <div className="flex flex-col items-center pt-4">
                <div className="space-y-2 text-sm md:text-base text-slate-400 w-fit text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400/90 flex-shrink-0">▸</span>
                    <span>Swift, SwiftUI, CloudKit & Xcode</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400/90 flex-shrink-0">▸</span>
                    <span>Core features, architecture & UX</span>
                  </div>
                </div>
              </div>
            </div>
          </ExperienceCard>

          {/* Dental Hygienist Card - 2/5 width */}
          <ExperienceCard
            delay={0.3}
            className="h-full p-6 lg:p-8 lg:col-span-2 flex flex-col self-stretch"
          >
            <div
              className="flex-1 grid text-center gap-0 min-h-0"
              style={{
                gridTemplateRows:
                  "80px 4rem 2rem 1.5rem minmax(8rem, 1fr) auto",
              }}
            >
              <div
                className="w-16 h-16 rounded-full mx-auto flex items-center justify-center flex-shrink-0"
                style={{
                  background:
                    "var(--accent-gradient-strong)",
                }}
              >
                <HeartPulse className="w-8 h-8 text-white/90" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-200 flex items-center justify-center">
                Registered Dental Hygienist
              </h3>
              <p
                className="text-base md:text-lg flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(103, 232, 249, 0.85) 0%, rgba(165, 180, 252, 0.75) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Sackville Dental Centre
              </p>
              <p className="text-sm text-slate-400 flex items-center justify-center">
                2021 - Present
              </p>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed flex items-start justify-center pt-2">
                Worked closely with patients to keep treatments efficient and
                comfortable—skills I now apply to building user-friendly,
                accessible software with attention to detail and a user-first
                approach.
              </p>
              <div className="flex flex-col items-center pt-4">
                <div className="space-y-2 text-sm md:text-base text-slate-400 w-fit text-left">
                  <div className="flex items-center gap-2">
                    <span
                      className="flex-shrink-0"
                      style={{ color: "rgba(34, 211, 238, 0.75)" }}
                    >
                      ▸
                    </span>
                    <span>Patient care and treatment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="flex-shrink-0"
                      style={{ color: "rgba(34, 211, 238, 0.75)" }}
                    >
                      ▸
                    </span>
                    <span>Healthcare experience</span>
                  </div>
                </div>
              </div>
            </div>
          </ExperienceCard>
        </div>
      </div>
    </section>
  );
}
