'use client';

import Image from 'next/image';
import { TypingEffect } from '@/components/ui/typing-effect';
import Link from 'next/link';

const HeroBanner = () => {
  const professions = [
    'Full Stack Developer',
    'AI Enthusiast',
    'Blockchain Architect',
    'UI/UX Designer',
    'Freelancer',
  ];

  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden -mt-0 bg-[rgb(var(--background-primary))] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/banner-background-one.png"
          alt="Pattern Overlay"
          className="w-full h-full object-cover invert dark:invert-0"
          fill
          quality={100}
          placeholder="empty"
          priority
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJyEkKzI2LyssLTM1P0BGP0FHNi5GRVFXWlNQV2pgeGBQY3BzaXJYYVn/2wBDARUXFx4aHR4eHVlaL0IvQllaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWln/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 w-full px-6 md:px-12 lg:px-24 bg-transparent">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Section - Text Content (60% width on large screens) */}
            <div className="w-full lg:w-3/5 mb-10 lg:mb-0 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[rgb(var(--text-primary))]">
                I&apos;m Ahmed Tahir a <br />
                <span className="text-[rgb(var(--primary-main))]">
                  <TypingEffect
                    words={professions}
                    typingSpeed={100}
                    deletingSpeed={50}
                    delayBetweenWords={1500}
                  />
                </span>
              </h1>

              <p className="text-[rgb(var(--text-secondary))] text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
                With over 5 years of experience in development and design, I specialize in Web
                Applications that blend aesthetics with functionality. My expertise lies in merging
                technical precision with creative problem-solving to bring ideas to life.
              </p>

              <Link
                href="#about"
                className="inline-block px-8 py-3 bg-[rgb(var(--primary))] text-white rounded-md font-medium transition-all hover:bg-opacity-90 hover:translate-y-[-2px] shadow-md"
              >
                Learn More
              </Link>
            </div>

            {/* Right Section - Image (40% width on large screens) */}
            {/* Commented out as requested
            <div className="w-full lg:w-2/5 relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <Image
                  src="/assets/images/hero-image.png"
                  alt="Jane Cooper - Web Developer"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
