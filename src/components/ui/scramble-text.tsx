"use client";

import React, { useRef, useCallback } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

interface ScrambleTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export function ScrambleText({ text, className, style }: ScrambleTextProps) {
  const elRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);

  const scramble = useCallback(() => {
    if (!elRef.current) return;
    const el = elRef.current;
    let iteration = 0;
    const totalFrames = text.length * 3;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const tick = () => {
      el.textContent = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < iteration / 3) return text[i];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      iteration++;
      if (iteration <= totalFrames) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        el.textContent = text;
      }
    };

    tick();
  }, [text]);

  const reset = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (elRef.current) elRef.current.textContent = text;
  }, [text]);

  return (
    <span
      ref={elRef}
      className={className}
      style={style}
      onMouseEnter={scramble}
      onMouseLeave={reset}
    >
      {text}
    </span>
  );
}
