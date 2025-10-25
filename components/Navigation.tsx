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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-black/80 backdrop-blur-md ${
        isScrolled ? "border-b border-white/10" : "border-b border-transparent"
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
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 via-pink-500/30 to-orange-500/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>

              {/* Main logo container */}
              <div className="relative w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center shadow-xl shadow-black/20 group-hover:shadow-pink-500/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                {/* Inner glow effect */}
                <div className="absolute inset-1 bg-gradient-to-br from-blue-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Text with Apple-style gradient */}
                <span
                  className="relative z-10 font-bold text-xl tracking-tight"
                  style={{
                    background:
                      "linear-gradient(135deg, #3478F6 0%, #FF2D55 50%, #FF9500 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  JP
                </span>

                {/* Subtle animation dots */}
                <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                <div className="absolute bottom-1 left-1 w-1 h-1 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping delay-150"></div>
              </div>

              {/* Outer glow on hover */}
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/10 to-pink-500/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-2 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${
                  activeSection === item.href.slice(1)
                    ? ""
                    : "text-slate-300 hover:text-slate-100"
                }`}
              >
                <span className="relative z-10">
                  <span
                    className="text-xs transition-colors duration-300"
                    style={{
                      color:
                        activeSection === item.href.slice(1)
                          ? "transparent"
                          : "#6b7280",
                      background:
                        activeSection === item.href.slice(1)
                          ? "linear-gradient(135deg, #3478F6 0%, #FF2D55 50%, #FF9500 100%)"
                          : "none",
                      WebkitBackgroundClip:
                        activeSection === item.href.slice(1)
                          ? "text"
                          : "initial",
                      WebkitTextFillColor:
                        activeSection === item.href.slice(1)
                          ? "transparent"
                          : "initial",
                      backgroundClip:
                        activeSection === item.href.slice(1)
                          ? "text"
                          : "initial",
                    }}
                  >
                    {item.number}.
                  </span>{" "}
                  <span
                    style={{
                      color:
                        activeSection === item.href.slice(1)
                          ? "transparent"
                          : "inherit",
                      background:
                        activeSection === item.href.slice(1)
                          ? "linear-gradient(135deg, #3478F6 0%, #FF2D55 50%, #FF9500 100%)"
                          : "none",
                      WebkitBackgroundClip:
                        activeSection === item.href.slice(1)
                          ? "text"
                          : "initial",
                      WebkitTextFillColor:
                        activeSection === item.href.slice(1)
                          ? "transparent"
                          : "initial",
                      backgroundClip:
                        activeSection === item.href.slice(1)
                          ? "text"
                          : "initial",
                    }}
                  >
                    {item.label}
                  </span>
                </span>

                {/* Active indicator */}
                {activeSection === item.href.slice(1) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-pink-500/30 backdrop-blur-sm rounded-full border border-pink-400/40"></div>
                )}

                {/* Hover effect */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Desktop Resume Button & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <a
              href="/jeffpatey_resume_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block relative group px-8 py-4 text-white rounded-full font-medium text-sm transition-all duration-500 overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(52, 120, 246, 0.25) 0%, rgba(255, 45, 85, 0.25) 50%, rgba(255, 149, 0, 0.25) 100%)",
                boxShadow:
                  "0 6px 24px rgba(0, 0, 0, 0.15), 0 0 0 0.5px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(20px) saturate(200%)",
                border: "0.5px solid rgba(255, 255, 255, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 0.5px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 6px 24px rgba(0, 0, 0, 0.15), 0 0 0 0.5px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.transform = "scale(1)";
              }}
              aria-label="View Resume"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>

              <span className="relative z-10">Resume</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300"
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
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-md md:hidden"
            style={{ top: "80px" }}
          />

          {/* Menu Content */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 border-b border-slate-700/50 shadow-xl"
            style={{
              backgroundColor: "transparent",
            }}
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
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 backdrop-blur-sm ${
                      activeSection === item.href.slice(1)
                        ? "bg-gradient-to-r from-blue-500/30 to-indigo-600/30 text-blue-400 border border-blue-400/40"
                        : "text-slate-300 hover:text-slate-100 hover:bg-white/10 border border-transparent"
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
                  className="block text-center px-8 py-4 text-white rounded-full font-medium transition-all duration-500 overflow-hidden relative group"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(52, 120, 246, 0.25) 0%, rgba(255, 45, 85, 0.25) 50%, rgba(255, 149, 0, 0.25) 100%)",
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
    </motion.nav>
  );
}
