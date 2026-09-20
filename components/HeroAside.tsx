"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

export default function HeroAside({ item }: { item: Variants }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.aside
      variants={item}
      className="relative order-2 flex justify-center overflow-visible lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:justify-end"
      aria-label="Portrait"
    >
      <div className="relative mx-auto w-full max-w-[280px] overflow-visible sm:max-w-[340px] lg:mx-0 lg:max-w-none lg:w-[min(100%,440px)]">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl sm:h-[160%] sm:w-[160%]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(224,122,95,0.55) 0%, rgba(224,122,95,0.22) 32%, rgba(224,122,95,0.08) 52%, transparent 70%)",
          }}
          aria-hidden
        />

        <motion.div
          className="relative z-10 aspect-[4/5] overflow-hidden rounded-lg border border-white/12 shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
          initial={reduceMotion ? false : { y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            delay: reduceMotion ? 0 : 0.2,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
        >
          <Image
            src="/jeffrey-patey.jpg"
            alt="Jeffrey Patey"
            fill
            priority
            className="object-cover object-[center_20%]"
            sizes="(min-width: 1024px) 440px, (min-width: 640px) 340px, 280px"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--hero-base)]/25 via-transparent to-transparent"
            aria-hidden
          />
        </motion.div>
      </div>
    </motion.aside>
  );
}
