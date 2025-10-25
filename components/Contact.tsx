"use client";

import AnimatedSection from "./AnimatedSection";
import {
  AnimatedStaggerContainer,
  AnimatedStaggerItem,
} from "./AnimatedStagger";

// Contact section component - includes contact information and a call to action
export default function Contact() {
  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <AnimatedStaggerContainer staggerDelay={0.15}>
          <AnimatedStaggerItem>
            <p
              className="text-xs sm:text-sm mb-2"
              style={{
                background:
                  "linear-gradient(135deg, #3478F6 0%, #FF2D55 50%, #FF9500 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              04. Contact
            </p>
          </AnimatedStaggerItem>
          <AnimatedStaggerItem>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
              style={{
                background:
                  "linear-gradient(135deg, #3478F6 0%, #FF2D55 50%, #FF9500 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Get In Touch
            </h2>
          </AnimatedStaggerItem>
          <AnimatedStaggerItem>
            <p className="text-base sm:text-lg text-slate-400 mb-6 sm:mb-8 leading-relaxed">
              I&apos;m always happy to connect! Whether you have a question,
              want to collaborate, or just want to say hi, feel free to reach
              out.
            </p>
          </AnimatedStaggerItem>
          <AnimatedStaggerItem>
            <a
              href="mailto:jeffreyvpatey@gmail.com"
              className="relative group inline-block px-8 sm:px-10 py-4 sm:py-5 text-white rounded-2xl font-semibold text-base sm:text-lg transition-all duration-500 overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #3478F6 0%, #FF2D55 50%, #FF9500 100%)",
                boxShadow:
                  "0 8px 32px rgba(96, 165, 250, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 12px 40px rgba(96, 165, 250, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(96, 165, 250, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>

              <span className="relative z-10">Say Hello</span>
            </a>
          </AnimatedStaggerItem>
        </AnimatedStaggerContainer>
      </div>
    </section>
  );
}
