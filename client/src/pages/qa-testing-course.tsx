import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Home, ArrowRight, Code, Terminal, GitBranch, GitMerge, Book, Play, Bug, Shield, Cpu, Database, Settings, TestTube, Target, FileText, Users, Award } from "lucide-react";

interface CommandProps {
  command: string;
  description: string;
  example?: string;
  language?: string;
}

const CommandBlock: React.FC<CommandProps> = ({ command, description, example, language = "bash" }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
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

const CodeBlock: React.FC<{ code: string; language: string; title?: string }> = ({ code, language, title }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div className="bg-gray-900 rounded-lg mb-4 border border-neon-purple/20">
      {title && (
        <div className="bg-gray-800 px-4 py-2 rounded-t-lg flex items-center justify-between">
          <span className="text-neon-cyan font-semibold text-sm">{title}</span>
          <motion.button
            onClick={copyToClipboard}
            className="p-1 hover:bg-neon-cyan/10 rounded transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            {copied ? <Check className="text-neon-green text-sm" /> : <Copy className="text-gray-400 text-sm" />}
          </motion.button>
        </div>
      )}
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-gray-300 font-mono">{code}</code>
      </pre>
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

export default function QATestingCourse() {
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
              <TestTube className="text-4xl text-neon-green" />
              <h1 className="text-4xl md:text-6xl font-orbitron font-bold">
                <span className="text-neon-cyan">QA</span>{" "}
                <span className="text-neon-purple">Testing</span>{" "}
                <span className="text-neon-pink">Master</span>
              </h1>
            </div>
            
            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Curso completo de Quality Assurance y Testing. Desde fundamentos hasta técnicas avanzadas,
              automatización, DevOps y mejores prácticas de la industria.
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
                onClick={() => document.querySelector('#fundamentos')?.scrollIntoView({ behavior: 'smooth' })}
                className="neon-border bg-transparent px-6 py-3 font-orbitron font-bold text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Play size={20} />
                Comenzar Curso
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Content */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        
        {/* Módulo 1: Fundamentos */}
        <Section title="Módulo 1: Fundamentos de Aseguramiento de Calidad" icon={<Book className="text-neon-green text-2xl" />}>
          <div id="fundamentos" className="bg-gray-900/50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-orbitron text-neon-green mb-4">¿Qué es QA Testing?</h3>
            <p className="text-gray-300 mb-4">
              Quality Assurance (QA) es el proceso sistemático de verificar si un producto cumple con los 
              requisitos especificados y satisface las necesidades del usuario final. Incluye la planificación,
              diseño, ejecución y análisis de pruebas para garantizar la calidad del software.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-neon-cyan font-semibold mb-2">Objetivos del QA:</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Prevenir defectos</li>
                  <li>• Detectar errores temprano</li>
                  <li>• Reducir costos de corrección</li>
                  <li>• Mejorar la experiencia del usuario</li>
                  <li>• Asegurar cumplimiento de requisitos</li>
                </ul>
              </div>
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-neon-purple font-semibold mb-2">Principios del Testing:</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Testing muestra presencia de defectos</li>
                  <li>• Testing exhaustivo es imposible</li>
                  <li>• Testing temprano ahorra tiempo</li>
                  <li>• Agrupación de defectos</li>
                  <li>• Paradoja del pesticida</li>
                  <li>• Testing depende del contexto</li>
                  <li>• Falacia de ausencia de errores</li>
                </ul>
              </div>
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-neon-pink font-semibold mb-2">Roles en QA:</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• QA Analyst</li>
                  <li>• Test Engineer</li>
                  <li>• Automation Engineer</li>
                  <li>• Performance Tester</li>
                  <li>• Security Tester</li>
                  <li>• QA Lead/Manager</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SDLC y Modelos */}
          <div className="bg-gray-900/50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-orbitron text-neon-cyan mb-4">Ciclo de Vida del Software (SDLC)</h3>
            <p className="text-gray-300 mb-4">
              El SDLC define las fases por las que pasa un proyecto de software desde la concepción hasta el mantenimiento.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-neon-green font-semibold mb-3">Fases del SDLC:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                    <span><strong>Planificación:</strong> Definición de objetivos y recursos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                    <span><strong>Análisis:</strong> Recopilación y análisis de requisitos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-neon-pink rounded-full"></div>
                    <span><strong>Diseño:</strong> Arquitectura y diseño del sistema</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                    <span><strong>Implementación:</strong> Codificación del software</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span><strong>Testing:</strong> Verificación y validación</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span><strong>Despliegue:</strong> Puesta en producción</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span><strong>Mantenimiento:</strong> Soporte y actualizaciones</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-neon-purple font-semibold mb-3">Cuándo interviene QA:</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>• <strong>Planificación:</strong> Estimación de esfuerzo de testing</p>
                  <p>• <strong>Análisis:</strong> Revisión de requisitos y criterios de aceptación</p>
                  <p>• <strong>Diseño:</strong> Revisión de documentos de diseño</p>
                  <p>• <strong>Implementación:</strong> Pruebas unitarias y de integración</p>
                  <p>• <strong>Testing:</strong> Ejecución de plan de pruebas completo</p>
                  <p>• <strong>Despliegue:</strong> Pruebas de humo y validación</p>
                  <p>• <strong>Mantenimiento:</strong> Pruebas de regresión</p>
                </div>
              </div>
            </div>

            <h4 className="text-lg font-orbitron text-neon-pink mb-4">Modelos de Desarrollo y Testing</h4>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-black/30 p-4 rounded">
                <h5 className="text-neon-cyan font-semibold mb-2">Modelo V (V-Model)</h5>
                <p className="text-xs text-gray-400 mb-2">
                  Cada fase de desarrollo tiene una fase de testing correspondiente.
                </p>
                <div className="text-xs space-y-1">
                  <p>• <strong>Requisitos ↔ Pruebas de Aceptación</strong></p>
                  <p>• <strong>Diseño del Sistema ↔ Pruebas de Sistema</strong></p>
                  <p>• <strong>Diseño Detallado ↔ Pruebas de Integración</strong></p>
                  <p>• <strong>Codificación ↔ Pruebas Unitarias</strong></p>
                </div>
                <div className="mt-2 p-2 bg-gray-800 rounded text-xs">
                  <strong className="text-neon-green">Cuándo usar:</strong> Proyectos con requisitos claros y estables
                </div>
              </div>
              
              <div className="bg-black/30 p-4 rounded">
                <h5 className="text-neon-purple font-semibold mb-2">Agile Testing</h5>
                <p className="text-xs text-gray-400 mb-2">
                  Testing integrado en sprints con feedback continuo.
                </p>
                <div className="text-xs space-y-1">
                  <p>• <strong>Testing en cada sprint</strong></p>
                  <p>• <strong>Colaboración continua</strong></p>
                  <p>• <strong>Feedback temprano</strong></p>
                  <p>• <strong>Automatización esencial</strong></p>
                </div>
                <div className="mt-2 p-2 bg-gray-800 rounded text-xs">
                  <strong className="text-neon-green">Cuándo usar:</strong> Proyectos con requisitos cambiantes y entregas frecuentes
                </div>
              </div>
              
              <div className="bg-black/30 p-4 rounded">
                <h5 className="text-neon-pink font-semibold mb-2">DevOps Testing</h5>
                <p className="text-xs text-gray-400 mb-2">
                  Testing automatizado en pipelines CI/CD.
                </p>
                <div className="text-xs space-y-1">
                  <p>• <strong>Shift-Left Testing</strong></p>
                  <p>• <strong>Continuous Testing</strong></p>
                  <p>• <strong>Infrastructure as Code</strong></p>
                  <p>• <strong>Monitoring en producción</strong></p>
                </div>
                <div className="mt-2 p-2 bg-gray-800 rounded text-xs">
                  <strong className="text-neon-green">Cuándo usar:</strong> Equipos que buscan entregas continuas y alta calidad
                </div>
              </div>
            </div>
          </div>

          {/* Tipos de Pruebas */}
          <div className="bg-gray-900/50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-orbitron text-neon-green mb-4">Tipos de Pruebas</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-neon-cyan font-semibold mb-3">Pruebas Funcionales</h4>
                <p className="text-sm text-gray-400 mb-3">Verifican que el sistema funciona según los requisitos especificados.</p>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Pruebas de Unidad:</strong> Componentes individuales</li>
                  <li>• <strong>Pruebas de Integración:</strong> Interacción entre módulos</li>
                  <li>• <strong>Pruebas de Sistema:</strong> Sistema completo</li>
                  <li>• <strong>Pruebas de Aceptación:</strong> Requisitos del usuario</li>
                  <li>• <strong>Pruebas de Humo:</strong> Funcionalidades básicas</li>
                  <li>• <strong>Pruebas de Regresión:</strong> No hay nuevos defectos</li>
                </ul>
              </div>
              
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-neon-purple font-semibold mb-3">Pruebas No Funcionales</h4>
                <p className="text-sm text-gray-400 mb-3">Evalúan aspectos como rendimiento, seguridad, usabilidad.</p>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Pruebas de Rendimiento:</strong> Velocidad y escalabilidad</li>
                  <li>• <strong>Pruebas de Carga:</strong> Comportamiento bajo carga normal</li>
                  <li>• <strong>Pruebas de Estrés:</strong> Límites del sistema</li>
                  <li>• <strong>Pruebas de Seguridad:</strong> Vulnerabilidades</li>
                  <li>• <strong>Pruebas de Usabilidad:</strong> Experiencia del usuario</li>
                  <li>• <strong>Pruebas de Compatibilidad:</strong> Diferentes entornos</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-black/30 p-4 rounded">
              <h4 className="text-neon-pink font-semibold mb-3">Pruebas Exploratorias</h4>
              <p className="text-sm text-gray-400 mb-2">
                Investigación simultánea del producto mientras se diseñan y ejecutan pruebas.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h5 className="text-neon-green text-sm font-semibold mb-1">Características:</h5>
                  <ul className="text-xs text-gray-400">
                    <li>• Aprendizaje simultáneo</li>
                    <li>• Diseño y ejecución en paralelo</li>
                    <li>• Creatividad e intuición</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-neon-cyan text-sm font-semibold mb-1">Cuándo usar:</h5>
                  <ul className="text-xs text-gray-400">
                    <li>• Funcionalidades nuevas</li>
                    <li>• Documentación incompleta</li>
                    <li>• Después de pruebas formales</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-neon-purple text-sm font-semibold mb-1">Técnicas:</h5>
                  <ul className="text-xs text-gray-400">
                    <li>• Tours exploratorios</li>
                    <li>• Session-based testing</li>
                    <li>• Análisis de riesgos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Niveles de Prueba */}
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <h3 className="text-xl font-orbitron text-neon-cyan mb-4">Niveles de Prueba</h3>
            
            <div className="space-y-4">
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-neon-green font-semibold mb-2">1. Pruebas Unitarias</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Prueban componentes individuales del software de forma aislada.</p>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>• <strong>Responsable:</strong> Desarrolladores</li>
                      <li>• <strong>Scope:</strong> Métodos, clases, funciones</li>
                      <li>• <strong>Herramientas:</strong> JUnit, NUnit, pytest</li>
                      <li>• <strong>Enfoque:</strong> Caja blanca</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800 p-3 rounded">
                    <p className="text-xs text-neon-cyan mb-1">Ejemplo de caso de prueba:</p>
                    <code className="text-xs text-gray-300">
                      Probar función calcularImpuesto(100, 0.21)<br/>
                      Resultado esperado: 121
                    </code>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-neon-purple font-semibold mb-2">2. Pruebas de Integración</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="text-neon-cyan text-sm font-semibold mb-1">Big Bang</h5>
                    <p className="text-xs text-gray-400">Todos los módulos se integran simultáneamente.</p>
                  </div>
                  <div>
                    <h5 className="text-neon-pink text-sm font-semibold mb-1">Top-Down</h5>
                    <p className="text-xs text-gray-400">Desde módulos de alto nivel hacia abajo.</p>
                  </div>
                  <div>
                    <h5 className="text-neon-green text-sm font-semibold mb-1">Bottom-Up</h5>
                    <p className="text-xs text-gray-400">Desde módulos de bajo nivel hacia arriba.</p>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-neon-cyan font-semibold mb-2">3. Pruebas de Sistema</h4>
                <p className="text-sm text-gray-400 mb-2">Prueban el sistema completo en un entorno que simula producción.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>• Funcionalidad end-to-end</li>
                    <li>• Interfaces de usuario</li>
                    <li>• Integración con sistemas externos</li>
                    <li>• Configuraciones del sistema</li>
                  </ul>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>• Flujos de trabajo completos</li>
                    <li>• Manejo de datos</li>
                    <li>• Seguridad del sistema</li>
                    <li>• Rendimiento general</li>
                  </ul>
                </div>
              </div>

              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-neon-pink font-semibold mb-2">4. Pruebas de Aceptación</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-neon-green text-sm font-semibold mb-2">Aceptación del Usuario (UAT)</h5>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>• Realizadas por usuarios finales</li>
                      <li>• Validan requisitos de negocio</li>
                      <li>• Escenarios reales de uso</li>
                      <li>• Criterios de aceptación</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-neon-cyan text-sm font-semibold mb-2">Aceptación del Sistema</h5>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>• Cumplimiento de especificaciones</li>
                      <li>• Integración con infraestructura</li>
                      <li>• Configuraciones de producción</li>
                      <li>• Procedimientos operativos</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Módulo 2: Diseño y Ejecución de Pruebas Funcionales */}
        <Section title="Módulo 2: Diseño y Ejecución de Pruebas Funcionales" icon={<Target className="text-neon-purple text-2xl" />}>
          
          {/* Técnicas de Diseño */}
          <div className="bg-gray-900/50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-orbitron text-neon-purple mb-4">Técnicas de Diseño de Casos de Prueba</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-neon-cyan font-semibold mb-3">Técnicas de Caja Negra</h4>
                <p className="text-sm text-gray-400 mb-3">Se enfocan en las entradas y salidas sin considerar la implementación interna.</p>
                
                <div className="space-y-3">
                  <div className="bg-gray-800 p-3 rounded">
                    <h5 className="text-neon-green text-sm font-semibold mb-1">Partición de Equivalencia</h5>
                    <p className="text-xs text-gray-400 mb-2">Divide las entradas en grupos que deberían comportarse de manera similar.</p>
                    <div className="bg-black/50 p-2 rounded text-xs">
                      <strong>Ejemplo - Campo edad (18-65):</strong><br/>
                      • Válidas: 18-65<br/>
                      • Inválidas: &lt;18, &gt;65
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-3 rounded">
                    <h5 className="text-neon-purple text-sm font-semibold mb-1">Análisis de Valores Límite</h5>
                    <p className="text-xs text-gray-400 mb-2">Prueba los valores en los bordes de las particiones.</p>
                    <div className="bg-black/50 p-2 rounded text-xs">
                      <strong>Ejemplo - Campo edad (18-65):</strong><br/>
                      • Probar: 17, 18, 19, 64, 65, 66
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-neon-pink font-semibold mb-3">Técnicas de Caja Blanca</h4>
                <p className="text-sm text-gray-400 mb-3">Se basan en el conocimiento de la estructura interna del código.</p>
                
                <div className="space-y-3">
                  <div className="bg-gray-800 p-3 rounded">
                    <h5 className="text-neon-green text-sm font-semibold mb-1">Cobertura de Sentencias</h5>
                    <p className="text-xs text-gray-400 mb-2">Cada línea de código debe ejecutarse al menos una vez.</p>
                    <div className="bg-black/50 p-2 rounded text-xs">
                      <strong>Métrica:</strong> (Sentencias ejecutadas / Total sentencias) × 100
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-3 rounded">
                    <h5 className="text-neon-cyan text-sm font-semibold mb-1">Cobertura de Ramas</h5>
                    <p className="text-xs text-gray-400 mb-2">Cada rama de decisión (if/else) debe probarse.</p>
                    <div className="bg-black/50 p-2 rounded text-xs">
                      <strong>Ejemplo:</strong> En if-else, probar tanto condición verdadera como falsa
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-3 rounded">
                    <h5 className="text-neon-purple text-sm font-semibold mb-1">Cobertura de Condiciones</h5>
                    <p className="text-xs text-gray-400 mb-2">Cada condición booleana debe evaluarse a verdadero y falso.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ejemplo Práctico */}
            <div className="bg-black/30 p-4 rounded">
              <h4 className="text-neon-green font-semibold mb-3">Ejemplo práctico: Validación de formulario web</h4>
              <p className="text-sm text-gray-400 mb-3">
                Diseñemos casos de prueba para un formulario de registro con los siguientes campos:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-800 p-3 rounded">
                  <h5 className="text-neon-cyan text-sm font-semibold mb-2">Campos del formulario:</h5>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>• <strong>Nombre:</strong> 2-50 caracteres, solo letras</li>
                    <li>• <strong>Email:</strong> Formato válido, máximo 100 caracteres</li>
                    <li>• <strong>Edad:</strong> 18-120 años</li>
                    <li>• <strong>Teléfono:</strong> 10 dígitos, opcional</li>
                    <li>• <strong>Contraseña:</strong> 8-20 caracteres, mayúscula, número</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800 p-3 rounded">
                  <h5 className="text-neon-purple text-sm font-semibold mb-2">Casos de prueba diseñados:</h5>
                  <div className="text-xs space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>CP001: Datos válidos completos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>CP002: Nombre con números</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>CP003: Email sin formato válido</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>CP004: Edad menor a 18</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>CP005: Contraseña sin mayúscula</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gestión de Requerimientos */}
          <div className="bg-gray-900/50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-orbitron text-neon-cyan mb-4">Gestión de Requerimientos y Trazabilidad</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-neon-green font-semibold mb-3">Matriz de Trazabilidad</h4>
                <p className="text-sm text-gray-400 mb-3">
                  Documento que vincula requisitos con casos de prueba, asegurando cobertura completa.
                </p>
                
                <div className="bg-gray-800 p-3 rounded text-xs">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-neon-cyan">
                        <th className="p-1">Req ID</th>
                        <th className="p-1">Descripción</th>
                        <th className="p-1">Casos de Prueba</th>
                        <th className="p-1">Estado</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-400">
                      <tr>
                        <td className="p-1">REQ-001</td>
                        <td className="p-1">Login usuario</td>
                        <td className="p-1">TC-001, TC-002</td>
                        <td className="p-1 text-green-400">✓</td>
                      </tr>
                      <tr>
                        <td className="p-1">REQ-002</td>
                        <td className="p-1">Registro usuario</td>
                        <td className="p-1">TC-003, TC-004</td>
                        <td className="p-1 text-yellow-400">⚡</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-neon-purple font-semibold mb-3">Criterios de Aceptación</h4>
                <p className="text-sm text-gray-400 mb-3">
                  Condiciones específicas que debe cumplir una funcionalidad para ser aceptada.
                </p>
                
                <div className="bg-gray-800 p-3 rounded">
                  <h5 className="text-neon-cyan text-xs font-semibold mb-2">Ejemplo - Historia de Usuario:</h5>
                  <p className="text-xs text-gray-400 mb-2">
                    "Como usuario, quiero iniciar sesión para acceder a mi cuenta"
                  </p>
                  <div className="text-xs text-gray-300 space-y-1">
                    <p><strong>Dado:</strong> Usuario registrado</p>
                    <p><strong>Cuando:</strong> Ingresa credenciales válidas</p>
                    <p><strong>Entonces:</strong> Accede al dashboard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Automatización */}
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <h3 className="text-xl font-orbitron text-neon-green mb-4">Automatización de Pruebas Funcionales</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-neon-cyan font-semibold mb-3">¿Cuándo automatizar?</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">Pruebas repetitivas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">Pruebas de regresión</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">Pruebas con múltiples datos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">Validaciones complejas</span>
                  </div>
                </div>
                
                <h5 className="text-neon-pink text-sm font-semibold mt-3 mb-2">¿Cuándo NO automatizar?</h5>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-sm">Pruebas exploratorias</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-sm">Funcionalidades que cambian mucho</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-sm">Pruebas de usabilidad</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-neon-purple font-semibold mb-3">Herramientas Populares</h4>
                <div className="space-y-3">
                  <div className="bg-gray-800 p-2 rounded">
                    <h5 className="text-neon-green text-sm font-semibold">Selenium WebDriver</h5>
                    <p className="text-xs text-gray-400">Automatización web, múltiples lenguajes</p>
                  </div>
                  <div className="bg-gray-800 p-2 rounded">
                    <h5 className="text-neon-cyan text-sm font-semibold">Cypress</h5>
                    <p className="text-xs text-gray-400">Testing moderno, JavaScript, tiempo real</p>
                  </div>
                  <div className="bg-gray-800 p-2 rounded">
                    <h5 className="text-neon-pink text-sm font-semibold">TestNG/JUnit</h5>
                    <p className="text-xs text-gray-400">Frameworks de testing para Java</p>
                  </div>
                  <div className="bg-gray-800 p-2 rounded">
                    <h5 className="text-neon-purple text-sm font-semibold">Cucumber</h5>
                    <p className="text-xs text-gray-400">BDD, Gherkin, casos en lenguaje natural</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ejemplos de código */}
            <h4 className="text-lg font-orbitron text-neon-cyan mb-4">Ejemplos de Scripts de Automatización</h4>
            
            <div className="space-y-4">
              <CodeBlock
                title="Selenium WebDriver + Java - Test de Login"
                language="java"
                code={`@Test
public void testValidLogin() {
    // Configurar WebDriver
    WebDriver driver = new ChromeDriver();
    
    try {
        // Navegar a la página de login
        driver.get("https://ejemplo.com/login");
        
        // Localizar elementos
        WebElement emailField = driver.findElement(By.id("email"));
        WebElement passwordField = driver.findElement(By.id("password"));
        WebElement loginButton = driver.findElement(By.xpath("//button[@type='submit']"));
        
        // Ingresar datos
        emailField.sendKeys("usuario@test.com");
        passwordField.sendKeys("password123");
        
        // Hacer clic en login
        loginButton.click();
        
        // Validar resultado
        String expectedUrl = "https://ejemplo.com/dashboard";
        String actualUrl = driver.getCurrentUrl();
        Assert.assertEquals(expectedUrl, actualUrl);
        
        // Verificar elemento de bienvenida
        WebElement welcomeMessage = driver.findElement(By.className("welcome-message"));
        Assert.assertTrue(welcomeMessage.isDisplayed());
        
    } finally {
        driver.quit();
    }
}`}
              />

              <CodeBlock
                title="Cypress - Test de Formulario de Registro"
                language="javascript"
                code={`describe('Registro de Usuario', () => {
    beforeEach(() => {
        cy.visit('/registro')
    })

    it('debe registrar usuario con datos válidos', () => {
        // Llenar formulario
        cy.get('[data-cy="nombre"]').type('Juan Pérez')
        cy.get('[data-cy="email"]').type('juan@test.com')
        cy.get('[data-cy="edad"]').type('25')
        cy.get('[data-cy="telefono"]').type('1234567890')
        cy.get('[data-cy="password"]').type('Password123')
        cy.get('[data-cy="confirm-password"]').type('Password123')
        
        // Enviar formulario
        cy.get('[data-cy="submit-btn"]').click()
        
        // Validar éxito
        cy.get('.success-message')
          .should('be.visible')
          .and('contain', 'Usuario registrado exitosamente')
        
        cy.url().should('include', '/dashboard')
    })

    it('debe mostrar error con email inválido', () => {
        cy.get('[data-cy="nombre"]').type('Juan Pérez')
        cy.get('[data-cy="email"]').type('email-invalido')
        cy.get('[data-cy="submit-btn"]').click()
        
        cy.get('.error-message')
          .should('be.visible')
          .and('contain', 'Formato de email inválido')
    })
})`}
              />

              <CodeBlock
                title="Cucumber - Feature File (Gherkin)"
                language="gherkin"
                code={`Feature: Autenticación de Usuario
  Como usuario registrado
  Quiero poder iniciar sesión
  Para acceder a mi cuenta

  Background:
    Given que estoy en la página de login

  Scenario: Login exitoso con credenciales válidas
    When ingreso el email "usuario@test.com"
    And ingreso la contraseña "password123"
    And hago clic en el botón "Iniciar Sesión"
    Then debo ser redirigido al dashboard
    And debo ver el mensaje de bienvenida

  Scenario Outline: Login fallido con credenciales inválidas
    When ingreso el email "<email>"
    And ingreso la contraseña "<password>"
    And hago clic en el botón "Iniciar Sesión"
    Then debo ver el mensaje de error "<mensaje_error>"

    Examples:
      | email            | password    | mensaje_error           |
      | usuario@test.com | wrong123    | Contraseña incorrecta   |
      | wrong@test.com   | password123 | Usuario no encontrado   |
      |                  | password123 | Email es requerido      |`}
              />

              <CodeBlock
                title="TestNG - Configuración y Data Provider"
                language="java"
                code={`public class LoginTest {
    private WebDriver driver;
    
    @BeforeMethod
    public void setUp() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }
    
    @DataProvider(name = "loginData")
    public Object[][] getLoginData() {
        return new Object[][] {
            {"usuario1@test.com", "pass123", true},
            {"usuario2@test.com", "pass456", true},
            {"invalid@test.com", "wrongpass", false}
        };
    }
    
    @Test(dataProvider = "loginData")
    public void testLogin(String email, String password, boolean shouldSucceed) {
        LoginPage loginPage = new LoginPage(driver);
        loginPage.navigateToLogin();
        loginPage.enterCredentials(email, password);
        loginPage.clickLogin();
        
        if (shouldSucceed) {
            Assert.assertTrue(loginPage.isLoginSuccessful());
        } else {
            Assert.assertTrue(loginPage.isErrorMessageDisplayed());
        }
    }
    
    @AfterMethod
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}`}
              />
            </div>
          </div>
        </Section>

        {/* Módulo 3: Pruebas No Funcionales */}
        <Section title="Módulo 3: Pruebas No Funcionales" icon={<Cpu className="text-neon-green text-2xl" />}>
          
          {/* Pruebas de Rendimiento */}
          <div className="bg-gray-900/50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-orbitron text-neon-green mb-4">Pruebas de Rendimiento, Carga y Estrés</h3>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-neon-cyan font-semibold mb-2">Pruebas de Rendimiento</h4>
                <p className="text-sm text-gray-400 mb-3">
                  Evalúan la velocidad, capacidad de respuesta y estabilidad bajo una carga de trabajo específica.
                </p>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Tiempo de respuesta</li>
                  <li>• Throughput (transacciones/seg)</li>
                  <li>• Utilización de recursos</li>
                  <li>• Latencia de red</li>
                </ul>
              </div>
              
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-neon-purple font-semibold mb-2">Pruebas de Carga</h4>
                <p className="text-sm text-gray-400 mb-3">
                  Verifican el comportamiento bajo condiciones normales y de pico esperadas.
                </p>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Usuarios concurrentes esperados</li>
                  <li>• Carga normal vs pico</li>
                  <li>• Degradación gradual</li>
                  <li>• Capacidad máxima</li>
                </ul>
              </div>
              
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-neon-pink font-semibold mb-2">Pruebas de Estrés</h4>
                <p className="text-sm text-gray-400 mb-3">
                  Determinan los límites del sistema y cómo se comporta bajo condiciones extremas.
                </p>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Punto de ruptura</li>
                  <li>• Recuperación después del fallo</li>
                  <li>• Manejo de errores</li>
                  <li>• Degradación elegante</li>
                </ul>
              </div>
            </div>

            <div className="bg-black/30 p-4 rounded mb-6">
              <h4 className="text-neon-green font-semibold mb-3">Métricas Clave de Rendimiento</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-neon-cyan text-sm font-semibold mb-2">Métricas de Respuesta:</h5>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>• <strong>Response Time:</strong> Tiempo total de respuesta</li>
                    <li>• <strong>Latency:</strong> Tiempo hasta el primer byte</li>
                    <li>• <strong>Think Time:</strong> Pausa entre acciones del usuario</li>
                    <li>• <strong>Connect Time:</strong> Tiempo de establecimiento de conexión</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-neon-purple text-sm font-semibold mb-2">Métricas de Capacidad:</h5>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>• <strong>Throughput:</strong> Transacciones por segundo (TPS)</li>
                    <li>• <strong>Hits per second:</strong> Solicitudes por segundo</li>
                    <li>• <strong>Concurrent Users:</strong> Usuarios simultáneos</li>
                    <li>• <strong>Error Rate:</strong> Porcentaje de errores</li>
                  </ul>
                </div>
              </div>
            </div>

            <h4 className="text-lg font-orbitron text-neon-cyan mb-4">Cómo planificar una prueba de carga</h4>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/30 p-4 rounded">
                <h5 className="text-neon-green font-semibold mb-3">1. Análisis de Requisitos</h5>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• <strong>Usuarios esperados:</strong> Concurrentes y pico</li>
                  <li>• <strong>Transacciones críticas:</strong> Login, compra, búsqueda</li>
                  <li>• <strong>SLA definidos:</strong> Tiempo de respuesta objetivo</li>
                  <li>• <strong>Patrones de uso:</strong> Horarios pico, estacionalidad</li>
                </ul>
              </div>
              
              <div className="bg-black/30 p-4 rounded">
                <h5 className="text-neon-purple font-semibold mb-3">2. Diseño del Test</h5>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• <strong>Escenarios de carga:</strong> Normal, pico, estrés</li>
                  <li>• <strong>Distribución de carga:</strong> Ramp-up gradual</li>
                  <li>• <strong>Duración:</strong> Tiempo suficiente para observar patrones</li>
                  <li>• <strong>Datos de prueba:</strong> Realistas y variados</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Herramientas */}
          <div className="bg-gray-900/50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-orbitron text-neon-purple mb-4">Herramientas de Pruebas de Rendimiento</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-neon-cyan font-semibold mb-3">Apache JMeter</h4>
                <p className="text-sm text-gray-400 mb-3">
                  Herramienta open source para pruebas de carga y rendimiento.
                </p>
                <div className="space-y-2">
                  <div className="bg-gray-800 p-2 rounded text-xs">
                    <strong className="text-neon-green">Características:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• GUI intuitiva</li>
                      <li>• Soporte múltiples protocolos</li>
                      <li>• Distribución de carga</li>
                      <li>• Reportes detallados</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-neon-pink font-semibold mb-3">Gatling</h4>
                <p className="text-sm text-gray-400 mb-3">
                  Framework moderno para pruebas de carga con alto rendimiento.
                </p>
                <div className="space-y-2">
                  <div className="bg-gray-800 p-2 rounded text-xs">
                    <strong className="text-neon-green">Ventajas:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• Scala-based, muy eficiente</li>
                      <li>• Reportes HTML atractivos</li>
                      <li>• Integración CI/CD</li>
                      <li>• Real-time monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Ejemplos JMeter */}
            <h4 className="text-lg font-orbitron text-neon-green mb-4">Configuración de JMeter - Paso a paso</h4>
            
            <div className="space-y-4">
              <CommandBlock
                command="# Descargar e instalar JMeter"
                description="Descarga JMeter desde el sitio oficial de Apache"
                example="wget https://archive.apache.org/dist/jmeter/binaries/apache-jmeter-5.6.2.zip"
              />
              
              <CommandBlock
                command="# Ejecutar JMeter en modo GUI"
                description="Inicia la interfaz gráfica para crear planes de prueba"
                example="./jmeter.sh (Linux/Mac) o jmeter.bat (Windows)"
              />
              
              <CommandBlock
                command="# Ejecutar JMeter en modo non-GUI"
                description="Ejecuta pruebas desde línea de comandos para mejor rendimiento"
                example="jmeter -n -t testplan.jmx -l results.jtl -e -o /path/to/output"
              />
            </div>
            <CodeBlock
              title="JMeter Test Plan - Configuración básica"
              language="xml"
              code={`<?xml version="1.0" encoding="UTF-8"?>
<jmeterTestPlan version="1.2">
  <hashTree>
    <TestPlan testname="API Load Test" enabled="true">
      <elementProp name="TestPlan.arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments"/>
      </elementProp>
    </TestPlan>
    <hashTree>
      <ThreadGroup testname="User Load" enabled="true">
        <stringProp name="ThreadGroup.on_sample_error">continue</stringProp>
        <elementProp name="ThreadGroup.main_controller" elementType="LoopController">
          <boolProp name="LoopController.continue_forever">false</boolProp>
          <stringProp name="LoopController.loops">10</stringProp>
        </elementProp>
        <stringProp name="ThreadGroup.num_threads">50</stringProp>
        <stringProp name="ThreadGroup.ramp_time">60</stringProp>
      </ThreadGroup>
      <hashTree>
        <HTTPSamplerProxy testname="API Request" enabled="true">
          <stringProp name="HTTPSampler.domain">api.ejemplo.com</stringProp>
          <stringProp name="HTTPSampler.port">443</stringProp>
          <stringProp name="HTTPSampler.protocol">https</stringProp>
          <stringProp name="HTTPSampler.path">/api/users</stringProp>
          <stringProp name="HTTPSampler.method">GET</stringProp>
        </HTTPSamplerProxy>
      </hashTree>
    </hashTree>
  </hashTree>
</jmeterTestPlan>`}
            />

            <CodeBlock
              title="Gatling Script - Scala"
              language="scala"
              code={`import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class LoadTestSimulation extends Simulation {

  val httpProtocol = http
    .baseUrl("https://api.ejemplo.com")
    .acceptHeader("application/json")
    .contentTypeHeader("application/json")

  val scn = scenario("Load Test Scenario")
    .exec(
      http("Get Users")
        .get("/api/users")
        .check(status.is(200))
        .check(jsonPath("$.data").exists)
    )
    .pause(1)
    .exec(
      http("Create User")
        .post("/api/users")
        .body(StringBody("""{"name": "Test User", "email": "test@example.com"}"""))
        .check(status.is(201))
    )

  setUp(
    scn.inject(
      atOnceUsers(10),
      rampUsers(50) during (30 seconds),
      constantUsersPerSec(20) during (2 minutes)
    )
  ).protocols(httpProtocol)
}`}
            />
          </div>

          {/* Pruebas de Seguridad */}
          <div className="bg-gray-900/50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-orbitron text-neon-cyan mb-4">Pruebas de Seguridad Básicas</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-neon-pink font-semibold mb-3">Tipos de Vulnerabilidades</h4>
                <div className="space-y-2">
                  <div className="bg-gray-800 p-2 rounded text-sm">
                    <strong className="text-neon-green">OWASP Top 10:</strong>
                    <ul className="text-xs text-gray-400 mt-1 space-y-1">
                      <li>• Injection (SQL, NoSQL, LDAP)</li>
                      <li>• Broken Authentication</li>
                      <li>• Sensitive Data Exposure</li>
                      <li>• XML External Entities (XXE)</li>
                      <li>• Broken Access Control</li>
                      <li>• Security Misconfiguration</li>
                      <li>• Cross-Site Scripting (XSS)</li>
                      <li>• Insecure Deserialization</li>
                      <li>• Known Vulnerable Components</li>
                      <li>• Insufficient Logging</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-neon-purple font-semibold mb-3">Escenarios de Prueba</h4>
                <div className="space-y-3">
                  <div className="bg-gray-800 p-2 rounded">
                    <h5 className="text-neon-cyan text-sm font-semibold">SQL Injection</h5>
                    <p className="text-xs text-gray-400 mb-1">Inyectar código SQL malicioso en campos de entrada</p>
                    <code className="text-xs text-neon-pink">admin'; DROP TABLE users; --</code>
                  </div>
                  <div className="bg-gray-800 p-2 rounded">
                    <h5 className="text-neon-green text-sm font-semibold">XSS (Cross-Site Scripting)</h5>
                    <p className="text-xs text-gray-400 mb-1">Inyectar scripts maliciosos</p>
                    <code className="text-xs text-neon-pink">&lt;script&gt;alert('XSS')&lt;/script&gt;</code>
                  </div>
                  <div className="bg-gray-800 p-2 rounded">
                    <h5 className="text-neon-purple text-sm font-semibold">CSRF</h5>
                    <p className="text-xs text-gray-400">Cross-Site Request Forgery - Ejecutar acciones no autorizadas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black/30 p-4 rounded">
              <h4 className="text-neon-green font-semibold mb-3">Herramientas de Seguridad</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-800 p-3 rounded">
                  <h5 className="text-neon-cyan text-sm font-semibold mb-1">OWASP ZAP</h5>
                  <p className="text-xs text-gray-400">Proxy de seguridad para encontrar vulnerabilidades web</p>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <h5 className="text-neon-pink text-sm font-semibold mb-1">Burp Suite</h5>
                  <p className="text-xs text-gray-400">Plataforma integrada para testing de seguridad web</p>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <h5 className="text-neon-purple text-sm font-semibold mb-1">Nessus</h5>
                  <p className="text-xs text-gray-400">Scanner de vulnerabilidades de red</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interpretación de Métricas */}
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <h3 className="text-xl font-orbitron text-neon-purple mb-4">Interpretación de Métricas y Análisis de Resultados</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-neon-cyan font-semibold mb-3">Métricas Críticas a Observar</h4>
                <div className="space-y-3">
                  <div className="bg-gray-800 p-2 rounded">
                    <h5 className="text-neon-green text-sm font-semibold">Tiempo de Respuesta</h5>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>• <strong>Promedio:</strong> &lt; 2 segundos (web)</li>
                      <li>• <strong>Percentil 90:</strong> &lt; 3 segundos</li>
                      <li>• <strong>Percentil 95:</strong> &lt; 5 segundos</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800 p-2 rounded">
                    <h5 className="text-neon-purple text-sm font-semibold">Throughput</h5>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>• <strong>TPS:</strong> Transacciones por segundo</li>
                      <li>• <strong>Hits/sec:</strong> Solicitudes por segundo</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800 p-2 rounded">
                    <h5 className="text-neon-cyan text-sm font-semibold">Tasa de Errores</h5>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>• <strong>Error Rate:</strong> Porcentaje de errores aceptable (&lt;1%)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-neon-green font-semibold mb-3">Análisis de Resultados</h4>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Comparar métricas con los SLA definidos</li>
                  <li>• Identificar cuellos de botella</li>
                  <li>• Analizar logs y reportes de herramientas</li>
                  <li>• Proponer mejoras de rendimiento</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
{/* Módulo 4: Automatización y DevOps */}
<Section title="Módulo 4: Automatización y DevOps" icon={<Settings className="text-neon-cyan text-2xl" />}>
  <div className="bg-gray-900/50 p-6 rounded-lg mb-6">
    <h3 className="text-xl font-orbitron text-neon-green mb-4">Fundamentos de Integración y Entrega Continua (CI/CD)</h3>
    <ul className="text-sm text-gray-400 mb-4 space-y-1">
      <li>• Automatización de pruebas en pipelines</li>
      <li>• Integración continua: pruebas automáticas en cada commit</li>
      <li>• Entrega continua: despliegue automático tras pasar pruebas</li>
      <li>• Herramientas: Jenkins, GitLab CI, Azure DevOps</li>
    </ul>
    <div className="bg-black/30 p-4 rounded mb-4">
      <h4 className="text-neon-cyan font-semibold mb-2">Ejemplo: Pipeline simple en Jenkins</h4>
      <CodeBlock
        title="Jenkinsfile básico"
        language="groovy"
        code={`pipeline {
agent any
stages {
stage('Checkout') {
steps { git 'https://github.com/usuario/proyecto.git' }
}
stage('Instalar dependencias') {
steps { sh 'npm install' }
}
stage('Ejecutar pruebas') {
steps { sh 'npm test' }
}
}
}`}
      />
    </div>
    <div className="bg-black/30 p-4 rounded">
      <h4 className="text-neon-purple font-semibold mb-2">Versionamiento de scripts de prueba</h4>
      <ul className="text-xs text-gray-400 space-y-1">
        <li>• Usa <span className="text-neon-cyan">Git</span> para controlar cambios</li>
        <li>• Crea ramas para nuevas pruebas</li>
        <li>• Realiza <span className="text-neon-green">pull requests</span> para revisión</li>
      </ul>
      <CommandBlock
        command="git init"
        description="Inicializa un repositorio Git"
      />
      <CommandBlock
        command="git add ."
        description="Agrega todos los archivos al staging"
      />
      <CommandBlock
        command="git commit -m 'Agrega pruebas automatizadas'"
        description="Guarda los cambios en el repositorio"
      />
    </div>
  </div>
