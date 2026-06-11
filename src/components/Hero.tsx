'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { HandWrittenTitle } from '@/components/ui/hand-writing-text';

const PARTICLE_COUNT = 2200;
const SPREAD = 18;

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  /* ── Three.js particle scene ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 10;

    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * SPREAD;
      positions[i * 3 + 1] = (Math.random() - 0.5) * SPREAD;
      positions[i * 3 + 2] = (Math.random() - 0.5) * SPREAD;
      sizes[i] = Math.random() * 2 + 0.5;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        uColor: { value: new THREE.Color('#C8A96E') },
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
      },
      vertexShader: `
        attribute float size;
        uniform float uTime;
        uniform vec2 uMouse;
        varying float vAlpha;
        void main() {
          vec3 pos = position;
          float dist = length(pos.xy - uMouse * 8.0);
          float repulse = smoothstep(3.0, 0.0, dist) * 0.6;
          pos.z += repulse;
          pos.x += sin(uTime * 0.3 + position.y * 0.5) * 0.08;
          pos.y += cos(uTime * 0.25 + position.x * 0.5) * 0.08;
          vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (14.0 / -mvPos.z);
          gl_Position = projectionMatrix * mvPos;
          vAlpha = 0.35 + 0.3 * sin(uTime * 0.5 + position.z);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        varying float vAlpha;
        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          float alpha = (1.0 - d * 2.0) * vAlpha;
          gl_FragColor = vec4(uColor, alpha);
        }
      `,
    });

    const points = new THREE.Points(geo, mat);
    scene.add(points);

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    let raf: number;
    const clock = new THREE.Clock();

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const elapsed = clock.getElapsedTime();
      mat.uniforms.uTime.value = elapsed;
      mat.uniforms.uMouse.value.lerp(
        new THREE.Vector2(mouse.current.x, mouse.current.y),
        0.05
      );
      points.rotation.y = elapsed * 0.015;
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
    };
  }, []);

  /* ── Subtitle + CTA fade-in ── */
  useEffect(() => {
    gsap.set([subtitleRef.current, ctaRef.current], { y: 20, opacity: 0 });
    gsap.to([subtitleRef.current, ctaRef.current], {
      y: 0,
      opacity: 1,
      duration: 0.9,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 2.2,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Three.js canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, #0A0A08 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full">
        <p
          className="mb-2 text-gold-dim uppercase tracking-[0.4em] text-xs font-condensed"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Creative Developer
        </p>

        {/* HandWrittenTitle — draws gold oval + animates name */}
        <HandWrittenTitle
          title="Samuele Barchet"
          subtitle="Brand identity · Digital experience · Interactive worlds"
        />

        <a
          ref={ctaRef}
          href="#collaborazioni"
          className="mt-4 inline-block px-8 py-3 border border-gold text-gold font-condensed uppercase text-sm tracking-[0.25em] hover:bg-gold hover:text-bg transition-colors duration-300"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          View Work
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span
          className="text-gold font-condensed uppercase text-xs tracking-[0.3em]"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Scroll
        </span>
        <div className="w-px h-12 bg-gold origin-top animate-[scaleY_1.6s_ease-in-out_infinite_alternate]" />
      </div>
    </section>
  );
}
