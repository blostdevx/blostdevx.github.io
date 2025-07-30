import { motion } from "framer-motion";
import { SiPython } from "react-icons/si";
import { Code, BookOpen, Zap, Database, Globe, Brain } from "lucide-react";

export default function PythonPage() {
  const chapters = [
    {
      id: 1,
      title: "Introducción a Python",
      icon: BookOpen,
      color: "neon-green",
      topics: [
        "¿Qué es Python y por qué usarlo?",
        "Instalación de Python y configuración del entorno",
        "Python Interactive Shell (REPL)",
        "Tu primer programa en Python",
        "Comentarios y documentación"
      ],
      exercises: 8
    },
    {
      id: 2,
      title: "Sintaxis Básica",
      icon: Code,
      color: "neon-cyan",
      topics: [
        "Variables y tipos de datos",
        "Operadores aritméticos, lógicos y de comparación",
        "Strings y manipulación de texto",
        "Input del usuario y print formatting",
        "Indentación y estructura del código"
      ],
      exercises: 12
    },
    {
      id: 3,
      title: "Estructuras de Control",
      icon: Zap,
      color: "neon-purple",
      topics: [
        "Condicionales: if, elif, else",
        "Bucles: for y while",
        "Break, continue y pass",
        "Comprensiones de listas",
        "Manejo de excepciones básico"
      ],
      exercises: 15
    },
    {
      id: 4,
      title: "Estructuras de Datos",
      icon: Database,
      color: "neon-pink",
      topics: [
        "Listas: creación, métodos y operaciones",
        "Tuplas y cuándo usarlas",
        "Diccionarios y operaciones avanzadas",
        "Sets y operaciones de conjuntos",
        "Iteración y manipulación de datos"
      ],
      exercises: 20
    },
    {
      id: 5,
      title: "Funciones y Módulos",
      icon: Brain,
      color: "neon-cyan",
      topics: [
        "Definición y llamada de funciones",
        "Parámetros, argumentos y valores por defecto",
        "Scope y variables globales/locales",
        "Funciones lambda y map/filter/reduce",
        "Importación y creación de módulos"
      ],
      exercises: 18
    },
    {
      id: 6,
      title: "Programación Orientada a Objetos",
      icon: Globe,
      color: "neon-green",
      topics: [
        "Clases y objetos",
        "Atributos y métodos",
        "Constructor __init__ y métodos especiales",
        "Herencia y polimorfismo",
        "Encapsulación y abstracción"
      ],
      exercises: 16
    }
  ];

  const codeExample = `# Ejemplo: Clase para gestión de estudiantes
class Estudiante:
    def __init__(self, nombre, edad, materias=None):
        self.nombre = nombre
        self.edad = edad
        self.materias = materias or []
        self.notas = {}
    
    def agregar_materia(self, materia):
        if materia not in self.materias:
            self.materias.append(materia)
            self.notas[materia] = []
    
    def agregar_nota(self, materia, nota):
        if materia in self.materias:
            self.notas[materia].append(nota)
        else:
            print(f"El estudiante no está inscrito en {materia}")
    
    def promedio_materia(self, materia):
        if materia in self.notas and self.notas[materia]:
            return sum(self.notas[materia]) / len(self.notas[materia])
        return 0
    
    def promedio_general(self):
        promedios = [self.promedio_materia(m) for m in self.materias]
        return sum(promedios) / len(promedios) if promedios else 0

# Uso de la clase
estudiante = Estudiante("Ana García", 20)
estudiante.agregar_materia("Matemáticas")
estudiante.agregar_materia("Python")
estudiante.agregar_nota("Matemáticas", 85)
estudiante.agregar_nota("Python", 92)
print(f"Promedio general: {estudiante.promedio_general():.2f}")`;

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
              className="flex justify-center mb-6"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <SiPython className="text-8xl text-neon-green" />
            </motion.div>
            <motion.h1
              className="text-5xl md:text-7xl font-orbitron font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="text-neon-green">PYTHON</span>
              <span className="text-neon-cyan"> MASTERY</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Tutorial completo de Python desde principiante hasta avanzado - Estilo W3Schools
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <span className="px-4 py-2 bg-neon-green/20 text-neon-green rounded-full border border-neon-green/40 text-sm">
                Beginner Friendly
              </span>
              <span className="px-4 py-2 bg-neon-cyan/20 text-neon-cyan rounded-full border border-neon-cyan/40 text-sm">
                Interactive Examples
              </span>
              <span className="px-4 py-2 bg-neon-purple/20 text-neon-purple rounded-full border border-neon-purple/40 text-sm">
                Real Projects
              </span>
              <span className="px-4 py-2 bg-neon-pink/20 text-neon-pink rounded-full border border-neon-pink/40 text-sm">
                Hands-on Practice
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-orbitron font-bold text-center mb-12 text-neon-cyan"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            RUTA DE APRENDIZAJE
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            {chapters.map((chapter, index) => (
              <motion.div
                key={chapter.id}
                className="relative mb-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Connector Line */}
                {index < chapters.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-neon-cyan to-neon-purple z-0"></div>
                )}
                
                <div className={`flex items-start gap-6 relative z-10`}>
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-${chapter.color}/20 border-2 border-${chapter.color} flex items-center justify-center flex-shrink-0`}
                    whileHover={{ scale: 1.1, rotate: 15 }}
                  >
                    <chapter.icon className={`text-2xl text-${chapter.color}`} />
                  </motion.div>
                  
                  <motion.div
                    className="holographic p-6 rounded-lg flex-grow hover:scale-105 transition-all duration-300 cursor-pointer"
                    whileHover={{ 
                      boxShadow: `0 0 30px rgba(${chapter.color === 'neon-green' ? '50, 205, 50' : chapter.color === 'neon-cyan' ? '0, 255, 255' : chapter.color === 'neon-purple' ? '138, 43, 226' : '255, 20, 147'}, 0.3)`
                    }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className={`text-xl font-orbitron font-bold text-${chapter.color}`}>
                        Capítulo {chapter.id}: {chapter.title}
                      </h3>
                      <span className={`px-3 py-1 bg-${chapter.color}/10 text-${chapter.color} text-xs rounded-full border border-${chapter.color}/30`}>
                        {chapter.exercises} ejercicios
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-2">
                        {chapter.topics.map((topic, topicIndex) => (
                          <motion.li
                            key={topicIndex}
                            className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer flex items-center gap-2"
                            whileHover={{ x: 5 }}
                          >
                            <div className={`w-2 h-2 rounded-full bg-${chapter.color}`}></div>
                            {topic}
                          </motion.li>
                        ))}
                      </ul>
                      
                      <div className="text-right">
                        <motion.button
                          className={`px-4 py-2 border border-${chapter.color}/40 text-${chapter.color} hover:bg-${chapter.color}/10 transition-all duration-300 rounded text-sm`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Comenzar Capítulo
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-orbitron font-bold text-center mb-12 text-neon-purple"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            EJEMPLO INTERACTIVO
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
                  <span className="ml-4 text-gray-400 text-sm font-fira">python_tutorial.py</span>
                </div>
              </div>
              <div className="p-6 bg-black/30">
                <pre className="text-neon-green font-fira text-sm overflow-x-auto">
                  <code>{codeExample}</code>
                </pre>
              </div>
              <div className="p-4 bg-black/50 border-t border-neon-cyan/20">
                <div className="flex gap-4">
                  <motion.button
                    className="px-4 py-2 bg-neon-green/20 text-neon-green border border-neon-green/40 rounded hover:bg-neon-green/30 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ▶ Ejecutar Código
                  </motion.button>
                  <motion.button
                    className="px-4 py-2 bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/40 rounded hover:bg-neon-cyan/30 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    📋 Copiar
                  </motion.button>
                  <motion.button
                    className="px-4 py-2 bg-neon-purple/20 text-neon-purple border border-neon-purple/40 rounded hover:bg-neon-purple/30 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    💾 Descargar
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-orbitron font-bold text-center mb-12 text-neon-pink"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            CARACTERÍSTICAS DEL TUTORIAL
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🎯",
                title: "Ejemplos Prácticos",
                description: "Código real que puedes ejecutar y modificar"
              },
              {
                icon: "🚀",
                title: "Progresión Gradual",
                description: "Desde conceptos básicos hasta programación avanzada"
              },
              {
                icon: "💡",
                title: "Proyectos Reales",
                description: "Aplicaciones prácticas de cada concepto aprendido"
              },
              {
                icon: "📚",
                title: "Referencia Completa",
                description: "Documentación exhaustiva de funciones y métodos"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="holographic p-6 rounded-lg text-center hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-orbitron font-bold text-neon-cyan mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-orbitron font-bold mb-8 text-neon-green"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            ¿LISTO PARA DOMINAR PYTHON?
          </motion.h2>
          <motion.button
            className="neon-border bg-transparent px-8 py-4 font-orbitron font-bold text-neon-green hover:bg-neon-green/10 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px currentColor" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            COMENZAR TUTORIAL
          </motion.button>
        </div>
      </section>
    </div>
  );
}