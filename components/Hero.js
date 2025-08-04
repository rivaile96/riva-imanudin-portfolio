// components/Hero.js
'use client';
import styles from './Hero.module.css';
// import RotatingText from './RotatingText'; // Hapus atau komentari import ini
import TextType from './TextType'; // 1. Import komponen baru
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import Orb from './Orb';

export default function Hero() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo(`.${styles.subtitle}`, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 1 } 
    );
  }, { scope: container });

  return (
    <section ref={container} className={styles.hero} id="home">
      <div className={styles.orbBackground}>
        <Orb />
      </div>
      
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          Hey, I am {' '}
          {/* 2. Ganti RotatingText dengan TextType */}
          <TextType
            text={[
              'Riva Imanudin',
              'a Cyber Security Specialist',
              'a System Administrator',
              'an IT Support Professional',
            ]}
            typingSpeed={60}
            deletingSpeed={40}
            pauseDuration={1500}
            className={styles.highlight}
          />
        </h1>
        <p className={styles.subtitle}>
          I build and secure digital infrastructures, one problem at a time.
        </p>
      </div>
    </section>
  );
}