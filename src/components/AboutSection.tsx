import { motion } from 'framer-motion';
import { User, Cpu, Zap, MessageSquare, Award, Calendar, MapPin } from 'lucide-react';

const timeline = [
  { year: '2025 - PRESENT', event: 'MASTERS DATA SCIENCE & ARTIFICIAL INTELLIGENCE  — IIT ROORKEE ' },
  { year: '2024 - PRESENT', event: 'SOFTWARE DEVELOPER — ARYAN IMAGING AND BUSINESS CONSULTANTS PVT. LTD.' },
  { year: '2019-2023', event: 'BACHELOR OF ENGINEERING — COMPUTER SCIENCE ENGINEERING' },
];


const values = [
  { 
    icon: Cpu, 
    title: 'INTELLIGENT SYSTEMS', 
    description: 'Designing AI-driven architectures that transform raw data into actionable intelligence.' 
  },
  { 
    icon: Zap, 
    title: 'AUTOMATION FIRST', 
    description: 'Eliminating manual workflows through AI, RPA, and cloud-native engineering solutions.' 
  },
  { 
    icon: MessageSquare, 
    title: 'SCALABLE ENGINEERING', 
    description: 'Building production-ready systems with reliability, precision, and measurable impact.' 
  },
];

export default function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pl-20 pr-8 py-12 pt-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div 
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-2">
            <User className="text-[#ff2d55]" size={24} />
            <h2 className="text-4xl font-['Orbitron',sans-serif] font-bold tracking-[0.15em]">OPERATOR PROFILE</h2>
          </div>
          <div className="h-px bg-gradient-to-r from-[#ff2d55] via-[#ff00ff] to-transparent w-96" />
        </motion.div>

        <div className="grid grid-cols-3 gap-8">
          {/* Main bio */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="col-span-2"
          >
            <div className="relative border border-[#ff2d55]/30 p-8 mb-8 bg-[#0d0d12]/50"
                 style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)' }}>
              
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#ff2d55]" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#ff2d55]" />
              
              <div className="absolute top-0 left-0 px-4 py-1 bg-[#0d0d12] border-l border-t border-[#ff2d55]/30 text-xs tracking-widest text-[#ff2d55] flex items-center gap-2">
                <Award size={12} />
                BIO_DATA
              </div>

              <div className="space-y-6 mt-4">
                <p className="text-gray-300 text-lg leading-relaxed tracking-wide">
                    I'm a <span className="text-[#ff2d55]">SDE - AI Developer</span> operating at the intersection of 
                    <span className="text-[#ff00ff]"> artificial intelligence</span> and 
                    <span className="text-[#ff2d55]"> automations</span>. 
                    I engineer production-ready AI pipelines, RAG frameworks, and intelligent document systems built for scale.
                </p>
                <p className="text-gray-400 leading-relaxed">
                    From semantic retrieval engines to enterprise AI deployments, 
                    my focus is on building adaptive systems that reduce complexity, automate decisions, and deliver measurable business impact.
                </p>
                </div>

              {/* Location & info */}
              <div className="flex gap-6 mt-6 pt-6 border-t border-[#ff2d55]/20">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <MapPin size={14} className="text-[#ff00ff]" />
                  <span className="tracking-wide">San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Calendar size={14} className="text-[#ff00ff]" />
                  <span className="tracking-wide">Available for work</span>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-4 gap-4 mt-8 pt-6 border-t border-[#ff2d55]/20">
                {[
                  { value: '2+', label: 'YEARS EXP' },
                  { value: '8+', label: 'PROJECTS' },
                  { value: '13', label: 'CLIENTS' },
                  { value: '4', label: 'CERTIFICATIONS' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-['Orbitron',sans-serif] text-[#ff2d55]">{stat.value}</div>
                    <div className="text-[10px] tracking-widest text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="relative pl-8">
              {/* Timeline line */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[#ff2d55] via-[#ff00ff] to-transparent" />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="relative py-4 group"
                >
                  <div className="absolute -left-[33px] top-5 w-3 h-3 bg-[#0d0d12] border-2 border-[#ff2d55] group-hover:bg-[#ff2d55]/20 transition-colors" 
                       style={{ boxShadow: '0 0 10px #ff2d55' }} />
                  <div className="flex gap-4 items-center">
                    <span className="text-xl font-['Orbitron',sans-serif] text-[#ff2d55] font-bold">{item.year}</span>
                    <span className="text-gray-400 text-sm tracking-wide">{item.event}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xs tracking-[0.3em] text-gray-500 mb-4 flex items-center gap-2">
              <Cpu size={12} className="text-[#ff00ff]" />
              CORE_VALUES
            </h3>
            
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group p-4 border border-[#ff2d55]/20 hover:border-[#ff2d55]/50 transition-colors bg-[#0d0d12]/30"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon size={20} className="text-[#ff2d55]" />
                    <span className="text-sm tracking-[0.2em] text-[#ff2d55] font-semibold">
                      {value.title}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}

            {/* Availability status */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-8 p-4 border border-[#00ff88]/30 bg-[#00ff88]/5"
            >
              <div className="flex items-center gap-3 mb-2">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-[#00ff88]"
                  style={{ boxShadow: '0 0 10px #00ff88' }}
                />
                <span className="text-sm tracking-[0.2em] text-[#00ff88]">AVAILABLE FOR WORK</span>
              </div>
              <p className="text-xs text-gray-500">
                Currently accepting new projects and collaborations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
