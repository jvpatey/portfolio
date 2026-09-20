"use client";

import { motion, type Variants } from "framer-motion";

export default function HeroAside({ item }: { item: Variants }) {
  return (
    <motion.aside
      variants={item}
      className="mt-14 lg:mt-0 lg:col-span-5"
      aria-label="Highlights"
    >
      <div
        className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md sm:p-8"
        style={{
          boxShadow:
            "0 8px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
        }}
      >
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
          Focus
        </p>
        <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Health tech &amp; practical products
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
          Shipping full-stack web and mobile tools that simplify real workflows—
          from dental staffing to home maintenance.
        </p>
        <ul className="mt-6 space-y-2 border-t border-white/5 pt-5 text-sm text-slate-400">
          <li className="flex gap-2">
            <span
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-primary)]"
              aria-hidden
            />
            Next.js, TypeScript, React Native &amp; SwiftUI
          </li>
          <li className="flex gap-2">
            <span
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500"
              aria-hidden
            />
            Based in Halifax, NS
          </li>
        </ul>
      </div>
    </motion.aside>
  );
}
