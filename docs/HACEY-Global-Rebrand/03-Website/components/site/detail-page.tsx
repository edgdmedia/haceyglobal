import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import type { DetailItem } from '@/lib/content';

export function DetailPage({ item, type }: { item: DetailItem; type: string }) {
  return (
    <>
      <section className="detail-hero shell">
        <p className="eyebrow">{item.eyebrow || type}</p>
        <h1>{item.title}</h1>
        <p className="lede">{item.summary}</p>
      </section>
      {item.challenge && <section className="statement-band"><div className="shell"><p className="eyebrow light">The challenge</p><h2>{item.challenge}</h2></div></section>}
      <section className="section shell detail-columns">
        {item.outcomes && <div><p className="eyebrow">What this work should create</p><ul className="check-list">{item.outcomes.map(x => <li key={x}><Check />{x}</li>)}</ul></div>}
        {item.services && <div><p className="eyebrow">Relevant capabilities</p><ul className="service-list">{item.services.map(x => <li key={x}>{x}</li>)}</ul></div>}
      </section>
      {item.sections && <section className="paper-section"><div className="shell mini-grid">{item.sections.map((section, i) => <article key={section.title}><span>{String(i + 1).padStart(2, '0')}</span><h3>{section.title}</h3><p>{section.body}</p></article>)}</div></section>}
      <section className="section shell closing-cta"><div><p className="eyebrow">Start with the real operating context</p><h2>Define the right first move.</h2></div><div><p>We can assess the challenge, surface the critical decisions and shape a practical path into delivery.</p><Link href="/contact" className="button button-accent">Start a discovery conversation <ArrowRight /></Link></div></section>
    </>
  );
}
