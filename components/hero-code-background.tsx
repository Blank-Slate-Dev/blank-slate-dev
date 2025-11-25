"use client";

import { CSSProperties, useEffect, useMemo, useState } from "react";

const LINE_COUNT = 16;
const CHARACTERS =
  "const let function return if else => () {} [] <> 0123456789 abcdefghijklmnopqrstuvwxyz";

function randomFromString(count: number) {
  const chars = [] as string[];
  for (let i = 0; i < count; i += 1) {
    const index = Math.floor(Math.random() * CHARACTERS.length);
    chars.push(CHARACTERS[index]);
  }
  return chars.join("");
}

function generateLine(index: number) {
  const length = 28 + Math.floor(Math.random() * 24);
  return {
    id: index,
    text: randomFromString(length),
    top: Math.min(96, Math.max(2, (index / LINE_COUNT) * 100 + (Math.random() * 6 - 3))),
    delay: Math.random() * 2.5,
    duration: 3 + Math.random() * 3,
  };
}

export default function HeroCodeBackground() {
  const [lines, setLines] = useState(() =>
    Array.from({ length: LINE_COUNT }, (_, index) => generateLine(index))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setLines((previous) =>
        previous.map((line) => ({
          ...line,
          text: randomFromString(28 + Math.floor(Math.random() * 24)),
          delay: Math.random() * 2.5,
          duration: 3 + Math.random() * 3,
        }))
      );
    }, 1600);

    return () => clearInterval(interval);
  }, []);

  const gradientMask = useMemo(
    () => (
      <div className="absolute inset-0 bg-gradient-to-b from-[#241631]/40 via-transparent to-transparent" />
    ),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {gradientMask}
      {lines.map((line) => (
        <div
          key={line.id}
          className="code-line px-6 text-[11px] font-mono leading-relaxed text-[#2d233d] opacity-10 sm:px-8 sm:text-xs md:text-sm"
          style={{
            top: `${line.top}%`,
            animationDelay: `${line.delay}s`,
            // @ts-expect-error -- CSS custom property for animation duration
            "--flicker-duration": `${line.duration}s`,
          } as CSSProperties}
        >
          {line.text}
        </div>
      ))}
    </div>
  );
}
