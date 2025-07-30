import { motion } from "framer-motion";
import { SiIonic, SiAngular, SiHtml5, SiSass } from "react-icons/si";
import { Building2, Calendar, MapPin, Award } from "lucide-react";
import cronAppLogo from "@assets/icon-only_1753852680078.png";

export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      company: "CITT DuocUC",
      position: "Ayudante & Líder de Equipos en Ciberseguridad",
      period: "2024 - Presente",
      location: "Chile",
      type: "ACTUAL",
      description: "Ayudantía y liderazgo de equipos de ciberseguridad. Desarrollo de proyectos de investigación, mentoring a estudiantes y participación en competencias CTF. Enfoque futuro en especialización en ciberseguridad.",
      technologies: ["Python", "Kali Linux", "Metasploit", "Burp Suite", "Wireshark"],
      color: "neon-cyan",
      isActive: true
    },
    {
      id: 2,
      company: "CronApp",
      position: "Desarrollador Frontend",
      period: "2023 - 2024",
      location: "Chile",
      type: "EXPERIENCIA",
      description: "Desarrollo de aplicación móvil de gestión médica que abarca múltiples hospitales y centros médicos en Chile. Implementación de interfaces intuitivas y sistemas de gestión de pacientes.",
      technologies: ["Ionic", "Angular.js", "HTML5", "Sass", "TypeScript"],
      color: "neon-pink",
      logo: cronAppLogo,
      isActive: false
    }
  ];

  const certifications = [
    {
      name: "CCST Cybersecurity",
      issuer: "Cisco",
      date: "2024",
      color: "neon-green",
      icon: Award
    },
    {
      name: "CCST Networking",
      issuer: "Cisco", 
      date: "2024",
      color: "neon-purple",
      icon: Award
    }
  ];

  const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case "ionic": return SiIonic;
      case "angular.js": return SiAngular;
      case "html5": return SiHtml5;
      case "sass": return SiSass;
      default: return null;
    }
  };

  return (
    <section id="experience" className="py-20 relative" style={{ zIndex: 10 }}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-6xl font-orbitron font-bold text-center mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-neon-green">WORK</span> <span className="text-neon-cyan">EXPERIENCE</span>
        </motion.h2>
        
        <motion.p
          className="text-center text-gray-400 mb-16 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Trayectoria profesional en desarrollo de software y ciberseguridad
        </motion.p>

        {/* Experience Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`relative mb-12 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-8 md:ml-auto md:w-1/2' : 'md:text-left md:pl-8 md:mr-auto md:w-1/2'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`absolute top-4 -left-4 md:left-auto ${index % 2 === 0 ? 'md:-right-4' : 'md:-left-4'} md:left-1/2 md:-translate-x-1/2 md:transform-none w-8 h-8 bg-${exp.color} rounded-full border-4 border-deep-black flex items-center justify-center`}>
                <div className={`w-3 h-3 bg-${exp.color} rounded-full animate-pulse`}></div>
              </div>
              
              <motion.div
                className={`holographic p-6 rounded-lg hover:scale-105 transition-all duration-300 border-${exp.color}/30`}
                whileHover={{ 
                  boxShadow: `0 0 30px rgba(${exp.color === 'neon-cyan' ? '0, 255, 255' : exp.color === 'neon-pink' ? '255, 20, 147' : '50, 205, 50'}, 0.3)`
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  {exp.logo && (
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 rounded-lg overflow-hidden"
                    >
                      <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                    </motion.div>
                  )}
                  <div>
                    <h3 className={`text-xl font-orbitron font-bold text-${exp.color}`}>{exp.company}</h3>
                    <p className="text-white font-medium">{exp.position}</p>
                  </div>
                  {exp.isActive && (
                    <motion.span
                      className="px-3 py-1 bg-neon-green/20 text-neon-green text-xs font-bold rounded-full border border-neon-green/40"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ACTUAL
                    </motion.span>
                  )}
                </div>
                
                <div className="flex items-center gap-4 mb-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => {
                    const TechIcon = getTechIcon(tech);
                    return (
                      <motion.span
                        key={techIndex}
                        className={`px-3 py-1 bg-${exp.color}/10 text-${exp.color} text-xs rounded-full border border-${exp.color}/30 flex items-center gap-2`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {TechIcon && <TechIcon size={12} />}
                        {tech}
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-orbitron font-bold text-center mb-8 text-neon-purple">
            CERTIFICACIONES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className={`holographic p-6 rounded-lg text-center hover:scale-105 transition-all duration-300 border-${cert.color}/30`}
                whileHover={{ 
                  boxShadow: `0 0 20px rgba(${cert.color === 'neon-green' ? '50, 205, 50' : '138, 43, 226'}, 0.3)`
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <cert.icon className={`text-3xl text-${cert.color} mb-3 mx-auto`} />
                </motion.div>
                <h4 className={`font-orbitron font-bold text-${cert.color} mb-2`}>{cert.name}</h4>
                <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-xs">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}