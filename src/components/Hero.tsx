import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const roles = ["Full Stack Developer", "AI/ML Enthusiast", "Problem Solver"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/15 rounded-full blur-[100px]" />

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <p className="text-sm md:text-base font-medium tracking-widest uppercase text-primary mb-6">
            Welcome to my portfolio
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-8 w-full max-w-6xl">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-balance mb-6">
                Hi, I'm{" "}
                <span className="gradient-text">Gobika S</span>
              </h1>
              <div className="h-10 md:h-12 flex items-center justify-center lg:justify-start mb-6">
                <span className="text-lg md:text-2xl font-medium text-muted-foreground">
                  {displayed}
                  <span className="animate-pulse text-primary">|</span>
                </span>
              </div>
              <p className="max-w-xl mx-auto lg:mx-0 text-muted-foreground text-base md:text-lg mb-10 text-pretty leading-relaxed">
                Passionate developer building scalable web and AI solutions. Currently pursuing B.E CSE at Sri Eshwar College of Engineering.
              </p>
            </div>
            <div className="flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-primary/30 flex items-center justify-center overflow-hidden shadow-2xl relative"
              >
                {/* Replace with your actual image */}
                <img 
                  src="/profile.jpeg" 
                  alt="Gobika S - Professional Headshot"
                  className="w-full h-full object-cover"
                />
                {/* Fallback while loading */}
                <div className="absolute inset-0 bg-muted/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">GS</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link to="projects" smooth duration={600} offset={-80}>
            <button className="px-7 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 active:scale-[0.97] transition-all glow-primary">
              View Projects
            </button>
          </Link>
          <Link to="contact" smooth duration={600} offset={-80}>
            <button className="px-7 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-card active:scale-[0.97] transition-all">
              Contact Me
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex items-center justify-center gap-5 mt-10"
        >
          <a href="https://github.com/gobikasekar79" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <FiGithub size={22} />
          </a>
          <a href="https://linkedin.com/in/gobika-sekar-363b2b331" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <FiLinkedin size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
