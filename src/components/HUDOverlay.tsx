import { motion } from 'framer-motion';
import { Activity, Wifi, Cpu, HardDrive, Zap } from 'lucide-react';

interface HUDOverlayProps {
  activeSection: string;
}

export default function HUDOverlay({ activeSection }: HUDOverlayProps) {
  return (
    <>
      {/* Top bar */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="fixed top-0 left-20 right-0 h-10 z-40 flex items-center justify-between px-6 bg-[#0d0d12]/50 border-b border-[#ff2d55]/10"
      >
        {/* Left: System status */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00ff88] rounded-full pulse-glow" />
            <span className="text-[10px] tracking-[0.2em] text-[#00ff88] font-['Share_Tech_Mono',monospace]">ONLINE</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu size={12} className="text-[#ff2d55]/60" />
            <span className="text-[10px] tracking-widest text-gray-500 font-['Share_Tech_Mono',monospace]">AVL v2.047</span>
          </div>
        </div>

        {/* Center: Current section */}
        <div className="flex items-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#ff2d55]/30 to-transparent" />
          <span className="text-xs tracking-[0.3em] text-[#ff2d55] font-['Orbitron',sans-serif]">
            {activeSection.toUpperCase()} // MODULE_ACTIVE
          </span>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#ff2d55]/30 to-transparent" />
        </div>

        {/* Right: Stats */}
        <div className="flex items-center gap-4 text-[10px] font-['Share_Tech_Mono',monospace]">
          <div className="flex items-center gap-1 text-gray-500">
            <Activity size={10} />
            <span>99.9%</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <Wifi size={10} />
            <span>SECURE</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <HardDrive size={10} />
            <span>2.4TB</span>
          </div>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="fixed bottom-0 left-20 right-0 h-8 z-40 flex items-center justify-between px-6 bg-[#0d0d12]/50 border-t border-[#ff2d55]/10"
      >
        {/* Left: Time */}
        <div className="flex items-center gap-4">
          <span className="text-[10px] tracking-widest text-gray-600 font-['Share_Tech_Mono',monospace]">
            {new Date().toISOString().split('T')[0]}
          </span>
          <span className="text-[10px] tracking-widest text-[#ff2d55] font-['Share_Tech_Mono',monospace]">
            {new Date().toTimeString().split(' ')[0].slice(0, 8)}
          </span>
        </div>

        {/* Center: Decorative */}
        <div className="flex items-center gap-1">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className="w-1 h-1 bg-[#ff2d55]/30"
              style={{ 
                clipPath: i % 2 === 0 ? 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' : 'none',
                borderRadius: i % 2 !== 0 ? '50%' : '0'
              }}
            />
          ))}
        </div>

        {/* Right: Location */}
        <div className="flex items-center gap-2">
          <Zap size={10} className="text-[#ff00ff]/60" />
          <span className="text-[10px] tracking-widest text-gray-600 font-['Share_Tech_Mono',monospace]">
            DOMAIN:<span className="text-[#ff00ff]">AI ENGINEERING</span>
          </span>
        </div>
      </motion.div>

      {/* Corner decorations */}
      <div className="fixed top-10 left-20 w-24 h-24 pointer-events-none z-30">
        <div className="absolute top-0 left-0 w-8 h-px bg-gradient-to-r from-[#ff2d55] to-transparent" />
        <div className="absolute top-0 left-0 w-px h-8 bg-gradient-to-b from-[#ff2d55] to-transparent" />
      </div>
      <div className="fixed top-10 right-0 w-24 h-24 pointer-events-none z-30">
        <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-[#ff2d55] to-transparent" />
        <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-[#ff2d55] to-transparent" />
      </div>
    </>
  );
}
