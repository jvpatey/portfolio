"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

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
      className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#111111" }}
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
            <span
              style={{
                background:
                  "linear-gradient(135deg, #3478F6 0%, #FF2D55 50%, #FF9500 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              02.
            </span>{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #3478F6 0%, #FF2D55 50%, #FF9500 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Where I&apos;ve Worked
            </span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            My professional journey from healthcare to technology
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Current Role Card */}
          <ExperienceCard delay={0.2} className="p-6">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                    Registered Dental Hygienist
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                    Current
                  </span>
                </div>
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
                <div className="space-y-2 text-base md:text-lg text-slate-300">
                  <div className="flex items-start">
                    <span className="text-[#FF2D55] mr-2 mt-1">▸</span>
                    <span>
                      Worked closely with patients to keep treatments efficient
                      and comfortable—skills I now apply to building
                      user-friendly, accessible software with attention to
                      detail and a user-first approach.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ExperienceCard>

          {/* Skills Transfer Card */}
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
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
                  Career Transition
                </h3>
                <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-4">
                  Leveraging healthcare experience to build technology solutions
                  that prioritize user experience and accessibility.
                </p>
                <div className="space-y-2 text-sm md:text-base text-slate-400">
                  <div className="flex items-center justify-center">
                    <span className="text-[#FF2D55] mr-2">▸</span>
                    Patient care → User experience
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-[#FF2D55] mr-2">▸</span>
                    Attention to detail → Code quality
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-[#FF2D55] mr-2">▸</span>
                    Problem solving → Technical solutions
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
