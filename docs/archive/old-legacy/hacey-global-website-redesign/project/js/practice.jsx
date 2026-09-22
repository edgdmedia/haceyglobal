const { Nav, Footer, CtaBand, PageHero, useReveal } = window.HaceyShell;
const { Button } = window.HaceyDesignSystem_f6c402;

const areas = [
  ['assets/img/practice-health.jpg', 'Health & Wellbeing', 'We strive to enhance health security and access to quality healthcare and nutrition, combating diseases and promoting healthier behaviors within communities.', ['Maternal & reproductive health', 'Malaria prevention', 'Nutrition & disease response']],
  ['assets/img/practice-economic.jpg', 'Economic Inclusion', 'Our initiatives uplift marginalized individuals by creating sustainable employment, fostering entrepreneurship, increasing access to financial services and improving income.', ['Entrepreneurship support', 'Financial inclusion', 'Youth employment']],
  ['assets/img/practice-rights.jpg', 'Rights & Advocacy', 'We champion human rights through legal and policy change, raise awareness, and empower communities with knowledge to ensure a just and inclusive society.', ['SRHR advocacy', 'EndFGM Alliance', 'Community leadership']],
  ['assets/img/practice-environment.jpg', 'Environmental Sustainability', 'Committed to a greener future, we lead initiatives that reduce carbon footprints, conserve resources and preserve biodiversity.', ['Zero Carbon Africa', 'Resource conservation', 'Business sustainability']],
];

function Practice() {
  useReveal();
  return (
    <div>
      <Nav active="Practice Areas" />
      <PageHero eyebrow="Where we work" title="Driving sustainable change across key development sectors." lead="HACEY harnesses novel approaches and cutting-edge tools to drive impactful social change across four interconnected practice areas." image="assets/img/practice-health.jpg" />

      <section className="section"><div className="wrap" style={{ display: 'grid', gap: 32 }}>
        {areas.map(([img, t, d, tags], i) => (
          <article key={t} className="reveal cols2" style={{ display: 'grid', gridTemplateColumns: i % 2 ? '1fr 1.15fr' : '1.15fr 1fr', gap: 44, alignItems: 'center' }}>
            <div style={{ order: i % 2 ? 2 : 1, borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
              <img src={img} alt={t} style={{ display: 'block', width: '100%', height: 320, objectFit: 'cover' }} />
            </div>
            <div style={{ order: i % 2 ? 1 : 2 }}>
              <div className="eyebrow" style={{ marginBottom: 12 }}>{('0' + (i + 1))} &mdash; Practice Area</div>
              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 16 }}>{t}</h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-body)', marginBottom: 20 }}>{d}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {tags.map((tag) => (
                  <span key={tag} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--hacey-teal-tint)', color: 'var(--hacey-teal-dark)', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, padding: '7px 14px', borderRadius: 'var(--radius-pill)' }}>
                    <span style={{ color: 'var(--hacey-lime-dark)', fontWeight: 900 }}>&#10003;</span>{tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div></section>

      <CtaBand />
      <Footer />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<Practice />);
