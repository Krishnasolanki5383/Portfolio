import React from 'react';
import { ArrowRight, Terminal, Github, Linkedin, Mail, Youtube, Twitter } from 'lucide-react';
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
    <section className="hero-section" id="about">
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
            <a href="#stack" className="btn btn-secondary glass">
              <Terminal size={18} /> Tech Stack
            </a>
          </motion.div>
          
          <motion.div variants={itemVariants} className="hero-socials">
            <a href="https://youtube.com/@impure4one?si=3EKJdkot-tDK4PHj" target="_blank" rel="noreferrer" className="social-pill glass">
              <Youtube size={20} />
            </a>
            <a href="https://github.com/Krishnasolanki5383" target="_blank" rel="noreferrer" className="social-pill glass">
              <Github size={20} />
            </a>
            <a href="https://x.com/Krishna1504__" target="_blank" rel="noreferrer" className="social-pill glass">
              <Twitter size={20} />
            </a>
            <a href="https://www.linkedin.com/in/krishna-solanki-55478839a?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="social-pill glass">
              <Linkedin size={20} />
            </a>
            <a href="mailto:ks9522769@gmail.com" className="social-pill glass">
              <Mail size={20} />
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
          margin-bottom: 3.5rem;
          line-height: 1.8;
        }

        /* Buttons */
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .hero-socials {
          display: flex;
          gap: 1.25rem;
        }

        .social-pill {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          color: var(--text-secondary);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
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
          .hero-actions, .hero-socials {
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
