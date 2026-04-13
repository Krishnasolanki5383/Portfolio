import React, { useRef, useState, useCallback } from 'react';
import { Code2, Database, Layout, Server, Smartphone, Terminal, Cpu, Cloud, Globe } from 'lucide-react';
import { motion, useSpring } from 'framer-motion';

// 3D Magnetic Tilt Card with Spotlight
const TiltCard = ({ children, className }) => {
  const cardRef = useRef(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });

  const rotateX = useSpring(0, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 });

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    const maxRotate = 10;
    rotateX.set((-mouseY / (rect.height / 2)) * maxRotate);
    rotateY.set((mouseX / (rect.width / 2)) * maxRotate);

    // Spotlight position as percentage
    const spotX = ((e.clientX - rect.left) / rect.width) * 100;
    const spotY = ((e.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x: spotX, y: spotY });
  }, [rotateX, rotateY]);

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
    setSpotlight({ x: 50, y: 50 });
  }, [rotateX, rotateY]);

  return (
    <motion.div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
        transformStyle: 'preserve-3d',
        position: 'relative',
        overflow: 'hidden',
      }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      initial={{ opacity: 0, scale: 0.92, y: 40 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Dynamic spotlight overlay */}
      <div
        className="card-spotlight"
        style={{
          background: `radial-gradient(circle 200px at ${spotlight.x}% ${spotlight.y}%, rgba(0, 240, 255, 0.12), transparent 70%)`,
        }}
      />
      {/* Slightly lift content above the spotlight layer */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </motion.div>
  );
};

// Skill item with decode/flicker reveal
const SkillItem = ({ skill, delay }) => {
  return (
    <motion.li
      className="skill-item"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={{ x: 6 }}
    >
      <motion.img
        src={skill.icon}
        alt={skill.name}
        className="skill-logo"
        loading="lazy"
        whileHover={{ scale: 1.3, rotate: 12 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      />
      <span>{skill.name}</span>
    </motion.li>
  );
};

const TechStack = () => {
  const categories = [
    {
      title: "Frontend Engineering",
      icon: <Layout className="text-secondary-accent" size={24} />,
      skills: [
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
        { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
        { name: "Redux", icon: "https://cdn.simpleicons.org/redux/764ABC" }
      ],
      colSpan: "col-span-1 md-col-span-2",
      accentColor: "rgba(97, 218, 251, 0.15)",
    },
    {
      title: "Backend Services",
      icon: <Server className="text-secondary-accent" size={24} />,
      skills: [
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
        { name: "Express", icon: "https://cdn.simpleicons.org/express/white" },
        { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C" }
      ],
      colSpan: "col-span-1",
      accentColor: "rgba(51, 153, 51, 0.15)",
    },
    {
      title: "Database & Cloud",
      icon: <Database className="text-secondary-accent" size={24} />,
      skills: [
        { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
        { name: "Render", icon: "https://cdn.simpleicons.org/render/white" }
      ],
      colSpan: "col-span-1",
      accentColor: "rgba(71, 162, 72, 0.15)",
    },
    {
      title: "Tools & DevOps",
      icon: <Terminal className="text-secondary-accent" size={24} />,
      skills: [
        { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
        { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
        { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" }
      ],
      colSpan: "col-span-1 md-col-span-2",
      accentColor: "rgba(240, 80, 50, 0.15)",
    }
  ];

  return (
    <section id="stack" className="stack-section">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <span className="text-gradient-accent">Tech Stack</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Tools and technologies I use to bring ideas to life.
          </motion.p>
        </motion.div>

        <div className="stack-bento">
          {categories.map((cat, idx) => (
            <TiltCard
              key={idx}
              className={`stack-card glass ${cat.colSpan}`}
            >
              <div className="stack-card-header">
                <motion.div
                  className="icon-wrapper"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {cat.icon}
                </motion.div>
                <h3>{cat.title}</h3>
              </div>

              <ul className="skill-list">
                {cat.skills.map((skill, sIdx) => (
                  <SkillItem
                    key={sIdx}
                    skill={skill}
                    delay={0.1 + idx * 0.1 + sIdx * 0.08}
                  />
                ))}
              </ul>

              {/* Decorative corner accent */}
              <div className="card-corner-accent" style={{ background: cat.accentColor }} />
            </TiltCard>
          ))}
        </div>

        {/* Enhanced floating background icons */}
        <div className="floating-icons" aria-hidden="true">
          {[
            { Icon: Code2, size: 40, cls: 'i-1' },
            { Icon: Smartphone, size: 32, cls: 'i-2' },
            { Icon: Cpu, size: 48, cls: 'i-3' },
            { Icon: Cloud, size: 36, cls: 'i-4' },
            { Icon: Globe, size: 42, cls: 'i-5' },
          ].map(({ Icon, size, cls }, i) => (
            <motion.div
              key={i}
              className={`float-icon ${cls}`}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
                opacity: [0.06, 0.12, 0.06],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 1.5,
              }}
            >
              <Icon size={size} />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .stack-section {
          padding: 10rem 0;
          position: relative;
          overflow: hidden;
        }

        .text-center {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .section-header {
          margin-bottom: 6rem;
          position: relative;
          z-index: 2;
        }

        .section-title {
          font-size: clamp(3rem, 7vw, 5rem);
          font-weight: 900;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .section-subtitle {
          color: var(--text-secondary);
          font-size: 1.3rem;
          max-width: 600px;
        }

        /* Bento Grid */
        .stack-bento {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
          position: relative;
          z-index: 2;
        }

        @media (min-width: 768px) {
          .stack-bento {
            grid-template-columns: repeat(3, 1fr);
          }
          .md-col-span-2 { grid-column: span 2 / span 2; }
        }

        /* Cards */
        .stack-card {
          padding: 3rem;
          border-radius: 32px;
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.07);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }

        .stack-card:hover {
          border-color: rgba(0, 240, 255, 0.2);
          box-shadow: 0 35px 80px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 240, 255, 0.04);
        }

        /* Spotlight overlay */
        .card-spotlight {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          border-radius: 32px;
          transition: background 0.1s ease;
        }

        /* Corner decoration */
        .card-corner-accent {
          position: absolute;
          bottom: -30px;
          right: -30px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(40px);
          z-index: 0;
        }

        .stack-card-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }

        .icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 18px;
          background: rgba(0, 240, 255, 0.05);
          border: 1px solid rgba(0, 240, 255, 0.2);
          flex-shrink: 0;
        }

        .text-secondary-accent { color: #00f0ff; }

        .stack-card-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        /* Skills */
        .skill-list {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 1.25rem;
        }

        .skill-item {
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1rem;
          font-weight: 500;
          cursor: default;
          transition: color 0.3s ease;
        }

        .skill-item:hover {
          color: var(--text-primary);
        }

        .skill-logo {
          width: 26px;
          height: 26px;
          object-fit: contain;
          flex-shrink: 0;
          opacity: 0.85;
          transition: opacity 0.3s ease;
        }

        .skill-item:hover .skill-logo {
          opacity: 1;
          filter: drop-shadow(0 0 8px rgba(0, 240, 255, 0.6));
        }

        /* Floating background icons */
        .floating-icons {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }

        .float-icon {
          position: absolute;
          color: rgba(0, 240, 255, 0.5);
        }

        .i-1 { top: 8%;  left: 3%; }
        .i-2 { top: 78%; left: 8%; }
        .i-3 { top: 35%; right: 3%; }
        .i-4 { top: 65%; right: 12%; }
        .i-5 { top: 12%; right: 18%; }
      `}</style>
    </section>
  );
};

export default TechStack;
