import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import MenuSection from './components/MenuSection';
import BookingFlow from './components/BookingFlow';
import Footer from './components/Footer';
import AiConsultant from './components/AiConsultant';

function App() {
  return (
    <div className="bg-brand-dark min-h-screen text-slate-50 font-sans selection:bg-brand-accent selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <MenuSection />
        <BookingFlow />
      </main>
      <Footer />
      <AiConsultant />
    </div>
  );
}

export default App;