"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import SectionTitleRule from "./SectionTitleRule";

const heroEase = [0.21, 0.47, 0.32, 0.98] as const;

const asideShadow = {
  boxShadow:
    "0 8px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
} as const;

// About: editorial layout + panels matching HeroAside surfaces
function AboutPanel({
  children,
  className = "",
  delay = 0,
  span = "",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  span?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : delay,
        ease: heroEase,
      }}
      className={`rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-colors duration-300 hover:border-white/15 ${span} ${className}`}
      style={asideShadow}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="pt-6 pb-8 sm:py-12 md:py-16 mb-12 sm:mb-16 md:mb-20 lg:mb-12 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-[60px] lg:min-h-[calc(100dvh-4rem)] lg:flex lg:flex-col lg:justify-center lg:py-8"
    >
      <div className="max-w-6xl mx-auto w-full lg:flex-1 lg:flex lg:flex-col lg:justify-center lg:min-h-0">
        <motion.header
          initial={
            reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: reduceMotion ? 0 : 0.55,
            ease: heroEase,
          }}
          className="text-left mb-6 sm:mb-8 lg:mb-6 space-y-2 sm:space-y-3 shrink-0"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight text-balance">
            About me
          </h2>
          <SectionTitleRule />
          <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed">
            A glimpse into my journey from healthcare to full-stack development
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:gap-x-8 lg:gap-y-6 lg:items-stretch lg:min-h-0 lg:flex-1">
          <AboutPanel
            span="lg:col-span-7 lg:row-start-1 lg:col-start-1"
            delay={0.06}
            className="p-5 sm:p-6 lg:p-6 min-h-0"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
              My story
            </p>
            <div className="space-y-2.5 sm:space-y-3 text-base md:text-lg text-slate-400 leading-relaxed">
              <p>
                I&apos;m a{" "}
                <span className="font-medium text-slate-200">
                  full-stack software developer
                </span>{" "}
                with a background in{" "}
                <span className="font-medium text-slate-200">healthcare</span>{" "}
                and a passion for building practical, purpose-built tools.
              </p>
              <p>
                After 10 years in patient care, I bring a detail-oriented mindset
                and genuine interest in{" "}
                <span className="font-medium text-slate-200">health tech</span>{" "}
                and SaaS products that simplify everyday tasks.
              </p>
              <p>
                I love bringing ideas to life through responsive, accessible
                design that makes complex tasks feel simple. Every project should
                solve real problems with clean, user-friendly interfaces.
              </p>
            </div>
          </AboutPanel>

          <AboutPanel
            span="lg:col-span-5 lg:row-span-2 lg:row-start-1 lg:col-start-8"
            delay={0.12}
            className="p-4 sm:p-5 lg:p-5 min-h-0 flex flex-col"
          >
            <div className="relative w-full aspect-[4/5] max-h-[min(420px,70vh)] mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.25)] lg:flex-1 lg:aspect-auto lg:max-h-none lg:min-h-[220px] lg:mx-0">
              <Image
                src="/jeffrey-patey.jpg"
                alt="Jeffrey Patey"
                fill
                className="object-cover"
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </AboutPanel>

          <AboutPanel
            span="lg:col-span-7 lg:row-start-2 lg:col-start-1"
            delay={0.18}
            className="p-5 sm:p-6 lg:p-6 min-h-0"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3 lg:mb-3">
              Tech stack
            </p>
            <ul
              role="list"
              className="list-disc list-outside pl-5 text-sm text-slate-400 marker:text-slate-500 space-y-1.5 sm:columns-2 sm:gap-x-8 lg:columns-2 xl:columns-3 [column-fill:balance]"
            >
              {[
                "React & React Native",
                "SwiftUI & Xcode",
                "Node.js & Express",
                "Next.js & TypeScript",
                "PostgreSQL & Supabase",
                "RESTful API Design",
                "Vercel",
                "Auth (JWT, OAuth)",
              ].map((label) => (
                <li key={label} className="break-inside-avoid leading-snug">
                  {label}
                </li>
              ))}
            </ul>
          </AboutPanel>
        </div>
      </div>
    </section>
  );
}
