import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => (
  <div className="relative">
    <ScrollProgress />
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Achievements />
    <Contact />
    <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/50">
      <p>© 2026 Gobika S. Built with passion.</p>
    </footer>
  </div>
);

export default Index;
