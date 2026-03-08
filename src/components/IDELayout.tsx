'use client';

import { useEffect, useState, useRef, type ReactNode, type MouseEvent } from 'react';

const tabs = [
  { id: 'hero', label: 'Main.java', icon: '☕' },
  { id: 'about', label: 'About.md', icon: '📄' },
  { id: 'timeline', label: 'Experience.json', icon: '📋' },
  { id: 'projects', label: 'Projects.java', icon: '☕' },
  { id: 'features', label: 'Features.ts', icon: '📦' },
  { id: 'skills', label: 'Skills.yml', icon: '⚙' },
  { id: 'contact', label: 'Contact.java', icon: '☕' },
];

const menuItems = ['File', 'Edit', 'View', 'Navigate', 'Code', 'Refactor', 'Build', 'Run', 'Tools', 'Git', 'Window', 'Help'];

const toolIcons = ['📁', '🔍', '🏗', '▶', '🐛', '📊', '🔧'];

const breadcrumbMap: Record<string, string[]> = {
  hero: ['src', 'main', 'java', 'dev.jun.portfolio', 'Main.java'],
  about: ['src', 'main', 'resources', 'About.md'],
  timeline: ['src', 'main', 'resources', 'Experience.json'],
  projects: ['src', 'main', 'java', 'dev.jun.portfolio', 'Projects.java'],
  features: ['src', 'main', 'java', 'dev.jun.portfolio', 'Features.ts'],
  skills: ['src', 'main', 'resources', 'Skills.yml'],
  contact: ['src', 'main', 'java', 'dev.jun.portfolio', 'Contact.java'],
};

// Easter egg D: context menu items
const contextMenuItems = [
  { label: 'Close', msg: '퇴사는 아직 이릅니다...' },
  { label: 'Close Others', msg: '동료를 소중히 여기세요 💛' },
  { label: 'Close All', msg: '모든 탭을 닫아도 열정은 닫을 수 없습니다' },
  { divider: true } as const,
  { label: 'Split Right', msg: '풀스택은 다음 생에...' },
  { label: 'Move to Opposite Group', msg: '옮길 곳이 없습니다. 여기가 최선입니다.' },
  { divider: true } as const,
  { label: 'Copy Path', action: 'copy' as const },
];

// Easter egg B: console lines
const consoleLines = [
  { text: '> Task :compileJava', delay: 300 },
  { text: '> Task :processResources', delay: 600 },
  { text: '> Task :classes', delay: 900 },
  { text: '> Task :bootJar', delay: 1200 },
  { text: '', delay: 1500 },
  { text: 'BUILD SUCCESSFUL in 0.3s', color: 'var(--color-string)', delay: 1800 },
  { text: '4 actionable tasks: 4 executed', delay: 2100 },
  { text: '', delay: 2400 },
  { text: '───────────────────────────────────', delay: 2700 },
  { text: '채용하시겠습니까? [Y/n]', color: 'var(--color-function)', delay: 3000, prompt: true },
];

interface IDELayoutProps {
  children: ReactNode;
}

