import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
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

// Maps route paths to section IDs
const sectionMap = {
  '/about': 'about',
  '/projects': 'projects',
  '/education': 'education',
  '/stack': 'stack',
  '/hackathons': 'hackathons',
  '/contact': 'contact',
};

// Component that scrolls to the correct section based on the current route
const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = sectionMap[location.pathname];
    if (sectionId) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return null;
};

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
      <ScrollToSection />
      
      {/* All sections render on every route — routing just controls scroll position */}
      <main>
        <Hero />
        <Projects />
        <Hackathon />
        <TechStack />
        <Education />
        <Contact />
      </main>

      {/* Define routes so react-router recognizes clean paths */}
      <Routes>
        <Route path="/" element={null} />
        <Route path="/about" element={null} />
        <Route path="/projects" element={null} />
        <Route path="/education" element={null} />
        <Route path="/stack" element={null} />
        <Route path="/hackathons" element={null} />
        <Route path="/contact" element={null} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;

