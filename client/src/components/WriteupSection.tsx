import { motion } from "framer-motion";
import { Flag, Bug, Shield, Trophy, Target, Zap } from "lucide-react";

export default function WriteupSection() {
  const ctfChallenges = [
    { name: "HTB - Artificial", status: "SOLVED", difficulty: "Easy", points: "20" },
    { name: "HTB - Outbound", status: "SOLVED", difficulty: "Medium", points: "30" },
    { name: "HTB - Fluffy", status: "SOLVED", difficulty: "Easy", points: "20" },
    { name: "HTB - Planning", status: "SOLVED", difficulty: "Easy", points: "20" },
    { name: "HTB - Code", status: "SOLVED", difficulty: "Easy", points: "20" },
    { name: "HTB - Cypher", status: "SOLVED", difficulty: "Medium", points: "30" },
    { name: "HTB - Dog", status: "SOLVED", difficulty: "Hard", points: "40" },
    { name: "HTB - Puppy", status: "SOLVED", difficulty: "Medium", points: "30" }
  ];

  const bugBounties = [
    { name: "Comenzando investigación en Bug Bounty", reward: "$0", severity: "Info", company: "En progreso" },
    { name: "Aprendiendo metodologías OWASP", reward: "$0", severity: "Info", company: "Estudio" },
    { name: "Practicando en laboratorios", reward: "$0", severity: "Info", company: "Preparación" }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "text-neon-green";
      case "Medium": return "text-neon-cyan";
      case "Hard": return "text-neon-purple";
      case "Expert": return "text-neon-pink";
      default: return "text-gray-400";
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Low": return "text-neon-green";
      case "Medium": return "text-neon-cyan";
      case "High": return "text-neon-purple";
      case "Critical": return "text-neon-pink";
      default: return "text-gray-400";
    }
  };

  return (
    <section id="writeups" className="py-20 relative" style={{ zIndex: 10 }}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-6xl font-orbitron font-bold text-center mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-neon-green">HACK</span> <span className="text-neon-cyan">WRITEUPS</span>
        </motion.h2>
        
        <motion.p
          className="text-center text-gray-400 mb-16 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Documentación técnica de desafíos resueltos y vulnerabilidades descubiertas
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* CTF Writeup */}
          <motion.div
            className="holographic p-8 rounded-lg hover:scale-105 transition-all duration-300 group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ boxShadow: "0 0 30px rgba(0, 255, 255, 0.2)" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Flag className="text-3xl text-neon-green" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-orbitron font-bold">CTF CHALLENGES</h3>
                <p className="text-neon-green font-fira text-sm">Capture The Flag Competitions</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Soluciones detalladas de retos de Capture The Flag, análisis de vulnerabilidades y técnicas de explotación.
            </p>
            <div className="space-y-4">
              {ctfChallenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-black/30 rounded border border-neon-green/20 hover:border-neon-green/40 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-fira text-sm">{challenge.name}</span>
                    <div className="flex items-center gap-2">
                      <Trophy size={14} className="text-neon-green" />
                      <span className="text-neon-green text-xs">{challenge.points}pts</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs ${getDifficultyColor(challenge.difficulty)}`}>
                      {challenge.difficulty}
                    </span>
                    <span className={`text-xs font-bold ${challenge.status === 'SOLVED' ? 'text-neon-green' : 'text-neon-cyan'}`}>
                      {challenge.status}
                    </span>
                  </div>
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
            whileHover={{ boxShadow: "0 0 30px rgba(255, 20, 147, 0.2)" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <Bug className="text-3xl text-neon-pink" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-orbitron font-bold">BUG BOUNTY</h3>
                <p className="text-neon-pink font-fira text-sm">Vulnerability Research</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Reportes de vulnerabilidades encontradas en programas de bug bounty, metodología y análisis técnico.
            </p>
            <div className="space-y-4">
              {bugBounties.map((bounty, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-black/30 rounded border border-neon-pink/20 hover:border-neon-pink/40 transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-fira text-sm">{bounty.name}</span>
                    <div className="flex items-center gap-2">
                      <Target size={14} className="text-neon-pink" />
                      <span className="text-neon-pink text-xs font-bold">{bounty.reward}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs ${getSeverityColor(bounty.severity)}`}>
                      {bounty.severity} Severity
                    </span>
                    <span className="text-xs text-gray-500">{bounty.company}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Statistics Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center p-6 holographic rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <Shield className="text-3xl text-neon-cyan mx-auto mb-2" />
            <div className="text-2xl font-orbitron font-bold text-neon-cyan">7</div>
            <div className="text-sm text-gray-400">CTFs Completed</div>
          </motion.div>
          
          <motion.div 
            className="text-center p-6 holographic rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <Bug className="text-3xl text-neon-pink mx-auto mb-2" />
            <div className="text-2xl font-orbitron font-bold text-neon-pink">17</div>
            <div className="text-sm text-gray-400">Vulnerabilities Found</div>
          </motion.div>
          
          <motion.div 
            className="text-center p-6 holographic rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <Trophy className="text-3xl text-neon-green mx-auto mb-2" />
            <div className="text-2xl font-orbitron font-bold text-neon-green">$0</div>
            <div className="text-sm text-gray-400">Bounty Rewards</div>
          </motion.div>
          
          <motion.div 
            className="text-center p-6 holographic rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="text-3xl text-neon-purple mx-auto mb-2" />
            <div className="text-2xl font-orbitron font-bold text-neon-purple">80</div>
            <div className="text-sm text-gray-400">Research Hours</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}