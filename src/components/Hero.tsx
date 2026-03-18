'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mb-20 pt-6 font-mono text-sm"
    >
      {/* package declaration */}
      <p className="mb-1">
        <span className="syntax-keyword">package </span>
        <span className="syntax-default">dev.jun.portfolio</span>
        <span className="syntax-default">;</span>
      </p>
      <br />

      {/* imports */}
      <p className="syntax-comment">
        <span className="syntax-keyword">import </span>
        <span className="syntax-default">dev.jun.core.Backend</span>
        <span className="syntax-default">;</span>
      </p>
      <p className="mb-4">
        <span className="syntax-keyword">import </span>
        <span className="syntax-default">dev.jun.core.Leadership</span>
        <span className="syntax-default">;</span>
      </p>
      <br />

      {/* Javadoc comment */}
      <div className="syntax-comment mb-4">
        <p>/**</p>
        <p>&nbsp;* 안녕하세요,</p>
        <p>&nbsp;* 시스템의 흐름을 설계하고</p>
        <p>&nbsp;* 기술 선택에 이유를 묻는</p>
        <p>&nbsp;* 백엔드 개발자입니다.</p>
        <p>&nbsp;*</p>
        <p>&nbsp;* <span className="syntax-annotation">@author</span> 박병준</p>
        <p>&nbsp;* <span className="syntax-annotation">@since</span> 1997.10.07</p>
        <p>&nbsp;*/</p>
      </div>

      {/* class declaration */}
      <p>
        <span className="syntax-keyword">public class </span>
        <span className="syntax-function text-3xl sm:text-4xl font-bold">박병준</span>
        <span className="syntax-keyword"> extends </span>
        <span className="syntax-type">BackendDeveloper</span>
        <span className="syntax-default"> {'{'}</span>
      </p>
      <br />

      {/* fields */}
      <div className="ml-6 space-y-1">
        <p>
          <span className="syntax-annotation">@Value</span>
          <span className="syntax-default">(</span>
          <span className="syntax-string">&quot;서강대학교 철학과&quot;</span>
          <span className="syntax-default">)</span>
        </p>
        <p>
          <span className="syntax-keyword">private </span>
          <span className="syntax-type">String </span>
          <span className="syntax-field">education</span>
          <span className="syntax-default">;</span>
        </p>
        <br />
        <p>
          <span className="syntax-annotation">@Value</span>
          <span className="syntax-default">(</span>
          <span className="syntax-string">&quot;SSAFY 14기&quot;</span>
          <span className="syntax-default">)</span>
        </p>
        <p>
          <span className="syntax-keyword">private </span>
          <span className="syntax-type">String </span>
          <span className="syntax-field">training</span>
          <span className="syntax-default">;</span>
        </p>
        <br />
        <p>
          <span className="syntax-annotation">@Value</span>
          <span className="syntax-default">(</span>
          <span className="syntax-string">&quot;Baekjoon Gold I&quot;</span>
          <span className="syntax-default">)</span>
        </p>
        <p>
          <span className="syntax-keyword">private </span>
          <span className="syntax-type">String </span>
          <span className="syntax-field">algorithm</span>
          <span className="syntax-default">;</span>
        </p>
      </div>
      <br />

      {/* closing brace */}
      <p className="syntax-default">{'}'}</p>

      {/* links as comments */}
      <div className="mt-8 space-y-1">
        <p className="syntax-comment">// Links</p>
        {[
          { label: 'GitHub', href: 'https://github.com/pbjuni1007', val: 'github.com/pbjuni1007' },
          { label: 'Baekjoon', href: 'https://solved.ac/profile/pjh5144', val: 'solved.ac/pjh5144' },
          { label: 'Email', href: 'mailto:pbjuni1007@naver.com', val: 'pbjuni1007@naver.com' },
        ].map((link) => (
          <p key={link.label}>
            <span className="syntax-type">String </span>
            <span className="syntax-field">{link.label.toLowerCase()}</span>
            <span className="syntax-default"> = </span>
            <a
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="ide-link"
            >
              <span className="syntax-string">&quot;{link.val}&quot;</span>
            </a>
            <span className="syntax-default">;</span>
          </p>
        ))}
      </div>
    </motion.section>
  );
}
