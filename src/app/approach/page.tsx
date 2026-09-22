import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/site/page-hero';
import { approachStages } from '@/lib/content';

export const metadata: Metadata = { title: 'Our Approach', description: 'The HACEY Path: understand, diagnose, design, build, deploy, enable and optimise.' };
export default function Page() { return <main>
  <PageHero eyebrow="The HACEY Path" title="A delivery method built around evidence and ownership." summary="Seven connected stages take a challenge from shared understanding to sustained improvement. The method flexes to the work without losing the decisions and controls that protect outcomes." />
  <section className="path-section shell">{approachStages.map(([title, copy], i) => <article key={title}><div><span>{String(i + 1).padStart(2, '0')}</span><b>{i === 5 ? 'Capability transfer' : i < 2 ? 'Evidence' : i < 5 ? 'Implementation' : 'Sustained value'}</b></div><h2>{title}</h2><p>{copy}</p></article>)}</section>
  <section className="dark-section"><div className="shell principle-grid"><div><p className="eyebrow light">How the method behaves</p><h2>Collaborative, controlled and useful.</h2></div><ul><li>Leadership and frontline perspectives shape the diagnosis.</li><li>Design decisions are tested against evidence and constraints.</li><li>Delivery produces working increments, not only recommendations.</li><li>Adoption is measured through service and operational performance.</li><li>Knowledge, tools and decision rights move into the client team.</li></ul></div></section>
  <section className="section shell closing-cta"><div><p className="eyebrow">A practical first engagement</p><h2>Start with a focused diagnostic.</h2></div><div><p>Clarify the challenge, create a shared evidence base and define the most valuable next move.</p><Link href="/contact" className="button button-accent">Start a discovery conversation <ArrowRight /></Link></div></section>
</main>; }
