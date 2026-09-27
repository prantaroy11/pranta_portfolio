import styles from './Education.module.css';
import { GraduationCap, School } from 'lucide-react';

export default function Education() {
  const education = [
    {
      institution: "Indian Institute of Information Technology, Gwalior",
      degree: "B.Tech, Computer Science Engineering",
      score: "CGPA 7.32",
      date: "2023 - 2027",
      icon: <GraduationCap size={24} />,
      logo: "/iiit_logo.png"
    },
    {
      institution: "Milestone College, Dhaka",
      degree: "Higher Secondary Education",
      score: "96%",
      date: "2021",
      icon: <School size={24} />,
      logo: "/milestone_logo.avif"
    }
  ];

  return (
    <section id="education" className={`section-padding ${styles.eduSection}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">WHERE I STUDIED</div>
          <h2 className="section-title">Education</h2>
          <p className="section-description">
            The foundation behind the engineering.
          </p>
        </div>

        <div className={styles.timeline}>
          {education.map((edu, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.cardContainer}>
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.logoPlaceholder}>
                      <img src={edu.logo} alt={edu.institution} />
                    </div>
                    <div>
                      <h3 className={styles.institution}>{edu.institution}</h3>
                      <p className={styles.degree}>{edu.degree}</p>
                    </div>
                  </div>
                  <div className={styles.scoreBadge}>{edu.score}</div>
                </div>
              </div>
              <div className={styles.centerIcon}>
                {edu.icon}
              </div>
              <div className={styles.dateText}>
                {edu.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
