"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import ContactForm from "./ContactForm";
import SectionTitleRule from "./SectionTitleRule";
import { panelLabelClass } from "@/lib/surfaceStyles";

const heroEase = [0.21, 0.47, 0.32, 0.98] as const;

const socialLinkClass =
  "inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hero-base)] rounded-md";

export default function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative mb-8 scroll-mt-[60px] overflow-hidden px-4 py-10 sm:mb-10 sm:px-6 sm:py-12 md:py-16 lg:px-8"
    >
      {/* Quiet atmosphere — copper reserved for hero + project stage */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(70%,440px)] w-[min(85%,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle at center, rgba(224,122,95,0.07) 0%, rgba(224,122,95,0.02) 45%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.header
          initial={
            reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: reduceMotion ? 0 : 0.55,
            ease: heroEase,
          }}
          className="mb-8 space-y-3 text-left sm:mb-10"
        >
          <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            <span
              className="inline-block h-2 w-2 shrink-0 rounded-[2px] bg-[var(--accent-primary)]"
              aria-hidden
            />
            Get in touch
          </p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Let&apos;s talk
          </h2>
          <SectionTitleRule />
          <p className="max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
            Questions, collaboration, or just hello—I&apos;d love to hear from
            you.
          </p>
        </motion.header>

        <motion.div
          initial={
            reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: reduceMotion ? 0 : 0.55,
            delay: reduceMotion ? 0 : 0.06,
            ease: heroEase,
          }}
          className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-8"
        >
          <div className="lg:col-span-7 xl:col-span-8">
            <ContactForm />
          </div>

          <aside className="flex flex-col justify-between gap-8 border-t border-white/10 pt-8 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 xl:col-span-4">
            <div>
              <p className={`mb-4 ${panelLabelClass}`}>
                Elsewhere
              </p>
              <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
                <li>
                  <a
                    href="https://github.com/jvpatey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={socialLinkClass}
                  >
                    <Github className="h-4 w-4 shrink-0" aria-hidden />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/jeffreypatey/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={socialLinkClass}
                  >
                    <Linkedin className="h-4 w-4 shrink-0" aria-hidden />
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className={`mb-2 ${panelLabelClass}`}>
                Resume
              </p>
              <a
                href="/jeff_resume_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 underline decoration-white/15 underline-offset-4 transition-colors hover:text-slate-200 hover:decoration-white/35"
              >
                View PDF
              </a>
            </div>
          </aside>
        </motion.div>
      </div>
    </section>
  );
}
