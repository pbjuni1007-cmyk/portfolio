'use client';

export default function StatusBar() {
  return (
    <footer className="status-bar fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-1 font-mono">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1">
          <span className="inline-block w-2 h-2 rounded-full bg-string" />
          main
        </span>
        <span>UTF-8</span>
        <span>LF</span>
      </div>
      <div className="flex items-center gap-4">
        <span>Java 21</span>
        <span>Spring Boot 3.x</span>
        <span className="syntax-string">Build: passing</span>
      </div>
    </footer>
  );
}
