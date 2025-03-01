'use client';

interface SectionTitleProps {
  title: string;
  highlight?: string;
  centered?: boolean;
  className?: string;
}

export function SectionTitle({
  title,
  highlight,
  centered = true,
  className = '',
}: SectionTitleProps) {
  return (
    <h2
      className={`text-3xl md:text-4xl font-bold mb-12 ${
        centered ? 'text-center' : ''
      } ${className}`}
    >
      {title} {highlight && <span className="text-[rgb(var(--primary-main))]">{highlight}</span>}
    </h2>
  );
}
