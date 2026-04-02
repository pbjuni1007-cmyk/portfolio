export type ProficiencyLevel = 'core' | 'proficient' | 'familiar' | 'exploring';

export interface SkillItem {
  name: string;
  proficiency: ProficiencyLevel;
  usage: string;
  projects: string[];
}

export interface SkillGroup {
  category: string;
  tagStyle: string;
  skills: SkillItem[];
}

export const proficiencyConfig: Record<ProficiencyLevel, { label: string; percent: number; color: string }> = {
  core: { label: 'Core', percent: 90, color: 'var(--color-keyword)' },
  proficient: { label: 'Proficient', percent: 70, color: 'var(--color-string)' },
  familiar: { label: 'Familiar', percent: 50, color: 'var(--color-number)' },
  exploring: { label: 'Exploring', percent: 30, color: 'var(--color-annotation)' },
};

export const projectNameMap: Record<string, string> = {
  yeji: 'YEJI',
  golmok: '골목식당',
  junflow: 'JunFlow',
  aisports: 'AI Sports',
  seoulmate: 'SeoulMate',
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend',
    tagStyle: 'ide-tag',
    skills: [
      {
        name: 'Java',
        proficiency: 'core',
        usage: 'Spring Boot 기반 백엔드 전 프로젝트 담당',
        projects: ['yeji', 'golmok', 'seoulmate'],
      },
      {
        name: 'Spring Boot',
        proficiency: 'core',
        usage: 'API 설계, SSE 스트리밍, 인증/인가 구현',
        projects: ['yeji', 'seoulmate'],
      },
      {
        name: 'JPA',
        proficiency: 'proficient',
        usage: 'JSONB 매핑, QueryDSL 동적 쿼리, ORM 전환',
        projects: ['yeji', 'seoulmate'],
      },
      {
        name: 'MyBatis',
        proficiency: 'familiar',
        usage: 'SeoulMate v1 XML 매퍼 기반 데이터 접근',
        projects: ['seoulmate'],
      },
      {
        name: 'Python / FastAPI',
        proficiency: 'familiar',
        usage: 'SeoulMate v3 백엔드 마이그레이션, async 처리',
        projects: ['seoulmate'],
      },
    ],
  },
  {
    category: 'Database',
    tagStyle: 'ide-tag-blue',
    skills: [
      {
        name: 'PostgreSQL',
        proficiency: 'proficient',
        usage: 'JSONB + GIN 인덱스, 트랜잭션 설계',
        projects: ['yeji', 'golmok'],
      },
      {
        name: 'MySQL',
        proficiency: 'proficient',
        usage: 'SeoulMate v1~v2 메인 DB 설계·운영',
        projects: ['seoulmate'],
      },
      {
        name: 'Redis',
        proficiency: 'familiar',
        usage: 'YEJI 세션/캐시 관리, 응답 속도 최적화',
        projects: ['yeji'],
      },
    ],
  },
  {
    category: 'Infra / DevOps',
    tagStyle: 'ide-tag-green',
    skills: [
      {
        name: 'Docker',
        proficiency: 'proficient',
        usage: '컨테이너 기반 배포 환경 구축',
        projects: ['golmok', 'yeji'],
      },
      {
        name: 'Jenkins',
        proficiency: 'proficient',
        usage: 'CI/CD 파이프라인 직접 설계·구축 (Jenkinsfile)',
        projects: ['golmok', 'yeji'],
      },
      {
        name: 'GitHub Actions',
        proficiency: 'proficient',
        usage: 'AI Sports Camera CI/CD, 자동 테스트·빌드',
        projects: ['aisports'],
      },
      {
        name: 'Nginx',
        proficiency: 'familiar',
        usage: '리버스 프록시, SSL 종단 설정',
        projects: ['golmok'],
      },
      {
        name: 'Linux',
        proficiency: 'familiar',
        usage: '서버 운영 환경, 쉘 스크립트 작성',
        projects: ['golmok'],
      },
    ],
  },
  {
    category: 'Mobile',
    tagStyle: 'ide-tag',
    skills: [
      {
        name: 'Kotlin',
        proficiency: 'familiar',
        usage: 'AI Sports Camera Android 앱 전체 개발',
        projects: ['aisports'],
      },
      {
        name: 'Jetpack Compose',
        proficiency: 'familiar',
        usage: '선언형 UI 전체 구현, Material3 디자인',
        projects: ['aisports'],
      },
      {
        name: 'TensorFlow Lite',
        proficiency: 'familiar',
        usage: 'NIMA 모델 온디바이스 추론, 실시간 분석',
        projects: ['aisports'],
      },
    ],
  },
  {
    category: 'Frontend',
    tagStyle: 'ide-tag-blue',
    skills: [
      {
        name: 'TypeScript',
        proficiency: 'proficient',
        usage: 'JunFlow 전체, 포트폴리오 사이트',
        projects: ['junflow'],
      },
      {
        name: 'React / Next.js',
        proficiency: 'familiar',
        usage: '골목식당 FE 개발, 포트폴리오 사이트',
        projects: ['golmok'],
      },
      {
        name: 'Vue.js',
        proficiency: 'familiar',
        usage: 'SeoulMate v1 프론트엔드',
        projects: ['seoulmate'],
      },
      {
        name: 'Tailwind CSS',
        proficiency: 'familiar',
        usage: '유틸리티 기반 스타일링, 골목식당 FE',
        projects: ['golmok'],
      },
    ],
  },
  {
    category: 'AI / CLI',
    tagStyle: 'ide-tag-purple',
    skills: [
      {
        name: 'Claude API',
        proficiency: 'proficient',
        usage: 'JunFlow 멀티모델 라우팅',
        projects: ['junflow'],
      },
      {
        name: 'MCP',
        proficiency: 'proficient',
        usage: 'JunFlow MCP 서버 직접 구현',
        projects: ['junflow'],
      },
      {
        name: 'Node.js CLI',
        proficiency: 'proficient',
        usage: 'CLI 도구 설계·npm 배포',
        projects: ['junflow'],
      },
    ],
  },
  {
    category: 'Tools',
    tagStyle: 'ide-tag-green',
    skills: [
      {
        name: 'Git',
        proficiency: 'core',
        usage: '브랜치 전략, CI/CD 연동, 코드 리뷰',
        projects: ['yeji', 'golmok', 'seoulmate', 'junflow', 'aisports'],
      },
      {
        name: 'Jira',
        proficiency: 'proficient',
        usage: '스프린트 운영, 이슈 관리',
        projects: ['yeji', 'golmok'],
      },
      {
        name: 'Notion',
        proficiency: 'proficient',
        usage: '기획 문서, 회의록, 기술 문서화',
        projects: ['yeji', 'golmok', 'seoulmate'],
      },
      {
        name: 'Figma',
        proficiency: 'familiar',
        usage: '와이어프레임 검토, 디자인 피드백',
        projects: ['golmok'],
      },
    ],
  },
];
