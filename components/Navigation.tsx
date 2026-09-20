"use client";

// Navigation component - includes logo, navigation links, and resume button
import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  // Smooth scroll handler
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const scrollBehavior = reduceMotion ? "auto" : "smooth";
    if (targetId === "#") {
      window.scrollTo({ top: 0, behavior: scrollBehavior });
    } else {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: scrollBehavior,
          block: "start",
        });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["projects", "about", "contact"];

      // Check if we're still in the hero section (top of page)
      const firstSection = document.getElementById("projects");
      if (firstSection) {
        const firstRect = firstSection.getBoundingClientRect();
        // If projects hasn't reached the navbar yet, we're in hero
        if (firstRect.top > 150) {
          setActiveSection("");
          return;
        }
      }

      // Check if we're at the bottom of the page
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;

      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      // Find the current section by checking which one is most visible
      let currentSection = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Section is considered active if its top is above the middle of the screen
          // and its bottom is below the navbar (100px)
          if (rect.top <= 150 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Run on mount to set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-nav-surface backdrop-blur-xl backdrop-saturate-150 ${
        isScrolled ? "border-b border-white/10" : "border-b border-white/[0.04]"
      }`}
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4 md:h-20">
          <div className="flex min-w-0 flex-1 justify-start">
            <Link
              href="#"
              className="group inline-flex min-w-0 max-w-full items-baseline rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hero-base)]"
              onClick={(e) => handleSmoothScroll(e, "#")}
              aria-label="Jeffrey Patey, home"
            >
              <span className="hidden items-baseline gap-x-1.5 leading-none sm:inline-flex">
                <span className="shrink-0 text-lg font-semibold tracking-tight text-white md:text-xl xl:text-2xl">
                  Jeffrey
                </span>
                <span
                  className={`shrink-0 text-lg font-semibold tracking-tight text-slate-400 md:text-xl xl:text-2xl ${
                    reduceMotion
                      ? ""
                      : "transition-transform duration-300 ease-out group-hover:translate-x-1"
                  }`}
                >
                  Patey
                </span>
              </span>
              <span
                className="inline-flex items-baseline gap-0.5 text-base font-bold leading-none tracking-tight sm:hidden"
                aria-hidden="true"
              >
                <span className="text-white">J</span>
                <span className="text-slate-400">P</span>
              </span>
            </Link>
          </div>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hero-base)] lg:px-4 ${
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-slate-100"
                  }`}
                >
                  {item.label}
                  {isActive ? (
                    <span
                      className="mt-1 block h-px w-full bg-[var(--accent-primary)]"
                      aria-hidden
                    />
                  ) : (
                    <span className="mt-1 block h-px w-full bg-transparent" aria-hidden />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex shrink-0 items-center justify-end gap-2">
            <Link
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="hidden items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/20 hover:bg-white/[0.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hero-base)] md:inline-flex"
            >
              <span
                className="inline-flex h-5 w-5 items-center justify-center rounded-[3px] bg-[var(--accent-primary)] text-[0.65rem] text-white"
                aria-hidden
              >
                →
              </span>
              Let&apos;s talk
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-slate-200 transition-colors hover:border-white/15 hover:bg-white/[0.1] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hero-base)] md:hidden"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/88 backdrop-blur-md md:hidden"
              style={{ top: "64px" }}
            />

            {/* Menu Content — opaque surface so links stay readable over the hero */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden absolute top-full left-0 right-0 z-50 border-t border-white/12 border-b border-white/10 bg-[var(--surface-1)] shadow-[0_12px_40px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.08)]"
            >
            <div className="mx-auto max-w-7xl space-y-2 px-6 py-6">
              {[
                { href: "#", label: "Home" },
                ...navItems,
                { href: "#contact", label: "Contact" },
              ].map((item, index) => {
                const isMobileActive =
                  item.href === "#"
                    ? activeSection === ""
                    : activeSection === item.href.slice(1);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        handleSmoothScroll(e, item.href);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`block cursor-pointer rounded-xl border px-5 py-3.5 text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-1)] ${
                        isMobileActive
                          ? "border-[var(--accent-primary)]/40 bg-white/[0.12] text-white"
                          : "border-white/12 bg-white/[0.05] text-slate-100 hover:border-white/20 hover:bg-white/[0.08]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                className="flex flex-col gap-2 pt-4"
              >
                <a
                  href="#contact"
                  onClick={(e) => {
                    handleSmoothScroll(e, "#contact");
                    setIsMobileMenuOpen(false);
                  }}
                  className="block rounded-full border border-orange-300/40 px-8 py-3.5 text-center text-sm font-semibold text-white shadow-[0_8px_28px_rgba(201,98,78,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-1)]"
                  style={{ backgroundColor: "var(--cta-solid)" }}
                >
                  Let&apos;s talk
                </a>
                <a
                  href="/jeff_resume_2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-full border border-white/15 px-8 py-3.5 text-center text-sm font-medium text-slate-200 transition-colors hover:border-white/25"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  View Resume
                </a>
              </motion.div>
            </div>
          </motion.div>
        </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
