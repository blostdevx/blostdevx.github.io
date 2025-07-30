import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Advanced Penetration Testing Techniques",
      description: "Explorando técnicas avanzadas de pentesting en redes corporativas modernas...",
      category: "CYBERSECURITY",
      date: "2024-01-15",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      categoryColor: "bg-neon-cyan/20 text-neon-cyan",
      hoverColor: "group-hover:text-neon-cyan"
    },
    {
      id: 2,
      title: "React Performance Optimization",
      description: "Técnicas avanzadas para optimizar aplicaciones React a nivel empresarial...",
      category: "DEVELOPMENT",
      date: "2024-01-12",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      categoryColor: "bg-neon-purple/20 text-neon-purple",
      hoverColor: "group-hover:text-neon-purple"
    },
    {
      id: 3,
      title: "Web Application Security Testing",
      description: "Metodología completa para testing de seguridad en aplicaciones web...",
      category: "ETHICAL HACKING",
      date: "2024-01-10",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      categoryColor: "bg-neon-pink/20 text-neon-pink",
      hoverColor: "group-hover:text-neon-pink"
    }
  ];

  return (
    <section id="blog" className="py-20 relative" style={{ zIndex: 10 }}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-6xl font-orbitron font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-neon-pink">NEURAL</span> <span className="text-neon-cyan">BLOG</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="holographic rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 ${post.categoryColor} text-xs font-fira rounded-full`}>
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>
                <h3 className={`text-xl font-orbitron font-bold mb-3 ${post.hoverColor} transition-colors duration-300`}>
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {post.description}
                </p>
                <motion.button
                  className={`flex items-center gap-1 ${post.hoverColor.replace('group-hover:', '')} hover:text-white transition-colors duration-300 font-medium`}
                  whileHover={{ x: 5 }}
                >
                  Leer más <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
