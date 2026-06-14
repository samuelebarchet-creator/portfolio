import { MetadataRoute } from 'next';
import { projects } from '@/lib/projects';
import { thinkingPosts } from '@/lib/thinking';

const BASE = 'https://www.samuelebarchet.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects.map((p) => ({
    url: `${BASE}/projects/${p.slug}`,
    lastModified: new Date('2026-06-12'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const thinkingUrls = thinkingPosts.map((p) => ({
    url: `${BASE}/thinking/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'yearly' as const,
    priority: 0.65,
  }));

  return [
    { url: BASE,                    lastModified: new Date('2026-06-12'), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/about`,         lastModified: new Date('2026-06-12'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/servizi`,       lastModified: new Date('2026-06-12'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/lavori`,        lastModified: new Date('2026-06-12'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/contatti`,      lastModified: new Date('2026-06-12'), changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${BASE}/thinking`,      lastModified: new Date('2026-06-12'), changeFrequency: 'weekly',  priority: 0.6 },
    ...projectUrls,
    ...thinkingUrls,
  ];
}
