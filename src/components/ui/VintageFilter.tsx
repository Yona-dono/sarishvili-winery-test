'use client';

import { useTranslations } from 'next-intl';
import type { Vintage } from '@/lib/wines';

type FilterValue = 'all' | Vintage;

interface VintageFilterProps {
  selected: FilterValue;
  onChange: (value: FilterValue) => void;
}

export default function VintageFilter({ selected, onChange }: VintageFilterProps) {
  const t = useTranslations('products.filter');

  const options: { value: FilterValue; label: string }[] = [
    { value: 'all', label: t('all') },
    { value: '2022', label: t('2022') },
    { value: '2023', label: t('2023') },
    { value: '2024', label: t('2024') },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10" role="group" aria-label="Filter by vintage">
      {options.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onChange(value)}
          aria-pressed={selected === value}
          className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide border transition-all duration-200 focus-visible:outline-2 focus-visible:outline-gold ${
            selected === value
              ? 'bg-burgundy text-cream border-burgundy shadow-md'
              : 'bg-transparent text-burgundy border-burgundy/40 hover:border-burgundy hover:bg-burgundy/5'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
