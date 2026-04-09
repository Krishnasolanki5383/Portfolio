import React, { useState } from 'react';
import { Trophy, Image as ImageIcon, ArrowLeft } from 'lucide-react';

const Hackathon = () => {
  // states: 'idle', 'selecting', 'photos', 'certificates'
  const [viewState, setViewState] = useState('idle');

  const certificates = [
    {
      id: 1,
      title: 'Hackathon Achievement',
      issuer: 'Hackathon Event',
      date: '2026',
      image: 'https://i.ibb.co/DfHnXQ5f/certtificate.jpg',
      rotation: -90
    },
    {
      id: 2,
      title: '2nd Rank Achievement',
      issuer: 'Competition',
      date: '2026',
      image: 'https://res.cloudinary.com/dktotr6rn/image/upload/q_auto,f_auto,a_-90/v1775737226/20260404_094645_mjfdvf.jpg',
    }
  ];

  const photos = [
    { id: 1, image: 'https://res.cloudinary.com/dktotr6rn/image/upload/q_auto/f_auto/v1775736763/Hackthoan_photo_hmfxsh.jpg', alt: 'Hackathon Event 1' },
    { id: 2, image: 'https://res.cloudinary.com/dktotr6rn/image/upload/q_auto/f_auto/v1775736510/678A2160_iqjbqe.jpg', alt: 'Hackathon Event 2' },
  ];

  const renderIdleState = () => (
    <div className="hackathon-main-card glass" onClick={() => setViewState('selecting')}>
      <div className="card-content">
        <div className="icon-wrapper">
          <Trophy size={48} className="glow-icon" />
        </div>
        <h3 className="main-title text-gradient">Hackathons & Achievements</h3>
        <p className="main-subtitle">Explore my journey, events, and accolades</p>
        <div className="click-prompt">Click to explore</div>
      </div>
    </div>
  );

  const renderSelectingState = () => (
    <div className="selection-container">
      <button className="back-button" onClick={() => setViewState('idle')}>
        <ArrowLeft size={20} /> Back
      </button>
      <div className="cards-grid">
        <div className="selection-card glass" onClick={() => setViewState('photos')}>
          <div className="icon-wrapper photos-icon">
            <ImageIcon size={40} />
          </div>
          <h4>Event Photos</h4>
          <p>Glimpses from various hackathons</p>
        </div>
        <div className="selection-card glass" onClick={() => setViewState('certificates')}>
          <div className="icon-wrapper certs-icon">
            <Trophy size={40} />
          </div>
          <h4>Certificates</h4>
          <p>Awards & recognitions</p>
        </div>
      </div>
    </div>
  );

  const renderPhotosState = () => (
    <div className="content-view">
      <button className="back-button" onClick={() => setViewState('selecting')}>
        <ArrowLeft size={20} /> Back to Selection
      </button>
      <div className="photos-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-card glass">
            <img src={photo.image} alt={photo.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );

  const renderCertificatesState = () => (
    <div className="content-view">
      <button className="back-button" onClick={() => setViewState('selecting')}>
        <ArrowLeft size={20} /> Back to Selection
      </button>
      <div className="cert-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="cert-card glass">
            <div className="cert-image-container">
              <img
                src={cert.image}
                alt={cert.title}
                className="cert-img"
                loading="lazy"
                style={{ '--img-rotation': cert.rotation ? `${cert.rotation}deg` : '0deg' }}
              />
            </div>
            <div className="cert-info">
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer} • {cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="hackathons" className="hackathon-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title"><span className="text-gradient">Journey</span></h2>
          <p className="section-subtitle">Hackathons and recent milestones</p>
        </div>

        <div className="interactive-container">
          {viewState === 'idle' && renderIdleState()}
          {viewState === 'selecting' && renderSelectingState()}
          {viewState === 'photos' && renderPhotosState()}
          {viewState === 'certificates' && renderCertificatesState()}
        </div>
      </div>

      <style>{`
        .hackathon-section {
          padding: 4rem 0 8rem 0;
          position: relative;
          min-height: 80vh;
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

        .interactive-container {
          max-width: 1000px;
          margin: 0 auto;
          perspective: 1000px;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Idle State */
        .hackathon-main-card {
          width: 100%;
          max-width: 600px;
          padding: 4rem 2rem;
          border-radius: 32px;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
          background: rgba(20, 20, 20, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .hackathon-main-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(120, 0, 255, 0.1) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .hackathon-main-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), 0 0 40px rgba(120, 0, 255, 0.3);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .hackathon-main-card:hover::before {
          opacity: 1;
        }

        .icon-wrapper {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .glow-icon {
          color: var(--text-primary);
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
        }

        .main-title {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .main-subtitle {
          color: var(--text-secondary);
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }

        .click-prompt {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.05);
          font-size: 0.9rem;
          color: var(--text-primary);
          border: 1px solid rgba(255, 255, 255, 0.1);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1); }
          70% { box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
        }

        /* Selection State */
        .selection-container, .content-view {
          width: 100%;
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .back-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 1rem;
          cursor: pointer;
          margin-bottom: 2rem;
          transition: color 0.3s ease;
          padding: 0.5rem 0;
        }

        .back-button:hover {
          color: var(--text-primary);
        }

        .cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .cards-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .selection-card {
          padding: 3rem 2rem;
          border-radius: 24px;
          text-align: center;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          background: rgba(20, 20, 20, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .selection-card h4 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .selection-card p {
          color: var(--text-secondary);
        }

        .selection-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
        }
        
        .selection-card:hover .icon-wrapper {
          transform: scale(1.1);
          border-color: rgba(255, 255, 255, 0.4);
        }
        
        .photos-icon { color: #60a5fa; }
        .certs-icon { color: #f43f5e; }

        /* Photos Grid */
        .photos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .photo-card {
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 4/3;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.3s ease;
        }

        .photo-card:hover {
          transform: scale(1.03);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .photo-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Certificates Grid */
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
          transform: rotate(var(--img-rotation, 0deg));
          transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .cert-card:hover .cert-img {
          transform: rotate(var(--img-rotation, 0deg)) scale(1.03);
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

export default Hackathon;
