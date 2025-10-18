"use client";

// Navigation component - includes logo, navigation links, and resume button
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { href: "#about", label: "About", number: "01" },
    { href: "#experience", label: "Experience", number: "02" },
    { href: "#projects", label: "Projects", number: "03" },
    { href: "#contact", label: "Contact", number: "04" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl shadow-slate-900/25"
          : "bg-slate-900/60 backdrop-blur-md border-b border-slate-800/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - scrolls to top */}
          <Link
            href="#"
            className="group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="relative">
              {/* Animated background rings */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-purple-500/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>

              {/* Main logo container */}
              <div className="relative w-12 h-12 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-2xl border border-slate-700/50 flex items-center justify-center shadow-2xl shadow-slate-900/50 group-hover:shadow-blue-500/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                {/* Inner glow effect */}
                <div className="absolute inset-1 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Text with gradient */}
                <span className="relative z-10 bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent font-bold text-xl tracking-tight">
                  JP
                </span>

                {/* Subtle animation dots */}
                <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                <div className="absolute bottom-1 left-1 w-1 h-1 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping delay-150"></div>
              </div>

              {/* Outer glow on hover */}
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700/50">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${
                  activeSection === item.href.slice(1)
                    ? "text-blue-400"
                    : "text-slate-300 hover:text-slate-100"
                }`}
              >
                <span className="relative z-10">
                  <span className="text-xs text-slate-500 group-hover:text-blue-400 transition-colors duration-300">
                    {item.number}.
                  </span>{" "}
                  {item.label}
                </span>

                {/* Active indicator */}
                {activeSection === item.href.slice(1) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 rounded-full border border-blue-500/30"></div>
                )}

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Desktop Resume Button & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <a
              href="/jeffpatey_resume_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block relative group px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white rounded-full font-medium text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
              aria-label="View Resume"
            >
              <span className="relative z-10">Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
              aria-label="Toggle menu"
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
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm md:hidden"
            style={{ top: "80px" }}
          />

          {/* Menu Content */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      activeSection === item.href.slice(1)
                        ? "bg-gradient-to-r from-blue-500/20 to-indigo-600/20 text-blue-400 border border-blue-500/30"
                        : "text-slate-300 hover:text-slate-100 hover:bg-slate-800/50"
                    }`}
                  >
                    <span className="text-xs text-slate-500 mr-2">
                      {item.number}.
                    </span>
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Resume Button */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="pt-4"
              >
                <a
                  href="/jeffpatey_resume_2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white rounded-lg font-medium shadow-lg shadow-blue-500/25"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  View Resume
                </a>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </motion.nav>
  );
}
