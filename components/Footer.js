// components/Footer.js
'use client';
import styles from './Footer.module.css';
import { Youtube, Instagram, Linkedin, Github, MessageSquare } from 'lucide-react';

export default function Footer() {

    // --- ISI DENGAN LINK LU ---
    const linkedinUrl = "https://www.linkedin.com/in/rivaimanudin/";
    const githubUrl = "https://github.com/rivaile96";
    const youtubeUrl = "https://www.youtube.com/@textpl0it";
    const instagramUrl = "https://www.instagram.com/t1rx00/";
    const whatsappNumber = "6287801177413";
    // --- END ---

    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.copyright}>
                    © {currentYear} Riva Imanudin. All rights reserved.
                </div>
                <div className={styles.socialLinks}>
                    <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={20} /></a>
                    <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20} /></a>
                    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageSquare size={20} /></a>
                </div>
            </div>
        </footer>
    );
}