/* Shared shell for HACEY LLC redesign — nav, footer, CTA band, scroll reveal, count-up.
   Exposes helpers on window.HaceyShell; DS components come from window.HaceyDesignSystem_f6c402. */
const { Button } = window.HaceyDesignSystem_f6c402;

const NAV = [
  ['Home', 'index.html'],
  ['About', 'about.html'],
  ['Services', 'services.html'],
  ['Practice Areas', 'practice-areas.html'],
  ['Impact', 'impact.html'],
];
const MAILTO = 'mailto:isaiahowolabi@hacey.org';
const wrapCls = 'wrap';

/* ---- scroll reveal: attach .in when elements enter viewport ---- */
function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)');
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  });
}

/* ---- count-up figure that animates when scrolled into view ---- */
function CountUp({ end, suffix = '', prefix = '', dur = 1600, format = true, style }) {
  const ref = React.useRef(null);
  const [val, setVal] = React.useState(0);
  const done = React.useRef(false);
  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const run = () => {
      if (done.current) return; done.current = true;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(end * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    if (!('IntersectionObserver' in window)) { run(); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) run(); }), { threshold: 0.4 });
    io.observe(node);
    return () => io.disconnect();
  }, [end, dur]);
  const shown = format ? val.toLocaleString() : String(val);
  return <span ref={ref} style={style}>{prefix}{shown}{suffix}</span>;
}

/* ---- top navigation with working links + mobile menu ---- */
function Nav({ active }) {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="index.html" style={{ display: 'flex', alignItems: 'center' }} aria-label="HACEY home">
          <img src="assets/hacey-logo.png" alt="HACEY" style={{ height: 34 }} />
        </a>
        <button className="nav-burger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          <span></span><span></span><span></span>
        </button>
        <nav className={'nav-links' + (open ? ' open' : '')}>
          {NAV.map(([label, href]) => (
            <a key={label} href={href} className={'nav-link' + (label === active ? ' active' : '')} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href={MAILTO} style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, background: 'var(--action-primary)', color: '#fff', padding: '10px 22px', borderRadius: 'var(--radius-pill)', marginLeft: 6 }}>Get in Touch</a>
        </nav>
      </div>
    </header>
  );
}

