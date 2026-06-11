'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from '@/lib/gsap';

const COUNT = 600;

/* Botanical green palette — visible on cream background */
const COLORS = [
  new THREE.Color('#3D5C35'),
  new THREE.Color('#6A8A5E'),
  new THREE.Color('#8FB87A'),
  new THREE.Color('#4A7040'),
  new THREE.Color('#5C7E50'),
];

export default function Hero() {
  const sectionRef  = useRef<HTMLElement>(null);
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const nameRef     = useRef<HTMLHeadingElement>(null);
  const labelRef    = useRef<HTMLParagraphElement>(null);
  const subRef      = useRef<HTMLParagraphElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);
  const rafRef      = useRef<number>(0);

  /* ── Three.js particles ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const W = section.offsetWidth;
    const H = section.offsetHeight;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    const scene  = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-W / 2, W / 2, H / 2, -H / 2, 0.1, 100);
    camera.position.z = 10;

    /* Geometry */
    const positions  = new Float32Array(COUNT * 3);
    const colors     = new Float32Array(COUNT * 3);
    const phases     = new Float32Array(COUNT);
    const speeds     = new Float32Array(COUNT);
    const amplitudes = new Float32Array(COUNT);
    const baseY      = new Float32Array(COUNT);

    for (let i = 0; i < COUNT; i++) {
      const x = (Math.random() - 0.5) * W * 1.1;
      const y = (Math.random() - 0.5) * H * 1.1;

      positions[i * 3]     = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = 0;

      baseY[i]      = y;
      phases[i]     = Math.random() * Math.PI * 2;
      speeds[i]     = 0.15 + Math.random() * 0.35;
      amplitudes[i] = 8 + Math.random() * 24;

      const c = COLORS[Math.floor(Math.random() * COLORS.length)];
      colors[i * 3]     = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color',    new THREE.BufferAttribute(colors,    3));

    const material = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    /* Resize */
    const onResize = () => {
      const w = section.offsetWidth;
      const h = section.offsetHeight;
      renderer.setSize(w, h);
      camera.left   = -w / 2;
      camera.right  =  w / 2;
      camera.top    =  h / 2;
      camera.bottom = -h / 2;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    /* Render loop */
    let t0 = 0;
    const animate = (ts: number) => {
      rafRef.current = requestAnimationFrame(animate);
      const t = ts * 0.001;
      if (t0 === 0) t0 = t;
      const elapsed = t - t0;

      const pos = geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < COUNT; i++) {
        pos[i * 3 + 1] = baseY[i] + Math.sin(elapsed * speeds[i] + phases[i]) * amplitudes[i];
        /* Slow horizontal drift */
        pos[i * 3]    += Math.cos(elapsed * speeds[i] * 0.4 + phases[i]) * 0.04;
      }
      geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  /* ── Text animations ── */
  useEffect(() => {
    const label    = labelRef.current;
    const name     = nameRef.current;
    const subtitle = subRef.current;
    const cta      = ctaRef.current;
    if (!label || !name || !subtitle || !cta) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    /* Label slides down */
    tl.fromTo(label, { y: -16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.2);

    /* Name: character-by-character reveal via SplitType */
    import('split-type').then(({ default: SplitType }) => {
      const split = new SplitType(name, { types: 'chars' });

      gsap.fromTo(
        split.chars,
        { y: 80, opacity: 0, rotateX: -40 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.75,
          stagger: 0.03,
          ease: 'power3.out',
          delay: 0.35,
          onComplete: () => split.revert(),
        }
      );
    });

    /* Subtitle + CTA */
    tl.fromTo(subtitle, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 1.1);
    tl.fromTo(cta,      { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 1.35);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-bg"
      style={{ minHeight: '100svh' }}
    >
      {/* Particles canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden
      />

      {/* Subtle vignette — fades out particles near edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(245,240,232,0.7) 100%)',
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full min-h-[100svh] px-8 md:px-20 pt-24 pb-16 max-w-6xl mx-auto">

        {/* Role label */}
        <p
          ref={labelRef}
          className="font-condensed uppercase text-green text-xs tracking-[0.5em] mb-8 opacity-0"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Brand &amp; Digital Strategist
        </p>

        {/* Name — full heading, large */}
        <h1
          ref={nameRef}
          className="font-display font-black italic text-ink leading-[0.88] overflow-hidden"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(4.5rem, 12vw, 13rem)',
            letterSpacing: '-0.03em',
          }}
        >
          Samuele<br />Barchet
        </h1>

        {/* Divider line */}
        <div
          className="my-8 h-px w-24"
          style={{ background: 'rgba(61,92,53,0.3)' }}
        />

        {/* Subtitle + CTA row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 max-w-4xl">
          <p
            ref={subRef}
            className="text-ink-dim font-body leading-relaxed opacity-0"
            style={{
              fontFamily: 'var(--font-barlow)',
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              maxWidth: '36ch',
            }}
          >
            Costruisco identità di marca e strategie digitali che generano risultati misurabili.
          </p>

          <div ref={ctaRef} className="flex items-center gap-4 shrink-0 opacity-0">
            <a
              href="/#collaborazioni"
              className="inline-flex items-center gap-2 px-7 py-3 bg-green text-bg font-condensed uppercase text-sm tracking-[0.2em] hover:bg-green-mid transition-colors duration-300"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Scopri i lavori
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="/#contact"
              className="font-condensed uppercase text-ink-dim text-sm tracking-[0.2em] hover:text-ink transition-colors duration-300 underline underline-offset-4 decoration-green/40"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Scrivimi
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div
          className="w-px origin-top"
          style={{
            height: 48,
            background: 'var(--green)',
            animation: 'scaleY 1.8s ease-in-out infinite alternate',
          }}
        />
      </div>
    </section>
  );
}
