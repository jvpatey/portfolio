/**
 * Decorative accent under section titles. Meaning comes from the heading;
 * this element is hidden from assistive tech (aria-hidden).
 */
export default function SectionTitleRule({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`h-1 w-14 sm:w-16 shrink-0 rounded-full opacity-90 ${className}`}
      style={{ background: "var(--accent-gradient)" }}
      aria-hidden
    />
  );
}
