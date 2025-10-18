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
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <AnimatedSection delay={0.1}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                <span className="text-blue-400">01.</span> About Me
              </h2>
            </AnimatedSection>
            <AnimatedStaggerContainer className="space-y-3 sm:space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <AnimatedStaggerItem>
                <p>
                  I&apos;m a full-stack software developer with a background in
                  healthcare and a passion for building practical, purpose-built
                  tools. After 10 years in patient care, I bring a
                  detail-oriented mindset and genuine interest in health tech
                  and SaaS products that simplify everyday tasks.
                </p>
              </AnimatedStaggerItem>
              <AnimatedStaggerItem>
                <p>
                  I love bringing ideas to life through responsive, accessible
                  design that makes complex tasks feel simple. My projects range
                  from mobile apps like HomeKeep (available on the App Store) to
                  web applications like OralCheckr, each solving real problems
                  with clean, user-friendly interfaces.
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
            <div className="relative">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg transform rotate-3"></div>
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src="/jeffrey-patey.jpg"
                    alt="Jeffrey Patey"
                    fill
                    className="object-cover"
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
