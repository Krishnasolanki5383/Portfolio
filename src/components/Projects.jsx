import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'PRACTO',
      description: 'A dedicated platform for booking and managing doctor appointments with ease.',
      tech: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      links: { github: '#', live: 'https://illustrious-bonbon-b2a4dd.netlify.app/' },
      image: 'https://i.ibb.co/9mbrvRDz/Screenshot-2026-03-18-003123.png',
      colSpan: 'col-span-1 md:col-span-2',
      rowSpan: 'row-span-2'
    },
    {
      id: 2,
      title: 'HARIO',
      description: 'A corporate web presence designed for a premier Japanese glass-making company.',
      tech: ['Next.js', 'Python', 'Tailwind'],
      links: { github: '#', live: 'https://charming-vacherin-c87cc3.netlify.app/' },
      image: 'https://i.ibb.co/4nzZ0zWP/Screenshot-2026-03-18-004201.png',
      colSpan: 'col-span-1',
      rowSpan: 'row-span-1'
    },
    {
      id: 3,
      title: 'LIQUID DEATH',
      description: 'An edgy and bold promotional front-end for a high-intensity energy drink brand.',
      tech: ['Socket.io', 'React', 'Express'],
      links: { github: '#', live: 'https://deft-frangipane-01e606.netlify.app/' },
      image: 'https://i.ibb.co/0V8PHzmp/Screenshot-2026-03-18-004530.png',
      colSpan: 'col-span-1',
      rowSpan: 'row-span-1'
    },
    {
      id: 4,
      title: 'WIX',
      description: 'A supportive and informative resource platform built specifically for pregnant women.',
      tech: ['Vue.js', 'Docker', 'Go'],
      links: { github: '#', live: 'https://www.wix.com/website-template/view/html/2573' },
      image: 'https://i.ibb.co/355mbC4D/Screenshot-2026-03-18-004754.png',
      colSpan: 'col-span-1 md:col-span-2',
      rowSpan: 'row-span-1'
    },
    {
      id: 5,
      title: 'Micromax',
      description: 'A modern e-commerce platform and official storefront for a leading mobile phone company.',
      tech: ['React', 'JavaScript', 'CSS'],
      links: { github: '#', live: 'https://bright-nougat-d02539.netlify.app/' },
      image: 'https://i.ibb.co/cc9L7f1Y/Screenshot-2026-03-18-005803.png',
      colSpan: 'col-span-1',
      rowSpan: 'row-span-1'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title"><span className="text-gradient">Projects</span></h2>
          <p className="section-subtitle">Here are a few projects I've worked on recently.</p>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card glass"
              style={{
                position: 'sticky',
                top: `calc(100px + ${index * 20}px)`,
                zIndex: index + 1,
                marginBottom: index === projects.length - 1 ? '0' : '50vh'
              }}
            >
              <div className="card-top">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  <a href={project.links.github} aria-label="Github"><Github size={18} /></a>
                  <a href={project.links.live} target="_blank" rel="noreferrer" aria-label="External Link"><ExternalLink size={18} /></a>
                </div>
              </div>
              
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-img" loading="lazy" />
              </div>
              
              <p className="project-desc">{project.description}</p>
              
              <div className="tech-tags">
                {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          padding: 8rem 0;
          position: relative;
        }

        .section-header {
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          color: var(--text-secondary);
          font-size: 1.1rem;
        }

        /* Stacked Projects List Layout */
        .projects-list {
          display: flex;
          flex-direction: column;
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }

        /* Card Styling */
        .project-card {
          border-radius: 24px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          overflow: hidden;
          background: rgba(10, 10, 10, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.05);
          box-shadow: 0 -10px 30px -10px rgba(0,0,0,0.5);
        }

        @media (min-width: 768px) {
          .project-card {
            padding: 3rem;
          }
        }

        .project-card:hover {
          box-shadow: 0 -10px 40px -5px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 240, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.15);
        }

        .project-image-container {
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 2rem;
          border: 1px solid var(--border-subtle);
          position: relative;
          background: #000;
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .project-card:hover .project-img {
          transform: scale(1.03);
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .project-links {
          display: flex;
          gap: 0.75rem;
        }

        .project-links a {
          color: var(--text-secondary);
          transition: color 0.2s;
        }

        .project-links a:hover {
          color: var(--accent-neon-blue);
        }

        .project-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
          flex-grow: 1;
          margin-bottom: 2rem;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: auto;
        }

        .tech-tag {
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          border-radius: 99px;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-muted);
          border: 1px solid var(--border-subtle);
        }
      `}</style>
    </section>
  );
};

export default Projects;
