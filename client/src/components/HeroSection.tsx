import { motion } from "framer-motion";
import { useTypewriter } from "../hooks/useTypewriter";

export default function HeroSection() {
  const typewriterText = useTypewriter("> Cybersecurity Researcher & Developer", 80);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl sm:text-6xl md:text-8xl font-orbitron font-black mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, type: "spring" }}
          >
            <motion.span 
              className="text-neon-cyan"
              whileHover={{ textShadow: "0 0 20px currentColor", scale: 1.05 }}
            >
              BLOST
            </motion.span>
            <motion.span 
              className="text-neon-purple"
              whileHover={{ textShadow: "0 0 20px currentColor", scale: 1.05 }}
            >
              DEV
            </motion.span>
            <motion.span 
              className="text-neon-pink"
              whileHover={{ textShadow: "0 0 20px currentColor", scale: 1.05 }}
            >
              X
            </motion.span>
          </motion.h1>

          <motion.div
            className="text-lg sm:text-xl md:text-2xl font-fira text-neon-green mb-8 typewriter-text min-h-[2.5rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {typewriterText}
          </motion.div>

          <motion.p
            className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-300 leading-relaxed px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Explorando las profundidades del código, documentando vulnerabilidades, 
            y construyendo el futuro digital con tecnologías de vanguardia.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            <motion.button
              className="neon-border bg-transparent px-8 py-4 font-orbitron font-bold text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 animate-pulse-neon"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px currentColor" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#blog')?.scrollIntoView({ behavior: 'smooth' })}
            >
              EXPLORAR MATRIZ
            </motion.button>
            <motion.button
              className="neon-border bg-transparent px-8 py-4 font-orbitron font-bold text-neon-purple hover:bg-neon-purple/10 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px currentColor" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#docs')?.scrollIntoView({ behavior: 'smooth' })}
            >
              VER PROYECTOS
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-neon-cyan opacity-50"
        animate={{ 
          y: [-20, 20, -20],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-3/4 right-1/4 w-16 h-16 border-2 border-neon-purple rotate-45 opacity-50"
        animate={{ 
          y: [-15, 15, -15],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          delay: 2,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-12 h-12 border-2 border-neon-pink opacity-50"
        animate={{ 
          y: [-10, 10, -10],
          x: [-5, 5, -5]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          delay: 4,
          ease: "easeInOut"
        }}
      />
      
      {/* Additional Interactive Elements */}
      <motion.div
        className="absolute top-1/3 right-1/5 w-6 h-6 bg-neon-green rounded-full opacity-60"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
}