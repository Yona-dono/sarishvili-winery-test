import { useTranslations } from 'next-intl';
import { locations } from '@/lib/locations';
import MapEmbed from '@/components/ui/MapEmbed';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function StoreLocatorSection() {
  const t = useTranslations();

  const winery = locations.find((l) => l.isWinery)!;
  const retailers = locations.filter((l) => !l.isWinery);

  return (
    <section
      id="where"
      className="py-24 lg:py-32 bg-cream-dark"
      aria-labelledby="locator-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Find Us
          </p>
          <h2
            id="locator-heading"
            className="text-4xl lg:text-5xl font-heading font-semibold text-burgundy-dark"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t('storeLocator.heading')}
          </h2>
          <p className="text-warm-gray mt-3 max-w-xl mx-auto">
            {t('storeLocator.subheading')}
          </p>
          <div className="mt-4 mx-auto h-px w-24 bg-gold/40" />
        </AnimatedSection>

        {/* Mobile: cards above map */}
        <div className="lg:hidden mb-10 space-y-6">
          <LocationCard location={winery} t={t} isWinery />
          {retailers.map((loc) => (
            <LocationCard key={loc.id} location={loc} t={t} />
          ))}
        </div>

        {/* Map */}
        <AnimatedSection className="mb-12">
          <MapEmbed title={t('storeLocator.mapTitle')} />
        </AnimatedSection>

        {/* Desktop: cards below map in grid */}
        <div className="hidden lg:grid grid-cols-2 xl:grid-cols-4 gap-6">
          <LocationCard location={winery} t={t} isWinery />
          {retailers.map((loc) => (
            <LocationCard key={loc.id} location={loc} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationCard({
  location,
  t,
  isWinery = false,
}: {
  location: (typeof locations)[number];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any;
  isWinery?: boolean;
}) {
  return (
    <div
      className={`rounded-lg p-6 shadow-sm border ${
        isWinery
          ? 'bg-burgundy text-cream border-burgundy'
          : 'bg-white border-cream-dark'
      }`}
    >
      {isWinery && (
        <span className="text-xs uppercase tracking-widest text-gold-light font-semibold block mb-2">
          {t('storeLocator.winery')}
        </span>
      )}
      <h3
        className={`font-heading text-lg font-semibold mb-3 ${isWinery ? 'text-cream' : 'text-burgundy-dark'}`}
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {t(location.nameKey)}
      </h3>
      <address className="not-italic text-sm space-y-1.5">
        <p className={isWinery ? 'text-cream/80' : 'text-charcoal/70'}>
          {t(location.addressKey)}
        </p>
        <p>
          <a
            href={`tel:${t(location.phoneKey)}`}
            className={`hover:underline ${isWinery ? 'text-gold-light' : 'text-gold'}`}
          >
            {t(location.phoneKey)}
          </a>
        </p>
        <p className={`text-xs ${isWinery ? 'text-cream/60' : 'text-warm-gray'}`}>
          {t(location.hoursKey)}
        </p>
      </address>
    </div>
  );
}
