const { Nav, Footer, CtaBand, PageHero, useReveal, MAILTO } = window.HaceyShell;
const { Button, IconFeature } = window.HaceyDesignSystem_f6c402;

const services = [
  ['assets/img/systems-strengthening.png', 'Systems Strengthening', 'Partnering with organizations to design robust systems that empower communities and improve service delivery — connecting strategy with the realities of implementation.'],
  ['assets/img/digital-solutions.png', 'Digital Solutions', 'From mobile health applications to data analytics, our solutions leverage cutting-edge technologies to address complex social challenges at scale.'],
  ['assets/img/fund-management.png', 'Fund Management', 'We manage grants and funding programs end to end, ensuring efficient resource allocation, compliance and measurable outcomes for funders.'],
  ['assets/img/project-design.png', 'Project Design & Implementation', 'Expertly designing projects that align with your goals and implementing them to drive sustainable, lasting change on the ground.'],
  ['assets/img/research.png', 'Research & Development', 'Conducting in-depth, evidence-based research to inform policies and strategies for maximum impact and smarter decision-making.'],
  ['assets/img/hr-management.png', 'Human Resources Management', 'Building capable teams by recruiting and managing experts across fields — from data scientists to program managers — to support social initiatives.'],
];

function Services() {
  useReveal();
  return (
    <div>
      <Nav active="Services" />
      <PageHero eyebrow="What we do" title="Transforming complex challenges into impactful solutions." lead="Through diverse expertise, digital innovation and global partnerships, we deliver the full spectrum of social impact consultancy services." image="assets/img/home-1.jpg" />

      <section className="section"><div className="wrap">
        <div className="grid-3">
          {services.map(([ic, t, d], i) => (
            <div key={t} className={'reveal d' + ((i % 3) + 1)}><IconFeature icon={ic} title={t}>{d}</IconFeature></div>
          ))}
        </div>
      </div></section>

      {/* How we deliver */}
      <section className="section" style={{ background: 'var(--surface-alt)' }}><div className="wrap">
        <div className="reveal" style={{ maxWidth: 680, marginBottom: 44 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>How we deliver</div>
          <h2 style={{ fontSize: 'var(--text-3xl)' }}>A partnership approach, from first insight to lasting impact.</h2>
        </div>
        <div className="grid-4">
          {[['01', 'Understand', 'We start with your objectives, context and the communities you serve.'],
            ['02', 'Design', 'Evidence-based project and system design tailored to your resources.'],
            ['03', 'Implement', 'Expert teams execute, with digital tools that scale the intervention.'],
            ['04', 'Measure', 'Rigorous monitoring and evaluation turn activity into measurable outcomes.']].map(([n, t, d], i) => (
            <div key={n} className={'reveal d' + ((i % 4) + 1)} style={{ background: '#fff', borderRadius: 'var(--radius-md)', padding: 28, boxShadow: 'var(--shadow-card)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 32, color: 'var(--hacey-lime-dark)', lineHeight: 1, marginBottom: 12 }}>{n}</div>
              <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: 8 }}>{t}</h3>
              <p style={{ margin: 0, fontSize: 14, color: 'var(--text-body)', lineHeight: 1.6 }}>{d}</p>
            </div>
          ))}
        </div>
        <div className="reveal" style={{ textAlign: 'center', marginTop: 44 }}><Button variant="primary" size="lg" href={MAILTO}>Get Started with Us</Button></div>
      </div></section>

      <CtaBand />
      <Footer />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<Services />);
