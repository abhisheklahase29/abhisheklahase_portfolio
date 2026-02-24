import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const socials = [
  { icon: Github, label: 'GITHUB', href: 'https://github.com/abhisheklahase29' },
  { icon: Linkedin, label: 'LINKEDIN', href: 'https://www.linkedin.com/in/abhishek-lahase-20a9031a5/' },
  { icon: Instagram, label: 'INSTAGRAM', href: 'https://www.instagram.com/__ronnie.29' },
];
    
export default function ContactSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pl-20 pr-8 py-12 flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section header */}
        <motion.div 
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-2">
            <Mail className="text-[#ff2d55]" size={24} />
            <h2 className="text-4xl font-orbitron font-bold tracking-[0.15em]">ESTABLISH UPLINK</h2>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-[#ff2d55] to-transparent w-64 mx-auto" />
          <p className="mt-4 text-gray-400 tracking-wide">Ready to initiate a new operation? Send a transmission.</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs tracking-[0.2em] text-gray-500">TRANSMISSION_SOURCE</label>
                <input 
                  type="text" 
                  placeholder="YOUR_NAME"
                  className="w-full bg-transparent border border-[#ff2d55]/30 px-4 py-3 text-sm tracking-[0.1em] text-white placeholder-gray-600 focus:border-[#ff2d55] focus:shadow-[0_0_20px_rgba(255,45,85,0.3)] outline-none transition-all"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 95% 100%, 0 100%)' }}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs tracking-[0.2em] text-gray-500">REPLY_ADDRESS</label>
                <input 
                  type="email" 
                  placeholder="YOUR_EMAIL"
                  className="w-full bg-transparent border border-[#ff2d55]/30 px-4 py-3 text-sm tracking-[0.1em] text-white placeholder-gray-600 focus:border-[#ff2d55] focus:shadow-[0_0_20px_rgba(255,45,85,0.3)] outline-none transition-all"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 95% 100%, 0 100%)' }}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs tracking-[0.2em] text-gray-500">PAYLOAD</label>
                <textarea 
                  rows={5}
                  placeholder="MESSAGE_CONTENT..."
                  className="w-full bg-transparent border border-[#ff2d55]/30 px-4 py-3 text-sm tracking-[0.1em] text-white placeholder-gray-600 focus:border-[#ff2d55] focus:shadow-[0_0_20px_rgba(255,45,85,0.3)] outline-none transition-all resize-none"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)' }}
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 border border-[#ff2d55] text-[#ff2d55] text-sm tracking-[0.3em] font-semibold hover:bg-[#ff2d55] hover:text-black transition-all flex items-center justify-center gap-2"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 95% 100%, 0 100%)' }}
              >
                <Send size={16} />
                TRANSMIT
              </motion.button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Direct contact */}
            <div className="space-y-4">
              <h3 className="text-xs tracking-[0.3em] text-gray-500">DIRECT_CHANNEL</h3>
              <a 
                href="mailto:abhilahase2900@gmail.com"
                className="block text-xl font-orbitron text-[#ff2d55] hover:text-[#ff00ff] transition-colors tracking-wider"
              >
                abhilahase2900@gmail.com
              </a>
            </div>

            {/* Social links */}
            <div className="space-y-4">
              <h3 className="text-xs tracking-[0.3em] text-gray-500">NETWORK_NODES</h3>
              <div className="space-y-3">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="p-3 border border-[#ff2d55]/30 group-hover:border-[#ff2d55] group-hover:bg-[#ff2d55]/10 transition-all">
                        <Icon size={20} className="text-gray-400 group-hover:text-[#ff2d55] transition-colors" />
                      </div>
                      <span className="text-sm tracking-[0.2em] text-gray-500 group-hover:text-[#ff2d55] transition-colors">
                        {social.label}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Response time */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="p-4 border border-[#ff2d55]/20"
            >
              <div className="flex items-center gap-3 mb-2">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-2 h-2 bg-[#ff2d55]"
                />
                <span className="text-xs tracking-[0.2em] text-gray-400">AVG RESPONSE: 24h</span>
              </div>
              <p className="text-xs text-gray-500">
                All transmissions are encrypted and reviewed personally.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#ff2d55] to-transparent mx-auto mb-4" />
          <p className="text-xs tracking-[0.3em] text-gray-600">
            NEXUS SYSTEMS <span className="text-[#ff2d55]">©</span> 2024 // ALL RIGHTS RESERVED
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
