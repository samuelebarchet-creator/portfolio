import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getPost, thinkingPosts } from '@/lib/thinking';
import Contact from '@/components/Contact';

export async function generateStaticParams() {
  return thinkingPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `https://www.samuelebarchet.com/thinking/${slug}`;
  const ogImage = post.heroImage ?? '/about/samuele.jpg';
  return {
    title: `${post.title} — Samuele Barchet`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: 'article',
      publishedTime: post.date,
      authors: ['Samuele Barchet'],
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: { card: 'summary_large_image', images: [ogImage] },
  };
}

const ArrowLeft = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  // Order: bold-link first (most specific), then bold, then italic, then plain link
  const tokens = text.split(/(\*\*\[[^\]]+\]\([^)]+\)\*\*|\*\*.*?\*\*|\*[^*\n]+\*|\[[^\]]+\]\([^)]+\))/g);
  return tokens.map((token, j) => {
    const boldLink = token.match(/^\*\*\[([^\]]+)\]\(([^)]+)\)\*\*$/);
    if (boldLink) return <Link key={`${keyPrefix}-${j}`} href={boldLink[2]} className="font-semibold text-green underline underline-offset-2 hover:no-underline">{boldLink[1]}</Link>;
    const bold = token.match(/^\*\*(.*)\*\*$/);
    if (bold) return <strong key={`${keyPrefix}-${j}`} className="font-semibold text-ink">{bold[1]}</strong>;
    const italic = token.match(/^\*([^*\n]+)\*$/);
    if (italic) return <em key={`${keyPrefix}-${j}`}>{italic[1]}</em>;
    const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) return <Link key={`${keyPrefix}-${j}`} href={link[2]} className="text-green underline underline-offset-2 hover:no-underline">{link[1]}</Link>;
    return token;
  });
}

