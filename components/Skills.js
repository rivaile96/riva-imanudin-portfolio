// components/Skills.js
'use client';

import { useState, useRef, useMemo } from 'react';
import Image from 'next/image';
import styles from './Skills.module.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- DATA DENGAN PENAMBAHAN DEVELOPMENT & PROGRAMMING ---
const allSkills = [
  // Tools
  { name: 'Python', icon: '/tools/python.png', category: 'Programming' },
  { name: 'PHP', icon: '/tools/php.png', category: 'Programming' },
  { name: 'Laravel', icon: '/tools/laravel.png', category: 'Programming' },
  { name: 'Git', icon: '/tools/git.png', category: 'Development' },
  { name: 'GitHub', icon: '/tools/github.png', category: 'Development' },
  { name: 'WordPress', icon: '/tools/wordpress.png', category: 'Development' },
  { name: 'Windows', icon: '/tools/windows.png', category: 'IT/Infrastructure' },
  { name: 'Linux', icon: '/tools/linux.png', category: 'IT/Infrastructure' },
  { name: 'Burp Suite', icon: '/tools/burpsuite.png', category: 'Cyber Security' },
  { name: 'Metasploit', icon: '/tools/metasploit.png', category: 'Cyber Security' },
  { name: 'Nmap', icon: '/tools/nmap.png', category: 'Cyber Security' },
  { name: 'SQLMap', icon: '/tools/sqlmap.png', category: 'Cyber Security' },
  { name: 'Wireshark', icon: '/tools/Wireshark.png', category: 'Cyber Security' },
  { name: 'Photoshop', icon: '/tools/adobe-photoshop.png', category: 'Design' },
  { name: 'Canva', icon: '/tools/canva.png', category: 'Design' },
  { name: 'Honeywell', icon: '/tools/honeywell.png', category: 'AIDC' },
  { name: 'Zebra', icon: '/tools/zebra.png', category: 'AIDC' },
  // Skills
  { name: 'Troubleshooting H/W & S/W', progress: 95, category: 'IT/Infrastructure' },
  { name: 'Windows & Linux System', progress: 90, category: 'IT/Infrastructure' },
  { name: 'System Administration', progress: 80, category: 'IT/Infrastructure' },
  { name: 'AIDC', progress: 80, category: 'AIDC' },
  { name: 'Networking & Topology', progress: 70, category: 'IT/Infrastructure' },
  { name: 'Web Design', progress: 70, category: 'Design' },
  { name: 'Penetration Testing', progress: 55, category: 'Cyber Security' },
  { name: 'Development', progress: 50, category: 'Development' }, // BARU
  { name: 'Programming', progress: 35, category: 'Programming' }, // BARU
];

const categories = ['All', 'Cyber Security', 'IT/Infrastructure', 'Development', 'Programming', 'Design', 'AIDC'];
// --- END OF DATA ---

export default function Skills() {
  const container = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'All') return allSkills;
    return allSkills.filter(skill => skill.category === activeCategory);
  }, [activeCategory]);

  const tools = filteredSkills.filter(s => s.icon);
  const skills = filteredSkills.filter(s => s.progress);

  useGSAP(() => {
    gsap.from(`.${styles.toolItem}`, {
        scrollTrigger: { trigger: `.${styles.toolsColumn}`, start: 'top 85%' },
        opacity: 0, scale: 0.8, duration: 0.5, stagger: 0.08
    });

    const skillItems = gsap.utils.toArray(`.${styles.skillItem}`);
    skillItems.forEach(item => {
      const progressFill = item.querySelector(`.${styles.progressFill}`);
      const progressText = item.querySelector(`.${styles.progressText}`);
      const targetProgress = parseInt(progressFill.dataset.progress, 10);
      gsap.set(item, { opacity: 0, y: 30 });
      const tl = gsap.timeline({ scrollTrigger: { trigger: item, start: 'top 90%', toggleActions: 'play none none none' } });
      tl.to(item, { opacity: 1, y: 0, duration: 0.5 });
      tl.to(progressFill, { width: `${targetProgress}%`, duration: 1.5, ease: 'power3.out' }, "-=0.5");
      tl.to(progressText, {
        textContent: `${targetProgress}`, duration: 1.5, ease: 'power3.out', roundProps: "textContent",
        onUpdate: function() { this.targets()[0].innerHTML = Math.round(this.targets()[0].textContent) + '%'; },
        onComplete: function() { this.targets()[0].innerHTML = targetProgress + '%'; }
      }, "<");
    });
  }, { scope: container, dependencies: [filteredSkills] });

  return (
    <section className={styles.skills} id="skills" ref={container}>
      <h2 className={styles.title}>
        Tools & <span>Skills</span>
      </h2>
      <div className={styles.filterButtons}>
        {categories.map(category => (
          <button
            key={category}
            className={activeCategory === category ? styles.active : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className={styles.skillsGrid}>
        <div className={styles.toolsColumn}>
          <h3 className={styles.columnTitle}>Tools</h3>
          <div className={styles.toolsGrid}>
            {tools.map((tool, index) => (
              <div className={styles.toolItem} key={`tool-${index}`}>
                <div className={styles.toolIconWrapper}>
                  <Image src={tool.icon} alt={tool.name} width={40} height={40} />
                </div>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.skillsColumn}>
          <h3 className={styles.columnTitle}>Skills</h3>
          <div className={styles.skillsList}>
            {skills.map((skill, index) => (
              <div className={styles.skillItem} key={`skill-${index}`}>
                <span className={styles.skillName}>{skill.name}</span>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill} 
                    data-progress={skill.progress}
                    style={{ width: '0%' }}
                  ></div>
                </div>
                <span className={styles.progressText}>0%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}