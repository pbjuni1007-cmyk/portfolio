'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: '골목식당',
    badge: '가제',
    role: '팀장 (6인)',
    description:
      'AI 기반 식당 추천 서비스. AI 워크플로우를 설계하고, 팀 운영 방식을 설계했습니다.',
    tech: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Docker', 'Jenkins'],
    highlights: [
      'AI 워크플로우 설계 — "이 기능에 AI가 정말 필요한가?"부터 정의',
      '일정 지연 시 기능 축소 의사결정 주도',
      '팀원 간 갈등 중재 및 주간 회의 체계 도입',
    ],
    github: '#',
  },
  {
    title: 'YEJI',
    role: 'BE 리드 (5인)',
    description:
      '여행 정보 공유 플랫폼. 백엔드 아키텍처를 설계하고 기술적 의사결정을 주도했습니다.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL JSONB', 'Kafka', 'MyBatis + JPA'],
    highlights: [
      'PostgreSQL JSONB vs MongoDB 비교 후 JSONB 선택',
      'MyBatis + JPA 하이브리드 전략으로 조회 성능과 생산성 동시 확보',
      '프론트↔백 API 명세서 기반 합의 프로세스 도입',
    ],
    github: '#',
  },
  {
    title: 'SeoulMate',
    role: '백엔드 (2인)',
    description:
      '서울 관광 도우미 서비스. 첫 프로젝트로 API 개발과 데이터베이스 설계를 담당했습니다.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Vue.js'],
    highlights: [
      'RESTful API 설계 및 구현',
      '공공데이터 API 연동',
      '첫 협업 경험 — Git 브랜치 전략 수립',
    ],
    github: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mb-24">
      <h2 className="text-sm font-mono syntax-annotation mb-6 tracking-wider">
        // Projects
      </h2>
      <div className="flex flex-col gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="ide-panel ide-glow rounded p-6 transition-all duration-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-lg font-bold syntax-function">{project.title}</h3>
              {project.badge && (
                <span className="ide-tag">{project.badge}</span>
              )}
              <span className="text-xs font-mono syntax-comment ml-auto">
                {project.role}
              </span>
            </div>
            <p className="text-sm syntax-comment mb-4">{project.description}</p>

            <ul className="text-sm mb-5 space-y-1.5 font-mono">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2 leading-relaxed">
                  <span className="syntax-keyword shrink-0 mt-0.5">→</span>
                  <span className="syntax-default">{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="ide-tag-blue">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
