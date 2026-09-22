import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { DetailItem } from '@/lib/content';

export function CardGrid({ items, base }: { items: DetailItem[]; base: string }) {
  return <div className="detail-card-grid">{items.map((item, index) => (
    <Link href={`${base}/${item.slug}`} className="detail-card" key={item.slug}>
      <span>{String(index + 1).padStart(2, '0')}</span><h2>{item.title}</h2><p>{item.summary}</p><ArrowUpRight />
    </Link>
  ))}</div>;
}
