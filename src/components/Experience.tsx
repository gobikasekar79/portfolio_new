import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const Experience = () => (
  <section id="experience" className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <SectionHeading title="Experience" />
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="glass-card p-6 md:p-8 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full" />
        <div className="pl-6">
          <p className="text-xs uppercase tracking-wider text-primary font-medium mb-1">Internship</p>
          <h3 className="text-xl font-semibold mb-1">Better Tomorrow Institute</h3>
          <p className="text-sm text-muted-foreground mb-4">Web Development Intern</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              Built a photography portfolio platform with album management
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              Developed REST APIs using Node.js, Express, and MongoDB
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              Deployed application on cloud infrastructure
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Experience;
