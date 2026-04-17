import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Users, Award, Trophy, Sparkles, X } from 'lucide-react';

const Hackathon = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Helper to determine if an image needs rotation in the lightbox
  const needsRotation = (url) => url.includes('DfHnXQ5f');

  return (
    <section id="hackathons" className="bento-hackathon-section">
      <div className="container">
        
        {/* Massive Aesthetic Header */}
        <div className="bento-header">
           <h2 className="stroke-title">ACHIEVEMENTS</h2>
           <h3 className="neon-subtitle">
             <Sparkles className="sparkle-icon" size={28} /> 
             Hackathons & Recognition
           </h3>
           <p className="bento-header-desc">
             A visual journey through intense coding competitions, team collaborations, and academic victories.
           </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="bento-grid">
          
          {/* Box 1: Ganpat Venue (Wide) */}
          <motion.div 
            className="bento-card bento-wide glass-card hover-glow-cyan"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedImage('https://res.cloudinary.com/dktotr6rn/image/upload/q_auto/f_auto/v1775736763/Hackthoan_photo_hmfxsh.jpg')}
          >
            <div className="bento-bg-image">
               <img src="https://res.cloudinary.com/dktotr6rn/image/upload/q_auto/f_auto/v1775736763/Hackthoan_photo_hmfxsh.jpg" alt="Ganpat Hackathon Venue" />
            </div>
            <div className="bento-overlay">
               <div className="bento-icon-wrapper cyan">
                 <MapPin size={24} />
               </div>
               <div className="bento-text">
                 <h4>Ganpat Hackathon Venue</h4>
                 <p>Ganpat University Campus</p>
               </div>
            </div>
          </motion.div>

          {/* Box 2: GEC Certificate (Square) */}
          <motion.div 
            className="bento-card bento-square glass-card hover-glow-purple"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={() => setSelectedImage('https://i.ibb.co/DfHnXQ5f/certtificate.jpg')}
          >
            <div className="bento-cert-image">
               <img className="rot-neg90" src="https://i.ibb.co/DfHnXQ5f/certtificate.jpg" alt="GEC Certificate" />
            </div>
            <div className="bento-cert-footer">
               <div className="cert-meta">
                  <Award size={18} className="text-purple" />
                  <span>Participant & Winner</span>
               </div>
               <h4>GEC Gandhinagar</h4>
            </div>
          </motion.div>

          {/* Box 3: Team Collaboration (Square) */}
          <motion.div 
            className="bento-card bento-square glass-card hover-glow-blue"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => setSelectedImage('https://res.cloudinary.com/dktotr6rn/image/upload/q_auto/f_auto/v1775736510/678A2160_iqjbqe.jpg')}
          >
            <div className="bento-bg-image">
               <img src="https://res.cloudinary.com/dktotr6rn/image/upload/q_auto/f_auto/v1775736510/678A2160_iqjbqe.jpg" alt="Team Collab" />
            </div>
            <div className="bento-overlay">
               <div className="bento-icon-wrapper blue">
                 <Users size={24} />
               </div>
               <div className="bento-text">
                 <h4>Team Collaboration</h4>
                 <p>Working on our Innovation</p>
               </div>
            </div>
          </motion.div>

          {/* Box 4: Ganpat Univ 2nd Rank Certificate (Wide Featured) */}
          <motion.div 
            id="certificates"
            className="bento-card bento-wide glass-card featured-gold-glow"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => setSelectedImage('https://res.cloudinary.com/dktotr6rn/image/upload/q_auto,f_auto,a_-90/v1775737226/20260404_094645_mjfdvf.jpg')}
          >
            <div className="featured-cert-layout">
              <div className="featured-cert-image">
                 <img src="https://res.cloudinary.com/dktotr6rn/image/upload/q_auto,f_auto,a_-90/v1775737226/20260404_094645_mjfdvf.jpg" alt="Ganpat University Certificate" />
              </div>
              <div className="featured-cert-details">
                 <div className="featured-badge">
                   <Trophy size={16} /> 2nd Rank Achievement
                 </div>
                 <h2>Ganpat University</h2>
                 <p className="award-desc">Silver Medalist • Hackathon</p>
                 <div className="ambient-gold-line"></div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Full Screen Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              className="lightbox-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
                <X size={32} />
              </button>
              <motion.img 
                src={selectedImage} 
                alt="Enlarged view" 
                className={`lightbox-img ${needsRotation(selectedImage) ? 'rot-neg90' : ''}`}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      <style>{`
        /* Master Section Styling */
        .bento-hackathon-section {
          padding: 120px 0;
          background: radial-gradient(circle at center, rgba(15,15,20,1) 0%, rgba(5,5,5,1) 100%);
          position: relative;
          overflow: hidden;
        }

        /* Typography */
        .bento-header {
          text-align: center;
          margin-bottom: 5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stroke-title {
          font-size: 6rem;
          font-weight: 900;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.08);
          margin: 0;
          line-height: 1;
          letter-spacing: 6px;
          text-transform: uppercase;
          pointer-events: none;
        }

        .neon-subtitle {
          font-size: 2.2rem;
          color: white;
          margin: -2.2rem 0 1rem 0;
          display: flex;
          align-items: center;
          gap: 1rem;
          text-shadow: 0 0 20px rgba(0, 240, 255, 0.5);
          z-index: 1;
        }

        .bento-header-desc {
          color: #aaa;
          max-width: 600px;
          font-size: 1.15rem;
          line-height: 1.6;
        }

        /* Grid System */
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 350px;
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .bento-wide { grid-column: span 2; }
        .bento-square { grid-column: span 1; }

        /* Card Essentials */
        .bento-card {
          border-radius: 24px;
          position: relative;
          overflow: hidden;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .bento-card:hover {
          transform: translateY(-5px);
        }

        /* Hover Glow Variants */
        .hover-glow-cyan:hover { box-shadow: 0 15px 40px rgba(0, 240, 255, 0.15); border-color: rgba(0, 240, 255, 0.3); }
        .hover-glow-purple:hover { box-shadow: 0 15px 40px rgba(138, 43, 226, 0.15); border-color: rgba(138, 43, 226, 0.3); }
        .hover-glow-blue:hover { box-shadow: 0 15px 40px rgba(0, 150, 255, 0.15); border-color: rgba(0, 150, 255, 0.3); }

        .featured-gold-glow {
           background: linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, rgba(20,20,20,1) 100%);
           border: 1px solid rgba(255, 215, 0, 0.15);
        }
        .featured-gold-glow:hover {
           box-shadow: 0 20px 50px rgba(255, 215, 0, 0.15);
           border-color: rgba(255, 215, 0, 0.5);
        }

        /* Image Viewer Mechanics */
        .bento-bg-image {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 1;
        }

        .bento-bg-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .bento-card:hover .bento-bg-image img {
          transform: scale(1.05);
        }

        /* Overlay Text Blocks */
        .bento-overlay {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 2rem;
          background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 60%, transparent 100%);
          z-index: 2;
          display: flex;
          align-items: flex-end;
          gap: 1.25rem;
        }

        .bento-icon-wrapper {
          width: 54px;
          height: 54px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(5px);
          flex-shrink: 0;
        }
        .bento-icon-wrapper.cyan { background: rgba(0,240,255,0.2); color: #00f0ff; }
        .bento-icon-wrapper.blue { background: rgba(0,150,255,0.2); color: #0096ff; }

        .bento-text h4 {
          margin: 0 0 0.35rem 0;
          font-size: 1.5rem;
          color: white;
          font-family: var(--font-heading);
        }

        .bento-text p {
          margin: 0;
          color: rgba(255,255,255,0.7);
          font-size: 0.95rem;
        }

        /* Square Certificate Layout */
        .bento-cert-image {
          height: 70%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.5);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding: 1rem;
        }

        .rot-neg90 {
          transform: rotate(-90deg);
        }

        .bento-cert-image img {
          max-width: 90%;
          max-height: 90%;
          object-fit: contain;
          transition: transform 0.5s ease;
        }

        .bento-card:hover .bento-cert-image .rot-neg90 { transform: scale(1.05) rotate(-90deg); }

        .bento-cert-footer {
          padding: 1.5rem;
          height: 30%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: rgba(20,20,20,0.8);
        }

        .cert-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .text-purple { color: #a46cf0; }
        .cert-meta span { color: #bbb; font-size: 0.85rem; font-weight: 500; }
        .bento-cert-footer h4 { margin: 0; font-size: 1.25rem; color: white; font-family: var(--font-heading); }

        /* Wide Featured Certificate Layout */
        .featured-cert-layout {
          display: flex;
          height: 100%;
          align-items: stretch;
        }

        .featured-cert-image {
          flex: 1;
          background: rgba(0,0,0,0.6);
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 1px solid rgba(255,255,255,0.05);
        }
        
        .featured-cert-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.5s;
        }

        .bento-card:hover .featured-cert-image img { transform: scale(1.05); }

        .featured-cert-details {
          flex: 1;
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }

        .featured-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 215, 0, 0.1);
          color: #ffd700;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          align-self: flex-start;
          border: 1px solid rgba(255, 215, 0, 0.3);
        }

        .featured-cert-details h2 {
          font-size: 2.2rem;
          color: white;
          margin: 0 0 0.5rem 0;
          line-height: 1.1;
          font-family: var(--font-heading);
        }

        .award-desc {
          color: #aaa;
          font-size: 1.1rem;
          margin: 0;
        }

        .ambient-gold-line {
          position: absolute;
          bottom: 0; left: 0;
          height: 3px;
          width: 0%;
          background: linear-gradient(90deg, transparent, #ffd700, transparent);
          transition: width 0.6s ease;
        }

        .bento-card:hover .ambient-gold-line {
          width: 100%;
        }

        /* Lightbox Styling */
        .lightbox-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(10px);
          z-index: 999999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          cursor: pointer;
        }

        .lightbox-close {
          position: absolute;
          top: 2rem; right: 2rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
          z-index: 10;
        }

        .lightbox-close:hover {
          background: var(--accent-neon-blue);
          color: black;
          transform: rotate(90deg) scale(1.1);
          box-shadow: 0 0 30px rgba(0, 240, 255, 0.5);
        }

        .lightbox-img {
          max-width: 90vw;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 20px;
          box-shadow: 0 20px 80px rgba(0,0,0,0.8);
          cursor: default;
        }

        /* Mobile Responsiveness */
        @media (max-width: 1024px) {
          .bento-grid { grid-template-columns: repeat(2, 1fr); }
          .bento-wide { grid-column: span 2; }
          .bento-square { grid-column: span 1; }
          .stroke-title { font-size: 5rem; }
        }

        @media (max-width: 768px) {
          .bento-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: min-content;
          }
          .bento-wide, .bento-square {
            grid-column: span 1;
            height: 350px;
          }
          .stroke-title { font-size: 3.2rem; letter-spacing: 2px; }
          .neon-subtitle { font-size: 1.6rem; margin-top: -1.2rem; }
          .featured-cert-layout { flex-direction: column; }
          .featured-cert-image, .featured-cert-details { flex: none; height: 250px; border-right: none; }
          .bento-card.bento-wide.featured-gold-glow { height: 500px; }
          .lightbox-img { max-width: 95vw; max-height: 80vh; }
        }
      `}</style>
    </section>
  );
};

export default Hackathon;
