"use client";

import AnimatedSection from "./AnimatedSection";

// Experience section component - includes work experience
export default function Experience() {
  return (
    <section
      id="experience"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="max-w-6xl mx-auto">
        <AnimatedSection delay={0.1}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">
            <span
              style={{
                background:
                  "linear-gradient(135deg, #3478F6 0%, #FF2D55 50%, #FF9500 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              02.
            </span>{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #3478F6 0%, #FF2D55 50%, #FF9500 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Where I&apos;ve Worked
            </span>
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="space-y-6 sm:space-y-8">
            <div
              className="border-l-2 pl-4 sm:pl-6"
              style={{ borderLeftColor: "#60a5fa" }}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                Registered Dental Hygienist
              </h3>
              <p
                className="text-sm sm:text-base"
                style={{
                  background:
                    "linear-gradient(135deg, #60a5fa 0%, #34d399 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Sackville Dental Centre • 2021 - Present
              </p>
              <ul className="mt-3 sm:mt-4 space-y-2 text-sm sm:text-base text-slate-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">▸</span>
                  Worked closely with patients to keep treatments efficient and
                  comfortable—skills I now apply to building user-friendly,
                  accessible software with attention to detail and a user-first
                  approach.
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
