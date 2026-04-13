import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Hackathon from './components/Hackathon';
import TechStack from './components/TechStack';
import Education from './components/Education';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  // Prevent scrolling while preloader is active
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
    }
  }, [loading]);

  return (
    <div className="app-wrapper">
      <CustomCursor />
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      <div className="ambient-glow-top"></div>
      <div className="ambient-glow-bottom"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        <Hackathon />
        <TechStack />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
