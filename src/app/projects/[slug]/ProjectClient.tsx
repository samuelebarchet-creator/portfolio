'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import type { Project } from '@/lib/projects';
import { AetherHero } from '@/components/ui/aether-hero';
import { ScrambleText } from '@/components/ui/scramble-text';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectClient({ project }: { project: Project }) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll('.reveal'),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 80%', once: true },
      }
    );
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <AetherHero
        height="70vh"
        overlayGradient="linear-gradient(180deg, rgba(10,10,8,0.5) 0%, rgba(10,10,8,0.2) 50%, rgba(10,10,8,0.85) 100%)"
        clearColor={[0.04, 0.04, 0.03, 1]}
      >
        <div className="flex flex-col justify-end h-full pb-16 px-8 md:px-14 max-w-6xl mx-auto w-full">
          {/* Back link */}
          <Link
            href="/#collaborazioni"
            className="flex items-center gap-2 text-gold-dim hover:text-gold transition-colors duration-300 font-condensed uppercase text-xs tracking-[0.3em] mb-8 w-fit"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All work
          </Link>

          <p
            className="font-condensed uppercase text-gold-dim text-xs tracking-[0.4em] mb-3"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            {project.year} · {project.tag}
          </p>

          <h1
            className="font-display font-black italic text-parchment leading-none"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(3rem, 7vw, 7rem)',
              letterSpacing: '-0.02em',
            }}
          >
            <ScrambleText text={project.company} />
          </h1>

          <p
            className="mt-3 font-condensed text-gold uppercase tracking-[0.25em] text-sm"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            {project.role}
          </p>
        </div>
      </AetherHero>

      {/* ── Content ── */}
      <div
        ref={contentRef}
        className="max-w-6xl mx-auto px-8 md:px-14 py-24 grid grid-cols-1 lg:grid-cols-3 gap-16"
      >
        {/* Description */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div className="reveal">
            <p
              className="font-condensed uppercase text-gold-dim text-xs tracking-[0.35em] mb-4"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Overview
            </p>
            <p
              className="text-text leading-relaxed text-lg"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              {project.fullDescription}
            </p>
          </div>

          {/* Decorative divider */}
          <div
            className="reveal w-full h-px"
            style={{ background: 'linear-gradient(90deg, rgba(200,169,110,0.4), transparent)' }}
          />

          {/* Short description callout */}
          <blockquote
            className="reveal border-l-2 border-gold pl-6"
            style={{ borderColor: project.color }}
          >
            <p
              className="font-display font-black italic text-parchment text-xl leading-snug"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              "{project.description}"
            </p>
          </blockquote>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-8">
          {/* Deliverables */}
          <div className="reveal">
            <p
              className="font-condensed uppercase text-gold-dim text-xs tracking-[0.35em] mb-5"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Deliverables
            </p>
            <ul className="flex flex-col gap-3">
              {project.deliverables.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-3 font-condensed text-text-dim text-sm tracking-wide"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  <span
                    className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                    style={{ background: project.color }}
                  />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* Meta */}
          <div
            className="reveal p-6 flex flex-col gap-4"
            style={{ border: '1px solid rgba(200,169,110,0.15)', background: 'rgba(200,169,110,0.03)' }}
          >
            {[
              { label: 'Year', value: project.year },
              { label: 'Role', value: project.role },
              { label: 'Sector', value: project.tag },
            ].map(({ label, value }) => (
              <div key={label}>
                <p
                  className="font-condensed uppercase text-gold-dim text-xs tracking-[0.3em] mb-1"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {label}
                </p>
                <p
                  className="font-condensed text-text text-sm tracking-wide"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Next project ── */}
      <div
        className="px-8 md:px-14 py-16 max-w-6xl mx-auto"
        style={{ borderTop: '1px solid rgba(200,169,110,0.12)' }}
      >
        <Link
          href="/#collaborazioni"
          className="group flex items-center justify-between hover:opacity-80 transition-opacity duration-300"
        >
          <span
            className="font-condensed uppercase text-gold-dim text-xs tracking-[0.4em]"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Back to all work
          </span>
          <span
            className="font-display font-black italic text-parchment group-hover:text-gold transition-colors duration-300"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
            }}
          >
            View all projects →
          </span>
        </Link>
      </div>
    </>
  );
}
