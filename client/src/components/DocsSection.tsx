import { motion } from "framer-motion";
import { SiPython, SiJavascript } from "react-icons/si";
import { Shield } from "lucide-react";

export default function DocsSection() {
  const docCategories = [
    {
      icon: SiPython,
      title: "Python Mastery",
      color: "text-neon-green",
      topics: [
        "• Advanced Data Structures",
        "• Async Programming",
        "• Web Scraping Techniques",
        "• Security Libraries",
        "• Performance Optimization"
      ]
    },
    {
      icon: SiJavascript,
      title: "JavaScript Deep Dive",
      color: "text-neon-cyan",
      topics: [
        "• ES6+ Features",
        "• Functional Programming",
        "• DOM Manipulation",
        "• API Development",
        "• Testing Frameworks"
      ]
    },
    {
      icon: Shield,
      title: "Security Protocols",
      color: "text-neon-pink",
      topics: [
        "• Penetration Testing",
        "• Network Security",
        "• Cryptography",
        "• Incident Response",
        "• Threat Analysis"
      ]
    }
  ];

  return (
    <section id="docs" className="py-20 relative" style={{ zIndex: 10 }}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-6xl font-orbitron font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-neon-purple">CODE</span> <span className="text-neon-cyan">DOCS</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {docCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="holographic p-6 rounded-lg hover:scale-105 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-4">
                <category.icon className={`text-4xl ${category.color} mb-3 mx-auto group-hover:animate-pulse`} />
                <h3 className="text-xl font-orbitron font-bold">{category.title}</h3>
              </div>
              <ul className="space-y-2 text-gray-400">
                {category.topics.map((topic, topicIndex) => (
                  <motion.li
                    key={topicIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.2) + (topicIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    {topic}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
