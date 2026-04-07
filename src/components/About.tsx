import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FiCode, FiCpu, FiZap } from "react-icons/fi";

const interests = [
  { icon: <FiCode size={22} />, label: "Web Development", desc: "Building full-stack applications with modern frameworks" },
  { icon: <FiCpu size={22} />, label: "Machine Learning", desc: "Exploring predictive models and deep learning architectures" },
  { icon: <FiZap size={22} />, label: "Problem Solving", desc: "1200+ problems solved across competitive coding platforms" },
];

const About = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <SectionHeading title="About Me" />
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30 flex items-center justify-center overflow-hidden shadow-lg">
            <div className="w-full h-full bg-muted/60 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">GS</span>
            </div>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted-foreground text-base md:text-lg text-pretty leading-relaxed"
        >
          I'm a Computer Science Engineering student with a strong foundation in full-stack development and a growing passion for AI/ML. I love turning complex problems into elegant, user-friendly solutions. With a CGPA of 8.22, I balance academics with hands-on project building and competitive programming.
        </motion.p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {interests.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-6 text-center group hover:border-primary/40 transition-colors"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              {item.icon}
            </div>
            <h3 className="font-semibold mb-2">{item.label}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
