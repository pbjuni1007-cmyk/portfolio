'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import ProjectDetail from './ProjectDetail';

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="mb-24">
      <h2 className="text-sm font-mono syntax-annotation mb-6 tracking-wider">
        // Projects
      </h2>
      <div className="flex flex-col gap-4">
        {projects.map((project, i) => (
          <div key={project.id}>
            <ProjectCard
              project={project}
              isExpanded={expandedId === project.id}
              onToggle={() => handleToggle(project.id)}
              index={i}
            />
            <AnimatePresence>
              {expandedId === project.id && (
                <ProjectDetail project={project} />
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
