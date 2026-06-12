'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useMousePositionRef } from '@/components/hooks/use-mouse-position-ref';

export default function CustomCursor() {
  const positionRef = useMousePositionRef();
  const [hovering, setHovering] = useState(false);

  /* Raw motion values (cursor center coordinates) */
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  /* Dot: fast spring — snaps almost instantly */
  const dotSpringX = useSpring(cursorX, { stiffness: 900, damping: 40, mass: 0.4 });
  const dotSpringY = useSpring(cursorY, { stiffness: 900, damping: 40, mass: 0.4 });

  /* Ring: slow spring — lags behind for the elastic trailing feel */
  const ringSpringX = useSpring(cursorX, { stiffness: 180, damping: 22, mass: 0.8 });
  const ringSpringY = useSpring(cursorY, { stiffness: 180, damping: 22, mass: 0.8 });

  /* Offset so the element's center aligns with the cursor */
  const DOT_SIZE  = 8;
  const RING_SIZE = 40;
  const dotX  = useTransform(dotSpringX,  (v) => v - DOT_SIZE  / 2);
  const dotY  = useTransform(dotSpringY,  (v) => v - DOT_SIZE  / 2);
  const ringX = useTransform(ringSpringX, (v) => v - RING_SIZE / 2);
  const ringY = useTransform(ringSpringY, (v) => v - RING_SIZE / 2);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    document.documentElement.style.cursor = 'none';

    /* Push positionRef values into motion values each frame */
    let raf: number;
    const tick = () => {
      cursorX.set(positionRef.current.x);
      cursorY.set(positionRef.current.y);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    /* Hover detection on interactive elements */
    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);

    const addListeners = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    addListeners();

    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.documentElement.style.cursor = '';
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [positionRef, cursorX, cursorY]);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[2147483647] pointer-events-none rounded-full"
        style={{
          x: dotX,
          y: dotY,
          width: DOT_SIZE,
          height: DOT_SIZE,
          background: 'var(--green)',
        }}
        animate={{ scale: hovering ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[2147483646] pointer-events-none rounded-full"
        style={{
          x: ringX,
          y: ringY,
          width: RING_SIZE,
          height: RING_SIZE,
        }}
        animate={{
          scale: hovering ? 1.8 : 1,
          borderColor: hovering ? '#3D5C35' : 'rgba(61,92,53,0.5)',
          opacity: hovering ? 0.9 : 0.7,
          borderWidth: 1,
        }}
        transition={{
          scale:       { type: 'spring', stiffness: 300, damping: 22 },
          borderColor: { duration: 0.2 },
          opacity:     { duration: 0.2 },
        }}
        initial={{ borderWidth: 1, borderStyle: 'solid', borderColor: 'rgba(61,92,53,0.5)', opacity: 0.7 }}
      />
    </>
  );
}
