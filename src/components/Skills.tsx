'use client';

import { motion } from 'framer-motion';
import { skillGroups } from '@/data/skills';
import SkillBar from './SkillBar';

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-24"
    >
      <h2 className="text-sm font-mono syntax-annotation mb-6 tracking-wider">
        // Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
            className="ide-panel rounded p-4"
          >
            <h3 className="text-xs font-mono syntax-keyword mb-4">
              // {group.category}
            </h3>
            {group.skills.map((skill, si) => (
              <SkillBar key={skill.name} skill={skill} index={si} />
            ))}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
