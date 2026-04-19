"use client";

/**
 * Hero backdrop: near-black base, soft radial accents, optional grain.
 * Decorative only; keep pointer-events none.
 */
export default function GradientBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      <div className="absolute inset-0 bg-hero-base" />
      <div className="absolute inset-0 bg-hero-radials" />
      <div className="absolute inset-0 bg-hero-grain" />
    </div>
  );
}
