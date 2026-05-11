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
      const sections = ["about", "experience", "projects", "contact"];

      // Check if we're still in the hero section (top of page)
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const aboutRect = aboutSection.getBoundingClientRect();
        // If about section hasn't reached the navbar yet, we're in hero
        if (aboutRect.top > 150) {
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
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="flex items-center justify-between gap-3 md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center md:justify-stretch h-20">
          {/* Wordmark — full name lg+; compact JP below lg */}
          <div className="min-w-0 flex-1 md:flex-none flex justify-start pr-1 md:pr-2">
            <Link
              href="#"
              className="group inline-flex min-w-0 max-w-full items-baseline rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hero-base)]"
              onClick={(e) => handleSmoothScroll(e, "#")}
              aria-label="Jeffrey Patey, home"
            >
              <span className="hidden lg:inline-flex items-baseline gap-x-1.5 leading-none">
                <span className="font-semibold text-xl xl:text-2xl tracking-tight text-[var(--accent-primary)] shrink-0">
                  Jeffrey
                </span>
                <span
                  className={`font-semibold text-xl xl:text-2xl tracking-tight text-[var(--accent-secondary)] shrink-0 ${
                    reduceMotion
                      ? ""
                      : "transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                  }`}
                >
                  Patey
                </span>
              </span>
              <span
                className="lg:hidden inline-flex items-baseline gap-0.5 font-bold text-base sm:text-lg tracking-tight leading-none"
                aria-hidden="true"
              >
                <span className="text-[var(--accent-primary)]">J</span>
                <span className="text-[var(--accent-secondary)]">P</span>
              </span>
            </Link>
          </div>

          {/* Navigation Links - Centered */}
          <div className="hidden md:flex md:justify-self-center items-center justify-center min-w-0">
            <div className="flex items-center gap-1 sm:gap-1.5 bg-white/[0.04] backdrop-blur-md rounded-full px-2 sm:px-2.5 py-1.5 border border-white/10">
              {navItems.map((item) => {
                const isActive =
                  (item.href === "#" && activeSection === "") ||
                  (item.href !== "#" &&
                    activeSection === item.href.slice(1));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className={`group relative px-3 sm:px-3.5 lg:px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hero-base)] ${
                      isActive
                        ? "text-white bg-white/10 ring-1 ring-white/15"
                        : "text-slate-400 hover:text-slate-100"
                    }`}
                  >
                    <span
                      className={`relative z-10 whitespace-nowrap ${
                        isActive ? "text-white" : "text-slate-300"
                      }`}
                    >
                      {item.label}
                    </span>
                    {!isActive && (
                      <div className="absolute inset-0 rounded-full bg-white/[0.06] opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex shrink-0 justify-end md:justify-self-end">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-slate-200 shadow-[0_8px_24px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition-colors hover:border-white/15 hover:bg-white/[0.1] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hero-base)]"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-5 h-5"
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
              style={{ top: "80px" }}
            />

            {/* Menu Content — opaque surface so links stay readable over the hero */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden absolute top-full left-0 right-0 z-50 border-t border-white/12 border-b border-white/10 bg-[var(--surface-1)] shadow-[0_12px_40px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.08)]"
            >
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-2">
              {navItems.map((item, index) => {
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
                    className={`block cursor-pointer rounded-xl border px-5 py-3.5 text-base font-medium shadow-[0_4px_20px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-1)] ${
                      isMobileActive
                        ? "border-cyan-400/40 bg-white/[0.14] text-white ring-1 ring-cyan-400/20"
                        : "border-white/15 bg-white/[0.08] text-slate-100 hover:border-white/22 hover:bg-white/[0.12] hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
                );
              })}

              {/* Mobile Resume Button */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="pt-4"
              >
                <a
                  href="/jeffpatey_resume_2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-full border border-cyan-300/45 px-8 py-4 text-center text-sm font-semibold text-white shadow-[0_8px_28px_rgba(6,182,212,0.42)] transition-[box-shadow,background-color] hover:border-cyan-200/55 hover:shadow-[0_12px_36px_rgba(6,182,212,0.52)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-1)]"
                  style={{ backgroundColor: "var(--cta-solid)" }}
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
