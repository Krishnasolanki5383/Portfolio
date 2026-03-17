import React from 'react';
import { ArrowRight, Terminal, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section" id="about">
      <div className="container hero-container">
        
        {/* Left Content */}
        <div className="hero-content">
          <div className="badge glass">
            <span className="pulse"></span> Available for work
          </div>
          
          <h1 className="hero-title">
            Hi, I'm Krishna. <br />
            I build <span className="text-gradient">digital experiences.</span>
          </h1>
          
          <p className="hero-subtitle">
            A software developer focused on crafting clean, responsive, and highly interactive web applications using modern technologies.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a href="#stack" className="btn btn-secondary glass">
              <Terminal size={18} /> Tech Stack
            </a>
          </div>
          
          <div className="hero-socials">
            <a href="https://github.com/Krishnasolanki5383" target="_blank" rel="noreferrer" className="social-pill glass">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/krishna-solanki-55478839a?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="social-pill glass">
              <Linkedin size={20} />
            </a>
            <a href="mailto:ks9522769@gmail.com" className="social-pill glass">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right Art/Image */}
        <div className="hero-art">
          <div className="portrait-container">
            <div className="portrait-glow"></div>
            <img 
              src="https://i.ibb.co/qF74gN5s/MYPHHOTO.jpg" 
              alt="Krishna Solanki" 
              className="hero-portrait"
            />
          </div>
        </div>

      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px; 
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
        }

        @media (min-width: 992px) {
          .hero-container {
            grid-template-columns: 1.2fr 1fr;
          }
        }

        /* Badge */
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 99px;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .pulse {
          width: 8px;
          height: 8px;
          background-color: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          animation: pulsing 2s infinite cubic-bezier(0.66, 0, 0, 1);
        }

        @keyframes pulsing {
          to { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
        }

        /* Typography */
        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: var(--text-secondary);
          max-width: 500px;
          margin-bottom: 3rem;
          line-height: 1.7;
        }

        /* Buttons */
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .hero-socials {
          display: flex;
          gap: 1rem;
        }

        .social-pill {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }

        .social-pill:hover {
          color: var(--accent-neon-blue);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 240, 255, 0.2);
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.875rem 2rem;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          cursor: pointer;
        }

        .btn-primary {
          background: var(--text-primary);
          color: var(--bg-obsidian);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 25px rgba(255, 255, 255, 0.2);
        }

        .btn-secondary {
          color: var(--text-primary);
        }
        
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        /* Portrait Styling */
        .hero-art {
          position: relative;
          height: 100%;
          min-height: 400px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .portrait-container {
          position: relative;
          width: 320px;
          height: 400px;
          border-radius: 32px;
          animation: float 6s ease-in-out infinite;
          transform-style: preserve-3d;
        }

        .portrait-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: 80%;
          background: linear-gradient(135deg, var(--accent-neon-blue), var(--accent-violet));
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.6;
          animation: pulse-orb 4s ease-in-out infinite alternate;
          z-index: 0;
        }

        .hero-portrait {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 32px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: -20px 20px 60px rgba(0, 0, 0, 0.5);
          position: relative;
          z-index: 1;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse-orb {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
          100% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.8; }
        }

        @media (max-width: 991px) {
          .hero-content {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-actions, .hero-socials {
            justify-content: center;
          }
          .hero-art {
            display: none; /* Hide on smaller screens to keep it clean */
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
