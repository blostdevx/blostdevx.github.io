import { motion } from "framer-motion";
import { SiPython, SiJavascript, SiReact, SiNodedotjs } from "react-icons/si";
import { Shield, Code, Database, Globe } from "lucide-react";

export default function DocsSection() {

  const docCategories = [
    {
      icon: Shield,
      title: "Cybersecurity",
      color: "text-neon-cyan",
      borderColor: "border-neon-cyan",
      href: "/cybersecurity",
      topics: [
        "• Kali Linux Master Guide",
        "• Penetration Testing Methodologies",
        "• Network Security & Firewalls",
        "• Ethical Hacking Techniques",
        "• Malware Analysis & Forensics"
      ]
    },
    {
      icon: Database,
      title: "Git & Version Control",
      color: "text-neon-green",
      borderColor: "border-neon-green",
      href: "/git-tutorial",
      topics: [
        "• Git Fundamentals & Best Practices",
        "• Branching Strategies & Workflows",
        "• Collaboration & Pull Requests",
        "• Advanced Git Techniques",
        "• Repository Management"
      ]
    }
  ];

  return (
    <section id="docs" className="py-20 relative" style={{ zIndex: 10 }}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-6xl font-orbitron font-bold text-center mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-neon-purple">CODE</span> <span className="text-neon-cyan">DOCS</span>
        </motion.h2>
        
        <motion.p
          className="text-center text-gray-400 mb-16 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Documentación técnica completa sobre lenguajes, frameworks y metodologías de desarrollo
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {docCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className={`holographic p-6 rounded-lg hover:scale-105 transition-all duration-300 group cursor-pointer border ${category.borderColor}/20 hover:${category.borderColor}/40`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 255, 255, 0.2)"
              }}
            >
              <div className="text-center mb-6">
                <motion.div
                  whileHover={{ 
                    scale: 1.2,
                    filter: "drop-shadow(0 0 15px currentColor)"
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <category.icon className={`text-4xl ${category.color} mb-3 mx-auto group-hover:animate-pulse`} />
                </motion.div>
                <h3 className={`text-xl font-orbitron font-bold ${category.color}`}>{category.title}</h3>
              </div>
              <ul className="space-y-3 text-gray-400">
                {category.topics.map((topic, topicIndex) => (
                  <motion.li
                    key={topicIndex}
                    className="text-sm hover:text-white transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (topicIndex * 0.05) }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    {topic}
                  </motion.li>
                ))}
              </ul>
              
              <motion.a
                href={category.href}
                className={`mt-6 w-full px-4 py-2 border ${category.borderColor}/40 ${category.color} hover:bg-current/10 transition-all duration-300 rounded font-fira text-sm block text-center`}
              >
                Explorar Documentación
              </motion.a>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/content"
            className="inline-block neon-border bg-transparent px-8 py-4 font-orbitron font-bold text-neon-purple hover:bg-neon-purple/10 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px currentColor" }}
            whileTap={{ scale: 0.95 }}
          >
            EXPLORAR TODA LA DOCUMENTACIÓN
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}