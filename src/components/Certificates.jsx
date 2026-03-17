import React from 'react';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Hackathon Achievement',
      issuer: 'Hackathon Event',
      date: '2026',
      image: 'https://i.ibb.co/DfHnXQ5f/certtificate.jpg',
    }
  ];

  return (
    <section id="certificates" className="certificates-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title"><span className="text-gradient">Certificates</span></h2>
          <p className="section-subtitle">My recent achievements and certifications.</p>
        </div>

        <div className="cert-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="cert-card glass">
              <div className="cert-image-container">
                <img src={cert.image} alt={cert.title} className="cert-img" loading="lazy" />
              </div>
              <div className="cert-info">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer} • {cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .certificates-section {
          padding: 8rem 0;
          position: relative;
        }

        .section-header {
          margin-bottom: 4rem;
          text-align: center;
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

        .cert-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .cert-grid {
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          }
        }

        .cert-card {
          border-radius: 24px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          position: relative;
          overflow: hidden;
          background: rgba(10, 10, 10, 0.5);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.05);
        }

        .cert-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 15px var(--accent-glow);
          border-color: rgba(255, 255, 255, 0.15);
        }

        .cert-image-container {
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 1.5rem;
          border: 1px solid var(--border-subtle);
          position: relative;
          background: #000;
        }

        .cert-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .cert-card:hover .cert-img {
          transform: scale(1.03);
        }

        .cert-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .cert-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .cert-issuer {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
      `}</style>
    </section>
  );
};

export default Certificates;
