import { useTranslations } from 'next-intl';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ContactForm from '@/components/ui/ContactForm';

export default function ContactSection() {
  const t = useTranslations('contact');

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-cream"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading + info */}
          <AnimatedSection>
            <p className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3">
              Contact
            </p>
            <h2
              id="contact-heading"
              className="text-4xl lg:text-5xl font-heading font-semibold text-burgundy-dark mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {t('heading')}
            </h2>
            <div className="h-px w-24 bg-gold/40 mb-6" />
            <p className="text-charcoal/70 leading-relaxed text-lg mb-10">
              {t('subheading')}
            </p>

            {/* Contact details */}
            <div className="space-y-4 text-sm text-charcoal/80">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Lanchkhuti, Guria Region, Georgia</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@sarishviliwinery.ge" className="hover:text-gold transition-colors">
                  info@sarishviliwinery.ge
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+995599000000" className="hover:text-gold transition-colors">
                  +995 599 000 000
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: form */}
          <AnimatedSection delay={200}>
            <div className="bg-white rounded-xl shadow-md p-8 border border-cream-dark">
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
