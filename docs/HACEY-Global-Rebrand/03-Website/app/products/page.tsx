import type { Metadata } from 'next';
import { PageHero } from '@/components/site/page-hero';
import { CardGrid } from '@/components/site/card-grid';
import { products } from '@/lib/content';

export const metadata: Metadata = { title: 'Products and Accelerators', description: 'Representative digital product and accelerator concepts from HACEY Global.' };
export default function Page() { return <main><PageHero eyebrow="Products and accelerators" title="Reusable foundations, adapted to the operating environment." summary="These concepts demonstrate how HACEY Global can combine repeatable components with client-specific service, data, integration and governance needs. They are representative concepts, not claims of market deployment." /><CardGrid items={products} base="/products" /></main>; }
