import React from 'react';
import { Code2, Database, Layout, Server, Smartphone, Terminal, Cpu, Cloud, Globe } from 'lucide-react';

const TechStack = () => {
  const categories = [
    {
      title: "Frontend Engineering",
      icon: <Layout className="text-accent" size={24} />,
      skills: [
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
        { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
        { name: "Redux", icon: "https://cdn.simpleicons.org/redux/764ABC" }
      ],
      colSpan: "col-span-1 md:col-span-2"
    },
    {
      title: "Backend Services",
      icon: <Server className="text-accent" size={24} />,
      skills: [
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
        { name: "Express", icon: "https://cdn.simpleicons.org/express/white" },
        { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C" }
      ],
      colSpan: "col-span-1"
    },
    {
      title: "Database & Cloud",
      icon: <Database className="text-accent" size={24} />,
      skills: [
        { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
        { name: "Render", icon: "https://cdn.simpleicons.org/render/white" }
      ],
      colSpan: "col-span-1"
    },
    {
      title: "Tools & DevOps",
      icon: <Terminal className="text-accent" size={24} />,
      skills: [
        { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
        { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
        { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" }
      ],
      colSpan: "col-span-1 md:col-span-2"
    }
  ];

  return (
    <section id="stack" className="stack-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title"><span className="text-gradient">Skills</span></h2>
          <p className="section-subtitle">Tools and technologies I use to bring ideas to life.</p>
        </div>

        <div className="stack-bento">
          {categories.map((cat, idx) => (
            <div key={idx} className={`stack-card glass ${cat.colSpan}`}>
              <div className="stack-card-header">
                <div className="icon-wrapper">
                  {cat.icon}
                </div>
                <h3>{cat.title}</h3>
              </div>

              <ul className="skill-list">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="skill-item">
                    <img src={skill.icon} alt={skill.name} className="skill-logo" loading="lazy" />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Floating Icons Background Element (Visual Only) */}
        <div className="floating-icons">
          <Code2 size={40} className="float-icon i-1 text-muted" />
          <Smartphone size={32} className="float-icon i-2 text-muted" />
          <Cpu size={48} className="float-icon i-3 text-muted" />
          <Cloud size={36} className="float-icon i-4 text-muted" />
          <Globe size={42} className="float-icon i-5 text-muted" />
        </div>
      </div>

      <style>{`
        .stack-section {
          padding: 8rem 0;
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
          margin-bottom: 4rem;
          position: relative;
          z-index: 2;
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

        /* Bento Layout for Stack */
        .stack-bento {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          position: relative;
          z-index: 2;
        }

        @media (min-width: 768px) {
          .stack-bento {
            grid-template-columns: repeat(3, 1fr);
          }
          .col-span-2 { grid-column: span 2 / span 2; }
        }

        .stack-card {
          padding: 2.5rem;
          border-radius: 24px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .stack-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .stack-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-light);
        }

        .text-accent {
          color: var(--accent-neon-blue);
        }

        .stack-card-header h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .skill-list {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 1rem;
        }

        .skill-item {
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
        }

        .skill-logo {
          width: 20px;
          height: 20px;
          object-fit: contain;
          transition: all 0.3s ease;
          opacity: 0.9;
          filter: drop-shadow(0 0 2px rgba(255,255,255,0.1));
        }

        .skill-item:hover .skill-logo {
          transform: scale(1.15);
          opacity: 1;
        }

        .skill-item:hover {
          color: var(--text-primary);
        }

        /* Floating background icons */
        .floating-icons {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          pointer-events: none;
          z-index: 1;
        }

        .float-icon {
          position: absolute;
          opacity: 0.05;
          animation: float-slow 15s ease-in-out infinite alternate;
        }
        
        .text-muted { color: #fff; }

        .i-1 { top: 10%; left: 10%; animation-delay: 0s; }
        .i-2 { top: 80%; left: 15%; animation-delay: 2s; }
        .i-3 { top: 40%; right: 10%; animation-delay: 4s; }
        .i-4 { top: 75%; right: 20%; animation-delay: 1s; }
        .i-5 { top: 20%; right: 25%; animation-delay: 3s; }

        @keyframes float-slow {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-30px) rotate(10deg); }
        }
      `}</style>
    </section>
  );
};

export default TechStack;
