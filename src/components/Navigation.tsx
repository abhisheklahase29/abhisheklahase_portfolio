import { motion } from 'framer-motion';
import { Cpu, Code, Folder, User, Mail } from 'lucide-react';
import { clsx } from 'clsx';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navItems = [
  { id: 'hero', label: 'MISSION', icon: Cpu },
  { id: 'skills', label: 'SYSTEMS', icon: Code },
  { id: 'projects', label: 'OPERATIONS', icon: Folder },
  { id: 'about', label: 'PROFILE', icon: User },
  { id: 'contact', label: 'COMMS', icon: Mail },
];

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  return (
    <motion.nav 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed left-0 top-0 h-full w-20 z-50 flex flex-col justify-center"
    >
      {/* Nav background panel */}
      <div className="absolute inset-y-0 left-0 w-full bg-[#0d0d12]/80 border-r border-[#ff2d55]/10" />
      
      <div className="space-y-3 relative z-10">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={clsx(
                "relative w-14 h-14 mx-auto flex items-center justify-center",
                "border transition-all duration-300 group",
                isActive 
                  ? "border-[#ff2d55] bg-[#ff2d55]/10 shadow-[0_0_20px_rgba(255,45,85,0.4)]" 
                  : "border-[#ff2d55]/30 hover:border-[#ff2d55] hover:bg-[#ff2d55]/5"
              )}
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
              style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}
            >
              {/* Inner glow effect */}
              {isActive && (
                <div className="absolute inset-0 bg-[#ff2d55]/5 animate-pulse" />
              )}
              
              <Icon 
                size={20} 
                className={clsx(
                  "transition-all duration-300 relative z-10",
                  isActive ? "text-[#ff2d55] drop-shadow-[0_0_8px_rgba(255,45,85,0.8)]" : "text-[#ff2d55]/50 group-hover:text-[#ff2d55]"
                )} 
              />
              
              {/* Active indicator line */}
              {isActive && (
                <motion.div 
                  layoutId="navIndicator"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#ff2d55]"
                  style={{ boxShadow: '0 0 10px #ff2d55' }}
                />
              )}
              
              {/* Tooltip */}
              <span className="absolute left-full ml-4 px-3 py-1 bg-[#0d0d12]/95 border border-[#ff2d55]/40 text-xs tracking-[0.2em] text-[#ff2d55] opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap z-50"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}>
                {item.label}
              </span>
            </motion.button>
          );
        })}
      </div>
      
      {/* Logo at bottom */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <motion.div 
          className="text-[#ff2d55] text-xs tracking-[0.4em] font-bold font-['Orbitron',sans-serif]"
          whileHover={{ textShadow: '0 0 20px #ff2d55' }}
        >
          NX
        </motion.div>
        <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#ff2d55] to-transparent mx-auto mt-2" />
      </div>

      {/* Decorative corner */}
      <div className="absolute top-8 left-0 right-0 flex justify-center">
        <div className="w-px h-8 bg-gradient-to-b from-transparent via-[#ff2d55]/50 to-transparent" />
      </div>
    </motion.nav>
  );
}
