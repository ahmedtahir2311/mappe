import Image from 'next/image';
import { TypingEffect } from '@/components/ui/typing-effect';
import { Button } from '@/components/ui/button';

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
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          {/* Left Section - Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
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

            <Button variant="primary" buttonStyle="contained" size="md" withRipple={true}>
              Learn More
            </Button>
          </div>

          {/* Right Section - Image with overlaid text */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative h-[70vh] lg:h-[100vh]">
            {/* Top "WEB DESIGNER" text overlay with wave animation */}
            <div className="absolute top-[30%] z-10 w-full flex justify-center">
              <h2 className="text-5xl md:text-6xl font-bold text-[rgb(var(--background-primary-main))] opacity-70">
                WEB DESIGNER{' '}
                {/* {isMounted && (
                  <TextAnimation
                    text="WEB DESIGNER"
                    animationStyle="wave"
                    charClassName="mx-[1px]"
                    activeCharClassName="opacity-100"
                    duration={600}
                    staggerDelay={100}
                    sequential={true}
                    infinite={true}
                    delay={1000}
                  />
                )} */}
              </h2>
            </div>

            {/* Main image */}
            <div className="absolute inset-0 flex items-end justify-center z-20">
              <Image
                src="/assets/images/banner-user-image-one.png"
                alt="Web Designer Professional"
                className="object-contain "
                height={600}
                width={500}
                quality={100}
                priority
              />
            </div>

            {/* Bottom "WEB DESIGNER" text with bouncing effect */}
            <div className="absolute bottom-[5%] z-30 w-full flex justify-center">
              <h2
                className="text-5xl md:text-6xl font-bold text-[rgb(var(--text-primary))] tracking-widest"
                style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.2)' }}
              >
                WEB DESIGNER
                {/* {isMounted && (
                  <TextAnimation
                    text="WEB DESIGNER"
                    animationStyle="bounce"
                    charClassName="mx-[2px]"
                    activeCharClassName="text-[rgb(var(--primary-main))]"
                    duration={400}
                    staggerDelay={80}
                    sequential={true}
                    infinite={true}
                  />
                )} */}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
