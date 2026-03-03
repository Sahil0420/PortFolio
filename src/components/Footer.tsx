'use client';

import { motion } from 'framer-motion';
import { Profile } from '@/src/data/types';
import styles from './Footer.module.css';

interface FooterProps {
    profile: Profile;
}

export default function Footer({ profile }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            className={styles.footer}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                type: 'spring',
                stiffness: 200,
                damping: 30,
            }}
        >
            <div className={styles.footerInner}>
                <div className={styles.footerBrand}>
                    <span className={styles.footerName}>{profile.name}</span>
                    <span className={styles.footerTagline}>{profile.title}</span>
                </div>

                <div className={styles.footerLinks}>
                    {profile.socials.map((social) => (
                        <motion.a
                            key={social.label}
                            href={social.url}
                            className={styles.footerLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -3 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                        >
                            {social.label} {social.icon}
                        </motion.a>
                    ))}
                    <motion.a
                        href={`mailto:${profile.email}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            window.location.href = `mailto:${profile.email}`;
                        }}
                        className={styles.footerLink}
                        whileHover={{ y: -3 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    >
                        Email ↗
                    </motion.a>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <span className={styles.footerCopy}>
                    © {currentYear} {profile.name}. All rights reserved.
                </span>
                <span className={styles.footerMadeWith}>
                    Built with Next.js + Framer Motion + Raw CSS
                </span>
            </div>
        </motion.footer>
    );
}
