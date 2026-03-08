'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12 font-mono text-sm"
    >
      <p className="syntax-comment mb-6">// ─── Contact ─────────────────────────────</p>

      <div className="ide-panel rounded p-5 space-y-4">
        {/* getEmail */}
        <div>
          <p className="syntax-annotation">@GetMapping</p>
          <p>
            <span className="syntax-keyword">public </span>
            <span className="syntax-type">ResponseEntity</span>
            <span className="syntax-default">&lt;</span>
            <span className="syntax-type">String</span>
            <span className="syntax-default">&gt; </span>
            <span className="syntax-function">getEmail</span>
            <span className="syntax-default">() {'{'}</span>
          </p>
          <p className="ml-6">
            <span className="syntax-keyword">return </span>
            <span className="syntax-type">ResponseEntity</span>
            <span className="syntax-default">.</span>
            <span className="syntax-function">ok</span>
            <span className="syntax-default">(</span>
            <a href="mailto:pbjuni1007@naver.com" className="ide-link">
              <span className="syntax-string">&quot;pbjuni1007@naver.com&quot;</span>
            </a>
            <span className="syntax-default">);</span>
          </p>
          <p className="syntax-default">{'}'}</p>
        </div>

        {/* getGitHub */}
        <div>
          <p className="syntax-annotation">@GetMapping</p>
          <p>
            <span className="syntax-keyword">public </span>
            <span className="syntax-type">ResponseEntity</span>
            <span className="syntax-default">&lt;</span>
            <span className="syntax-type">String</span>
            <span className="syntax-default">&gt; </span>
            <span className="syntax-function">getGitHub</span>
            <span className="syntax-default">() {'{'}</span>
          </p>
          <p className="ml-6">
            <span className="syntax-keyword">return </span>
            <span className="syntax-type">ResponseEntity</span>
            <span className="syntax-default">.</span>
            <span className="syntax-function">ok</span>
            <span className="syntax-default">(</span>
            <a
              href="https://github.com/pbjuni1007"
              target="_blank"
              rel="noopener noreferrer"
              className="ide-link"
            >
              <span className="syntax-string">&quot;github.com/pbjuni1007&quot;</span>
            </a>
            <span className="syntax-default">);</span>
          </p>
          <p className="syntax-default">{'}'}</p>
        </div>

        {/* getMessage */}
        <div>
          <p className="syntax-comment">// 함께 일하고 싶으시다면 편하게 연락 주세요.</p>
          <p className="syntax-annotation">@PostMapping</p>
          <p>
            <span className="syntax-keyword">public </span>
            <span className="syntax-type">ResponseEntity</span>
            <span className="syntax-default">&lt;</span>
            <span className="syntax-type">Void</span>
            <span className="syntax-default">&gt; </span>
            <span className="syntax-function">sendMessage</span>
            <span className="syntax-default">(</span>
            <span className="syntax-annotation">@RequestBody </span>
            <span className="syntax-type">ContactRequest </span>
            <span className="syntax-field">request</span>
            <span className="syntax-default">) {'{'}</span>
          </p>
          <p className="ml-6">
            <span className="syntax-comment">// 언제든 환영합니다 :)</span>
          </p>
          <p className="ml-6">
            <span className="syntax-keyword">return </span>
            <span className="syntax-type">ResponseEntity</span>
            <span className="syntax-default">.</span>
            <span className="syntax-function">ok</span>
            <span className="syntax-default">().</span>
            <span className="syntax-function">build</span>
            <span className="syntax-default">();</span>
          </p>
          <p className="syntax-default">{'}'}</p>
        </div>
      </div>

      <p className="syntax-comment mt-16 text-center text-xs">
        // &copy; 2026 박병준 &mdash; Built with Next.js | Inspired by IntelliJ IDEA Darcula
      </p>
    </motion.section>
  );
}
