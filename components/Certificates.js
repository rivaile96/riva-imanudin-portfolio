// components/Certificates.js
'use client';

import styles from './Certificates.module.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { Download, X } from 'lucide-react';
import Hyperspeed from './Hyperspeed'; // 1. Tambahkan lagi import Hyperspeed

gsap.registerPlugin(ScrollTrigger);

const certificatesData = [
  { title: "Honeywell Certificate", imageUrl: "https://i.imgur.com/OIdmpsL.jpeg" },
  { title: "The Evolution of Cybersecurity", imageUrl: "https://i.imgur.com/TQpuxvZ.jpeg" },
  { title: "NSE 1 Network Security Associate", imageUrl: "https://i.imgur.com/ygRaqwP.jpeg" },
  { title: "NSE 2 Network Security Associate", imageUrl: "https://i.imgur.com/aOPF9M3.jpeg" },
  { title: "NSE 3 Network Security Associate", imageUrl: "https://i.imgur.com/FYpb5I2.jpeg" },
  { title: "Web Design Certificate", imageUrl: "https://i.imgur.com/3bfHrk5.jpeg" }
];

export default function Certificates() {
  const container = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useGSAP(() => {
    gsap.from(`.${styles.certificateCard}`, {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.1,
    });
  }, { scope: container });

  return (
    <>
      <section className={styles.certificates} id="certificates" ref={container}>
        {/* 2. Tambahkan lagi komponen Hyperspeed di sini */}
        <div className={styles.backgroundHyperspeed}>
            <Hyperspeed />
        </div>
        
        {/* 3. Bungkus konten utama agar berada di atas background */}
        <div className={styles.certificatesContent}>
            <h2 className={styles.title}>
                Certificates & <span>Achievements</span>
            </h2>
            <div className={styles.transcriptButtonContainer}>
                <a href="/Transcript-HTB-Riva-Imanudin.pdf" download className={styles.transcriptButton}>
                    <Download size={20} />
                    Download HTB Academy Transcript
                </a>
            </div>
            <div className={styles.certificatesGrid}>
            {certificatesData.map((cert, index) => (
                <div 
                className={styles.certificateCard} 
                key={index}
                onClick={() => setSelectedImage(cert.imageUrl)}
                >
                <Image
                    src={cert.imageUrl}
                    alt={cert.title}
                    width={500}
                    height={350}
                    className={styles.certificateImage}
                />
                <div className={styles.overlay}>
                    <span className={styles.overlayText}>View Certificate</span>
                </div>
                </div>
            ))}
            </div>
        </div>
      </section>

      {selectedImage && (
        <div className={styles.modalOverlay} onClick={() => setSelectedImage(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setSelectedImage(null)}>
              <X size={32} />
            </button>
            <Image
              src={selectedImage}
              alt="Selected Certificate"
              width={1200}
              height={900}
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </>
  );
}