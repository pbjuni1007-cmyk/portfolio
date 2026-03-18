'use client';

import { motion } from 'framer-motion';
import type { ProjectData } from '@/data/projects';

interface ProjectCardProps {
  project: ProjectData;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}

export default function ProjectCard({ project, isExpanded, onToggle, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="ide-panel ide-glow rounded transition-all duration-200 cursor-pointer"
      onClick={onToggle}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-lg font-bold syntax-function">{project.title}</h3>
          {project.badge && (
            <span className="ide-tag">{project.badge}</span>
          )}
          <span className="text-xs font-mono syntax-comment ml-auto flex items-center gap-2">
            {project.team.myRole}
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="inline-block text-[10px]"
              style={{ color: 'var(--color-keyword)' }}
            >
              ▼
            </motion.span>
          </span>
        </div>

        {/* Team + Contribution */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3 text-xs font-mono">
          <span className="syntax-annotation">
            {project.team.total}인 ({project.team.breakdown})
          </span>
          <span className="syntax-comment">|</span>
          <span className="syntax-string">
            기여: {project.contribution}
          </span>
          <span className="syntax-comment">|</span>
          <span className="syntax-comment">{project.period}</span>
        </div>

        {/* Description */}
        <p className="text-sm syntax-comment mb-4">{project.description}</p>

        {/* Highlights */}
        <ul className="text-sm mb-5 space-y-1.5 font-mono">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 leading-relaxed">
              <span className="syntax-keyword shrink-0 mt-0.5">→</span>
              <span className="syntax-default">{h}</span>
            </li>
          ))}
        </ul>

        {/* Tech tags + links */}
        <div className="flex flex-wrap items-center gap-2">
          {project.tech.map((t) => (
            <span key={t} className="ide-tag-blue">
              {t}
            </span>
          ))}
          {project.github && project.github !== '#' && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="ide-link text-xs font-mono ml-auto"
            >
              GitHub ↗
            </a>
          )}
          {project.npm && (
            <a
              href={project.npm}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="ide-link text-xs font-mono"
            >
              npm ↗
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
