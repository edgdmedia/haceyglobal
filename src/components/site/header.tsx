import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Menu } from 'lucide-react';

const links = [
  ['/capabilities', 'Capabilities'],
  ['/solutions', 'Solutions'],
  ['/industries', 'Industries'],
  ['/products', 'Products'],
  ['/insights', 'Insights'],
  ['/about', 'About'],
];

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand-logo" aria-label="HACEY Global home">
        <Image src="/brand/hacey-global-horizontal.png" alt="HACEY Global" width={700} height={104} priority />
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <div className="header-actions">
        <Link href="/contact" className="button button-dark">Discuss your challenge <ArrowRight /></Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><Menu /></summary>
          <nav aria-label="Mobile navigation">
            {links.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
            <Link href="/approach">Our approach</Link>
            <Link href="/technology">Technology</Link>
            <Link href="/work">Work</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
