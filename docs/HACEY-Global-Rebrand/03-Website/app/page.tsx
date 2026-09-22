import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ChevronRight, Check } from 'lucide-react';
import { industries, products, solutions, technologies, articles } from '@/lib/content';

const capabilities = [
  ['01', 'Strategy & transformation', 'Define the case for change, target operating model and executable roadmap.'],
  ['02', 'AI, data & cloud', 'Move from readiness and architecture through responsible implementation and optimisation.'],
  ['03', 'Products & platforms', 'Design, build and integrate useful digital products around real workflows.'],
  ['04', 'Programme delivery', 'Create the governance, delivery rhythm and controls that keep complex work moving.'],
  ['05', 'Process & operations', 'Redesign services and workflows before automating what should not remain.'],
  ['06', 'Change & capability', 'Prepare teams, support adoption and transfer the capability to sustain the change.'],
];

const stages = ['Understand', 'Diagnose', 'Design', 'Build', 'Deploy', 'Enable', 'Optimise'];

export default function Home() {
  return (
    <main>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">Strategy · technology · delivery · adoption</p>
          <h1>Make complex transformation work in practice.</h1>
          <p className="lede">HACEY Global helps organisations understand the right problem, implement the right solution and build the internal capability to keep improving it.</p>
          <div className="hero-actions">
            <Link href="/contact" className="button button-accent">Start a discovery conversation <ArrowRight /></Link>
            <Link href="/approach" className="text-link">See how we work <ChevronRight /></Link>
          </div>
        </div>
        <div className="hero-system" aria-label="HACEY Global transformation system">
          <div className="system-label">From organisational need to sustained value</div>
          <div className="system-core">
            <span>Organisation</span>
            <strong>Challenge</strong>
            <small>People · process · systems · outcomes</small>
          </div>
          <div className="system-path">
            {['Strategy', 'Technology', 'Delivery', 'Adoption'].map((item, index) => (
              <div key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="proof-band">
        <div className="shell proof-grid">
          <p><strong>Since 2007</strong><span>Established delivery experience</span></p>
          <p><strong>Austin, Texas</strong><span>Serving North America and Europe</span></p>
          <p><strong>Built to transfer</strong><span>Knowledge and capability stay with your team</span></p>
        </div>
      </section>

      <section className="section shell">
        <div className="section-intro">
          <p className="eyebrow">What we do</p>
          <h2>One accountable path from decision to durable change.</h2>
          <p>We combine advisory depth with practical implementation. The work is shaped around the organisation rather than a preferred platform or a predetermined answer.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map(([number, title, copy]) => (
            <Link href="/capabilities" className="capability-item" key={title}>
              <span>{number}</span><h3>{title}</h3><p>{copy}</p><ArrowRight />
            </Link>
          ))}
        </div>
      </section>

      <section className="paper-section home-solutions"><div className="shell">
        <div className="section-heading"><div><p className="eyebrow">Solutions</p><h2>Common challenges. Context-specific responses.</h2></div><Link href="/solutions" className="text-link">Explore all solutions <ArrowRight /></Link></div>
        <div className="home-link-list">{solutions.slice(0, 6).map((item, i) => <Link href={`/solutions/${item.slug}`} key={item.slug}><span>{String(i + 1).padStart(2, '0')}</span><strong>{item.title}</strong><ArrowUpRight /></Link>)}</div>
      </div></section>

      <section className="section shell home-industries">
        <div className="section-heading"><div><p className="eyebrow">Industries</p><h2>Transformation shaped by the environment it must work in.</h2></div><Link href="/industries" className="text-link">Explore industries <ArrowRight /></Link></div>
        <div className="industry-strips">{industries.map((item, i) => <Link href={`/industries/${item.slug}`} key={item.slug}><span>{String(i + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.summary}</p><ArrowUpRight /></Link>)}</div>
      </section>

      <section className="dark-section">
        <div className="shell approach-grid">
          <div>
            <p className="eyebrow light">The HACEY Path</p>
            <h2>Progress with evidence, not momentum alone.</h2>
            <p>Each stage produces a clear decision, working output or measurable improvement. Leadership, technical teams and frontline staff stay involved throughout.</p>
            <Link href="/approach" className="button button-light">Explore our approach <ArrowRight /></Link>
          </div>
          <ol className="stage-list">
            {stages.map((stage, index) => <li key={stage}><span>{String(index + 1).padStart(2, '0')}</span><strong>{stage}</strong></li>)}
          </ol>
        </div>
      </section>

      <section className="section shell ecosystem-section">
        <div><p className="eyebrow">Technology ecosystems</p><h2>Architecture and platforms selected around the work.</h2><p>Implementation capability across leading cloud, CRM, collaboration, automation and data ecosystems, without unsupported partner claims.</p><Link href="/technology" className="text-link">Explore technology capability <ArrowRight /></Link></div>
        <div className="ecosystem-list">{technologies.map(item => <div key={item.title}><Check /><span>{item.title}</span></div>)}</div>
      </section>

      <section className="products-preview"><div className="shell">
        <div className="section-heading light-heading"><div><p className="eyebrow light">Products and accelerators</p><h2>Reusable foundations for recurring problems.</h2></div><Link href="/products" className="text-link">View product concepts <ArrowRight /></Link></div>
        <div className="product-row">{products.slice(0, 3).map(item => <Link href={`/products/${item.slug}`} key={item.slug}><span>{item.eyebrow}</span><h3>{item.title}</h3><p>{item.summary}</p><ArrowUpRight /></Link>)}</div>
      </div></section>

      <section className="section shell insight-preview">
        <div className="section-heading"><div><p className="eyebrow">Latest thinking</p><h2>Advice designed for decisions and delivery.</h2></div><Link href="/insights" className="text-link">Read all insights <ArrowRight /></Link></div>
        <div className="insight-preview-grid">{articles.slice(0, 3).map(article => <Link href={`/insights/${article.slug}`} key={article.slug}><span>{article.category}</span><h3>{article.title}</h3><small>{article.readingTime}</small><ArrowUpRight /></Link>)}</div>
      </section>

      <section className="why-band"><div className="shell why-grid"><div><p className="eyebrow light">Why HACEY Global</p><h2>Practical enough to implement. Deliberate enough to last.</h2></div><div><p>We connect five disciplines that transformation programmes often separate.</p><ul><li>Strategy tied to operating reality</li><li>Technology shaped around people and process</li><li>Programme control across decisions and dependencies</li><li>Adoption measured through performance</li><li>Capability transferred into the organisation</li></ul></div></div></section>

      <section className="section shell closing-cta">
        <div>
          <p className="eyebrow">A better place to begin</p>
          <h2>Bring us the challenge, not a predetermined solution.</h2>
        </div>
        <div><p>We will help you clarify the problem, test the options and define a practical first move.</p><Link href="/contact" className="button button-accent">Discuss your challenge <ArrowRight /></Link></div>
      </section>

    </main>
  );
}
