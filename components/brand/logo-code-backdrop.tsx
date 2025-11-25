// components/brand/logo-code-backdrop.tsx
"use client";

import { useEffect, useMemo, useState } from "react";

interface CodeLine {
  id: number;
  text: string;
  top: number;
  delay: number;
}

const CHARACTERS =
  "const let function return => {} [] () <> ; : = + - * / % && || === !== true false null async await".split(
    " "
  );

function generateLine(length = 38) {
  return Array.from({ length }, () => {
    const token = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
    return Math.random() > 0.85 ? token.toUpperCase() : token;
  })
    .join(" ")
    .slice(0, length + Math.floor(Math.random() * 12));
}

export default function LogoCodeBackdrop({ lineCount = 8 }: { lineCount?: number }) {
  const baseLines = useMemo<CodeLine[]>(
    () =>
      Array.from({ length: lineCount }, (_, idx) => ({
        id: idx,
        text: generateLine(),
        top: ((idx + 0.6) / (lineCount + 0.3)) * 100,
        delay: Math.random() * 1.4,
      })),
    [lineCount]
  );

  const [lines, setLines] = useState<CodeLine[]>(baseLines);

  useEffect(() => {
    const interval = setInterval(() => {
      setLines((prev) =>
        prev.map((line) => ({
          ...line,
          text: generateLine(),
          delay: Math.random() * 1.6,
        }))
      );
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1f0f33]/20 via-transparent to-[#1f0f33]/10" />
      {lines.map((line) => (
        <div
          key={`${line.id}-${line.text}`}
          className="absolute left-4 right-4 font-mono text-[11px] text-emerald-200/25 mix-blend-normal animate-[code-flicker_3s_ease-in-out_infinite]"
          style={{
            top: `${line.top}%`,
            animationDelay: `${line.delay}s`,
          }}
        >
          {line.text}
        </div>
      ))}
    </div>
  );
}
