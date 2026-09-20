"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Code, HeartPulse } from "lucide-react";
import SectionTitleRule from "./SectionTitleRule";
import { asideShadow, panelClass } from "@/lib/surfaceStyles";

const heroEase = [0.21, 0.47, 0.32, 0.98] as const;

type ExperienceEntry = {
  id: string;
  title: string;
  company: string;
  period: string;
  summary: string;
  bullets: string[];
  icon: "code" | "health";
};

const experiences: ExperienceEntry[] = [
  {
    id: "thinkrad",
    title: "Consultant",
    company: "ThinkRad",
    period: "Sept 2025 - Present",
    summary:
      "Collaborated on the design and development of multiple iOS apps using Swift, SwiftUI, CloudKit, and Xcode, contributing to core features, architecture, and UX.",
    bullets: [
      "Swift, SwiftUI, CloudKit & Xcode",
      "Core features, architecture & UX",
    ],
    icon: "code",
  },
  {
    id: "hygienist",
    title: "Registered Dental Hygienist",
    company: "Sackville Dental Centre",
    period: "2021 - Present",
    summary:
      "Worked closely with patients to keep treatments efficient and comfortable—skills I now apply to building user-friendly, accessible software with attention to detail and a user-first approach.",
    bullets: ["Patient care and treatment", "Healthcare experience"],
    icon: "health",
  },
];

function ExperienceIcon({ kind }: { kind: ExperienceEntry["icon"] }) {
  const wrap = "inline-flex shrink-0 pt-px sm:pt-0.5";
  const size = "h-4 w-4 sm:h-[1.15rem] sm:w-[1.15rem] md:h-5 md:w-5";
  if (kind === "code") {
    return (
      <span className={wrap} aria-hidden>
        <Code
          className={`${size} text-[var(--accent-primary)]`}
          strokeWidth={1.65}
        />
      </span>
    );
  }
  return (
    <span className={wrap} aria-hidden>
      <HeartPulse
        className={`${size} text-slate-400`}
        strokeWidth={1.65}
      />
    </span>
  );
}

export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="mb-12 scroll-mt-[60px] overflow-hidden px-4 py-8 sm:mb-16 sm:px-6 sm:py-10 md:mb-20 md:py-14 lg:px-8 lg:py-12"
    >
      <div className="mx-auto max-w-6xl overflow-hidden">
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
          className="mb-6 space-y-2 text-left sm:mb-10 sm:space-y-3 lg:mb-8"
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Experience
          </h2>
          <SectionTitleRule />
          <p className="max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            Professional experience in technology and healthcare.
          </p>
        </motion.header>

        <ol className="relative m-0 list-none space-y-4 p-0">
          {experiences.map((exp, index) => (
            <motion.li
              key={exp.id}
              initial={
                reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: reduceMotion ? 0 : 0.55,
                delay: reduceMotion ? 0 : 0.06 * index,
                ease: heroEase,
              }}
              className={`${panelClass} p-5 sm:p-6 lg:p-7`}
              style={asideShadow}
            >
              <div className="flex flex-col gap-4 sm:gap-5">
                <div className="flex items-start gap-3">
                  <ExperienceIcon kind={exp.icon} />
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
                      {exp.title}
                    </h3>
                    <p className="mt-1 text-base font-medium text-slate-200">
                      {exp.company}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">{exp.period}</p>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-slate-400 md:text-lg">
                  {exp.summary}
                </p>
                <ul
                  role="list"
                  className="list-outside list-disc space-y-1.5 pl-5 text-sm text-slate-400 marker:text-slate-500 sm:text-base"
                >
                  {exp.bullets.map((b) => (
                    <li key={b} className="leading-snug">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
