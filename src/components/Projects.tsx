import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "HealthyHen",
    description: "AI-powered poultry disease prediction system that helps farmers identify diseases early using image classification.",
    stack: ["TensorFlow", "Flask", "Python", "CNN"],
    github: "https://github.com/gobikasekar07/poultrydiseaseprediction",
  },
  {
    title: "RETENT",
    description: "Comprehensive landlord-tenant management system with real-time chat, payment tracking, and digital agreements.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/gobikasekar79/retent",
  },
  {
    title: "SnapSaga",
    description: "Photography portfolio platform with album management, REST APIs, and cloud-deployed architecture.",
    stack: ["Node.js", "Express.js", "MongoDB", "REST API"],
    github: "https://github.com/gobikasekar79/snapsaga_frontend",
  },
];

const Projects = () => (
  <section id="projects" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <SectionHeading title="Projects" subtitle="Some things I've built" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-6 flex flex-col group hover:border-primary/40 transition-all hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-lg font-bold">
                {p.title[0]}
              </div>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <FiGithub size={18} />
              </a>
            </div>
            <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 flex-1 text-pretty">{p.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.stack.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-medium">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
