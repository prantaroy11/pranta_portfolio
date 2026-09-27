import styles from './Skills.module.css';
import { Code, Layout, Database, Wrench } from 'lucide-react';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiFirebase, SiLangchain } from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code size={20} className={styles.icon} />,
      skills: ["C", "C++", "JavaScript", "TypeScript", "Python", "LangGraph", "SQL"]
    },
    {
      title: "Frontend",
      icon: <Layout size={20} className={styles.icon} />,
      skills: ["React.js", "Next.js", "Redux Toolkit", "Zustand", "Tailwind CSS", "Material UI", "SCSS", "HTML5 / CSS3"]
    },
    {
      title: "Backend & Data",
      icon: <Database size={20} className={styles.icon} />,
      skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "PostgreSQL", "MySQL", "JWT Auth", "Firebase"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench size={20} className={styles.icon} />,
      skills: ["Git", "GitHub", "Docker", "AWS", "Postman", "Vercel", "VS Code"]
    }
  ];

  const marqueeRow1 = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
  ];

  const marqueeRow2 = [
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'LangGraph', icon: <SiLangchain /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'AWS', icon: <FaAws /> },
  ];

  return (
    <section id="skills" className={`section-padding ${styles.skillsSection}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">WHAT I WORK WITH</div>
          <h2 className="section-title">Skills</h2>
          <p className="section-description">
            The stack I reach for when turning an idea into something that ships.
          </p>
        </div>

        <div className={styles.grid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  {category.icon}
                </div>
                <h3 className={styles.cardTitle}>{category.title}</h3>
              </div>
              <div className={styles.skillTags}>
                {category.skills.map(skill => (
                  <span key={skill} className={styles.tag}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.marqueeContainer}>
        <div className={styles.marquee}>
          <div className={styles.marqueeTrack}>
            {marqueeRow1.map((tech, i) => (
              <div key={i} className={styles.marqueeItem}>
                <span className={styles.marqueeIcon}>{tech.icon}</span>
                {tech.name}
              </div>
            ))}
          </div>
          <div className={styles.marqueeTrack} aria-hidden="true">
            {marqueeRow1.map((tech, i) => (
              <div key={i + 'dup'} className={styles.marqueeItem}>
                <span className={styles.marqueeIcon}>{tech.icon}</span>
                {tech.name}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.marquee} style={{ marginTop: '1.5rem' }}>
          <div className={styles.marqueeTrackReverse}>
            {marqueeRow2.map((tech, i) => (
              <div key={i} className={styles.marqueeItem}>
                <span className={styles.marqueeIcon}>{tech.icon}</span>
                {tech.name}
              </div>
            ))}
          </div>
          <div className={styles.marqueeTrackReverse} aria-hidden="true">
            {marqueeRow2.map((tech, i) => (
              <div key={i + 'dup'} className={styles.marqueeItem}>
                <span className={styles.marqueeIcon}>{tech.icon}</span>
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
