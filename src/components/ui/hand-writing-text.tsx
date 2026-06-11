"use client";

import { motion } from "framer-motion";

interface HandWrittenTitleProps {
  title?: string;
  subtitle?: string;
}

function HandWrittenTitle({
  title = "Hand Written",
  subtitle = "Optional subtitle",
}: HandWrittenTitleProps) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number] },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Animated oval stroke in gold */}
      <div className="absolute inset-0">
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 300"
          initial="hidden"
          animate="visible"
          className="w-full h-full"
        >
          <title>Samuele Barchet</title>
          <motion.path
            d="M 950 40
               C 1250 150, 1050 240, 600 260
               C 250 260, 150 240, 150 150
               C 150 60, 350 30, 600 30
               C 850 30, 950 90, 950 90"
            fill="none"
            strokeWidth="3"
            stroke="#C8A96E"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={draw}
            style={{ opacity: 0.6 }}
          />
        </motion.svg>
      </div>

      {/* Text */}
      <div className="relative text-center z-10 flex flex-col items-center justify-center py-10">
        <motion.h1
          className="tracking-tighter flex items-center gap-2"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(3.2rem, 9vw, 9rem)",
            lineHeight: 1,
            fontWeight: 900,
            fontStyle: "italic",
            color: "#F2EBD9",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="mt-4"
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              color: "rgba(156,143,114,1)",
              fontSize: "1.1rem",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}

export { HandWrittenTitle };
