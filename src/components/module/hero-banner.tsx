import Image from 'next/image';
import { TypingEffect } from '@/components/ui/typing-effect';
import { Button } from '@/components/ui/button';
import { SocialItem } from '@/components/ui/social-item';
import { Github, Linkedin } from 'lucide-react';

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

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <Button variant="primary" buttonStyle="contained" size="md" withRipple={true}>
                Download Resume
              </Button>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <SocialItem
                  icon={<Github size={20} />}
                  href="https://github.com/ahmedtahir"
                  label="GitHub"
                  showTooltip={false}
                />
                <SocialItem
                  icon={<Linkedin size={20} />}
                  href="https://linkedin.com/in/ahmedtahir"
                  label="LinkedIn"
                  showTooltip={false}
                />
                <SocialItem
                  icon={
                    <svg
                      width={20}
                      height={20}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>Upwork icon</title>
                        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"></path>
                      </g>
                    </svg>
                  }
                  href="https://upwork.com/freelancers/ahmedtahir"
                  label="Upwork"
                  showTooltip={false}
                />
              </div>
            </div>
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
                className="object-contain h-full w-full"
                height={500}
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
