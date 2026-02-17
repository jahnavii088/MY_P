import React from 'react';
import { CheckCircle2, Zap } from 'lucide-react';
import { SKILL_CATEGORIES } from '../constants.tsx';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Rotating Background Elements */}
      <div className="absolute top-[15%] left-[10%] w-48 h-48 opacity-20 animate-rotate-slow">
        <div className="w-full h-full border-4 border-amber-400/30 rounded-3xl"></div>
      </div>
      <div className="absolute top-[20%] right-[12%] w-40 h-40 opacity-25 animate-rotate-reverse">
        <div className="w-full h-full border-4 border-blue-400/30 rounded-full"></div>
      </div>
      <div className="absolute bottom-[18%] left-[8%] w-44 h-44 opacity-22 animate-rotate-medium">
        <div className="w-full h-full border-4 border-purple-400/30" style={{borderRadius: '30%'}}></div>
      </div>
      <div className="absolute bottom-[12%] right-[15%] w-36 h-36 opacity-28 animate-rotate-fast">
        <div className="w-full h-full border-4 border-amber-500/35 rounded-2xl rotate-12"></div>
      </div>
      <div className="absolute top-[50%] right-[5%] w-32 h-32 opacity-20 animate-rotate-reverse">
        <div className="w-full h-full border-4 border-blue-400/25 rounded-xl rotate-45"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-outfit text-slate-900 mb-3 sm:mb-4 flex items-center justify-center">
            <Zap className="mr-2 sm:mr-3 text-amber-500" size={32} />
            Skills & Expertise
          </h2>
          <p className="text-sm sm:text-base text-slate-600 px-4">
            A comprehensive overview of my technical abilities and professional strengths.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SKILL_CATEGORIES.map((category, index) => (
            <div key={index} className="group bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-3 sm:mb-4 border-b border-slate-100 group-hover:border-blue-200 pb-2 flex justify-between items-center transition-colors">
                {category.category}
                <span className="text-[9px] sm:text-[10px] uppercase text-slate-400 group-hover:text-blue-600 tracking-widest font-bold transition-colors">Expertise</span>
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {category.items.map((skill, sIndex) => (
                  <div 
                    key={sIndex}
                    className="flex items-center px-2 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-slate-50 to-blue-50/30 text-slate-700 text-xs sm:text-sm font-medium border border-slate-200 hover:border-blue-400 hover:shadow-md hover:scale-105 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 cursor-pointer">
                    <CheckCircle2 size={12} className="mr-1 sm:mr-2 text-blue-500" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;