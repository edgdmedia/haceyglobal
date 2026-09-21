import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { products } from '@/lib/content';
import { DetailPage } from '@/components/site/detail-page';

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const item = products.find(x => x.slug === slug); return item ? { title: item.title, description: item.summary, openGraph: { images: [] }, twitter: { images: [] } } : {}; }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const item = products.find(x => x.slug === slug); if (!item) notFound(); return <main><DetailPage item={item} type="Product concept" /></main>; }
