import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/site/page-hero';

export const metadata: Metadata = { title: 'About', description: 'HACEY Global is an Austin-based strategy, innovation, technology and programme delivery organisation established in 2007.' };
const values = [
  ['Understand before prescribing', 'We look at the organisation, people, processes, systems, evidence and constraints before deciding what should change.'],
  ['Make the work useful', 'Strategy must lead to decisions and implementation must improve how the organisation actually works.'],
  ['Build with people', 'Those who lead, deliver and experience a service should shape it, test it and understand it.'],
  ['Own the outcome', 'We make dependencies and trade-offs visible and stay accountable to the intended result.'],
  ['Transfer capability', 'Our work should leave the client more able to operate, govern and improve the solution.'],
  ['Act responsibly', 'We design technology with proportionate attention to safety, privacy, security, accessibility and wider impact.'],
];
export default function Page() { return <main>
  <PageHero eyebrow="About HACEY Global" title="Practical transformation, designed to last beyond the engagement." summary="Established in 2007 and based in Austin, Texas, HACEY Global brings a foundation in programmes, research, health and social impact into a focused strategy and technology organisation serving North America and Europe." />
  <section className="statement-band"><div className="shell"><p className="eyebrow light">Our purpose</p><h2>Help organisations make complex change useful, responsible and sustainable.</h2></div></section>
  <section className="section shell mission-grid"><article><p className="eyebrow">Vision</p><h2>Organisations equipped to turn better decisions and technology into lasting public, human and business value.</h2></article><article><p className="eyebrow">Mission</p><p>We diagnose complex organisational challenges, design and implement practical solutions, and build the internal capability required to operate and improve them.</p></article></section>
  <section className="paper-section"><div className="shell values-grid">{values.map(([title, copy], i) => <article key={title}><span>{String(i + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
  <section className="section shell story-grid"><div><p className="eyebrow">Our evolution</p><h2>From social-impact delivery to an integrated transformation practice.</h2></div><div><p>HACEY Global’s earlier work centred on systems strengthening, programme design, research, digital solutions, stakeholder engagement and operational delivery in health and social-impact contexts. Those disciplines remain valuable because they demand work across policy, people, data, technology and implementation.</p><p>The current positioning extends that foundation into enterprise strategy, innovation, technology services, programme management and digital products. It is an evolution in market focus, not permission to invent credentials. Published proof will continue to distinguish verified experience from illustrative approaches.</p><Link href="/work" className="text-link">See our proof approach <ArrowRight /></Link></div></section>
</main>; }
