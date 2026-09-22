import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
export default function NotFound() { return <main className="not-found shell"><p className="eyebrow">404</p><h1>This page could not be found.</h1><p className="lede">The link may have changed or the page may not yet be part of this preview.</p><Link className="button button-accent" href="/"><ArrowLeft /> Return home</Link></main>; }
