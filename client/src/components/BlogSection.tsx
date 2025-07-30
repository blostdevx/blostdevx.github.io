import { motion } from "framer-motion";
import { ArrowRight, Calendar, Tag } from "lucide-react";

export default function BlogSection() {
  const blogPosts = [];

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
        
        <motion.div
          className="text-center py-20"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-6xl md:text-8xl font-orbitron font-bold mb-8 animate-neon-text-flicker"
            animate={{
              textShadow: [
                "0 0 20px #00FFFF, 0 0 40px #00FFFF, 0 0 60px #00FFFF",
                "0 0 10px #FF1493, 0 0 20px #FF1493, 0 0 40px #FF1493",
                "0 0 20px #8A2BE2, 0 0 40px #8A2BE2, 0 0 60px #8A2BE2",
                "0 0 20px #00FFFF, 0 0 40px #00FFFF, 0 0 60px #00FFFF",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            PRÓXIMAMENTE...
          </motion.div>
          <motion.p
            className="text-xl text-gray-400 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            El contenido del blog estará disponible pronto
          </motion.p>
        </motion.div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/content"
            className="inline-block neon-border bg-transparent px-8 py-4 font-orbitron font-bold text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px currentColor" }}
            whileTap={{ scale: 0.95 }}
          >
            EXPLORAR TODO EL CONTENIDO
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}