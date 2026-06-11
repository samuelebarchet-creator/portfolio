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
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative text-center z-10 flex flex-col items-center justify-center py-10">
        <motion.h1
          className="tracking-tighter"
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
          transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="mt-4"
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              color: "rgba(110,158,82,0.8)",
              fontSize: "1.1rem",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}

export { HandWrittenTitle };
