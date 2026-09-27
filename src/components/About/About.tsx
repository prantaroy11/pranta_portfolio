import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={`section-padding ${styles.aboutSection}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">WHO I AM</div>
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            Engineer by training, builder by habit — here&apos;s the short version.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.imageCard}>
            <div className={styles.robotWrapper}>

              <div className={styles.helloBubbleWrapper}>
                <div className={styles.helloBubble}>
                  Hello!
                  <div className={styles.helloTail}></div>
                </div>
              </div>

              <svg viewBox="0 0 200 200" className={styles.robotSvg} xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="robotBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#54f0aa" />
                    <stop offset="50%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#0f5127" />
                  </linearGradient>
                  <linearGradient id="armGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#86efac" />
                    <stop offset="100%" stopColor="#22c55e" />
                  </linearGradient>
                  <filter id="robotGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                <g className={styles.antenna}>
                  <circle cx="100" cy="24" r="5" fill="#54f0aa" filter="url(#robotGlow)" />
                  <line x1="100" y1="29" x2="100" y2="42" stroke="#54f0aa" strokeWidth="3.5" strokeLinecap="round" />
                </g>

                <g className="head">
                  <rect x="52" y="42" width="96" height="74" rx="37" fill="url(#robotBodyGrad)" stroke="#86efac" strokeWidth="1.5" />
                  <rect x="64" y="52" width="72" height="52" rx="24" fill="#03100a" />
                  <g className="eyes">
                    <circle cx="83" cy="74" r="11" fill="#ffffff" />
                    <circle cx="83" cy="74" r="6.5" fill="#03100a" />
                    <circle cx="80.5" cy="71.5" r="2.8" fill="#ffffff" />
                    <circle cx="117" cy="74" r="11" fill="#ffffff" />
                    <circle cx="117" cy="74" r="6.5" fill="#03100a" />
                    <circle cx="114.5" cy="71.5" r="2.8" fill="#ffffff" />
                  </g>
                  <path d="M 88 89 Q 100 97 112 89" fill="none" stroke="#54f0aa" strokeWidth="3" strokeLinecap="round" />
                </g>

                <g className="body">
                  <path d="M 64 118 C 64 110, 136 110, 136 118 L 142 165 C 142 176, 58 176, 58 165 Z" fill="url(#robotBodyGrad)" stroke="#86efac" strokeWidth="1.5" />
                  <ellipse cx="100" cy="142" rx="26" ry="14" fill="#ffffff" opacity="0.12" />
                </g>

                <g className={styles.wavingArm}>
                  <path d="M 58 124 C 42 120, 26 104, 30 88 C 36 82, 46 88, 49 98 C 53 108, 62 118, 58 124 Z" fill="url(#armGrad)" stroke="#86efac" strokeWidth="1" />
                </g>

                <g className="right-arm">
                  <path d="M 142 124 C 154 132, 160 144, 154 154 C 148 160, 140 154, 138 144 Z" fill="url(#robotBodyGrad)" stroke="#86efac" strokeWidth="1" />
                </g>
              </svg>

            </div>
          </div>

          <div className={styles.textContent}>
            <div className={styles.infoCard}>
              <p className={styles.textHighlight}>
                I am a passionate and dedicated tech enthusiast, currently pursuing a B.Tech in Computer Science Engineering at the <strong>Indian Institute of Information Technology, Gwalior</strong>.
              </p>
              <br />
              <p className={styles.textRegular}>
                I&apos;m constantly looking for ways to deepen my knowledge of software engineering, data structures and algorithms. I enjoy untangling complex problems, applying solid object-oriented design and shipping systems that hold up in production. Outside of code, I&apos;m a fitness enthusiast and a relentless self-improver.
              </p>

              <div className={styles.statsRow}>
                {/* <div className={styles.statBox}>
                  <span className={styles.statTitle}>BASED IN</span>
                  <span className={styles.statValue}>India</span>
                </div> */}
                <div className={styles.statBox}>
                  <span className={styles.statTitle}>FOCUS</span>
                  <span className={styles.statValue}>AI + Full-stack + Backend</span>
                </div>
                {/* <div className={styles.statBox}>
                  <span className={styles.statTitle}>CURRENTLY</span>
                  <span className={styles.statValue}>FDE @ Creatr</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.fundamentals}>
          <h3 className={styles.fundamentalsTitle}>Core Fundamentals</h3>
          <div className={styles.pills}>
            {['Data Structures & Algorithms', 'Operating Systems', 'DBMS', 'Computer Networks', 'System Design', 'Software Engineering', 'Machine Learning', 'Artificial Intelligence'].map(skill => (
              <div key={skill} className={styles.pill}>{skill}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
