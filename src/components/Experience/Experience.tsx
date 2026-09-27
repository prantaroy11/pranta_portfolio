import styles from './Experience.module.css';
import { Briefcase, Laptop, Code } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "ETY",
      type: "Internship",
      date: "April 2026 - Sep 2026 · 6 month",
      icon: <Code size={24} />
    }
  ];

  return (
    <section id="experience" className={`section-padding ${styles.expSection}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">WHERE I&apos;VE WORKED</div>
          <h2 className="section-title">Experience</h2>
          <p className="section-description">
            Roles where I&apos;ve shipped real software with real users.
          </p>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.cardContainer}>
                <div className={styles.card}>
                  <h3 className={styles.jobTitle}>{exp.title}</h3>
                  <p className={styles.company}>{exp.company}</p>
                  <span className={styles.jobType}>{exp.type}</span>
                </div>
              </div>
              <div className={styles.centerIcon}>
                {exp.icon}
              </div>
              <div className={styles.dateText}>
                {exp.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