</Section>

{/* Módulo 5: Validación de APIs y Servicios */}
<Section title="Módulo 5: Validación de APIs y Servicios" icon={<Database className="text-neon-green text-2xl" />}>
  <div className="bg-gray-900/50 p-6 rounded-lg mb-6">
    <h3 className="text-xl font-orbitron text-neon-cyan mb-4">Pruebas a servicios REST y SOAP</h3>
    <ul className="text-sm text-gray-400 mb-4 space-y-1">
      <li>• Métodos HTTP: GET, POST, PUT, DELETE</li>
      <li>• Códigos de respuesta: 200, 201, 400, 401, 404, 500</li>
      <li>• Autenticación: Basic, Bearer, OAuth</li>
    </ul>
    <div className="bg-black/30 p-4 rounded mb-4">
      <h4 className="text-neon-green font-semibold mb-2">Ejemplo: Petición REST con Postman</h4>
      <CodeBlock
        title="Petición cURL"
        language="bash"
        code={`curl -X GET "https://api.ejemplo.com/usuarios" -H "Authorization: Bearer <token>"`}
      />
    </div>
    <div className="bg-black/30 p-4 rounded">
      <h4 className="text-neon-purple font-semibold mb-2">Validación de respuestas JSON</h4>
      <CodeBlock
        title="Validar esquema JSON en Postman"
        language="javascript"
        code={`pm.test("Esquema válido", function () {
pm.response.to.have.jsonSchema({
"type": "object",
"properties": {
"id": { "type": "integer" },
"nombre": { "type": "string" }
},
"required": ["id", "nombre"]
});
});`}
      />
    </div>
  </div>
