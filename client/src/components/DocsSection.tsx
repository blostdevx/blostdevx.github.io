import { motion } from "framer-motion";
import { SiPython, SiJavascript, SiReact, SiNodedotjs } from "react-icons/si";
import { Shield, Code, Database, Globe } from "lucide-react";

export default function DocsSection() {
  const docCategories = [
    {
      icon: SiPython,
      title: "Python Mastery",
      color: "text-neon-green",
      borderColor: "border-neon-green",
      topics: [
        "• Advanced Data Structures & Algorithms",
        "• Async Programming & Concurrency",
        "• Web Scraping & Automation",
        "• Security Libraries & Frameworks",
        "• Performance Optimization Techniques"
      ]
    },
    {
      icon: SiJavascript,
      title: "JavaScript Deep Dive",
      color: "text-neon-cyan",
      borderColor: "border-neon-cyan",
      topics: [
        "• ES6+ Modern Features",
        "• Functional Programming Patterns",
        "• DOM Manipulation & Events",
        "• API Development & Integration",
        "• Testing Frameworks & TDD"
      ]
    },
    {
      icon: SiReact,
      title: "React Ecosystem",
      color: "text-neon-purple",
      borderColor: "border-neon-purple",
      topics: [
        "• Hooks & State Management",
        "• Component Architecture",
        "• Performance Optimization",
        "• Testing & Debugging",
        "• Next.js & SSR/SSG"
      ]
    },
    {
      icon: SiNodedotjs,
      title: "Node.js Backend",
      color: "text-neon-pink",
      borderColor: "border-neon-pink",
      topics: [
        "• Express.js & Fastify",
        "• Database Integration",
        "• Authentication & Security",
        "• API Design & REST/GraphQL",
        "• Microservices Architecture"
      ]
    },
    {
      icon: Shield,
      title: "Security Protocols",
      color: "text-neon-green",
      borderColor: "border-neon-green",
      topics: [
        "• Penetration Testing Methodologies",
        "• Network Security & Firewalls",
        "• Cryptography & Encryption",
        "• Incident Response Procedures",
        "• Threat Analysis & OSINT"
      ]
    },
    {
      icon: Code,
      title: "Web Technologies",
      color: "text-neon-cyan",
      borderColor: "border-neon-cyan",
      topics: [
        "• HTML5 Semantic Elements",
        "• CSS3 Advanced Features",
        "• SASS/SCSS Preprocessing",
        "• Responsive Design Patterns",
        "• Progressive Web Apps"
      ]
    },
    {
      icon: Database,
      title: "Database Systems",
      color: "text-neon-purple",
      borderColor: "border-neon-purple",
      topics: [
        "• SQL Query Optimization",
        "• NoSQL Database Design",
        "• Database Security",
        "• Backup & Recovery",
        "• Performance Tuning"
      ]
    },
    {
      icon: Globe,
      title: "DevOps & Cloud",
      color: "text-neon-pink",
      borderColor: "border-neon-pink",
      topics: [
        "• Docker & Containerization",
        "• Kubernetes Orchestration",
        "• CI/CD Pipelines",
        "• Cloud Security (AWS/Azure)",
        "• Infrastructure as Code"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
              
              <motion.button
                className={`mt-6 w-full px-4 py-2 border ${category.borderColor}/40 ${category.color} hover:bg-current/10 transition-all duration-300 rounded font-fira text-sm`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explorar Documentación
              </motion.button>
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
          <motion.button
            className="neon-border bg-transparent px-8 py-4 font-orbitron font-bold text-neon-purple hover:bg-neon-purple/10 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px currentColor" }}
            whileTap={{ scale: 0.95 }}
          >
            ACCEDER A TODA LA DOCUMENTACIÓN
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}