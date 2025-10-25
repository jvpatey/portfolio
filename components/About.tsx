"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import {
  AnimatedStaggerContainer,
  AnimatedStaggerItem,
} from "./AnimatedStagger";

// About section component - includes bio, portrait, and skills
export default function About() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#111111" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <AnimatedSection delay={0.1}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
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
            </AnimatedSection>
            <AnimatedStaggerContainer className="space-y-3 sm:space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
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
                  I love bringing ideas to life through responsive, accessible
                  design that makes complex tasks feel simple. My projects range
                  from mobile apps like{" "}
                  <a
                    href="#homekeep"
                    className="text-blue-400 hover:text-blue-300 transition-colors underline decoration-blue-400/30 hover:decoration-blue-300"
                  >
                    HomeKeep
                  </a>{" "}
                  (available on the App Store) to web applications like{" "}
                  <a
                    href="#oralcheckr"
                    className="text-blue-400 hover:text-blue-300 transition-colors underline decoration-blue-400/30 hover:decoration-blue-300"
                  >
                    OralCheckr
                  </a>
                  , each solving real problems with clean, user-friendly
                  interfaces.
                </p>
              </AnimatedStaggerItem>
              <AnimatedStaggerItem>
                <p>Here are the technologies I&apos;ve been working with:</p>
              </AnimatedStaggerItem>
              <AnimatedStaggerItem>
                <div className="grid grid-cols-2 gap-2 text-sm mt-4">
                  <div className="flex items-center">
                    <span className="text-blue-400 mr-2">▸</span>
                    React & React Native
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-400 mr-2">▸</span>
                    Next.js & TypeScript
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-400 mr-2">▸</span>
                    Node.js & Express
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-400 mr-2">▸</span>
                    PostgreSQL & Supabase
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-400 mr-2">▸</span>
                    RESTful API Design
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-400 mr-2">▸</span>
                    Auth (JWT, OAuth)
                  </div>
                </div>
              </AnimatedStaggerItem>
            </AnimatedStaggerContainer>
          </div>
          <AnimatedSection delay={0.3} direction="left">
            <div className="relative group">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto">
                {/* Modern gradient background with glassmorphism */}
                <div
                  className="absolute inset-0 rounded-2xl transform rotate-3 transition-all duration-500 group-hover:rotate-6 group-hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(135deg, #3478F6 0%, #FF2D55 50%, #FF9500 100%)",
                    boxShadow:
                      "0 20px 40px rgba(96, 165, 250, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                  }}
                ></div>

                {/* Shimmer effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500 transform rotate-3"></div>

                {/* Image container with modern styling */}
                <div
                  className="relative w-full h-full rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-105"
                  style={{
                    boxShadow:
                      "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <Image
                    src="/jeffrey-patey.jpg"
                    alt="Jeffrey Patey"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
