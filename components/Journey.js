'use client';
import styles from './Journey.module.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const educationData = [ { date: "2023 - Present", title: "Sistem Informasi Management", institution: "Universitas Terbuka" } ];
const experienceData = [
  { date: "2024 - Present", title: "Service & Warranty Coordinator", institution: "PT. Wahana Datarindo Sempurna" },
  { date: "2024 - Present", title: "IT Support", institution: "PT. Wahana Datarindo Sempurna" },
  { date: "2016 - 2018", title: "IT Helpdesk", institution: "Dinas Koperasi" }
];

export default function Journey() {
  const container = useRef(null);
  useGSAP(() => {
    gsap.from(`.${styles.card}`, {
      scrollTrigger: { trigger: container.current, start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 0, y: 50, duration: 0.6, stagger: 0.15,
    });
  }, { scope: container });

  return (
    <section className={styles.journey} id="journey" ref={container}>
      <h2 className={styles.title}>My Academic & Professional <span>Journey</span></h2>
      <div className={styles.journeyGrid}>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Education</h3>
          {educationData.map((item, index) => (
            <div className={styles.card} key={`edu-${index}`}>
              <span className={styles.cardDate}>{item.date}</span>
              <h4 className={styles.cardTitle}>{item.title}</h4>
              <p className={styles.cardInstitution}>{item.institution}</p>
            </div>
          ))}
        </div>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Professional Experience</h3>
          {experienceData.map((item, index) => (
            <div className={styles.card} key={`exp-${index}`}>
              <span className={styles.cardDate}>{item.date}</span>
              <h4 className={styles.cardTitle}>{item.title}</h4>
              <p className={styles.cardInstitution}>{item.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
