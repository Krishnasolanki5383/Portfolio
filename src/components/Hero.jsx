import React from 'react';
import { ArrowRight, FileText, Github, Linkedin, Mail, Youtube, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="hero-section">
      <div className="container hero-container">
        
        {/* Left Content */}
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="badge glass">
            <span className="pulse"></span> Available for work
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="hero-title">
            Hi, I'm Krishna. <br />
            I build <span className="text-gradient-vibrant">digital experiences.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="hero-subtitle">
            A software developer focused on crafting clean, responsive, and highly interactive web applications using modern technologies.
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a 
              href="/resume_krishna.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-secondary glass"
            >
              <FileText size={18} /> View Resume
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-socials-row">
            <a href="https://youtube.com/@impure4one?si=3EKJdkot-tDK4PHj" target="_blank" rel="noreferrer" className="hero-social-link glass" title="YouTube">
              <Youtube size={20} />
            </a>
            <a href="https://github.com/Krishnasolanki5383" target="_blank" rel="noreferrer" className="hero-social-link glass" title="GitHub">
              <Github size={20} />
            </a>
            <a href="https://x.com/Krishna1504__" target="_blank" rel="noreferrer" className="hero-social-link glass" title="X (Twitter)">
              <Twitter size={20} />
            </a>
            <a href="https://www.linkedin.com/in/krishna-solanki-55478839a?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="hero-social-link glass" title="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:ks9522769@gmail.com" className="hero-social-link glass" title="Email">
              <Mail size={20} />
            </a>
            <a href="https://leetcode.com/settings/profile/" target="_blank" rel="noreferrer" className="hero-social-link glass" title="LeetCode">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-1.905 1.959 1.545 1.59 1.144-1.171 7.23 7.423a.754.754 0 0 1 0 1.055l-1.037 1.066h2.15l1.391-1.428a2.536 2.536 0 0 0 0-3.51L14.484.414a1.36 1.36 0 0 0-.96-.414ZM8.598 4.211a1.2 1.2 0 0 0-.916.421L.365 11.2a2.38 2.38 0 0 0 0 3.336L7.683 21.8a2.3 2.3 0 0 0 3.254 0l11.66-11.972a.75.75 0 0 0-1.077-1.042l-11.66 11.972a.803.803 0 0 1-1.127 0L2.449 13.492a.855.855 0 0 1 0-1.229L8.85 5.92a.258.258 0 0 1 .378 0l1.528 1.565 1.525-1.571-1.528-1.565a1.2 1.2 0 0 0-.825-.338Z"/>
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Art/Image */}
        <motion.div 
          className="hero-art"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <div className="portrait-container">
            <div className="portrait-glow"></div>
            <img 
              src="https://i.ibb.co/qF74gN5s/MYPHHOTO.jpg" 
              alt="Krishna Solanki" 
              className="hero-portrait"
            />
          </div>
        </motion.div>

      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px; 
          position: relative;
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
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
        }

        .text-gradient-vibrant {
          background: linear-gradient(135deg, #00f0ff 0%, #8a2be2 50%, #ff0080 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% auto;
          animation: gradient-flow 5s linear infinite;
        }

        @keyframes gradient-flow {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          color: var(--text-secondary);
          max-width: 550px;
          margin-bottom: 2rem;
          line-height: 1.8;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .hero-socials-row {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .hero-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          color: var(--text-secondary);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          text-decoration: none;
        }

        .hero-social-link:hover {
          color: var(--accent-neon-blue);
          transform: translateY(-4px) scale(1.1);
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--accent-neon-blue);
          box-shadow: 0 8px 16px rgba(0, 240, 255, 0.2);
        }

        .social-pill:hover {
          color: var(--text-primary);
          transform: translateY(-5px) scale(1.1);
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem 2.5rem;
          border-radius: 14px;
          font-size: 1.1rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
        }

        .btn-primary {
          background: linear-gradient(135deg, #00f0ff, #8a2be2);
          color: white;
          box-shadow: 0 10px 30px rgba(0, 240, 255, 0.3);
          border: none;
        }

        .btn-primary:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 15px 40px rgba(0, 240, 255, 0.45);
        }

        .btn-secondary {
          color: var(--text-primary);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-3px);
        }

        /* Portrait Styling */
        .hero-art {
          position: relative;
          height: 100%;
          min-height: 450px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .portrait-container {
          position: relative;
          width: 350px;
          height: 440px;
          border-radius: 40px;
          animation: float 6s ease-in-out infinite;
          transform-style: preserve-3d;
        }

        .portrait-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90%;
          height: 90%;
          background: radial-gradient(circle, #00f0ff, #8a2be2, #ff0080);
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.4;
          animation: pulse-orb 4s ease-in-out infinite alternate;
          z-index: 0;
        }

        .hero-portrait {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 40px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6);
          position: relative;
          z-index: 1;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(1deg); }
        }

        @keyframes pulse-orb {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
          100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.6; }
        }

        @media (max-width: 991px) {
          .hero-content {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-actions, .hero-socials-row {
            justify-content: center;
          }
          .hero-art {
            display: none; 
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