export default function IDELayout({ children }: IDELayoutProps) {
  const [active, setActive] = useState('hero');
  const [line, setLine] = useState(1);
  const [visited, setVisited] = useState<Set<string>>(new Set(['hero']));

  // Easter egg A: save dialog
  const [saveDialog, setSaveDialog] = useState<{ visible: boolean; tabLabel: string }>({
    visible: false,
    tabLabel: '',
  });
  const [saveMsg, setSaveMsg] = useState('');

  // Easter egg B: run console
  const [showConsole, setShowConsole] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState<{ text: string; color?: string }[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [waitingForInput, setWaitingForInput] = useState(false);
  const consoleInputRef = useRef<HTMLInputElement>(null);

  // Easter egg D: context menu
  const [ctxMenu, setCtxMenu] = useState<{ visible: boolean; x: number; y: number; tabId: string }>({
    visible: false,
    x: 0,
    y: 0,
    tabId: '',
  });
  const [ctxMsg, setCtxMsg] = useState('');

  const editorRef = useRef<HTMLDivElement>(null);
  const consoleEndRef = useRef<HTMLDivElement>(null);

  // Easter egg B: auto-scroll console to bottom
  useEffect(() => {
    consoleEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [consoleOutput]);

  useEffect(() => {
    const handleScroll = () => {
      const container = editorRef.current;
      if (!container) return;

      const scrollPercent = container.scrollTop / (container.scrollHeight - container.clientHeight || 1);
      setLine(Math.max(1, Math.floor(scrollPercent * 200) + 1));

      // Easter egg C: if scrolled near bottom, mark last section visited
      const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 100;
      if (isNearBottom) {
        const lastTab = tabs[tabs.length - 1];
        setActive(lastTab.id);
        setVisited((prev) => new Set(prev).add(lastTab.id));
        return;
      }

      // Update active tab + mark visited (Easter egg C)
      const sections = tabs.map((t) => ({
        id: t.id,
        el: document.getElementById(t.id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActive(sections[i].id);
            setVisited((prev) => new Set(prev).add(sections[i].id));
            break;
          }
        }
      }
    };

    const editor = editorRef.current;
    editor?.addEventListener('scroll', handleScroll, { passive: true });
    return () => editor?.removeEventListener('scroll', handleScroll);
  }, []);

  // Close context menu on click elsewhere
  useEffect(() => {
    const close = () => {
      setCtxMenu((prev) => ({ ...prev, visible: false }));
    };
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, []);

  const handleTabClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Easter egg A: tab close
  const handleTabClose = (e: MouseEvent, tabLabel: string) => {
    e.stopPropagation();
    setSaveDialog({ visible: true, tabLabel });
    setSaveMsg('');
  };

  const handleSaveAction = (action: 'save' | 'dontsave' | 'cancel') => {
    if (action === 'save') {
      setSaveMsg('이력서는 저장할 수 없습니다 :)');
      setTimeout(() => setSaveDialog({ visible: false, tabLabel: '' }), 1500);
    } else if (action === 'dontsave') {
      setSaveMsg('그래도 연락은 주세요 📧');
      setTimeout(() => setSaveDialog({ visible: false, tabLabel: '' }), 1500);
    } else {
      setSaveDialog({ visible: false, tabLabel: '' });
    }
  };

  // Easter egg B: run
  const handleRun = () => {
    if (isRunning) return;
    setIsRunning(true);
    setShowConsole(true);
    setConsoleOutput([]);
    setWaitingForInput(false);

    consoleLines.forEach(({ text, color, delay, prompt }) => {
      setTimeout(() => {
        setConsoleOutput((prev) => [...prev, { text, color }]);
        if (prompt) {
          setWaitingForInput(true);
          setIsRunning(false);
          // Focus input after prompt appears
          setTimeout(() => consoleInputRef.current?.focus(), 100);
        }
      }, delay);
    });
  };

  // Easter egg B: handle console input
  const handleConsoleInput = (value: string) => {
    const input = value.trim().toLowerCase();
    setWaitingForInput(false);

    if (input === 'y' || input === 'yes') {
      setConsoleOutput((prev) => [
        ...prev,
        { text: '' },
        { text: '감사합니다! 📧 이메일로 연락 부탁드립니다.', color: 'var(--color-string)' },
        { text: '→ pbjuni1007@naver.com', color: 'var(--color-number)' },
        { text: '' },
        { text: 'Process finished with exit code 0', color: 'var(--color-string)' },
      ]);
    } else if (input === 'n' || input === 'no') {
      setConsoleOutput((prev) => [
        ...prev,
        { text: '' },
        { text: '다시 한번 생각해보시겠어요? 😢', color: 'var(--color-keyword)' },
      ]);
      // Ask again after 2 seconds
      setTimeout(() => {
        setConsoleOutput((prev) => [
          ...prev,
          { text: '' },
          { text: '채용하시겠습니까? [Y/n]', color: 'var(--color-function)' },
        ]);
        setWaitingForInput(true);
        setTimeout(() => consoleInputRef.current?.focus(), 100);
      }, 2000);
    } else {
      setConsoleOutput((prev) => [
        ...prev,
        { text: '' },
        { text: `'${value.trim()}' 은(는) 잘못된 입력입니다. Y를 눌러주세요 ㅎㅎ`, color: 'var(--color-error)' },
        { text: '' },
        { text: '채용하시겠습니까? [Y/n]', color: 'var(--color-function)' },
      ]);
      setWaitingForInput(true);
      setTimeout(() => consoleInputRef.current?.focus(), 100);
    }
  };

  // Easter egg D: context menu
  const handleTabContext = (e: MouseEvent, tabId: string) => {
    e.preventDefault();
    e.stopPropagation();
    setCtxMenu({ visible: true, x: e.clientX, y: e.clientY, tabId });
    setCtxMsg('');
  };

  const handleCtxAction = (item: (typeof contextMenuItems)[number]) => {
    if ('divider' in item) return;
    if (item.action === 'copy') {
      navigator.clipboard?.writeText('https://github.com/pbjuni1007');
      setCtxMsg('GitHub URL이 복사되었습니다!');
    } else if (item.msg) {
      setCtxMsg(item.msg);
    }
    setTimeout(() => {
      setCtxMenu((prev) => ({ ...prev, visible: false }));
      setCtxMsg('');
    }, 1800);
  };

  const crumbs = breadcrumbMap[active] || breadcrumbMap.hero;

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      {/* Title bar */}
      <div className="ide-titlebar shrink-0">
        <div className="absolute left-3 flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <span>portfolio &ndash; IntelliJ IDEA</span>
      </div>

      {/* Menu bar */}
      <div className="ide-menubar shrink-0">
        {menuItems.map((item) => (
          <span key={item} className="ide-menu-item font-mono">
            {item}
          </span>
        ))}
        {/* Easter egg B: Run button */}
        <button
          onClick={handleRun}
          className="ide-menu-item font-mono ml-auto flex items-center gap-1"
          style={{ color: 'var(--color-string)' }}
          title="Run Main.java"
        >
          <span>▶</span>
          <span>Run</span>
        </button>
      </div>

      {/* Tab bar */}
      <div className="ide-tabbar shrink-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            onContextMenu={(e) => handleTabContext(e, tab.id)}
            className={`ide-tab ${active === tab.id ? 'ide-tab-active' : ''}`}
          >
            <span className="text-[11px]">{tab.icon}</span>
            {tab.label}
            {/* Easter egg C: unread dot */}
            {!visited.has(tab.id) && (
              <span
                className="w-2 h-2 rounded-full ml-1 shrink-0"
                style={{ background: 'var(--color-number)' }}
              />
            )}
            {/* Easter egg A: close button */}
            <span
              onClick={(e) => handleTabClose(e, tab.label)}
              className="ml-2 opacity-0 group-hover:opacity-100 hover:!opacity-100 text-[10px] hover:bg-white/10 rounded px-0.5 cursor-pointer ide-tab-close"
              style={{ opacity: active === tab.id ? 0.5 : 0 }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.opacity = '1'; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = active === tab.id ? '0.5' : '0'; }}
            >
              ×
            </span>
          </button>
        ))}
      </div>

      {/* Breadcrumb */}
      <div className="ide-breadcrumb shrink-0">
        {crumbs.map((crumb, i) => (
          <span key={i} className="flex items-center gap-1">
            {i > 0 && <span className="text-[10px]">&rsaquo;</span>}
            <span className={i === crumbs.length - 1 ? 'current' : ''}>
              {crumb}
            </span>
          </span>
        ))}
      </div>

      {/* Main area */}
      <div className="flex flex-1 min-h-0">
        {/* Left tool strip */}
        <div className="ide-toolstrip shrink-0 hidden sm:flex">
          {toolIcons.map((icon, i) => (
            <div key={i} className="ide-toolstrip-btn">
              {icon}
            </div>
          ))}
        </div>

        {/* Editor + Console */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Editor */}
          <div
            ref={editorRef}
            className="ide-editor flex-1"
            style={showConsole ? { height: 'calc(100% - 200px)' } : undefined}
          >
            <div className="ide-content">
              {children}
            </div>
          </div>

          {/* Easter egg B: Console */}
          {showConsole && (
            <div className="shrink-0" style={{
              height: '200px',
              background: 'var(--color-sidebar)',
              borderTop: '1px solid var(--color-border)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{
                background: 'var(--color-panel)',
                borderBottom: '1px solid var(--color-border)',
                padding: '4px 12px',
                fontSize: '12px',
                fontFamily: 'var(--font-mono)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: 'var(--color-default)',
              }}>
                <span>
                  <span style={{ color: 'var(--color-string)' }}>▶</span> Run: Main
                </span>
                <button
                  onClick={() => setShowConsole(false)}
                  className="hover:bg-white/10 rounded px-1"
                  style={{ color: 'var(--color-comment)' }}
                >
                  ×
                </button>
              </div>
              <div style={{
                flex: 1,
                padding: '8px 12px',
                overflow: 'auto',
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
              }}>
                {consoleOutput.map((line, i) => (
                  <div key={i} style={{ color: line.color || 'var(--color-default)', minHeight: '20px' }}>
                    {line.text}
                  </div>
                ))}
                {waitingForInput && (
                  <div style={{ display: 'flex', alignItems: 'center', marginTop: '4px' }}>
                    <span style={{ color: 'var(--color-string)', marginRight: '8px' }}>→</span>
                    <input
                      ref={consoleInputRef}
                      type="text"
                      maxLength={10}
                      autoFocus
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleConsoleInput((e.target as HTMLInputElement).value);
                          (e.target as HTMLInputElement).value = '';
                        }
                      }}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        outline: 'none',
                        color: 'var(--color-function)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '13px',
                        width: '100px',
                        caretColor: 'var(--color-function)',
                      }}
                    />
                  </div>
                )}
                <div ref={consoleEndRef} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Status bar */}
      <div className="ide-statusbar shrink-0">
        <div className="ide-statusbar-section">
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full" style={{ background: 'var(--color-string)' }} />
            main
          </span>
          <span>{line}:1</span>
        </div>
        <div className="ide-statusbar-section">
          <span>LF</span>
          <span>UTF-8</span>
          <span>Java 21</span>
          <span>Spring Boot 3.x</span>
          <span style={{ color: 'var(--color-string)' }}>✓ Build passing</span>
        </div>
      </div>

      {/* Easter egg A: Save Dialog */}
      {saveDialog.visible && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={() => setSaveDialog({ visible: false, tabLabel: '' })}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'var(--color-panel)',
              border: '1px solid var(--color-border)',
              borderRadius: '6px',
              padding: '20px 24px',
              minWidth: '360px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
            }}
          >
            <p style={{
              color: 'var(--color-default)',
              fontSize: '14px',
              marginBottom: '8px',
              fontFamily: 'var(--font-mono)',
            }}>
              Do you want to save changes to
            </p>
            <p style={{
              color: 'var(--color-function)',
              fontSize: '14px',
              marginBottom: '16px',
              fontFamily: 'var(--font-mono)',
            }}>
              {saveDialog.tabLabel}?
            </p>

            {saveMsg ? (
              <p style={{
                color: 'var(--color-string)',
                fontSize: '14px',
                textAlign: 'center',
                padding: '8px 0',
                fontFamily: 'var(--font-mono)',
              }}>
                {saveMsg}
              </p>
            ) : (
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                {[
                  { label: 'Save', action: 'save' as const, primary: true },
                  { label: "Don't Save", action: 'dontsave' as const, primary: false },
                  { label: 'Cancel', action: 'cancel' as const, primary: false },
                ].map((btn) => (
                  <button
                    key={btn.label}
                    onClick={() => handleSaveAction(btn.action)}
                    style={{
                      padding: '5px 16px',
                      fontSize: '13px',
                      fontFamily: 'var(--font-mono)',
                      borderRadius: '4px',
                      border: '1px solid var(--color-border)',
                      background: btn.primary ? 'var(--color-number)' : 'var(--color-sidebar)',
                      color: btn.primary ? '#fff' : 'var(--color-default)',
                      cursor: 'pointer',
                    }}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Easter egg D: Context Menu */}
      {ctxMenu.visible && (
        <div
          style={{
            position: 'fixed',
            left: ctxMenu.x,
            top: ctxMenu.y,
            background: 'var(--color-panel)',
            border: '1px solid var(--color-border)',
            borderRadius: '4px',
            padding: '4px 0',
            minWidth: '220px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
            zIndex: 1000,
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {ctxMsg ? (
            <div style={{
              padding: '8px 16px',
              color: 'var(--color-string)',
              textAlign: 'center',
            }}>
              {ctxMsg}
            </div>
          ) : (
            contextMenuItems.map((item, i) =>
              'divider' in item ? (
                <div
                  key={i}
                  style={{
                    height: '1px',
                    background: 'var(--color-border)',
                    margin: '4px 0',
                  }}
                />
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleCtxAction(item)}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    padding: '5px 16px',
                    color: 'var(--color-default)',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    fontSize: 'inherit',
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.background = 'var(--color-selection)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.background = 'transparent';
                  }}
                >
                  {item.label}
                  {item.action === 'copy' && (
                    <span style={{ float: 'right', color: 'var(--color-comment)', fontSize: '11px' }}>
                      Ctrl+Shift+C
                    </span>
                  )}
                </button>
              )
            )
          )}
        </div>
      )}
    </div>
  );
}
