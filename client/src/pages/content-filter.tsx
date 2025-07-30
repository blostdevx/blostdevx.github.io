import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Filter, BookOpen, Code, Shield, Bug, Users } from "lucide-react";

export default function ContentFilterPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const content = [
    {
      id: 1,
      title: "Introducción a Kali Linux",
      type: "Cybersecurity",
      category: "tutorial",
      difficulty: "beginner",
      description: "Aprende a configurar y usar Kali Linux para ciberseguridad",
      tags: ["kali", "linux", "pentesting"],
      readTime: "15 min",
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "Python Fundamentals",
      type: "Programming",
      category: "tutorial",
      difficulty: "beginner",
      description: "Conceptos básicos de Python para principiantes",
      tags: ["python", "programming", "basics"],
      readTime: "30 min",
      date: "2024-01-14"
    },
    {
      id: 3,
      title: "HTB - Artificial Writeup",
      type: "CTF",
      category: "writeup",
      difficulty: "easy",
      description: "Solución completa del CTF Artificial de HackTheBox",
      tags: ["htb", "ctf", "writeup"],
      readTime: "20 min",
      date: "2024-01-13"
    },
    {
      id: 4,
      title: "Git Workflow Avanzado",
      type: "DevOps",
      category: "tutorial",
      difficulty: "intermediate",
      description: "Técnicas avanzadas de Git para equipos de desarrollo",
      tags: ["git", "workflow", "collaboration"],
      readTime: "25 min",
      date: "2024-01-12"
    },
    {
      id: 5,
      title: "SSL/TLS Configuration",
      type: "Security",
      category: "tutorial",
      difficulty: "advanced",
      description: "Configuración segura de protocolos SSL/TLS",
      tags: ["ssl", "tls", "encryption"],
      readTime: "35 min",
      date: "2024-01-11"
    },
    {
      id: 6,
      title: "HTB - Outbound Writeup",
      type: "CTF",
      category: "writeup",
      difficulty: "medium",
      description: "Análisis y solución del CTF Outbound de HackTheBox",
      tags: ["htb", "ctf", "network"],
      readTime: "45 min",
      date: "2024-01-10"
    }
  ];

  const categories = [
    { id: "all", label: "Todo", icon: BookOpen, color: "neon-cyan" },
    { id: "tutorial", label: "Tutoriales", icon: Code, color: "neon-green" },
    { id: "writeup", label: "Writeups", icon: Bug, color: "neon-pink" },
    { id: "blog", label: "Blog", icon: Users, color: "neon-purple" }
  ];

  const difficulties = [
    { id: "all", label: "Todas" },
    { id: "beginner", label: "Principiante" },
    { id: "intermediate", label: "Intermedio" },
    { id: "advanced", label: "Avanzado" }
  ];

  const filteredContent = content.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "all" || item.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner": return "text-neon-green";
      case "intermediate": return "text-neon-cyan";
      case "advanced": return "text-neon-pink";
      default: return "text-gray-400";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Cybersecurity": return "neon-cyan";
      case "Programming": return "neon-green";
      case "CTF": return "neon-pink";
      case "DevOps": return "neon-purple";
      case "Security": return "neon-cyan";
      default: return "neon-cyan";
    }
  };

  return (
    <div className="min-h-screen bg-deep-black text-white">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-12"
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
              <span className="text-neon-cyan">CONTENT</span>
              <span className="text-neon-purple"> HUB</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Explora todo el contenido: tutoriales, writeups, documentación y más
            </motion.p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neon-cyan" size={20} />
              <input
                type="text"
                placeholder="Buscar contenido, tags, o palabras clave..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-black/30 border border-neon-cyan/30 rounded-lg focus:border-neon-cyan focus:outline-none text-white placeholder-gray-400"
              />
            </div>

            {/* Category Filters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 rounded-lg border transition-all duration-300 flex items-center gap-3 ${
                    selectedCategory === category.id
                      ? `bg-${category.color}/20 border-${category.color} text-${category.color}`
                      : "bg-black/30 border-gray-600 text-gray-400 hover:border-gray-400"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <category.icon size={20} />
                  <span className="font-orbitron">{category.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Difficulty Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {difficulties.map((difficulty) => (
                <motion.button
                  key={difficulty.id}
                  onClick={() => setSelectedDifficulty(difficulty.id)}
                  className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                    selectedDifficulty === difficulty.id
                      ? "bg-neon-purple/20 border-neon-purple text-neon-purple"
                      : "bg-black/30 border-gray-600 text-gray-400 hover:border-gray-400"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {difficulty.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <h2 className="text-2xl font-orbitron font-bold text-neon-cyan">
              {filteredContent.length} resultados encontrados
            </h2>
            <div className="flex items-center gap-2 text-gray-400">
              <Filter size={16} />
              <span className="text-sm">Filtros activos</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.map((item, index) => (
              <motion.div
                key={item.id}
                className="holographic rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  boxShadow: `0 0 30px rgba(${getTypeColor(item.type) === 'neon-cyan' ? '0, 255, 255' : getTypeColor(item.type) === 'neon-green' ? '50, 205, 50' : getTypeColor(item.type) === 'neon-pink' ? '255, 20, 147' : '138, 43, 226'}, 0.3)`
                }}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 bg-${getTypeColor(item.type)}/20 text-${getTypeColor(item.type)} text-xs font-bold rounded-full border border-${getTypeColor(item.type)}/40`}>
                          {item.type}
                        </span>
                        <span className={`text-xs ${getDifficultyColor(item.difficulty)} capitalize`}>
                          {item.difficulty}
                        </span>
                      </div>
                      <h3 className="text-xl font-orbitron font-bold text-white hover:text-neon-cyan transition-colors mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-gray-500 text-xs">
                    <span>{item.readTime}</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredContent.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-orbitron font-bold text-neon-cyan mb-2">
                No se encontraron resultados
              </h3>
              <p className="text-gray-400 mb-6">
                Intenta ajustar tus filtros o términos de búsqueda
              </p>
              <motion.button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedDifficulty("all");
                }}
                className="neon-border bg-transparent px-6 py-3 font-orbitron font-bold text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Limpiar Filtros
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}