import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon?: LucideIcon;
  title: string;
  subtitle: string;
}

export const StatCard = ({ icon: Icon, title, subtitle }: StatCardProps) => {
  return (
    <div className="bg-transparent p-6 rounded-2xl">
      {Icon && (
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[rgb(var(--primary-main))] bg-opacity-10 mb-4">
          <Icon className="w-6 h-6 text-white" />
        </div>
      )}
      <h3 className="text-4xl font-bold text-[rgb(var(--text-primary))] mb-2">{title}</h3>
      <p className="text-[rgb(var(--text-secondary))]">{subtitle}</p>
    </div>
  );
};
