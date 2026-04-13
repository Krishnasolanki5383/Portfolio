import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Award, ChevronLeft, Sparkles, Trophy, MapPin, Users } from 'lucide-react';

const Hackathon = () => {
  const [activeView, setActiveView] = useState('initial'); // 'initial', 'menu', 'photos', 'certificates'

  const photos = [
    {
      title: 'Ganpat Hackathon Venue',
      image: 'https://res.cloudinary.com/dktotr6rn/image/upload/q_auto/f_auto/v1775736763/Hackthoan_photo_hmfxsh.jpg',
      icon: <MapPin size={18} />,
      info: 'Ganpat University Campus'
    },
    {
      title: 'Team Collaboration',
      image: 'https://res.cloudinary.com/dktotr6rn/image/upload/q_auto/f_auto/v1775736510/678A2160_iqjbqe.jpg',
      icon: <Users size={18} />,
      info: 'Working on our Innovation'
    }
  ];

  const certificates = [
    {
      title: 'GEC Gandhinagar',
      image: 'https://i.ibb.co/DfHnXQ5f/certtificate.jpg',
      subtitle: 'Achievement Certificate',
      rank: 'Participant/Winner',
      rotation: -90
    },
    {
      title: 'Ganpat University',
      image: 'https://res.cloudinary.com/dktotr6rn/image/upload/q_auto,f_auto,a_-90/v1775737226/20260404_094645_mjfdvf.jpg',
      subtitle: '2nd Rank Achievement',
      rank: 'Silver Medalist',
      rotation: 0
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.4 } }
  };

  return (
    <section id="hackathons" className="hackathon-redesign-section">
      <div className="container">
        <AnimatePresence mode="wait">
          {/* INITIAL VIEW: Attractive Button */}
          {activeView === 'initial' && (
            <motion.div 
              key="initial"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="initial-view"
            >
              <motion.button 
                className="explore-btn glass"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px var(--accent-neon-blue)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveView('menu')}
              >
                <div className="btn-content">
                  <Sparkles className="sparkle-icon" />
                  <span className="btn-text">Explore My Hackathon Journey</span>
                </div>
                <div className="btn-glow"></div>
              </motion.button>
              <p className="hint-text">Click to reveal the moments and achievements</p>
            </motion.div>
          )}

          {/* MENU VIEW: Choose Photos or Certificates */}
          {activeView === 'menu' && (
            <motion.div 
              key="menu"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="menu-view"
            >
              <div className="menu-header">
                <h2 className="section-title">Select <span className="text-gradient-accent">Category</span></h2>
              </div>
              <div className="menu-grid">
                <motion.div 
                   className="category-card glass"
                   whileHover={{ y: -10, borderColor: 'var(--accent-neon-blue)' }}
                   onClick={() => setActiveView('photos')}
                >
                  <div className="cat-icon-box blue">
                    <Camera size={32} />
                  </div>
                  <h3>The Moments</h3>
                  <p>Gallery of Ganpat Hackathon memories</p>
                </motion.div>

                <motion.div 
                   className="category-card glass"
                   whileHover={{ y: -10, borderColor: 'var(--accent-violet)' }}
                   onClick={() => setActiveView('certificates')}
                >
                  <div className="cat-icon-box violet">
                    <Award size={32} />
                  </div>
                  <h3>The Awards</h3>
                  <p>Certificates of excellence and participation</p>
                </motion.div>
              </div>
              <button className="back-btn" onClick={() => setActiveView('initial')}>
                <ChevronLeft size={20} /> Back
              </button>
            </motion.div>
          )}

          {/* PHOTOS VIEW: Ganpat Hackathon Gallery */}
          {activeView === 'photos' && (
            <motion.div 
              key="photos"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="content-view"
            >
              <div className="content-header">
                <h2 className="section-title">Ganpat <span className="text-gradient-accent">Hackathon</span></h2>
                <button className="back-btn-top" onClick={() => setActiveView('menu')}>
                  <ChevronLeft size={20} /> Back to Gallery
                </button>
              </div>
              <div className="photo-gallery">
                {photos.map((photo, i) => (
                  <motion.div 
                    key={i} 
                    className="photo-card glass"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="img-container">
                      <img src={photo.image} alt={photo.title} />
                    </div>
                    <div className="photo-info">
                       <h4>{photo.title}</h4>
                       <div className="info-meta">
                         {photo.icon} <span>{photo.info}</span>
                       </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* CERTIFICATES VIEW: GEC & Ganpat Univ */}
          {activeView === 'certificates' && (
            <motion.div 
              key="certificates"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="content-view"
            >
              <div className="content-header">
                <h2 className="section-title">Academic <span className="text-gradient-accent">Recognition</span></h2>
                <button className="back-btn-top" onClick={() => setActiveView('menu')}>
                  <ChevronLeft size={20} /> Back to Gallery
                </button>
              </div>
              <div className="cert-gallery">
                {certificates.map((cert, i) => (
                  <motion.div 
                    key={i} 
                    className="cert-card glass"
                    initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <div className="cert-img-box">
                      <img src={cert.image} alt={cert.title} style={{ transform: `rotate(${cert.rotation}deg)` }} />
                    </div>
                    <div className="cert-details">
                      <Trophy className="trophy-icon" style={{ color: i === 0 ? 'var(--accent-neon-blue)' : 'var(--accent-violet)' }} />
                      <div className="cert-text">
                        <h3>{cert.title}</h3>
                        <p className="subtitle">{cert.subtitle}</p>
                        <span className="rank-tag" style={{ background: i === 0 ? 'rgba(0, 240, 255, 0.1)' : 'rgba(138, 43, 226, 0.1)', color: i === 0 ? 'var(--accent-neon-blue)' : 'var(--accent-violet)' }}>
                          {cert.rank}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .hackathon-redesign-section {
          min-height: 80vh;
          padding: 100px 0;
          display: flex;
          align-items: center;
          position: relative;
        }

        .initial-view {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          text-align: center;
        }

        .explore-btn {
          padding: 1.5rem 3rem;
          border-radius: 50px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .btn-content {
          display: flex;
          align-items: center;
          gap: 1rem;
          z-index: 1;
          position: relative;
        }

        .sparkle-icon {
          color: var(--accent-neon-blue);
          animation: sparkleAnim 2s infinite;
        }

        @keyframes sparkleAnim {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }

        .hint-text {
          color: var(--text-muted);
          font-size: 0.9rem;
          letter-spacing: 1px;
        }

        /* Menu View */
        .menu-view {
          text-align: center;
        }

        .menu-header {
          margin-bottom: 4rem;
        }

        .menu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto 3rem;
        }

        .category-card {
          padding: 3rem 2rem;
          border-radius: 24px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          transition: all 0.4s ease;
        }

        .cat-icon-box {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.5rem;
        }

        .cat-icon-box.blue { background: rgba(0, 240, 255, 0.1); color: var(--accent-neon-blue); }
        .cat-icon-box.violet { background: rgba(138, 43, 226, 0.1); color: var(--accent-violet); }

        .category-card h3 { font-size: 1.8rem; margin: 0; }
        .category-card p { color: var(--text-secondary); margin: 0; }

        .back-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          margin: 2rem auto 0;
          font-weight: 600;
          transition: color 0.2s;
        }

        .back-btn:hover { color: white; }

        /* Content Views */
        .content-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 4rem;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .back-btn-top {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: var(--text-secondary);
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s;
        }

        .back-btn-top:hover {
          background: rgba(255,255,255,0.1);
          color: white;
          transform: translateX(-5px);
        }

        /* Photo Gallery */
        .photo-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2.5rem;
        }

        .photo-card {
          border-radius: 20px;
          overflow: hidden;
          padding: 1rem;
        }

        .img-container {
          width: 100%;
          height: 300px;
          border-radius: 15px;
          overflow: hidden;
          margin-bottom: 1.5rem;
        }

        .img-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .photo-card:hover img { transform: scale(1.1); }

        .photo-info h4 { font-size: 1.4rem; margin-bottom: 0.5rem; }
        .info-meta { display: flex; align-items: center; gap: 0.75rem; color: var(--text-muted); font-size: 0.9rem; }

        /* Cert Gallery */
        .cert-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 3rem;
        }

        .cert-card {
          border-radius: 24px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .cert-img-box {
          width: 100%;
          height: 350px;
          border-radius: 16px;
          overflow: hidden;
          background: #000;
        }

        .cert-img-box img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .cert-details {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .trophy-icon { flex-shrink: 0; }

        .cert-text h3 { font-size: 1.6rem; margin-bottom: 0.2rem; }
        .subtitle { color: var(--text-muted); font-size: 1rem; margin-bottom: 0.75rem; }
        .rank-tag {
          padding: 0.4rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .content-header { justify-content: center; text-align: center; }
          .photo-gallery, .cert-gallery { grid-template-columns: 1fr; }
          .cert-img-box { height: 250px; }
          .img-container { height: 200px; }
          .menu-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Hackathon;
