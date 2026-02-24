import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection.tsx';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Navigation from './components/Navigation';
import HUDOverlay from './components/HUDOverlay';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden font-['Rajdhani',sans-serif] selection:bg-[#ff2d55] selection:text-white">
      {/* Enhanced Grid Background */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.04] grid-pulse"
        style={{ 
          backgroundImage: `
            linear-gradient(#ff2d55 1px, transparent 1px),
            linear-gradient(90deg, #ff2d55 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: `perspective(500px) rotateX(60deg) translateY(0) translateZ(-200px)`,
        }}
      />
      
      {/* Secondary subtle grid */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{ 
          backgroundImage: `
            linear-gradient(#ff00ff 1px, transparent 1px),
            linear-gradient(90deg, #ff00ff 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] z-50">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px]" />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff2d55] to-transparent scanline-anim opacity-50" />
      </div>

      {/* Vignette Effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-40"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)`,
        }}
      />

      {/* Mouse follower glow */}
      <div 
        className="fixed w-96 h-96 pointer-events-none z-0 opacity-20 transition-transform duration-75 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(255,45,85,0.3) 0%, transparent 70%)',
          left: '50%',
          top: '50%',
          transform: `translate(calc(-50% + ${mousePosition.x * 50}px), calc(-50% + ${mousePosition.y * 50}px))`,
        }}
      />
      
      <HUDOverlay activeSection={activeSection} />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {activeSection === 'hero' && <HeroSection key="hero" />}
          {activeSection === 'skills' && <SkillsSection key="skills" />}
          {activeSection === 'projects' && <ProjectsSection key="projects" />}
          {activeSection === 'about' && <AboutSection key="about" />}
          {activeSection === 'contact' && <ContactSection key="contact" />}
        </AnimatePresence>
      </main>
    </div>
  );
}
