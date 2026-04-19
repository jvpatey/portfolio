"use client";

import { motion, type Variants } from "framer-motion";

const stats = [
  {
    value: "5+",
    label: "Years in healthcare",
    detail: "Patient-facing practice since 2021",
  },
  {
    value: "Now",
    label: "ThinkRad · Consultant",
    detail: "iOS, SwiftUI & CloudKit",
  },
  {
    value: "Full stack",
    label: "Web & native",
    detail: "TypeScript, React, Swift",
  },
] as const;

export default function HeroAside({ item }: { item: Variants }) {
  return (
    <motion.aside
      variants={item}
      className="mt-14 lg:mt-0 lg:col-span-5"
      aria-label="Highlights"
    >
      <div
        className="rounded-3xl p-6 sm:p-8 border border-white/10 bg-white/[0.03] backdrop-blur-md"
        style={{
          boxShadow:
            "0 8px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
        }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
          At a glance
        </p>
        <ul className="space-y-6 list-none p-0 m-0">
          {stats.map((row) => (
            <li
              key={row.label}
              className="flex flex-col gap-1 border-b border-white/5 pb-6 last:border-0 last:pb-0"
            >
              <p className="text-sm text-slate-500">{row.label}</p>
              <p className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                {row.value}
              </p>
              <p className="text-sm text-slate-400 leading-snug">{row.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </motion.aside>
  );
}
