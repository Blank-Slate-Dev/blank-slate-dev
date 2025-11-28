// components/hero-code-background.tsx
"use client";

import { useEffect, useState, useCallback, useRef, useMemo } from "react";
import { motion } from "framer-motion";

// Real code snippets from the actual project files
const CODE_SNIPPETS = [
  [
    "export function About() {",
    "  return (",
    '    <section id="about" className="relative z-20">',
    "      <motion.div",
    "        initial={{ opacity: 0, y: 60 }}",
    "        whileInView={{ opacity: 1, y: 0 }}",
    "      >",
  ],
  [
    "const stats = [",
    "  { icon: TreePine, value: '10+', label: 'Years' },",
    "  { icon: Shield, value: 'Licensed', label: 'Certified' },",
    "  { icon: Award, value: '5000+', label: 'Trees' },",
    "];",
  ],
  [
    '<a href="mailto:hello@example.com">',
    '  <Phone className="h-4 w-4" />',
    "  <span>Contact info removed</span>",
    "</a>",
  ],
  [
    "<Image",
    '  src="/logo.png"',
    '  alt="LMK Tree Services"',
    "  width={160}",
    "  height={80}",
    "/>",
  ],
  [
    "const steps = [",
    "  { number: '01', title: 'Initial Call' },",
    "  { number: '02', title: 'Assessment' },",
    "  { number: '03', title: 'Permit Guidance' },",
    "];",
  ],
  [
    "<motion.div",
    "  initial={{ opacity: 0, y: 40 }}",
    "  whileInView={{ opacity: 1, y: 0 }}",
    "  transition={{ duration: 0.5 }}",
    ">",
  ],
  [
    "const testimonials = [",
    "  { name: 'Sarah M.', rating: 5 },",
    "  { name: 'Daniel P.', rating: 5 },",
    "  { name: 'Rob W.', rating: 5 },",
    "];",
  ],
  [
    "const [index, setIndex] = useState(0);",
    "",
    "useEffect(() => {",
    "  const timer = setInterval(() => {",
    "    setIndex((i) => (i + 1) % len);",
    "  }, 6000);",
    "}, []);",
  ],
  [
    "const reasons = [",
    "  { icon: Shield, title: '$20M Insurance' },",
    "  { icon: Award, title: 'ISA Certified' },",
    "  { icon: Users, title: '15+ Years' },",
    "];",
  ],
  [
    '<div className="flex gap-4">',
    '  <Icon className="w-6 h-6" />',
    "  <h3>{title}</h3>",
    "  <p>{description}</p>",
    "</div>",
  ],
  [
    "async function submitQuote(data) {",
    "  const res = await fetch('/api/quote', {",
    "    method: 'POST',",
    "    body: JSON.stringify(data),",
    "  });",
    "  return res.json();",
    "}",
  ],
  [
    "interface ServiceArea {",
    "  name: string;",
    "  postcode: string;",
    "  region: string;",
    "}",
  ],
];

interface CodePatch {
  id: number;
  lines: string[];
  x: number;
  y: number;
  typingSpeed: number;
  slotIndex: number;
  snippetIndex: number;
}

interface SlotConfig {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
}

// Six fixed slots (3 per side) to keep cards visible and away from the logo
const SLOTS: SlotConfig[] = [
  { xMin: 2, xMax: 8, yMin: 8, yMax: 18 },
  { xMin: 2, xMax: 8, yMin: 38, yMax: 48 },
  { xMin: 2, xMax: 8, yMin: 72, yMax: 82 },
  { xMin: 65, xMax: 72, yMin: 8, yMax: 18 },
  { xMin: 65, xMax: 72, yMin: 38, yMax: 48 },
  { xMin: 65, xMax: 72, yMin: 72, yMax: 82 },
];

const TARGET_OPACITY = 0.32;
const FADE_IN_DURATION = 0.5;
const FADE_OUT_DURATION = 0.7;
const HOLD_DURATION = 3500;

