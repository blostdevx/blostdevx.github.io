import { motion } from "framer-motion";
import { SiGit, SiGithub, SiGitlab } from "react-icons/si";
import { GitBranch, GitCommit, GitMerge, GitPullRequest, Terminal, Users } from "lucide-react";

export default function GitPage() {
  const sections = [
    {
      id: "basics",
      title: "Fundamentos de Git",
      icon: GitBranch,
      color: "neon-cyan",
      topics: [
        "¿Qué es Git y por qué es esencial?",
        "Instalación y configuración inicial",
        "Conceptos: repositorio, working directory, staging area",
        "Estados de archivos en Git",
        "Tu primer repositorio"
      ],
      commands: ["git init", "git config", "git status", "git add", "git commit"]
    },
    {
      id: "workflow",
      title: "Flujo de Trabajo Básico",
      icon: GitCommit,
      color: "neon-green",
      topics: [
        "Staging y commits efectivos",
        "Escribiendo mensajes de commit claros",
        "Visualizando el historial",
        "Ignorando archivos con .gitignore",
        "Deshaciendo cambios"
      ],
      commands: ["git add .", "git commit -m", "git log", "git diff", "git reset"]
    },
    {
      id: "branching",
      title: "Ramas y Merging",
      icon: GitMerge,
      color: "neon-purple",
      topics: [
        "Creación y cambio de ramas",
        "Estrategias de branching",
        "Merging vs Rebasing",
        "Resolviendo conflictos",
        "Git Flow y GitHub Flow"
      ],
      commands: ["git branch", "git checkout", "git merge", "git rebase", "git cherry-pick"]
    },
    {
      id: "remote",
      title: "Repositorios Remotos",
      icon: Users,
      color: "neon-pink",
      topics: [
        "Conectando con repositorios remotos",
        "Push, pull y fetch",
        "Configuración de SSH keys",
        "Trabajando con GitHub/GitLab",
        "Colaboración en equipo"
      ],
      commands: ["git remote", "git push", "git pull", "git fetch", "git clone"]
    },
    {
      id: "advanced",
      title: "Técnicas Avanzadas",
      icon: Terminal,
      color: "neon-cyan",
      topics: [
        "Interactive rebase",
        "Git hooks y automatización",
        "Submodules y subtrees",
        "Git bisect para debugging",
        "Workflows avanzados"
      ],
      commands: ["git rebase -i", "git hook", "git submodule", "git bisect", "git worktree"]
    },
    {
      id: "collaboration",
      title: "Colaboración y Pull Requests",
      icon: GitPullRequest,
      color: "neon-green",
      topics: [
        "Forkear repositorios",
        "Creando pull requests efectivos",
        "Code review best practices",
        "Issues y project management",
        "Release management"
      ],
      commands: ["git fork", "git request-pull", "git tag", "git release", "git archive"]
    }
  ];

  const cheatSheet = [
    {
      category: "Configuración",
      commands: [
        { cmd: "git config --global user.name 'Tu Nombre'", desc: "Configurar nombre de usuario" },
        { cmd: "git config --global user.email 'tu@email.com'", desc: "Configurar email" },
        { cmd: "git config --list", desc: "Ver configuración actual" }
      ]
    },
    {
      category: "Repositorio",
      commands: [
        { cmd: "git init", desc: "Inicializar repositorio" },
        { cmd: "git clone <url>", desc: "Clonar repositorio remoto" },
        { cmd: "git status", desc: "Ver estado del repositorio" }
      ]
    },
    {
      category: "Cambios",
      commands: [
        { cmd: "git add <archivo>", desc: "Agregar archivo al staging" },
        { cmd: "git add .", desc: "Agregar todos los archivos" },
        { cmd: "git commit -m 'mensaje'", desc: "Hacer commit con mensaje" },
        { cmd: "git commit -am 'mensaje'", desc: "Add y commit en uno" }
      ]
    },
    {
      category: "Ramas",
      commands: [
        { cmd: "git branch", desc: "Listar ramas" },
        { cmd: "git branch <nombre>", desc: "Crear nueva rama" },
        { cmd: "git checkout <rama>", desc: "Cambiar a rama" },
        { cmd: "git merge <rama>", desc: "Fusionar rama" }
      ]
    }
  ];

  const practicalExample = `# Ejemplo práctico: Contribuir a un proyecto open source

# 1. Fork del proyecto en GitHub
# 2. Clonar tu fork localmente
git clone https://github.com/tu-usuario/proyecto.git
cd proyecto

# 3. Configurar upstream para sincronizar
git remote add upstream https://github.com/autor-original/proyecto.git

# 4. Crear rama para tu feature
git checkout -b feature/nueva-funcionalidad

# 5. Hacer cambios y commits
git add src/nueva-funcionalidad.py
git commit -m "feat: agregar sistema de notificaciones

- Implementar NotificationService
- Agregar tests unitarios
- Documentar API endpoints

Fixes #123"

# 6. Sincronizar con upstream antes de push
git fetch upstream
git rebase upstream/main

# 7. Subir cambios a tu fork
git push origin feature/nueva-funcionalidad

# 8. Crear Pull Request en GitHub
# 9. Después del merge, limpiar ramas
git checkout main
git branch -d feature/nueva-funcionalidad
git push origin --delete feature/nueva-funcionalidad`;

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
              <SiGit className="text-6xl text-neon-orange" />
              <SiGithub className="text-5xl text-neon-cyan" />
              <SiGitlab className="text-5xl text-neon-purple" />
            </motion.div>
            <motion.h1
              className="text-5xl md:text-7xl font-orbitron font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="text-neon-orange">GIT</span>
              <span className="text-neon-cyan"> MASTERY</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Guía completa de Git desde lo básico hasta técnicas avanzadas de colaboración
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <span className="px-4 py-2 bg-neon-orange/20 text-neon-orange rounded-full border border-neon-orange/40 text-sm">
                Version Control
              </span>
              <span className="px-4 py-2 bg-neon-cyan/20 text-neon-cyan rounded-full border border-neon-cyan/40 text-sm">
                Team Collaboration
              </span>
              <span className="px-4 py-2 bg-neon-purple/20 text-neon-purple rounded-full border border-neon-purple/40 text-sm">
                Best Practices
              </span>
              <span className="px-4 py-2 bg-neon-green/20 text-neon-green rounded-full border border-neon-green/40 text-sm">
                Workflow Management
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                className={`holographic p-6 rounded-lg hover:scale-105 transition-all duration-300 border-${section.color}/30 cursor-pointer`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  boxShadow: `0 0 30px rgba(${section.color === 'neon-cyan' ? '0, 255, 255' : section.color === 'neon-green' ? '50, 205, 50' : section.color === 'neon-purple' ? '138, 43, 226' : section.color === 'neon-pink' ? '255, 20, 147' : '255, 165, 0'}, 0.3)`
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
                
                <ul className="space-y-2 mb-4">
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
                
                <div className="border-t border-gray-600 pt-3">
                  <p className="text-xs text-gray-500 mb-2">Comandos principales:</p>
                  <div className="flex flex-wrap gap-1">
                    {section.commands.slice(0, 3).map((cmd, cmdIndex) => (
                      <span key={cmdIndex} className={`px-2 py-1 bg-${section.color}/10 text-${section.color} text-xs rounded border border-${section.color}/30`}>
                        {cmd}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Example */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-orbitron font-bold text-center mb-12 text-neon-purple"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            EJEMPLO PRÁCTICO
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
                  <span className="ml-4 text-gray-400 text-sm font-fira">workflow-ejemplo.sh</span>
                </div>
              </div>
              <div className="p-6 bg-black/30">
                <pre className="text-neon-green font-fira text-sm overflow-x-auto">
                  <code>{practicalExample}</code>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cheat Sheet */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-orbitron font-bold text-center mb-12 text-neon-pink"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            CHEAT SHEET
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cheatSheet.map((category, index) => (
              <motion.div
                key={index}
                className="holographic p-6 rounded-lg"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-orbitron font-bold text-neon-cyan mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.commands.map((item, cmdIndex) => (
                    <motion.div
                      key={cmdIndex}
                      className="border-l-2 border-neon-cyan/30 pl-4 hover:border-neon-cyan/60 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <code className="text-neon-green text-sm font-fira block mb-1">{item.cmd}</code>
                      <p className="text-gray-400 text-xs">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-orbitron font-bold mb-8 text-neon-orange"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            DOMINA GIT COMO UN PROFESIONAL
          </motion.h2>
          <motion.button
            className="neon-border bg-transparent px-8 py-4 font-orbitron font-bold text-neon-orange hover:bg-neon-orange/10 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px currentColor" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            COMENZAR TUTORIAL GIT
          </motion.button>
        </div>
      </section>
    </div>
  );
}