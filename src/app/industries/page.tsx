import type { Metadata } from 'next';
import { PageHero } from '@/components/site/page-hero';
import { CardGrid } from '@/components/site/card-grid';
import { industries } from '@/lib/content';

export const metadata: Metadata = { title: 'Industries', description: 'Practical transformation for healthcare, financial services, government, technology, agriculture, education and social impact.' };
export default function Page() { return <main><PageHero eyebrow="Industries" title="Industry context changes what a good solution looks like." summary="We bring cross-sector technology and transformation capability into environments with different users, risks, regulations and operating realities." /><CardGrid items={industries} base="/industries" /></main>; }
