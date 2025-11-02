"use client";

/**
 * Pure Apple-style solid background
 * Clean, solid black like Apple's actual website
 */
export default function GradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-black" />
  );
}
