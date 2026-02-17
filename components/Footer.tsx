import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 transition-colors relative overflow-hidden">
      {/* Rotating Background Elements */}
      <div className="absolute top-[20%] left-[8%] w-32 h-32 opacity-15 animate-rotate-slow">
        <div className="w-full h-full border-3 border-blue-400/25 rounded-3xl"></div>
      </div>
      <div className="absolute top-[15%] right-[10%] w-36 h-36 opacity-18 animate-rotate-reverse">
        <div className="w-full h-full border-3 border-purple-400/25 rounded-full"></div>
      </div>
      <div className="absolute bottom-[10%] left-[15%] w-28 h-28 opacity-12 animate-rotate-medium">
        <div className="w-full h-full border-3 border-pink-400/20" style={{borderRadius: '30%'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-outfit">
              Gandi Jahnavi
            </a>
            <p className="text-slate-500 mt-2 text-sm">
              BTech CSE Student | AI & Web Developer
            </p>
          </div>

          <div className="flex space-x-6 mb-8 md:mb-0">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="group p-3 rounded-full bg-slate-50 text-slate-400 hover:bg-gradient-to-br hover:from-gray-800 hover:to-black hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg">
              <Github size={20} />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="group p-3 rounded-full bg-slate-50 text-slate-400 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="group p-3 rounded-full bg-slate-50 text-slate-400 hover:bg-gradient-to-br hover:from-red-500 hover:to-pink-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg">
              <Mail size={20} />
            </a>
          </div>

          <div className="text-slate-400 text-sm flex items-center">
            Built with <Heart size={14} className="mx-1 text-red-400 fill-red-400" /> by GJ &copy; {new Date().getFullYear()}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-50 text-center">
          <p className="text-[10px] text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text uppercase tracking-widest font-bold">
            Empowering the future through intelligence and design
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;