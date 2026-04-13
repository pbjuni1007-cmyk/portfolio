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
    period: '2026.02 - 2026.04',
    team: {
      total: 6,
      breakdown: 'BE 3 / FE 2 / AI 1',
      myRole: '팀장, Frontend Lead, CI/CD 구축',
    },
    contribution: '팀장, Frontend Lead — FE 전체 UX 설계·구현, CI/CD 파이프라인 구축',
    description:
      'AI 기반 영세 요식업 경영 솔루션. FE Lead로서 API를 직접 소비하며 "좋은 백엔드란 무엇인가"를 소비자 관점에서 체득했고, 팀장으로서 기술 의사결정과 팀 운영을 주도했습니다.',
    tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS 4', 'Zustand', 'Docker', 'Jenkins', 'Playwright'],
    highlights: [
      'API를 소비하는 FE 입장에서 — 응답 구조, 에러 형식, 로딩 상태 등 "프론트가 진짜 필요한 백엔드"를 체득',
      'FE-BE API 연동 디버깅 — 빌드타임 환경변수 주입(API_MODE), Jenkinsfile 경로 중복 등 실배포 이슈 해결',
      'CCTV 법적 리스크 사전 발견 → 영상 파일 업로드로 피봇, MVP 3대 기능으로 기한 내 완성',
    ],
    techChoices: [
      {
        tech: 'Next.js + TypeScript (FE Lead)',
        reason:
          'FE를 직접 맡아 API를 소비하는 입장에서 개발. "이 응답 구조가 왜 불편한지", "에러 핸들링이 왜 FE에서 중요한지"를 몸으로 체득하며, 향후 백엔드 개발 시 프론트 친화적 API를 설계할 수 있는 시야를 얻음.',
        alternatives: '백엔드 개발자의 FE 경험 → 양쪽을 이해하는 API 설계 역량 확보',
      },
      {
        tech: 'Jenkins + Docker CI/CD',
        reason:
          'Jenkinsfile로 빌드-테스트-배포 전 과정을 코드화. 빌드타임 환경변수(ARG/ENV) 주입, Docker 이미지 태깅, 브랜치별 배포 분기를 직접 설계.',
        alternatives: '실배포 디버깅 경험: API_MODE=real 누락, API_URL 경로 중복 해결',
      },
      {
        tech: 'Zustand + API 계층 분리',
        reason:
          'Mock/Real 모드 전환이 가능한 API 계층을 설계. 백엔드 개발 진행 중에도 FE가 독립적으로 동작하도록 mock 데이터로 개발하고, 통합 시 모드만 전환.',
      },
    ],
    features: [
      {
        title: 'CI/CD 파이프라인 — Jenkinsfile 코드화',
        description:
          'PR 머지 → Docker 빌드 → 배포 자동화. 빌드타임 환경변수(NEXT_PUBLIC_API_MODE=real) 주입 이슈를 해결하며, Dockerfile ARG/ENV와 Jenkinsfile build-arg의 관계를 실전에서 학습.',
        diagram: '/diagrams/golmok-cicd.svg',
      },
      {
        title: '사장님 중심 대시보드 UX',
        description:
          '브리핑 탭의 "오늘 할 일"을 동적 데이터로 전환 — 상위 3종 식재료, 과부하 시간대, 어제 매출 등 사장님이 즉시 행동할 수 있는 정보를 표시. 인력 탭은 피크 시간대별 부족 인원을 시각화하고, 요일 클릭 시 상세 바 차트를 제공.',
      },
      {
        title: '5계층 풀스택 디버깅 — 단일 403 에러의 근본 원인 추적',
        description:
          'Dev 환경에서 JWT 인증 실패(403) 하나의 증상 뒤에 5개 계층의 원인이 숨어 있었음. Nginx 308 리다이렉트 루프 → Next.js basePath 쿠키 충돌 → Spring Security 설정 → JWT validation 비활성화 → bcrypt 해시 불일치. curl로 레이어별 격리 테스트를 수행하며, 코드만 봐서는 찾을 수 없는 인프라 레이어 문제를 해결.',
      },
      {
        title: 'MVP 피봇 — 5개 에이전트 병렬 딥 리뷰로 법적 리스크 사전 발견',
        description:
          '구현 시작 전, Architect x2 + Analyst x2 + Document Specialist x1 = 5개 에이전트를 병렬로 돌려 교차 검증. "내부 리뷰는 같은 프레임으로 같은 맹점을 만든다"는 직감에서 출발. CRITICAL 3건을 동시 발견: ①CCTV "목적 외 이용"이 개인정보보호법 제18조에 저촉 가능, ②월 구독료(1~3만원) vs 클라우드 GPU 비용(~70만원) 구조적 적자, ③경쟁사 메이아이(매쉬) 누락. 피봇 결정 — CCTV 의존성 제거, 자체 카메라 + mp4 업로드 구조로 전환 + 엣지 디바이스(Jetson Orin Nano $249) 로드맵 + MVP 3대 기능 재정의(원가분석, 수요예측, 인력가이드). 구현 후 발견이었다면 2~3주 손실.',
      },
    ],
    performance: [
      { label: 'CI/CD', value: '자동화 구축', note: 'Jenkinsfile + Docker 코드화' },
      { label: 'E2E 테스트', value: '17 시나리오', note: 'Playwright 배포 검증' },
      { label: 'UX 리디자인', value: '4개 탭 전체', note: '인력/매출/메뉴/브리핑' },
    ],
    retrospective: {
      lessons: [
        '"팀장의 가치는 모든 걸 아는 게 아니라 모르는 걸 발견할 체계를 만드는 것" — 5개 에이전트 병렬 교차검증으로 CRITICAL 3건을 구현 전에 잡아냄. 내부 리뷰 혼자였으면 같은 맹점을 계속 봤을 것',
        '법적 리스크는 엔지니어도 공부해야 한다 — 개인정보보호법 제18조 "목적 외 이용" 조항을 알고 있어야 CCTV 프로젝트의 근본 리스크를 알아챌 수 있음. "변호사한테 물어보면 되지"는 변명',
        'FE를 직접 해보고 깨달은 BE 설계 원칙 — API 계약을 코드(Swagger)로 관리할 것, Security 에러 코드를 세분화할 것(COMMON_001 하나로 퉁치면 FE 디버깅 불가), 로그인 응답에 다음 화면 판단 정보를 포함할 것',
        '단일 403 에러 뒤에 5개 계층(Nginx → Next.js → Spring Security → JWT → bcrypt)의 원인이 있었음 — 코드만 봐서는 원인을 찾을 수 없고, curl로 레이어별 격리 테스트가 필수라는 것을 체득',
        '팀원 간 갈등을 1:1 면담 + 역할 재분배로 해결 — 이후 팀 속도 향상 체감',
        'MVP 전략이 6인 팀에서 효과적 — 핵심 3기능에 집중하여 기한 내 완성',
      ],
      regrets: [
        '초기 기획 단계에서 데이터 진입 설계(레시피/POS/식자재)를 충분히 하지 못해 중간 피드백에서 지적받음',
        'FE-BE API 명세 합의를 YEJI처럼 Contract-First로 했으면 통합 단계에서의 재작업이 줄었을 것',
      ],
      improvements: [
        '기획 초기에 "데이터를 어떻게 확보할 것인가"를 최우선으로 설계',
        'FE-BE 통합 전 API 명세서 합의 프로세스 도입 — YEJI에서의 학습을 적용',
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
    contribution: 'Backend Lead — 아키텍처 설계 주도, API 설계',
    description:
      '동서양 통합 운세 플랫폼. 커스텀 파인튜닝 LLM(Qwen3 4B)이 사주·타로를 AI로 해석하고, 물리 엔진 기반 인터랙티브 카드 경험을 제공합니다.',
    tech: ['Java 21', 'Spring Boot 3.4', 'Spring Security', 'JPA', 'PostgreSQL', 'Redis', 'Docker', 'Jenkins'],
    highlights: [
      'WebClient + Flux<SSE>로 vLLM 토큰 스트림을 BE→FE 실시간 릴레이 (doOnCancel로 GPU 좀비 요청 차단)',
      'OAuth2 3-provider(Kakao/Google/Naver)를 OAuth2UserInfo 인터페이스 + Factory로 추상화 — 4번째 provider 추가 시 enum 1줄 + 구현체 1개로 끝',
      'JWT Access(stateless) + Refresh(Redis 저장) 분리 — 로그아웃 즉시 반영 + Refresh 회전으로 탈취 방어',
      '12개 도메인 경계 설계 + shop↔wallet↔collection 트랜잭션 일관성 — 외부 호출(AI Server)은 트랜잭션 밖으로',
      '프론트-백 API 명세서 기반 합의 프로세스(Contract-First) 도입으로 5인 팀 병렬 개발',
    ],
    techChoices: [
      {
        tech: 'Spring Boot 3.4 + JPA',
        reason:
          '사주/타로/궁합 등 복잡한 도메인 모델을 객체 지향적으로 설계. Spring Security로 인증/인가를 통합 관리.',
      },
      {
        tech: 'WebClient + Flux<ServerSentEvent> (vs RestTemplate)',
        reason:
          'vLLM이 토큰 단위로 스트리밍 응답을 뱉는데 RestTemplate은 동기 블로킹이라 전체 응답을 모아야 함. WebClient의 reactive 체인으로 Flux를 받아 Controller에서 그대로 반환 → 토큰 단위로 FE에 흘려보냄. doOnCancel로 FE 이탈 시 AI Server 호출도 자동 취소되어 GPU 좀비 요청 차단.',
        alternatives: 'SseEmitter(블로킹 스레드 점유) 회피 + @Transactional 밖에서 외부 호출로 DB 커넥션 누수 방지',
      },
      {
        tech: 'OAuth2 3-provider 추상화 (Kakao/Google/Naver)',
        reason:
          'provider별 응답 스키마가 전부 달라 if 분기로 시작했더니 3번째 provider에서 클래스가 터짐. OAuth2UserInfo 인터페이스 + OAuth2UserInfoFactory로 재설계 → 4번째 provider(Apple 등) 추가 시 enum 1줄 + 구현체 1개만 추가, CustomOAuth2UserService는 수정 0.',
        alternatives: '"확장성"을 말이 아니라 diff로 증명 가능한 구조',
      },
      {
        tech: 'JWT Access/Refresh 분리 + Refresh Redis 회전',
        reason:
          'Stateless JWT는 로그아웃 즉시 반영이 어려움. Refresh를 Redis에 refresh:{userId}로 저장하고, 로그아웃은 DEL 1줄로 즉시 무효화. Refresh 회전 시 같은 키를 덮어써서 이전 Refresh 자동 무효. Access TTL은 짧게(1h) 잡아 탈취 피해 범위 제한.',
        alternatives: 'DB 저장 대비 Redis는 수 ms 응답 + TTL 내장 + 즉시 삭제 단순',
      },
      {
        tech: '12개 도메인 경계 + 트랜잭션 일관성',
        reason:
          'BE 2인이 6주에 12개 도메인을 쳐야 해서 첫 주에 패키지 컨벤션을 못 박음 — domain/{name}/{controller,service,repo,entity,dto} + global/external에서만 외부 API 호출. shop→wallet→collection 같은 교차 호출은 동일 @Transactional 범위. AI Server 호출은 트랜잭션 밖(결과 저장만 안쪽)으로 빼서 DB 커넥션 점유 시간 최소화.',
        alternatives: '트랜잭션 버그 0건 + 머지 충돌 최소화 (같은 파일 동시 수정 방지)',
      },
      {
        tech: 'PostgreSQL + Redis',
        reason:
          '운세 데이터의 관계형 모델링에 PostgreSQL, 세션/캐시/Refresh Token에 Redis를 분리하여 응답 속도 최적화.',
        alternatives: 'MySQL 대비 확장성과 JSONB 지원 우위',
      },
    ],
    features: [
      {
        title: 'vLLM 토큰 스트림 실시간 릴레이 (WebClient + Flux SSE)',
        description:
          'AI Server(vLLM)가 토큰을 스트리밍으로 뱉어내는 것을 BE에서 그대로 받아 FE에 흘려보냄. WebClient로 Flux<ServerSentEvent>를 받아 Controller에서 직접 반환 → 토큰 단위로 downstream 전파. doOnCancel 훅으로 FE 이탈 시 AI Server 호출도 동시 취소 → GPU 좀비 요청 차단. 에러는 `event: error` SSE 이벤트로 명시 통지.',
        diagram: '/diagrams/yeji-architecture.svg',
      },
      {
        title: 'OAuth2 3-provider 추상화 + JWT Refresh Redis 회전',
        description:
          'Kakao/Google/Naver 응답 스키마가 전부 달라 OAuth2UserInfo 인터페이스 + Factory 패턴으로 재설계. 4번째 provider 추가 시 enum 1줄 + 구현체 1개로 확장 가능. JWT는 Access(stateless, 1h) + Refresh(Redis 저장) 분리 → 로그아웃은 Redis DEL 1줄로 즉시 반영, Refresh 회전으로 탈취 방어.',
      },
      {
        title: '12개 도메인 경계 설계 + 트랜잭션 일관성',
        description:
          'BE 2인이 6주에 12개 도메인(user/saju/unse/card/collection/compatibility/friend/event/luck/session/shop/wallet)을 쳐야 해서 첫 주에 패키지 컨벤션을 못 박음. shop→wallet→collection 같은 교차 호출은 동일 @Transactional 범위로 묶어 트랜잭션 버그 0건. 외부 호출(AI Server)은 트랜잭션 밖으로 빼서 DB 커넥션 점유 시간 최소화.',
      },
      {
        title: 'JSONB 기반 유연한 데이터 모델',
        description:
          '사주·타로·궁합·관상 등 분석 유형마다 입력/결과 구조가 다른 문제를 JSONB 컬럼으로 해결. 스키마 변경 없이 새로운 운세 유형을 추가할 수 있는 유연한 설계.',
        diagram: '/diagrams/yeji-erd.png',
      },
      {
        title: 'Contract-First API 협업',
        description:
          'API 명세서를 먼저 합의한 뒤 프론트/백이 병렬 개발. 인터페이스 불일치로 인한 재작업을 제거하고 5인 팀 개발 속도 향상.',
      },
      {
        title: '8라운드 257건 체계적 코드 리뷰 + 공개 아카이브',
        description:
          '아키텍처/보안/품질/성능/타입안전성/버그를 R1~R8 8라운드로 분리 수행. BE 103건 + AI Server 130건 + Frontend 24건 = 257건의 이슈를 ID 체계(BE-R2-SEC-001 형식)로 추적. 결과는 별도 yeji-code-review 리포지토리에 통합본 + 개별본 + 방법론 3층 구조로 공개 아카이브 → 면접에서 URL로 즉시 증명 가능.',
      },
    ],
    performance: [
      { label: 'API 설계', value: 'Contract-First', note: '프론트-백 병렬 개발' },
      { label: '코드 리뷰', value: '8라운드 257건', note: 'CRITICAL 33, HIGH 103' },
      { label: '도메인', value: '12개', note: 'BE 2인이 6주에 완주' },
    ],
    retrospective: {
      lessons: [
        'Contract-First 방식이 5인 팀에서 병렬 개발 효율을 크게 높임 — 명세 합의에 1일 투자해서 재작업 절약',
        'WebClient + Flux SSE로 "비동기 + 스트리밍 + 자원정리" 3박자를 처음부터 reactive 체인으로 설계 — RestTemplate 마인드로는 스트리밍 자원 누수 필연',
        '외부 호출은 트랜잭션 밖이 원칙 — @Transactional 안에서 WebClient 호출하면 HTTP 대기 동안 DB 커넥션 점유 → 동시 요청 증가 시 커넥션 풀 고갈',
        '"확장성"은 말이 아니라 diff로 증명 — OAuth2 3-provider 추상화는 4번째 provider 추가를 시뮬레이션해서 enum 1줄 + 구현체 1개 diff로 보여줄 수 있어야 진짜',
        '도메인 경계는 "용어부터"가 아니라 "사용자 시나리오 → 트랜잭션 경계 → 도메인 분해" 순서로 잡아야 일관적',
        '8라운드 257건 체계적 코드 리뷰 + 공개 아카이브 — "코드 품질 어떻게 챙기셨나요?" 질문에 URL로 답할 수 있는 구조',
      ],
      regrets: [
        'Redis 캐싱 전략을 초기 설계 시점에 더 체계적으로 수립했으면 좋았을 것 (사주는 생년월일시 결정론적이라 공격적 캐싱 가능)',
        'WebClient retry/Circuit Breaker 정책을 처음부터 넣었으면 AI Server 장애 시 graceful degradation 가능',
      ],
      improvements: [
        'Circuit Breaker 패턴으로 AI 서버 장애 시 graceful degradation 구현',
        '사주 결과 Redis 캐싱 — 키 `saju:{년월일시:성별}`, TTL 30일로 AI Server 호출 비용 절감',
      ],
    },
    github: 'https://github.com/yeji-service',
  },
  {
    id: 'junflow',
    title: 'JunFlow',
    period: '2026.03 - 진행중',
    team: {
      total: 1,
      breakdown: '1인 개발',
      myRole: '설계, 구현, 테스트, npm 배포 전체',
    },
    contribution: '1인 설계~배포 100%',
    description:
      'AI 에이전트를 오케스트레이션하는 개발자 워크플로우 CLI 도구. v0.5.0에서 "AI가 AI를 호출하는" 이중 호출 문제를 근본 해결하기 위해 MCP 프로토콜 기반으로 전면 리팩터링했고, v0.6.0에서 멀티 CLI(Claude+Codex+Gemini) 오케스트레이션을 추가했습니다.',
    tech: ['TypeScript', 'Node.js', 'MCP', 'Zod', 'simple-git', 'npm'],
    highlights: [
      'v0.5.0 아키텍처 대수술 — AI API 직접 호출(이중 호출 문제) 제거, MCP 프로토콜 기반으로 전환. AI SDK 의존성 3개 완전 삭제',
      '12개 MCP 도구 직접 구현 — context 수집(5) + action 실행(4) + CLI 오케스트레이션(3)',
      'v0.6.0 멀티 CLI 오케스트레이션 — Claude=오케스트레이터, Codex=구현, Gemini=서치/디자인 역할 분배',
      '8개 SKILL.md 시스템 — Claude Code 내부에서 도메인 지식을 주입하여 직접 실행, API 키 불필요',
      'npm 공개 배포(v0.5.0) + 314 tests / 27 test files',
    ],
    techChoices: [
      {
        tech: 'MCP 프로토콜 (vs AI API 직접 호출)',
        reason:
          'v0.4까지 JunFlow가 Claude/OpenAI/Gemini API를 직접 호출했는데, Claude Code 안에서 실행하면 "AI가 AI를 호출하는" 이중 호출 문제 발생. MCP 표준으로 역할을 분리 — AI 추론은 Claude Code, context 수집과 action 실행은 JunFlow. @anthropic-ai/sdk, openai, @google/generative-ai 의존성 3개를 완전 제거.',
        alternatives: '"더 좋은 코드를 쓰는 것보다 불필요한 코드를 지우는 것이 더 어렵다" — 코드 절반 이상 삭제',
      },
      {
        tech: 'TypeScript + Zod 스키마 검증',
        reason:
          'MCP 도구 입력을 Zod 스키마로 정의하여 타입 안전성 + 런타임 검증을 동시에 달성. YAML 설정 파일도 Zod 스키마로 검증하여 잘못된 설정을 즉시 감지.',
      },
      {
        tech: 'CLI 오케스트레이션 (child_process.spawn)',
        reason:
          'Codex/Gemini CLI를 headless로 스폰하여 역할별 분배. junflow_run_consensus로 병렬 실행 후 결과를 묶어 반환. outputMaxBytes(50KB), defaultTimeout(300s) 제한으로 자원 관리.',
      },
      {
        tech: 'SKILL.md 시스템',
        reason:
          '커밋 컨벤션, 리뷰 관점, 이슈 분석 등 도메인 지식을 마크다운 파일로 내장. Claude Code가 triggers 필드로 자연어 매칭하여 자동 활성화. 별도 API 키 없이 Claude Code 내부에서 직접 실행.',
      },
    ],
    features: [
      {
        title: 'MCP 서버 — 12개 도구 직접 구현',
        description:
          'Context 수집 5개(staged diff, branch diff, issue 조회, git 상태, 컨벤션) + Action 실행 4개(branch 생성, commit, status, session 기록) + CLI 오케스트레이션 3개(Codex/Gemini 실행, consensus, 잡 상태 조회). Claude Code가 MCP 프로토콜로 호출하여 AI 추론과 도구 실행을 깔끔하게 분리.',
      },
      {
        title: 'v0.5.0 아키텍처 대수술 — "이중 호출" 근본 해결',
        description:
          '제거: src/ai/(AI 프로바이더 3개), src/agents/(12개 에이전트), src/orchestrator/, src/teams/, src/modes/ + AI SDK 의존성 3개. 유지: git 조작, 이슈 트래커(Notion/GitHub/Jira/Mock), 세션 관리, DAG, 훅, 설정 — AI 의존성 없는 순수 도구 레이어만 남김.',
      },
      {
        title: '멀티 CLI 오케스트레이션 (v0.6.0)',
        description:
          'junflow_run_cli로 Codex/Gemini를 동기/비동기 headless 실행. junflow_run_consensus로 두 CLI를 병렬 실행하여 결과를 합산. 역할→CLI→프로파일 매핑을 설정 파일로 관리. Claude=오케스트레이터, Codex=구현, Gemini=서치/디자인.',
      },
      {
        title: '8개 SKILL.md — 도메인 지식 내장 스킬',
        description:
          'commit, review, start, status, autopilot, deep-review, deep-commit, plan 8개 스킬. 각 스킬이 MCP 도구를 호출하여 context를 수집하고, Claude Code의 AI 추론으로 결과를 생성. "jf c" 같은 축약 트리거로 빠르게 활성화.',
      },
    ],
    performance: [
      { label: 'npm 배포', value: 'v0.5.0', note: 'npmjs.com/package/junflow' },
      { label: 'MCP 도구', value: '12개', note: 'context 5 + action 4 + CLI 3' },
      { label: '테스트', value: '314 tests', note: '27 test files' },
    ],
    retrospective: {
      lessons: [
        '"AI를 사용하는 도구"에서 "AI와 협업하는 도구"로 패러다임 전환 — MCP로 역할 분리하니 이중 호출 문제가 근본적으로 해소',
        'v0.5.0에서 코드의 절반 이상을 삭제 — "더 좋은 코드를 쓰는 것보다 불필요한 코드를 지우는 것이 더 어렵다"를 체감. 삭제: AI 프로바이더 3개, 에이전트 12개, 오케스트레이터, 팀, 실행 모드',
        'npm 배포 + MCP 프로토콜 구현으로 "AI 도구를 사용하는 개발자"에서 "AI 도구를 설계하는 개발자"로 시야 확장',
        '멀티 CLI 오케스트레이션(v0.6.0)으로 각 AI의 강점을 역할별로 분배하는 실전 경험 — Claude=추론, Codex=구현, Gemini=검색/디자인',
      ],
      regrets: [
        'v0.4까지 AI API 직접 호출 구조의 문제를 더 일찍 의심했으면 이중 호출 문제를 빨리 해결했을 것',
      ],
      improvements: [
        'E2E 테스트 추가로 MCP 도구 → CLI 오케스트레이션 전체 파이프라인 검증',
        'GitHub Actions CI에서 npm publish 자동화',
      ],
    },
    github: 'https://github.com/pbjuni1007-cmyk/junflow',
    npm: 'https://www.npmjs.com/package/junflow',
  },
  {
    id: 'allaplus',
    title: '올A+',
    period: '2026.03 - 진행중',
    team: {
      total: 1,
      breakdown: '1인 개발',
      myRole: '기획, 풀스택 설계·구현, 배포 전체',
    },
    contribution: '1인 풀스택 100%',
    description:
      '대학생 비전공자를 위한 AI 학습 비서 웹앱. RAG 파이프라인, 지속 메모리, 교수 성향 분석, 퀴즈/플래시카드 등 9단계 기능을 설계부터 배포까지 혼자 완성했습니다.',
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Supabase', 'pgvector', 'Gemini API', 'Vercel'],
    highlights: [
      'pgvector 기반 RAG 파이프라인 — 문서 업로드 → 청킹 → 임베딩 → 벡터 검색 → 출처 표시',
      'SM-2 간격반복 알고리즘 플래시카드 + AI 퀴즈 자동 생성으로 능동적 학습 지원',
      'Rate Limiting, 토큰 추적, CSRF 방어, RLS 감사 등 프로덕션 수준 보안 구현',
    ],
    techChoices: [
      {
        tech: 'Supabase + pgvector',
        reason:
          'Auth, PostgreSQL, Storage를 하나의 플랫폼으로 통합. pgvector 확장으로 임베딩 벡터 검색을 SQL로 처리하여 별도 벡터 DB 없이 RAG 파이프라인 구축.',
        alternatives: 'Pinecone/Weaviate 대비 인프라 단순화 + RLS로 멀티테넌트 보안',
      },
      {
        tech: 'Gemini API + SDK',
        reason:
          'Gemini SDK(@google/generative-ai)로 AI 프로바이더를 추상화. 모델 교체 시 프로바이더 구현체만 변경하면 되는 Factory 패턴 적용.',
      },
      {
        tech: 'Next.js 16 + React 19',
        reason:
          'Server Components로 초기 로딩 최적화, Route Handlers로 API 엔드포인트 구현. 프론트와 백엔드를 하나의 프로젝트에서 관리하여 1인 개발 효율 극대화.',
      },
    ],
    features: [
      {
        title: 'RAG 파이프라인 — 문서 기반 AI 답변',
        description:
          'PDF/DOCX/TXT 파일과 YouTube 자막을 파싱 → 청킹 → OpenAI 임베딩(1536d) → pgvector 저장. 질문 시 코사인 유사도로 관련 청크를 검색하고, 출처를 표시하며 AI가 답변.',
      },
      {
        title: '학습 메모리 시스템',
        description:
          '대화에서 학습 기록을 자동 추출하고 임베딩 유사도로 중복 감지. 취약 영역을 식별하여 맞춤 학습을 지원하고, 과목별 AI 답변에 누적 맥락을 자동 주입.',
      },
      {
        title: 'AI 퀴즈 + SM-2 플래시카드',
        description:
          '학습 자료 기반 객관식/단답형 퀴즈 자동 생성 + 채점 + 해설. SM-2 간격반복 알고리즘으로 망각 곡선에 맞춘 플래시카드 복습 스케줄링.',
      },
      {
        title: '교수 성향 분석',
        description:
          'KCI(공공데이터포털) + Semantic Scholar에서 교수 논문을 검색하고, AI가 연구 분야와 강의 성향을 분석. 과목별 AI 답변에 교수 맥락을 자동 주입.',
      },
    ],
    performance: [
      { label: '기능 단계', value: '9 Phase', note: 'Foundation → Security 완료' },
      { label: 'DB 테이블', value: 'RLS 17개', note: '47개 정책, 전체 테이블 보안 감사 완료' },
      { label: '배포', value: 'Vercel', note: 'all-aplus.vercel.app' },
    ],
    retrospective: {
      lessons: [
        '1인 풀스택으로 Auth → RAG → Memory → Security 전체를 구현하며, 각 계층이 어떻게 연결되는지 end-to-end로 이해',
        'pgvector + 임베딩으로 "의미 기반 검색"을 직접 구현 — 키워드 검색과의 본질적 차이를 체감',
        'Rate Limiting, 토큰 추적, CSRF, 프롬프트 인젝션 방어 등 보안을 "기능 완성 후 추가"가 아닌 "설계 단계부터 고려"하는 습관 형성',
      ],
      regrets: [
        '테스트 코드 없이 진행하여, Phase가 쌓일수록 회귀 확인에 수동 검증 시간 증가',
      ],
      improvements: [
        'E2E 테스트(Playwright)로 핵심 플로우 자동 검증',
        '성능 모니터링 대시보드 — 토큰 사용량 분석 기반 비용 최적화',
      ],
    },
    github: 'https://github.com/All-APlus/all-aplus',
  },
  {
    id: 'aisports',
    title: 'AI Sports Camera',
    period: '2026.03 - 진행중',
    team: {
      total: 1,
      breakdown: '1인 개발',
      myRole: '기획, 설계, ML 모델 학습, Android 구현, CI/CD 전체',
    },
    contribution: '1인 전체 100% — ML 모델 학습 + Android 앱 + CI/CD',
    description:
      '스포츠 영상에서 AI가 자동으로 베스트 프레임을 추출하는 Android 앱. AI Hub 219만 건 데이터로 커스텀 ML 모델을 직접 학습하고, TFLite로 온디바이스 배포까지 전체 ML 파이프라인을 수행했습니다.',
    tech: ['Kotlin', 'Jetpack Compose', 'TensorFlow Lite', 'MediaPipe', 'Python', 'PyTorch', 'Hilt', 'Room', 'Material3'],
    highlights: [
      'AI Hub 219만 건 데이터 → 커스텀 1D-CNN 학습 → 초기 F1=0.843 → 실험 반복으로 **MultiTask F1=0.964까지 개선**, TFLite 333KB 온디바이스 배포',
      'Peak 감지 모델도 초기 ±3f 67% → combined feature 적용 후 **±3f 73.0%로 개선**',
      '7클래스 재학습(골키퍼 SAVE 추가, YouTube 데이터 증강 402 시퀀스) → **Test Acc 95.01% 달성**',
      'MediaPipe 33 → AI Hub 16 키포인트 매핑 + 80차원 피처 추출 → 30프레임 슬라이딩 윈도우 실시간 추론',
      '유닛 테스트 + GitHub Actions CI/CD + Strategy Pattern으로 OCP 실제 적용',
    ],
    techChoices: [
      {
        tech: 'PyTorch → TFLite 커스텀 ML 파이프라인',
        reason:
          'AI Hub 축구 동작 데이터(219만 JSON, 6 클래스)를 전처리하여 1D-CNN 모델을 직접 학습. PyTorch로 실험(분류/Peak/MultiTask) 후 TFLite로 변환하여 333KB 경량 온디바이스 추론 달성.',
        alternatives: '사전학습 모델(NIMA) 의존 → 도메인 특화 커스텀 모델로 정확도 향상',
      },
      {
        tech: 'Kotlin + Jetpack Compose',
        reason:
          'Android 네이티브의 카메라/GPU 접근이 필수적인 프로젝트. Compose의 선언형 UI로 복잡한 분석 결과 화면을 효율적으로 구현.',
        alternatives: 'Flutter 대비 CameraX/TFLite 네이티브 통합 용이',
      },
      {
        tech: 'Hilt (Dependency Injection)',
        reason:
          '7개 ViewModel + ML 추론 엔진 + 분석 파이프라인 컴포넌트 간 의존성을 깔끔하게 관리. 테스트 시 Mock 주입이 용이.',
      },
    ],
    features: [
      {
        title: 'ML 모델 학습 — 7개 실험 반복으로 성능 개선',
        description:
          'AI Hub 축구 동작 데이터 219만 JSON 전처리 → 1D-CNN 분류 모델 학습. Exp-1 baseline F1=0.843에서 시작 → bio/combined/multitask 7개 실험을 거쳐 **Exp-4 MultiTask F1=0.964까지 개선**. Peak 감지도 Exp-1 ±3f 67% → **Exp-7 combined ±3f 73.0%**. YouTube 하이라이트에서 골키퍼 세이브 402시퀀스를 추가 생성(데이터 증강) → 7클래스 재학습으로 **Test Acc 95.01% 달성**. PyTorch → ONNX → TFLite 변환(f16, 333KB)으로 온디바이스 배포.',
      },
      {
        title: '3축 프레임 평가 파이프라인',
        description:
          'NIMA(미적 품질) + 커스텀 ML 액션 분류(동작 의미) + Laplacian(선명도) 세 점수를 가중 합산. NIMA 미탑재 시 밝기/대비/채도/엣지밀도/색조화 5요소 Fallback 스코어러 자동 전환.',
        diagram: '/diagrams/aisports-pipeline.svg',
      },
      {
        title: 'Android ML 통합 — 실시간 추론 엔진',
        description:
          'MediaPipe 33 랜드마크를 AI Hub 16 키포인트로 매핑하는 PoseFeatureExtractor + TFLite 2모델 래퍼(MlActionClassifier)로 30프레임 슬라이딩 윈도우 실시간 추론. 7클래스(코너킥/수비/드리블/프리킥/패스/슈팅/세이브) 자동 분류.',
      },
      {
        title: '종목별 동작 인식 (Strategy Pattern)',
        description:
          'SportActionStrategy 인터페이스로 종목별 감지 전략을 분리. 새 종목 추가 시 ActionDetector 수정 없이 Strategy 구현체만 추가 — OCP(개방-폐쇄 원칙) 실제 적용.',
      },
    ],
    performance: [
      { label: '분류 정확도', value: 'F1 0.964', note: 'MultiTask (초기 0.843 → 개선)' },
      { label: '재학습 Acc', value: '95.01%', note: '7클래스 (SAVE 추가 + 데이터 증강)' },
      { label: 'Peak 감지', value: '±3f 73%', note: 'Combined (초기 67% → 개선)' },
      { label: '모델 크기', value: '333KB', note: 'TFLite f16 (분류 199KB + Peak 134KB)' },
    ],
    retrospective: {
      lessons: [
        'Pre-trained 모델 의존에서 벗어나 도메인 데이터로 직접 학습 → 정확도와 모델 이해도 동시에 향상',
        '데이터 증강(YouTube → MediaPipe → 학습 시퀀스 자동 생성)으로 부족한 클래스를 보강하는 실전 기법 습득',
        '테스트가 ML 통합 리팩토링 시 회귀 버그 0건을 보장 — 테스트가 비용이 아닌 투자임을 체감',
        'Strategy Pattern으로 종목 확장 시 기존 코드 변경 0줄 — OCP의 실용적 효과 입증',
      ],
      regrets: [
        '실기기 테스트를 더 일찍 했으면 에뮬레이터에서 발견 못하는 카메라/추론 이슈를 조기에 잡았을 것',
      ],
      improvements: [
        '통합 테스트 추가로 카메라 → ML 추론 → 저장 전체 플로우 검증',
        '더 다양한 종목 데이터로 범용 액션 분류 모델 확장',
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
      'v2에서 JWT + OAuth2 인증 체계 직접 구현, v3에서 Python 전환',
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
          'Python 생태계의 AI/ML 라이브러리 활용을 위해 전환. SQLAlchemy 2.0으로 DB 접근, httpx 기반 async HTTP 호출.',
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
          'v2에서 Spring Security + JWT 기반 인증/인가를 직접 구현. OAuth2 소셜 로그인(Google, Facebook) 통합.',
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
        tech: ['Python', 'FastAPI', 'SQLAlchemy 2.0', 'PostgreSQL', 'psycopg'],
        changes: [
          'Java → Python 전환 (AI/ML 생태계 활용)',
          'SQLAlchemy 2.0으로 DB 접근, httpx 기반 async HTTP 호출',
          'MySQL → PostgreSQL 전환 (pgvector, JSONB 확장성)',
          '종합 코드 개선: 보안 7건, 품질 7건, UX 9건',
        ],
        growthPoint: '하나의 언어에 갇히지 않고, 목적에 맞는 기술을 선택하는 시야를 얻음. async 패턴 학습.',
      },
    ],
    github: '#',
  },
];
