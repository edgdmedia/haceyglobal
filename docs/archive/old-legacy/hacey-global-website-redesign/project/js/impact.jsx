const { Nav, Footer, CtaBand, PageHero, CountUp, useReveal } = window.HaceyShell;
const { Button, Badge } = window.HaceyDesignSystem_f6c402;

const CATS = ['All', 'Health', 'Rights & Advocacy', 'Economic', 'Environment'];
const stories = [
  ['assets/img/practice-environment.jpg', 'Environment', 'Zero Carbon Leadership', 'Championed the "Zero Carbon Africa" initiative across 6 African countries, leading the charge toward a sustainable and carbon-neutral future.'],
  ['assets/img/impact-women-youth.jpg', 'Rights & Advocacy', 'Women & Youth Empowerment', 'Empowered women and young people with financial inclusion, economic empowerment and digital access interventions.'],
  ['assets/img/impact-health-workers.jpg', 'Health', 'Health Worker Training', 'Enhanced healthcare delivery in underserved areas by training health workers and equipping them with digital tools, including tablets and mobile phones.'],
  ['assets/img/practice-health.jpg', 'Health', 'Malaria Prevention', 'Donated over 100,000 doses of IPTp-SP and 10,000 malaria rapid diagnostic test kits toward malaria prevention efforts in Oyo State.'],
  ['assets/img/impact-business.jpg', 'Economic', 'Business Support', 'Empowered more than 20 businesses to implement sustainability-focused interventions, enabling lasting impact on the environment and society.'],
  ['assets/img/impact-media.jpg', 'Rights & Advocacy', 'Media Empowerment', 'Equipped 96 media personnel, 322 community leaders and 69 EndFGM Alliance participants to address FGM, sexual and reproductive health, and youth unemployment.'],
];
const stats = [[17, '+', 'Years of impact'], [40, '+', 'Programs delivered'], [100000, '+', 'IPTp-SP doses donated'], [6, '', 'African countries']];

function Impact() {
  useReveal();
  const [cat, setCat] = React.useState('All');
  const shown = cat === 'All' ? stories : stories.filter((s) => s[1] === cat);
  return (
    <div>
      <Nav active="Impact" />
      <PageHero eyebrow="Our impact" title="Transforming lives and communities, one story at a time." lead="For over 17 years we have transformed lives across Africa and beyond — from empowering women and youth to advancing environmental sustainability, rooted in measurable outcomes and lasting change." image="assets/img/impact-women-youth.jpg" />

      {/* stats */}
      <section style={{ background: 'var(--hacey-navy-dark)', padding: '72px 0' }}><div className="wrap grid-4">
        {stats.map(([n, s, l], i) => (
          <div key={l} className={'reveal d' + ((i % 4) + 1)} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(34px,4vw,48px)', color: 'var(--hacey-lime)', lineHeight: 1 }}><CountUp end={n} suffix={s} /></div>
            <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, marginTop: 8 }}>{l}</div>
          </div>
        ))}
      </div></section>

      {/* stories with filter */}
      <section className="section"><div className="wrap">
        <div className="reveal" style={{ marginBottom: 32 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Success stories</div>
          <h2 style={{ fontSize: 'var(--text-3xl)' }}>Impact you can measure.</h2>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 36 }}>
          {CATS.map((c) => {
            const on = c === cat;
            return <button key={c} onClick={() => setCat(c)} style={{ cursor: 'pointer', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, padding: '9px 18px', borderRadius: 'var(--radius-pill)', border: '2px solid ' + (on ? 'var(--hacey-navy)' : 'var(--border-default)'), background: on ? 'var(--hacey-navy)' : '#fff', color: on ? '#fff' : 'var(--gray-700)', transition: 'all .18s ease' }}>{c}</button>;
          })}
        </div>
        <div className="grid-3">
          {shown.map(([img, tag, t, d], i) => (
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

      <CtaBand />
      <Footer />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<Impact />);
