'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { wines, type Vintage } from '@/lib/wines';
import WineCard from '@/components/ui/WineCard';
import VintageFilter from '@/components/ui/VintageFilter';

type FilterValue = 'all' | Vintage;

export default function ProductsSection() {
  const t = useTranslations('products');
  const [filter, setFilter] = useState<FilterValue>('all');

  const filtered = filter === 'all' ? wines : wines.filter((w) => w.vintage === filter);

  return (
    <section
      id="wines"
      className="py-24 lg:py-32 bg-burgundy-dark/5"
      aria-labelledby="wines-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Ckhaveri Rosé
          </p>
          <h2
            id="wines-heading"
            className="text-4xl lg:text-5xl font-heading font-semibold text-burgundy-dark mb-2"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t('heading')}
          </h2>
          <p className="text-warm-gray">{t('subheading')}</p>
          <div className="mt-4 mx-auto h-px w-24 bg-gold/40" />
        </div>

        {/* Vintage filter */}
        <VintageFilter selected={filter} onChange={setFilter} />

        {/* Wine grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          aria-live="polite"
          aria-label={`Showing ${filtered.length} wine${filtered.length !== 1 ? 's' : ''}`}
        >
          {filtered.map((wine) => (
            <WineCard key={wine.id} wine={wine} />
          ))}
        </div>
      </div>
    </section>
  );
}
