import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      aria-label="Hero"
    >
      {/* Background video (desktop) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        aria-hidden="true"
        preload="metadata"
      >
        <source src="/videos/vineyard-loop.mp4" type="video/mp4" />
      </video>

      {/* Background image (mobile + video fallback) */}
      {/* Using a CSS bg until real image is placed */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center md:hidden"
        style={{ backgroundImage: 'url(/images/hero/hero-mobile.webp)' }}
        aria-hidden="true"
      />

      {/* Fallback color when no video/image */}
      <div className="absolute inset-0 bg-burgundy-dark" aria-hidden="true" />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/40" aria-hidden="true">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-cream/40" />
      </div>
    </section>
  );
}
