'use client';

import { motion } from 'framer-motion';
import { Experience as ExperienceType } from '@/src/data/types';
import Section from './Section';
import styles from './Experience.module.css';

interface ExperienceSectionProps {
    experience: ExperienceType[];
}

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
    return (
        <Section id="experience" label="Journey" title="Experience">
            <div className={styles.timeline}>
                {experience.map((entry, index) => (
                    <motion.div
                        key={entry.id}
                        className={styles.entry}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 25,
                            delay: index * 0.15,
                        }}
                    >
                        <div className={styles.entryDot} />
                        <motion.div
                            className={styles.entryCard}
                            whileHover={{
                                x: -4,
                                y: -4,
                                boxShadow: '8px 8px 0px 0px #000',
                                transition: { type: 'spring', stiffness: 400, damping: 15 },
                            }}
                        >
                            <span className={styles.entryPeriod}>{entry.period}</span>
                            <h3 className={styles.entryRole}>{entry.role}</h3>
                            <span className={styles.entryCompany}>@ {entry.company}</span>
                            <p className={styles.entryDesc}>{entry.description}</p>
                            <ul className={styles.highlights}>
                                {entry.highlights.map((hl, i) => (
                                    <li key={i} className={styles.highlight}>{hl}</li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
