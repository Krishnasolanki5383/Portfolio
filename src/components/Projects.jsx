import React, { useRef, useMemo } from 'react';
import { ExternalLink, Github, Youtube } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Individual shard component — keeps useTransform at the top level of a component
const ShardFragment = ({ frag, fragmentProgress, imageUrl }) => {
  const x = useTransform(fragmentProgress, [0, 1], [0, frag.randomX]);
  const y = useTransform(fragmentProgress, [0, 1], [0, frag.randomY]);
  const rotate = useTransform(fragmentProgress, [0, 1], [0, frag.randomRotate]);
  const opacity = useTransform(fragmentProgress, [0, frag.fadeStart, 1], [1, 1, 0]);
  const scale = useTransform(fragmentProgress, [0, 1], [1, frag.endScale]);

  return (
    <motion.div
      className="shard"
      style={{
        width: '12.5%',
        height: '12.5%',
        left: `${frag.col * 12.5}%`,
        top: `${frag.row * 12.5}%`,
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: `${frag.col * 14.28}% ${frag.row * 14.28}%`,
        backgroundSize: '800% 800%',
        x, y, rotate, opacity, scale,
      }}
    />
  );
};

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Container transforms
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.7, 0.92], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [120, 0, 0, -150]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0.85, 1, 1, 0.85]);

  // Text slide-away transforms
  const titleX = useTransform(scrollYProgress, [0.7, 1], [0, isEven ? -120 : 120]);
  const titleOpacity = useTransform(scrollYProgress, [0.7, 0.85], [1, 0]);
  const descX = useTransform(scrollYProgress, [0.7, 1], [0, isEven ? -180 : 180]);
  const descOpacity = useTransform(scrollYProgress, [0.7, 0.82], [1, 0]);
  const tagsY = useTransform(scrollYProgress, [0.7, 1], [0, 60]);
  const tagsOpacity = useTransform(scrollYProgress, [0.7, 0.8], [1, 0]);
  const actionsOpacity = useTransform(scrollYProgress, [0.7, 0.78], [1, 0]);
  const baseImgOpacity = useTransform(scrollYProgress, [0.7, 0.72], [1, 0]);

  // Fragmentation: 8x8 = 64 shards with dramatic physics
  const fragments = useMemo(() => {
    const pieces = [];
    const rows = 8;
    const cols = 8;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const cx = j - 3.5;
        const cy = i - 3.5;
        const angle = Math.atan2(cy, cx);

        pieces.push({
          id: `${i}-${j}`,
          row: i,
          col: j,
          randomX: Math.cos(angle) * (400 + Math.random() * 800) + (Math.random() - 0.5) * 200,
          randomY: Math.sin(angle) * (400 + Math.random() * 800) + (Math.random() - 0.5) * 200,
          randomRotate: (Math.random() - 0.5) * 1440,
          fadeStart: 0.4 + Math.random() * 0.4,
          endScale: 0.05 + Math.random() * 0.2,
        });
      }
    }
    return pieces;
  }, []);

  // Fragmentation phase starts at scroll 0.7
  const fragmentProgress = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      className={`project-row ${isEven ? 'row-even' : 'row-odd'}`}
      style={{ opacity, y, scale, transformPerspective: 1200 }}
    >
      <div className="project-content">
        <motion.h3
          className="project-title text-gradient"
          style={{ x: titleX, opacity: titleOpacity }}
        >
          {project.title}
        </motion.h3>
        <motion.p
          className="project-desc"
          style={{ x: descX, opacity: descOpacity }}
        >
          {project.description}
        </motion.p>

        <motion.div className="tech-tags" style={{ y: tagsY, opacity: tagsOpacity }}>
          {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
        </motion.div>

        <motion.div className="project-actions" style={{ opacity: actionsOpacity }}>
          {project.links.live && (
            <a href={project.links.live} className="btn-link" target="_blank" rel="noreferrer">
              <ExternalLink size={18} /> <span>Live Demo</span>
            </a>
          )}
          {project.links.github && (
            <a href={project.links.github} className="btn-link" target="_blank" rel="noreferrer">
              <Github size={18} /> <span>Github</span>
            </a>
          )}
          {project.links.youtube && (
            <a href={project.links.youtube} className="btn-link youtube-link" target="_blank" rel="noreferrer">
              <Youtube size={18} /> <span>YouTube</span>
            </a>
          )}
        </motion.div>
      </div>

      <div className="project-image-container">
        {/* 64-piece shard explosion */}
        <div className="shards-overlay">
          {fragments.map((frag) => (
            <ShardFragment
              key={frag.id}
              frag={frag}
              fragmentProgress={fragmentProgress}
              imageUrl={project.image}
            />
          ))}
        </div>

        {/* Base image hides instantly when snap starts */}
        <motion.img
          src={project.image}
          alt={project.title}
          className="project-img-base"
          style={{ opacity: baseImgOpacity }}
        />
        <div className="image-overlay"></div>
      </div>

      <style>{`
        .project-row {
          display: flex;
          flex-direction: column-reverse;
          align-items: center;
          gap: 2rem;
          margin-bottom: 30vh;
          will-change: transform, opacity;
        }

        .project-row:last-child {
          margin-bottom: 0;
        }

        @media (min-width: 992px) {
          .project-row {
            flex-direction: row;
            gap: 6rem;
          }
          .project-row.row-odd { flex-direction: row-reverse; }
        }

        .project-content {
          flex: 1;
        }

        .project-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
        }

        .project-desc {
          color: var(--text-secondary);
          font-size: 1.2rem;
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
        }

        .tech-tag {
          font-size: 0.9rem;
          padding: 0.5rem 1.25rem;
          border-radius: 99px;
          background: rgba(0, 240, 255, 0.05);
          color: var(--accent-neon-blue);
          border: 1px solid rgba(0, 240, 255, 0.15);
        }

        .project-actions {
          display: flex;
          gap: 1.5rem;
        }

        .btn-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: white;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-link:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(0, 240, 255, 0.5);
          transform: translateY(-5px);
        }

        /* Fragmentation Container */
        .project-image-container {
          flex: 1.2;
          width: 100%;
          border-radius: 24px;
          position: relative;
          aspect-ratio: 16 / 10;
          perspective: 2000px;
          background: rgba(255,255,255,0.02);
        }

        .project-img-base {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .shards-overlay {
          position: absolute;
          inset: 0;
          z-index: 5;
          pointer-events: none;
        }

        .shard {
          position: absolute;
          background-repeat: no-repeat;
          border: 0.5px solid rgba(255,255,255,0.02);
          will-change: transform, opacity;
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
          border-radius: 24px;
          pointer-events: none;
        }
      `}</style>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'PRACTO',
      description: 'A dedicated platform for booking and managing doctor appointments with ease.',
      tech: ['React', 'JS', 'Tailwind'],
      links: { github: 'https://github.com/Krishnasolanki5383/ASM6', live: 'https://practo-alpha.vercel.app/', youtube: 'https://youtu.be/iG_DeVgi8vk' },
      image: 'https://i.ibb.co/9mbrvRDz/Screenshot-2026-03-18-003123.png',
    },
    {
      id: 2,
      title: 'India Pincode',
      description: 'A full-stack application providing comprehensive district pincode information across India.',
      tech: ['React', 'Node.js', 'MongoDB', 'JS'],
      links: { github: 'https://github.com/Krishnasolanki5383/India-pincode', live: 'https://india-pincode.vercel.app/dashboard' },
      image: 'https://i.ibb.co/twb6gNQ/India-pincode.png',
    },
    {
      id: 3,
      title: 'LIQUID DEATH',
      description: 'An edgy and bold promotional front-end for a high-intensity energy drink brand.',
      tech: ['React', 'JS', 'Tailwind'],
      links: { github: 'https://github.com/Krishnasolanki5383/ASM3', live: 'https://deft-frangipane-01e606.netlify.app/', youtube: 'https://youtu.be/_gtIeCEdq4Y' },
      image: 'https://i.ibb.co/0V8PHzmp/Screenshot-2026-03-18-004530.png',
    },
    {
      id: 4,
      title: 'WIX',
      description: 'A supportive and informative resource platform built specifically for pregnant women.',
      tech: ['React', 'JS', 'Tailwind'],
      links: { github: 'https://github.com/Krishnasolanki5383/Diwali-A2', live: 'https://www.wix.com/website-template/view/html/2573', youtube: 'https://youtu.be/xOiM0wMpQuk' },
      image: 'https://i.ibb.co/355mbC4D/Screenshot-2026-03-18-004754.png',
    },
    {
      id: 5,
      title: 'Micromax',
      description: 'A modern e-commerce platform and official storefront for a leading mobile phone company.',
      tech: ['React', 'JS', 'Tailwind'],
      links: { github: 'https://github.com/Krishnasolanki5383/Micromax-clone', live: 'https://bright-nougat-d02539.netlify.app/', youtube: 'https://youtu.be/zdemZ_WcXgU' },
      image: 'https://i.ibb.co/cc9L7f1Y/Screenshot-2026-03-18-005803.png',
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title"><span className="text-gradient">Projects</span></h2>
          <p className="section-subtitle">A collection of web applications crafted with precision and creativity.</p>
        </motion.div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          padding: 10rem 0 2rem 0;
          position: relative;
        }

        .section-header {
          margin-bottom: 7rem;
          text-align: center;
        }

        .section-title {
          font-size: clamp(3rem, 7vw, 5rem);
          font-weight: 900;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .section-subtitle {
          color: var(--text-secondary);
          font-size: 1.25rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .projects-list {
          display: flex;
          flex-direction: column;
          max-width: 1200px;
          margin: 0 auto;
        }
      `}</style>
    </section>
  );
};

export default Projects;
