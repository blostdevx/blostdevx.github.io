import { useState, useEffect } from "react";
import LoadingScreen from "../components/LoadingScreen";
import MatrixRain from "../components/MatrixRain";
import CursorTrail from "../components/CursorTrail";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import TechStack from "../components/TechStack";
import BlogSection from "../components/BlogSection";
import WriteupSection from "../components/WriteupSection";
import DocsSection from "../components/DocsSection";
import ContactSection from "../components/ContactSection";
import ParticleSystem from "../components/ParticleSystem";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-deep-black text-white relative overflow-x-hidden">
      <CursorTrail />
      <MatrixRain />
      <ParticleSystem />
      
      <Navigation />
      
      <main>
        <HeroSection />
        <TechStack />
        <BlogSection />
        <WriteupSection />
        <DocsSection />
        <ContactSection />
      </main>

      <footer className="py-8 border-t border-neon-cyan/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            &copy; 2024 BlostDevX. Coded in the digital realm. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
