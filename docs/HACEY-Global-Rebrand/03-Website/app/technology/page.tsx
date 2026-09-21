import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/site/page-hero';
import { technologies } from '@/lib/content';

export const metadata: Metadata = { title: 'Technology Ecosystems', description: 'Implementation capability across Microsoft, Azure, AWS, Salesforce, APIs, data platforms and enterprise AI technologies.' };
export default function Page() { return <main>
  <PageHero eyebrow="Technology ecosystems" title="Technology selected for fit, not familiarity alone." summary="We work across major cloud, enterprise and data ecosystems, while keeping architecture, interoperability, security and operating ownership in view." />
  <section className="section shell technology-list">{technologies.map((item, i) => <article key={item.title}><span>{String(i + 1).padStart(2, '0')}</span><h2>{item.title}</h2><p>{item.copy}</p></article>)}</section>
  <section className="statement-band"><div className="shell"><p className="eyebrow light">No implied affiliation</p><div><h2>Capability without unsupported partner claims.</h2><p>References to technologies describe solution and implementation capability. HACEY Global does not claim official partner status, certification or formal relationships unless those can be verified for publication.</p><Link href="/contact" className="button button-light">Discuss your technology landscape <ArrowRight /></Link></div></div></section>
</main>; }
