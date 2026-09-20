"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionTitleRule from "./SectionTitleRule";
import { asideShadow, panelClass } from "@/lib/surfaceStyles";

const heroEase = [0.21, 0.47, 0.32, 0.98] as const;

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="mb-12 scroll-mt-[60px] overflow-hidden px-4 pb-8 pt-6 sm:mb-16 sm:px-6 sm:py-12 md:mb-20 md:py-16 lg:mb-16 lg:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
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
          className="mb-6 space-y-2 text-left sm:mb-8 sm:space-y-3"
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            About me
          </h2>
          <SectionTitleRule />
          <p className="max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            Healthcare roots, full-stack craft.
          </p>
        </motion.header>

        <motion.div
          initial={
            reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: reduceMotion ? 0 : 0.55,
            delay: reduceMotion ? 0 : 0.06,
            ease: heroEase,
          }}
          className={`p-5 sm:p-6 lg:p-8 ${panelClass}`}
          style={asideShadow}
        >
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-[2px] bg-[var(--accent-primary)]"
                  aria-hidden
                />
                My story
              </p>
              <div className="space-y-3 text-base leading-relaxed text-slate-400 md:text-lg">
                <p>
                  After 10 years in patient care, I build practical,
                  purpose-built tools with a detail-oriented, user-first
                  mindset—especially in{" "}
                  <span className="font-medium text-slate-200">health tech</span>{" "}
                  and SaaS.
                </p>
                <p>
                  I care about responsive, accessible interfaces that make
                  complex tasks feel simple.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
                Tech stack
              </p>
              <ul
                role="list"
                className="list-outside list-disc space-y-1.5 pl-5 text-sm text-slate-400 marker:text-slate-500 sm:columns-2 sm:gap-x-6 lg:columns-1 xl:columns-2 [column-fill:balance]"
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
