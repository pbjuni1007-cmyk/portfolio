'use client';

import { motion } from 'framer-motion';
import type { ProjectData } from '@/data/projects';
import SeoulMateEvolution from './SeoulMateEvolution';

interface ProjectDetailProps {
  project: ProjectData;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="overflow-hidden"
    >
      <div className="px-6 pb-6 space-y-6" style={{ borderTop: '1px solid var(--color-border)' }}>

        {/* 담당 역할 상세 */}
        <div className="pt-5">
          <h4 className="text-xs font-mono syntax-comment mb-3 tracking-wider">
            // ─── 담당 역할 ─────
          </h4>
          <div className="ide-panel rounded p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-mono">
              <div>
                <span className="syntax-keyword">팀 구성: </span>
                <span className="syntax-default">
                  {project.team.total}인 ({project.team.breakdown})
                </span>
              </div>
              <div>
                <span className="syntax-keyword">역할: </span>
                <span className="syntax-default">{project.team.myRole}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="syntax-keyword">기여도: </span>
                <span className="syntax-string">{project.contribution}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 기술 선정 이유 */}
        <div>
          <h4 className="text-xs font-mono syntax-comment mb-3 tracking-wider">
            // ─── 기술 선정 이유 ─────
          </h4>
          <div className="flex flex-col gap-3">
            {project.techChoices.map((tc) => (
              <div key={tc.tech} className="ide-panel rounded p-4">
                <h5 className="text-sm font-bold syntax-function mb-2 font-mono">
                  {tc.tech}
                </h5>
                <p className="text-sm syntax-default leading-relaxed mb-1">
                  {tc.reason}
                </p>
                {tc.alternatives && (
                  <p className="text-xs syntax-annotation font-mono">
                    ↳ {tc.alternatives}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 구현 사항 */}
        <div>
          <h4 className="text-xs font-mono syntax-comment mb-3 tracking-wider">
            // ─── 구현 사항 ─────
          </h4>
          <div className="flex flex-col gap-3">
            {project.features.map((feature) => (
              <div
                key={feature.title}
                className="ide-panel rounded overflow-hidden"
              >
                {feature.diagram && (
                  <div
                    className="w-full p-6 flex items-center justify-center"
                    style={{ background: 'var(--color-sidebar)' }}
                  >
                    <img
                      src={feature.diagram}
                      alt={feature.title}
                      className="w-full h-auto max-h-[400px] object-contain"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h5 className="text-sm font-bold syntax-keyword mb-2 font-mono">
                    {feature.title}
                  </h5>
                  <p className="text-sm syntax-default leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 성과 / 성능 */}
        {project.performance.length > 0 && (
          <div>
            <h4 className="text-xs font-mono syntax-comment mb-3 tracking-wider">
              // ─── 성과 ─────
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.performance.map((metric) => (
                <div key={metric.label} className="ide-panel rounded p-3 text-center">
                  <p className="text-lg font-bold syntax-number font-mono">
                    {metric.value}
                  </p>
                  <p className="text-xs syntax-function font-mono mt-1">
                    {metric.label}
                  </p>
                  {metric.note && (
                    <p className="text-[10px] syntax-comment mt-0.5">
                      {metric.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SeoulMate 발전 과정 */}
        {project.evolution && (
          <SeoulMateEvolution versions={project.evolution} />
        )}

        {/* 프로젝트 회고 */}
        <div>
          <h4 className="text-xs font-mono syntax-comment mb-3 tracking-wider">
            // ─── 회고 ─────
          </h4>
          <div className="space-y-3">
            {/* 배운 점 */}
            <div className="ide-panel rounded p-4">
              <h5 className="text-xs font-mono syntax-string mb-2 font-semibold">
                ✓ 배운 점
              </h5>
              <ul className="text-sm space-y-1.5 font-mono">
                {project.retrospective.lessons.map((lesson) => (
                  <li key={lesson} className="flex gap-2 leading-relaxed">
                    <span className="syntax-string shrink-0 mt-0.5">→</span>
                    <span className="syntax-default">{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 아쉬운 점 */}
            {project.retrospective.regrets && project.retrospective.regrets.length > 0 && (
              <div className="ide-panel rounded p-4">
                <h5 className="text-xs font-mono syntax-keyword mb-2 font-semibold">
                  △ 아쉬운 점
                </h5>
                <ul className="text-sm space-y-1.5 font-mono">
                  {project.retrospective.regrets.map((regret) => (
                    <li key={regret} className="flex gap-2 leading-relaxed">
                      <span className="syntax-keyword shrink-0 mt-0.5">→</span>
                      <span className="syntax-default">{regret}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 개선 방안 */}
            {project.retrospective.improvements && project.retrospective.improvements.length > 0 && (
              <div className="ide-panel rounded p-4">
                <h5 className="text-xs font-mono syntax-number mb-2 font-semibold">
                  ▲ 개선 방안
                </h5>
                <ul className="text-sm space-y-1.5 font-mono">
                  {project.retrospective.improvements.map((imp) => (
                    <li key={imp} className="flex gap-2 leading-relaxed">
                      <span className="syntax-number shrink-0 mt-0.5">→</span>
                      <span className="syntax-default">{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
