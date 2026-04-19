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
              className="md:hidden w-10 h-10 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hero-base)]"
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
              className="fixed inset-0 bg-slate-900/80 backdrop-blur-md md:hidden"
              style={{ top: "80px" }}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden absolute top-full left-0 right-0 border-b border-white/10 shadow-xl"
            style={{
              background: "rgba(0, 0, 0, 0.95)",
              backdropFilter: "blur(20px) saturate(200%)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow:
                "0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            }}
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
                    className={`block px-5 py-3.5 rounded-lg text-base font-medium transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hero-base)] ${
                      isMobileActive
                        ? "text-white"
                        : "text-slate-300 hover:text-white"
                    }`}
                    style={{
                      background: isMobileActive
                        ? "rgba(255, 255, 255, 0.08)"
                        : "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(20px) saturate(200%)",
                      border: isMobileActive
                        ? "1px solid rgba(34, 211, 238, 0.25)"
                        : "1px solid rgba(255, 255, 255, 0.1)",
                      boxShadow: isMobileActive
                        ? "0 2px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.06)"
                        : "0 2px 8px rgba(0, 0, 0, 0.1)",
                    }}
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
                  className="block text-center px-8 py-4 text-white rounded-full font-medium transition-all duration-500 overflow-hidden relative group"
                  style={{
                    background: "var(--accent-gradient-soft)",
                    boxShadow:
                      "0 6px 24px rgba(0, 0, 0, 0.15), 0 0 0 0.5px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(20px) saturate(200%)",
                    border: "0.5px solid rgba(255, 255, 255, 0.2)",
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>

                  <span className="relative z-10">View Resume</span>
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
