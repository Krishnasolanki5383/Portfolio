import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hackathon = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const items = [
    {
      id: 1,
      title: 'Hackathon Achievement',
      image: 'https://i.ibb.co/DfHnXQ5f/certtificate.jpg',
      left: 15,
      top: 25,
      rotation: -90,
      delay: 0,
    },
    {
      id: 2,
      title: '2nd Rank Achievement',
      image: 'https://res.cloudinary.com/dktotr6rn/image/upload/q_auto,f_auto,a_-90/v1775737226/20260404_094645_mjfdvf.jpg',
      left: 85,
      top: 25,
      rotation: 0,
      delay: -2,
    },
    {
      id: 3, 
       title: 'Hackathon Venue',
       image: 'https://res.cloudinary.com/dktotr6rn/image/upload/q_auto/f_auto/v1775736763/Hackthoan_photo_hmfxsh.jpg', 
       left: 20,
       top: 75,
       rotation: 0,
       delay: -4,
    },
    { 
       id: 4, 
       title: 'Team Work',
       image: 'https://res.cloudinary.com/dktotr6rn/image/upload/q_auto/f_auto/v1775736510/678A2160_iqjbqe.jpg', 
       left: 80,
       top: 75,
       rotation: 0,
       delay: -1,
    },
  ];

  const hoveredItem = items.find(item => item.id === hoveredId);

  return (
    <section id="hackathons" className="minimal-journey-section">
      {/* Central Text */}
      <motion.h2 
        className="center-title text-gradient"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.7, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        Hackathons
      </motion.h2>

      {/* Center Image Popup */}
      <AnimatePresence>
        {hoveredId && hoveredItem && (
          <motion.div 
            className="center-popup-wrapper visible"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div 
              className="center-popup glass"
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <img 
                src={hoveredItem.image} 
                alt={hoveredItem.title} 
                style={{ transform: `rotate(${hoveredItem.rotation}deg)` }}
                className="center-popup-img"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Canvas */}
      <div className="floating-canvas">
        {items.map((item) => {
          const isHovered = hoveredId === item.id;
          const isDimmed = hoveredId !== null && hoveredId !== item.id;

          return (
            <motion.div 
              key={item.id} 
              className={`drifter ${isHovered ? 'paused' : ''} ${isDimmed ? 'dimmed' : ''}`}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: isDimmed ? 0.3 : 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: item.id * 0.1 }}
              style={{ 
                animationDelay: `${item.delay}s`,
                left: `${item.left}%`,
                top: `${item.top}%`,
              }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="photo-wrapper glass">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="photo-img" 
                  style={{ transform: `rotate(${item.rotation}deg) scale(1.15)` }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <style>{`
        .minimal-journey-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: transparent;
          padding: 4rem 0;
        }

        .center-title {
          font-size: clamp(2.5rem, 8vw, 6rem);
          font-weight: 900;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          pointer-events: none;
          z-index: 1;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .floating-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none; 
        }

        .drifter {
          position: absolute;
          transform-origin: center;
          animation: drifterFloat 12s ease-in-out infinite alternate;
          pointer-events: auto; 
          z-index: 10;
          transition: filter 0.5s ease, opacity 0.5s ease;
        }

        .drifter.paused {
          animation-play-state: paused;
          z-index: 20;
        }

        .drifter.dimmed {
          filter: blur(4px) grayscale(1);
        }

        @keyframes drifterFloat {
          0% { transform: translate(-50%, -50%) translate(0px, 0px) rotate(-2deg); }
          50% { transform: translate(-50%, -50%) translate(30px, -40px) rotate(2deg); }
          100% { transform: translate(-50%, -50%) translate(-20px, 20px) rotate(-1deg); }
        }

        .photo-wrapper {
          width: 280px;
          height: 200px;
          border-radius: 20px;
          overflow: hidden;
          background: #000;
          box-shadow: 0 10px 40px rgba(0,0,0,0.6);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .drifter:hover .photo-wrapper {
          transform: scale(1.1);
          box-shadow: 0 20px 60px rgba(0, 240, 255, 0.3);
          border-color: rgba(0, 240, 255, 0.5);
        }

        .photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Center Popup Overlay */
        .center-popup-wrapper {
          position: absolute;
          inset: 0;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 50;
        }

        .center-popup {
          width: 700px;
          max-width: 90vw;
          height: 500px;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 50px 120px rgba(0,0,0,0.9), 0 0 60px rgba(0, 240, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(20px);
        }

        .center-popup-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #000;
        }

        @media screen and (max-width: 768px) {
          .photo-wrapper {
            width: 180px;
            height: 130px;
          }
          
          .center-popup {
            width: 95vw;
            height: 350px;
          }

          .drifter:nth-child(1) { left: 25% !important; top: 15% !important; }
          .drifter:nth-child(2) { left: 75% !important; top: 15% !important; }
          .drifter:nth-child(3) { left: 25% !important; top: 85% !important; }
          .drifter:nth-child(4) { left: 75% !important; top: 85% !important; }
        }
      `}</style>
    </section>
  );
};

export default Hackathon;

