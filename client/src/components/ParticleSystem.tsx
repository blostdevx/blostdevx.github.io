import { useEffect, useRef } from "react";

export default function ParticleSystem() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const colors = ['#00FFFF', '#8A2BE2', '#FF1493', '#32CD32'];

    const createParticle = () => {
      if (Math.random() > 0.98) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = Math.random() * window.innerHeight + 'px';
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        particle.style.boxShadow = `0 0 10px ${color}`;
        
        container.appendChild(particle);

        let opacity = 1;
        let y = parseInt(particle.style.top);
        
        const animateParticle = () => {
          opacity -= 0.02;
          y -= 1;
          particle.style.opacity = opacity + '';
          particle.style.top = y + 'px';
          
          if (opacity <= 0) {
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

    const interval = setInterval(createParticle, 200);

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
