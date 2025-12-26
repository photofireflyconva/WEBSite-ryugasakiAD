import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import MenuSection from './components/MenuSection';
import BookingFlow from './components/BookingFlow';
import Footer from './components/Footer';
import { SectionId } from './types';
import { Camera, ArrowLeft } from 'lucide-react';

function App() {
  const [view, setView] = useState<'main' | 'gallery'>('main');

  const handleNavigate = (id: SectionId) => {
    if (id === SectionId.GALLERY) {
      setView('gallery');
      window.scrollTo(0, 0);
    } else {
      setView('main');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  };

  if (view === 'gallery') {
    return (
      <div className="bg-brand-dark min-h-screen text-slate-50 font-sans flex flex-col">
        <nav className="fixed w-full z-50 bg-brand-dark/95 shadow-lg backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex-shrink-0 cursor-pointer" onClick={() => setView('main')}>
                <div className="text-xl font-serif font-bold tracking-widest text-white">
                  RYUGASAKI <span className="text-brand-accent">AD</span>
                </div>
              </div>
              <button 
                onClick={() => setView('main')}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider"
              >
                <ArrowLeft size={18} /> Back to Home
              </button>
            </div>
          </div>
        </nav>

        <main className="flex-grow flex items-center justify-center pt-20">
          <div className="text-center px-4 animate-fade-in-up">
            <div className="inline-flex p-6 rounded-full bg-slate-800 border border-brand-accent/20 text-brand-accent mb-8">
              <Camera size={48} />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Gallery</h1>
            <p className="text-xl text-brand-accent tracking-[0.2em] uppercase mb-8">Coming Soon</p>
            <div className="w-16 h-1 bg-brand-accent mx-auto mb-8"></div>
            <p className="text-gray-400 max-w-md mx-auto leading-relaxed mb-12">
              現在、施工事例を準備中です。<br />
              最新の施工写真はInstagramにて公開しております。
            </p>
            <a 
              href="https://www.instagram.com/ryugasaki_auto_detailing?igsh=ZndmeHBtOXhndGx4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-dark font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors"
            >
              Instagramで見る
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-brand-dark min-h-screen text-slate-50 font-sans selection:bg-brand-accent selection:text-brand-dark">
      <Navbar onNavigate={handleNavigate} />
      <main>
        <Hero />
        <Concept />
        <MenuSection />
        <BookingFlow />
      </main>
      <Footer />
    </div>
  );
}

export default App;