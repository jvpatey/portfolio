"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
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

// Contact section component with bento grid layout
export default function Contact() {
  return (
    <section
      id="contact"
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
              fullText="05. Get In Touch"
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
            Feel free to reach out — I'd love to hear from you.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Main Contact Card - Left side */}
          <BentoCard span="col-span-1" delay={0.1} className="p-6 sm:p-8">
            <div className="flex flex-col space-y-6 h-full">
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-4">
                  Let's Connect
                </h3>
                <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                  I'm always happy to connect! Whether you have a question, want
                  to collaborate, or just want to say hi.
                </p>
              </div>

              <div className="flex-1">
                <ContactForm />
              </div>
            </div>
          </BentoCard>

          {/* Right side - Two stacked cards */}
          <div className="flex flex-col space-y-6 h-full">
            {/* Social Links Card */}
            <BentoCard
              span="col-span-1"
              delay={0.2}
              className="p-6 sm:p-8 flex-1"
            >
              <div className="flex flex-col space-y-6 h-full">
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-4">
                    Where to Find Me
                  </h3>
                </div>

                <div className="flex-1 flex flex-col justify-center space-y-4">
                  <a
                    href="https://github.com/jvpatey"
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
                    href="https://www.linkedin.com/in/jeffreypatey/"
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
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </span>
                  </a>
                </div>
              </div>
            </BentoCard>

            {/* Resume Card */}
            <BentoCard
              span="col-span-1"
              delay={0.3}
              className="p-6 sm:p-8 flex-1"
            >
              <div className="flex flex-col space-y-6 h-full">
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-4">
                    Download Resume
                  </h3>
                  <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                    Get a detailed overview of my experience and skills
                  </p>
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <a
                    href="/jeffpatey_resume_2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group block w-full px-6 py-3 rounded-full font-semibold text-sm transition-all duration-500 overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(52, 120, 246, 0.25) 0%, rgba(255, 45, 85, 0.25) 50%, rgba(255, 149, 0, 0.25) 100%)",
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
                    aria-label="Download Resume"
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
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Download Resume
                    </span>
                  </a>
                </div>
              </div>
            </BentoCard>
          </div>
        </div>

        {/* Footer content integrated into contact section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 pt-8 border-t border-white/10"
        >
          <p className="text-sm text-slate-500">
            Built with Next.js & Tailwind CSS • Designed & Built by Jeffrey
            Patey
          </p>
        </motion.div>
      </div>
    </section>
  );
}
