import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

// Main portfolio page
export default function Home() {
  return (
    <div className="min-h-screen text-white bg-black">
      <Navigation />

      {/* Main Content */}
      <main className="pt-16">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
