'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AI Sports Camera',
    role: '1인 개발',
    description:
      '스포츠 영상에서 AI가 자동으로 베스트 프레임을 추출하는 Android 앱. ML 모델 통합부터 프로덕션 수준의 테스트·CI/CD까지 전체 라이프사이클을 1인으로 수행했습니다.',
    tech: ['Kotlin', 'Jetpack Compose', 'CameraX', 'TensorFlow Lite', 'MediaPipe', 'Hilt', 'Room', 'Material3'],
    highlights: [
      'TFLite NIMA + MediaPipe Pose로 품질·동작·선명도 3축 종합 평가 파이프라인 구축',
      'Strategy Pattern 기반 종목별 액션 감지 — OCP(개방-폐쇄 원칙) 실제 적용',
      'NMS 알고리즘으로 시간적 다양성 보장하며 Top-K 베스트 프레임 자동 선별',
      'NIMA 모델 미탑재 시 5요소 Fallback 스코어러 자동 전환 — graceful degradation 설계',
      '130개 유닛 테스트 + GitHub Actions CI/CD + R8 최적화로 프로덕션 수준 코드 품질',
    ],
    github: 'https://github.com/pbjuni1007-cmyk/ai-sports-camera',
  },
  {
    title: 'JunFlow',
    role: '개인 프로젝트',
    description:
      'AI 에이전트를 오케스트레이션하는 개발자 워크플로우 CLI 도구. AI를 사용하는 것을 넘어, AI 도구를 직접 설계하고 npm에 배포했습니다.',
    tech: ['TypeScript', 'Node.js', 'Zod', 'MCP', 'Claude API', 'npm'],
    highlights: [
      'Agent<TInput, TOutput> 제네릭 + Discriminated Union으로 타입 안전한 에이전트 시스템 설계',
      'DAG 위상정렬(Kahn) + 순환감지(DFS)로 태스크 의존성 해결',
      '멀티모델 라우팅 — 태스크 복잡도별 AI 모델 분리 배정 (비용 최적화)',
      'Strategy + Factory + Template Method 패턴으로 3개 AI·3개 트래커 플러그인 확장',
      'MCP 프로토콜 서버 직접 구현 + npm publish 배포',
    ],
    github: 'https://github.com/pbjuni1007-cmyk/junflow',
    npm: 'https://www.npmjs.com/package/junflow',
  },
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
    tech: ['Java', 'Spring Boot', 'PostgreSQL JSONB', 'Kafka', 'JPA'],
    highlights: [
      'PostgreSQL JSONB vs MongoDB 비교 후 JSONB 선택 — 트랜잭션 안정성과 스키마리스 유연성 동시 확보',
      'Kafka 이벤트 드리븐 아키텍처로 서비스 간 결합도 최소화',
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
