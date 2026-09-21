import type { Metadata } from 'next';
import { Geist, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';

const geist = Geist({ variable: '--font-sans', subsets: ['latin'] });
const mono = IBM_Plex_Mono({ variable: '--font-mono', subsets: ['latin'], weight: ['400', '500'] });

export const metadata: Metadata = {
  title: { default: 'HACEY Global | Strategy, Technology and Transformation', template: '%s | HACEY Global' },
  description: 'HACEY Global helps organisations diagnose complex challenges, implement practical technology and build the internal capability to sustain measurable change.',
  metadataBase: new URL('https://haceyglobal.com'),
  icons: { icon: '/favicon.svg' },
  openGraph: { title: 'HACEY Global', description: 'Make complex transformation work in practice.', type: 'website', images: [{ url: '/og.png', width: 1200, height: 630, alt: 'HACEY Global - Make complex transformation work in practice.' }] },
  twitter: { card: 'summary_large_image', title: 'HACEY Global', description: 'Make complex transformation work in practice.', images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = { '@context': 'https://schema.org', '@type': 'Organization', name: 'HACEY Global', url: 'https://haceyglobal.com', foundingDate: '2007', email: 'isaiah@haceyglobal.com', address: { '@type': 'PostalAddress', addressLocality: 'Austin', addressRegion: 'TX', addressCountry: 'US' } };
  return <html lang="en"><body className={`${geist.variable} ${mono.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, '\\u003c') }} /><a className="skip-link" href="#main-content">Skip to content</a><Header /><div id="main-content">{children}</div><Footer /></body></html>;
}
