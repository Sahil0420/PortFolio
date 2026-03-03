'use client';

import { Project } from '@/src/data/types';
import Section from './Section';
import ProjectCard from './ProjectCard';
import styles from './ProjectsSection.module.css';

interface ProjectsSectionProps {
    projects: Project[];
    onProjectSelect: (project: Project) => void; // Add this
}

export default function ProjectsSection({ projects, onProjectSelect }: ProjectsSectionProps) {
    return (
        <Section id="projects" label="Work" title="Projects">
            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        onClick={() => onProjectSelect(project)} // Trigger state change
                    />
                ))}
            </div>
        </Section>
    );
}