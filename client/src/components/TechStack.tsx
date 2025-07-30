import { motion } from "framer-motion";
import { SiPython, SiReact, SiNodedotjs, SiVuedotjs, SiJavascript, SiHtml5, SiCss3, SiGit, SiIonic, SiAngular, SiSass } from "react-icons/si";

export default function TechStack() {
  const technologies = [
    {
      icon: SiPython,
      name: "PYTHON",
      description: "Backend Development, AI, Automation",
      color: "text-neon-green",
      animation: "animate-bounce-glow"
    },
    {
      icon: SiReact,
      name: "REACT",
      description: "Frontend Development, SPA",
      color: "text-neon-cyan",
      animation: "animate-spin-glow"
    },
    {
      icon: SiNodedotjs,
      name: "NODE.JS",
      description: "Server-side JavaScript, APIs",
      color: "text-neon-green",
      animation: "animate-pulse-neon"
    },
    {
      icon: SiVuedotjs,
      name: "VUE.JS",
      description: "Progressive Framework",
      color: "text-neon-purple",
      animation: "animate-bounce-glow"
    },
    {
      icon: SiJavascript,
      name: "JAVASCRIPT",
      description: "Dynamic Programming Language",
      color: "text-neon-cyan",
      animation: "animate-pulse-neon"
    },
    {
      icon: SiAngular,
      name: "ANGULAR.JS",
      description: "Full Framework Solution",
      color: "text-neon-pink",
      animation: "animate-spin-glow"
    },
    {
      icon: SiHtml5,
      name: "HTML5",
      description: "Markup & Structure",
      color: "text-neon-green",
      animation: "animate-bounce-glow"
    },
    {
      icon: SiSass,
      name: "SASS",
      description: "Advanced CSS Preprocessing",
      color: "text-neon-purple",
      animation: "animate-pulse-neon"
    },
    {
      icon: SiCss3,
      name: "CSS3",
      description: "Styling & Animation",
      color: "text-neon-cyan",
      animation: "animate-bounce-glow"
    },
    {
      icon: SiGit,
      name: "GIT",
      description: "Version Control System",
      color: "text-neon-pink",
      animation: "animate-spin-glow"
    },
    {
      icon: SiIonic,
      name: "IONIC",
      description: "Cross-platform Mobile Apps",
      color: "text-neon-green",
      animation: "animate-pulse-neon"
    }
  ];

  return (
    <section className="py-20 relative" style={{ zIndex: 10 }}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-6xl font-orbitron font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-neon-green">TECH</span> <span className="text-neon-cyan">ARSENAL</span>
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="holographic p-6 rounded-lg hover:scale-105 transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 255, 255, 0.3)"
              }}
            >
              <div className="text-center">
                <motion.div
                  whileHover={{ 
                    scale: 1.2,
                    filter: "drop-shadow(0 0 15px currentColor)"
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <tech.icon 
                    className={`text-4xl ${tech.color} mb-4 mx-auto group-hover:${tech.animation}`} 
                  />
                </motion.div>
                <h3 className="text-lg font-orbitron font-bold mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}