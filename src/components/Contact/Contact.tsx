import styles from './Contact.module.css';
import { Send } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin, FaXTwitter as X, FaInstagram as Instagram } from 'react-icons/fa6';

export default function Contact() {
  return (
    <section id="contact" className={`section-padding ${styles.contactSection}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">SAY HELLO</div>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-description">
            Got a role, a project or just an idea worth building? My inbox is open.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.formCard}>
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <div className={styles.inputField}>
                  <label>FULL NAME</label>
                  <input type="text" placeholder="Your name" />
                </div>
                <div className={styles.inputField}>
                  <label>EMAIL</label>
                  <input type="email" placeholder="you@example.com" />
                </div>
              </div>
              <div className={styles.inputField}>
                <label>MESSAGE</label>
                <textarea placeholder="Tell me a bit about what you're working on..." rows={6}></textarea>
              </div>
              <button type="button" className={styles.submitBtn}>
                <Send size={18} /> Send message
              </button>
            </form>
          </div>

          <div className={styles.rightSide}>
            <div className={styles.illustrationCard}>
              <div className={styles.illustrationPlaceholder}>
                <img src="/contact-illustration.jpg" alt="Contact Illustration" />
              </div>
            </div>
            
            <div className={styles.socialCard}>
              <h3 className={styles.socialTitle}>Find me elsewhere</h3>
              <p className={styles.socialDesc}>I usually reply fastest on LinkedIn.</p>
              <div className={styles.socialIcons}>
                <a href="https://github.com/prantaroy11" target="_blank" rel="noopener noreferrer" className={styles.iconBtn} aria-label="GitHub"><Github size={20} /></a>
                <a href="https://www.linkedin.com/in/pranta-roy-joy" target="_blank" rel="noopener noreferrer" className={styles.iconBtn} aria-label="LinkedIn"><Linkedin size={20} /></a>
                <a href="#" className={styles.iconBtn} aria-label="X"><X size={20} /></a>
                <a href="#" className={styles.iconBtn} aria-label="Instagram"><Instagram size={20} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
