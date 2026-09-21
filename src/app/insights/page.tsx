import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PageHero } from '@/components/site/page-hero';
import { articles } from '@/lib/content';

export const metadata: Metadata = { title: 'Insights', description: 'Practical analysis for leaders responsible for AI, technology, programmes and organisational transformation.' };
const categories = ['Artificial Intelligence', 'Strategy', 'Digital Transformation', 'Change Management', 'Technology', 'Healthcare', 'Financial Services', 'Government', 'AgTech', 'Education', 'Social Impact'];
export default function Page() { return <main>
  <PageHero eyebrow="Insights" title="Practical thinking for people responsible for making change work." summary="Analysis, decision frameworks and implementation guidance for executives, programme leaders, product teams and practitioners." cta={false} />
  <section className="shell category-row" aria-label="Insight topics">{categories.map(x => <span key={x}>{x}</span>)}</section>
  <section className="section shell insight-grid">{articles.map((article, index) => <Link href={`/insights/${article.slug}`} className={index === 0 ? 'insight-card featured' : 'insight-card'} key={article.slug}><span>{article.category}</span><h2>{article.title}</h2><p>{article.dek}</p><small>{article.readingTime}</small><ArrowUpRight /></Link>)}</section>
  <section className="insight-editorial"><div className="shell"><p className="eyebrow light">Editorial standard</p><h2>Substance before search volume.</h2><p>Insights are written to help a leader make a decision or a practitioner improve the work. Research sources are linked where they support factual or standards-based claims.</p></div></section>
</main>; }
