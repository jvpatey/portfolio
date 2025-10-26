"use client";

import { motion } from "framer-motion";
import ImageCarousel from "./ImageCarousel";
import MediaCarousel from "./MediaCarousel";
import TypewriterHeader from "./TypewriterHeader";

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

// Projects section component with bento grid layout
export default function Projects() {
  return (
    <section
      id="projects"
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
              fullText="04. What I've Built"
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
            Featured projects
          </p>
        </motion.div>

        {/* Projects Grid - Each project has separate cards */}
        <div className="space-y-16 sm:space-y-20">
          {/* HomeKeep Project */}
          <div id="homekeep" className="space-y-6 scroll-mt-20">
            {/* Project Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #3478F6 0%, #FF2D55 50%, #FF9500 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  HomeKeep
                </span>
              </h3>
            </motion.div>

            {/* Project Cards Grid - Side by Side for Mobile App */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Image Carousel Card - Left Side */}
              <BentoCard span="col-span-1" delay={0.2} className="p-4">
                <div className="min-h-[500px]">
                  <ImageCarousel
                    images={[
                      "/homekeep1.PNG",
                      "/homekeep2.PNG",
                      "/homekeep3.PNG",
                      "/homekeep4.PNG",
                      "/homekeep5.PNG",
                      "/homekeep6.PNG",
                    ]}
                    alt="HomeKeep screenshots"
                  />
                </div>
              </BentoCard>

              {/* Right Side - Two Separate Cards */}
              <div className="flex flex-col space-y-4 h-full">
                {/* About & Tech Stack Card */}
                <BentoCard
                  span="col-span-1"
                  delay={0.3}
                  className="p-4 sm:p-6 flex-1"
                >
                  <div className="flex flex-col space-y-4 h-full">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
                      About
                    </h4>
                    <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                      A mobile app that makes home maintenance manageable.
                      Create recurring tasks, get reminders when things are due,
                      and track your progress—all with a clean, intuitive
                      interface.
                    </p>
                    <div className="flex-1 mt-4">
                      <h5 className="text-base md:text-lg font-semibold text-white mb-2">
                        Tech Stack
                      </h5>
                      <div className="flex flex-wrap gap-1">
                        {["React Native", "TypeScript", "Expo", "Supabase"].map(
                          (tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 rounded-full text-xs"
                              style={{
                                background: "rgba(52, 120, 246, 0.1)",
                                border: "1px solid rgba(52, 120, 246, 0.2)",
                                color: "#60a5fa",
                              }}
                            >
                              {tech}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </BentoCard>

                {/* Links Card */}
                <BentoCard
                  span="col-span-1"
                  delay={0.4}
                  className="p-4 sm:p-6 flex-1"
                >
                  <div className="flex flex-col space-y-4 h-full">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
                      Links
                    </h4>
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="space-y-3">
                        <a
                          href="https://github.com/jvpatey/homekeep-mobile"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative group block w-full px-6 py-3 rounded-full font-semibold text-sm transition-all duration-500 overflow-hidden"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(52, 120, 246, 0.25) 0%, rgba(255, 45, 85, 0.25) 50%, rgba(255, 149, 0, 0.25) 100%)",
                            color: "white",
                            boxShadow:
                              "0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 0.5px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                            backdropFilter: "blur(20px) saturate(200%)",
                            border: "0.5px solid rgba(255, 255, 255, 0.2)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow =
                              "0 12px 40px rgba(0, 0, 0, 0.25), 0 0 0 0.5px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow =
                              "0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 0.5px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)";
                          }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500 rounded-full"></div>

                          <span className="relative z-10 flex items-center justify-center gap-2">
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                          </span>
                        </a>
                        <a
                          href="https://apps.apple.com/ca/app/homekeep/id6751912377"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative group block w-full px-6 py-3 rounded-full font-semibold text-sm transition-all duration-500 overflow-hidden"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(52, 120, 246, 0.25) 0%, rgba(255, 45, 85, 0.25) 50%, rgba(255, 149, 0, 0.25) 100%)",
                            color: "white",
                            boxShadow:
                              "0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 0.5px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                            backdropFilter: "blur(20px) saturate(200%)",
                            border: "0.5px solid rgba(255, 255, 255, 0.2)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow =
                              "0 12px 40px rgba(0, 0, 0, 0.25), 0 0 0 0.5px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow =
                              "0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 0.5px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)";
                          }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500 rounded-full"></div>

                          <span className="relative z-10 flex items-center justify-center gap-2">
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                            </svg>
                            App Store
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </BentoCard>
              </div>
            </div>
          </div>

          {/* OralCheckr Project */}
          <div id="oralcheckr" className="space-y-6 scroll-mt-20">
            {/* Project Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #3478F6 0%, #FF2D55 50%, #FF9500 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  OralCheckr
                </span>
              </h3>
            </motion.div>

            {/* Project Cards Grid */}
            <div className="space-y-6">
              {/* Combined Media Carousel Card - Images and Videos */}
              <BentoCard span="col-span-1" delay={0.2} className="p-4">
                <MediaCarousel
                  images={[
                    "/oralcheckr1.png",
                    "/oralcheckr2.png",
                    "/oralcheckr3.png",
                    "/oralcheckr4.png",
                    "/oralcheckr5.png",
                    "/oralcheckr6.png",
                    "/oralcheckr7.png",
                    "/oralcheckr8.png",
                    "/oralcheckr9.png",
                  ]}
                  videos={[
                    "/oralcheckr-recording-1.mp4",
                    "/oralcheckr-recording-2.mp4",
                    "/oralcheckr-recording-3.mp4",
                    "/oralcheckr-recording-4.mp4",
                  ]}
                  alt="OralCheckr media"
                />
              </BentoCard>

              {/* Description and Links Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Description & Tech Stack Card */}
                <BentoCard span="col-span-1" delay={0.3} className="p-4 sm:p-6">
                  <div className="flex flex-col space-y-4">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
                      About
                    </h4>
                    <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                      A comprehensive web app for oral health assessment and
                      habit tracking with personalized recommendations and
                      progress analytics.
                    </p>
                    <div className="mt-4">
                      <h5 className="text-base md:text-lg font-semibold text-white mb-2">
                        Tech Stack
                      </h5>
                      <div className="flex flex-wrap gap-1">
                        {[
                          "React",
                          "TypeScript",
                          "Vite",
                          "Node.js",
                          "Express",
                          "MySQL",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 rounded-full text-xs"
                            style={{
                              background: "rgba(52, 120, 246, 0.1)",
                              border: "1px solid rgba(52, 120, 246, 0.2)",
                              color: "#60a5fa",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </BentoCard>

                {/* Links Card */}
                <BentoCard
                  span="col-span-1"
                  delay={0.4}
                  className="p-4 sm:p-6 flex-1"
                >
                  <div className="flex flex-col space-y-4 h-full">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
                      Links
                    </h4>
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="space-y-3">
                        <a
                          href="https://github.com/jvpatey/OralCheckr"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative group block w-full px-6 py-3 rounded-full font-semibold text-sm transition-all duration-500 overflow-hidden"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(52, 120, 246, 0.25) 0%, rgba(255, 45, 85, 0.25) 50%, rgba(255, 149, 0, 0.25) 100%)",
                            color: "white",
                            boxShadow:
                              "0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 0.5px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                            backdropFilter: "blur(20px) saturate(200%)",
                            border: "0.5px solid rgba(255, 255, 255, 0.2)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow =
                              "0 12px 40px rgba(0, 0, 0, 0.25), 0 0 0 0.5px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)";
                            e.currentTarget.style.transform = "scale(1.02)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow =
                              "0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 0.5px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)";
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500 rounded-full"></div>

                          <span className="relative z-10 flex items-center justify-center gap-2">
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                          </span>
                        </a>
                        <a
                          href="https://jvpatey.github.io/OralCheckr/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative group block w-full px-6 py-3 rounded-full font-semibold text-sm transition-all duration-500 overflow-hidden"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(52, 120, 246, 0.25) 0%, rgba(255, 45, 85, 0.25) 50%, rgba(255, 149, 0, 0.25) 100%)",
                            color: "white",
                            boxShadow:
                              "0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 0.5px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                            backdropFilter: "blur(20px) saturate(200%)",
                            border: "0.5px solid rgba(255, 255, 255, 0.2)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow =
                              "0 12px 40px rgba(0, 0, 0, 0.25), 0 0 0 0.5px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)";
                            e.currentTarget.style.transform = "scale(1.02)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow =
                              "0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 0.5px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)";
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500 rounded-full"></div>

                          <span className="relative z-10 flex items-center justify-center gap-2">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                            Live Demo
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </BentoCard>
              </div>
            </div>
          </div>

          {/* Burden's General Store Project */}
          <div className="space-y-6">
            {/* Project Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #3478F6 0%, #FF2D55 50%, #FF9500 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Freelance Web Development
                </span>
              </h3>
            </motion.div>

            {/* Project Cards Grid */}
            <div className="space-y-6">
              {/* Image Carousel Card - Full Width */}
              <BentoCard span="col-span-1" delay={0.2} className="p-4">
                <ImageCarousel
                  images={[
                    "/burdens1.png",
                    "/burdens2.png",
                    "/burdens3.png",
                    "/burdens4.png",
                    "/burdens5.png",
                    "/burdens6.png",
                  ]}
                  alt="Burden's General Store screenshots"
                />
              </BentoCard>

              {/* Description and Links Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Description & Tech Stack Card */}
                <BentoCard span="col-span-1" delay={0.3} className="p-4 sm:p-6">
                  <div className="flex flex-col space-y-4">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
                      About
                    </h4>
                    <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                      A freelance web development project featuring modern
                      design, responsive layouts, dark/light mode, and seamless
                      third-party integrations.
                    </p>
                    <div className="mt-4">
                      <h5 className="text-base md:text-lg font-semibold text-white mb-2">
                        Tech Stack
                      </h5>
                      <div className="flex flex-wrap gap-1">
                        {[
                          "Next.js",
                          "TypeScript",
                          "Tailwind CSS",
                          "shadcn/ui",
                          "Vercel",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 rounded-full text-xs"
                            style={{
                              background: "rgba(52, 120, 246, 0.1)",
                              border: "1px solid rgba(52, 120, 246, 0.2)",
                              color: "#60a5fa",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </BentoCard>

                {/* Links Card */}
                <BentoCard
                  span="col-span-1"
                  delay={0.4}
                  className="p-4 sm:p-6 flex-1"
                >
                  <div className="flex flex-col space-y-4 h-full">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
                      Links
                    </h4>
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="space-y-3">
                        <a
                          href="https://github.com/jvpatey/burdens-general-store"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative group block w-full px-6 py-3 rounded-full font-semibold text-sm transition-all duration-500 overflow-hidden"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(52, 120, 246, 0.25) 0%, rgba(255, 45, 85, 0.25) 50%, rgba(255, 149, 0, 0.25) 100%)",
                            color: "white",
                            boxShadow:
                              "0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 0.5px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                            backdropFilter: "blur(20px) saturate(200%)",
                            border: "0.5px solid rgba(255, 255, 255, 0.2)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow =
                              "0 12px 40px rgba(0, 0, 0, 0.25), 0 0 0 0.5px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)";
                            e.currentTarget.style.transform = "scale(1.02)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow =
                              "0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 0.5px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)";
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500 rounded-full"></div>

                          <span className="relative z-10 flex items-center justify-center gap-2">
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                          </span>
                        </a>
                        <a
                          href="https://burdensgeneralstore.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative group block w-full px-6 py-3 rounded-full font-semibold text-sm transition-all duration-500 overflow-hidden"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(52, 120, 246, 0.25) 0%, rgba(255, 45, 85, 0.25) 50%, rgba(255, 149, 0, 0.25) 100%)",
                            color: "white",
                            boxShadow:
                              "0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 0.5px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                            backdropFilter: "blur(20px) saturate(200%)",
                            border: "0.5px solid rgba(255, 255, 255, 0.2)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow =
                              "0 12px 40px rgba(0, 0, 0, 0.25), 0 0 0 0.5px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)";
                            e.currentTarget.style.transform = "scale(1.02)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow =
                              "0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 0.5px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)";
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500 rounded-full"></div>

                          <span className="relative z-10 flex items-center justify-center gap-2">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                            Live Demo
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </BentoCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
