import type { Metadata } from 'next';
import { PageHero } from '@/components/site/page-hero';

export const metadata: Metadata = { title: 'Work and Engagements', description: 'Verified experience themes and clearly labelled illustrative engagements from HACEY Global.' };
const proof = [
  ['Programme delivery and talent', 'The existing HACEY site describes recruiting technical and programme professionals for more than 40 social-impact programmes. Before publication, supporting records and precise scope should be confirmed.'],
  ['Public health and community delivery', 'The existing site describes malaria-prevention, maternal-health and advocacy activity. These can support stories about stakeholder coordination, implementation and measurement after evidence review.'],
  ['Research and systems strengthening', 'The current service portfolio includes evidence-based research, programme design and systems strengthening. Individual engagements should be documented before client or result claims are published.'],
];
const illustrative = [
  ['Healthcare interoperability programme', 'How we would assess priority clinical workflows, define the information exchange, design FHIR-enabled integration, mobilise delivery and prepare teams to operate it.'],
  ['Public-sector case-management modernisation', 'How we would simplify intake and case workflows, define controls, select or configure a platform, migrate safely and measure resident and staff outcomes.'],
  ['Enterprise AI deployment', 'How we would identify a bounded operational use case, test readiness, build responsible controls, integrate the service and establish monitoring and ownership.'],
];
export default function Page() { return <main>
  <PageHero eyebrow="Work and proof" title="Credibility starts with clear evidence boundaries." summary="We will publish verified capability stories as supporting evidence is assembled. Until then, proposed technology work is labelled as an illustrative engagement, not presented as client experience." />
  <section className="section shell"><p className="eyebrow">Experience themes requiring evidence review</p><div className="work-grid">{proof.map(([title, copy]) => <article key={title}><span>Existing-site claim</span><h2>{title}</h2><p>{copy}</p></article>)}</div></section>
  <section className="paper-section"><div className="shell"><p className="eyebrow">Illustrative engagements</p><div className="work-grid">{illustrative.map(([title, copy]) => <article key={title}><span>How we would approach this challenge</span><h2>{title}</h2><p>{copy}</p></article>)}</div></div></section>
  <section className="section shell template-block"><p className="eyebrow">Case-study template</p><h2>Challenge → Context → Approach → Solution → Implementation → Capability Transfer → Results → Lessons</h2><p>Every future case study should identify the client or approved descriptor, verify the evidence, separate contribution from attribution and include only approved metrics.</p></section>
</main>; }
