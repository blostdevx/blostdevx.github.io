import { motion } from "framer-motion";
import { ArrowRight, Calendar, Tag } from "lucide-react";

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Advanced Penetration Testing Techniques",
      description: "Explorando técnicas avanzadas de pentesting en redes corporativas modernas y metodologías de hacking ético.",
      category: "CYBERSECURITY",
      date: "2024-01-15",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      categoryColor: "bg-neon-cyan/20 text-neon-cyan border-neon-cyan",
      hoverColor: "group-hover:text-neon-cyan"
    },
    {
      id: 2,
      title: "React Performance Optimization",
      description: "Técnicas avanzadas para optimizar aplicaciones React a nivel empresarial con Hooks y patrones modernos.",
      category: "DEVELOPMENT",
      date: "2024-01-12",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      categoryColor: "bg-neon-purple/20 text-neon-purple border-neon-purple",
      hoverColor: "group-hover:text-neon-purple"
    },
    {
      id: 3,
      title: "Web Application Security Testing",
      description: "Metodología completa para testing de seguridad en aplicaciones web y detección de vulnerabilidades.",
      category: "ETHICAL HACKING",
      date: "2024-01-10",
      readTime: "15 min",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      categoryColor: "bg-neon-pink/20 text-neon-pink border-neon-pink",
      hoverColor: "group-hover:text-neon-pink"
    },
    {
      id: 4,
      title: "JavaScript Security Best Practices",
      description: "Guía completa de seguridad en JavaScript: prevención de XSS, CSRF y otras vulnerabilidades comunes.",
      category: "SECURITY",
      date: "2024-01-08",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      categoryColor: "bg-neon-green/20 text-neon-green border-neon-green",
      hoverColor: "group-hover:text-neon-green"
    },
    {
      id: 5,
      title: "Network Forensics & Analysis",
      description: "Técnicas de análisis forense de redes, captura de tráfico y investigación de incidentes de seguridad.",
      category: "FORENSICS",
      date: "2024-01-05",
      readTime: "18 min",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      categoryColor: "bg-electric-blue/20 text-electric-blue border-electric-blue",
      hoverColor: "group-hover:text-electric-blue"
    },
    {
      id: 6,
      title: "Cloud Security Architecture",
      description: "Diseño e implementación de arquitecturas seguras en la nube con AWS, Azure y mejores prácticas.",
      category: "CLOUD SECURITY",
      date: "2024-01-02",
      readTime: "14 min",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      categoryColor: "bg-neon-cyan/20 text-neon-cyan border-neon-cyan",
      hoverColor: "group-hover:text-neon-cyan"
    }
  ];

  return (
    <section id="blog" className="py-20 relative" style={{ zIndex: 10 }}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-6xl font-orbitron font-bold text-center mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-neon-pink">NEURAL</span> <span className="text-neon-cyan">BLOG</span>
        </motion.h2>
        
        <motion.p
          className="text-center text-gray-400 mb-16 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Explorando las fronteras de la ciberseguridad, desarrollo y tecnologías emergentes
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="holographic rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 255, 255, 0.2)"
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/70 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 ${post.categoryColor} text-xs font-fira rounded-full border`}>
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className={`text-xl font-orbitron font-bold mb-3 ${post.hoverColor} transition-colors duration-300`}>
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {post.description}
                </p>
                <motion.button
                  className={`flex items-center gap-2 ${post.hoverColor.replace('group-hover:', '')} hover:text-white transition-colors duration-300 font-medium`}
                  whileHover={{ x: 5 }}
                >
                  Leer artículo <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="neon-border bg-transparent px-8 py-4 font-orbitron font-bold text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px currentColor" }}
            whileTap={{ scale: 0.95 }}
          >
            VER TODOS LOS ARTÍCULOS
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}