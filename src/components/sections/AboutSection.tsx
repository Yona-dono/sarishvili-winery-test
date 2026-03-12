import { useTranslations } from 'next-intl';
import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';

const blocks = [
  { label: 'history', icon: '🏡' },
  { label: 'region', icon: '🗺️' },
  { label: 'grape', icon: '🍇' },
] as const;

export default function AboutSection() {
  const t = useTranslations('about');

  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-cream"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Our Story
          </p>
          <h2
            id="about-heading"
            className="text-4xl lg:text-5xl font-heading font-semibold text-burgundy-dark"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t('heading')}
          </h2>
          <div className="mt-4 mx-auto h-px w-24 bg-gold/40" />
        </AnimatedSection>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image column with parallax */}
          <AnimatedSection delay={100}>
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/5]">
              <Image
                src="/images/about/IMG_0084.JPG"
                alt="Sarishvili Ckhaveri Rosé bottle surrounded by fresh Georgian fruits"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gold frame accent */}
              <div className="absolute inset-4 border border-gold/20 rounded-lg pointer-events-none" />
            </div>
          </AnimatedSection>

          {/* Text blocks column */}
          <div className="space-y-10">
            {blocks.map(({ label }, i) => (
              <AnimatedSection key={label} delay={200 + i * 150}>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-1 bg-gradient-to-b from-gold to-gold/20 rounded-full" />
                  <div>
                    <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
                      {t(`${label}.label`)}
                    </span>
                    <h3
                      className="text-2xl font-heading font-semibold text-burgundy-dark mt-1 mb-3"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {t(`${label}.title`)}
                    </h3>
                    <p className="text-charcoal/80 leading-relaxed">
                      {t(`${label}.body`)}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
