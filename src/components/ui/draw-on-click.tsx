"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DrawOnClickProps {
  children: React.ReactNode;
  className?: string;
  strokeColor?: string;
}

export function DrawOnClick({
  children,
  className,
  strokeColor = "#6E9E52",
}: DrawOnClickProps) {
  const [drawn, setDrawn] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  return (
    <span
      ref={containerRef}
      className={`relative inline-block cursor-pointer select-none ${className ?? ""}`}
      onClick={() => setDrawn((v) => !v)}
      title="Click to draw"
    >
      {children}

      <AnimatePresence>
        {drawn && (
          <span
            className="absolute pointer-events-none"
            style={{ inset: "-18px -24px" }}
            aria-hidden="true"
          >
            <motion.svg
              width="100%"
              height="100%"
              viewBox="0 0 400 120"
              preserveAspectRatio="none"
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {/* Outer irregular loop — resembles a handwritten encirclement */}
              <motion.path
                d="
                  M 30 60
                  C 20 20, 80 5, 200 8
                  C 320 5, 385 20, 378 60
                  C 385 95, 320 115, 200 112
                  C 80 115, 18 95, 30 60
                  Z
                "
                fill="none"
                stroke={strokeColor}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ opacity: 0.75 }}
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: {
                    pathLength: 1,
                    opacity: 0.75,
                    transition: {
                      pathLength: {
                        duration: 0.9,
                        ease: [0.43, 0.13, 0.23, 0.96],
                      },
                      opacity: { duration: 0.15 },
                    },
                  },
                }}
              />
              {/* Small pen-tail stroke at the end */}
              <motion.path
                d="M 30 60 C 25 55, 22 58, 26 65"
                fill="none"
                stroke={strokeColor}
                strokeWidth="2.5"
                strokeLinecap="round"
                style={{ opacity: 0.5 }}
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: {
                    pathLength: 1,
                    opacity: 0.5,
                    transition: {
                      pathLength: { duration: 0.2, delay: 0.85 },
                      opacity: { duration: 0.1, delay: 0.85 },
                    },
                  },
                }}
              />
            </motion.svg>
          </span>
        )}
      </AnimatePresence>
    </span>
  );
}
