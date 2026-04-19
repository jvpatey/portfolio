import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import GradientBackground from "@/components/GradientBackground";

// Main portfolio page
export default function Home() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      {/* Full-viewport depth so fixed navbar sits over the same surface as the hero */}
      <GradientBackground fixed />

      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 pt-16 overflow-hidden">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
