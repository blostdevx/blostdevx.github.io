import { useEffect, useRef } from "react";

export default function ParticleSystem() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const colors = ['#00FFFF', '#8A2BE2', '#FF1493', '#32CD32', '#00BFFF'];

    const createParticle = () => {
      if (Math.random() > 0.97) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = Math.random() * window.innerHeight + 'px';
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        particle.style.boxShadow = `0 0 15px ${color}`;
        
        // Random size
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        container.appendChild(particle);

        let opacity = 1;
        let y = parseInt(particle.style.top);
        let x = parseInt(particle.style.left);
        const drift = (Math.random() - 0.5) * 2; // Random horizontal drift
        
        const animateParticle = () => {
          opacity -= 0.015;
          y -= Math.random() * 2 + 1;
          x += drift;
          
          particle.style.opacity = opacity + '';
          particle.style.top = y + 'px';
          particle.style.left = x + 'px';
          
          if (opacity <= 0 || y < -10) {
            if (particle.parentNode) {
              particle.parentNode.removeChild(particle);
            }
          } else {
            requestAnimationFrame(animateParticle);
          }
        };
        
        requestAnimationFrame(animateParticle);
      }
    };

    const interval = setInterval(createParticle, 300);

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
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}