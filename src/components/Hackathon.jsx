import React, { useState } from 'react';

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
      <h2 className="center-title text-gradient">Hackathons</h2>

      {/* Center Image Popup (Appears on hover) */}
      <div className={`center-popup-wrapper ${hoveredId ? 'visible' : ''}`}>
        {hoveredItem && (
          <div className="center-popup glass">
            <img 
              src={hoveredItem.image} 
              alt={hoveredItem.title} 
              style={{ transform: `rotate(${hoveredItem.rotation}deg)` }}
              className="center-popup-img"
            />
          </div>
        )}
      </div>

      {/* Floating Canvas */}
      <div className="floating-canvas">
        {items.map((item) => {
          const isHovered = hoveredId === item.id;
          const isDimmed = hoveredId !== null && hoveredId !== item.id;

          return (
            <div 
              key={item.id} 
              className={`drifter ${isHovered ? 'paused' : ''} ${isDimmed ? 'dimmed' : ''}`}
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
            </div>
          );
        })}
      </div>

      <style>{`
        .minimal-journey-section {
          position: relative;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: transparent;
        }

        .center-title {
          font-size: clamp(1.2rem, 3vw, 2.5rem);
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          opacity: 0.7;
          pointer-events: none;
          z-index: 1;
          transition: opacity 0.5s ease;
        }

        /* Hide text slightly when popup appears */
        .center-popup-wrapper.visible ~ .center-title {
          opacity: 0.1;
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
          animation: drifterFloat 8s ease-in-out infinite alternate;
          pointer-events: auto; /* Enable hover */
          z-index: 10;
          transition: all 0.5s ease;
        }

        .drifter.paused {
          animation-play-state: paused;
          z-index: 20;
        }

        .drifter.dimmed {
          opacity: 0.3;
          filter: blur(2px);
        }

        @keyframes drifterFloat {
          0% { transform: translate(-50%, -50%) translate(0px, 0px) rotate(0deg); }
          33% { transform: translate(-50%, -50%) translate(15px, -20px) rotate(2deg); }
          66% { transform: translate(-50%, -50%) translate(-15px, 15px) rotate(-1deg); }
          100% { transform: translate(-50%, -50%) translate(20px, -5px) rotate(3deg); }
        }

        .photo-wrapper {
          width: 250px;
          height: 180px;
          border-radius: 16px;
          overflow: hidden;
          background: #000;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Subtle pop when hovering the original drifter */
        .drifter:hover .photo-wrapper {
          transform: scale(1.05);
          box-shadow: 0 15px 40px rgba(120, 0, 255, 0.4);
          border-color: rgba(255,255,255,0.4);
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
          pointer-events: none; /* Crucial: clicks/hover pass completely through to drifters */
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 50;
          opacity: 0;
          transition: opacity 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .center-popup-wrapper.visible {
          opacity: 1;
        }

        .center-popup {
          width: 600px;
          max-width: 90vw;
          height: 450px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,0.9), 0 0 50px rgba(120, 0, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transform: scale(0.9);
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .center-popup-wrapper.visible .center-popup {
          transform: scale(1);
        }

        .center-popup-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #050505;
        }

        @media screen and (max-width: 768px) {
          .photo-wrapper {
            width: 160px;
            height: 110px;
          }
          
          .center-popup {
            width: 95vw;
            height: 300px;
          }

          .drifter:nth-child(1) { left: 25% !important; top: 20% !important; }
          .drifter:nth-child(2) { left: 75% !important; top: 20% !important; }
          .drifter:nth-child(3) { left: 25% !important; top: 80% !important; }
          .drifter:nth-child(4) { left: 75% !important; top: 80% !important; }
        }
      `}</style>
    </section>
  );
};

export default Hackathon;
