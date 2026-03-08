'use client';

import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: 'Backend',
    skills: ['Java', 'Spring Boot', 'MyBatis', 'JPA'],
    tagStyle: 'ide-tag',
  },
  {
    category: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'Redis'],
    tagStyle: 'ide-tag-blue',
  },
  {
    category: 'Infra / DevOps',
    skills: ['Docker', 'Jenkins', 'Nginx', 'Linux'],
    tagStyle: 'ide-tag-green',
  },
  {
    category: 'Messaging',
    skills: ['Kafka'],
    tagStyle: 'ide-tag-purple',
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    tagStyle: 'ide-tag-blue',
  },
  {
    category: 'Tools',
    skills: ['Git', 'Jira', 'Notion', 'Figma'],
    tagStyle: 'ide-tag-green',
  },
];

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
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
            className="ide-panel rounded p-4"
          >
            <h3 className="text-xs font-mono syntax-keyword mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className={`${group.tagStyle} cursor-default`}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
