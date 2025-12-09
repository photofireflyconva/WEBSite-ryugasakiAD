import React from 'react';
import { SectionId } from '../types';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HOME} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Detailing Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-brand-accent tracking-[0.3em] uppercase text-sm md:text-base mb-4 animate-fade-in">
          Ryugasaki, Ibaraki
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
          PRESERVE <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">THE GLOSS</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed">
          削らない、という選択。<br/>
          「塗装保護」に特化した隠れ家ディテーリングショップ。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById(SectionId.MENU)?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-brand-dark font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors"
          >
            View Menu
          </button>
          <button 
            onClick={() => document.getElementById(SectionId.FLOW)?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border border-white text-white font-bold tracking-widest uppercase hover:bg-white/10 transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-brand-muted">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;