import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GradientBackground from "@/components/GradientBackground";

// Main portfolio page — proof of work before biography
export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">
      <GradientBackground fixed />

      <Navigation />

      <main className="relative z-10 overflow-x-hidden pt-16">
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
