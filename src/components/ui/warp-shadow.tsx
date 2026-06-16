'use client';

import { CSSProperties, useEffect, useRef, useState } from 'react';
import { Warp } from '@paper-design/shaders-react';

interface AnimationConfig {
  scale: number;
  speed: number;
}

interface NoiseConfig {
  opacity: number;
  scale: number;
}

interface WarpShadowProps {
  sizing?: 'fill' | 'stretch';
  color?: string;
  animation?: AnimationConfig;
  noise?: NoiseConfig;
  style?: CSSProperties;
  className?: string;
}

/** Parses an rgba()/rgb() string and returns its alpha channel (defaults to 1). */
function alphaOf(color: string): number {
  const m = color.match(/rgba?\([^)]+,\s*([\d.]+)\)/);
  return m ? parseFloat(m[1]) : 1;
}

/**
 * Drop-in replacement for EtherealShadow using the Warp shader. Renders the
 * brand green palette at full opacity inside the shader, then dims the whole
 * layer via CSS opacity (taken from the `color` alpha) so it washes over the
 * section background exactly like the previous SVG-displacement shadow did.
 */
export function WarpShadow({
  sizing = 'fill',
  color = 'rgba(61, 92, 53, 0.22)',
  animation,
  style,
  className,
}: WarpShadowProps) {
  const opacity = alphaOf(color);
  const speed = Math.max(0.2, Math.min(1.4, (animation?.speed ?? 45) / 45));

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  // Only keep the WebGL shader mounted while its section is near the viewport —
  // several of these running at once is far heavier than the old SVG filter was.
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '200px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{
        position: sizing === 'fill' ? 'absolute' : 'relative',
        inset: sizing === 'fill' ? 0 : undefined,
        opacity,
        ...style,
      }}
    >
      {inView && (
        <Warp
          style={{ width: '100%', height: '100%' }}
          proportion={0.42}
          softness={1}
          distortion={0.3}
          swirl={0.65}
          swirlIterations={9}
          shape="checks"
          shapeScale={0.13}
          scale={1}
          rotation={0}
          speed={speed}
          colors={['#080D08', '#3D5C35', '#6A8A5E', '#8FB87A']}
        />
      )}
    </div>
  );
}

export default WarpShadow;
