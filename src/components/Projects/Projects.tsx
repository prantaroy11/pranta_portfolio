import styles from './Projects.module.css';
import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa6';

export default function Projects() {
  const projects = [
    {
      title: "AI Code Generation Agent",
      description: "Multi-agent AI system that generates complete projects from a single prompt.",
      tags: ["Next.js", "AI", "TypeScript", "LangChain"],
      image: "/AI Code Generation Agent.png",
      github: "https://github.com/prantaroy11/ai-code-generation-agent",
      demo: "https://github.com/prantaroy11/ai-code-generation-agent"
    },
    {
      title: "Buy & Sell Cars",
      description: "A comprehensive digital marketplace platform built for buying and selling cars seamlessly online.",
      tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
      image: "/Buy_Sell_Cars.jpg",
      github: "https://github.com/prantaroy11/Buy-Sell-Cars",
      demo: "https://github.com/prantaroy11/Buy-Sell-Cars"
    },
    {
      title: "ClinFlow",
      description: "A robust and scalable backend system for a movie booking application, managing theaters, movies, and ticketing.",
      tags: ["Node.js", "Express", "MongoDB", "REST API", "Backend"],
      image: "/clinflow.jpg",
      github: "https://github.com/prantaroy11/ClinFlow",
      demo: "https://github.com/prantaroy11/ClinFlow"
    },
    {
      title: "RoamStay Analytics",
      description: "A modern, real-time dashboard tracking critical property metrics such as active bookings, revenue, and site visitors.",
      tags: ["Next.js", "React", "Socket.IO", "Tailwind", "Zustand"],
      image: "/RoamStayAnalytics.jpg",
      github: "https://github.com/prantaroy11/RoamStayAnalytics",
      demo: "https://github.com/prantaroy11/RoamStayAnalytics"
    },
    {
      title: "Golf Charity Platform",
      description: "A subscription-driven platform combining performance tracking, monthly prize draws, and charitable giving.",
      tags: ["Next.js", "Supabase", "TypeScript", "Tailwind", "Stripe"],
      image: "/golf_charity.jpg",
      github: "https://github.com/prantaroy11/Golf-Charity-Subscription-Platform",
      demo: "https://github.com/prantaroy11/Golf-Charity-Subscription-Platform"
    }
  ];

  return (
    <section id="projects" className={`section-padding ${styles.projectsSection}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">SELECTED WORK</div>
          <h2 className="section-title">Projects</h2>
          <p className="section-description">
            A few things I&apos;ve designed, built and put in front of real users.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageContainer}>
                <img src={project.image} alt={project.title} className={styles.projectImage} />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <div className={styles.actions}>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn} style={{ textDecoration: 'none' }}>
                    <ExternalLink size={18} /> Live demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.iconBtn}>
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.moreProjects}>
          <a href="https://github.com/prantaroy11" target="_blank" rel="noopener noreferrer" className={styles.moreBtn}>
            <Github size={18} /> See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
