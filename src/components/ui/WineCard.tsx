'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import type { Wine } from '@/lib/wines';

interface WineCardProps {
  wine: Wine;
}

export default function WineCard({ wine }: WineCardProps) {
  const t = useTranslations();
  const [imgError, setImgError] = useState(false);

  return (
    <article className="bg-cream rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-cream-dark flex flex-col">
      {/* Bottle image */}
      <div className="relative h-80 overflow-hidden">
        <Image
          src={imgError ? '/images/wines/bottle-placeholder.svg' : wine.image}
          alt={wine.imageAlt}
          fill
          className="object-cover object-center"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setImgError(true)}
        />
        {/* Subtle gradient at bottom for text legibility */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-cream/60 to-transparent" />
        {/* Vintage badge */}
        <span className="absolute top-4 right-4 bg-burgundy text-cream text-xs font-semibold px-3 py-1 rounded-full tracking-wider">
          {wine.vintage}
        </span>
      </div>

      {/* Card content */}
      <div className="p-6 flex flex-col flex-1">
        <h3
          className="text-xl font-heading font-semibold text-burgundy-dark mb-3"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {t(wine.nameKey as Parameters<typeof t>[0])}
        </h3>

        <div className="flex gap-4 text-sm mb-4 text-warm-gray">
          <span>
            <span className="font-medium text-charcoal">{t('products.card.abv')}:</span>{' '}
            {wine.abv}
          </span>
          <span>
            <span className="font-medium text-charcoal">{t('products.card.volume')}:</span>{' '}
            {wine.volume}
          </span>
        </div>

        <div className="mb-4">
          <h4 className="text-xs uppercase tracking-widest text-gold font-semibold mb-2">
            {t('products.card.tasting')}
          </h4>
          <p className="text-sm text-charcoal/80 leading-relaxed">
            {t(wine.tastingKey as Parameters<typeof t>[0])}
          </p>
        </div>

        <div className="mt-auto pt-4 border-t border-cream-dark">
          <h4 className="text-xs uppercase tracking-widest text-gold font-semibold mb-2">
            {t('products.card.pairing')}
          </h4>
          <p className="text-sm text-charcoal/70 italic">
            {t(wine.pairingKey as Parameters<typeof t>[0])}
          </p>
        </div>
      </div>
    </article>
  );
}
