import { motion } from "framer-motion";

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className="text-center mb-14"
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">{title}</h2>
    {subtitle && <p className="text-muted-foreground max-w-lg mx-auto text-pretty">{subtitle}</p>}
  </motion.div>
);

export default SectionHeading;
