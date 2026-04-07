import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    setIsDark(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full bg-muted border border-border transition-all duration-300 hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-primary transition-all duration-300 transform ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      />
      <div className="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none">
        <FiSun 
          className={`w-3 h-3 text-muted-foreground transition-opacity duration-300 ${
            isDark ? "opacity-50" : "opacity-100"
          }`} 
        />
        <FiMoon 
          className={`w-3 h-3 text-muted-foreground transition-opacity duration-300 ${
            isDark ? "opacity-100" : "opacity-50"
          }`} 
        />
      </div>
    </button>
  );
};

export default ThemeSwitcher;
