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
    description: '논리적 사고와 올바른 질문을 던지는 훈련',
  },
  {
    period: '2021.03 - 2023.06',
    title: '육군 11기동사단 복무 (공보정훈장교)',
    description: '책임감과 리더십. 다수 수상',
  },
  {
    period: '2024.04 - 2025.04',
    title: '한국맥도날드 홍보팀 인턴',
    description: '브랜드 커뮤니케이션과 소통의 본질을 경험',
  },
  {
    period: '2025.07 - 2026.06 (예정)',
    title: 'SSAFY 14기',
    description: 'Java · Spring Boot · 알고리즘 집중 교육',
    children: [
      {
        period: '2025.11 - 2025.12',
        title: 'SeoulMate (2인 프로젝트)',
        description: '첫 협업. API 개발 및 DB 설계 담당',
      },
      {
        period: '2026.01 - 2026.02',
        title: 'YEJI (5인 프로젝트)',
        description: 'BE 리드. 기술 의사결정 주도 (PostgreSQL JSONB, Kafka)',
      },
      {
        period: '2026.02 - 2026.04',
        title: '골목식당 (6인 프로젝트, 가제)',
        description: '팀장. AI 워크플로우 설계 및 팀 운영',
      },
    ],
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
