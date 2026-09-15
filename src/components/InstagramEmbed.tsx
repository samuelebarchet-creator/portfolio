'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const EMBED_JS = 'https://www.instagram.com/embed.js';

/* Instagram replaces the blockquote with an iframe in-place, so the markup is
   injected via innerHTML rather than rendered by React: keeps React's DOM tree
   out of the way when embed.js swaps nodes (and on unmount). */
function blockquoteHtml(url: string, caption: string) {
  const safeUrl = url.replace(/"/g, '&quot;');
  const safeCaption = caption.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  return (
    `<blockquote class="instagram-media" data-instgrm-permalink="${safeUrl}" data-instgrm-version="14" ` +
    `style="background:#fff;border:0;margin:0;padding:0;width:100%;min-width:0;max-width:540px;">` +
    `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${safeCaption}</a>` +
    `</blockquote>`
  );
}

export default function InstagramEmbed({ url, caption }: { url: string; caption: string }) {
  /* Script is already on the page when navigating client-side between projects:
     next/script won't fire onLoad again, so re-process on mount. */
  useEffect(() => {
    window.instgrm?.Embeds.process();
  }, [url]);

  return (
    <figure
      className="relative w-full m-0"
      /* Placeholder height while the iframe loads — avoids CLS */
      style={{ minHeight: 'min(80vh, 640px)', background: 'rgba(61,92,53,0.04)' }}
      aria-label={caption}
    >
      <div dangerouslySetInnerHTML={{ __html: blockquoteHtml(url, caption) }} />
      <figcaption className="sr-only">{caption}</figcaption>
      {/* Same `id`/`src` across instances → next/script loads it once per page */}
      <Script
        id="instagram-embed-js"
        src={EMBED_JS}
        strategy="lazyOnload"
        onLoad={() => window.instgrm?.Embeds.process()}
      />
    </figure>
  );
}