/* ---- reusable "Work with Us" CTA band ---- */
function CtaBand() {
  const bullets = [
    'Access to a network of 200+ verified experts',
    'Evidence-based approach with proven results',
    'Innovative digital solutions for social impact',
  ];
  return (
    <section style={{ background: 'var(--hacey-navy)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div className="wrap cols2" style={{ padding: '80px 24px', display: 'grid', gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,0.9fr)', gap: 48, alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <div className="reveal">
          <div className="eyebrow on-dark" style={{ marginBottom: 14 }}>Partner with us</div>
          <h2 style={{ color: '#fff', fontSize: 'var(--text-4xl)', marginBottom: 22, maxWidth: 520 }}>Let&rsquo;s build systems that work for everyone.</h2>
          <div style={{ display: 'grid', gap: 14, marginBottom: 32 }}>
            {bullets.map((b) => (
              <div key={b} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <span style={{ flex: 'none', width: 26, height: 26, borderRadius: '50%', background: 'var(--hacey-lime)', color: 'var(--hacey-navy-dark)', display: 'grid', placeItems: 'center', fontWeight: 900, fontFamily: 'var(--font-display)', fontSize: 15 }}>&#10003;</span>
                <span style={{ fontSize: 16, color: 'rgba(255,255,255,0.9)' }}>{b}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Button variant="accent" size="lg" href={MAILTO}>Work with Us</Button>
            <Button variant="outline-inverse" size="lg" href="services.html">Explore Services</Button>
          </div>
        </div>
        <div className="reveal d2" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 'var(--radius-lg)', padding: 36 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
            {[['17', '+', 'Years of impact'], ['40', '+', 'Programs delivered'], ['200', '+', 'Verified experts'], ['6', '', 'African countries']].map(([n, s, l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--text-4xl)', color: 'var(--hacey-lime)', lineHeight: 1 }}>
                  <CountUp end={Number(n)} suffix={s} />
                </div>
                <div style={{ color: 'rgba(255,255,255,0.72)', fontSize: 14, marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- footer with working links + mailto ---- */
function Footer() {
  const item = { color: 'rgba(255,255,255,0.72)', fontSize: 14, lineHeight: 1.8 };
  const col = { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: '#fff', marginBottom: 14 };
  return (
    <footer style={{ background: 'var(--hacey-navy-dark)', color: '#fff' }}>
      <div className="wrap" style={{ padding: '64px 24px 32px', display: 'grid', gridTemplateColumns: '2fr 1.3fr 1fr', gap: 48 }}>
        <div>
          <span style={{ background: '#fff', borderRadius: 'var(--radius-md)', padding: '10px 16px', display: 'inline-block' }}><img src="assets/hacey-logo.png" alt="HACEY" style={{ height: 32, display: 'block' }} /></span>
          <p style={{ ...item, marginTop: 16, maxWidth: 360 }}>HACEY LLC is a social impact consultancy with over 17 years of experience transforming complex challenges into impactful solutions.</p>
        </div>
        <div>
          <div style={col}>Contact</div>
          <div style={item}>Austin, Texas</div>
          <div style={item}>(346) 438-9082</div>
          <div style={item}><a href={MAILTO} style={{ color: 'var(--hacey-lime)' }}>isaiah@haceyglobal.com</a></div>
        </div>
        <div>
          <div style={col}>Quick Links</div>
          <div style={{ display: 'grid', gap: 8 }}>
            {NAV.map(([l, h]) => <a key={l} href={h} style={{ ...item, textDecoration: 'none' }}>{l}</a>)}
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.14)', textAlign: 'center', padding: '18px 24px', fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>&copy; 2025 HACEY LLC. All rights reserved.</div>
    </footer>
  );
}

/* ---- partner / trust strip ---- */
function TrustStrip() {
  const partners = ['Access', 'Dangote Foundation', 'GBCHealth', 'Huawei', 'Zenith', 'UNICEF'];
  return (
    <div className="wrap" style={{ padding: '36px 24px' }}>
      <div className="reveal" style={{ textAlign: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12, letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--gray-500)', marginBottom: 22 }}>Trusted by leading partners &amp; funders</div>
      <div className="reveal d1" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px 44px' }}>
        {partners.map((p) => <span key={p} className="partner">{p}</span>)}
      </div>
    </div>
  );
}

/* ---- compact inner-page hero banner ---- */
function PageHero({ eyebrow, title, lead, image }) {
  return (
    <section className="hero">
      <div className={'hero-inner wrap' + (image ? ' cols2' : '')} style={{ display: 'grid', gridTemplateColumns: image ? 'minmax(0,1.1fr) minmax(0,0.9fr)' : '1fr', gap: 48, alignItems: 'center', padding: '72px 24px' }}>
        <div className="reveal in">
          <div className="eyebrow on-dark" style={{ marginBottom: 14 }}>{eyebrow}</div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(34px,4.4vw,52px)', fontWeight: 900, lineHeight: 1.06, letterSpacing: '-0.02em', maxWidth: 640 }}>{title}</h1>
          {lead && <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.85)', margin: '22px 0 0', maxWidth: 620 }}>{lead}</p>}
        </div>
        {image && (
          <div className="reveal in d2" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.35)' }}>
            <img src={image} alt="" style={{ display: 'block', width: '100%', height: 340, objectFit: 'cover' }} />
          </div>
        )}
      </div>
    </section>
  );
}

window.HaceyShell = { Nav, Footer, CtaBand, TrustStrip, CountUp, PageHero, useReveal, NAV, MAILTO, wrapCls };
