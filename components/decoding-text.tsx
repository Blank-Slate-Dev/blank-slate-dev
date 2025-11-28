"use client";

import { useEffect, useMemo, useRef, useState } from "react";

interface DecodingTextProps {
  fromText: string;
  toText: string;
  isActive: boolean;
}

const RANDOM_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/={}_-";
const FRAME_INTERVAL = 30; // milliseconds
const BASE_RESOLVE_FRAME = 4;
const RESOLVE_STEP = 2;

function padToLength(text: string, length: number) {
  return text.padEnd(length, " ");
}

function getRandomCharacter() {
  const index = Math.floor(Math.random() * RANDOM_CHARACTERS.length);
  return RANDOM_CHARACTERS[index];
}

export function DecodingText({ fromText, toText, isActive }: DecodingTextProps) {
  const [displayText, setDisplayText] = useState(fromText);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const currentTextRef = useRef(fromText);

  const maxLength = useMemo(
    () => Math.max(fromText.length, toText.length),
    [fromText.length, toText.length]
  );

  useEffect(() => {
    currentTextRef.current = displayText;
  }, [displayText]);

  useEffect(() => {
    const startText = padToLength(currentTextRef.current, maxLength);
    const targetText = padToLength(isActive ? toText : fromText, maxLength);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setDisplayText(currentTextRef.current);

    let frame = 0;
    const resolveFrames = Array.from(
      { length: maxLength },
      (_, index) => BASE_RESOLVE_FRAME + index * RESOLVE_STEP
    );
    const finalFrame = resolveFrames[maxLength - 1] + BASE_RESOLVE_FRAME;

    intervalRef.current = setInterval(() => {
      frame += 1;

      const nextText = startText
        .split("")
        .map((char, index) => {
          if (frame >= resolveFrames[index]) {
            return targetText[index];
          }

          if (char === " " && targetText[index] === " ") {
            return " ";
          }

          return getRandomCharacter();
        })
        .join("");

      setDisplayText(frame >= finalFrame ? targetText.trimEnd() : nextText);

      if (frame >= finalFrame && intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }, FRAME_INTERVAL);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [fromText, isActive, maxLength, toText]);

  return <span className="relative z-10 whitespace-pre">{displayText}</span>;
}