function renderContent(content: string) {
  return content.split('\n\n').map((block, i) => {
    if (block.startsWith('## ')) {
      return (
        <h2
          key={i}
          className="font-display font-black italic text-ink leading-tight mt-12 mb-4"
          style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', letterSpacing: '-0.02em' }}
        >
          {block.slice(3)}
        </h2>
      );
    }
    return (
      <p
        key={i}
        className="text-ink-dim leading-[1.8]"
        style={{ fontFamily: 'var(--font-barlow)', fontSize: 'clamp(1rem, 1.2vw, 1.1rem)' }}
      >
        {renderInline(block, String(i))}
      </p>
    );
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default async function ThinkingPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `https://www.samuelebarchet.com/thinking/${slug}`;
  const ldJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': url,
        url,
        headline: post.title,
        description: post.excerpt,
        image: post.heroImage ? `https://www.samuelebarchet.com${post.heroImage}` : 'https://www.samuelebarchet.com/about/samuele.jpg',
        datePublished: post.date,
        dateModified: post.date,
        author: { '@type': 'Person', '@id': 'https://www.samuelebarchet.com/#person', name: 'Samuele Barchet' },
        publisher: { '@type': 'Person', '@id': 'https://www.samuelebarchet.com/#person' },
        mainEntityOfPage: url,
        keywords: post.category,
        inLanguage: 'it-IT',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.samuelebarchet.com' },
          { '@type': 'ListItem', position: 2, name: 'Thinking', item: 'https://www.samuelebarchet.com/thinking' },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <div
        className="w-full pt-28 pb-20 px-8 md:px-20 relative overflow-hidden"
        style={{ background: 'var(--ink)' }}
      >
        {post.heroImage && (
          <>
            <Image
              src={post.heroImageMobile ?? post.heroImage}
              alt=""
              fill
              aria-hidden
              className="object-cover object-center md:hidden"
              sizes="100vw"
              priority
            />
            <Image
              src={post.heroImage}
              alt=""
              fill
              aria-hidden
              className="object-cover object-center hidden md:block"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(8,13,8,0.55) 0%, rgba(8,13,8,0.72) 100%)' }} />
          </>
        )}
        <div className="max-w-3xl mx-auto relative z-10">
          <Link
            href="/thinking"
            className="inline-flex items-center gap-2 text-bg/50 hover:text-bg transition-colors duration-300 font-condensed uppercase text-xs tracking-[0.3em] mb-12"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            <ArrowLeft />
            Tutti gli articoli
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span
              className="font-condensed uppercase text-xs tracking-[0.4em]"
              style={{ color: 'var(--green)', fontFamily: 'var(--font-barlow-condensed)' }}
            >
              {post.category}
            </span>
            <span className="w-px h-3 bg-bg/20" aria-hidden />
            <span
              className="font-condensed uppercase text-bg/50 text-xs tracking-[0.35em]"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              {formatDate(post.date)}
            </span>
            <span className="w-px h-3 bg-bg/20" aria-hidden />
            <span
              className="font-condensed uppercase text-bg/50 text-xs tracking-[0.35em]"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              {post.readTime} di lettura
            </span>
          </div>

          <h1
            className="font-display font-black italic text-bg leading-[0.9]"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2.8rem, 7vw, 6rem)',
              letterSpacing: '-0.03em',
            }}
          >
            {post.title}
          </h1>

          <p
            className="mt-6 text-bg/60 leading-relaxed max-w-xl"
            style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' }}
          >
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* ── Article body ───────────────────────────────────────────────────── */}
      <main>
        <article
          className="max-w-3xl mx-auto px-8 md:px-20 py-20 flex flex-col gap-6"
          style={{ borderTop: '1px solid rgba(61,92,53,0.1)' }}
        >
          {renderContent(post.content)}
        </article>

        {/* ── Author strip ─────────────────────────────────────────────────── */}
        <div
          className="max-w-3xl mx-auto px-8 md:px-20 py-10 flex items-center gap-5"
          style={{ borderTop: '1px solid rgba(61,92,53,0.1)' }}
        >
          <div
            className="relative w-12 h-12 rounded-full overflow-hidden shrink-0"
            style={{ border: '1px solid rgba(61,92,53,0.15)' }}
          >
            <Image src="/about/samuele.jpg" alt="Samuele Barchet" fill className="object-cover object-top" sizes="48px" />
          </div>
          <div>
            <p
              className="font-condensed uppercase text-ink text-xs tracking-[0.3em]"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Samuele Barchet
            </p>
            <p
              className="font-condensed text-ink-faint text-xs tracking-wide"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Brand &amp; Digital Strategist
            </p>
          </div>
          <Link
            href="/about"
            className="ml-auto font-condensed uppercase text-ink-faint text-xs tracking-[0.25em] hover:text-green transition-colors duration-300"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Chi sono →
          </Link>
        </div>

        {/* ── Other articles ───────────────────────────────────────────────── */}
        <div
          className="max-w-3xl mx-auto px-8 md:px-20 py-12"
          style={{ borderTop: '1px solid rgba(61,92,53,0.1)' }}
        >
          <p
            className="font-condensed uppercase text-xs tracking-[0.45em] mb-8"
            style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange)', fontWeight: 'bold' }}
          >
            Altri articoli
          </p>
          <div className="flex flex-col gap-4">
            {thinkingPosts
              .filter((p) => p.slug !== slug)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/thinking/${p.slug}`}
                  className="group flex items-start justify-between gap-6 py-4"
                  style={{ borderBottom: '1px solid rgba(61,92,53,0.08)' }}
                >
                  <div>
                    <p
                      className="font-condensed uppercase text-xs tracking-[0.3em] mb-1"
                      style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange)', fontWeight: 'bold' }}
                    >
                      {p.category}
                    </p>
                    <p
                      className="text-ink group-hover:text-green transition-colors duration-300 leading-snug"
                      style={{ fontFamily: 'var(--font-barlow)', fontSize: '1rem' }}
                    >
                      {p.title}
                    </p>
                  </div>
                  <span
                    className="font-condensed text-ink-faint text-xs tracking-[0.2em] shrink-0 mt-1 group-hover:text-green transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                  >
                    {p.readTime} →
                  </span>
                </Link>
              ))}
          </div>
        </div>

        <Contact />
      </main>
    </>
  );
}
