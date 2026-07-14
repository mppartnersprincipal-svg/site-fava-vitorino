import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';
import { SITE } from '@/content/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE.url}/sobre`, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE.url}/revisional-bancaria-pf`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/revisional-bancaria-pj`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/blog`, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${SITE.url}/contato`, changeFrequency: 'yearly', priority: 0.8 },
  ];

  const posts: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: p.date,
    changeFrequency: 'yearly',
    priority: 0.5,
  }));

  return [...staticRoutes, ...posts];
}
