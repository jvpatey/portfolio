"use client";

type GradientBackgroundProps = {
  /** Pin behind entire viewport (e.g. under fixed nav); default fills positioned parent */
  fixed?: boolean;
};

/**
 * Page / hero backdrop: near-black base, soft radial accents, grain.
 * Decorative only; keep pointer-events none.
 */
export default function GradientBackground({
  fixed = false,
}: GradientBackgroundProps) {
  return (
    <div
      className={`${
        fixed
          ? "fixed inset-0 z-0"
          : "absolute inset-0"
      } overflow-hidden pointer-events-none`}
      aria-hidden
    >
      <div className="absolute inset-0 bg-hero-base" />
      <div className="absolute inset-0 bg-hero-radials" />
      <div className="absolute inset-0 bg-hero-grain" />
    </div>
  );
}
