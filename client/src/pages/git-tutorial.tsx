import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Home, ArrowRight, Code, Terminal, GitBranch, GitMerge, Book, Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CommandProps {
  command: string;
  description: string;
  example?: string;
}

const CommandBlock: React.FC<CommandProps> = ({ command, description, example }) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast({
      title: "Comando copiado",
      description: "El comando se ha copiado al portapapeles",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className="bg-gray-900 rounded-lg p-4 mb-4 border border-neon-cyan/20"
      whileHover={{ borderColor: "rgba(0, 255, 255, 0.4)" }}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Terminal className="text-neon-green text-sm" />
            <code className="text-neon-cyan font-mono text-sm bg-black/50 px-2 py-1 rounded">
              {command}
            </code>
            <motion.button
              onClick={() => copyToClipboard(command)}
              className="p-1 hover:bg-neon-cyan/10 rounded transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {copied ? (
                <Check className="text-neon-green text-sm" />
              ) : (
                <Copy className="text-gray-400 text-sm" />
              )}
            </motion.button>
          </div>
          <p className="text-gray-300 text-sm mb-2">{description}</p>
          {example && (
            <div className="bg-black/30 p-2 rounded text-xs">
              <span className="text-gray-500">Ejemplo:</span>
              <code className="text-neon-purple ml-2">{example}</code>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode; icon?: React.ReactNode }> = ({ 
  title, 
  children, 
  icon 
}) => (
  <motion.section
    className="mb-12"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="flex items-center gap-3 mb-6">
      {icon}
      <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-neon-cyan">
        {title}
      </h2>
    </div>
    <div className="space-y-4">
      {children}
    </div>
  </motion.section>
);

export default function GitTutorial() {
  return (
    <div className="min-h-screen bg-deep-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <GitBranch className="text-4xl text-neon-green" />
              <h1 className="text-4xl md:text-6xl font-orbitron font-bold">
                <span className="text-neon-cyan">Git</span>{" "}
                <span className="text-neon-purple">Master</span>{" "}
                <span className="text-neon-pink">Course</span>
              </h1>
            </div>
            
            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Aprende Git desde cero hasta nivel avanzado. Control de versiones, colaboración 
              y flujos de trabajo profesionales explicados paso a paso.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.a
                href="/"
                className="neon-border bg-transparent px-6 py-3 font-orbitron font-bold text-neon-purple hover:bg-neon-purple/10 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Home size={20} />
                Volver al Inicio
              </motion.a>
              <motion.button
                onClick={() => document.querySelector('#introduction')?.scrollIntoView({ behavior: 'smooth' })}
                className="neon-border bg-transparent px-6 py-3 font-orbitron font-bold text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Play size={20} />
                Comenzar Tutorial
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Content */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        
        {/* Introduction */}
        <Section title="1. Introducción a Git" icon={<Book className="text-neon-green text-2xl" />}>
          <div id="introduction" className="bg-gray-900/50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-orbitron text-neon-green mb-4">¿Qué es Git?</h3>
            <p className="text-gray-300 mb-4">
              Git es un sistema de control de versiones distribuido que permite a los desarrolladores 
              rastrear cambios en el código, colaborar con otros y mantener un historial completo del proyecto.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-neon-cyan font-semibold mb-2">Ventajas de Git:</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Control de versiones distribuido</li>
                  <li>• Historial completo de cambios</li>
                  <li>• Colaboración eficiente</li>
                  <li>• Trabajo offline</li>
                  <li>• Ramas y fusiones potentes</li>
                </ul>
              </div>
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-neon-purple font-semibold mb-2">Conceptos clave:</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• <strong>Repository:</strong> Carpeta del proyecto</li>
                  <li>• <strong>Commit:</strong> Guardar cambios</li>
                  <li>• <strong>Branch:</strong> Línea de desarrollo</li>
                  <li>• <strong>Merge:</strong> Unir ramas</li>
                  <li>• <strong>Remote:</strong> Repositorio remoto</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Installation & Configuration */}
        <Section title="2. Instalación y Configuración" icon={<Code className="text-neon-purple text-2xl" />}>
          <div className="bg-gray-900/50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-orbitron text-neon-purple mb-4">Configuración inicial</h3>
            <p className="text-gray-300 mb-4">
              Antes de usar Git, debes configurar tu identidad. Esta información se incluirá en cada commit.
            </p>
          </div>
          
          <CommandBlock
            command="git config --global user.name 'Tu Nombre'"
            description="Configura tu nombre de usuario globalmente"
            example="git config --global user.name 'Juan Pérez'"
          />
          
          <CommandBlock
            command="git config --global user.email 'tu@email.com'"
            description="Configura tu email globalmente"
            example="git config --global user.email 'juan@ejemplo.com'"
          />
          
          <CommandBlock
            command="git config --list"
            description="Ver todas las configuraciones actuales"
          />
          
          <CommandBlock
            command="git config user.name"
            description="Ver configuración específica (nombre de usuario)"
          />
        </Section>

        {/* Basic Commands */}
        <Section title="3. Comandos Básicos" icon={<Terminal className="text-neon-cyan text-2xl" />}>
          <CommandBlock
            command="git init"
            description="Inicializa un nuevo repositorio Git en el directorio actual"
            example="git init mi-proyecto"
          />
          
          <CommandBlock
            command="git clone <url>"
            description="Clona un repositorio remoto a tu máquina local"
            example="git clone https://github.com/usuario/repo.git"
          />
          
          <CommandBlock
            command="git status"
            description="Muestra el estado actual del repositorio (archivos modificados, staged, etc.)"
          />
          
          <CommandBlock
            command="git add <archivo>"
            description="Añade archivos al área de staging (preparación para commit)"
            example="git add index.html"
          />
          
          <CommandBlock
            command="git add ."
            description="Añade todos los archivos modificados al staging area"
          />
          
          <CommandBlock
            command="git commit -m 'mensaje'"
            description="Crea un commit con los archivos en staging"
            example="git commit -m 'Añadir página de inicio'"
          />
          
          <CommandBlock
            command="git log"
            description="Muestra el historial de commits"
          />
          
          <CommandBlock
            command="git log --oneline"
            description="Muestra el historial de commits en una línea por commit"
          />
        </Section>

        {/* Working with Branches */}
        <Section title="4. Trabajando con Ramas" icon={<GitBranch className="text-neon-green text-2xl" />}>
          <div className="bg-gray-900/50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-orbitron text-neon-green mb-4">¿Qué son las ramas?</h3>
            <p className="text-gray-300 mb-4">
              Las ramas permiten desarrollar características de forma aislada. Cada rama es una línea 
              de desarrollo independiente que puede ser fusionada posteriormente.
            </p>
          </div>

          <CommandBlock
            command="git branch"
            description="Lista todas las ramas locales"
          />
          
          <CommandBlock
            command="git branch <nombre-rama>"
            description="Crea una nueva rama"
            example="git branch feature/nueva-funcionalidad"
          />
          
          <CommandBlock
            command="git checkout <rama>"
            description="Cambia a una rama específica"
            example="git checkout feature/nueva-funcionalidad"
          />
          
          <CommandBlock
            command="git checkout -b <nueva-rama>"
            description="Crea y cambia a una nueva rama en un solo comando"
            example="git checkout -b hotfix/bug-critico"
          />
          
          <CommandBlock
            command="git switch <rama>"
            description="Comando moderno para cambiar de rama"
            example="git switch main"
          />
          
          <CommandBlock
            command="git branch -d <rama>"
            description="Elimina una rama local (solo si está fusionada)"
            example="git branch -d feature/completada"
          />
          
          <CommandBlock
            command="git branch -D <rama>"
            description="Elimina una rama local forzadamente"
            example="git branch -D feature/experimental"
          />
        </Section>

        {/* Merging */}
        <Section title="5. Fusionando Ramas (Merge)" icon={<GitMerge className="text-neon-purple text-2xl" />}>
          <div className="bg-gray-900/50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-orbitron text-neon-purple mb-4">Tipos de Merge</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-neon-cyan font-semibold mb-2">Fast-forward:</h4>
                <p className="text-sm text-gray-400">
                  Cuando no hay conflictos y la rama se puede fusionar directamente.
                </p>
              </div>
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-neon-pink font-semibold mb-2">Three-way merge:</h4>
                <p className="text-sm text-gray-400">
                  Cuando hay cambios en ambas ramas y se crea un commit de merge.
                </p>
              </div>
            </div>
          </div>

          <CommandBlock
            command="git merge <rama>"
            description="Fusiona la rama especificada con la rama actual"
            example="git merge feature/nueva-funcionalidad"
          />
          
          <CommandBlock
            command="git merge --no-ff <rama>"
            description="Fuerza un commit de merge (no fast-forward)"
            example="git merge --no-ff feature/importante"
          />
          
          <CommandBlock
            command="git merge --squash <rama>"
            description="Combina todos los commits de la rama en uno solo"
            example="git merge --squash feature/muchos-commits"
          />
        </Section>

        {/* Remote Repositories */}
        <Section title="6. Repositorios Remotos" icon={<ArrowRight className="text-neon-cyan text-2xl" />}>
          <CommandBlock
            command="git remote add origin <url>"
            description="Añade un repositorio remoto llamado 'origin'"
            example="git remote add origin https://github.com/usuario/repo.git"
          />
          
          <CommandBlock
            command="git remote -v"
            description="Lista todos los repositorios remotos configurados"
          />
          
          <CommandBlock
            command="git push origin <rama>"
            description="Sube los cambios de una rama al repositorio remoto"
            example="git push origin main"
          />
          
          <CommandBlock
            command="git push -u origin <rama>"
            description="Sube la rama y establece tracking (primera vez)"
            example="git push -u origin feature/nueva"
          />
          
          <CommandBlock
            command="git pull"
            description="Descarga y fusiona cambios del repositorio remoto"
          />
          
          <CommandBlock
            command="git fetch"
            description="Descarga cambios sin fusionar automáticamente"
          />
          
          <CommandBlock
            command="git pull origin <rama>"
            description="Descarga cambios de una rama específica"
            example="git pull origin main"
          />
        </Section>

        {/* Advanced Commands */}
        <Section title="7. Comandos Avanzados" icon={<Code className="text-neon-pink text-2xl" />}>
          <CommandBlock
            command="git stash"
            description="Guarda temporalmente cambios sin hacer commit"
          />
          
          <CommandBlock
            command="git stash pop"
            description="Aplica y elimina el último stash"
          />
          
          <CommandBlock
            command="git stash list"
            description="Lista todos los stashes guardados"
          />
          
          <CommandBlock
            command="git reset --hard <commit>"
            description="Resetea completamente al commit especificado (PELIGROSO)"
            example="git reset --hard HEAD~1"
          />
          
          <CommandBlock
            command="git reset --soft <commit>"
            description="Resetea al commit pero mantiene cambios en staging"
            example="git reset --soft HEAD~1"
          />
          
          <CommandBlock
            command="git rebase <rama>"
            description="Reorganiza commits sobre otra rama"
            example="git rebase main"
          />
          
          <CommandBlock
            command="git cherry-pick <commit>"
            description="Aplica un commit específico a la rama actual"
            example="git cherry-pick abc123"
          />
          
          <CommandBlock
            command="git tag <nombre>"
            description="Crea una etiqueta en el commit actual"
            example="git tag v1.0.0"
          />
          
          <CommandBlock
            command="git diff"
            description="Muestra diferencias entre archivos modificados"
          />
          
          <CommandBlock
            command="git diff --staged"
            description="Muestra diferencias de archivos en staging"
          />
        </Section>

        {/* Troubleshooting */}
        <Section title="8. Resolución de Problemas" icon={<Terminal className="text-neon-green text-2xl" />}>
          <div className="bg-gray-900/50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-orbitron text-neon-green mb-4">Comandos de Rescate</h3>
            <p className="text-gray-300 mb-4">
              Estos comandos te ayudarán cuando algo salga mal o necesites deshacer cambios.
            </p>
          </div>

          <CommandBlock
            command="git reflog"
            description="Muestra historial de referencias (útil para recuperar commits perdidos)"
          />
          
          <CommandBlock
            command="git checkout -- <archivo>"
            description="Descarta cambios en un archivo específico"
            example="git checkout -- index.html"
          />
          
          <CommandBlock
            command="git clean -fd"
            description="Elimina archivos no rastreados y directorios"
          />
          
          <CommandBlock
            command="git commit --amend"
            description="Modifica el último commit (mensaje o archivos)"
          />
          
          <CommandBlock
            command="git revert <commit>"
            description="Crea un nuevo commit que deshace los cambios del commit especificado"
            example="git revert abc123"
          />
        </Section>

        {/* Best Practices */}
        <Section title="9. Mejores Prácticas" icon={<Book className="text-neon-purple text-2xl" />}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-orbitron text-neon-cyan mb-4">Mensajes de Commit</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Usa verbos en imperativo: "Add", "Fix", "Update"</li>
                <li>• Sé específico y descriptivo</li>
                <li>• Mantén la primera línea bajo 50 caracteres</li>
                <li>• Usa líneas adicionales para explicar el "por qué"</li>
              </ul>
              <div className="mt-4 bg-black/30 p-3 rounded">
                <p className="text-neon-green text-xs font-mono">
                  feat: Add user authentication system<br/>
                  <br/>
                  - Implement JWT token validation<br/>
                  - Add password hashing with bcrypt<br/>
                  - Create login/logout endpoints
                </p>
              </div>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-orbitron text-neon-purple mb-4">Flujo de Trabajo</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Crea ramas para cada feature/bugfix</li>
                <li>• Haz commits pequeños y frecuentes</li>
                <li>• Siempre pull antes de push</li>
                <li>• Usa .gitignore para archivos no deseados</li>
                <li>• Revisa cambios antes de hacer commit</li>
              </ul>
              <div className="mt-4 bg-black/30 p-3 rounded">
                <p className="text-neon-pink text-xs">
                  <strong>Flujo típico:</strong><br/>
                  1. git checkout -b feature/nueva<br/>
                  2. [hacer cambios]<br/>
                  3. git add .<br/>
                  4. git commit -m "mensaje"<br/>
                  5. git push -u origin feature/nueva
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Final Section */}
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-orbitron font-bold text-neon-cyan mb-6">
            ¡Felicitaciones!
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Has completado el curso de Git. Ahora tienes las herramientas necesarias para 
            manejar control de versiones como un profesional.
          </p>
          <motion.a
            href="/"
            className="neon-border bg-transparent px-8 py-4 font-orbitron font-bold text-neon-purple hover:bg-neon-purple/10 transition-all duration-300 inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <Home size={20} />
            Volver al Inicio
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}