import { motion } from 'framer-motion';
import { Folder, ExternalLink, GitBranch, Box, Layers, Zap } from 'lucide-react';

const projects = [
  {
    id: '01',
    name: 'DOC_INTEL_AI',
    description: 'AI-powered document processing system using Azure Document Intelligence to extract structured invoice data with 95%+ accuracy. Reduced manual processing time by 80% through automation and validation pipelines.',
    tags: ['Python', 'Flask', 'Azure', 'SQL Server', 'MLOps'],
    status: 'DEPLOYED',
    metric: '1,000+ invoices/month'
  },
  {
    id: '02',
    name: 'RAG_SEARCH_ENGINE',
    description: 'Retrieval-Augmented Generation system integrating OpenAI APIs with Weaviate vector database for semantic document search and contextual Q&A.',
    tags: ['LangChain', 'OpenAI API', 'Weaviate', 'Flask', 'Vector Search'],
    status: 'OPERATIONAL',
    metric: '90%+ context precision'
  },
  {
    id: '03',
    name: 'AUTOMATION_PIPELINE_X',
    description: 'Robotic Process Automation system using Python and Microsoft Power Automate to streamline SAP document workflows and reduce manual intervention by 50%.',
    tags: ['Python', 'RPA', 'Power Automate', 'Azure'],
    status: 'PRODUCTION',
    metric: '50% time reduction'
  },
  {
    id: '04',
    name: 'REPORT_GEN_ENGINE',
    description: 'Automated report generation engine producing XLSX and CSV reports for enterprise analytics, saving 20+ hours weekly through structured data transformation.',
    tags: ['Python', 'Pandas', 'SQL Server', 'Data Processing'],
    status: 'ACTIVE',
    metric: '50+ reports/week'
  },
];

export default function ProjectsSection() {
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
            <Folder className="text-[#ff2d55]" size={24} />
            <h2 className="text-4xl font-['Orbitron',sans-serif] font-bold tracking-[0.15em]">OPERATIONS LOG</h2>
          </div>
          <div className="h-px bg-gradient-to-r from-[#ff2d55] via-[#ff00ff] to-transparent w-96" />
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              className="group relative"
            >
              {/* Card frame */}
              <div className="absolute inset-0 border border-[#ff2d55]/20 group-hover:border-[#ff2d55]/60 transition-colors duration-300 bg-[#0d0d12]/30"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)' }} />

              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff2d55]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-['Orbitron',sans-serif] text-[#ff2d55]/50 font-bold">{project.id}</span>
                    <div className="h-8 w-px bg-[#ff2d55]/30" />
                    <h3 className="text-xl font-['Orbitron',sans-serif] tracking-[0.1em] group-hover:text-[#ff2d55] transition-colors">
                      {project.name}
                    </h3>
                  </div>
                  <span className="px-3 py-1 text-[10px] tracking-[0.2em] border border-[#ff00ff]/50 text-[#ff00ff]">
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 tracking-wide">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-[10px] tracking-widest bg-[#ff2d55]/5 border border-[#ff2d55]/20 text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center pt-4 border-t border-[#ff2d55]/20">
                  <span className="text-xs text-gray-500 tracking-widest">
                    METRIC: <span className="text-[#ff2d55]">{project.metric}</span>
                  </span>
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 border border-[#ff2d55]/30 text-gray-500 hover:border-[#ff2d55] hover:text-[#ff2d55] transition-colors"
                    >
                      <GitBranch size={16} />
                    </motion.button>
                    <motion.a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 border border-[#ff2d55]/30 text-gray-500 hover:border-[#ff2d55] hover:text-[#ff2d55] transition-colors inline-block"
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#ff2d55]/30 group-hover:border-[#ff2d55] transition-colors" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#ff2d55]/30 group-hover:border-[#ff2d55] transition-colors" />

                {/* Hover icon */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute top-4 right-4"
                >
                  <Box size={20} className="text-[#ff00ff]" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex justify-between items-center px-8 py-6 border border-[#ff2d55]/20 bg-[#0d0d12]/30"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 95% 100%, 0 100%)' }}
        >
          {[
            { label: 'TOTAL_PROJECTS', value: '24', icon: Folder },
            { label: 'LINES_OF_CODE', value: '128K+', icon: Layers },
            { label: 'CLIENTS_SERVED', value: '13', icon: Box },
            { label: 'UPTIME', value: '99.9%', icon: Zap },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center flex flex-col items-center">
                <Icon size={20} className="text-[#ff2d55]/50 mb-2" />
                <div className="text-3xl font-['Orbitron',sans-serif] text-[#ff2d55] mb-1">{stat.value}</div>
                <div className="text-[10px] tracking-[0.2em] text-gray-500">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}
