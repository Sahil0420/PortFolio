'use client';

import { motion } from 'framer-motion';
import { Project } from '@/src/data/types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    project: Project;
    index: number;
    onClick: () => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
    return (
        <motion.article
            layoutId={`card-${project.id}`}
            className={styles.card}
            onClick={onClick} // Handle the click
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                type: 'spring',
                stiffness: 300,
                damping: 25,
                delay: index * 0.1,
            }}
            whileHover={{
                x: -4,
                y: -4,
                boxShadow: '8px 8px 0px 0px #000',
                transition: { type: 'spring', stiffness: 400, damping: 15 },
            }}
        >
            <div className={styles.cardImageWrapper}>
                {/* layoutId can also be used on child elements like images */}
                <motion.span
                    layoutId={`title-init-${project.id}`}
                    className={styles.cardPlaceholder}
                >
                    {project.title.charAt(0)}
                </motion.span>
            </div>

            <div className={styles.cardBody}>
                <motion.h3 layoutId={`title-${project.id}`} className={styles.cardTitle}>
                    {project.title}
                </motion.h3>
                <p className={styles.cardDesc}>{project.description}</p>

                <div className={styles.cardTags}>
                    {project.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                </div>
            </div>

            {/* Note: stopPropagation prevents the modal from opening when clicking direct links */}
            <div className={styles.cardActions} onClick={(e) => e.stopPropagation()}>
                <a
                    href={project.link}
                    className={styles.cardLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Live ↗
                </a>
                <a
                    href={project.github}
                    className={styles.cardLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Source ↗
                </a>
            </div>
        </motion.article>
    );
}