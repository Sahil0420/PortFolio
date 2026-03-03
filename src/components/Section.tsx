'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import styles from './Section.module.css';

interface SectionProps {
    id?: string;
    label?: string;
    title?: string;
    children: ReactNode;
}

const sectionVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring' as const,
            stiffness: 300,
            damping: 25,
            mass: 0.8,
        },
    },
};

export default function Section({ id, label, title, children }: SectionProps) {
    return (
        <motion.section
            id={id}
            className={styles.section}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
        >
            {(label || title) && (
                <div className={styles.sectionHeader}>
                    {label && <span className={styles.sectionLabel}>{label}</span>}
                    {title && <h2 className={styles.sectionTitle}>{title}</h2>}
                </div>
            )}
            {children}
        </motion.section>
    );
}
