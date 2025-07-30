import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const container = containerRef.current;

    const createMatrixChar = () => {
      if (Math.random() > 0.95) {
        const char = document.createElement('div');
        char.className = 'matrix-char';
        char.textContent = chars[Math.floor(Math.random() * chars.length)];
        char.style.left = Math.random() * window.innerWidth + 'px';
        char.style.animationDuration = (Math.random() * 3 + 2) + 's';
        char.style.fontSize = (Math.random() * 10 + 12) + 'px';
        char.style.opacity = Math.random() * 0.8 + 0.2 + '';
        
        container.appendChild(char);

        setTimeout(() => {
          if (char.parentNode) {
            char.parentNode.removeChild(char);
          }
        }, 5000);
      }
    };

    const interval = setInterval(createMatrixChar, 100);

    return () => {
      clearInterval(interval);
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ zIndex: 1 }}
    />
  );
}