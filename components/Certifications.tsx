import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../constants.tsx';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-12 sm:py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Rotating Background Elements */}
      <div className="absolute top-[12%] left-[10%] w-44 h-44 opacity-25 animate-rotate-slow">
        <div className="w-full h-full border-4 border-green-400/40 rounded-3xl"></div>
      </div>
      <div className="absolute top-[18%] right-[8%] w-40 h-40 opacity-30 animate-rotate-reverse">
        <div className="w-full h-full border-4 border-blue-400/40 rounded-full"></div>
      </div>
      <div className="absolute bottom-[20%] left-[15%] w-36 h-36 opacity-28 animate-rotate-medium">
        <div className="w-full h-full border-4 border-green-500/40" style={{borderRadius: '30%'}}></div>
      </div>
      <div className="absolute bottom-[15%] right-[12%] w-48 h-48 opacity-32 animate-rotate-fast">
        <div className="w-full h-full border-4 border-blue-500/40 rounded-2xl rotate-12"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-outfit text-slate-900 mb-8 sm:mb-10 md:mb-12 text-center flex items-center justify-center">
          <ShieldCheck className="mr-2 sm:mr-3 text-green-600" size={32} />
          Certifications
        </h2>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <div 
              key={index}
              className="flex items-center space-x-3 sm:space-x-4 glass p-4 sm:p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-green-200 hover:-translate-y-2 hover:scale-105 transition-all duration-300 group max-w-sm w-full cursor-pointer"
            >
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-2 sm:p-3 rounded-xl group-hover:bg-gradient-to-br group-hover:from-green-600 group-hover:to-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                <Award size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">{cert.provider}</p>
                <h3 className="text-sm sm:text-base font-bold text-slate-800 leading-tight">{cert.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;