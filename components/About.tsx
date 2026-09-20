"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Code, HeartPulse } from "lucide-react";
import SectionTitleRule from "./SectionTitleRule";

const heroEase = [0.21, 0.47, 0.32, 0.98] as const;

const experiences = [
  {
    id: "thinkrad",
    title: "Consultant",
    company: "ThinkRad",
    period: "Sept 2025 – Present",
    summary:
      "iOS apps with Swift, SwiftUI, CloudKit & Xcode—core features, architecture, and UX.",
    icon: "code" as const,
  },
  {
    id: "hygienist",
    title: "Registered Dental Hygienist",
    company: "Sackville Dental Centre",
    period: "2021 – Present",
    summary:
      "Patient-first care that now shapes how I build accessible, detail-oriented software.",
    icon: "health" as const,
  },
];

const techStack = [
  "React & React Native",
  "SwiftUI & Xcode",
  "Node.js & Express",
  "Next.js & TypeScript",
  "PostgreSQL & Supabase",
  "RESTful API Design",
  "Vercel",
  "Auth (JWT, OAuth)",
];

function RoleIcon({ kind }: { kind: "code" | "health" }) {
  const size = "h-4 w-4";
  if (kind === "code") {
    return (
      <Code
        className={`${size} text-[var(--accent-primary)]`}
        strokeWidth={1.65}
        aria-hidden
      />
    );
  }
  return (
    <HeartPulse className={`${size} text-slate-400`} strokeWidth={1.65} aria-hidden />
  );
}

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="mb-12 scroll-mt-[60px] overflow-hidden px-4 py-8 sm:mb-16 sm:px-6 sm:py-12 md:mb-20 md:py-14 lg:px-8"
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
          className="mb-8 max-w-3xl space-y-3 text-left sm:mb-10"
        >
          <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            About
          </h2>
          <SectionTitleRule />
          <p className="max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            After 10 years in patient care, I build practical, purpose-built
            tools with a user-first mindset—especially in{" "}
            <span className="font-medium text-slate-200">health tech</span> and
            SaaS. I care about responsive, accessible interfaces that make
            complex tasks feel simple.
          </p>
          <ul role="list" className="flex flex-wrap gap-2 pt-2">
            {techStack.map((label) => (
              <li
                key={label}
                className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300"
              >
                {label}
              </li>
            ))}
          </ul>
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
        >
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Experience
          </h3>
          <ol className="m-0 list-none space-y-0 divide-y divide-white/10 border-y border-white/10 p-0">
            {experiences.map((exp) => (
              <li
                key={exp.id}
                className="flex gap-3 py-5 first:pt-5 last:pb-5 sm:gap-4"
              >
                <span className="mt-1 inline-flex shrink-0">
                  <RoleIcon kind={exp.icon} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                    <h4 className="text-base font-semibold text-white sm:text-lg">
                      {exp.title}
                    </h4>
                    <span className="text-sm text-slate-500">·</span>
                    <p className="text-sm font-medium text-slate-300 sm:text-base">
                      {exp.company}
                    </p>
                  </div>
                  <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
                    {exp.period}
                  </p>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
                    {exp.summary}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
