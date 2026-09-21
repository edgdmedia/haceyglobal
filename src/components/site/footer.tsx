import Link from 'next/link';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div><Link href="/" className="wordmark footer-wordmark"><span className="wordmark-mark">H</span><span>HACEY <b>GLOBAL</b></span></Link><p>Strategy, technology and programme execution designed to become internal capability.</p></div>
        <div><strong>Explore</strong><Link href="/capabilities">Capabilities</Link><Link href="/solutions">Solutions</Link><Link href="/industries">Industries</Link><Link href="/products">Products</Link></div>
        <div><strong>Company</strong><Link href="/approach">Our approach</Link><Link href="/about">About</Link><Link href="/insights">Insights</Link><Link href="/contact">Contact</Link></div>
        <div><strong>Contact</strong><span>Austin, Texas, USA</span><a href="mailto:isaiah@haceyglobal.com">isaiah@haceyglobal.com</a></div>
      </div>
      <div className="shell footer-base"><span>© 2026 HACEY Global</span><nav aria-label="Legal"><Link href="/privacy">Privacy</Link><Link href="/cookies">Cookies</Link><Link href="/terms">Terms</Link><Link href="/accessibility">Accessibility</Link><Link href="/security">Security</Link></nav></div>
    </footer>
  );
}
