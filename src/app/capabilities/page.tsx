import type { Metadata } from 'next';
import { PageHero } from '@/components/site/page-hero';
import { CardGrid } from '@/components/site/card-grid';
import { capabilities } from '@/lib/content';

export const metadata: Metadata = { title: 'Capabilities', description: 'Strategy, AI, cloud, enterprise platforms, product engineering, programme delivery, change and capability development.' };
export default function Page() { return <main><PageHero eyebrow="Capabilities" title="Disciplines that work together around the outcome." summary="We assemble the right mix of strategy, technology, programme delivery, operational change and capability development for the challenge." /><CardGrid items={capabilities} base="/capabilities" /></main>; }
