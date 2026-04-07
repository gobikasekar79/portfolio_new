import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FiAward, FiBook } from "react-icons/fi";
import { SiLeetcode, SiHackerrank, SiCodechef } from "react-icons/si";

const achievements = [
  { icon: <FiAward />, text: "2nd Place — CoderPENGAL Coding Contest" },
  { icon: <FiAward />, text: "2nd Place — Createathon" },
  { icon: <FiAward />, text: "Finalist — SELF Hackathon" },
];

const codingProfiles = [
  { 
    icon: <SiLeetcode />, 
    name: "LeetCode", 
    stat: "100+ problems", 
    url: "https://leetcode.com/u/gobika_sekar/",
    color: "bg-orange-500/10 hover:bg-orange-500/20 border-orange-500/30 hover:border-orange-500/50"
  },
  { 
    icon: <SiHackerrank />, 
    name: "HackerRank", 
    stat: "Multiple badges", 
    url: "https://www.hackerrank.com/profile/s_gobika2024cse",
    color: "bg-green-500/10 hover:bg-green-500/20 border-green-500/30 hover:border-green-500/50"
  },
  { 
    icon: <SiCodechef />, 
    name: "CodeChef", 
    stat: "Active competitor", 
    url: "https://www.codechef.com/users/gobika_sekar",
    color: "bg-purple-500/10 hover:bg-purple-500/20 border-purple-500/30 hover:border-purple-500/50"
  },
  { 
    icon: <FiCode />, 
    name: "SkillRack", 
    stat: "1200+ problems · 400+ bronzes", 
    url: "https://www.skillrack.com/faces/resume.xhtml?id=514916&key=55146d7701a1e7537d219d961c6864f6cd1f3f18",
    color: "bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/30 hover:border-blue-500/50"
  },
];

const certifications = [
  {
    name: "Java Programmer",
    organization: "Oracle",
    url: "/certificates/java-programmer.jpeg",
    color: "bg-red-500/10 hover:bg-red-500/20 border-red-500/30 hover:border-red-500/50"
  },
  {
    name: "Data Structures (C/C++)",
    organization: "NPTEL",
    url: "/certificates/data-structures.pdf",
    color: "bg-green-500/10 hover:bg-green-500/20 border-green-500/30 hover:border-green-500/50"
  },
  {
    name: "Database Management Systems",
    organization: "Sri Eshwar College",
    url: "/certificates/database-management.pdf",
    color: "bg-purple-500/10 hover:bg-purple-500/20 border-purple-500/30 hover:border-purple-500/50"
  },
];

import { FiCode } from "react-icons/fi";

const Achievements = () => (
  <section id="achievements" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <SectionHeading title="Achievements & Profiles" />

      {/* Achievements */}
      <div className="grid md:grid-cols-3 gap-4 mb-12">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-5 flex items-start gap-3 hover:border-primary/40 transition-colors"
          >
            <span className="text-primary text-lg mt-0.5">{a.icon}</span>
            <span className="text-sm font-medium">{a.text}</span>
          </motion.div>
        ))}
      </div>

      {/* Coding Profiles */}
      <h3 className="text-xl font-semibold mb-6 text-center">Coding Profiles</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {codingProfiles.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className={`glass-card p-4 text-center transition-all duration-300 hover:scale-105 cursor-pointer border ${p.color}`}
          >
            <div className="text-2xl text-primary mx-auto mb-2 flex justify-center">{p.icon}</div>
            <p className="text-sm font-semibold">{p.name}</p>
            <p className="text-xs text-muted-foreground mt-1">{p.stat}</p>
          </motion.a>
        ))}
      </div>

      {/* Certifications */}
      <h3 className="text-xl font-semibold mb-6 text-center">Certifications</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`glass-card p-5 transition-all duration-300 border ${cert.color}`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <FiBook className="text-primary" size={16} />
                <h4 className="font-semibold text-sm">{cert.name}</h4>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-4">{cert.organization}</p>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              View Certificate
              <FiBook size={12} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
