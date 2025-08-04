// components/Contact.js
'use client';

import styles from './Contact.module.css';
import { Mail, Linkedin, Github, MessageSquare } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import Magnet from './Magnet'; // 1. Import Magnet

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const container = useRef(null);

    const email = "rifaimanudin@gmail.com";
    const linkedinUrl = "https://www.linkedin.com/in/rivaimanudin/";
    const githubUrl = "https://github.com/rivaile96";
    const whatsappNumber = "6287801177413"; // Nomor WA dari CV

    useGSAP(() => {
        // Kita targetkan .magnetWrapper sekarang untuk animasi stagger
        gsap.from(`.${styles.magnetWrapper}`, {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 0.6,
            stagger: 0.15 // Sedikit diperlambat stagger-nya
        })
    }, {scope: container});

    return (
        <section className={styles.contact} id="contact" ref={container}>
            <h2 className={styles.title}>
                Get In <span>Touch</span>
            </h2>
            <p className={styles.subtitle}>
                Have a project in mind or just want to say hello? Feel free to reach out.
            </p>
            <div className={styles.contactGrid}>
                {/* Setiap kartu dibungkus dengan Magnet */}
                <Magnet magnetStrength={4} padding={40} className={styles.magnetWrapper}>
                    <a href={`mailto:${email}`} className={styles.contactCard}>
                        <Mail size={28} />
                        <h3>Email</h3>
                        <p>{email}</p>
                    </a>
                </Magnet>
                <Magnet magnetStrength={4} padding={40} className={styles.magnetWrapper}>
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
                        <Linkedin size={28} />
                        <h3>LinkedIn</h3>
                        <p>Let's connect</p>
                    </a>
                </Magnet>
                <Magnet magnetStrength={4} padding={40} className={styles.magnetWrapper}>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
                        <Github size={28} />
                        <h3>GitHub</h3>
                        <p>View my projects</p>
                    </a>
                </Magnet>
                <Magnet magnetStrength={4} padding={40} className={styles.magnetWrapper}>
                    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
                        <MessageSquare size={28} />
                        <h3>WhatsApp</h3>
                        <p>Let's talk</p>
                    </a>
                </Magnet>
            </div>
        </section>
    );
}