'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { thinkingPosts } from '@/lib/thinking';
import { formatDate } from '@/lib/utils';
import Ornament from '@/components/Ornament';
import { WarpShadow } from '@/components/ui/warp-shadow';

const ALL = 'Tutti';
const categories = [ALL, ...Array.from(new Set(thinkingPosts.map((p) => p.category)))];

export default function ThinkingGrid({ preview = false }: { preview?: boolean } = {}) {
  const [activeCategory, setActiveCategory] = useState(ALL);
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);

  const filtered = preview
    ? thinkingPosts.slice(0, 4)
    : activeCategory === ALL
      ? thinkingPosts
      : thinkingPosts.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      grid.children,
      { y: 36, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: grid, start: 'top 82%', once: true },
      }
    );
  }, []);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || preview) return;
    gsap.fromTo(grid.children, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.35, stagger: 0.06, ease: 'power2.out' });
  }, [activeCategory, preview]);

  return (
    <section
      ref={sectionRef}
      id="thinking"
      className="w-full py-28 px-8 md:px-20 relative overflow-hidden"
      style={{ borderTop: '1px solid rgba(61,92,53,0.1)', background: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto relative" style={{ zIndex: 1 }}>
        <Ornament index="04" label="Thinking" className="mb-6" />

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <h2
            className="font-display font-black italic text-ink leading-tight"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            }}
          >
            Idee, riflessioni,<br />cose che ho imparato
          </h2>
          <p
            className="max-w-xs text-ink-dim text-sm leading-relaxed"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Brand, digital, strategia. Quello che penso quando smetto di lavorare.
          </p>
        </div>

        {/* Category filter — only on full page */}
        {!preview && (
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="font-condensed uppercase text-xs tracking-[0.3em] px-4 py-2 transition-all duration-200"
                style={{
                  fontFamily: 'var(--font-barlow-condensed)',
                  fontWeight: 700,
                  border: '1px solid',
                  borderColor: activeCategory === cat ? 'var(--green)' : 'rgba(61,92,53,0.2)',
                  color: activeCategory === cat ? 'var(--bg)' : 'var(--ink-dim)',
                  background: activeCategory === cat ? 'var(--green)' : 'transparent',
                  cursor: 'pointer',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-green/10"
        >
          {filtered.map((post, i) => (
            <Link
              key={post.slug}
              href={`/thinking/${post.slug}`}
              className="group bg-bg p-8 md:p-10 flex flex-col gap-4 hover:bg-bg-alt transition-colors duration-300 relative overflow-hidden"
            >
              {/* Category + meta */}
              <div className="flex items-center justify-between">
                <span
                  className="font-condensed uppercase text-xs tracking-[0.35em]"
                  style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange)', fontWeight: 'bold' }}
                >
                  {post.category}
                </span>
                <div className="flex items-center gap-3">
                  <span
                    className="font-condensed text-ink-faint text-xs tracking-[0.15em]"
                    style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                  >
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Index */}
              <span
                className="absolute top-6 right-8 font-display font-black italic text-green/10 select-none pointer-events-none"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(4rem, 6vw, 6rem)',
                  lineHeight: 1,
                }}
                aria-hidden
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Title */}
              <h3
                className="font-display font-black italic text-ink leading-tight group-hover:text-green transition-colors duration-300 pr-12"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.3rem, 2vw, 1.7rem)',
                }}
              >
                {post.title}
              </h3>

              {/* Excerpt */}
              <p
                className="text-ink-dim text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-barlow)' }}
              >
                {post.excerpt}
              </p>

              {/* Footer */}
              <div
                className="flex items-center justify-between mt-auto pt-4"
                style={{ borderTop: '1px solid rgba(61,92,53,0.08)' }}
              >
                <span
                  className="font-condensed text-ink-faint text-xs tracking-[0.2em]"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {formatDate(post.date)}
                </span>
                <span
                  className="font-condensed text-green text-xs tracking-[0.25em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  Leggi →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {preview && (
        <div className="max-w-6xl mx-auto mt-6 relative" style={{ zIndex: 1 }}>
          <Link
            href="/thinking"
            className="group flex items-center justify-between gap-6 px-8 md:px-12 py-8 md:py-10 transition-colors duration-300 hover:bg-bg-alt"
            style={{ border: '1px solid rgba(61,92,53,0.25)', background: 'var(--bg)' }}
          >
            <span
              className="font-display font-black italic text-ink group-hover:text-green transition-colors duration-300"
              style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 3vw, 2.4rem)' }}
            >
              Vedi tutti gli articoli
            </span>
            <span
              className="font-condensed uppercase text-xs tracking-[0.3em] shrink-0"
              style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange)', fontWeight: 'bold' }}
            >
              Scopri →
            </span>
          </Link>
        </div>
      )}
    </section>
  );
}
