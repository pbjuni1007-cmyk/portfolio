'use client';

import { useEffect, useState } from 'react';

const tabs = [
  { id: 'hero', label: 'Main.java', icon: '☕' },
  { id: 'about', label: 'About.md', icon: '📄' },
  { id: 'timeline', label: 'Timeline.json', icon: '📋' },
  { id: 'projects', label: 'Projects.java', icon: '☕' },
  { id: 'features', label: 'Features.ts', icon: '📦' },
  { id: 'skills', label: 'Skills.yml', icon: '⚙' },
  { id: 'contact', label: 'Contact.md', icon: '📄' },
];

export default function TabNav() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = tabs.map((t) => ({
        id: t.id,
        el: document.getElementById(t.id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex overflow-x-auto"
      style={{ background: 'var(--color-panel)' }}
    >
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleClick(tab.id)}
            className={`tab px-4 py-2 flex items-center gap-1.5 whitespace-nowrap font-mono text-xs transition-all ${
              active === tab.id ? 'tab-active' : ''
            }`}
          >
            <span className="text-[10px]">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
