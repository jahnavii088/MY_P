import React from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { PROJECTS } from '../constants.tsx';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Rotating Background Elements */}
      <div className="absolute top-[12%] left-[8%] w-52 h-52 opacity-25 animate-rotate-reverse">
        <div className="w-full h-full border-4 border-purple-400/40 rounded-full"></div>
      </div>
      <div className="absolute top-[18%] right-[10%] w-44 h-44 opacity-30 animate-rotate-slow">
        <div className="w-full h-full border-4 border-blue-400/40 rounded-3xl"></div>
      </div>
      <div className="absolute bottom-[20%] left-[15%] w-36 h-36 opacity-28 animate-rotate-medium">
        <div className="w-full h-full border-4 border-pink-400/40" style={{borderRadius: '25%'}}></div>
      </div>
      <div className="absolute bottom-[15%] right-[18%] w-40 h-40 opacity-32 animate-rotate-fast">
        <div className="w-full h-full border-4 border-purple-500/40 rounded-2xl rotate-45"></div>
      </div>
      <div className="absolute top-[45%] right-[5%] w-28 h-28 opacity-25 animate-rotate-reverse">
        <div className="w-full h-full border-4 border-blue-400/35 rounded-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-outfit text-slate-900 mb-3 sm:mb-4 flex items-center justify-center">
            <Layers className="mr-2 sm:mr-3 text-purple-600" size={32} />
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-4">
            A selection of my recent works exploring Artificial Intelligence and modern web technologies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={index}
              className="group glass rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 hover:border-blue-200 transition-all duration-500 cursor-pointer"
            >
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 inline-block group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                {project.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-outfit text-slate-900 mb-2 sm:mb-3">{project.title}</h3>
              <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                {project.tags.map((tag, tIndex) => (
                  <span 
                    key={tIndex}
                    className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-slate-600 text-[10px] sm:text-xs font-semibold rounded-full border border-blue-100 hover:border-blue-300 hover:shadow-sm transition-all cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <button className="flex items-center text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
                  Case Study <ArrowRight size={16} className="ml-1" />
                </button>
                <div className="flex-grow"></div>
                <Github size={18} className="text-slate-400 hover:text-slate-900 cursor-pointer transition-colors" />
                <ExternalLink size={18} className="text-slate-400 hover:text-blue-600 cursor-pointer transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default Projects;