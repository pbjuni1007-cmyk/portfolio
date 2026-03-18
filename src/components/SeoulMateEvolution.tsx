'use client';

import { motion } from 'framer-motion';
import type { EvolutionVersion } from '@/data/projects';

interface SeoulMateEvolutionProps {
  versions: EvolutionVersion[];
}

export default function SeoulMateEvolution({ versions }: SeoulMateEvolutionProps) {
  return (
    <div>
      <h4 className="text-xs font-mono syntax-comment mb-3 tracking-wider">
        // ─── 기술 진화 v1 → v2 → v3 ─────
      </h4>
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-[7px] top-3 bottom-3 w-px"
          style={{ background: 'var(--color-annotation)' }}
        />

        <div className="flex flex-col gap-5">
          {versions.map((ver, i) => (
            <motion.div
              key={ver.version}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="flex gap-4 relative"
            >
              {/* Dot */}
              <div className="mt-1 shrink-0">
                <div
                  className="w-[15px] h-[15px] rounded-full border-2 flex items-center justify-center text-[8px] font-mono font-bold"
                  style={{
                    borderColor: 'var(--color-annotation)',
                    background: 'var(--color-editor)',
                    color: 'var(--color-annotation)',
                  }}
                >
                  {i + 1}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 ide-panel rounded p-4">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-sm font-bold syntax-annotation font-mono">
                    {ver.version}
                  </span>
                  <span className="text-xs syntax-function font-mono">
                    {ver.subtitle}
                  </span>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {ver.tech.map((t) => (
                    <span key={t} className="ide-tag-purple text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Changes */}
                <ul className="text-sm space-y-1 font-mono mb-3">
                  {ver.changes.map((change) => (
                    <li key={change} className="flex gap-2 leading-relaxed">
                      <span className="syntax-annotation shrink-0 mt-0.5">→</span>
                      <span className="syntax-default">{change}</span>
                    </li>
                  ))}
                </ul>

                {/* Growth point */}
                <div
                  className="text-xs font-mono p-2 rounded leading-relaxed"
                  style={{
                    background: 'rgba(152, 118, 170, 0.08)',
                    color: 'var(--color-comment)',
                  }}
                >
                  <span className="syntax-annotation font-semibold">성장 포인트: </span>
                  {ver.growthPoint}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
