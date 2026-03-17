import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="contact-section">
      <div className="container contact-container">
        <div className="contact-content">
          <h2 className="section-title">Let's <span className="text-gradient">Connect</span></h2>
          <p className="contact-subtitle">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <a href="mailto:ks9522769@gmail.com" className="email-button glass">
            <Mail size={20} /> Say Hello
          </a>
        </div>

        <div className="contact-footer">
          <div className="social-links">
            <a href="https://github.com/Krishnasolanki5383" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/krishna-solanki-55478839a?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
          </div>

          <div className="footer-bottom">
            <p className="copyright">© {new Date().getFullYear()} Krishna Solanki. Designed & Built with 💚.</p>
            <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 8rem 0 2rem;
          position: relative;
          background: linear-gradient(to bottom, transparent, rgba(10, 10, 10, 0.8));
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .contact-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .contact-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 5rem;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .contact-subtitle {
          color: var(--text-secondary);
          font-size: 1.15rem;
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }

        .email-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem 2.5rem;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
        }

        .email-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 240, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.05);
        }

        .contact-footer {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          border-top: 1px solid var(--border-subtle);
          padding-top: 2rem;
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
        }

        .social-links a {
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .social-links a:hover {
          color: var(--accent-neon-blue);
          transform: translateY(-2px);
        }

        .footer-bottom {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .copyright {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .scroll-top-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .scroll-top-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
          transform: translateY(-3px);
        }

        @media (max-width: 576px) {
          .footer-bottom {
            flex-direction: column;
            text-align: center;
            flex-direction: column-reverse;
          }
        }
      `}</style>
    </footer>
  );
};

export default Contact;
