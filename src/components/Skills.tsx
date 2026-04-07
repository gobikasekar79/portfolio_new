import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const categories = [
  { title: "Programming", skills: ["C", "C++", "Python", "Java"] },
  { title: "Web Development", skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js"] },
  { title: "Database", skills: ["MongoDB"] },
  { title: "Tools & Platforms", skills: ["Git", "GitHub", "VS Code", "Canva", "Jupyter Notebook", "PowerPoint"] },
];

const Skills = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <SectionHeading title="Skills" subtitle="Technologies and tools I work with" />
      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: ci * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-6"
          >
            <h3 className="font-semibold text-sm uppercase tracking-wider text-primary mb-4">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 text-sm rounded-md bg-muted/60 text-foreground border border-border/50 hover:border-primary/40 hover:bg-primary/10 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
