import { motion } from "framer-motion";
import { Shield, Lock, Key, Wifi, Globe, Database, Eye, Zap } from "lucide-react";

export default function SecurityProtocolsPage() {
  const protocols = [
    {
      id: "ssl-tls",
      title: "SSL/TLS",
      icon: Lock,
      color: "neon-cyan",
      description: "Protocolo de seguridad para comunicaciones web seguras",
      details: [
        "Handshake y negociación de cifrado",
        "Certificados digitales y PKI",
        "Perfect Forward Secrecy",
        "Vulnerabilidades: Heartbleed, POODLE, BEAST"
      ],
      ports: ["443 (HTTPS)", "993 (IMAPS)", "995 (POP3S)"]
    },
    {
      id: "ipsec",
      title: "IPSec",
      icon: Shield,
      color: "neon-green",
      description: "Suite de protocolos para comunicaciones IP seguras",
      details: [
        "Modos: Transport y Tunnel",
        "Protocolos AH y ESP",
        "IKE (Internet Key Exchange)",
        "Configuración de VPN site-to-site"
      ],
      ports: ["500 (IKE)", "4500 (NAT-T)"]
    },
    {
      id: "ssh",
      title: "SSH",
      icon: Key,
      color: "neon-purple",
      description: "Secure Shell para acceso remoto seguro",
      details: [
        "Autenticación por clave pública/privada",
        "Port forwarding y tunneling",
        "Hardening de configuración",
        "Gestión de llaves SSH"
      ],
      ports: ["22 (SSH)"]
    },
    {
      id: "wpa",
      title: "WPA/WPA2/WPA3",
      icon: Wifi,
      color: "neon-pink",
      description: "Protocolos de seguridad para redes inalámbricas",
      details: [
        "Evolución: WEP → WPA → WPA2 → WPA3",
        "TKIP vs AES/CCMP",
        "Enterprise vs Personal",
        "Ataques: Handshake capture, KRACK"
      ],
      ports: ["802.11 frames"]
    },
    {
      id: "kerberos",
      title: "Kerberos",
      icon: Eye,
      color: "neon-cyan",
      description: "Protocolo de autenticación para redes",
      details: [
        "Ticket Granting Ticket (TGT)",
        "Key Distribution Center (KDC)",
        "Single Sign-On (SSO)",
        "Ataques: Golden/Silver tickets"
      ],
      ports: ["88 (Kerberos)"]
    },
    {
      id: "oauth",
      title: "OAuth 2.0 / OIDC",
      icon: Globe,
      color: "neon-green",
      description: "Framework de autorización para APIs",
      details: [
        "Authorization Code Flow",
        "JWT y token management",
        "PKCE para aplicaciones públicas",
        "OpenID Connect identity layer"
      ],
      ports: ["443 (HTTPS)"]
    }
  ];

  const vulnerabilities = [
    {
      protocol: "SSL/TLS",
      vulns: ["Heartbleed", "POODLE", "BEAST", "CRIME", "BREACH"],
      color: "neon-cyan"
    },
    {
      protocol: "SSH",
      vulns: ["Weak algorithms", "Key reuse", "Brute force", "Man-in-the-middle"],
      color: "neon-purple"
    },
    {
      protocol: "WPA2",
      vulns: ["KRACK", "WPS PIN attack", "Dictionary attacks", "Evil twin"],
      color: "neon-pink"
    },
    {
      protocol: "Kerberos",
      vulns: ["Golden ticket", "Silver ticket", "ASREPRoast", "Kerberoast"],
      color: "neon-cyan"
    }
  ];

  const securityConfig = `# Configuración segura de SSH
# /etc/ssh/sshd_config

# Deshabilitar login root
PermitRootLogin no

# Usar solo protocolo 2
Protocol 2

# Cambiar puerto por defecto (security through obscurity)
Port 2222

# Deshabilitar autenticación por password
PasswordAuthentication no
PubkeyAuthentication yes

# Algoritmos seguros
Ciphers chacha20-poly1305@openssh.com,aes256-gcm@openssh.com
MACs hmac-sha2-256-etm@openssh.com,hmac-sha2-512-etm@openssh.com
KexAlgorithms curve25519-sha256@libssh.org,diffie-hellman-group16-sha512

# Configuración de SSL/TLS Apache
# /etc/apache2/sites-available/secure-site.conf
<VirtualHost *:443>
    SSLEngine on
    SSLCertificateFile /path/to/certificate.crt
    SSLCertificateKeyFile /path/to/private.key
    
    # Solo TLS 1.2 y 1.3
    SSLProtocol -all +TLSv1.2 +TLSv1.3
    
    # Cipher suites seguros
    SSLCipherSuite ECDHE+AESGCM:ECDHE+CHACHA20:DHE+AESGCM:DHE+CHACHA20:!aNULL:!MD5:!DSS
    SSLHonorCipherOrder on
    
    # HSTS
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
</VirtualHost>`;

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
            <motion.div
              className="flex justify-center items-center gap-4 mb-6"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Shield className="text-6xl text-neon-cyan" />
              <Lock className="text-5xl text-neon-green" />
              <Key className="text-5xl text-neon-purple" />
            </motion.div>
            <motion.h1
              className="text-5xl md:text-7xl font-orbitron font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="text-neon-cyan">SECURITY</span>
              <span className="text-neon-green"> PROTOCOLS</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Guía completa de protocolos de seguridad, configuración y análisis de vulnerabilidades
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Protocols Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-orbitron font-bold text-center mb-12 text-neon-cyan"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            PROTOCOLOS PRINCIPALES
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {protocols.map((protocol, index) => (
              <motion.div
                key={protocol.id}
                className={`holographic p-6 rounded-lg hover:scale-105 transition-all duration-300 border-${protocol.color}/30 cursor-pointer`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  boxShadow: `0 0 30px rgba(${protocol.color === 'neon-cyan' ? '0, 255, 255' : protocol.color === 'neon-green' ? '50, 205, 50' : protocol.color === 'neon-purple' ? '138, 43, 226' : '255, 20, 147'}, 0.3)`
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                  >
                    <protocol.icon className={`text-3xl text-${protocol.color}`} />
                  </motion.div>
                  <div>
                    <h3 className={`text-xl font-orbitron font-bold text-${protocol.color}`}>{protocol.title}</h3>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {protocol.ports.map((port, portIndex) => (
                        <span key={portIndex} className={`text-xs px-2 py-1 bg-${protocol.color}/10 text-${protocol.color} rounded border border-${protocol.color}/30`}>
                          {port}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-4">{protocol.description}</p>
                
                <ul className="space-y-2">
                  {protocol.details.map((detail, detailIndex) => (
                    <motion.li
                      key={detailIndex}
                      className="text-gray-300 text-sm hover:text-white transition-colors cursor-pointer flex items-start gap-2"
                      whileHover={{ x: 5 }}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-${protocol.color} mt-2 flex-shrink-0`}></div>
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vulnerabilities Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-orbitron font-bold text-center mb-12 text-neon-pink"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            VULNERABILIDADES CONOCIDAS
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vulnerabilities.map((item, index) => (
              <motion.div
                key={index}
                className="holographic p-6 rounded-lg"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className={`text-xl font-orbitron font-bold text-${item.color} mb-4`}>
                  {item.protocol}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {item.vulns.map((vuln, vulnIndex) => (
                    <motion.span
                      key={vulnIndex}
                      className="px-3 py-2 bg-red-500/10 text-red-400 text-sm rounded border border-red-500/30 text-center hover:bg-red-500/20 transition-colors cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                    >
                      {vuln}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Configuration Example */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-orbitron font-bold text-center mb-12 text-neon-green"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            CONFIGURACIONES SEGURAS
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="holographic rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-black/50 p-4 border-b border-neon-cyan/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-gray-400 text-sm font-fira">security-configs.conf</span>
                </div>
              </div>
              <div className="p-6 bg-black/30">
                <pre className="text-neon-green font-fira text-sm overflow-x-auto">
                  <code>{securityConfig}</code>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-orbitron font-bold text-center mb-12 text-neon-purple"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            MEJORES PRÁCTICAS
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Defense in Depth",
                tips: ["Múltiples capas de seguridad", "Principio de menor privilegio", "Segregación de redes"]
              },
              {
                icon: Key,
                title: "Key Management",
                tips: ["Rotación regular de claves", "Almacenamiento seguro", "Algoritmos actualizados"]
              },
              {
                icon: Eye,
                title: "Monitoring",
                tips: ["Logs centralizados", "Detección de anomalías", "Alertas en tiempo real"]
              },
              {
                icon: Zap,
                title: "Incident Response",
                tips: ["Plan de respuesta", "Forensics preparados", "Recovery procedures"]
              }
            ].map((practice, index) => (
              <motion.div
                key={index}
                className="holographic p-6 rounded-lg text-center hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  className="mb-4"
                >
                  <practice.icon className="text-3xl text-neon-cyan mx-auto" />
                </motion.div>
                <h3 className="font-orbitron font-bold text-neon-cyan mb-4">{practice.title}</h3>
                <ul className="space-y-2">
                  {practice.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="text-gray-400 text-sm">
                      • {tip}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-orbitron font-bold mb-8 text-neon-cyan"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            DOMINA LOS PROTOCOLOS DE SEGURIDAD
          </motion.h2>
          <motion.button
            className="neon-border bg-transparent px-8 py-4 font-orbitron font-bold text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px currentColor" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            EXPLORAR PROTOCOLOS
          </motion.button>
        </div>
      </section>
    </div>
  );
}