import HeroBanner from '@/components/module/hero-banner';
import Services from '@/components/module/services';
import About from '@/components/module/about';

export default function Home() {
  return (
    <div className="flex flex-col bg-[rgb(var(--background-primary))]">
      {/* Hero Banner Section */}
      <HeroBanner />

      {/* Services Section */}
      <Services />

      {/* About Section */}
      <About />
    </div>
  );
}
