const { Nav, Footer, CtaBand, PageHero, CountUp, useReveal } = window.HaceyShell;
const { Button, IconFeature } = window.HaceyDesignSystem_f6c402;

const principles = [
  ['assets/img/systems-strengthening.png', 'Expertise & Experience', 'A team of adept professionals across diverse fields, bringing a wealth of knowledge to unravel intricate challenges and forge tailor-made solutions.'],
  ['assets/img/digital-solutions.png', 'Client-Centered Approach', 'We prioritize the distinct needs of businesses, nonprofits, governments and donors, so our strategies resonate with their objectives and resources.'],
  ['assets/img/research.png', 'Ethical & Transparent', 'Transparency and ethics are the bedrock of our operations — honest, fair and respectful interactions with every stakeholder.'],
  ['assets/img/hr-management.png', 'Sustainable Impact', 'Our solutions transcend immediate challenges, nurturing enduring resilience and positive transformation in the communities we serve.'],
  ['assets/img/project-design.png', 'Results-Oriented', 'Meticulous monitoring and evaluation drive continuous, data-driven adaptation for optimal effectiveness and tangible outcomes.'],
];

function About() {
  useReveal();
  return (
    <div>
      <Nav active="About" />
      <PageHero eyebrow="About HACEY LLC" title="Pioneering social development solutions across borders." lead="A social impact consultancy with over 17 years of experience partnering with organizations worldwide to catalyze meaningful, evidence-based change." image="assets/img/about-4.jpg" />

      <section className="section"><div className="wrap cols2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
        <div className="reveal" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <img src="assets/img/about-1.jpg" alt="The HACEY global team" style={{ display: 'block', width: '100%', height: 400, objectFit: 'cover' }} />
        </div>
        <div className="reveal d1">
          <div className="eyebrow" style={{ marginBottom: 14 }}>Who we are</div>
          <h2 style={{ fontSize: 'var(--text-3xl)', marginBottom: 20 }}>17+ years of transformative impact across Africa &amp; beyond.</h2>
          <p style={{ fontSize: 'var(--text-lg)', marginBottom: 16 }}>HACEY is a social impact consultancy with over 17 years of experience. We partner with organizations across the globe to catalyze meaningful change through innovative solutions and evidence-based practices.</p>
          <p style={{ color: 'var(--text-body)' }}>Our work demonstrates that transformative development isn&rsquo;t just high-level strategy or ground-level execution — it&rsquo;s connecting both to create systems that work for everyone.</p>
        </div>
      </div></section>

      {/* Vision & Mission */}
      <section className="section" style={{ background: 'var(--surface-alt)' }}><div className="wrap grid-2">
        {[['Our Vision', '&ldquo;Pioneering Social Development Solutions Across Borders with Innovation and Collaboration.&rdquo;', 'To become a preeminent catalyst for social development through strategic partnerships, innovative digital solutions and evidence-based practices — fostering global collaboration and sustainability.'],
          ['Our Mission', '&ldquo;Catalyzing Impact, Empowering Change.&rdquo;', 'We ignite social transformation through evidence-based solutions, digital innovation and strategic collaborations, building sustainable futures for communities and partners.']].map(([k, h, d], i) => (
          <div key={k} className={'reveal d' + (i + 1)} style={{ background: i === 0 ? 'var(--hacey-navy)' : 'var(--hacey-teal)', color: '#fff', borderRadius: 'var(--radius-lg)', padding: 40 }}>
            <div className="eyebrow on-dark" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>{k}</div>
            <h3 style={{ color: '#fff', fontSize: 'var(--text-2xl)', lineHeight: 1.3, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: h }}></h3>
            <p style={{ color: 'rgba(255,255,255,0.9)', margin: 0 }}>{d}</p>
          </div>
        ))}
      </div></section>

      {/* Core principles */}
      <section className="section"><div className="wrap">
        <div className="reveal" style={{ maxWidth: 680, marginBottom: 44 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>How we work</div>
          <h2 style={{ fontSize: 'var(--text-3xl)', marginBottom: 14 }}>Our Core Principles</h2>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-body)' }}>The values that shape every engagement and keep our impact measurable and lasting.</p>
        </div>
        <div className="grid-3">
          {principles.map(([ic, t, d], i) => (
            <div key={t} className={'reveal d' + ((i % 3) + 1)}><IconFeature icon={ic} title={t}>{d}</IconFeature></div>
          ))}
        </div>
      </div></section>

      {/* mini stats */}
      <section style={{ background: 'var(--hacey-navy-dark)', padding: '72px 0' }}><div className="wrap grid-4">
        {[[17, '+', 'Years of impact'], [40, '+', 'Programs delivered'], [200, '+', 'Verified experts'], [6, '', 'African countries']].map(([n, s, l], i) => (
          <div key={l} className={'reveal d' + ((i % 4) + 1)} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(34px,4vw,48px)', color: 'var(--hacey-lime)', lineHeight: 1 }}><CountUp end={n} suffix={s} /></div>
            <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, marginTop: 8 }}>{l}</div>
          </div>
        ))}
      </div></section>

      <CtaBand />
      <Footer />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<About />);
