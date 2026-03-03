'use client';

import { motion } from 'framer-motion';
import { Profile } from '@/src/data/types';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
    profile: Profile;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring' as const,
            stiffness: 400,
            damping: 25,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring' as const,
            stiffness: 300,
            damping: 22,
            delay: 0.5,
        },
    },
};

export default function HeroSection({ profile }: HeroSectionProps) {
    const firstName = profile.name.split(' ')[0];
    const lastName = profile.name.split(' ').slice(1).join(' ');

    return (
        <section className={styles.hero} id="hero">
            <motion.div
                className={styles.heroInner}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className={styles.heroContent}>
                    <motion.span className={styles.greeting} variants={itemVariants}>
                        {`> Hello, World! I'm`}
                    </motion.span>

                    <motion.h1 className={styles.name} variants={itemVariants}>
                        {firstName}
                        <br />
                        <span className={styles.nameHighlight}>{lastName}</span>
                    </motion.h1>

                    <motion.div className={styles.titleText} variants={itemVariants}>
                        {profile.title}
                    </motion.div>

                    <motion.p className={styles.bio} variants={itemVariants}>
                        {profile.bio}
                    </motion.p>

                    <motion.div className={styles.heroActions} variants={itemVariants}>
                        <motion.a
                            href="#projects"
                            className={styles.btnPrimary}
                            whileHover={{ x: -4, y: -4 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                        >
                            View Projects ↓
                        </motion.a>
                        <motion.a
                            href={`mailto:${profile.email}`}
                            className={styles.btnSecondary}
                            whileHover={{ x: -4, y: -4 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                        >
                            Get In Touch →
                        </motion.a>
                    </motion.div>
                </div>

                <motion.div className={styles.heroVisual} variants={cardVariants}>
                    <div className={styles.statusCard}>
                        <div className={styles.statusHeader}>
                            <span className={styles.statusDot} /> System Status
                        </div>
                        <div className={styles.statusItem}>
                            <span>Status</span>
                            <span className={styles.statusValue}>Available</span>
                        </div>
                        <div className={styles.statusItem}>
                            <span>Location</span>
                            <span className={styles.statusValue}>{profile.location}</span>
                        </div>
                        <div className={styles.statusItem}>
                            <span>Focus</span>
                            <span className={styles.statusValue}>Full-Stack</span>
                        </div>
                    </div>

                    <motion.div
                        className={styles.locationCard}
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    >
                        📍 Based in {profile.location}
                    </motion.div>
                    <motion.a
                        href={"/CVportfolio.pdf"}
                        target="_blank"          // Opens in a new tab if they just want to view
                        rel="noopener noreferrer"
                        download="Sahil_FullStack_Engineer.pdf" // Renames the file for the recruiter when they save it
                        className={styles.btnPrimary}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Download CV
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
}
