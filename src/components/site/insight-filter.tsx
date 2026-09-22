'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Article } from '@/lib/content';

const ALL = 'All';

export function InsightFilter({ articles, categories }: { articles: Article[]; categories: string[] }) {
  const [active, setActive] = useState(ALL);

  // Categories with no article are shown but disabled, so the topic list still
  // reads as a statement of coverage without offering an empty result set.
  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const article of articles) map.set(article.category, (map.get(article.category) ?? 0) + 1);
    return map;
  }, [articles]);

  const visible = active === ALL ? articles : articles.filter(article => article.category === active);

  return (
    <>
      <section className="shell category-row" aria-label="Filter insights by topic">
        <div className="category-scroll" role="group">
          <button
            type="button"
            className={active === ALL ? 'category-chip is-active' : 'category-chip'}
            aria-pressed={active === ALL}
            onClick={() => setActive(ALL)}
          >
            All <span className="category-count">{articles.length}</span>
          </button>
          {categories.map(category => {
            const count = counts.get(category) ?? 0;
            return (
              <button
                key={category}
                type="button"
                className={active === category ? 'category-chip is-active' : 'category-chip'}
                aria-pressed={active === category}
                disabled={count === 0}
                title={count === 0 ? `No insights published under ${category} yet` : undefined}
                onClick={() => setActive(category)}
              >
                {category} <span className="category-count">{count}</span>
              </button>
            );
          })}
        </div>
      </section>

      <p className="visually-hidden" role="status">
        {visible.length} {visible.length === 1 ? 'insight' : 'insights'}
        {active === ALL ? '' : ` in ${active}`}
      </p>

      <section className="section shell insight-grid">
        {visible.map((article, index) => (
          <Link
            href={`/insights/${article.slug}`}
            className={index === 0 ? 'insight-card featured' : 'insight-card'}
            key={article.slug}
          >
            <span>{article.category}</span>
            <h2>{article.title}</h2>
            <p>{article.dek}</p>
            <small>{article.readingTime}</small>
            <ArrowUpRight />
          </Link>
        ))}
      </section>
    </>
  );
}
