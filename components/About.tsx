"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import SectionTitleRule from "./SectionTitleRule";
import { asideShadow, panelClass } from "@/lib/surfaceStyles";

const heroEase = [0.21, 0.47, 0.32, 0.98] as const;

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="mb-12 scroll-mt-[60px] overflow-hidden px-4 pb-8 pt-6 sm:mb-16 sm:px-6 sm:py-12 md:mb-20 md:py-16 lg:mb-16 lg:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
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
          className="mb-6 shrink-0 space-y-2 text-left sm:mb-8 sm:space-y-3"
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            About me
          </h2>
          <SectionTitleRule />
          <p className="max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            Healthcare roots, full-stack craft.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-stretch lg:gap-x-8">
          <motion.div
            initial={
              reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: reduceMotion ? 0 : 0.55,
              delay: reduceMotion ? 0 : 0.06,
              ease: heroEase,
            }}
            className={`min-h-0 p-5 sm:p-6 lg:col-span-7 lg:p-6 ${panelClass}`}
            style={asideShadow}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
              My story
            </p>
            <div className="space-y-3 text-base leading-relaxed text-slate-400 md:text-lg">
              <p>
                After 10 years in patient care, I build practical, purpose-built
                tools with a detail-oriented, user-first mindset—especially in{" "}
                <span className="font-medium text-slate-200">health tech</span>{" "}
                and SaaS.
              </p>
              <p>
                I care about responsive, accessible interfaces that make complex
                tasks feel simple.
              </p>
            </div>

            <p className="mb-3 mt-6 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Tech stack
            </p>
            <ul
              role="list"
              className="list-outside list-disc space-y-1.5 pl-5 text-sm text-slate-400 marker:text-slate-500 sm:columns-2 sm:gap-x-8 [column-fill:balance]"
            >
              {[
                "React & React Native",
                "SwiftUI & Xcode",
                "Node.js & Express",
                "Next.js & TypeScript",
                "PostgreSQL & Supabase",
                "RESTful API Design",
                "Vercel",
                "Auth (JWT, OAuth)",
              ].map((label) => (
                <li key={label} className="break-inside-avoid leading-snug">
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={
              reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: reduceMotion ? 0 : 0.55,
              delay: reduceMotion ? 0 : 0.12,
              ease: heroEase,
            }}
            className={`flex min-h-0 flex-col p-4 sm:p-5 lg:col-span-5 lg:p-5 ${panelClass}`}
            style={asideShadow}
          >
            <div className="relative mx-auto aspect-[4/5] max-h-[min(380px,60vh)] w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.25)] lg:mx-0 lg:min-h-[220px] lg:flex-1 lg:aspect-auto lg:max-h-none">
              <Image
                src="/jeffrey-patey.jpg"
                alt="Jeffrey Patey"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
