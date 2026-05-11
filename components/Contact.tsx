"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Download, Github, Linkedin } from "lucide-react";
import ContactForm from "./ContactForm";
import SectionTitleRule from "./SectionTitleRule";
import {
  asideShadow,
  ghostCtaClass,
  panelClass,
  primaryCtaClass,
} from "@/lib/surfaceStyles";

const heroEase = [0.21, 0.47, 0.32, 0.98] as const;

const contactInsetClass =
  "min-w-0 rounded-2xl border border-white/[0.08] bg-transparent p-4 sm:p-5";

const insetMotion = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
} as const;

export default function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="mb-6 scroll-mt-[60px] px-4 py-6 sm:mb-8 sm:px-6 sm:py-8 md:py-10 lg:px-8"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <div className="mx-auto max-w-6xl">
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
          className="mb-6 space-y-2 text-left sm:mb-10 sm:space-y-3 lg:mb-8"
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Contact
          </h2>
          <SectionTitleRule />
          <p className="max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            Feel free to reach out — I&apos;d love to hear from you.
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`${panelClass} p-3 sm:p-4 lg:p-5`}
          style={asideShadow}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-stretch lg:gap-5">
            <motion.div
              {...insetMotion}
              transition={{ ...insetMotion.transition, delay: 0.05 }}
              className={`${contactInsetClass} flex min-h-0 flex-col md:h-full`}
            >
              <div className="flex min-h-0 flex-1 flex-col gap-4 md:h-full">
                <div>
                  <h3 className="mb-2 text-base font-semibold text-white sm:text-lg md:text-xl">
                    Let&apos;s Connect
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                    I&apos;m always happy to connect — questions, collaboration,
                    or just hello.
                  </p>
                </div>
                <div className="min-w-0 flex-1">
                  <ContactForm />
                </div>
              </div>
            </motion.div>

            <div className="flex min-h-0 flex-col gap-4 md:h-full">
              <motion.div
                {...insetMotion}
                transition={{ ...insetMotion.transition, delay: 0.1 }}
                className={`${contactInsetClass} flex min-h-0 flex-1 flex-col`}
              >
                <div className="flex min-h-0 flex-1 flex-col gap-4">
                  <h3 className="text-base font-semibold text-white sm:text-lg md:text-xl">
                    Where to Find Me
                  </h3>
                  <div className="flex flex-col gap-2.5">
                    <a
                      href="https://github.com/jvpatey"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={ghostCtaClass}
                    >
                      <Github className="h-4 w-4 shrink-0" aria-hidden />
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jeffreypatey/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={ghostCtaClass}
                    >
                      <Linkedin className="h-4 w-4 shrink-0" aria-hidden />
                      LinkedIn
                    </a>
                  </div>
                  <div className="min-h-0 flex-1" aria-hidden />
                </div>
              </motion.div>

              <motion.div
                {...insetMotion}
                transition={{ ...insetMotion.transition, delay: 0.15 }}
                className={`${contactInsetClass} flex min-h-0 flex-1 flex-col`}
              >
                <div className="flex min-h-0 flex-1 flex-col gap-4">
                  <div>
                    <h3 className="mb-2 text-base font-semibold text-white sm:text-lg md:text-xl">
                      Download Resume
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                      PDF overview of experience and skills.
                    </p>
                  </div>
                  <div className="mt-auto flex flex-col pt-1">
                    <a
                      href="/jeff_resume_2026.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={primaryCtaClass}
                      style={{ backgroundColor: "var(--cta-solid)" }}
                      aria-label="Download Resume"
                    >
                      <Download className="h-4 w-4 shrink-0" aria-hidden />
                      Download Resume
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
