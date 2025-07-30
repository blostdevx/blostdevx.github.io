import { motion } from "framer-motion";
import { SiGithub, SiTwitter, SiLinkedin } from "react-icons/si";

export default function ContactSection() {
  const socialLinks = [
    {
      icon: SiGithub,
      label: "GITHUB",
      color: "text-neon-cyan",
      borderColor: "border-neon-cyan",
      href: "https://github.com/blostdevx"
    },
    {
      icon: SiTwitter,
      label: "TWITTER",
      color: "text-neon-purple",
      borderColor: "border-neon-purple",
      href: "https://twitter.com/blostdevx"
    },
    {
      icon: SiLinkedin,
      label: "LINKEDIN",
      color: "text-neon-pink",
      borderColor: "border-neon-pink",
      href: "https://linkedin.com/in/blostdevx"
    }
  ];

  return (
    <section id="contact" className="py-20 relative" style={{ zIndex: 10 }}>
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-orbitron font-bold mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-neon-cyan">CONNECT</span>{" "}
          <span className="text-neon-green">TO</span>{" "}
          <span className="text-neon-purple">MATRIX</span>
        </motion.h2>

        <motion.p
          className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          ¿Listo para colaborar en el futuro digital? Conecta conmigo para proyectos, 
          consultas o simplemente para hablar de tecnología.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`neon-border bg-transparent px-8 py-4 font-orbitron font-bold ${link.color} hover:bg-current/10 transition-all duration-300 flex items-center gap-3`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + (index * 0.1) }}
              viewport={{ once: true }}
            >
              <link.icon size={20} />
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
