import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const InfoCard = ({ icon: Icon, title, description }: InfoCardProps) => {
  return (
    <div className="w-auto">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[rgb(var(--primary-main))] bg-opacity-10">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-[rgb(var(--text-primary))]">{title}</h3>
      </div>
      <p className="text-[rgb(var(--text-secondary))] text-wrap">{description}</p>
    </div>
  );
};
