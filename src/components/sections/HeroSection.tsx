import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image — fills behind everything */}
      <Image
        src="/images/hero/Long Pic 1 mb.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        aria-hidden="true"
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-gold/60" />
          <span className="text-gold/80 text-xs uppercase tracking-[0.3em] font-medium">
            Lanchkhuti · Guria · Georgia
          </span>
          <div className="h-px w-16 bg-gold/60" />
        </div>

        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-heading font-semibold text-cream mb-4 leading-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          სარიშვილი
          <span className="block text-3xl sm:text-4xl lg:text-5xl text-gold-light mt-2 tracking-wider">
            Sarishvili
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-cream/90 mb-3 font-heading italic" style={{ fontFamily: 'var(--font-heading)' }}>
          {t('tagline')}
        </p>

        <p className="text-base sm:text-lg text-cream/70 mb-10 tracking-wide">
          {t('subtitle')}
        </p>

        <a
          href="#wines"
          className="inline-flex items-center gap-2 bg-gold text-burgundy-dark font-semibold px-8 py-4 rounded-md hover:bg-gold-light transition-colors duration-200 shadow-lg text-base tracking-wide"
        >
          {t('cta')}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden="true">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-cream/40" />
      </div>
    </section>
  );
}