</Section>

{/* Módulo 6: Gestión de Defectos */}
<Section title="Módulo 6: Gestión de Defectos" icon={<Bug className="text-neon-pink text-2xl" />}>
  <div className="bg-gray-900/50 p-6 rounded-lg mb-6">
    <h3 className="text-xl font-orbitron text-neon-cyan mb-4">Reporte y seguimiento de bugs</h3>
    <ul className="text-sm text-gray-400 mb-4 space-y-1">
      <li>• Ciclo de vida: detección → registro → análisis → asignación → corrección → verificación → cierre</li>
      <li>• Herramientas: JIRA, Azure DevOps, TestRail, Zephyr</li>
    </ul>
    <div className="bg-black/30 p-4 rounded">
      <h4 className="text-neon-green font-semibold mb-2">Ejemplo de reporte de defecto</h4>
      <pre className="bg-black/50 p-2 rounded text-xs text-gray-300">
Resumen: Error al guardar usuario<br/>
Pasos para reproducir:<br/>
1. Ir a la pantalla de registro<br/>
2. Completar datos válidos<br/>
3. Click en "Guardar"<br/>
Resultado esperado: Usuario guardado<br/>
Resultado actual: Error 500<br/>
Severidad: Alta<br/>
Prioridad: Alta
      </pre>
    </div>
  </div>
