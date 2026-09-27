'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      let currentSection = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section top is somewhere in the upper half of the screen, or it takes up the screen
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 3) {
             currentSection = section;
             break;
          }
        }
      }

      // If at the very top, hardcode to home
      if (window.scrollY === 0) {
        currentSection = 'home';
      }
      
      // If at the very bottom, hardcode to contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        currentSection = 'contact';
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on load
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = (section: string) => {
    return `${styles.navLink} ${activeSection === section ? styles.active : ''}`;
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>PR</div>
        <span>Pranta.</span>
      </div>
      
      <nav className={styles.nav}>
        <Link href="#home" className={getLinkClass('home')}>Home</Link>
        <Link href="#about" className={getLinkClass('about')}>About</Link>
        <Link href="#skills" className={getLinkClass('skills')}>Skills</Link>
        <Link href="#experience" className={getLinkClass('experience')}>Experience</Link>
        <Link href="#projects" className={getLinkClass('projects')}>Projects</Link>
        <Link href="#education" className={getLinkClass('education')}>Education</Link>
        <Link href="#contact" className={getLinkClass('contact')}>Contact</Link>
      </nav>

      <a href="https://drive.google.com/file/d/1abAHa2Yz2AKvi4YmUCviwnYnaEWXENdn/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <button className={styles.resumeBtn}>
          Résumé
        </button>
      </a>
    </header>
  );
}
