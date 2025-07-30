import { useState, useEffect } from "react";

export default function CursorTrail() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const updateTrail = () => {
      setTrailPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.1,
        y: prev.y + (position.y - prev.y) * 0.1
      }));
      requestAnimationFrame(updateTrail);
    };

    updateTrail();
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="cursor-trail"
        style={{
          left: trailPosition.x - 10,
          top: trailPosition.y - 10
        }}
      />
      <div
        className="fixed w-4 h-4 border border-neon-cyan rounded-full pointer-events-none z-50 opacity-60"
        style={{
          left: position.x - 8,
          top: position.y - 8,
          mixBlendMode: 'screen'
        }}
      />
    </>
  );
}