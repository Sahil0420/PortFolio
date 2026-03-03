"use client";

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/src/data/types';
import styles from './ProjectModal.module.css';

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    // Handle Escape key to close
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <div className={styles.overlay} onClick={onClose}>
            <motion.div
                layoutId={`card-${project.id}`}
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                {/* Sticky Header */}
                <div className={styles.modalHeader}>
                    <span className={styles.pixelLabel}>// PROJECT_LOG_{project.id.toUpperCase()}</span>
                    <button className={styles.closeBtn} onClick={onClose}>
                        [ ESC ]
                    </button>
                </div>

                {/* Scrollable Body */}
                <div className={styles.scrollBody}>
                    <motion.h2 layoutId={`title-${project.id}`} className={styles.title}>
                        {project.title}
                    </motion.h2>

                    <div className={styles.section}>
                        <h4>// THE_MISSION</h4>
                        <p className={styles.text}>{project.longDescription}</p>
                    </div>

                    {project.features && project.features.length > 0 && (
                        <div className={styles.section}>
                            <h4>// KEY_FEATURES</h4>
                            <ul className={styles.featureList}>
                                {project.features.map((feature, i) => (
                                    <li key={i} className={styles.featureItem}>
                                        <span className={styles.bullet}>■</span> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className={styles.section}>
                        <h4>// TECH_STACK</h4>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '10px' }}>
                            {project.tags.map(tag => (
                                <span key={tag} style={{ border: '1px solid black', padding: '2px 8px', fontSize: '0.8rem', fontFamily: 'monospace' }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Fixed Action Bar */}
                <div className={styles.actionBar}>
                    <a href={project.link} target="_blank" rel="noreferrer" className={styles.btnPrimary}>
                        LIVE_DEMO ↗
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer" className={styles.btnSecondary}>
                        SOURCE_CODE
                    </a>
                </div>
            </motion.div>
        </div>
    );
}