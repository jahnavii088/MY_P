import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { EDUCATION } from '../constants.tsx';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Rotating Background Elements */}
      <div className="absolute top-[10%] left-[6%] w-44 h-44 opacity-20 animate-rotate-slow">
        <div className="w-full h-full border-4 border-blue-400/30 rounded-full"></div>
      </div>
      <div className="absolute top-[15%] right-[8%] w-40 h-40 opacity-25 animate-rotate-reverse">
        <div className="w-full h-full border-4 border-purple-400/30 rounded-3xl"></div>
      </div>
      <div className="absolute bottom-[20%] left-[10%] w-36 h-36 opacity-22 animate-rotate-medium">
        <div className="w-full h-full border-4 border-blue-500/30" style={{borderRadius: '25%'}}></div>
      </div>
      <div className="absolute bottom-[15%] right-[12%] w-48 h-48 opacity-28 animate-rotate-fast">
        <div className="w-full h-full border-4 border-purple-500/35 rounded-2xl rotate-45"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 font-outfit text-slate-900 text-center flex items-center justify-center">
          <GraduationCap className="mr-2 sm:mr-3 text-blue-600" size={32} />
          Academic Journey
        </h2>

        <div className="space-y-6 sm:space-y-8 relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 -translate-x-1/2"></div>

          {EDUCATION.map((edu, index) => (
            <div 
              key={index} 
              className={`flex items-start md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="hidden md:block w-5/12"></div>
              
              <div className="z-20 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 w-8 h-8 sm:w-10 sm:h-10 rounded-full border-4 border-white shadow-lg hover:scale-125 transition-transform duration-300 flex-shrink-0 mr-4 md:mr-0 cursor-pointer">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
              </div>

              <div className="flex-1 md:w-5/12 p-4 sm:p-6 glass rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div className="flex items-center text-blue-600 text-xs sm:text-sm font-semibold mb-2">
                  <Calendar size={12} className="mr-1" />
                  {edu.year}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1">{edu.degree}</h3>
                <p className="text-sm sm:text-base text-slate-600 font-medium mb-2 sm:mb-3">{edu.institution}</p>
                <div className="inline-flex items-center px-2 sm:px-3 py-1 bg-green-50 text-green-700 text-xs sm:text-sm font-bold rounded-lg border border-green-100">
                  <Award size={12} className="mr-1" />
                  Grade: {edu.percentage}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;