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
                background: "linear-gradient(135deg, #60a5fa 0%, #34d399 100%)",
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
                background: "linear-gradient(135deg, #60a5fa 0%, #34d399 100%)",
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
              className="relative group inline-block px-8 sm:px-10 py-4 sm:py-5 text-white rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #60a5fa 0%, #34d399 100%)",
              }}
            >
              <span className="relative z-10">Say Hello</span>
            </a>
          </AnimatedStaggerItem>
        </AnimatedStaggerContainer>
      </div>
    </section>
  );
}
