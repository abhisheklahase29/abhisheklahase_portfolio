import { motion } from 'framer-motion';
import { Terminal, Zap, ChevronRight, Shield, Crosshair } from 'lucide-react';

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center pl-20 pr-8 pt-10"
    >
      <div className="max-w-6xl w-full">
        {/* Header decoration */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#ff2d55]/50 to-transparent" />
          <span className="text-[#ff2d55] text-xs tracking-[0.4em] font-semibold flex items-center gap-2">
            <span className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" />
            SYSTEM ONLINE
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#ff2d55]/50 to-transparent" />
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="w-2 h-2 bg-[#ff2d55]"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              />
            ))}
          </div>
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-4"
            >
              <span className="text-[#ff00ff] text-sm tracking-[0.3em] font-medium flex items-center gap-2">
                <Crosshair size={14} />
                /// DIGITAL ARCHITECT
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-7xl font-['Orbitron',sans-serif] font-bold tracking-[0.1em] leading-tight mb-6"
            >
              <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">ABHISHEK</span>
              <br />
              <span className="text-[#ff2d55] drop-shadow-[0_0_30px_rgba(255,45,85,0.6)]">LAHASE</span>
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-400 text-lg tracking-wide max-w-md mb-8 leading-relaxed"
            >
              Full-stack AI developer crafting next-gen digital experiences. 
              Building the bridge between artificial intelligence and human creativity.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4"
            >
              {/* <button className="group relative px-8 py-3 border border-[#ff2d55] text-[#ff2d55] text-sm tracking-[0.2em] font-semibold overflow-hidden"
                      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 95% 100%, 0 100%)' }}>
                <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-300">
                  Download <ChevronRight size={16} />
                </span>
                <div className="absolute inset-0 bg-[#ff2d55] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button> */}
              <a href="/resume.pdf" download>
                <button
                    className="group relative px-8 py-3 border border-[#ff2d55] text-[#ff2d55] text-sm tracking-[0.2em] font-semibold overflow-hidden"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 95% 100%, 0 100%)' }}
                >
                    <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-300">
                    Download <ChevronRight size={16} />
                    </span>
                    <div className="absolute inset-0 bg-[#ff2d55] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
                </a>
              
              <button className="px-8 py-3 border border-[#ff2d55]/30 text-gray-400 text-sm tracking-[0.2em] hover:border-[#ff2d55] hover:text-[#ff2d55] transition-all"
                      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 95% 100%, 0 100%)' }}>
                VIEW_LOGS
              </button>
            </motion.div>
          </div>

          {/* Right side - Decorative HUD */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            {/* Main frame */}
            <div className="relative border border-[#ff2d55]/30 p-8 bg-[#0d0d12]/50"
                 style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)' }}>
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#ff2d55]" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#ff2d55]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#ff2d55]" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#ff2d55]" />
              
              {/* Terminal-like content */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#ff2d55]/60 text-xs">
                  <Terminal size={14} />
                  <span>AVL v2.047</span>
                </div>
                
                <div className="font-['Share_Tech_Mono',monospace] text-sm space-y-2 -ml-5">
                        <div className="flex gap-2">
                            <span className="text-[#ff00ff]">$</span>
                            <span className="text-gray-300">analyze.capabilities()</span>
                        </div>

                        <div className="flex gap-2 pl-4">
                            <span className="text-[#ff2d55]">→</span>
                            <span className="text-gray-400">AI Document Intelligence Systems</span>
                        </div>

                        <div className="flex gap-2 pl-4">
                            <span className="text-[#ff2d55]">→</span>
                            <span className="text-gray-400">RAG & LLMOps Engineering</span>
                        </div>

                        <div className="flex gap-2 pl-4">
                            <span className="text-[#ff2d55]">→</span>
                            <span className="text-gray-400">Azure Cloud + MLOps Deployment</span>
                        </div>

                        <div className="flex gap-2 pl-4">
                            <span className="text-[#ff2d55]">→</span>
                            <span className="text-gray-400">Full-Stack Flask Architecture</span>
                        </div>

                        <div className="flex gap-2 pl-4">
                            <span className="text-[#ff2d55]">→</span>
                            <span className="text-gray-400">Vector Search & Semantic Retrieval</span>
                        </div>

                        <div className="flex gap-2 mt-4">
                            <span className="text-[#ff00ff]">$</span>
                            <span className="text-gray-300 animate-pulse">_</span>
                        </div>
                        </div>
              </div>

              {/* Stats overlay */}
              <div className="absolute right-5 top-1/2 -translate-y-1/2 space-y-3">
                {[
                  { label: 'CPU', value: '89%' },
                  { label: 'MEM', value: '67%' },
                  { label: 'NET', value: '94%' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="flex flex-col items-end"
                  >
                    <span className="text-[10px] text-gray-500 tracking-widest">{stat.label}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1 bg-[#ff2d55]/20">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: stat.value }}
                          transition={{ delay: 1 + i * 0.1, duration: 0.8 }}
                          className="h-full bg-[#ff2d55]"
                          style={{ boxShadow: '0 0 10px #ff2d55' }}
                        />
                      </div>
                      <span className="text-[#ff2d55] text-xs font-['Share_Tech_Mono',monospace]">{stat.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 text-[#ff00ff] drop-shadow-[0_0_15px_rgba(255,0,255,0.6)]"
            >
              <Zap size={32} />
            </motion.div>
            
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-2 -left-2 w-16 h-16 border border-[#ff2d55]/20 rounded-full"
            />
            
            {/* Shield decoration */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, type: 'spring' }}
              className="absolute -bottom-6 -right-6"
            >
              <Shield size={40} className="text-[#ff2d55]/20" />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom info bar */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="absolute bottom-8 left-20 right-8 flex justify-between items-center"
        >
          <div className="flex gap-8 text-xs tracking-widest text-gray-500 font-['Share_Tech_Mono',monospace] ml-80 pl-10">
            <span>LOCATION: <span className="text-[#ff2d55]">INDIA</span></span>
            <span>CONTACT NO: <span className="text-[#00ff88]">+917620372519</span></span>
            <span>E-MAIL: <span className="text-[#ff00ff]">abhilahase2900@gmail.com</span></span>
          </div>
          <div className="flex gap-2 items-center">
            <motion.div 
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-2 h-2 bg-[#ff2d55] rounded-full"
            />
            <span className="text-xs text-gray-500 tracking-widest font-['Share_Tech_Mono',monospace]">LIVE FEED</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
