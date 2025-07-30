import { motion } from "framer-motion";
import { Flag, Bug } from "lucide-react";

export default function WriteupSection() {
  const ctfChallenges = [
    { name: "PicoCTF 2024 - Binary Exploitation", status: "SOLVED" },
    { name: "HackTheBox - Web Challenges", status: "SOLVED" },
    { name: "TryHackMe - Cryptography", status: "SOLVED" }
  ];

  const bugBounties = [
    { name: "XSS in Major Platform", reward: "$500" },
    { name: "SQL Injection Discovery", reward: "$750" },
    { name: "Authentication Bypass", reward: "$1200" }
  ];

  return (
    <section id="writeups" className="py-20 relative" style={{ zIndex: 10 }}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-6xl font-orbitron font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-neon-green">HACK</span> <span className="text-neon-cyan">WRITEUPS</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* CTF Writeup */}
          <motion.div
            className="holographic p-8 rounded-lg hover:scale-105 transition-all duration-300 group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Flag className="text-2xl text-neon-green" />
              <h3 className="text-2xl font-orbitron font-bold">CTF CHALLENGES</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Soluciones detalladas de retos de Capture The Flag, análisis de vulnerabilidades y técnicas de explotación.
            </p>
            <div className="space-y-3">
              {ctfChallenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between p-3 bg-black/30 rounded"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="font-fira">{challenge.name}</span>
                  <span className="text-neon-green text-sm">{challenge.status}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bug Bounty */}
          <motion.div
            className="holographic p-8 rounded-lg hover:scale-105 transition-all duration-300 group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Bug className="text-2xl text-neon-pink" />
              <h3 className="text-2xl font-orbitron font-bold">BUG BOUNTY</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Reportes de vulnerabilidades encontradas en programas de bug bounty, metodología y análisis técnico.
            </p>
            <div className="space-y-3">
              {bugBounties.map((bounty, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between p-3 bg-black/30 rounded"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="font-fira">{bounty.name}</span>
                  <span className="text-neon-pink text-sm">{bounty.reward}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
