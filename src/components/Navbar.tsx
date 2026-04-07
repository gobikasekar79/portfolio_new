import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import ThemeSwitcher from "./ThemeSwitcher";

const navItems = ["about", "skills", "projects", "experience", "achievements", "contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="hero" smooth duration={600} className="cursor-pointer">
          <span className="text-xl font-bold gradient-text">Gobika S</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth
                  duration={600}
                  offset={-80}
                  spy
                  activeClass="!text-primary"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer capitalize"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeSwitcher />
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeSwitcher />
          <button className="text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 pb-4"
        >
          <ul className="flex flex-col items-center gap-4">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth
                  duration={600}
                  offset={-80}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer capitalize"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
