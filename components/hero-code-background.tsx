"use client";

import { CSSProperties, useEffect, useState } from "react";

const MIN_SNIPPETS = 20;
const MAX_SNIPPETS = 40;
const CHARACTERS =
  "const let function return if else => () {} [] <> 0123456789 abcdefghijklmnopqrstuvwxyz!@#$%^&*";

type CodeSnippet = {
  id: number;
  text: string;
  left: number;
  top: number;
  opacity: number;
  delay: number;
  duration: number;
  fontSize: number;
};

function randomText() {
  const length = 8 + Math.floor(Math.random() * 16);
  return Array.from({ length }, () => {
    const char = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
    return Math.random() > 0.8 ? char.toUpperCase() : char;
  }).join("");
}

function generatePosition() {
  let left = Math.random() * 100;
  let top = Math.random() * 100;

  while (left > 38 && left < 62 && top > 24 && top < 56) {
    left = Math.random() * 100;
    top = Math.random() * 100;
  }

  return { left, top };
}

function createSnippet(id: number): CodeSnippet {
  const { left, top } = generatePosition();

  return {
    id,
    text: randomText(),
    left,
    top,
    opacity: 0.05 + Math.random() * 0.07,
    delay: Math.random() * 2.5,
    duration: 3 + Math.random() * 3,
    fontSize: 10 + Math.floor(Math.random() * 5),
  };
}

export default function HeroCodeBackground() {
  const [snippets, setSnippets] = useState<CodeSnippet[]>(() => {
    const count = MIN_SNIPPETS + Math.floor(Math.random() * (MAX_SNIPPETS - MIN_SNIPPETS + 1));
    return Array.from({ length: count }, (_, index) => createSnippet(index));
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSnippets((previous) => previous.map((snippet) => createSnippet(snippet.id)));
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-[#241631]/35 via-transparent to-transparent" />

      {snippets.map((snippet) => (
        <div
          key={`${snippet.id}-${snippet.text}`}
          className="absolute font-mono text-[#2d233d]"
          style={{
            left: `${snippet.left}%`,
            top: `${snippet.top}%`,
            opacity: snippet.opacity,
            animation: `code-flicker ${snippet.duration}s ease-in-out infinite`,
            animationDelay: `${snippet.delay}s`,
            letterSpacing: "0.08em",
            fontSize: `${snippet.fontSize}px`,
          } as CSSProperties}
        >
          {snippet.text}
        </div>
      ))}
    </div>
  );
}
