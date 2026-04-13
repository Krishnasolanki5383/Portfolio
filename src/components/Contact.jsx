import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Youtube, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="contact-section">
      <div className="container contact-container">
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Let's <span className="text-gradient">Connect</span></h2>
          <p className="contact-subtitle">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <motion.a 
            href="mailto:ks9522769@gmail.com" 
            className="email-button glass"
            whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(0, 240, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={22} /> Say Hello
          </motion.a>
        </motion.div>

        <div className="contact-footer">
          <motion.div 
            className="social-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { icon: <Youtube size={26} />, url: "https://youtube.com/@impure4one?si=3EKJdkot-tDK4PHj", label: "YouTube" },
              { icon: <Github size={26} />, url: "https://github.com/Krishnasolanki5383", label: "GitHub" },
              { icon: <Twitter size={26} />, url: "https://x.com/Krishna1504__", label: "X" },
              { icon: <Linkedin size={26} />, url: "https://www.linkedin.com/in/krishna-solanki-55478839a?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn" }
            ].map((social, i) => (
              <motion.a 
                key={i}
                href={social.url} 
                target="_blank" 
                rel="noreferrer" 
                aria-label={social.label}
                whileHover={{ y: -5, color: "#00f0ff" }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          <div className="footer-bottom">
            <p className="copyright">© {new Date().getFullYear()} Krishna Solanki. Designed & Built with 💚.</p>
            <motion.button 
              onClick={scrollToTop} 
              className="scroll-top-btn" 
              aria-label="Scroll to top"
              whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp size={22} />
            </motion.button>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 10rem 0 3rem;
          position: relative;
          background: linear-gradient(to bottom, transparent, rgba(10, 10, 10, 1));
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .contact-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .contact-content {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 6rem;
        }

        .section-title {
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
        }

        .contact-subtitle {
          color: var(--text-secondary);
          font-size: 1.25rem;
          line-height: 1.8;
          margin-bottom: 3.5rem;
        }

        .email-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 1.25rem 3.5rem;
          border-radius: 16px;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
        }

        .email-button:hover {
          border-color: rgba(0, 240, 255, 0.5);
          background: rgba(0, 240, 255, 0.05);
        }

        .contact-footer {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 3rem;
        }

        .social-links {
          display: flex;
          gap: 2.5rem;
        }

        .social-links a {
          color: var(--text-secondary);
          transition: color 0.3s ease;
        }

        .footer-bottom {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .copyright {
          color: var(--text-muted);
          font-size: 1rem;
          letter-spacing: 0.02em;
        }

        .scroll-top-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        @media (max-width: 576px) {
          .footer-bottom {
            flex-direction: column-reverse;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Contact;

