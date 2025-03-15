import { SERVICES } from '@/lib/constants';
import { InfoCard } from '../ui/info-card';
import Card from '../ui/card';

const Services = () => {
  return (
    <section className=" w-full py-36 px-4 md:px-8 lg:px-16 bg-[rgb(var(--background-primary))] text-[rgb(var(--text-primary))]">
      <div className=" mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-[rgb(var(--primary-main))]">
            What I Provide For You
          </h2>
          <p className=" max-w-2xl mx-auto">
            Delivering high-quality solutions tailored to your specific needs with a focus on
            performance and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            return (
              <Card key={index} className="max-w-max max-h-max">
                <InfoCard
                  description={service.description}
                  icon={service.icon}
                  title={service.title}
                />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
