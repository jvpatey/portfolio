"use client";

import AnimatedSection from "./AnimatedSection";
import {
  AnimatedStaggerContainer,
  AnimatedStaggerItem,
} from "./AnimatedStagger";

// Contact section component - includes contact information and a call to action
export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <AnimatedStaggerContainer staggerDelay={0.15}>
          <AnimatedStaggerItem>
            <p className="text-blue-400 text-sm mb-2">04. What&apos;s Next?</p>
          </AnimatedStaggerItem>
          <AnimatedStaggerItem>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h2>
          </AnimatedStaggerItem>
          <AnimatedStaggerItem>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              I&apos;m always happy to connect! Whether you have a question,
              want to collaborate, or just want to say hi, feel free to reach
              out.
            </p>
          </AnimatedStaggerItem>
          <AnimatedStaggerItem>
            <a
              href="mailto:jeffreyvpatey@gmail.com"
              className="relative group inline-block px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white rounded-full font-medium text-lg shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Say Hello</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </AnimatedStaggerItem>
        </AnimatedStaggerContainer>
      </div>
    </section>
  );
}