</Section>

{/* Módulo 7: Conocimientos Transversales y Buenas Prácticas */}
<Section title="Módulo 7: Buenas Prácticas y Normativas" icon={<Award className="text-neon-green text-2xl" />}>
  <div className="bg-gray-900/50 p-6 rounded-lg mb-6">
    <h3 className="text-xl font-orbitron text-neon-cyan mb-4">Documentación QA y Bitácoras</h3>
    <ul className="text-sm text-gray-400 mb-4 space-y-1">
      <li>• Plan de pruebas, casos de prueba, reportes de ejecución</li>
      <li>• Bitácora: registro diario de actividades y hallazgos</li>
    </ul>
    <h3 className="text-xl font-orbitron text-neon-purple mb-4">Normas y Certificaciones</h3>
    <ul className="text-sm text-gray-400 mb-4 space-y-1">
      <li>• ISO 25000: Calidad de producto software</li>
      <li>• ISTQB: Certificación internacional de testers</li>
    </ul>
    <h3 className="text-xl font-orbitron text-neon-pink mb-4">QA en Metodologías Ágiles</h3>
    <ul className="text-sm text-gray-400 mb-4 space-y-1">
      <li>• QA participa en refinamiento, definición de criterios y demos</li>
      <li>• Trabajo colaborativo con desarrollo y negocio</li>
    </ul>
  </div>
