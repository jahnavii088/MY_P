
import React from 'react';
import { User, Code, Heart, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Rotating Background Elements */}
      <div className="absolute top-[10%] right-[8%] w-48 h-48 opacity-25 animate-rotate-slow">
        <div className="w-full h-full border-4 border-blue-400/40 rounded-3xl"></div>
      </div>
      <div className="absolute bottom-[15%] left-[12%] w-40 h-40 opacity-30 animate-rotate-reverse">
        <div className="w-full h-full border-4 border-purple-400/40 rounded-full"></div>
      </div>
      <div className="absolute top-[40%] left-[5%] w-32 h-32 opacity-20 animate-rotate-medium">
        <div className="w-full h-full border-4 border-pink-400/35" style={{borderRadius: '30%'}}></div>
      </div>
      <div className="absolute bottom-[25%] right-[15%] w-36 h-36 opacity-28 animate-rotate-fast">
        <div className="w-full h-full border-4 border-indigo-400/40 rounded-2xl rotate-12"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 font-outfit text-slate-900 flex items-center justify-center">
            <User className="mr-2 sm:mr-3 text-blue-600" size={28} />
            About Me
          </h2>
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed text-center max-w-3xl mx-auto">
            <p>
              I am an enthusiastic Computer Science student at KL University with a strong foundation in programming, data structures, and software development. 
            </p>
            <p>
              My technical toolkit includes <strong>C, Java, Python</strong>, and <strong>Web Development</strong>. I also have a keen interest in <strong>Digital Marketing</strong>, allowing me to approach software development with a user-centric and market-aware perspective.
            </p>
            <p>
              I am deeply passionate about <strong>Artificial Intelligence</strong>, problem-solving, and building impactful solutions that tackle real-world challenges. My goal is to create technology that makes a tangible difference in people's lives.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-10 md:mt-12 max-w-3xl mx-auto">
              <div className="group p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 flex items-center space-x-2 sm:space-x-3 hover:shadow-lg hover:scale-105 hover:border-blue-300 transition-all duration-300 cursor-pointer">
                <Code className="text-blue-500 group-hover:scale-110 transition-transform" size={18} />
                <span className="font-medium text-xs sm:text-sm md:text-base text-slate-700 group-hover:text-blue-600">Problem Solver</span>
              </div>
              <div className="group p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 flex items-center space-x-2 sm:space-x-3 hover:shadow-lg hover:scale-105 hover:border-purple-300 transition-all duration-300 cursor-pointer">
                <Heart className="text-purple-500 group-hover:scale-110 transition-transform" size={18} />
                <span className="font-medium text-xs sm:text-sm md:text-base text-slate-700 group-hover:text-purple-600">AI Enthusiast</span>
              </div>
              <div className="group p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-white border border-amber-100 flex items-center space-x-2 sm:space-x-3 hover:shadow-lg hover:scale-105 hover:border-amber-300 transition-all duration-300 cursor-pointer">
                <Lightbulb className="text-amber-500 group-hover:scale-110 transition-transform" size={18} />
                <span className="font-medium text-xs sm:text-sm md:text-base text-slate-700 group-hover:text-amber-600">Tech Innovator</span>
              </div>
              <div className="group p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 flex items-center space-x-2 sm:space-x-3 hover:shadow-lg hover:scale-105 hover:border-indigo-300 transition-all duration-300 cursor-pointer">
                <User className="text-indigo-500 group-hover:scale-110 transition-transform" size={18} />
                <span className="font-medium text-xs sm:text-sm md:text-base text-slate-700 group-hover:text-indigo-600">Leader</span>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default About;
