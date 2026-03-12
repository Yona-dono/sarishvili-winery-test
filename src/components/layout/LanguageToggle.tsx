'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { startTransition } from 'react';

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(next: 'en' | 'ka') {
    if (next === locale) return;
    startTransition(() => {
      // Replace current locale prefix in path
      const newPath = pathname.replace(`/${locale}`, `/${next}`);
      router.replace(newPath);
    });
  }

  return (
    <div
      className="flex items-center gap-1 text-sm font-medium"
      role="group"
      aria-label="Language selection"
    >
      <button
        onClick={() => switchLocale('en')}
        aria-pressed={locale === 'en'}
        aria-label="Switch to English"
        className={`px-2 py-1 rounded transition-colors ${
          locale === 'en'
            ? 'text-gold-light font-semibold'
            : 'text-cream/70 hover:text-cream'
        }`}
      >
        EN
      </button>
      <span className="text-cream/40" aria-hidden="true">|</span>
      <button
        onClick={() => switchLocale('ka')}
        aria-pressed={locale === 'ka'}
        aria-label="გადართვა ქართულზე"
        className={`px-2 py-1 rounded transition-colors font-body ${
          locale === 'ka'
            ? 'text-gold-light font-semibold'
            : 'text-cream/70 hover:text-cream'
        }`}
      >
        KA
      </button>
    </div>
  );
}
