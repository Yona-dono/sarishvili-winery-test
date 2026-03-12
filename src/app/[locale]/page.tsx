import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProductsSection from '@/components/sections/ProductsSection';
import StoreLocatorSection from '@/components/sections/StoreLocatorSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <StoreLocatorSection />
      <ContactSection />
    </>
  );
}
