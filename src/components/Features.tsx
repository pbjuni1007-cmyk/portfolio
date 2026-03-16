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
    project: 'AI Sports Camera',
    features: [
      {
        title: 'AI 기반 3축 프레임 평가',
        description:
          'NIMA(Neural Image Assessment) 모델로 미적 품질을, MediaPipe Pose로 스포츠 동작 의미를, Laplacian 분산으로 선명도를 각각 평가. 세 점수를 가중 합산하여 최적의 순간을 자동 선별. NIMA 미탑재 시 밝기·대비·채도·엣지밀도·색조화 5요소 Fallback 스코어러가 자동 활성화.',
        image: '/diagrams/aisports-pipeline.svg',
      },
      {
        title: '종목별 동작 인식 (Strategy Pattern)',
        description:
          '스포츠 종목마다 다른 "결정적 장면"을 감지하기 위해 Strategy Pattern 적용. 축구 모드에서는 발-공 관계(슈팅), 머리 높이(헤딩), 다리 교차(태클), 양팔 들기(세리머니)를 포즈 랜드마크 기하학으로 판별. 새 종목 추가 시 ActionDetector 수정 없이 Strategy만 추가.',
      },
      {
        title: 'NMS 베스트 프레임 선택',
        description:
          '단순 Top-K가 아닌 Non-Maximum Suppression을 적용하여, 시간적으로 가까운 유사 프레임을 억제하고 다양한 시점의 베스트샷을 추출. 쿨다운 시간과 NMS 임계값은 사용자 설정으로 조절 가능.',
      },
      {
        title: '실시간 촬영 + 영상 분석 이중 모드',
        description:
          'CameraX Preview + ImageAnalysis로 실시간 분석하며 임계값 초과 시 자동 캡처. 기록 영상 분석 모드에서는 VideoFrameExtractor로 프레임 추출 후 1280px 다운스케일링과 분석 후 즉시 Bitmap 해제로 메모리 관리.',
      },
    ],
  },
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
        image: '/diagrams/golmok-cicd.svg',
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
        title: 'API 명세 기반 협업 프로세스',
        description:
          '프론트↔백엔드 간 API 명세서를 먼저 합의하고 개발하는 Contract-First 방식 도입. 인터페이스 불일치로 인한 재작업을 줄이고 병렬 개발 효율 향상.',
      },
      {
        title: 'Kafka 이벤트 드리븐',
        description:
          '여행 정보 변경 시 Kafka를 통한 비동기 알림 처리. 서비스 간 결합도를 낮추고 확장 가능한 아키텍처 구현.',
        image: '/diagrams/yeji-architecture.svg',
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
        image: '/diagrams/seoulmate-api.svg',
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
                    <h4 className="text-base font-bold syntax-keyword mb-2 font-mono">
                      {feature.title}
                    </h4>
                    <p className="text-sm syntax-default leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </motion.section>
  );
}