</Section>

{/* Módulo 8: Ejercicio Práctico */}
<Section title="Módulo 8: Ejercicio Práctico" icon={<FileText className="text-neon-cyan text-2xl" />}>
  <div className="bg-gray-900/50 p-6 rounded-lg">
    <h3 className="text-xl font-orbitron text-neon-green mb-4">Caso práctico: Plan y ejecución de pruebas</h3>
    <ol className="list-decimal text-sm text-gray-400 mb-4 ml-6 space-y-1">
      <li>Analiza el requerimiento o historia de usuario</li>
      <li>Define los casos de prueba (funcionales y no funcionales)</li>
      <li>Ejecuta manualmente o automatiza uno de los casos</li>
      <li>Documenta los resultados y reporta defectos si los hay</li>
    </ol>
    <div className="bg-black/30 p-4 rounded">
      <h4 className="text-neon-cyan font-semibold mb-2">Ejemplo de historia de usuario</h4>
      <pre className="bg-black/50 p-2 rounded text-xs text-gray-300">
Como usuario quiero recuperar mi contraseña para poder acceder si la olvido.
      </pre>
      <h4 className="text-neon-green font-semibold mt-3 mb-2">Ejemplo de caso de prueba automatizado (Cypress)</h4>
      <CodeBlock
        title="Cypress - Recuperar contraseña"
        language="javascript"
        code={`describe('Recuperar contraseña', () => {
it('debe enviar email de recuperación', () => {
cy.visit('/recuperar')
cy.get('[data-cy="email"]').type('usuario@test.com')
cy.get('[data-cy="submit-btn"]').click()
cy.get('.success-message').should('contain', 'Correo enviado')
})
})`}
      />
    </div>
  </div>
</Section>
      </div>
    </div>
  );
}