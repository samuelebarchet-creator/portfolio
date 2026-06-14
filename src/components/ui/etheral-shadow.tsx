'use client';

import React, { useRef, useId, useEffect, useState, CSSProperties } from 'react';
import { gsap } from '@/lib/gsap';

interface AnimationConfig {
  scale: number;
  speed: number;
}

interface NoiseConfig {
  opacity: number;
  scale: number;
}

interface EtherealShadowProps {
  sizing?: 'fill' | 'stretch';
  color?: string;
  animation?: AnimationConfig;
  noise?: NoiseConfig;
  style?: CSSProperties;
  className?: string;
}

function mapRange(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number {
  if (fromLow === fromHigh) return toLow;
  return toLow + ((value - fromLow) / (fromHigh - fromLow)) * (toHigh - toLow);
}

export function EtherealShadow({
  sizing = 'fill',
  color = 'rgba(61, 92, 53, 0.18)',
  animation,
  noise,
  style,
  className,
}: EtherealShadowProps) {
  const rawId = useId().replace(/:/g, '');
  const id = `ethereal-${rawId}`;

  /* Only run the expensive animated SVG filter on desktop, and never when the
     user prefers reduced motion. Starts false (matches SSR) → flips on after
     mount where appropriate, so mobile/reduced-motion users get a static, cheap
     version with zero per-frame repaints. */
  const [perfOk, setPerfOk] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mql = window.matchMedia(
      '(min-width: 768px) and (prefers-reduced-motion: no-preference)'
    );
    const update = () => setPerfOk(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  const animationEnabled = !!(animation && animation.scale > 0) && perfOk;
  const containerRef = useRef<HTMLDivElement>(null);
  const feColorMatrixRef = useRef<SVGFEColorMatrixElement>(null);
  const hueRotateTween = useRef<gsap.core.Tween | null>(null);

  const displacementScale = animation ? mapRange(animation.scale, 1, 100, 20, 100) : 0;
  const animationDuration = animation ? mapRange(animation.speed, 1, 100, 1000, 50) : 1;

  useEffect(() => {
    if (!feColorMatrixRef.current || !animationEnabled) return;

    const proxy = { hue: 0 };
    const tween = gsap.to(proxy, {
      hue: 360,
      duration: animationDuration / 25,
      repeat: -1,
      ease: 'none',
      paused: true,
      onUpdate: () => {
        feColorMatrixRef.current?.setAttribute('values', String(proxy.hue));
      },
    });
    hueRotateTween.current = tween;

    /* The animated SVG filter forces a full repaint every frame, so only run it
       while the element is on screen and the tab is visible. Otherwise four of
       these animating off-screen stutter the smooth scroll. */
    let onScreen = true;
    const sync = () => {
      if (onScreen && !document.hidden) tween.play();
      else tween.pause();
    };

    const root = containerRef.current;
    const io = root
      ? new IntersectionObserver(
          ([entry]) => { onScreen = entry.isIntersecting; sync(); },
          { rootMargin: '200px' },
        )
      : null;
    if (io && root) io.observe(root);
    else tween.play();

    const onVis = () => sync();
    document.addEventListener('visibilitychange', onVis);

    return () => {
      tween.kill();
      io?.disconnect();
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [animationEnabled, animationDuration]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ overflow: 'hidden', position: 'relative', width: '100%', height: '100%', ...style }}
    >
      <div
        style={{
          position: 'absolute',
          inset: -displacementScale,
          filter: animationEnabled ? `url(#${id}) blur(4px)` : 'none',
        }}
      >
        {animationEnabled && (
          <svg style={{ position: 'absolute', width: 0, height: 0 }}>
            <defs>
              <filter id={id}>
                <feTurbulence
                  result="undulation"
                  numOctaves="2"
                  baseFrequency={`${mapRange(animation!.scale, 0, 100, 0.001, 0.0005)},${mapRange(animation!.scale, 0, 100, 0.004, 0.002)}`}
                  seed="0"
                  type="turbulence"
                />
                <feColorMatrix ref={feColorMatrixRef} in="undulation" type="hueRotate" values="180" />
                <feColorMatrix
                  in="dist"
                  result="circulation"
                  type="matrix"
                  values="4 0 0 0 1  4 0 0 0 1  4 0 0 0 1  1 0 0 0 0"
                />
                <feDisplacementMap in="SourceGraphic" in2="circulation" scale={displacementScale} result="dist" />
                <feDisplacementMap in="dist" in2="undulation" scale={displacementScale} result="output" />
              </filter>
            </defs>
          </svg>
        )}

        <div
          style={{
            backgroundColor: color,
            maskImage: `url('https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png')`,
            maskSize: sizing === 'stretch' ? '100% 100%' : 'cover',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      {noise && noise.opacity > 0 && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")`,
            backgroundSize: noise.scale * 200,
            backgroundRepeat: 'repeat',
            opacity: noise.opacity / 2,
            pointerEvents: 'none',
          }}
        />
      )}
    </div>
  );
}
