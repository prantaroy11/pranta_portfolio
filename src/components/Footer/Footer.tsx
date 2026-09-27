'use client';
import styles from './Footer.module.css';
import { ArrowUp } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin, FaXTwitter as X, FaInstagram as Instagram } from 'react-icons/fa6';
import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>PR</div>
              <span>Pranta Roy Joy.</span>
            </div>
            <p className={styles.brandDesc}>
              Software engineer building scalable, high-performance products for the web.
            </p>
          </div>

          <div className={styles.navLinks}>
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#education">Education</Link>
            <Link href="#contact">Contact</Link>
          </div>

          <div className={styles.socials}>
            <a href="https://github.com/prantaroy11" target="_blank" rel="noopener noreferrer" className={styles.iconBtn}><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/pranta-roy-joy" target="_blank" rel="noopener noreferrer" className={styles.iconBtn}><Linkedin size={20} /></a>
            <a href="#" className={styles.iconBtn}><X size={20} /></a>
            <a href="#" className={styles.iconBtn}><Instagram size={20} /></a>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p>© 2026 Pranta Roy Joy. All rights reserved.</p>
          <p>Designed & built with <span className={styles.highlight}>React + Next.js</span></p>
        </div>
        
        <button className={styles.scrollTop} onClick={scrollToTop} aria-label="Scroll to top">
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}
