import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, Youtube, Twitter } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('/');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track which section is in view and update active state
  useEffect(() => {
    const sections = [
      { id: 'about', path: '/about' },
      { id: 'projects', path: '/projects' },
      { id: 'hackathons', path: '/hackathons' },
      { id: 'stack', path: '/stack' },
      { id: 'education', path: '/education' },
      { id: 'contact', path: '/contact' },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = sections.find(s => s.id === entry.target.id);
            if (match) {
              setActiveSection(match.path);
              // Update URL without triggering scroll
              window.history.replaceState(null, '', match.path);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Sync active section with route changes from Link clicks
  useEffect(() => {
    setActiveSection(location.pathname);
  }, [location.pathname]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navItems = [
    { label: 'Projects', path: '/projects' },
    { label: 'Hackathon', path: '/hackathons' },
    { label: 'Stack', path: '/stack' },
    { label: 'Education', path: '/education' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'glass-nav' : ''}`}>
      <div className="container nav-content">
        <Link to="/" className="logo">
          <span className="text-gradient-accent font-bold" style={{ fontSize: '1.8rem' }}>KS.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="nav-links">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${activeSection === item.path ? 'nav-link-active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggleMobileMenu} aria-label="Toggle Menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu glass">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`mobile-link ${activeSection === item.path ? 'nav-link-active' : ''}`}
              onClick={toggleMobileMenu}
            >
              {item.label}
            </Link>
          ))}
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
          text-decoration: none;
          cursor: pointer;
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

        .nav-link-active {
          color: var(--accent-neon-blue) !important;
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

