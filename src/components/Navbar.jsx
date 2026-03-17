import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className={`navbar ${isScrolled ? 'glass-nav' : ''}`}>
      <div className="container nav-content">
        <div className="logo">
          <span className="text-gradient-accent font-bold">KSI.</span>
        </div>

        {/* Desktop Nav */}
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#stack" className="nav-link">Stack</a>
          <div className="nav-divider"></div>
          <div className="social-links">
            <a href="https://github.com/Krishnasolanki5383" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/krishna-solanki-55478839a?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:ks9522769@gmail.com" className="social-icon" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggleMobileMenu} aria-label="Toggle Menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu glass">
          <a href="#about" className="mobile-link" onClick={toggleMobileMenu}>About</a>
          <a href="#projects" className="mobile-link" onClick={toggleMobileMenu}>Projects</a>
          <a href="#stack" className="mobile-link" onClick={toggleMobileMenu}>Stack</a>
          <div className="mobile-socials">
            <a href="https://github.com/Krishnasolanki5383"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/krishna-solanki-55478839a?utm_source=share_via&utm_content=profile&utm_medium=member_android"><Linkedin size={20} /></a>
            <a href="mailto:ks9522769@gmail.com"><Mail size={20} /></a>
          </div>
        </div>
      )}

      {/* Embedded Styles to keep component self-contained */}
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          height: 80px;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.05em;
        }

        .nav-links {
          display: none;
          align-items: center;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .nav-links {
            display: flex;
          }
        }

        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .nav-divider {
          width: 1px;
          height: 24px;
          background-color: var(--border-light);
        }

        .social-links {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .social-icon {
          color: var(--text-secondary);
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .social-icon:hover {
          color: var(--accent-neon-blue);
          transform: translateY(-2px);
        }

        .mobile-toggle {
          display: flex;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }

        @media (min-width: 768px) {
          .mobile-toggle {
            display: none;
          }
        }

        .mobile-menu {
          position: absolute;
          top: 80px;
          left: 1rem;
          right: 1rem;
          padding: 1.5rem;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-link {
          color: var(--text-primary);
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 500;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .mobile-socials {
          display: flex;
          justify-content: center;
          gap: 2rem;
          padding-top: 1rem;
        }
        .mobile-socials a {
          color: var(--text-primary);
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
