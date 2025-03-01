import Image from 'next/image';
import { SectionTitle } from '@/components/ui/section-title';
import { ScrollDownIndicator } from '@/components/ui/scroll-down-indicator';
import { SmoothScrollLink } from '@/components/ui/smooth-scroll-link';

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
            <SmoothScrollLink
              href="#about"
              className="px-8 py-3 bg-white text-[rgb(var(--primary-main))] rounded-full font-medium hover:bg-opacity-90 transition-all"
            >
              Learn More
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#contact"
              className="px-8 py-3 border-2 border-white rounded-full font-medium hover:bg-white hover:bg-opacity-10 transition-all"
            >
              Contact Me
            </SmoothScrollLink>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <ScrollDownIndicator targetId="about" />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="About" highlight="Me" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed
                euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl
                sit amet nisl.
              </p>
              <p className="text-lg mb-6">
                Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl
                nisl sit amet nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex gap-4">
                <SmoothScrollLink
                  href="#projects"
                  className="px-6 py-2 bg-[rgb(var(--primary-main))] text-white rounded-full font-medium hover:bg-opacity-90 transition-all"
                >
                  View Projects
                </SmoothScrollLink>
                <a
                  href="/resume.pdf"
                  className="px-6 py-2 border border-[rgb(var(--primary-main))] text-[rgb(var(--primary-main))] rounded-full font-medium hover:bg-[rgb(var(--primary-main))] hover:bg-opacity-10 transition-all"
                  target="_blank"
                >
                  Download Resume
                </a>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/about-image.jpg" alt="About Me" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-6 md:px-12 lg:px-24 bg-[rgb(var(--background-secondary))]"
      >
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="My" highlight="Services" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-[rgb(var(--background-primary))] p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-[rgb(var(--primary-main))] text-white rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 18l6-6-6-6"></path>
                  <path d="M8 6l-6 6 6 6"></path>
                  <path d="M1.2 12h22"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Web Development</h3>
              <p className="text-[rgb(var(--text-secondary))]">
                Custom web applications built with modern frameworks like React, Next.js, and
                Node.js.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-[rgb(var(--background-primary))] p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-[rgb(var(--primary-main))] text-white rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">AI Integration</h3>
              <p className="text-[rgb(var(--text-secondary))]">
                Implementing AI solutions to enhance your applications with machine learning
                capabilities.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-[rgb(var(--background-primary))] p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-[rgb(var(--primary-main))] text-white rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Blockchain Development</h3>
              <p className="text-[rgb(var(--text-secondary))]">
                Building decentralized applications and smart contracts on various blockchain
                platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Projects" highlight="My" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-[rgb(var(--background-primary))] p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="relative h-[200px] rounded-lg overflow-hidden mb-6">
                <Image src="/images/project-1.jpg" alt="Project 1" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-3">Project 1</h3>
              <p className="text-[rgb(var(--text-secondary))]">A brief description of Project 1.</p>
            </div>

            {/* Project Card 2 */}
            <div className="bg-[rgb(var(--background-primary))] p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="relative h-[200px] rounded-lg overflow-hidden mb-6">
                <Image src="/images/project-2.jpg" alt="Project 2" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-3">Project 2</h3>
              <p className="text-[rgb(var(--text-secondary))]">A brief description of Project 2.</p>
            </div>

            {/* Project Card 3 */}
            <div className="bg-[rgb(var(--background-primary))] p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="relative h-[200px] rounded-lg overflow-hidden mb-6">
                <Image src="/images/project-3.jpg" alt="Project 3" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-3">Project 3</h3>
              <p className="text-[rgb(var(--text-secondary))]">A brief description of Project 3.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 md:px-12 lg:px-24 bg-[rgb(var(--background-secondary))]"
      >
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Contact" highlight="Me" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-lg mb-8">
                Feel free to reach out to me for any inquiries or collaboration opportunities.
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to
                be part of your vision.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[rgb(var(--primary-main))] text-white rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p>+1 (123) 456-7890</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[rgb(var(--primary-main))] text-white rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p>hello@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[rgb(var(--primary-main))] text-white rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p>New York, NY, USA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[rgb(var(--background-primary))] p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-[rgb(var(--text-secondary))]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-main))]"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-[rgb(var(--text-secondary))]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-main))]"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-[rgb(var(--text-secondary))]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-main))]"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-[rgb(var(--text-secondary))]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-main))]"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-[rgb(var(--primary-main))] text-white rounded-full font-medium hover:bg-opacity-90 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 lg:px-24 bg-[rgb(var(--background-primary))] border-t border-[rgb(var(--text-secondary))/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-[rgb(var(--text-secondary))]">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary-main))]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary-main))]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary-main))]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="#"
              className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary-main))]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
