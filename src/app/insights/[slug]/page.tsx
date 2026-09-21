import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { articles } from '@/lib/content';

const sourceLinks: Record<string, { label: string; url: string }[]> = {
  'enterprise-ai-readiness': [{ label: 'NIST AI Risk Management Framework', url: 'https://www.nist.gov/itl/ai-risk-management-framework' }],
  'from-ai-pilot-to-operations': [{ label: 'NIST Generative AI Profile', url: 'https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence' }],
  'digital-transformation-beyond-technology': [{ label: 'Digital.gov human-centred design guidance', url: 'https://digital.gov/topics/human-centered-design/' }],
  'process-improvement-before-automation': [{ label: 'Digital.gov design for humans guidance', url: 'https://digital.gov/guides/hcd/design-concepts/design-for-humans' }],
  'healthcare-interoperability-practical': [{ label: 'ASTP/ONC standards and technology', url: 'https://healthit.gov/standards-and-technology/' }, { label: 'Federal FHIR introduction', url: 'https://isp.healthit.gov/fhir-introduction-0' }],
};

export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const item = articles.find(x => x.slug === slug); return item ? { title: item.title, description: item.dek, openGraph: { title: item.title, description: item.dek, images: [] }, twitter: { card: 'summary', title: item.title, description: item.dek, images: [] } } : {}; }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const article = articles.find(x => x.slug === slug); if (!article) notFound(); const sources = sourceLinks[slug] || []; return <main>
  <article className="article-shell">
    <Link className="article-back" href="/insights"><ArrowLeft /> All insights</Link>
    <header className="article-header"><p className="eyebrow">{article.category} · {article.readingTime}</p><h1>{article.title}</h1><p className="lede">{article.dek}</p><div className="article-meta">HACEY Global Editorial Team · September 2026</div></header>
    <div className="article-body">{article.sections.map(section => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((p, i) => <p key={i}>{p}</p>)}{section.bullets && <ul>{section.bullets.map(x => <li key={x}>{x}</li>)}</ul>}</section>)}</div>
    {sources.length > 0 && <aside className="sources"><h2>Further reading</h2>{sources.map(source => <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>{source.label} <ArrowRight /></a>)}</aside>}
  </article>
  <section className="article-cta"><div className="shell"><h2>Turn the analysis into an implementation plan.</h2><Link href="/contact" className="button button-accent">Discuss your challenge <ArrowRight /></Link></div></section>
</main>; }
