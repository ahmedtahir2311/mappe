import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col bg-[rgb(var(--background-primary))]">
      {/* Hero Banner Section */}
      <section className="relative h-[100vh] w-full overflow-hidden -mt-0">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Hero Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[rgb(var(--primary-main))] opacity-80"></div>
        </div>

        {/* Pattern Overlays */}
        <div className="absolute top-0 left-0 w-1/2 h-full z-10 opacity-10">
          <Image src="/images/pattern-1.svg" alt="Pattern Overlay" fill className="object-cover" />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full z-10 opacity-10">
          <Image src="/images/pattern-2.svg" alt="Pattern Overlay" fill className="object-cover" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-6 md:px-12 lg:px-24 pt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
            Welcome to <span className="text-[rgb(var(--accent-main))]">My Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mb-8">
            I&apos;m a Full-Stack Developer, AI Enthusiast & Blockchain Expert creating innovative
            solutions for the digital world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="px-8 py-3 bg-white text-[rgb(var(--primary-main))] rounded-full font-medium hover:bg-opacity-90 transition-all"
            >
              Learn More
            </a>
            <a
              href="#"
              className="px-8 py-3 border-2 border-white rounded-full font-medium hover:bg-white hover:bg-opacity-10 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
