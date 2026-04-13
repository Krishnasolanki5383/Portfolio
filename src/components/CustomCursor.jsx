import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);

    window.addEventListener('mousemove', moveCursor);

    // Attach listeners to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .tech-tag');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Dot Cursor */}
      <motion.div
        className="custom-cursor-dot"
        style={{
          translateX: cursorX,
          translateY: cursorY,
        }}
      />
      
      {/* Trailing Ring */}
      <motion.div
        className="custom-cursor-ring"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? 'rgba(0, 240, 255, 0.2)' : 'rgba(0, 240, 255, 0)',
          borderColor: isHovered ? 'rgba(0, 240, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      />

      <style>{`
        .custom-cursor-dot {
          position: fixed;
          top: -4px;
          left: -4px;
          width: 8px;
          height: 8px;
          background-color: var(--accent-neon-blue);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
        }

        .custom-cursor-ring {
          position: fixed;
          top: -20px;
          left: -20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.3);
          pointer-events: none;
          z-index: 9998;
          transition: border-width 0.2s ease;
        }

        @media (max-width: 768px) {
          .custom-cursor-dot, .custom-cursor-ring {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
