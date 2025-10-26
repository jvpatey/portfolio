"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import {
  AnimatedStaggerContainer,
  AnimatedStaggerItem,
} from "./AnimatedStagger";

// Bento grid card component with glassmorphism
const BentoCard = ({
  children,
  className = "",
  delay = 0,
  span = "col-span-1",
  rowSpan = "row-span-1",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  span?: string;
  rowSpan?: string;
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
      className={`${span} ${rowSpan} group relative overflow-hidden rounded-3xl transition-all duration-500 ${className}`}
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

// About section component with bento grid layout
export default function About() {
  return (
    <section
      id="about"
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
              01.
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
              About Me
            </span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            A glimpse into my journey from healthcare to full-stack development
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[180px]">
          {/* Bio & Philosophy Card - Large */}
          <BentoCard
            span="col-span-1 md:col-span-2"
            rowSpan="row-span-2"
            delay={0.2}
            className="p-4 sm:p-6"
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
                  My Story & Philosophy
                </h3>
                <AnimatedStaggerContainer className="space-y-3 text-base md:text-lg text-slate-300 leading-relaxed">
                  <AnimatedStaggerItem>
                    <p>
                      I&apos;m a{" "}
                      <span
                        style={{
                          background:
                            "linear-gradient(135deg, #3478F6 0%, #FF2D55 50%, #FF9500 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        full-stack software developer
                      </span>{" "}
                      with a background in{" "}
                      <span
                        style={{
                          background:
                            "linear-gradient(135deg, #3478F6 0%, #FF2D55 50%, #FF9500 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        healthcare
                      </span>{" "}
                      and a passion for building practical, purpose-built tools.
                    </p>
                  </AnimatedStaggerItem>
                  <AnimatedStaggerItem>
                    <p>
                      After 10 years in patient care, I bring a detail-oriented
                      mindset and genuine interest in{" "}
                      <span
                        style={{
                          background:
                            "linear-gradient(135deg, #3478F6 0%, #FF2D55 50%, #FF9500 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        health tech
                      </span>{" "}
                      and SaaS products that simplify everyday tasks.
                    </p>
                  </AnimatedStaggerItem>
                  <AnimatedStaggerItem>
                    <p>
                      I love bringing ideas to life through responsive,
                      accessible design that makes complex tasks feel simple.
                      Every project should solve real problems with clean,
                      user-friendly interfaces.
                    </p>
                  </AnimatedStaggerItem>
                </AnimatedStaggerContainer>
              </div>
            </div>
          </BentoCard>

          {/* Profile Image Card */}
          <BentoCard
            span="col-span-1 md:col-span-2 lg:col-span-1"
            rowSpan="row-span-2"
            delay={0.3}
            className="p-3"
          >
            <div className="relative h-full group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                {/* Gradient background */}
                <div
                  className="absolute inset-0 rounded-2xl transform rotate-2 transition-all duration-500 group-hover:rotate-4"
                  style={{
                    background:
                      "linear-gradient(135deg, #3478F6 0%, #FF2D55 50%, #FF9500 100%)",
                    boxShadow:
                      "0 20px 40px rgba(96, 165, 250, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                  }}
                />

                {/* Image container */}
                <div
                  className="relative w-full h-full rounded-2xl overflow-hidden transition-all duration-500"
                  style={{
                    boxShadow:
                      "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <Image
                    src="/jeffrey-patey.jpg"
                    alt="Jeffrey Patey"
                    fill
                    className="object-cover transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Projects Card */}
          <BentoCard
            span="col-span-1"
            rowSpan="row-span-1"
            delay={0.4}
            className="p-4"
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-4">
                  Featured Projects
                </h3>
                <div className="space-y-2 text-base md:text-lg text-slate-300">
                  <div className="flex items-center justify-between">
                    <a
                      href="#homekeep"
                      className="text-[#FF2D55] hover:text-[#FF9500] transition-colors underline decoration-[#FF2D55]/30 hover:decoration-[#FF9500]/30"
                    >
                      HomeKeep
                    </a>
                    <span className="text-sm text-slate-500">App Store</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <a
                      href="#oralcheckr"
                      className="text-[#FF2D55] hover:text-[#FF9500] transition-colors underline decoration-[#FF2D55]/30 hover:decoration-[#FF9500]/30"
                    >
                      OralCheckr
                    </a>
                    <span className="text-sm text-slate-500">Web App</span>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Skills Card - Large */}
          <BentoCard
            span="col-span-1 md:col-span-2"
            rowSpan="row-span-1"
            delay={0.5}
            className="p-4"
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-4">
                  Tech Stack
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-2 text-xs md:text-sm">
                  <div className="flex items-center">
                    <span className="text-[#FF2D55] mr-2">▸</span>
                    React & React Native
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#FF2D55] mr-2">▸</span>
                    Node.js & Express
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#FF2D55] mr-2">▸</span>
                    Next.js & TypeScript
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#FF2D55] mr-2">▸</span>
                    PostgreSQL & Supabase
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#FF2D55] mr-2">▸</span>
                    RESTful API Design
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#FF2D55] mr-2">▸</span>
                    Vercel
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#FF2D55] mr-2">▸</span>
                    Auth (JWT, OAuth)
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
