import type { Metadata } from 'next';
import { PageHero } from '@/components/site/page-hero';
import { InsightFilter } from '@/components/site/insight-filter';
import { articles } from '@/lib/content';

export const metadata: Metadata = { title: 'Insights', description: 'Practical analysis for leaders responsible for AI, technology, programmes and organisational transformation.' };
// 'Process Improvement' added: it has a published article and was missing here,
// which left that article unreachable from the topic row.
const categories = ['Artificial Intelligence', 'Strategy', 'Digital Transformation', 'Change Management', 'Process Improvement', 'Technology', 'Healthcare', 'Financial Services', 'Government', 'AgTech', 'Education', 'Social Impact'];
export default function Page() { return <main>
  <PageHero eyebrow="Insights" title="Practical thinking for people responsible for making change work." summary="Analysis, decision frameworks and implementation guidance for executives, programme leaders, product teams and practitioners." cta={false} />
  <InsightFilter articles={articles} categories={categories} />
  <section className="insight-editorial"><div className="shell"><p className="eyebrow light">Editorial standard</p><h2>Substance before search volume.</h2><p>Insights are written to help a leader make a decision or a practitioner improve the work. Research sources are linked where they support factual or standards-based claims.</p></div></section>
</main>; }
