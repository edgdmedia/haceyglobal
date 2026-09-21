import type { Metadata } from 'next';
import { ContactForm } from '@/components/site/contact-form';

export const metadata: Metadata = { title: 'Contact', description: 'Discuss a strategy, technology, programme delivery or transformation challenge with HACEY Global.' };
export default function Page() { return <main>
  <section className="contact-layout shell"><div><p className="eyebrow">Contact</p><h1>Start with the challenge.</h1><p className="lede">Tell us what needs to change, what is getting in the way and what a better outcome would look like. We will respond with a practical next step.</p><div className="contact-details"><div><span>Email</span><a href="mailto:isaiah@haceyglobal.com">isaiah@haceyglobal.com</a></div><div><span>Location</span><p>Austin, Texas, USA</p></div><div><span>Geographic focus</span><p>North America, United Kingdom and Europe</p></div></div></div><ContactForm /></section>
  <section className="paper-section"><div className="shell contact-options"><article><span>01</span><h2>Focused diagnostic</h2><p>A short evidence-led engagement to clarify the problem, risks, decision options and first move.</p></article><article><span>02</span><h2>Strategy to delivery</h2><p>An integrated engagement spanning roadmap, solution design, implementation, change and measurement.</p></article><article><span>03</span><h2>Programme support</h2><p>Targeted leadership, architecture, product, PMO or change capability within a larger client programme.</p></article></div></section>
</main>; }
