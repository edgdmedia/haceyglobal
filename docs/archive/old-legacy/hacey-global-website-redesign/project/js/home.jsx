const { Nav, Footer, CtaBand, TrustStrip, CountUp, useReveal, MAILTO } = window.HaceyShell;
const { Button, IconFeature, Badge } = window.HaceyDesignSystem_f6c402;

const services = [
  ['assets/img/systems-strengthening.png', 'Systems Strengthening', 'Partnering with organizations to design robust systems that empower communities and improve service delivery.'],
  ['assets/img/digital-solutions.png', 'Digital Solutions', 'From mobile health applications to data analytics, our solutions leverage cutting-edge technologies to address social challenges.'],
  ['assets/img/fund-management.png', 'Fund Management', 'We manage grants and funding programs, ensuring efficient resource allocation and measurable outcomes.'],
  ['assets/img/project-design.png', 'Project Design & Implementation', 'Expertly designing projects that align with goals and implementing them to drive sustainable change.'],
  ['assets/img/research.png', 'Research & Development', 'Conducting in-depth research to inform policies and strategies for maximum impact.'],
  ['assets/img/hr-management.png', 'Human Resources Management', 'Building capable teams by recruiting and managing experts across fields to support social initiatives.'],
];
const practice = [
  ['assets/img/practice-health.jpg', 'Health & Wellbeing', 'Enhancing health security and access to quality healthcare and nutrition.'],
  ['assets/img/practice-economic.jpg', 'Economic Inclusion', 'Creating sustainable employment, entrepreneurship and financial access.'],
  ['assets/img/practice-rights.jpg', 'Rights & Advocacy', 'Championing human rights through policy change and community empowerment.'],
  ['assets/img/practice-environment.jpg', 'Environmental Sustainability', 'Reducing carbon footprints, conserving resources and preserving biodiversity.'],
];
const stats = [
  [40, '+', 'Social impact programs'],
  [200, '+', 'Verified experts'],
  [100000, '+', 'Doses of IPTp-SP donated'],
  [5, '', 'States reached with SRHR'],
];
const stories = [
  ['assets/img/home-2.jpg', 'Talent', 'Talent Acquisition', 'Recruited data scientists, program managers and researchers for over 40 social impact programs, building a skilled workforce for meaningful change.'],
  ['assets/img/practice-health.jpg', 'Health', 'Malaria Prevention', 'Donated over 100,000 doses of IPTp-SP and 10,000 rapid diagnostic test kits toward malaria prevention in Oyo State.'],
  ['assets/img/impact-media.jpg', 'Advocacy', 'Media Empowerment', 'Equipped 96 media personnel, 322 community leaders and 69 EndFGM Alliance participants to address critical social issues.'],
];
const testimonials = [
  ['HACEY connected high-level strategy to ground-level execution — the systems they designed keep delivering long after the engagement ended.', 'Programme Director', 'Global Health Funder'],
  ['Their evidence-based approach and network of experts let us scale a complex intervention across multiple states with confidence.', 'Country Lead', 'Development Partner'],
];

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner wrap cols2" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.15fr) minmax(0,0.85fr)', gap: 56, alignItems: 'center', padding: '92px 24px' }}>
        <div className="reveal in">
          <div className="chip" style={{ marginBottom: 22 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--hacey-lime)' }}></span>17+ Years of Impact across Africa &amp; beyond</div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(40px,5.2vw,64px)', fontWeight: 900, lineHeight: 1.04, letterSpacing: '-0.02em' }}>Solutions for a Sustainable Future</h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.85)', margin: '24px 0 34px', maxWidth: 560 }}>Transformative development isn&rsquo;t just high-level strategy or ground-level execution — it&rsquo;s connecting both to create systems that work for everyone.</p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Button variant="accent" size="lg" href={MAILTO}>Get in Touch</Button>
            <Button variant="outline-inverse" size="lg" href="impact.html">See Our Impact</Button>
          </div>
        </div>
        <div className="reveal in d2" style={{ position: 'relative' }}>
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.35)' }}>
            <img src="assets/img/hero-1.jpg" alt="HACEY consultants in discussion" style={{ display: 'block', width: '100%', height: 420, objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'absolute', left: -18, bottom: -22, background: '#fff', borderRadius: 'var(--radius-md)', padding: '18px 22px', boxShadow: 'var(--shadow-raised)', display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 40, color: 'var(--hacey-navy)', lineHeight: 1 }}>17+</div>
            <div style={{ fontSize: 13, color: 'var(--gray-500)', lineHeight: 1.3, fontWeight: 600 }}>Years transforming<br />complex challenges</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  useReveal();
  return (
    <div>
      <Nav active="Home" />
      <Hero />
      <div style={{ background: 'var(--surface-alt)', borderBottom: '1px solid var(--border-subtle)' }}><TrustStrip /></div>

      {/* About intro */}
      <section className="section"><div className="wrap cols2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
        <div className="reveal" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <img src="assets/img/about-1.jpg" alt="The HACEY global team" style={{ display: 'block', width: '100%', height: 380, objectFit: 'cover' }} />
        </div>
        <div className="reveal d1">
          <div className="eyebrow" style={{ marginBottom: 14 }}>About HACEY LLC</div>
          <h2 style={{ fontSize: 'var(--text-3xl)', marginBottom: 20 }}>A social impact consultancy built on evidence and outcomes.</h2>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-body)', marginBottom: 16 }}>We are a social impact consultancy with over 17 years of experience transforming complex challenges into impactful solutions — partnering with organizations across the globe to catalyze meaningful change.</p>
          <p style={{ color: 'var(--text-body)', marginBottom: 28 }}>From systems strengthening to digital innovation, we connect strategy with execution so impact is measurable and lasting.</p>
          <Button variant="outline" href="about.html">Learn More</Button>
        </div>
      </div></section>

      {/* Services */}
      <section className="section" style={{ background: 'var(--surface-alt)' }}><div className="wrap">
        <div className="reveal" style={{ maxWidth: 720, marginBottom: 44 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>What we do</div>
          <h2 style={{ fontSize: 'var(--text-3xl)', marginBottom: 14 }}>Our Services</h2>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-body)' }}>Transforming complex challenges into impactful solutions through diverse expertise, digital innovation and global partnerships.</p>
        </div>
        <div className="grid-3">
          {services.map(([ic, t, d], i) => (
            <div key={t} className={'reveal d' + ((i % 3) + 1)}><IconFeature icon={ic} title={t}>{d}</IconFeature></div>
          ))}
        </div>
        <div className="reveal" style={{ textAlign: 'center', marginTop: 44 }}><Button variant="primary" size="lg" href="services.html">Explore All Services</Button></div>
      </div></section>

      {/* Practice areas — photo tiles */}
      <section className="section"><div className="wrap">
        <div className="reveal" style={{ maxWidth: 720, marginBottom: 44 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Where we work</div>
          <h2 style={{ fontSize: 'var(--text-3xl)', marginBottom: 14 }}>Our Practice Areas</h2>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-body)' }}>Driving sustainable change through comprehensive solutions across key development sectors.</p>
        </div>
        <div className="grid-4">
          {practice.map(([img, t, d], i) => (
            <a key={t} href="practice-areas.html" className={'reveal d' + ((i % 4) + 1)} style={{ display: 'block', borderRadius: 'var(--radius-md)', overflow: 'hidden', position: 'relative', boxShadow: 'var(--shadow-card)' }}>
              <img src={img} alt={t} style={{ display: 'block', width: '100%', height: 260, objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(31,34,102,0) 30%,rgba(31,34,102,0.92) 100%)' }}></div>
              <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 20 }}>
                <h3 style={{ color: '#fff', fontSize: 'var(--text-lg)', marginBottom: 4 }}>{t}</h3>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13, margin: 0, lineHeight: 1.5 }}>{d}</p>
              </div>
            </a>
          ))}
        </div>
      </div></section>

      {/* Impact stats band */}
      <section style={{ background: 'var(--hacey-navy-dark)', padding: '80px 0' }}><div className="wrap">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 48px' }}>
          <div className="eyebrow on-dark" style={{ marginBottom: 12 }}>Our impact in numbers</div>
          <h2 style={{ color: '#fff', fontSize: 'var(--text-3xl)' }}>Measurable, sustainable impact across every engagement.</h2>
        </div>
        <div className="grid-4">
          {stats.map(([n, s, l], i) => (
            <div key={l} className={'reveal d' + ((i % 4) + 1)} style={{ textAlign: 'center', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-md)', padding: '32px 18px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(34px,4vw,48px)', color: 'var(--hacey-lime)', lineHeight: 1 }}><CountUp end={n} suffix={s} /></div>
              <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, marginTop: 10 }}>{l}</div>
            </div>
          ))}
        </div>
      </div></section>

      {/* Impact stories preview */}
      <section className="section" style={{ background: 'var(--surface-alt)' }}><div className="wrap">
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 44 }}>
          <div style={{ maxWidth: 620 }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Our impact stories</div>
            <h2 style={{ fontSize: 'var(--text-3xl)' }}>Transforming lives and communities</h2>
          </div>
          <Button variant="ghost" href="impact.html">See More Success Stories &rarr;</Button>
        </div>
        <div className="grid-3">
          {stories.map(([img, tag, t, d], i) => (
            <article key={t} className={'reveal d' + ((i % 3) + 1)} style={{ background: '#fff', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-card)', display: 'flex', flexDirection: 'column' }}>
              <img src={img} alt={t} style={{ display: 'block', width: '100%', height: 200, objectFit: 'cover' }} />
              <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div><Badge tone="teal">{tag}</Badge></div>
                <h3 style={{ fontSize: 'var(--text-xl)' }}>{t}</h3>
                <p style={{ margin: 0, fontSize: 15, color: 'var(--text-body)', lineHeight: 1.6 }}>{d}</p>
              </div>
            </article>
          ))}
        </div>
      </div></section>

      {/* Testimonials */}
      <section className="section"><div className="wrap">
        <div className="reveal" style={{ maxWidth: 620, marginBottom: 44 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>What partners say</div>
          <h2 style={{ fontSize: 'var(--text-3xl)' }}>Trusted to deliver measurable outcomes.</h2>
        </div>
        <div className="grid-2">
          {testimonials.map(([q, name, org], i) => (
            <figure key={name} className={'reveal d' + (i + 1)} style={{ margin: 0, background: 'var(--hacey-navy-tint)', borderRadius: 'var(--radius-lg)', padding: 36, borderLeft: '4px solid var(--hacey-teal)' }}>
              <blockquote style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-xl)', color: 'var(--hacey-navy)', lineHeight: 1.4 }}>&ldquo;{q}&rdquo;</blockquote>
              <figcaption style={{ marginTop: 20, fontSize: 14, color: 'var(--text-body)' }}><strong style={{ color: 'var(--hacey-navy)' }}>{name}</strong> — {org}</figcaption>
            </figure>
          ))}
        </div>
      </div></section>

      <CtaBand />
      <Footer />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<Home />);
