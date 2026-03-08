'use client';

import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  image?: string;
}

interface ProjectFeatures {
  project: string;
  features: Feature[];
}

const projectFeatures: ProjectFeatures[] = [
  {
    project: '골목식당',
    features: [
      {
        title: 'AI 추천 워크플로우',
        description:
          '사용자 취향 데이터를 기반으로 식당을 추천하는 AI 파이프라인. "이 기능에 AI가 정말 필요한가?"부터 정의하고, 불필요한 AI 호출을 제거하여 비용 최적화.',
      },
      {
        title: 'CI/CD 파이프라인',
        description:
          'Jenkins + Docker 기반 자동 배포 환경 구축. PR 머지 시 자동 빌드 → 테스트 → 배포까지 무중단 파이프라인 구성.',
      },
      {
        title: '팀 운영 체계',
        description:
          '주간 회고 + 데일리 스크럼 도입. 일정 지연 시 기능 축소 의사결정을 주도하여 MVP를 기한 내 완성.',
      },
    ],
  },
  {
    project: 'YEJI',
    features: [
      {
        title: 'JSONB 기반 유연한 데이터 모델',
        description:
          'PostgreSQL JSONB vs MongoDB를 벤치마크 비교 후 JSONB 선택. 트랜잭션 안정성을 유지하면서 스키마리스 유연성 확보.',
      },
      {
        title: 'MyBatis + JPA 하이브리드',
        description:
          '복잡한 조회는 MyBatis로, CRUD는 JPA로 처리하는 하이브리드 전략. 조회 성능과 개발 생산성을 동시에 확보.',
      },
      {
        title: 'Kafka 이벤트 드리븐',
        description:
          '여행 정보 변경 시 Kafka를 통한 비동기 알림 처리. 서비스 간 결합도를 낮추고 확장 가능한 아키텍처 구현.',
      },
    ],
  },
  {
    project: 'SeoulMate',
    features: [
      {
        title: 'RESTful API 설계',
        description:
          '관광지 검색, 즐겨찾기, 리뷰 등 핵심 API를 설계하고 구현. Swagger로 문서화하여 프론트엔드와의 협업 효율 향상.',
      },
      {
        title: '공공데이터 API 연동',
        description:
          '한국관광공사 Tour API에서 서울 관광지 데이터를 수집 및 가공. 스케줄러로 데이터를 주기적으로 동기화.',
      },
    ],
  },
];

export default function Features() {
  return (
    <motion.section
      id="features"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-24"
    >
      <h2 className="text-sm font-mono syntax-annotation mb-6 tracking-wider">
        // Key Features
      </h2>

      <div className="flex flex-col gap-10">
        {projectFeatures.map((project) => (
          <div key={project.project}>
            <h3 className="text-base font-bold syntax-function mb-4 font-mono">
              {project.project}
            </h3>
            <div className="flex flex-col gap-3">
              {project.features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="ide-panel ide-glow rounded overflow-hidden transition-all duration-200"
                >
                  {feature.image ? (
                    <div className="w-full aspect-video" style={{ background: 'var(--color-sidebar)' }}>
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      className="w-full aspect-video flex items-center justify-center"
                      style={{ background: 'var(--color-sidebar)' }}
                    >
                      <span className="syntax-comment text-xs font-mono">
                        // screenshot or gif placeholder
                      </span>
                    </div>
                  )}
                  <div className="p-5">
                    <h4 className="text-sm font-bold syntax-keyword mb-2 font-mono">
                      {feature.title}
                    </h4>
                    <p className="text-sm syntax-comment leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs syntax-comment mt-6 text-center font-mono">
        // TODO: 스크린샷 및 GIF 추가 예정
      </p>
    </motion.section>
  );
}
