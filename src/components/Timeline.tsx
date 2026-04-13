'use client';

import { motion } from 'framer-motion';

interface TimelineItem {
  period: string;
  title: string;
  description: string;
  children?: { period: string; title: string; description: string }[];
}

const timeline: TimelineItem[] = [
  {
    period: '2016.03 - 2021.02',
    title: '서강대학교 철학과 / 신문방송학(복수전공) 졸업',
    description: '논리적 사고와 올바른 질문을 던지는 훈련. 복잡한 문제를 구조화하는 능력의 기반',
  },
  {
    period: '2021.03 - 2023.06',
    title: '육군 11기동사단 복무 (공보정훈장교)',
    description: '30인 이상 조직 관리 및 대외 커뮤니케이션 경험. 다수 수상으로 책임감과 리더십 입증',
  },
  {
    period: '2024.04 - 2024.07',
    title: '한국맥도날드 홍보팀 인턴',
    description: '글로벌 기업의 브랜드 커뮤니케이션 실무. 데이터 기반 소통 전략 수립 경험',
  },
  {
    period: '2025.07 - 2026.06 (예정)',
    title: 'SSAFY 14기 (삼성 청년 SW 아카데미)',
    description: 'Java · Spring Boot · 알고리즘 집중 교육 (1,000시간+). 3개 팀 프로젝트에서 BE 리드 → 팀장으로 성장',
    children: [
      {
        period: '2025.11 - 2025.12',
        title: 'SeoulMate (2인 프로젝트)',
        description: '첫 협업. API 설계 및 DB 설계 담당. 이후 v2, v3까지 기술 스택을 3번 전환하며 성장',
      },
      {
        period: '2026.01 - 2026.02',
        title: 'YEJI (5인 프로젝트)',
        description: 'BE 개발. SSE 스트리밍 아키텍처 설계, Contract-First API 협업 프로세스 도입',
      },
      {
        period: '2026.02 - 2026.04',
        title: '골목식당 (6인 프로젝트, 가제)',
        description: '팀장. FE 개발(백엔드 관점의 프론트 경험), Jenkins CI/CD 구축, MVP 기능 축소 전략 주도',
      },
    ],
  },
  {
    period: '2026.03 - 진행중',
    title: 'JunFlow (개인 프로젝트)',
    description: 'AI 에이전트 오케스트레이션 CLI 도구. v0.5.0에서 MCP 기반으로 전면 리팩터링(이중 호출 문제 해결), v0.6.0에서 멀티 CLI(Claude+Codex+Gemini) 오케스트레이션 추가. 12개 MCP 도구 + 8개 스킬 + npm 배포',
  },
  {
    period: '2026.03 - 진행중',
    title: '올A+ (개인 프로젝트)',
    description: '대학생 AI 학습 비서 웹앱. Next.js + Supabase + pgvector RAG 파이프라인, SM-2 플래시카드, 교수 성향 분석 등 9Phase 구현',
  },
  {
    period: '2026.03 - 진행중',
    title: 'AI Sports Camera (개인 프로젝트)',
    description: 'Android AI 앱 + 커스텀 ML 모델 학습. AI Hub 219만 건 데이터 → 7클래스 분류(F1=0.964) → TFLite 온디바이스 배포',
  },
];

export default function Timeline() {
  let idx = 0;

  return (
    <motion.section
      id="timeline"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-24"
    >
      <h2 className="text-sm font-mono syntax-annotation mb-6 tracking-wider">
        // Experience
      </h2>
      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

        <div className="flex flex-col gap-6">
          {timeline.map((item) => {
            const i = idx++;
            return (
              <div key={item.title}>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex gap-4 relative"
                >
                  <div className="mt-2 shrink-0">
                    <div className="w-[15px] h-[15px] rounded-full border-2 border-keyword bg-editor" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-mono syntax-comment mb-1">
                      {item.period}
                    </p>
                    <h3 className="text-sm font-semibold syntax-function leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs syntax-comment mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </motion.div>

                {item.children && (
                  <div className="ml-10 mt-4 flex flex-col gap-4 relative">
                    <div className="absolute left-[5px] top-1 bottom-1 w-px bg-border/50" />
                    {item.children.map((child) => {
                      const ci = idx++;
                      return (
                        <motion.div
                          key={child.title}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: ci * 0.05 }}
                          className="flex gap-3 relative"
                        >
                          <div className="mt-1.5 shrink-0">
                            <div className="w-[11px] h-[11px] rounded-full border-2 border-string bg-editor" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs font-mono syntax-comment mb-0.5">
                              {child.period}
                            </p>
                            <h3 className="text-sm font-medium syntax-default leading-snug">
                              {child.title}
                            </h3>
                            <p className="text-xs syntax-comment mt-0.5">
                              {child.description}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
