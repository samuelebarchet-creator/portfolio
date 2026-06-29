import { ImageResponse } from 'next/og';
import { getPost, thinkingPosts } from '@/lib/thinking';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export async function generateStaticParams() {
  return thinkingPosts.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return new Response('Not found', { status: 404 });

  const titleFontSize = post.title.length > 60 ? 48 : 58;

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#080D08', position: 'relative' }}>
        {/* Top accent bar */}
        <div style={{ display: 'flex', width: '100%', height: '6px', background: '#D4713A' }} />

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '56px 72px', justifyContent: 'space-between' }}>

          {/* Category */}
          <div style={{ display: 'flex', color: '#D4713A', fontSize: '15px', fontFamily: 'sans-serif', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 700 }}>
            {post.category}
          </div>

          {/* Title */}
          <div style={{ display: 'flex', color: '#F5F0E8', fontSize: `${titleFontSize}px`, fontFamily: 'serif', fontStyle: 'italic', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.02em', maxWidth: '900px' }}>
            {post.title}
          </div>

          {/* Bottom row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', color: '#F5F0E8', fontSize: '18px', fontFamily: 'sans-serif', fontWeight: 700, letterSpacing: '0.05em' }}>
                Samuele Barchet
              </div>
              <div style={{ display: 'flex', color: '#F5F0E8', opacity: 0.4, fontSize: '14px', fontFamily: 'sans-serif', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                {post.readTime} di lettura
              </div>
            </div>
            <div style={{ display: 'flex', color: '#3D5C35', fontSize: '15px', fontFamily: 'sans-serif', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.8 }}>
              samuelebarchet.com
            </div>
          </div>
        </div>

        {/* Right accent bar */}
        <div style={{ display: 'flex', position: 'absolute', right: 0, top: '6px', bottom: 0, width: '4px', background: '#3D5C35' }} />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
