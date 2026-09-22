import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function PageHero({ eyebrow, title, summary, cta = true }: { eyebrow: string; title: string; summary: string; cta?: boolean }) {
  return (
    <section className="page-hero shell">
      <div className="page-hero-main">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
      </div>
      <div className="page-hero-side"><p>{summary}</p>{cta && <Link className="text-link" href="/contact">Discuss your challenge <ArrowRight /></Link>}</div>
    </section>
  );
}
