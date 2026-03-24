export interface TeamComposition {
  total: number;
  breakdown: string;
  myRole: string;
}

export interface TechChoice {
  tech: string;
  reason: string;
  alternatives?: string;
}

export interface Feature {
  title: string;
  description: string;
  diagram?: string;
}

export interface PerformanceMetric {
  label: string;
  value: string;
  note?: string;
}

export interface Retrospective {
  lessons: string[];
  regrets?: string[];
  improvements?: string[];
}

export interface EvolutionVersion {
  version: string;
  subtitle: string;
  tech: string[];
  changes: string[];
  growthPoint: string;
}

export interface ProjectData {
  id: string;
  title: string;
  badge?: string;
  period: string;
  team: TeamComposition;
  contribution: string;
  description: string;
  tech: string[];
  highlights: string[];
  techChoices: TechChoice[];
  features: Feature[];
  performance: PerformanceMetric[];
  retrospective: Retrospective;
  evolution?: EvolutionVersion[];
  github?: string;
  npm?: string;
}

export const projects: ProjectData[] = [
  {
    id: 'golmok',
    title: '골목식당',
    badge: '가제',
    period: '2026.02 - 2026.04',
    team: {
      total: 6,
      breakdown: 'BE 3 / FE 2 / AI 1',
      myRole: '팀장, FE 개발, CI/CD 구축',
    },
    contribution: '팀장, Frontend Lead',
    description:
      'AI 기반 영세 요식업 경영 솔루션. 팀장으로서 기술 의사결정과 팀 운영을 주도하면서, 백엔드 개발자로서 프론트엔드를 직접 경험하여 협업의 관점을 넓혔습니다.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Docker', 'Jenkins', 'Java 21', 'Spring Boot', 'PostgreSQL'],
    highlights: [
      '백엔드 개발자가 FE를 직접 경험 — API 설계 시 프론트엔드가 필요로 하는 데이터 구조와 응답 형태를 체득',
      'Jenkins + Docker CI/CD 파이프라인 직접 설계·구축',
      '일정 지연 시 기능 축소 의사결정 주도 — MVP 기한 내 완성',
    ],
    techChoices: [
      {
        tech: 'Next.js + TypeScript (FE)',
        reason:
          '백엔드 개발자로서 프론트엔드를 직접 경험하기 위해 FE 역할을 선택. API를 소비하는 입장에서 "백엔드가 어떤 응답을 줘야 프론트가 편한지"를 몸으로 체득.',
        alternatives: '향후 백엔드 개발 시 프론트엔드 친화적인 API 설계 역량 확보',
      },
      {
        tech: 'Jenkins + Docker',
        reason:
          '팀 규모와 배포 빈도를 고려했을 때, 자체 호스팅으로 파이프라인을 완전히 제어할 수 있는 Jenkins가 적합. Groovy DSL로 빌드-테스트-배포 전 과정을 코드로 관리.',
        alternatives: 'GitHub Actions 대비 파이프라인 커스터마이징 자유도 우위',
      },
      {
        tech: 'PostgreSQL',
        reason:
          '메뉴/원가/매출 데이터의 관계형 모델링이 핵심. YEJI에서 검증한 PostgreSQL의 안정성과 확장성을 재활용.',
      },
    ],
    features: [
      {
        title: 'CI/CD 파이프라인',
        description:
          'PR 머지 시 자동 빌드 → 테스트 → Docker 이미지 빌드 → 배포까지 무중단 파이프라인. Jenkinsfile로 전 과정을 코드화.',
        diagram: '/diagrams/golmok-cicd.svg',
      },
      {
        title: 'FE 개발 — 백엔드 관점의 프론트엔드',
        description:
          'Next.js 기반 프론트엔드를 직접 개발하며, API 응답 구조가 프론트엔드 렌더링 성능에 미치는 영향, 에러 핸들링 UX, 로딩 상태 관리 등 백엔드 개발자가 놓치기 쉬운 부분을 경험.',
      },
      {
        title: 'MVP 우선 기능 축소 전략',
        description:
          'CCTV 실시간 분석 → 영상 파일 업로드 비동기 분석으로 전환. POS 연동 없이 동작하는 3대 기능(원가분석, 수요예측, 인력가이드) 설계.',
      },
    ],
    performance: [
      { label: 'CI/CD 파이프라인', value: '자동화 구축', note: 'PR → 빌드 → 테스트 → 배포' },
      { label: 'MVP 기능', value: '3대 기능', note: 'POS 연동 없이 독립 동작' },
    ],
    retrospective: {
      lessons: [
        '프론트엔드를 직접 경험하니, "이 API 응답이 왜 불편한지"가 보였음 — 향후 백엔드 개발 시 프론트 친화적 API 설계 가능',
        'MVP 우선 전략이 6인 팀에서 효과적 — 핵심 3기능에 집중하여 기한 내 완성',
        '딥 리뷰에서 CCTV "목적 외 이용" 법적 리스크(개인정보보호법 제18조) 사전 발견 → 영상 파일 업로드 방식으로 피봇',
        '팀원 간 갈등을 1:1 면담 + 역할 재분배로 해결 — 이후 팀 속도 향상 체감',
      ],
      regrets: [
        '초기 기획 단계에서 데이터 진입 설계(레시피/POS/식자재)를 충분히 하지 못해 중간 피드백에서 지적받음',
        'AI 기능의 차별화 포인트를 더 일찍 명확히 했으면 발표 설득력이 높았을 것',
      ],
      improvements: [
        '기획 초기에 "데이터를 어떻게 확보할 것인가"를 최우선으로 설계',
        '경쟁사 분석(메이아이 매쉬 등)을 프로젝트 시작 시점에 수행',
      ],
    },
    github: '#',
  },
  {
    id: 'yeji',
    title: 'YEJI',
    period: '2026.01 - 2026.02',
    team: {
      total: 5,
      breakdown: 'FE 2 / BE 2 / AI·Infra 1',
      myRole: 'Backend Lead, 아키텍처 설계 주도',
    },
    contribution: 'Backend Lead — 아키텍처 설계 주도, API 설계 70%',
    description:
      '동서양 통합 운세 플랫폼. 커스텀 파인튜닝 LLM(Qwen3 4B)이 사주·타로를 AI로 해석하고, 물리 엔진 기반 인터랙티브 카드 경험을 제공합니다.',
    tech: ['Java 21', 'Spring Boot 3.4', 'Spring Security', 'JPA', 'PostgreSQL', 'Redis', 'Kafka', 'Docker', 'Jenkins'],
    highlights: [
      'SSE 기반 AI 운세 실시간 스트리밍 응답 중계 아키텍처 설계',
      'Spring Security + JWT 인증/인가 체계 구현',
      '프론트-백 API 명세서 기반 합의 프로세스(Contract-First) 도입',
    ],
    techChoices: [
      {
        tech: 'Spring Boot 3.4 + JPA',
        reason:
          '사주/타로/궁합 등 복잡한 도메인 모델을 객체 지향적으로 설계. Spring Security로 인증/인가를 통합 관리.',
      },
      {
        tech: 'PostgreSQL + Redis',
        reason:
          '운세 데이터의 관계형 모델링에 PostgreSQL, 세션/캐시에 Redis를 분리하여 응답 속도 최적화.',
        alternatives: 'MySQL 대비 확장성과 JSON 지원 우위',
      },
      {
        tech: 'SSE (Server-Sent Events)',
        reason:
          'AI 서버(vLLM)의 스트리밍 응답을 클라이언트까지 실시간 전달. WebSocket 대비 단방향 통신에 적합하고 구현 복잡도가 낮음.',
      },
    ],
    features: [
      {
        title: 'AI 운세 실시간 스트리밍',
        description:
          'vLLM 기반 AI 서버의 스트리밍 응답을 SSE로 클라이언트에 중계. 동양 도사와 서양 마법사 캐릭터의 티키타카 형식으로 운세를 실시간 생성.',
        diagram: '/diagrams/yeji-architecture.svg',
      },
      {
        title: 'Contract-First API 협업',
        description:
          'API 명세서를 먼저 합의한 뒤 프론트/백이 병렬 개발. 인터페이스 불일치로 인한 재작업을 제거하고 개발 속도 향상.',
      },
      {
        title: '인증/인가 + 소셜 기능',
        description:
          'Spring Security + JWT 기반 인증 체계 위에, 축복/저주 교환, 캐릭터 상점, 친구 시스템 등 소셜 게이미피케이션 기능의 백엔드 API 구현.',
      },
    ],
    performance: [
      { label: 'API 설계', value: 'Contract-First', note: '프론트-백 병렬 개발' },
      { label: '코드 리뷰', value: '7라운드 249건', note: 'CRITICAL 26, HIGH 72' },
    ],
    retrospective: {
      lessons: [
        'Contract-First 방식이 5인 팀에서 병렬 개발 효율을 크게 높임 — 명세 합의에 1일 투자해서 재작업 절약',
        'SSE 기반 스트리밍 아키텍처 설계로 실시간 AI 응답의 UX를 크게 개선',
        '7라운드 249건의 체계적 코드 리뷰 프로세스를 경험하며 코드 품질 관리 역량 향상',
      ],
      regrets: [
        'Redis 캐싱 전략을 초기 설계 시점에 더 체계적으로 수립했으면 좋았을 것',
        'AI 서버와의 통신 에러 핸들링을 더 촘촘하게 설계했으면 안정성이 높아졌을 것',
      ],
      improvements: [
        'Circuit Breaker 패턴으로 AI 서버 장애 시 graceful degradation 구현',
        '캐싱 전략 문서화 — 어떤 데이터를 얼마나 캐싱할지 사전 정의',
      ],
    },
    github: 'https://github.com/yeji-service',
  },
  {
    id: 'junflow',
    title: 'JunFlow',
    period: '2026.03',
    team: {
      total: 1,
      breakdown: '1인 개발',
      myRole: '설계, 구현, 테스트, npm 배포 전체',
    },
    contribution: '1인 설계~배포 100%',
    description:
      'AI 에이전트를 오케스트레이션하는 개발자 워크플로우 CLI 도구. AI를 사용하는 것을 넘어, AI 도구를 직접 설계하고 npm에 배포했습니다.',
    tech: ['TypeScript', 'Node.js', 'Zod', 'MCP', 'Claude API', 'npm'],
    highlights: [
      'Agent<TInput, TOutput> 제네릭 + Discriminated Union으로 타입 안전한 에이전트 시스템 설계',
      'DAG 위상정렬(Kahn) + 순환감지(DFS)로 태스크 의존성 해결',
      '멀티모델 라우팅 — 태스크 복잡도별 AI 모델 분리 배정 (비용 최적화)',
    ],
    techChoices: [
      {
        tech: 'TypeScript',
        reason:
          'AI 에이전트의 입출력 타입이 복잡하고 다양함. 제네릭과 Discriminated Union으로 컴파일 타임에 타입 오류를 잡아 런타임 버그를 예방.',
      },
      {
        tech: 'Zod',
        reason:
          'LLM 응답은 예측 불가. Zod 스키마로 런타임에 응답 구조를 검증하고, 검증 실패 시 재시도 로직으로 안정성 확보.',
      },
      {
        tech: 'MCP 프로토콜',
        reason:
          'Claude Code와 같은 AI 도구에서 JunFlow를 직접 호출할 수 있도록 MCP 서버를 직접 구현. 표준 프로토콜로 도구 간 상호운용성 확보.',
      },
    ],
    features: [
      {
        title: 'DAG 위상정렬 기반 태스크 실행',
        description:
          'Kahn 알고리즘으로 태스크 의존성을 해결하고 병렬 실행 가능한 태스크를 자동 식별. DFS 기반 순환 감지로 무한루프 방지.',
      },
      {
        title: '멀티모델 라우팅',
        description:
          '태스크 복잡도에 따라 Claude Opus/Sonnet/Haiku를 자동 배정. 간단한 작업에 비싼 모델을 쓰지 않도록 비용 최적화.',
      },
      {
        title: 'Strategy + Factory + Template Method 패턴',
        description:
          '3개 AI 프로바이더와 3개 트래커를 플러그인 방식으로 확장. 새 AI 모델이나 트래커 추가 시 기존 코드 수정 없이 구현체만 추가.',
      },
    ],
    performance: [
      { label: 'npm 배포', value: '공개 배포', note: 'npmjs.com/package/junflow' },
      { label: '디자인 패턴', value: '3개 적용', note: 'Strategy, Factory, Template Method' },
    ],
    retrospective: {
      lessons: [
        '디자인 패턴을 "교과서 예제"가 아닌 실제 문제에 적용해보니 확장성의 가치를 체감',
        'npm 배포 과정에서 패키지 번들링, 진입점 설정, 버전 관리 등 오픈소스 생태계의 실무를 학습',
        'MCP 프로토콜 직접 구현으로 "AI 도구를 사용하는 개발자"에서 "AI 도구를 만드는 개발자"로 시야 확장',
      ],
      regrets: [
        '테스트 커버리지를 더 높였으면 리팩토링 시 안심할 수 있었을 것',
      ],
      improvements: [
        'E2E 테스트 추가로 전체 파이프라인 검증 자동화',
        'GitHub Actions CI에서 npm publish 자동화',
      ],
    },
    github: 'https://github.com/pbjuni1007-cmyk/junflow',
    npm: 'https://www.npmjs.com/package/junflow',
  },
  {
    id: 'aisports',
    title: 'AI Sports Camera',
    period: '2026.03',
    team: {
      total: 1,
      breakdown: '1인 개발',
      myRole: '기획, 설계, 구현, 테스트, CI/CD 전체',
    },
    contribution: '1인 전체 100%',
    description:
      '스포츠 영상에서 AI가 자동으로 베스트 프레임을 추출하는 Android 앱. ML 모델 통합부터 프로덕션 수준의 테스트 및 CI/CD까지 전체 라이프사이클을 수행했습니다.',
    tech: ['Kotlin', 'Jetpack Compose', 'CameraX', 'TensorFlow Lite', 'MediaPipe', 'Hilt', 'Room', 'Material3'],
    highlights: [
      'TFLite NIMA + MediaPipe Pose로 품질-동작-선명도 3축 종합 평가 파이프라인 구축',
      'Strategy Pattern 기반 종목별 액션 감지 — OCP(개방-폐쇄 원칙) 실제 적용',
      '130개 유닛 테스트 + GitHub Actions CI/CD + R8 최적화로 프로덕션 수준 품질',
    ],
    techChoices: [
      {
        tech: 'Kotlin + Jetpack Compose',
        reason:
          'Android 네이티브의 카메라/GPU 접근이 필수적인 프로젝트. Compose의 선언형 UI로 복잡한 분석 결과 화면을 효율적으로 구현.',
        alternatives: 'Flutter 대비 CameraX/TFLite 네이티브 통합 용이',
      },
      {
        tech: 'TensorFlow Lite',
        reason:
          'NIMA 모델을 온디바이스에서 실행하여 네트워크 없이도 프레임 품질 평가 가능. 실시간 분석에 필요한 저지연 추론.',
      },
      {
        tech: 'Hilt (Dependency Injection)',
        reason:
          '7개 ViewModel + 분석 파이프라인 컴포넌트 간 의존성을 깔끔하게 관리. 테스트 시 Mock 주입이 용이.',
      },
    ],
    features: [
      {
        title: '3축 프레임 평가 파이프라인',
        description:
          'NIMA(미적 품질) + MediaPipe Pose(동작 의미) + Laplacian(선명도) 세 점수를 가중 합산. NIMA 미탑재 시 밝기/대비/채도/엣지밀도/색조화 5요소 Fallback 스코어러 자동 전환.',
        diagram: '/diagrams/aisports-pipeline.svg',
      },
      {
        title: '종목별 동작 인식 (Strategy Pattern)',
        description:
          '축구에서는 발-공 관계(슈팅), 머리 높이(헤딩), 다리 교차(태클)를 포즈 랜드마크 기하학으로 판별. 새 종목 추가 시 ActionDetector 수정 없이 Strategy만 추가.',
      },
      {
        title: 'NMS 베스트 프레임 선택',
        description:
          'Non-Maximum Suppression으로 시간적으로 가까운 유사 프레임을 억제하고, 다양한 시점의 베스트샷을 추출.',
      },
    ],
    performance: [
      { label: '테스트', value: '130개', note: '유닛 테스트 + GitHub Actions CI' },
      { label: 'Graceful Degradation', value: '5요소 Fallback', note: 'NIMA 미탑재 시 자동 전환' },
    ],
    retrospective: {
      lessons: [
        '130개 테스트 작성이 "비용"이 아니라 "투자"였음 — 리팩토링 시 회귀 버그 0건',
        'Graceful degradation 설계로 "최악의 경우에도 동작하는" 시스템의 가치를 체감',
        'Strategy Pattern으로 종목 확장 시 기존 코드 변경 0줄 — OCP의 실용적 효과 입증',
      ],
      regrets: [
        '실기기 테스트를 더 일찍 했으면 에뮬레이터에서 발견 못하는 카메라 이슈를 조기에 잡았을 것',
      ],
      improvements: [
        '통합 테스트 추가로 카메라 → 분석 → 저장 전체 플로우 검증',
        'Benchmark 테스트로 프레임 분석 성능 정량적 측정',
      ],
    },
    github: 'https://github.com/pbjuni1007-cmyk/ai-sports-camera',
  },
  {
    id: 'seoulmate',
    title: 'SeoulMate',
    period: '2025.11 - 2026.03',
    team: {
      total: 2,
      breakdown: 'BE 1 / FE 1',
      myRole: '백엔드 전담, API 설계 및 DB 설계',
    },
    contribution: '백엔드 100%',
    description:
      '서울 관광 도우미 서비스. 첫 프로젝트에서 시작해 v3까지 기술 스택을 3번 전환하며 성장한 프로젝트입니다.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Vue.js', 'Python', 'FastAPI', 'PostgreSQL'],
    highlights: [
      'v1→v2→v3 기술 스택 3회 전환 — MyBatis→JPA→SQLAlchemy, MySQL→PostgreSQL',
      '첫 협업에서 Git 브랜치 전략을 수립하고 팀 컨벤션 정립',
      'v2에서 JWT + OAuth2 인증 체계 직접 구현, v3에서 Python async 전환',
    ],
    techChoices: [
      {
        tech: 'MyBatis → JPA 전환 (v2)',
        reason:
          'v1에서 SQL을 직접 작성하며 반복 코드가 많았음. JPA로 전환하여 객체-관계 매핑을 자동화하고 생산성 향상.',
      },
      {
        tech: 'FastAPI + SQLAlchemy 2.0 (v3)',
        reason:
          'Python 생태계의 AI/ML 라이브러리 활용과 async 지원을 위해 전환. SQLAlchemy 2.0의 async 세션으로 비동기 DB 접근.',
      },
      {
        tech: 'MySQL → PostgreSQL (v3)',
        reason:
          '향후 RAG 기능을 위한 pgvector 확장, JSONB 지원 등 PostgreSQL의 확장성이 더 적합.',
      },
    ],
    features: [
      {
        title: 'RESTful API 설계',
        description:
          '관광지 검색, 즐겨찾기, 리뷰 등 핵심 API를 설계하고 Swagger로 문서화. 프론트엔드와의 협업 효율 향상.',
        diagram: '/diagrams/seoulmate-api.svg',
      },
      {
        title: '공공데이터 API 연동',
        description:
          '한국관광공사 Tour API에서 서울 관광지 데이터를 수집 및 가공. 스케줄러로 주기적 동기화.',
      },
      {
        title: 'JWT + OAuth2 인증 체계 (v2)',
        description:
          'v2에서 Spring Security + JWT 기반 인증/인가를 직접 구현. OAuth2 소셜 로그인(Google, Kakao) 통합.',
      },
    ],
    performance: [
      { label: '기술 전환', value: '3회', note: 'v1→v2→v3 스택 진화' },
      { label: 'API 문서화', value: 'Swagger', note: '프론트엔드 협업 효율화' },
    ],
    retrospective: {
      lessons: [
        '같은 서비스를 다른 기술로 3번 구현하면서, 각 기술의 장단점을 몸으로 체감',
        'MyBatis→JPA 전환에서 "ORM이 왜 필요한가"를 이해하게 됨 — 반복 SQL 제거의 효과',
        '첫 협업에서 Git 브랜치 전략과 코드 리뷰 문화를 처음 경험 — 이후 프로젝트에서 이 경험이 기반이 됨',
      ],
      regrets: [
        'v1에서 테스트 코드를 작성하지 않았던 것 — v2 전환 시 수동 검증에 시간 소요',
        'v3 전환 시 Python async 패턴을 충분히 학습하지 않고 시작해서 초기 시행착오 발생',
      ],
      improvements: [
        '기술 전환 시 PoC(Proof of Concept)를 먼저 만들어 검증 후 전면 적용',
        '각 버전별 마이그레이션 가이드를 문서화',
      ],
    },
    evolution: [
      {
        version: 'v1',
        subtitle: '첫 협업 — 기본기 다지기',
        tech: ['Spring Boot', 'MyBatis', 'MySQL', 'Vue.js'],
        changes: [
          'RESTful API 설계 및 구현',
          '공공데이터 API 연동 (한국관광공사)',
          'Git 브랜치 전략 수립 (feature/develop/main)',
        ],
        growthPoint: 'SQL 직접 작성과 API 설계의 기본기를 습득. 첫 팀 협업에서 Git 워크플로우를 체계적으로 학습.',
      },
      {
        version: 'v2',
        subtitle: 'ORM 전환 + 인증 체계',
        tech: ['Spring Boot', 'Gradle', 'JPA', 'MapStruct', 'JWT', 'OAuth2'],
        changes: [
          'MyBatis → JPA 전환으로 ORM 생산성 향상',
          'JWT + OAuth2 인증/인가 직접 구현',
          'MapStruct로 DTO-Entity 변환 자동화',
          'RAG 기반 관광지 추천 프로토타입',
        ],
        growthPoint: 'ORM의 필요성을 체감하고, 인증/보안이라는 새로운 영역에 도전. "왜 이 기술을 쓰는가"를 질문하기 시작.',
      },
      {
        version: 'v3',
        subtitle: '언어 전환 + 비동기',
        tech: ['Python', 'FastAPI', 'SQLAlchemy 2.0', 'PostgreSQL', 'asyncpg'],
        changes: [
          'Java → Python 전환 (AI/ML 생태계 활용)',
          'SQLAlchemy 2.0 async 세션으로 비동기 DB 접근',
          'MySQL → PostgreSQL 전환 (pgvector, JSONB 확장성)',
          '종합 코드 개선: 보안 7건, 품질 7건, UX 9건',
        ],
        growthPoint: '하나의 언어에 갇히지 않고, 목적에 맞는 기술을 선택하는 시야를 얻음. async 패턴 학습.',
      },
    ],
    github: '#',
  },
];
