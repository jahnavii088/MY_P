
import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants.tsx';

const Hero: React.FC = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = 'crafting intelligent systems and human-centric experiences through high-performance code and innovative AI solutions.';
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for 3D parallax effect
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMousePosition({ x, y });
  };

  useEffect(() => {
    let currentIndex = 0;
    let typingTimeout: NodeJS.Timeout;
    
    const typeWriter = () => {
      if (!isDeleting) {
        // Typing phase
        if (currentIndex <= fullText.length) {
          setTypewriterText(fullText.slice(0, currentIndex));
          currentIndex++;
          typingTimeout = setTimeout(typeWriter, 30);
        } else {
          // Finished typing, pause before deleting
          setIsTypingComplete(true);
          typingTimeout = setTimeout(() => {
            setIsDeleting(true);
            currentIndex = fullText.length;
            typeWriter();
          }, 2000); // Pause for 2 seconds
        }
      } else {
        // Deleting phase
        if (currentIndex > 0) {
          setTypewriterText(fullText.slice(0, currentIndex));
          currentIndex--;
          typingTimeout = setTimeout(typeWriter, 15);
        } else {
          // Finished deleting, pause before typing again
          setIsDeleting(false);
          setIsTypingComplete(false);
          currentIndex = 0;
          typingTimeout = setTimeout(typeWriter, 500); // Pause for 0.5 seconds
        }
      }
    };

    typeWriter();

    return () => clearTimeout(typingTimeout);
  }, [isDeleting]);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30" 
      style={{perspective: '2000px'}}
      onMouseMove={handleMouseMove}
    >
      {/* Enhanced background elements */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" style={{transform: 'translateZ(-100px)'}}></div>
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000" style={{transform: 'translateZ(-100px)'}}></div>
      
      {/* Rotating Background Elements */}
      <div className="absolute top-[15%] left-[10%] w-64 h-64 opacity-40 animate-rotate-slow">
        <div className="w-full h-full border-[5px] border-blue-400/60 rounded-3xl"></div>
      </div>
      
      <div className="absolute top-[20%] right-[8%] w-48 h-48 opacity-40 animate-rotate-reverse">
        <div className="w-full h-full border-[5px] border-purple-400/60 rounded-full"></div>
      </div>
      
      <div className="absolute bottom-[15%] left-[15%] w-56 h-56 opacity-35 animate-rotate-medium">
        <div className="w-full h-full border-[5px] border-pink-400/60" style={{borderRadius: '30%'}}></div>
      </div>
      
      <div className="absolute top-[50%] left-[50%] w-32 h-32 -translate-x-1/2 -translate-y-1/2 opacity-45 animate-rotate-fast">
        <div className="w-full h-full border-4 border-blue-500/50 rotate-45" style={{borderRadius: '20%'}}></div>
      </div>
      
      <div className="absolute bottom-[20%] right-[12%] w-40 h-40 opacity-40 animate-rotate-reverse">
        <div className="w-full h-full">
          <div className="absolute inset-0 border-[5px] border-purple-500/50 rounded-2xl rotate-12"></div>
          <div className="absolute inset-4 border-[5px] border-blue-500/50 rounded-2xl -rotate-12"></div>
        </div>
      </div>
      
      <div className="absolute top-[10%] left-[45%] w-36 h-36 opacity-35 animate-rotate-slow">
        <div className="w-full h-full border-[5px] border-blue-400/50 rounded-2xl"></div>
      </div>
      
      <div className="absolute bottom-[25%] left-[60%] w-44 h-44 opacity-38 animate-rotate-medium">
        <div className="w-full h-full border-[5px] border-purple-400/55 rounded-full"></div>
      </div>
      
      <div className="absolute top-[35%] right-[20%] w-52 h-52 opacity-32 animate-rotate-reverse">
        <div className="w-full h-full border-[5px] border-pink-400/50" style={{borderRadius: '25%'}}></div>
      </div>
      
      <div className="absolute bottom-[40%] left-[25%] w-28 h-28 opacity-40 animate-rotate-fast">
        <div className="w-full h-full border-4 border-blue-500/55 rounded-xl rotate-12"></div>
      </div>
      
      <div className="absolute top-[15%] right-[35%] w-20 h-20 opacity-50 animate-spin-orbit">
        <div className="w-5 h-5 bg-gradient-to-r from-blue-500/70 to-purple-500/70 rounded-full shadow-lg"></div>
      </div>
      
      <div className="absolute bottom-[10%] right-[42%] w-24 h-24 opacity-42 animate-rotate-slow">
        <div className="w-full h-full border-4 border-purple-500/60 rounded-3xl rotate-45"></div>
      </div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10 perspective-3d transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${mousePosition.y * -1}deg) rotateY(${mousePosition.x * 1}deg) translateZ(10px)`,
          transformStyle: 'preserve-3d',
          pointerEvents: 'auto'
        }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Badge with animation */}
          <div className="flex justify-center mb-8 sm:mb-12 animate-fade-in animate-float3d">
            <div className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 text-slate-700 text-xs sm:text-sm font-semibold border-2 border-blue-100 shadow-3d hover:shadow-3d-hover transform-3d">
              <Sparkles size={16} className="text-blue-600 animate-pulse" />
              <span className="tracking-wide">AVAILABLE FOR HIRE</span>
            </div>
          </div>

          {/* Main heading with stagger animation */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-outfit text-center mb-6 sm:mb-8 tracking-tighter leading-none perspective-3d">
            <span className="inline-block text-slate-900 animate-slide-up animate-tilt" style={{textShadow: '4px 4px 8px rgba(0,0,0,0.1)'}}>DIGITAL</span>
            <br />
            <span className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-slide-up-delay bg-[length:200%_auto] animate-gradient" style={{textShadow: '4px 4px 12px rgba(147,51,234,0.3)'}}>
              ARCHITECT.
            </span>
          </h1>

          {/* Typewriter Description */}
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-slate-600 max-w-4xl mx-auto mb-12 sm:mb-16 leading-relaxed px-4 min-h-[120px] sm:min-h-[80px]">
            <p>
              I'm <span className="font-bold text-slate-900">Jahnavi</span>, {typewriterText}
              <span className="inline-block w-0.5 h-6 bg-blue-600 ml-1 animate-blink"></span>
            </p>
          </div>

          {/* Social Links with hover effects */}
          <div className="flex justify-center items-center space-x-6 mb-16 sm:mb-20" style={{transform: 'translateZ(50px)', pointerEvents: 'auto'}}>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-900 text-slate-700 hover:text-white transition-all duration-300 shadow-3d card-3d cursor-pointer"
              style={{pointerEvents: 'auto'}}
            >
              <Github size={20} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 hover:bg-blue-600 text-slate-700 hover:text-white transition-all duration-300 shadow-3d card-3d cursor-pointer"
              style={{pointerEvents: 'auto'}}
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 hover:bg-purple-600 text-slate-700 hover:text-white transition-all duration-300 shadow-3d card-3d cursor-pointer"
              style={{pointerEvents: 'auto'}}
            >
              <Mail size={20} />
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-16 sm:mb-20" style={{transform: 'translateZ(50px)', pointerEvents: 'auto'}}>
            <a
              href="#projects"
              className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-3d card-3d flex items-center space-x-3 overflow-hidden cursor-pointer"
              style={{pointerEvents: 'auto'}}
            >
              <span className="relative z-10">Explore My Work</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Enhanced Stats with animation */}
          <div className="grid grid-cols-3 gap-6 sm:gap-10 md:gap-16 max-w-4xl mx-auto">
            <div className="group text-center p-6 rounded-2xl hover:bg-white/80 transition-all duration-500 border border-transparent hover:border-blue-200 card-3d shadow-3d-hover">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-2 group-hover:scale-110 transition-transform">
                3<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">+</span>
              </div>
              <div className="text-xs sm:text-sm md:text-base text-slate-500 uppercase tracking-wider font-semibold">
                Projects Built
              </div>
            </div>
            <div className="group text-center p-6 rounded-2xl hover:bg-white/80 transition-all duration-500 border border-transparent hover:border-purple-200 card-3d shadow-3d-hover">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-2 group-hover:scale-110 transition-transform">
                2<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">+</span>
              </div>
              <div className="text-xs sm:text-sm md:text-base text-slate-500 uppercase tracking-wider font-semibold">
                Years Experience
              </div>
            </div>
            <div className="group text-center p-6 rounded-2xl hover:bg-white/80 transition-all duration-500 border border-transparent hover:border-pink-200 card-3d shadow-3d-hover">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-2 group-hover:scale-110 transition-transform">
                10<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">+</span>
              </div>
              <div className="text-xs sm:text-sm md:text-base text-slate-500 uppercase tracking-wider font-semibold">
                Technologies
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
