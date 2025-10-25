import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GradientBackground from "@/components/GradientBackground";

// Main portfolio page
export default function Home() {
  return (
    <div className="min-h-screen text-slate-100 bg-slate-900">
      {/* Full page gradient background */}
      <GradientBackground />

      <Navigation />

      {/* Main Content */}
      <main className="pt-16">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
