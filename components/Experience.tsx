"use client";

import { motion } from "framer-motion";
import { HeartPulse } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import TypewriterHeader from "./TypewriterHeader";

// Experience card component with glassmorphism
const ExperienceCard = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
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
        y: -2,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className={`group relative overflow-hidden rounded-3xl transition-all duration-500 ${className}`}
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(20px) saturate(200%)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow:
          "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
      }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(135deg, rgba(52, 120, 246, 0.1) 0%, rgba(255, 45, 85, 0.1) 50%, rgba(255, 149, 0, 0.1) 100%)",
        }}
      />

      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
};

// Experience section component with card layout
export default function Experience() {
  return (
    <section
      id="experience"
      className="py-8 sm:py-12 md:py-16 mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#000000", scrollMarginTop: "60px" }}
    >
      <div className="max-w-6xl mx-auto">
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            <TypewriterHeader
              fullText="03. Where I've Worked"
              delay={100}
              speed={80}
              style={{
                background:
                  "linear-gradient(135deg, #3478F6 0%, #FF2D55 50%, #FF9500 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            />
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            My professional experience in technology and healthcare
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Aura App Card */}
          <ExperienceCard delay={0.2} className="p-6">
            <div className="h-full flex flex-col justify-center">
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #3478F6 0%, #FF2D55 50%, #FF9500 100%)",
                  }}
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
                  Mobile App Developer
                </h3>
                <p
                  className="text-base md:text-lg mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, #60a5fa 0%, #34d399 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  ThinkRad
                </p>
                <p className="text-sm text-slate-400 mb-4">In Development</p>
                <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-4">
                  Developing Aura, a writing app in collaboration with ThinkRad.
                  Will be available on the App Store in the near future.
                </p>
                <div className="space-y-2 text-sm md:text-base text-slate-400">
                  <div className="flex items-center justify-center">
                    <span className="text-[#FF2D55] mr-2">▸</span>
                    Built with SwiftUI and Xcode
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-[#FF2D55] mr-2">▸</span>
                    iOS mobile development
                  </div>
                </div>
              </div>
            </div>
          </ExperienceCard>

          {/* Dental Hygienist Card */}
          <ExperienceCard delay={0.3} className="p-6">
            <div className="h-full flex flex-col justify-center">
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #3478F6 0%, #FF2D55 50%, #FF9500 100%)",
                  }}
                >
                  <HeartPulse className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
                  Registered Dental Hygienist
                </h3>
                <p
                  className="text-base md:text-lg mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, #60a5fa 0%, #34d399 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Sackville Dental Centre
                </p>
                <p className="text-sm text-slate-400 mb-4">2021 - Present</p>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-4">
                  Worked closely with patients to keep treatments efficient and
                  comfortable—skills I now apply to building user-friendly,
                  accessible software with attention to detail and a user-first
                  approach.
                </p>
                <div className="space-y-2 text-sm md:text-base text-slate-400">
                  <div className="flex items-center justify-center">
                    <span className="text-[#FF2D55] mr-2">▸</span>
                    Patient care and treatment
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-[#FF2D55] mr-2">▸</span>
                    Healthcare experience
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
