'use client';
import styles from './About.module.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { Github } from 'lucide-react';
import ProfileCard from './ProfileCard';
import DecryptedText from './DecryptedText';
import FuzzyText from './FuzzyText';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef(null);
  const aboutText = "I have been working for 4 years in the IT field, covering areas such as Networking, AutoID/Mobile Computers, Barcode Printers & Scanners, and Cyber Security. I enjoy exploring new technologies and finding ways to apply them to solve problems.";

  useGSAP(() => {
    const titleRef = container.current.querySelector(`.${styles.title}`);
    const cardRef = container.current.querySelector(`.${styles.cardContainer}`);
    const textRef = container.current.querySelector(`.${styles.textContainer}`);
    const stats = gsap.utils.toArray(`.${styles.stat}`, container.current);
    
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });

    timeline
      .from(titleRef, { opacity: 0, y: 50, duration: 0.6 })
      .from(cardRef, { opacity: 0, x: -50, duration: 0.6 }, "-=0.3")
      .from(textRef, { opacity: 0, x: 50, duration: 0.6 }, "<")
      .from(stats, { opacity: 0, y: 30, duration: 0.5, stagger: 0.2 }, "-=0.3");
  }, { scope: container });

  return (
    <section className={styles.about} id="about" ref={container}>
      <h2 className={styles.title}>
        Why hire me for your <span>next project</span>?
      </h2>
      <div className={styles.contentWrapper}>
        <div className={styles.cardContainer}>
          <ProfileCard name="Riva Imanudin" title="Cyber Security Specialist" handle="rivaile96" status="Online" contactText="Contact Me" avatarUrl="/images/profil.png" enableTilt={true} onContactClick={() => { window.location.href = 'mailto:rifaimanudin@gmail.com'; }} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.description}>
            <DecryptedText text={aboutText} animateOn="view" speed={10} sequential={true} revealDirection="start" characters="█░▒▓" encryptedClassName={styles.encryptedChar} />
          </div>
          <div className={styles.buttonGroup}>
            <a href="#projects" className={styles.btnPrimary}>Portfolio</a>
            <a href="/CV-Rivai-Imanudin.pdf" download className={styles.btnSecondary}>Download CV</a>
          </div>
        </div>
      </div>
      <div className={styles.statsContainer}>
        <div className={styles.stat}><h3>+4 years</h3><p>Experience</p></div>
        <div className={styles.stat}><h3>+4</h3><p>Personal Projects</p></div>
        <div className={`${styles.stat} ${styles.githubBox}`}>
          <a href="https://github.com/rivaile96" target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
            <Github size={32} className={styles.githubIcon} />
            <div className={styles.githubTextContainer}>
              <div className={styles.fuzzyTextWrapper}><FuzzyText fontSize="1.75rem" fontWeight={700} color="#f8fafc" baseIntensity={0.05} hoverIntensity={0.3}>GitHub</FuzzyText></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
