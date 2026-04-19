"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Code, HeartPulse } from "lucide-react";
import SectionTitleRule from "./SectionTitleRule";

const heroEase = [0.21, 0.47, 0.32, 0.98] as const;

const asideShadow = {
  boxShadow:
    "0 8px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
} as const;

const panelClass =
  "rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-colors duration-300 hover:border-white/15";

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

const DETAIL_PANEL_ID = "experience-detail-panel";

function ExperienceIcon({ kind }: { kind: ExperienceEntry["icon"] }) {
  const wrap = "inline-flex shrink-0 pt-0.5";
  const size = "h-[1.35rem] w-[1.35rem] sm:h-6 sm:w-6";
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
        className={`${size} text-[var(--accent-secondary)]`}
        strokeWidth={1.65}
      />
    </span>
  );
}

export default function Experience() {
  const reduceMotion = useReducedMotion();
  const [selectedId, setSelectedId] = useState(experiences[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const selected = useMemo(
    () => experiences.find((e) => e.id === selectedId) ?? experiences[0],
    [selectedId],
  );

  const focusTab = useCallback((index: number) => {
    const i = (index + experiences.length) % experiences.length;
    queueMicrotask(() => tabRefs.current[i]?.focus());
  }, []);

  const onTabKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      switch (e.key) {
        case "ArrowDown":
        case "ArrowRight":
          e.preventDefault();
          setSelectedId(experiences[(index + 1) % experiences.length].id);
          focusTab(index + 1);
          break;
        case "ArrowUp":
        case "ArrowLeft":
          e.preventDefault();
          setSelectedId(
            experiences[(index - 1 + experiences.length) % experiences.length]
              .id,
          );
          focusTab(index - 1);
          break;
        case "Home":
          e.preventDefault();
          setSelectedId(experiences[0].id);
          focusTab(0);
          break;
        case "End":
          e.preventDefault();
          setSelectedId(experiences[experiences.length - 1].id);
          focusTab(experiences.length - 1);
          break;
        default:
          break;
      }
    },
    [focusTab],
  );

  return (
    <section
      id="experience"
      className="py-8 sm:py-12 md:py-16 mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-[60px]"
    >
      <div className="max-w-6xl mx-auto overflow-hidden">
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
          className="text-left mb-8 sm:mb-12 space-y-2 sm:space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight text-balance">
            Experience
          </h2>
          <SectionTitleRule />
          <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed">
            My professional experience in technology and healthcare
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-x-8 lg:items-stretch min-w-0">
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
            className={`lg:col-span-5 min-w-0 ${panelClass} p-2 sm:p-2.5`}
            style={asideShadow}
          >
            <p className="px-3 pt-2 pb-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Roles
            </p>
            <div
              role="tablist"
              aria-label="Work history"
              aria-orientation="vertical"
              className="flex flex-col gap-1"
            >
              {experiences.map((exp, index) => {
                const isSelected = selectedId === exp.id;
                return (
                  <button
                    key={exp.id}
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`exp-tab-${exp.id}`}
                    aria-selected={isSelected}
                    aria-controls={DETAIL_PANEL_ID}
                    tabIndex={isSelected ? 0 : -1}
                    onClick={() => setSelectedId(exp.id)}
                    onKeyDown={(e) => onTabKeyDown(e, index)}
                    className={`flex w-full items-start gap-3 rounded-2xl px-3 py-3 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hero-base)] ${
                      isSelected
                        ? "bg-white/[0.08] text-white ring-1 ring-white/12"
                        : "text-slate-300 hover:bg-white/[0.04] hover:text-slate-100"
                    }`}
                  >
                    <ExperienceIcon kind={exp.icon} />
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold text-white leading-snug">
                        {exp.company}
                      </span>
                      <span className="mt-0.5 block text-sm font-medium text-slate-300 leading-snug">
                        {exp.title}
                      </span>
                      <span className="mt-1 block text-xs text-slate-500">
                        {exp.period}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            key={selectedId}
            initial={
              reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.35,
              ease: heroEase,
            }}
            id={DETAIL_PANEL_ID}
            role="tabpanel"
            aria-labelledby={`exp-tab-${selectedId}`}
            className={`lg:col-span-7 min-w-0 ${panelClass} p-6 sm:p-8`}
            style={asideShadow}
          >
            <div className="flex flex-col gap-4 sm:gap-5">
              <div className="flex items-start gap-3">
                <ExperienceIcon kind={selected.icon} />
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    {selected.title}
                  </h3>
                  <p className="mt-1 text-base font-medium text-slate-200">
                    {selected.company}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">{selected.period}</p>
                </div>
              </div>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed">
                {selected.summary}
              </p>
              <ul
                role="list"
                className="list-disc list-outside pl-5 text-sm sm:text-base text-slate-400 marker:text-slate-500 space-y-1.5"
              >
                {selected.bullets.map((b) => (
                  <li key={b} className="leading-snug">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
