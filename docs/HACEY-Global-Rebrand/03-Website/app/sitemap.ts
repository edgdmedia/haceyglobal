import type { MetadataRoute } from 'next';
import { capabilities, solutions, industries, products, articles } from '@/lib/content';
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = 'https://haceyglobal.com';
  const staticPaths = ['', '/about', '/approach', '/capabilities', '/solutions', '/industries', '/products', '/technology', '/work', '/insights', '/contact', '/privacy', '/cookies', '/terms', '/accessibility', '/responsible-ai', '/security'];
  const paths = [...staticPaths, ...capabilities.map(x => `/capabilities/${x.slug}`), ...solutions.map(x => `/solutions/${x.slug}`), ...industries.map(x => `/industries/${x.slug}`), ...products.map(x => `/products/${x.slug}`), ...articles.map(x => `/insights/${x.slug}`)];
  return paths.map(path => ({ url: `${origin}${path}`, lastModified: new Date('2026-09-19'), changeFrequency: path.startsWith('/insights') ? 'monthly' : 'quarterly', priority: path === '' ? 1 : path.split('/').length === 2 ? .8 : .65 }));
}