// Syntax highlighting function - returns array of styled spans
function highlightLine(text: string): React.ReactNode[] {
  if (!text || text.trim() === "") {
    return [<span key="empty">&nbsp;</span>];
  }

  const result: React.ReactNode[] = [];
  let remaining = text;
  let keyIndex = 0;

  const patterns: { regex: RegExp; color: string }[] = [
    // Keywords
    {
      regex:
        /^(const|let|var|function|return|if|else|async|await|import|export|default|from|interface|type|useState|useEffect)\b/,
      color: "#C792EA",
    },
    // Strings (double quotes)
    { regex: /^"[^"]*"/, color: "#C3E88D" },
    // Strings (single quotes)
    { regex: /^'[^']*'/, color: "#C3E88D" },
    // Strings (backticks)
    { regex: /^`[^`]*`/, color: "#C3E88D" },
    // JSX tags
    { regex: /^<\/?[A-Za-z][A-Za-z0-9.]*/, color: "#89DDFF" },
    // className prop
    { regex: /^className/, color: "#82AAFF" },
    // Numbers
    { regex: /^\d+/, color: "#F78C6C" },
    // Type annotations
    { regex: /^:\s*(string|number|boolean)/, color: "#FFCB6B" },
    // Arrows and operators
    { regex: /^(=>|===|!==|\|\||&&)/, color: "#89DDFF" },
    // Brackets and punctuation
    { regex: /^[{}[\]();:,.]/, color: "#89DDFF" },
    // Equals and other operators
    { regex: /^[=+\-*/<>!&|]/, color: "#89DDFF" },
  ];

  while (remaining.length > 0) {
    let matched = false;

    // Skip whitespace
    const whitespaceMatch = remaining.match(/^(\s+)/);
    if (whitespaceMatch) {
      result.push(<span key={keyIndex++}>{whitespaceMatch[1]}</span>);
      remaining = remaining.slice(whitespaceMatch[1].length);
      continue;
    }

    // Try each pattern
    for (const { regex, color } of patterns) {
      const match = remaining.match(regex);
      if (match) {
        result.push(
          <span key={keyIndex++} style={{ color }}>
            {match[0]}
          </span>
        );
        remaining = remaining.slice(match[0].length);
        matched = true;
        break;
      }
    }

    // If no pattern matched, add character as default color
    if (!matched) {
      result.push(
        <span key={keyIndex++} style={{ color: "#A6ACCD" }}>
          {remaining[0]}
        </span>
      );
      remaining = remaining.slice(1);
    }
  }

  return result;
}

function TypewriterLine({
  text,
  onComplete,
  typingSpeed,
}: {
  text: string;
  onComplete: () => void;
  typingSpeed: number;
}) {
  const [charCount, setCharCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (charCount > text.length) {
      setIsComplete(true);
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setCharCount((c) => c + 1);
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charCount, text.length, typingSpeed, onComplete]);

  const displayText = text.slice(0, charCount);
  const highlighted = useMemo(() => highlightLine(displayText), [displayText]);

  return (
    <div className="font-mono text-[11px] sm:text-xs leading-relaxed whitespace-pre h-[1.5em]">
      {highlighted}
      {!isComplete && (
        <span
          className="inline-block w-[2px] h-[1em] ml-[1px] align-middle animate-pulse"
          style={{ backgroundColor: "rgba(130, 170, 255, 0.7)" }}
        />
      )}
    </div>
  );
}

function CompletedLine({ text }: { text: string }) {
  const highlighted = useMemo(() => highlightLine(text), [text]);

  return (
    <div className="font-mono text-[11px] sm:text-xs leading-relaxed whitespace-pre h-[1.5em]">
      {highlighted}
    </div>
  );
}

function CodePatchComponent({
  patch,
  onCycle,
}: {
  patch: CodePatch;
  onCycle: (patch: CodePatch) => void;
}) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [isFullyComplete, setIsFullyComplete] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const totalLines = patch.lines.length;
  const holdTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const fadeOutTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleLineComplete = useCallback(() => {
    const justCompletedLine = patch.lines[currentLineIndex];

    setCompletedLines((prev) => [...prev, justCompletedLine]);

    if (currentLineIndex + 1 < totalLines) {
      setCurrentLineIndex((prev) => prev + 1);
    } else {
      setIsFullyComplete(true);
    }
  }, [currentLineIndex, totalLines, patch.lines]);

  useEffect(() => {
    if (!isFullyComplete) return;

    holdTimeoutRef.current = setTimeout(() => {
      setIsFadingOut(true);
    }, HOLD_DURATION);

    return () => {
      if (holdTimeoutRef.current) {
        clearTimeout(holdTimeoutRef.current);
      }
    };
  }, [isFullyComplete]);

  useEffect(() => {
    if (!isFadingOut) return;

    fadeOutTimeoutRef.current = setTimeout(() => {
      onCycle(patch);
    }, FADE_OUT_DURATION * 1000 + 20);

    return () => {
      if (fadeOutTimeoutRef.current) {
        clearTimeout(fadeOutTimeoutRef.current);
      }
    };
  }, [isFadingOut, onCycle, patch]);

  useEffect(() => {
    return () => {
      if (holdTimeoutRef.current) {
        clearTimeout(holdTimeoutRef.current);
      }
      if (fadeOutTimeoutRef.current) {
        clearTimeout(fadeOutTimeoutRef.current);
      }
    };
  }, []);

  const visibleLineCount = isFullyComplete
    ? completedLines.length
    : completedLines.length + 1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isFadingOut ? { opacity: 0 } : { opacity: TARGET_OPACITY }}
      transition={
        isFadingOut
          ? { duration: FADE_OUT_DURATION, ease: "easeInOut" }
          : { duration: FADE_IN_DURATION, ease: "easeOut" }
      }
      className="absolute pointer-events-none"
      style={{
        left: `${patch.x}%`,
        top: `${patch.y}%`,
      }}
    >
      <div
        className="relative rounded-lg border px-4 py-3"
        style={{
          backgroundColor: "rgba(10, 10, 12, 0.95)",
          borderColor: "rgba(40, 50, 70, 0.4)",
          boxShadow: `
            0 0 30px 5px rgba(100, 140, 200, 0.07),
            0 0 60px 10px rgba(80, 120, 180, 0.04),
            0 8px 32px rgba(0, 0, 0, 0.6)
          `,
        }}
      >
        <div className="flex gap-4">
          {/* Line numbers */}
          <div
            className="flex flex-col font-mono text-[11px] sm:text-xs select-none border-r pr-3"
            style={{
              color: "#3d4a5c",
              borderColor: "rgba(40, 50, 70, 0.3)",
            }}
          >
            {Array.from({ length: visibleLineCount }).map((_, idx) => (
              <span key={idx} className="leading-relaxed h-[1.5em]">
                {String(idx + 1).padStart(2, " ")}
              </span>
            ))}
          </div>

          {/* Code lines */}
          <div className="flex flex-col">
            {completedLines.map((line, idx) => (
              <CompletedLine key={`completed-${idx}`} text={line} />
            ))}

            {!isFullyComplete && (
              <TypewriterLine
                key={`typing-${currentLineIndex}`}
                text={patch.lines[currentLineIndex]}
                typingSpeed={patch.typingSpeed}
                onComplete={handleLineComplete}
              />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroCodeBackground() {
  const [patches, setPatches] = useState<CodePatch[]>([]);
  const patchCounter = useRef(0);
  const activeSnippetIndices = useRef<Set<number>>(new Set());

  const createPatchForSlot = useCallback(
    (slotIndex: number): CodePatch => {
      const availableSnippets = CODE_SNIPPETS.map((_, idx) => idx).filter(
        (idx) => !activeSnippetIndices.current.has(idx)
      );

      const snippetIndex =
        availableSnippets[
          Math.floor(Math.random() * Math.max(1, availableSnippets.length))
        ] ?? Math.floor(Math.random() * CODE_SNIPPETS.length);

      activeSnippetIndices.current.add(snippetIndex);

      const slot = SLOTS[slotIndex];

      return {
        id: patchCounter.current++,
        lines: CODE_SNIPPETS[snippetIndex],
        x: slot.xMin + Math.random() * (slot.xMax - slot.xMin),
        y: slot.yMin + Math.random() * (slot.yMax - slot.yMin),
        typingSpeed: 50 + Math.random() * 30,
        slotIndex,
        snippetIndex,
      };
    },
    []
  );

  const cyclePatch = useCallback(
    (patch: CodePatch) => {
      activeSnippetIndices.current.delete(patch.snippetIndex);

      setPatches((prev) =>
        prev.map((existing) =>
          existing.id === patch.id
            ? createPatchForSlot(patch.slotIndex)
            : existing
        )
      );
    },
    [createPatchForSlot]
  );

  useEffect(() => {
    setPatches(SLOTS.map((_, idx) => createPatchForSlot(idx)));
  }, [createPatchForSlot]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Pure black background */}
      <div className="absolute inset-0 bg-black" />

      {/* Code patches */}
      {patches.map((patch) => (
        <CodePatchComponent
          key={patch.id}
          patch={patch}
          onCycle={cyclePatch}
        />
      ))}

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)",
        }}
      />
    </div>
  );
}
