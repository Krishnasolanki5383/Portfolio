import React, { useEffect, useState } from 'react';

const Preloader = ({ onComplete }) => {
  const [isFading, setIsFading] = useState(false);
  const name = "KRISHNA";

  useEffect(() => {
    // Start fading out after the animation completes
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2000);

    // Unmount after fade out completes
    const removeTimer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`preloader ${isFading ? 'fade-out' : ''}`}>
      <div className="preloader-text">
        {name.split('').map((char, index) => (
          <span 
            key={index} 
            className="preloader-char text-gradient"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {char}
          </span>
        ))}
      </div>

      <style>{`
        .preloader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: #0a0a0a; /* Obsidian */
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
        }

        .preloader.fade-out {
          opacity: 0;
          visibility: hidden;
        }

        .preloader-text {
          font-size: clamp(3rem, 10vw, 8rem);
          font-weight: 800;
          letter-spacing: 0.2em;
          display: flex;
        }

        .preloader-char {
          opacity: 0;
          transform: translateY(20px) scale(0.9);
          animation: revealChar 0.6s forwards cubic-bezier(0.25, 1, 0.5, 1);
        }

        @keyframes revealChar {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
