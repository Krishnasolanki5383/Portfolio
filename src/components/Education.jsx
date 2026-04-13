import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, Award } from 'lucide-react';

const educationData = [
  {
    year: "2025 - Present",
    institution: "Swaminarayan University",
    degree: "B.E. Computer Engineering",
    description: "Focusing on core CS concepts, algorithm design, data structures, and architecting scalable web applications.",
    icon: <GraduationCap size={24} />,
    color: "var(--accent-neon-blue)"
  },
  {
    year: "2024 - 2025",
    institution: "Higher Secondary (Class 12)",
    degree: "Science Stream",
    description: "Major subjects: Physics, Mathematics, and Computer Science. Built a strong analytical and logical foundation.",
    icon: <BookOpen size={24} />,
    color: "var(--accent-violet)"
  },
  {
    year: "2023",
    institution: "Secondary School (Class 10)",
    degree: "General Curriculum",
    description: "Developed a passion for logical reasoning, early programming concepts, and problem-solving mechanics.",
    icon: <Award size={24} />,
    color: "var(--accent-pink)"
  }
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-subtitle">ACADEMIC JOURNEY</span>
          <h2 className="section-title">My <span className="text-gradient-accent">Foundation</span></h2>
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-dot" style={{ backgroundColor: item.color, boxShadow: `0 0 15px ${item.color}` }}></div>
              
              <div className="education-card glass">
                <div className="card-glare"></div>
                <div className="education-header">
                  <div className="edu-icon" style={{ color: item.color, background: `${item.color}15` }}>
                    {item.icon}
                  </div>
                  <div className="edu-meta">
                    <span className="edu-year" style={{ color: item.color }}>
                      <Calendar size={14} className="inline-icon" /> {item.year}
                    </span>
                    <h3 className="edu-institution">{item.institution}</h3>
                  </div>
                </div>
                
                <div className="edu-content">
                  <h4 className="edu-degree" style={{ color: item.color }}>{item.degree}</h4>
                  <p className="edu-description">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
