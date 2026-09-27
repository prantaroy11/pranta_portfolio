'use client';
import { useState, useEffect } from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin, FaXTwitter as X } from 'react-icons/fa6';
import styles from './Hero.module.css';

const ROLES = ['AI Engineer', 'Backend Developer', 'Full Stack Developer', 'Software Engineer'];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentRole = ROLES[currentRoleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
      } else {
        setCurrentText(currentRole.substring(0, currentText.length + (isDeleting ? -1 : 1)));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <div className={styles.textContent}>
          <div className={styles.availability}>
            <span className={styles.dot}></span>
            Available for new opportunities
          </div>

          <h1 className={styles.title}>
            Hey, I&apos;m Pranta<br /><span>Roy</span>
          </h1>

          <h2 className={styles.role}>&lt;{currentText}<span className={styles.cursor}>|</span>/&gt;</h2>

          <p className={styles.description}>
            A software engineer with a strong foundation in data structures, algorithms and
            system-oriented development. I build scalable, high-performance applications with{' '}
            <span className={styles.highlightPrimary}>Next.js, LangGraph, Python, TypeScript, React, Node.js</span> and PostgreSQL — focused on clean
            architecture, performance and production-grade code.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className={styles.btnPrimary}>
              <Mail size={18} /> Get in touch
            </a>
            <a href="https://drive.google.com/file/d/1abAHa2Yz2AKvi4YmUCviwnYnaEWXENdn/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
              View résumé <ArrowUpRight size={18} />
            </a>
            <a href="https://github.com/prantaroy11" target="_blank" rel="noopener noreferrer" className={styles.iconBtn} aria-label="GitHub"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/pranta-roy-joy" target="_blank" rel="noopener noreferrer" className={styles.iconBtn} aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="#" className={styles.iconBtn} aria-label="X"><X size={20} /></a>
          </div>

          <div className={styles.stats}>
            <div className={styles.statCard}>
              <div className={styles.statValue}>1+</div>
              <div className={styles.statLabel}>Years Building</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>5+</div>
              <div className={styles.statLabel}>Projects Shipped</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>700+</div>
              <div className={styles.statLabel}>DSA Problems</div>
            </div>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.imageContainerWrapper}>
            <div className={styles.ambientGlow}></div>
            <div className={styles.rotatingRing}></div>
            <div className={styles.backdropRing}></div>
            <div className={styles.imageContainer}>
              <img src="/photo.jpeg" alt="Pranta Roy Joy" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.mouse}>
          <div className={styles.dot}></div>
        </div>
      </div>
    </section>
  );
}
