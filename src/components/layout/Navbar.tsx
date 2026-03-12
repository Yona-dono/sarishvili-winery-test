'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LanguageToggle from './LanguageToggle';

const navLinks = [
  { href: '#about', labelKey: 'nav.about' },
  { href: '#wines', labelKey: 'nav.wines' },
  { href: '#where', labelKey: 'nav.where' },
  { href: '#contact', labelKey: 'nav.contact' },
] as const;

export default function Navbar() {
  const t = useTranslations();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-burgundy-dark/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="#hero"
          className="flex items-center gap-2 group"
          aria-label={t('nav.logoAlt')}
        >
          <span
            className="text-xl font-heading font-semibold text-cream tracking-wide group-hover:text-gold-light transition-colors"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            სარიშვილი
          </span>
          <span className="text-gold/60 text-lg" aria-hidden="true">|</span>
          <span
            className="text-sm font-heading text-cream/80 tracking-wider uppercase group-hover:text-gold-light transition-colors"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Sarishvili
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map(({ href, labelKey }) => (
            <li key={href}>
              <a
                href={href}
                className="text-cream/80 hover:text-gold-light transition-colors text-sm tracking-wide uppercase font-medium"
              >
                {t(labelKey)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <LanguageToggle />
          {/* Mobile hamburger */}
          <button
            className="md:hidden text-cream p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">{menuOpen ? 'Close' : 'Menu'}</span>
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-cream transition-transform origin-center ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-cream transition-opacity ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-cream transition-transform origin-center ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile slide drawer */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-burgundy-dark/98 transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-80' : 'max-h-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col px-4 pb-4 gap-1" role="list">
          {navLinks.map(({ href, labelKey }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-cream/90 hover:text-gold-light transition-colors text-base tracking-wide border-b border-cream/10 last:border-0"
              >
                {t(labelKey)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
