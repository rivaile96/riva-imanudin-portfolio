// components/Projects.js
'use client';

import styles from './Projects.module.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import Image from 'next/image';
import { Github } from 'lucide-react';
import NeonBorderCard from './NeonBorderCard'; // 1. Import NeonBorderCard

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    title: "AI Service Management Ticketing",
    description: "An AI-powered service management and ticketing system integrated with Google Gemini for advanced features and automation.",
    technologies: ["Laravel", "PHP", "Tailwind CSS", "Alpine.js", "Gemini API"],
    githubLink: "https://github.com/rivaile96/data-service-ticketing",
    imageUrl: "/projects/ticketing-ai.png"
  },
  {
    title: "PHISPYRATE FaceVerification",
    description: "A web-based facial authentication simulation tool for cybersecurity training, developed with Flask and JavaScript MediaRecorder API.",
    technologies: ["Flask", "Python", "JavaScript", "OSINT"],
    githubLink: "https://github.com/rivaile96/PHISPYRATE_FaceVerification",
    imageUrl: "/projects/phispyrate.png"
  },
  {
    title: "NgOCR-in",
    description: "A command-line OCR toolkit for Linux, featuring batch processing and multi-language translation using Python, Tesseract, and OpenCV.",
    technologies: ["Python", "Tesseract", "OpenCV", "CLI"],
    githubLink: "https://github.com/rivaile96/NgOCR-in",
    imageUrl: "/projects/ngocr-in.png"
  },
  {
    title: "Astro Portfolio Website",
    description: "A fast, modern, and responsive personal portfolio website built with Astro, Tailwind CSS, and TypeScript, featuring scroll animations.",
    technologies: ["Astro", "Tailwind CSS", "TypeScript", "AOS"],
    githubLink: null,
    imageUrl: "/projects/astro-portfolio.png"
  }
];

export default function Projects() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(`.${styles.cardWrapper}`, {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 60,
      duration: 0.6,
      stagger: 0.2,
    });
  }, { scope: container });

  return (
    <section className={styles.projects} id="projects" ref={container}>
      <h2 className={styles.title}>
        Featured <span>Projects</span>
      </h2>
      <div className={styles.projectsGrid}>
        {projectsData.map((project, index) => (
          // 2. Bungkus setiap kartu dengan NeonBorderCard
          <NeonBorderCard key={index} className={styles.cardWrapper}>
            <div className={styles.projectCard}>
              <div className={styles.cardText}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <div className={styles.cardLinks}>
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" title="GitHub Repository">
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <p className={styles.cardDescription}>{project.description}</p>
                <ul className={styles.techList}>
                  {project.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.cardImage}>
                <Image 
                  src={project.imageUrl}
                  alt={`Screenshot of ${project.title}`}
                  width={800}
                  height={600}
                  className={styles.projectImage}
                />
              </div>
            </div>
          </NeonBorderCard>
        ))}
      </div>
    </section>
  );
}