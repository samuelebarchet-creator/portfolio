import { thinkingPosts } from '@/lib/thinking';

const BASE = 'https://www.samuelebarchet.com';

export async function GET() {
  const items = thinkingPosts
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((p) => {
      const url = `${BASE}/thinking/${p.slug}`;
      const pubDate = new Date(p.date).toUTCString();
      return `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${p.excerpt}]]></description>
      <pubDate>${pubDate}</pubDate>
      <category><![CDATA[${p.category}]]></category>
      <author>info@samuelebarchet.com (Samuele Barchet)</author>
    </item>`;
    })
    .join('');

  const lastBuildDate = new Date(thinkingPosts[0]?.date ?? Date.now()).toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Thinking — Samuele Barchet</title>
    <link>${BASE}/thinking</link>
    <description>Riflessioni su brand strategy, digital marketing e AI. Di Samuele Barchet, Brand &amp; Digital Strategist freelance.</description>
    <language>it</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml"/>
    <managingEditor>info@samuelebarchet.com (Samuele Barchet)</managingEditor>
    <webMaster>info@samuelebarchet.com (Samuele Barchet)</webMaster>
    <image>
      <url>${BASE}/logo-boat.png</url>
      <title>Samuele Barchet</title>
      <link>${BASE}</link>
    </image>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
