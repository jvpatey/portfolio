// Projects section component - includes featured projects links
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">
          <span className="text-blue-400">03.</span> Some Things I&apos;ve Built
        </h2>
        <div className="space-y-20">
          {/* HomeKeep Project */}
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

          {/* OralCheckr Project */}
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
        </div>
      </div>
    </section>
  );
}
