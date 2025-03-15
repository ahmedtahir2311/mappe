import { StatCard } from '@/components/ui/stat-card';
import { InfoCard } from '@/components/ui/info-card';
import { Lock, Code2 } from 'lucide-react';
import Card from '@/components/ui/card';

const About = () => {
  return (
    <section className="w-full py-10 px-4 md:px-8 lg:px-16 bg-[rgb(var(--background-primary))]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Stats */}
        <div className="space-y-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StatCard icon={Code2} title="5+" subtitle="Years of Experience" />
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-8">
          <div>
            <span className="text-[rgb(var(--primary-main))] font-semibold mb-4 block">
              ABOUT ME
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[rgb(var(--text-primary))]">
              Boost Business Strategic Solutions with Me
            </h2>
            <p className="text-[rgb(var(--text-secondary))] mb-8">
              Business consulting consultants provide expert advice and guidance to businesses to
              help them improve their performance, efficiency, and organizational
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="max-w-max max-h-max">
              {' '}
              <InfoCard
                icon={Lock}
                title="Business Solutions"
                description="Each one showcases my approach and dedication to detail, creativity"
              />
            </Card>
          </div>

          <button className="px-8 py-4 bg-[rgb(var(--primary-main))] text-white rounded-full font-semibold hover:opacity-90 transition-opacity">
            Read More About Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
