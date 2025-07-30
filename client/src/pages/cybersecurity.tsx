import { motion } from "framer-motion";
import { Shield, Terminal, Bug, Lock, Eye, Zap, Users, Database, Network, Code } from "lucide-react";

export default function CybersecurityPage() {
  const sections = [
    {
      id: "intro",
      title: "Introducción a la Ciberseguridad",
      icon: Shield,
      color: "neon-cyan",
      topics: [
        "Fundamentos de la seguridad informática",
        "Principios CIA (Confidencialidad, Integridad, Disponibilidad)",
        "Tipos de amenazas y vectores de ataque",
        "Marco legal y ético en ciberseguridad"
      ]
    },
    {
      id: "kali",
      title: "Kali Linux Master Guide",
      icon: Terminal,
      color: "neon-green",
      topics: [
        "Instalación y configuración avanzada de Kali",
        "Herramientas de reconocimiento: Nmap, Masscan, Shodan",
        "Análisis de vulnerabilidades: OpenVAS, Nessus, Nikto",
        "Explotación: Metasploit, Exploit-DB, Custom Exploits",
        "Post-explotación: Meterpreter, Empire, Cobalt Strike"
      ]
    },
    {
      id: "defensive",
      title: "Ciberseguridad Defensiva",
      icon: Shield,
      color: "neon-purple",
      topics: [
        "Implementación de SIEM (Security Information and Event Management)",
        "Análisis forense digital y respuesta a incidentes",
        "Hardening de sistemas y aplicaciones",
        "Configuración de firewalls y sistemas IDS/IPS",
        "Threat Hunting y análisis de IOCs"
      ]
    },
    {
      id: "offensive",
      title: "Ethical Hacking Avanzado",
      icon: Bug,
      color: "neon-pink",
      topics: [
        "Metodologías de penetration testing (OWASP, PTES)",
        "Web Application Security Testing",
        "Red Team Operations y adversary simulation",
        "Social Engineering y phishing avanzado",
        "Wireless Security y ataques a redes inalámbricas"
      ]
    },
    {
      id: "crypto",
      title: "Criptografía y PKI",
      icon: Lock,
      color: "neon-cyan",
      topics: [
        "Algoritmos de cifrado simétrico y asimétrico",
        "Funciones hash y firma digital",
        "Implementación de PKI (Public Key Infrastructure)",
        "Criptoanálisis y ataques a sistemas criptográficos",
        "Blockchain y criptografía aplicada"
      ]
    },
    {
      id: "malware",
      title: "Análisis de Malware",
      icon: Eye,
      color: "neon-green",
      topics: [
        "Análisis estático vs dinámico de malware",
        "Ingeniería inversa con herramientas como IDA Pro",
        "Sandboxing y entornos de análisis seguros",
        "Detección de técnicas de evasión y anti-análisis",
        "Desarrollo de signatures y reglas YARA"
      ]
    }
  ];

  const tools = [
    { name: "Kali Linux", category: "OS", description: "Distribución Linux especializada en ciberseguridad" },
    { name: "Metasploit", category: "Exploitation", description: "Framework de explotación de vulnerabilidades" },
    { name: "Burp Suite", category: "Web Security", description: "Plataforma integrada para testing de aplicaciones web" },
    { name: "Wireshark", category: "Network Analysis", description: "Analizador de protocolos de red" },
    { name: "Nmap", category: "Reconnaissance", description: "Escáner de puertos y descubrimiento de servicios" },
    { name: "John the Ripper", category: "Password Cracking", description: "Herramienta de cracking de contraseñas" },
    { name: "Volatility", category: "Forensics", description: "Framework de análisis de memoria RAM" },
    { name: "OWASP ZAP", category: "Web Security", description: "Proxy de seguridad para aplicaciones web" }
  ];

  return (
    <div className="min-h-screen bg-deep-black text-white">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-orbitron font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="text-neon-cyan">CYBER</span>
              <span className="text-neon-purple">SECURITY</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Guía completa de ciberseguridad ofensiva y defensiva con Kali Linux
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <span className="px-4 py-2 bg-neon-cyan/20 text-neon-cyan rounded-full border border-neon-cyan/40 text-sm">
                Kali Linux
              </span>
              <span className="px-4 py-2 bg-neon-purple/20 text-neon-purple rounded-full border border-neon-purple/40 text-sm">
                Ethical Hacking
              </span>
              <span className="px-4 py-2 bg-neon-pink/20 text-neon-pink rounded-full border border-neon-pink/40 text-sm">
                Pentesting
              </span>
              <span className="px-4 py-2 bg-neon-green/20 text-neon-green rounded-full border border-neon-green/40 text-sm">
                Threat Analysis
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-orbitron font-bold text-center mb-12 text-neon-cyan"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            CONTENIDO DEL CURSO
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                className={`holographic p-6 rounded-lg hover:scale-105 transition-all duration-300 border-${section.color}/30 cursor-pointer`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  boxShadow: `0 0 30px rgba(${section.color === 'neon-cyan' ? '0, 255, 255' : section.color === 'neon-green' ? '50, 205, 50' : section.color === 'neon-purple' ? '138, 43, 226' : '255, 20, 147'}, 0.3)`
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                  >
                    <section.icon className={`text-2xl text-${section.color}`} />
                  </motion.div>
                  <h3 className={`font-orbitron font-bold text-${section.color}`}>{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.topics.slice(0, 3).map((topic, topicIndex) => (
                    <motion.li
                      key={topicIndex}
                      className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      • {topic}
                    </motion.li>
                  ))}
                  {section.topics.length > 3 && (
                    <li className="text-gray-500 text-xs">
                      +{section.topics.length - 3} más...
                    </li>
                  )}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-orbitron font-bold text-center mb-12 text-neon-green"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            HERRAMIENTAS PRINCIPALES
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="holographic p-4 rounded-lg hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <h4 className="font-orbitron font-bold text-neon-cyan mb-2">{tool.name}</h4>
                <span className="text-xs text-neon-purple bg-neon-purple/10 px-2 py-1 rounded-full">
                  {tool.category}
                </span>
                <p className="text-gray-400 text-sm mt-2">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content Preview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-orbitron font-bold text-center mb-12 text-neon-pink"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            PREVIEW DEL CONTENIDO
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="holographic p-8 rounded-lg mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-orbitron font-bold text-neon-cyan mb-6">
                Capítulo 1: Configuración Avanzada de Kali Linux
              </h3>
              <div className="space-y-4 text-gray-300">
                <h4 className="text-lg font-bold text-neon-green">1.1 Instalación y Personalización</h4>
                <div className="bg-black/30 p-4 rounded border-l-4 border-neon-cyan">
                  <code className="text-neon-cyan">
                    # Actualización completa del sistema<br/>
                    sudo apt update && sudo apt full-upgrade -y<br/>
                    <br/>
                    # Instalación de herramientas adicionales<br/>
                    sudo apt install -y kali-linux-large
                  </code>
                </div>
                <p>
                  Kali Linux es una distribución especializada en ciberseguridad que incluye más de 600 herramientas preinstaladas. 
                  En esta sección aprenderás a configurar un entorno de trabajo optimizado para penetration testing y análisis de seguridad.
                </p>
                
                <h4 className="text-lg font-bold text-neon-purple">1.2 Configuración de Entorno Virtual</h4>
                <p>
                  Configuraremos VirtualBox/VMware para crear laboratorios seguros de testing, incluyendo:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li>Configuración de redes aisladas</li>
                  <li>Snapshots para restauración rápida</li>
                  <li>Configuración de máquinas víctima (Metasploitable, DVWA)</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="neon-border bg-transparent px-8 py-4 font-orbitron font-bold text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px currentColor" }}
                whileTap={{ scale: 0.95 }}
              >
                ACCEDER AL CURSO COMPLETO
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}