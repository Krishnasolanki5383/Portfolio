import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  // Prevent scrolling while preloader is active
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [loading]);

  return (
    <div className="app-wrapper">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      <div className="ambient-glow-top"></div>
      <div className="ambient-glow-bottom"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        <Certificates />
        <TechStack />
        <Contact />
      </main>
    </div>
  );
}

export default App;
