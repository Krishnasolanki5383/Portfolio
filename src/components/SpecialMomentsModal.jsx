import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy, Camera, Video, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const SpecialMomentsModal = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moments = [
    {
      type: 'image',
      url: 'https://res.cloudinary.com/dktotr6rn/image/upload/q_auto/f_auto/v1775736763/Hackthoan_photo_hmfxsh.jpg',
      title: 'Convergence Hackathon',
      subtitle: 'Ganpat University, Mehsana, Gujarat',
      icon: <Camera size={20} />
    },
    {
      type: 'image',
      url: 'https://res.cloudinary.com/dktotr6rn/image/upload/q_auto/f_auto/v1775736510/678A2160_iqjbqe.jpg',
      title: '100% Skills-Based & Fair',
      subtitle: 'Showcasing our true innovation and teamwork',
      icon: <Video size={20} />
    },
    {
      type: 'image',
      url: 'https://res.cloudinary.com/dktotr6rn/image/upload/q_auto,f_auto,a_-90/v1775737226/20260404_094645_mjfdvf.jpg',
      title: '2nd Rank Achievers',
      subtitle: 'Secured second position and won the prize pool!',
      icon: <Trophy size={20} />
    },
    {
      type: 'video',
      url: '/Award-collecting.mp4',
      title: 'Hackathon Highlights',
      subtitle: 'A glimpse into our winning journey',
      icon: <Sparkles size={20} />
    }
  ];

  // Auto-rotation logic
  useEffect(() => {
    if (!isOpen) return;

    let timer;
    if (moments[currentIndex].type === 'image') {
      timer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % moments.length);
      }, 6000); // Rotate every 6 seconds
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isOpen, currentIndex, moments.length]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="special-moments-overlay">
        <motion.div 
          className="bento-modal"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          <button className="bento-close" onClick={onClose}>
            <X size={18} />
          </button>

          <div className="bento-content">
             {/* LEFT PANE */}
             <div className="bento-left">
                <div className="bento-media-container">
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={currentIndex}
                      className="bento-media-track"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {moments[currentIndex].type === 'image' ? (
                        <img 
                          src={moments[currentIndex].url} 
                          alt="Hackathon Memory"
                          className="bento-media-item"
                        />
                      ) : (
                        <video 
                           src={moments[currentIndex].url} 
                           className="bento-media-video"
                           autoPlay
                           loop
                           muted
                           playsInline
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>
                  
                  <div className="bento-counter">
                    {currentIndex + 1} / {moments.length}
                  </div>
                </div>

                <div className="bento-thumbnails-area">
                   <p className="thumbnail-caption">Moments from Hackathon Journey</p>
                   <div className="thumbnail-track">
                     {moments.map((moment, index) => {
                       const isVideo = moment.type === 'video';
                       const thumbUrl = isVideo 
                          ? moments[0].url
                          : moment.url;

                       return (
                         <div 
                           key={index}
                           className={`thumbnail-box ${currentIndex === index ? 'active' : ''}`}
                           onClick={() => setCurrentIndex(index)}
                         >
                           <img src={thumbUrl} alt="thumb" />
                           {isVideo && <div className="video-thumb-icon"><Video size={14}/></div>}
                         </div>
                       );
                     })}
                   </div>
                </div>
             </div>

             {/* RIGHT PANE */}
             <div className="bento-right">
                <div className="bento-badge-row">
                   <span className="bento-dot"></span> OFFLINE HACKATHON • WINNER
                </div>
                
                <h1 className="bento-title">Ganpat<br/>University</h1>
                <p className="bento-subtitle">Mehsana, Gujarat • 2025</p>

                <div className="bento-trophy-row">
                   <span className="bento-emoji">🏆</span>
                   <div className="bento-trophy-text">
                     <strong>2nd Place</strong>
                     <span>Offline Hackathon</span>
                   </div>
                </div>

                <p className="bento-desc">
                  Secured 2nd place at Ganpat University by architecting a highly scalable solution under immense time pressure. It served as a definitive testament to our rapid development skills, collaborative synergy, and ability to deliver production-ready code.
                </p>

                <button className="bento-portfolio-btn" onClick={onClose}>
                  CONTINUE TO PORTFOLIO <span className="arrow-icon">→</span>
                </button>
             </div>
          </div>
        </motion.div>

        <style>{`
          .special-moments-overlay {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(5px);
            z-index: 99999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
          }

          .bento-modal {
            width: 100%;
            max-width: 1000px;
            background: #0d0d0d;
            border-radius: 20px;
            border: 1px solid rgba(255,255,255,0.05);
            position: relative;
            box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          }

          .bento-close {
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            color: #888;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 100;
            transition: all 0.2s;
          }

          .bento-close:hover {
            background: rgba(255,255,255,0.1);
            color: #fff;
          }

          .bento-content {
            display: flex;
            align-items: stretch;
            height: 600px;
          }

          /* LEFT PANE */
          .bento-left {
            flex: 1.2;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            border-right: 1px solid rgba(255,255,255,0.05);
            background: rgba(255,255,255,0.01);
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
          }

          .bento-media-container {
            flex: 1;
            position: relative;
            background: #050505;
            border-radius: 12px;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .bento-media-track {
            width: 100%;
            height: 100%;
          }

          .bento-media-item, .bento-media-video {
            width: 100%;
            height: 100%;
            object-fit: contain;
            border: none;
          }

          .bento-counter {
            position: absolute;
            bottom: 15px;
            right: 15px;
            background: rgba(0,0,0,0.6);
            padding: 4px 10px;
            border-radius: 12px;
            color: #888;
            font-size: 0.8rem;
            font-weight: 500;
            letter-spacing: 1px;
            border: 1px solid rgba(255,255,255,0.05);
          }

          .bento-thumbnails-area {
            height: 90px;
            margin-top: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .thumbnail-caption {
            color: #f39c12;
            font-size: 0.85rem;
            margin: 0 0 0.5rem 0;
            font-weight: 600;
          }

          .thumbnail-track {
            display: flex;
            gap: 12px;
            align-items: center;
          }

          .thumbnail-box {
            width: 55px;
            height: 38px;
            border-radius: 6px;
            overflow: hidden;
            cursor: pointer;
            opacity: 0.4;
            transition: all 0.2s;
            position: relative;
            border: 2px solid transparent;
          }

          .thumbnail-box:hover {
            opacity: 0.8;
          }

          .thumbnail-box.active {
            opacity: 1;
            border-color: #f39c12;
            transform: scale(1.05);
          }

          .thumbnail-box img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .video-thumb-icon {
            position: absolute;
            top:0; left:0; right:0; bottom:0;
            background: rgba(0,0,0,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
          }

          /* RIGHT PANE */
          .bento-right {
            flex: 1;
            padding: 3rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .bento-badge-row {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(255,255,255,0.05);
            padding: 6px 12px;
            border-radius: 50px;
            color: #888;
            font-size: 0.75rem;
            font-weight: 600;
            letter-spacing: 1px;
            margin-bottom: 2rem;
            align-self: flex-start;
          }

          .bento-dot {
            width: 8px;
            height: 8px;
            background: #9b59b6;
            border-radius: 50%;
          }

          .bento-title {
            font-size: 3.5rem;
            line-height: 1.1;
            color: #fff;
            margin: 0 0 1rem 0;
            font-family: var(--font-heading);
            letter-spacing: -1px;
          }

          .bento-subtitle {
            color: #666;
            font-size: 0.95rem;
            margin: 0 0 2rem 0;
            font-family: monospace;
          }

          .bento-trophy-row {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 2rem;
          }

          .bento-emoji {
            font-size: 2rem;
          }

          .bento-trophy-text {
            display: flex;
            flex-direction: column;
          }

          .bento-trophy-text strong {
            color: #fff;
            font-size: 1.1rem;
          }

          .bento-trophy-text span {
            color: #666;
            font-size: 0.85rem;
          }

          .bento-desc {
            color: #aaa;
            font-size: 1.05rem;
            line-height: 1.6;
            margin: 0 0 3rem 0;
            text-align: justify;
          }

          .bento-portfolio-btn {
            background: transparent;
            border: 1px solid rgba(255,255,255,0.1);
            color: #fff;
            padding: 1rem;
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 600;
            letter-spacing: 2px;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            width: 100%;
          }

          .bento-portfolio-btn:hover {
            background: rgba(255,255,255,0.05);
            border-color: rgba(255,255,255,0.3);
          }

          @media (max-width: 768px) {
            .bento-content {
              flex-direction: column;
              height: auto;
              overflow-y: auto;
              max-height: 80vh;
            }
            .bento-left {
              height: 480px;
              border-right: none;
              border-bottom: 1px solid rgba(255,255,255,0.05);
            }
            .bento-title {
              font-size: 2.5rem;
            }
            .bento-right {
              padding: 2rem;
            }
          }
        `}</style>
      </div>
    </AnimatePresence>
  );
};

export default SpecialMomentsModal;
