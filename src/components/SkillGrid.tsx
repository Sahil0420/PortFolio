'use client';

import { motion } from 'framer-motion';
import { Skill } from '@/src/data/types';
import Section from './Section';
import styles from './SkillGrid.module.css';

interface SkillGridProps {
    skills: Skill[];
}

const categoryClassMap: Record<string, string> = {
    Language: styles.categoryLanguage,
    Framework: styles.categoryFramework,
    Database: styles.categoryDatabase,
    DevOps: styles.categoryDevops,
    Tool: styles.categoryTool,
};

export default function SkillGrid({ skills }: SkillGridProps) {
    return (
        <Section id="skills" label="Stack" title="Skills">
            <div className={styles.grid}>
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        className={`${styles.badge} ${categoryClassMap[skill.category] || ''}`}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 20,
                            delay: index * 0.04,
                        }}
                        whileHover={{
                            scale: 1.08,
                            y: -4,
                            boxShadow: '6px 6px 0px 0px #000',
                            transition: { type: 'spring', stiffness: 400, damping: 15 },
                        }}
                    >
                        <span className={styles.badgeName}>{skill.name}</span>
                        <span className={styles.badgeCategory}>{skill.category}</span>
                        <div className={styles.levelBar}>
                            <motion.div
                                className={styles.levelFill}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 100,
                                    damping: 20,
                                    delay: index * 0.04 + 0.3,
                                }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
