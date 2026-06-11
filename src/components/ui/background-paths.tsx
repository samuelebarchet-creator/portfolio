"use client";

import { motion } from "framer-motion";

/* Portfolio botanical-green palette:
   --green      #3D5C35
   --green-mid  #6A8A5E
   --green-light #8FB87A
   --bg         #F5F0E8  (cream)
*/

export function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        /* Alternate between the three green tones for depth */
        color:
            i % 3 === 0
                ? `rgba(61,92,53,${0.08 + i * 0.018})`
                : i % 3 === 1
                ? `rgba(106,138,94,${0.07 + i * 0.016})`
                : `rgba(143,184,122,${0.06 + i * 0.014})`,
        width: 0.4 + i * 0.025,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full"
                viewBox="0 0 696 316"
                fill="none"
                aria-hidden
            >
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke={path.color}
                        strokeWidth={path.width}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + (path.id % 7) * 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}
