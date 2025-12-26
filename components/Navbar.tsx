import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SectionId } from '../types';

interface NavbarProps {
  onNavigate?: (id: SectionId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: SectionId) => {
    setIsOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollTo(SectionId.HOME)}>
            <div className="text-xl font-serif font-bold tracking-widest text-white">
              RYUGASAKI <span className="text-brand-accent">AD</span>
            </div>
            <div className="text-[10px] text-brand-muted tracking-widest uppercase">Paint Preservation</div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {Object.values(SectionId).map((id) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wider transition-colors"
                >
                  {id}
                </button>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {Object.values(SectionId).map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-gray-300 hover:text-white block px-3 py-4 rounded-md text-base font-medium w-full text-left uppercase"
              >
                {id}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;