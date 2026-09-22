import type { Metadata } from 'next';
import { PageHero } from '@/components/site/page-hero';
import { CardGrid } from '@/components/site/card-grid';
import { solutions } from '@/lib/content';

export const metadata: Metadata = { title: 'Solutions', description: 'Solutions organised around the business and operational problems organisations need to solve.' };
export default function Page() { return <main><PageHero eyebrow="Solutions" title="Begin with the problem. Design the complete response." summary="Our solutions connect business decisions, workflow, technology, delivery and adoption so progress does not stop at recommendation or go-live." /><CardGrid items={solutions} base="/solutions" /></main>; }
