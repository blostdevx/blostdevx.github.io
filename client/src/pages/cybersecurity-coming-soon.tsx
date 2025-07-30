import React from "react";
import { motion } from "framer-motion";
import { Shield, Home, ArrowLeft } from "lucide-react";

export default function CybersecurityComingSoon() {
  return (
    <div className="min-h-screen bg-deep-black text-white">
      <div className="flex items-center justify-center min-h-screen px-4">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Icon */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Shield className="text-8xl md:text-9xl text-neon-cyan mx-auto mb-6" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-bold mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.span
              className="text-neon-cyan"
              animate={{
                textShadow: [
                  "0 0 20px #00FFFF, 0 0 40px #00FFFF, 0 0 60px #00FFFF",
                  "0 0 30px #00FFFF, 0 0 60px #00FFFF, 0 0 90px #00FFFF",
                  "0 0 20px #00FFFF, 0 0 40px #00FFFF, 0 0 60px #00FFFF"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              PRÓXIMAMENTE
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-4xl font-orbitron font-bold text-neon-purple mb-4">
              Curso de Ciberseguridad
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Estamos preparando un curso completo de ciberseguridad que incluirá:
            </p>
          </motion.div>

          {/* Feature List */}
          <motion.div
            className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="bg-gray-900/50 p-6 rounded-lg border border-neon-cyan/20">
              <h3 className="text-xl font-orbitron text-neon-cyan mb-3">Seguridad Ofensiva</h3>
              <ul className="text-gray-300 space-y-2 text-left">
                <li>• Guía completa de Kali Linux</li>
                <li>• Técnicas de Penetration Testing</li>
                <li>• Vulnerability Assessment</li>
                <li>• Red Team Operations</li>
                <li>• Ethical Hacking avanzado</li>
              </ul>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-lg border border-neon-purple/20">
              <h3 className="text-xl font-orbitron text-neon-purple mb-3">Seguridad Defensiva</h3>
              <ul className="text-gray-300 space-y-2 text-left">
                <li>• Security Monitoring</li>
                <li>• Incident Response</li>
                <li>• Digital Forensics</li>
                <li>• Threat Hunting</li>
                <li>• Network Defense</li>
              </ul>
            </div>
          </motion.div>

          {/* Progress Indicator */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="bg-gray-900/50 p-6 rounded-lg border border-neon-pink/20 max-w-md mx-auto">
              <h3 className="text-lg font-orbitron text-neon-pink mb-3">Estado del Desarrollo</h3>
              <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                <motion.div
                  className="bg-gradient-to-r from-neon-cyan to-neon-purple h-3 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "75%" }}
                  transition={{ delay: 1.5, duration: 2 }}
                ></motion.div>
              </div>
              <p className="text-sm text-gray-400">75% Completado</p>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <motion.a
              href="/"
              className="neon-border bg-transparent px-8 py-4 font-orbitron font-bold text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 flex items-center gap-3 justify-center"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px currentColor" }}
              whileTap={{ scale: 0.95 }}
            >
              <Home size={20} />
              Volver al Inicio
            </motion.a>
            
            <motion.a
              href="/content"
              className="neon-border bg-transparent px-8 py-4 font-orbitron font-bold text-neon-purple hover:bg-neon-purple/10 transition-all duration-300 flex items-center gap-3 justify-center"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px currentColor" }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft size={20} />
              Ver Contenido Disponible
            </motion.a>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <p className="text-sm text-gray-500">
              Mientras tanto, puedes explorar nuestro{" "}
              <a href="/git-tutorial" className="text-neon-green hover:text-white transition-colors">
                curso completo de Git
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}