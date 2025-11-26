"use client";

import { CSSProperties, useEffect, useState } from "react";

const MIN_SNIPPETS = 30;
const MAX_SNIPPETS = 50;
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
  const left = Math.random() * 100;
  const top = Math.random() * 100;

  return { left, top };
}

function createSnippet(id: number): CodeSnippet {
  const { left, top } = generatePosition();

  return {
    id,
    text: randomText(),
    left,
    top,
    opacity: 0.45 + Math.random() * 0.1,
    delay: Math.random() * 2.5,
    duration: 5 + Math.random(),
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
      {snippets.map((snippet) => (
        <div
          key={`${snippet.id}-${snippet.text}`}
          className="absolute font-mono text-[#A8C7FF]"
          style={{
            left: `${snippet.left}%`,
            top: `${snippet.top}%`,
            opacity: snippet.opacity,
            animation: `code-flicker ${snippet.duration}s ease-in-out infinite`,
            animationDelay: `${snippet.delay}s`,
            letterSpacing: "0.08em",
            fontSize: `${snippet.fontSize}px`,
            "--code-opacity": snippet.opacity,
          } as CSSProperties}
        >
          {snippet.text}
        </div>
      ))}
    </div>
  );
}
