"use client";

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import portfolioData from '@/src/data/portfolio.json';
import { PortfolioData, Project } from '@/src/data/types';
import HeroSection from '@/src/components/HeroSection';
import ProjectsSection from '@/src/components/ProjectsSection';
import SkillGrid from '@/src/components/SkillGrid';
import ExperienceSection from '@/src/components/Experience';
import Footer from '@/src/components/Footer';
import ProjectModal from '@/src/components/ProjectModal';

const data = portfolioData as PortfolioData;

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <main>
      <HeroSection profile={data.profile} />

      {/* Pass the setter function to the ProjectsSection */}
      <ProjectsSection
        projects={data.projects}
        onProjectSelect={(project: Project) => setSelectedProject(project)}
      />

      <SkillGrid skills={data.skills} />
      <ExperienceSection experience={data.experience} />
      <Footer profile={data.profile} />

      {/* The Modal Layer */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}