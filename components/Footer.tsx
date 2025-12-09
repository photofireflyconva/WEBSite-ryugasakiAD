import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="font-serif text-white font-bold tracking-widest text-lg mb-2">
          RYUGASAKI <span className="text-brand-accent">AD</span>
        </p>
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} Ryugasaki Auto Detailing. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;