import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-burgundy-dark text-cream" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Logo + tagline */}
          <div>
            <div
              className="text-2xl font-heading font-semibold mb-3 text-gold-light"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              სარიშვილი · Sarishvili
            </div>
            <p className="text-cream/70 text-sm leading-relaxed mb-4">
              {t('tagline')}
            </p>
            {/* Social icons */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('social.facebook')}
                className="text-cream/60 hover:text-gold-light transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V21.88C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('social.instagram')}
                className="text-cream/60 hover:text-gold-light transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Address + contact */}
          <div>
            <h3 className="text-gold-light font-heading text-lg mb-4 font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
              Contact
            </h3>
            <address className="not-italic text-cream/70 text-sm space-y-2">
              <p>{t('address')}</p>
              <p>
                <a href={`mailto:${t('email')}`} className="hover:text-gold-light transition-colors">
                  {t('email')}
                </a>
              </p>
              <p>
                <a href={`tel:${t('phone')}`} className="hover:text-gold-light transition-colors">
                  {t('phone')}
                </a>
              </p>
            </address>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h3 className="text-gold-light font-heading text-lg mb-4 font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
              Navigation
            </h3>
            <ul className="text-cream/70 text-sm space-y-2" role="list">
              {(
                [
                  ['#about', t('nav.about')],
                  ['#wines', t('nav.wines')],
                  ['#where', t('nav.where')],
                  ['#contact', t('nav.contact')],
                ] as const
              ).map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="hover:text-gold-light transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 text-center text-cream/40 text-xs">
          {t('copyright', { year })}
        </div>
      </div>
    </footer>
  );
}
