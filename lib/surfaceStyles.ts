/** Shared panel surfaces and CTAs (Projects, Contact, etc.) */

export const asideShadow = {
  boxShadow:
    "0 8px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
} as const;

export const panelClass =
  "rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-colors duration-300 hover:border-white/15";

/** Inset sections inside a tinted panel — transparent fill, subtle border. */
export const detailSectionClass =
  "min-w-0 rounded-2xl border border-white/[0.08] bg-transparent p-4 sm:p-6";

export const primaryCtaClass =
  "inline-flex w-full items-center justify-center gap-2 rounded-full border border-cyan-300/35 px-6 py-3.5 text-center text-sm font-semibold text-white shadow-[0_8px_28px_rgba(6,182,212,0.38)] transition-[box-shadow,background-color] duration-300 hover:border-cyan-200/45 hover:shadow-[0_12px_36px_rgba(6,182,212,0.48)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hero-base)]";

export const ghostCtaClass =
  "inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-center text-sm font-medium text-slate-200 transition-colors hover:border-white/25 hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hero-base)]";
