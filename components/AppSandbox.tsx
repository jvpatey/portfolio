"use client";

import { motion } from "framer-motion";
import ImageCarousel from "./ImageCarousel";
import {
  AnimatedStaggerContainer,
  AnimatedStaggerItem,
} from "./AnimatedStagger";

// Bento grid card component with glassmorphism
const BentoCard = ({
  children,
  className = "",
  delay = 0,
  span = "col-span-1",
  rowSpan = "row-span-1",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  span?: string;
  rowSpan?: string;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: delay * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className={`${span} ${rowSpan} group relative overflow-hidden rounded-3xl transition-all duration-500 ${className}`}
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(20px) saturate(200%)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow:
          "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
      }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(135deg, rgba(52, 120, 246, 0.1) 0%, rgba(255, 45, 85, 0.1) 50%, rgba(255, 149, 0, 0.1) 100%)",
        }}
      />

      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
};

interface AppSandboxProps {
  title: string;
  description: string;
  features: string[];
  images: string[];
  technologies?: string[];
  delay?: number;
  span?: string;
  rowSpan?: string;
  className?: string;
}

// Sandbox component for showcasing app features
export default function AppSandbox({
  title,
  description,
  features,
  images,
  technologies = [],
  delay = 0,
  span = "col-span-1 md:col-span-2",
  rowSpan = "row-span-2",
  className = "",
}: AppSandboxProps) {
  return (
    <BentoCard
      span={span}
      rowSpan={rowSpan}
      delay={delay}
      className={`p-4 sm:p-6 ${className}`}
    >
      <div className="h-full flex flex-col">
        <div className="mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
            {title} Sandbox
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            {description}
          </p>
        </div>

        {/* Feature showcase */}
        <div className="flex-1 space-y-4">
          {/* Features list */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white mb-2">
              Core Features
            </h4>
            <AnimatedStaggerContainer className="space-y-2">
              {features.map((feature, index) => (
                <AnimatedStaggerItem key={index}>
                  <div className="flex items-center text-xs text-slate-300">
                    <span className="text-[#FF2D55] mr-2">▸</span>
                    {feature}
                  </div>
                </AnimatedStaggerItem>
              ))}
            </AnimatedStaggerContainer>

            {/* Technologies */}
            {technologies.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-white mb-2">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-full text-xs"
                      style={{
                        background: "rgba(52, 120, 246, 0.1)",
                        border: "1px solid rgba(52, 120, 246, 0.2)",
                        color: "#60a5fa",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Image carousel - Full width for better visibility */}
          <div className="relative w-full">
            <ImageCarousel images={images} alt={`${title} features`} />
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
