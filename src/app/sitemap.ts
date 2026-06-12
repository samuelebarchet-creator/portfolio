import { MetadataRoute } from 'next';
import { projects } from '@/lib/projects';

const BASE = 'https://www.samuelebarchet.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects.map((p) => ({
    url: `${BASE}/projects/${p.slug}`,
    lastModified: new Date('2026-06-12'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    { url: BASE,                    lastModified: new Date('2026-06-12'), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/about`,         lastModified: new Date('2026-06-12'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/servizi`,       lastModified: new Date('2026-06-12'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/lavori`,        lastModified: new Date('2026-06-12'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/contatti`,      lastModified: new Date('2026-06-12'), changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${BASE}/thinking`,      lastModified: new Date('2026-06-12'), changeFrequency: 'weekly',  priority: 0.6 },
    ...projectUrls,
  ];
}
