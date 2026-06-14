'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/lib/projects';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import Contact from '@/components/Contact';

/* Parse **bold** markers and break at sentence boundaries */
function renderText(text: string) {
  return text.split(/(?<=\.)\s+/).flatMap((sentence, si, arr) => {
    const parts = sentence.split(/\*\*(.*?)\*\*/g).map((part, pi) =>
      pi % 2 === 1
        ? <strong key={`${si}-${pi}`} className="font-semibold text-ink">{part}</strong>
        : part
    );
    return si < arr.length - 1 ? [...parts, <br key={`br-${si}`} />] : parts;
  });
}

const IconWeb = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M8 1.5C8 1.5 10.5 4.5 10.5 8s-2.5 6.5-2.5 6.5M8 1.5C8 1.5 5.5 4.5 5.5 8s2.5 6.5 2.5 6.5M1.5 8h13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);
const IconIG = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <rect x="1.5" y="1.5" width="13" height="13" rx="3.5" stroke="currentColor" strokeWidth="1.3"/>
    <circle cx="8" cy="8" r="2.8" stroke="currentColor" strokeWidth="1.3"/>
    <circle cx="11.8" cy="4.2" r="0.7" fill="currentColor"/>
  </svg>
);
const IconFB = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M13.5 8a5.5 5.5 0 1 0-6.375 5.438V10H5.5V8h1.625V6.625C7.125 5.012 8.075 4.125 9.538 4.125c.7 0 1.462.125 1.462.125V5.75h-.825c-.813 0-1.05.503-1.05 1.019V8H11l-.281 2H9.125v3.438A5.502 5.502 0 0 0 13.5 8Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round"/>
  </svg>
);

gsap.registerPlugin(ScrollTrigger);

