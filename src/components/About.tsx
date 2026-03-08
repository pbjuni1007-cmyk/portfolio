'use client';

import { motion } from 'framer-motion';

const values = [
  { keyword: '책임감', sub: 'AI 시대의 결재자', annotation: '@Override' },
  { keyword: '소통', sub: '감이 아니라 명세', annotation: '@FunctionalInterface' },
  { keyword: '성장', sub: '더 큰 문제를 맡는 것', annotation: '@Scalable' },
  { keyword: '오너십', sub: '함께 일하고 싶은 사람', annotation: '@Autowired' },
];

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-20 font-mono text-sm"
    >
      <p className="syntax-comment mb-6">// ─── About ───────────────────────────────</p>

      {/* Career path as array literal */}
      <p>
        <span className="syntax-type">String</span>
        <span className="syntax-default">[] </span>
        <span className="syntax-field">careerPath</span>
        <span className="syntax-default"> = {'{'}</span>
      </p>
      <div className="ml-6 space-y-0.5">
        <p><span className="syntax-string">&quot;철학과 졸업&quot;</span><span className="syntax-default">,</span></p>
        <p><span className="syntax-string">&quot;군 장교 (공보정훈)&quot;</span><span className="syntax-default">,</span></p>
        <p><span className="syntax-string">&quot;맥도날드 본사 인턴&quot;</span><span className="syntax-default">,</span></p>
        <p><span className="syntax-string">&quot;백엔드 개발자&quot;</span></p>
      </div>
      <p className="syntax-default">{'}'};</p>
      <br />

      <p className="syntax-comment mb-4">
        // 매 전환마다 새로운 역할을 맡았고, 매번 진심을 다했습니다.
      </p>

      {/* Values as method declarations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {values.map((v, i) => (
          <motion.div
            key={v.keyword}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="ide-panel ide-glow rounded p-4 cursor-default transition-all duration-200"
          >
            <p className="syntax-annotation text-xs mb-2">{v.annotation}</p>
            <p>
              <span className="syntax-keyword">public </span>
              <span className="syntax-type">Strength </span>
              <span className="syntax-function text-base font-bold">{v.keyword}</span>
              <span className="syntax-default">() {'{'}</span>
            </p>
            <p className="ml-4 mt-1">
              <span className="syntax-keyword">return </span>
              <span className="syntax-string">&quot;{v.sub}&quot;</span>
              <span className="syntax-default">;</span>
            </p>
            <p className="syntax-default mt-1">{'}'}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
