'use client';

import { motion } from 'framer-motion';
import { type SkillItem, proficiencyConfig, projectNameMap } from '@/data/skills';

interface SkillBarProps {
  skill: SkillItem;
  index: number;
}

export default function SkillBar({ skill, index }: SkillBarProps) {
  const config = proficiencyConfig[skill.proficiency];

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="mb-4 last:mb-0"
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-mono syntax-default font-medium">
          {skill.name}
        </span>
        <span
          className="text-xs font-mono"
          style={{ color: config.color }}
        >
          {config.label} {config.percent}%
        </span>
      </div>

      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          style={{ backgroundColor: config.color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${config.percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.05 + 0.2, ease: 'easeOut' }}
        />
      </div>

      <p className="text-xs syntax-comment mt-1 leading-relaxed">
        {skill.usage}
      </p>

      {skill.projects.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-1.5">
          {skill.projects.map((pid) => (
            <span
              key={pid}
              className="text-[10px] font-mono px-1.5 py-0.5 rounded"
              style={{
                background: 'rgba(255,255,255,0.06)',
                color: 'var(--color-comment)',
              }}
            >
              {projectNameMap[pid] || pid}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
