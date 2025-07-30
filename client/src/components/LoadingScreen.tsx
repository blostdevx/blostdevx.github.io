import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const loadingTexts = [
    'Inicializando Protocolo Matrix...',
    'Conectando a Red Neural...',
    'Cargando Algoritmos Cuánticos...',
    'Estableciendo Conexión Segura...',
    'Sistema Listo. Bienvenido a la Matrix.'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return newProgress;
      });

      if (Math.random() > 0.7) {
        setTextIndex(Math.floor(Math.random() * loadingTexts.length));
      }
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-deep-black z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="text-6xl font-orbitron font-bold text-neon-cyan mb-8 animate-pulse-neon"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        BLOSTDEVX
      </motion.div>

      <motion.div
        className="text-xl font-fira text-neon-green typewriter-text mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {loadingTexts[textIndex]}
      </motion.div>

      <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="mt-4 text-neon-cyan font-fira text-sm">
        {Math.round(progress)}%
      </div>

      {/* Loading Animation Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-10 h-10 border border-neon-cyan opacity-30"
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/4 w-8 h-8 border border-neon-purple opacity-30 rotate-45"
        animate={{ 
          rotate: [45, 405],
          y: [-10, 10, -10]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}