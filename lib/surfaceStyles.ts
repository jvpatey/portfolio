/** Shared panel surfaces, CTAs, and type roles */

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
  "inline-flex w-full items-center justify-center gap-2 rounded-full border border-orange-300/30 px-6 py-3.5 text-center text-sm font-semibold text-white shadow-[0_8px_28px_rgba(201,98,78,0.36)] transition-[box-shadow,background-color] duration-300 hover:border-orange-200/40 hover:shadow-[0_12px_36px_rgba(201,98,78,0.46)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hero-base)]";

export const ghostCtaClass =
  "inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-center text-sm font-medium text-slate-200 transition-colors hover:border-white/25 hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hero-base)]";

/** Section eyebrow with copper mark — append children for the label */
export const sectionEyebrowClass =
  "flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400";

export const sectionEyebrowMarkClass =
  "inline-block h-2 w-2 shrink-0 rounded-[2px] bg-[var(--accent-primary)]";

export const sectionHeadingClass =
  "text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl";

export const sectionLeadClass =
  "max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg";

/** Small caps labels inside panels (Bio, Links, etc.) */
export const panelLabelClass =
  "text-xs font-semibold uppercase tracking-[0.22em] text-slate-500";

export const heroDisplayClass =
  "text-balance text-5xl font-bold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-8xl";

export const heroSubheadClass =
  "max-w-xl text-balance text-xl font-semibold leading-snug tracking-tight sm:text-3xl md:text-4xl";