/* Arrow left icon */
const ArrowLeft = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ProjectClient({ project }: { project: Project }) {
  const heroRef    = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  /* Hero text entrance */
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(hero.querySelector('.hero-tag'),  { y: -12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.2)
      .fromTo(hero.querySelector('.hero-name'), { y: 60,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.85 }, 0.35)
      .fromTo(hero.querySelector('.hero-role'), { y: 16,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.65);
  }, []);

  /* Content scroll reveals */
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll('.reveal'),
      { y: 36, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.75, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 80%', once: true },
      }
    );
  }, []);

  /* Results cards stagger */
  useEffect(() => {
    const el = resultsRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll('.result-card'),
      { y: 32, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 82%', once: true },
      }
    );
  }, []);

  return (
    <>
      {/* ══ HERO — dark, editorial ══════════════════════════════════════════ */}
      <div
        ref={heroRef}
        className="relative w-full pt-28 pb-20 px-8 md:px-20 overflow-hidden"
        style={{ background: 'var(--ink)' }}
      >
        {/* Accent blob */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-10 pointer-events-none"
          style={{ background: project.color }}
          aria-hidden
        />

        <div className="max-w-6xl mx-auto">
          {/* Back */}
          <Link
            href="/lavori"
            className="hero-tag inline-flex items-center gap-2 text-bg/50 hover:text-bg transition-colors duration-300 font-condensed uppercase text-xs tracking-[0.3em] mb-12 opacity-0"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            <ArrowLeft />
            Tutti i progetti
          </Link>

          {/* Meta row */}
          <div className="hero-tag flex flex-wrap items-center gap-4 mb-6 opacity-0">
            <span
              className="font-condensed uppercase text-xs tracking-[0.4em]"
              style={{ color: project.color, fontFamily: 'var(--font-barlow-condensed)' }}
            >
              {project.year}
            </span>
            <span className="w-px h-3 bg-bg/20" aria-hidden />
            <span
              className="font-condensed uppercase text-bg/50 text-xs tracking-[0.35em]"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              {project.tag}
            </span>
          </div>

          {/* Company name */}
          <h1
            className="hero-name font-display font-black italic text-bg leading-[0.88] opacity-0"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(4rem, 10vw, 11rem)',
              letterSpacing: '-0.03em',
            }}
          >
            {project.company}
          </h1>

          {/* Role */}
          <p
            className="hero-role mt-6 font-condensed uppercase tracking-[0.3em] text-sm opacity-0"
            style={{ color: project.color, fontFamily: 'var(--font-barlow-condensed)' }}
          >
            {project.role}
          </p>
        </div>
      </div>

      {/* ══ CONTEXT STRIP ═══════════════════════════════════════════════════ */}
      <div
        className="w-full px-8 md:px-20 py-5 bg-bg-alt"
        style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}
      >
        <div className="max-w-6xl mx-auto flex flex-wrap gap-x-10 gap-y-3">
          {[
            { k: 'Anno',    v: project.year },
            { k: 'Settore', v: project.tag },
            { k: 'Ruolo',   v: project.role },
          ].map(({ k, v }) => (
            <div key={k} className="flex items-center gap-3">
              <span
                className="font-condensed uppercase text-ink-faint text-xs tracking-[0.35em]"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                {k}
              </span>
              <span className="w-px h-3 bg-ink/10" aria-hidden />
              <span
                className="font-condensed text-ink-dim text-sm tracking-wide"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                {v}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ══ IMAGE STRIP ═════════════════════════════════════════════════════ */}
      {project.images && project.images.length > 0 && (
        <div
          className="w-full overflow-x-auto"
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}
        >
          <div className="flex gap-3 px-8 md:px-20 py-12" style={{ width: 'max-content' }}>
            {project.images.map(({ src, alt, width, height }, i) => (
              <div key={i} className="relative shrink-0 overflow-hidden" style={{ height: '58vh' }}>
                <Image
                  src={src}
                  alt={alt ?? ''}
                  width={width}
                  height={height}
                  sizes="(max-width: 768px) 90vw, 45vw"
                  priority={i === 0}
                  style={{ height: '100%', width: 'auto', display: 'block', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ══ MAIN CONTENT ════════════════════════════════════════════════════ */}
      <div
        ref={contentRef}
        className="max-w-6xl mx-auto px-8 md:px-20 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16"
      >
        {/* Left — overview */}
        <div className="lg:col-span-2 flex flex-col gap-10">
          <div className="reveal">
            <p
              className="font-condensed uppercase text-green text-xs tracking-[0.4em] mb-4"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Overview
            </p>
            <p
              className="text-ink leading-relaxed"
              style={{ fontFamily: 'var(--font-barlow)', fontSize: 'clamp(1rem, 1.2vw, 1.15rem)' }}
            >
              {renderText(project.fullDescription)}
            </p>
          </div>

          {/* Pull quote */}
          <blockquote
            className="reveal pl-5 border-l-2"
            style={{ borderColor: project.color }}
          >
            <p
              className="font-display font-black italic text-ink leading-snug"
              style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.2rem, 2vw, 1.6rem)' }}
            >
              "{project.description}"
            </p>
          </blockquote>
        </div>

        {/* Right — sticky sidebar */}
        <div className="flex flex-col gap-8 lg:sticky lg:top-24 lg:self-start">
          {/* Deliverables */}
          <div
            className="reveal p-6"
            style={{ background: 'var(--bg-alt)', border: '1px solid rgba(61,92,53,0.1)' }}
          >
            <p
              className="font-condensed uppercase text-green text-xs tracking-[0.4em] mb-5"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Deliverables
            </p>
            <ul className="flex flex-col gap-3">
              {project.deliverables.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-3 font-condensed text-ink-dim tracking-wide leading-snug"
                  style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.95rem' }}
                >
                  <span
                    className="mt-[5px] w-1 h-1 rounded-full shrink-0"
                    style={{ background: project.color }}
                  />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          {project.links && (
            <div
              className="reveal p-6"
              style={{ background: 'var(--bg-alt)', border: '1px solid rgba(61,92,53,0.1)' }}
            >
              <p
                className="font-condensed uppercase text-green text-xs tracking-[0.4em] mb-5"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Visita il progetto
              </p>
              <div className="flex flex-col gap-3">
                {project.links.website && (
                  <a
                    href={project.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 font-condensed text-ink-dim tracking-wide hover:text-ink transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.95rem' }}
                  >
                    <span style={{ color: project.color }}><IconWeb /></span>
                    Sito web
                  </a>
                )}
                {project.links.instagram && (
                  <a
                    href={project.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 font-condensed text-ink-dim tracking-wide hover:text-ink transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.95rem' }}
                  >
                    <span style={{ color: project.color }}><IconIG /></span>
                    Instagram
                  </a>
                )}
                {project.links.facebook && (
                  <a
                    href={project.links.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 font-condensed text-ink-dim tracking-wide hover:text-ink transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.95rem' }}
                  >
                    <span style={{ color: project.color }}><IconFB /></span>
                    Facebook
                  </a>
                )}
                {project.links.extra?.map(({ label, url }) => (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 font-condensed text-ink-dim tracking-wide hover:text-ink transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.95rem' }}
                  >
                    <span style={{ color: project.color }}><IconWeb /></span>
                    {label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ══ RESULTS ═════════════════════════════════════════════════════════ */}
      {project.results && project.results.length > 0 && (
        <div
          className="w-full px-8 md:px-20 py-20"
          style={{ background: 'var(--bg-alt)', borderTop: '1px solid rgba(61,92,53,0.1)' }}
        >
          <div className="max-w-6xl mx-auto">
            <p
              className="font-condensed uppercase text-green text-xs tracking-[0.45em] mb-10"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Risultati
            </p>
            <div
              ref={resultsRef}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {project.results.map((r) => (
                <div
                  key={r}
                  className="result-card p-6 bg-bg flex flex-col gap-3"
                  style={{ border: `1px solid ${project.color}22` }}
                >
                  <span
                    className="w-6 h-px"
                    style={{ background: project.color }}
                    aria-hidden
                  />
                  <p
                    className="font-condensed text-ink leading-snug"
                    style={{
                      fontFamily: 'var(--font-barlow-condensed)',
                      fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {r}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ══ CONTACT ═════════════════════════════════════════════════════════ */}
      <Contact />
    </>
  );
}
