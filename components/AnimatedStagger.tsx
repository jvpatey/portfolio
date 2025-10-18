"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AnimatedStaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

// Container component that staggers the animation of its children
export function AnimatedStaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: AnimatedStaggerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedStaggerItemProps {
  children: ReactNode;
  className?: string;
}

// Individual item component to be used within AnimatedStaggerContainer
export function AnimatedStaggerItem({
  children,
  className = "",
}: AnimatedStaggerItemProps) {
  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  };

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}
