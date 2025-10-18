"use client";

import ProjectCard from "./ProjectCard";
import AnimatedSection from "./AnimatedSection";

// Projects section component - includes featured projects links
export default function Projects() {
  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <AnimatedSection delay={0.1}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">
            <span className="text-blue-400">03.</span> Some Things I&apos;ve
            Built
          </h2>
        </AnimatedSection>
        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {/* HomeKeep Project */}
          <AnimatedSection delay={0.1}>
            <ProjectCard
              title="HomeKeep"
              description="A mobile app that makes home maintenance manageable. Create recurring tasks, get reminders when things are due, and track your progress—all with a clean, intuitive interface. Built with React Native, TypeScript, and Supabase. Available on the App Store!"
              technologies={["React Native", "TypeScript", "Expo", "Supabase"]}
              githubUrl="https://github.com/jvpatey/homekeep-mobile"
              appStoreUrl="https://apps.apple.com/ca/app/homekeep/id6751912377"
              images={[
                "/homekeep1.png",
                "/homekeep2.png",
                "/homekeep3.png",
                "/homekeep4.png",
                "/homekeep5.png",
                "/homekeep6.png",
              ]}
              imagePosition="right"
            />
          </AnimatedSection>

          {/* OralCheckr Project */}
          <AnimatedSection delay={0.1}>
            <ProjectCard
              title="OralCheckr"
              description="A comprehensive web app for oral health assessment and habit tracking. Users complete a detailed questionnaire to receive a personalized oral health score with tailored recommendations. Features include a daily habit tracker with progress analytics, monthly insights with calendar views, and yearly heatmaps to visualize long-term oral health trends."
              technologies={[
                "React",
                "TypeScript",
                "Vite",
                "Node.js",
                "Express",
                "MySQL",
              ]}
              githubUrl="https://github.com/jvpatey/OralCheckr"
              externalUrl="https://jvpatey.github.io/OralCheckr/"
              images={[
                "/oralcheckr1.png",
                "/oralcheckr2.png",
                "/oralcheckr3.png",
                "/oralcheckr4.png",
                "/oralcheckr5.png",
                "/oralcheckr6.png",
                "/oralcheckr7.png",
                "/oralcheckr8.png",
                "/oralcheckr9.png",
              ]}
              imagePosition="left"
            />
          </AnimatedSection>

          {/* Burden's General Store Project */}
          <AnimatedSection delay={0.1}>
            <ProjectCard
              title="Burden's General Store"
              description="A modern website for a family-owned general store serving St.Lunaire-Griquet since 1959. Features responsive design, dark/light mode with system preference detection, live Facebook feed integration, and detailed product showcases. Built with accessibility in mind and optimized for all devices."
              technologies={[
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "shadcn/ui",
                "Vercel",
              ]}
              githubUrl="https://github.com/jvpatey/burdens-general-store"
              externalUrl="https://burdensgeneralstore.com"
              images={[
                "/burdens1.png",
                "/burdens2.png",
                "/burdens3.png",
                "/burdens4.png",
                "/burdens5.png",
                "/burdens6.png",
              ]}
              imagePosition="right"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
