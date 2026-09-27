"use client";

import { useState, FormEvent } from 'react';
import styles from './Contact.module.css';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin, FaXTwitter as X, FaInstagram as Instagram } from 'react-icons/fa6';

export default function Contact() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setResult("");
    
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Add your Web3Forms access key
    formData.append("access_key", "3571bc41-d8a6-4fdd-880b-d7e79eabd529");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("Thanks for reaching out! I'll get back to you soon.");
        form.reset();
      } else {
        console.log("Error", data);
        setStatus("error");
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setResult("Network error. Please check your connection and try again.");
    }
    
    setIsSubmitting(false);
  };

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
            <form className={styles.form} onSubmit={onSubmit}>
              <div className={styles.inputGroup}>
                <div className={styles.inputField}>
                  <label>FULL NAME</label>
                  <input type="text" name="name" placeholder="Your name" required />
                </div>
                <div className={styles.inputField}>
                  <label>EMAIL</label>
                  <input type="email" name="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div className={styles.inputField}>
                <label>MESSAGE</label>
                <textarea name="message" placeholder="Tell me a bit about what you're working on..." rows={6} required></textarea>
              </div>
              
              <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                <Send size={18} /> {isSubmitting ? "Sending..." : "Send message"}
              </button>

              {result && (
                <div className={`${styles.resultMessage} ${status === 'success' ? styles.success : styles.error}`} style={{ 
                  marginTop: '1rem', 
                  padding: '1rem', 
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: status === 'success' ? 'rgba(34, 222, 140, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                  color: status === 'success' ? '#22de8c' : '#ef4444',
                  border: `1px solid ${status === 'success' ? 'rgba(34, 222, 140, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`
                }}>
                  {status === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                  {result}
                </div>
              )}
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
