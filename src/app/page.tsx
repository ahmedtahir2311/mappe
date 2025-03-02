import HeroBanner from '@/components/module/hero-banner';

export default function Home() {
  return (
    <div className="flex flex-col bg-[rgb(var(--background-primary))]">
      {/* Hero Banner Section */}
      <HeroBanner />

      {/* About Section */}
      {/* <AboutSection /> */}
    </div>
  );
}
