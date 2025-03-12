'use client';

import { useEffect, useState, useRef } from 'react';
import Card from '../ui/card';

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
  decimal?: boolean;
}

const StatItem = ({ value, suffix = '', label, decimal = false }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    let start = 0;
    if (isVisible) {
      const end = value;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60 FPS

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <div
      ref={elementRef}
      className={`transform transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <Card className="w-full min-w-[140px]">
        <div className="flex flex-col items-center justify-center py-4">
          <div className="text-3xl md:text-4xl font-bold text-[rgb(var(--primary-main))] mb-2 flex items-center">
            {decimal ? count.toFixed(1) : Math.floor(count)}
            {suffix}
          </div>
          <div className="text-sm text-[rgb(var(--text-secondary))] text-center max-w-[120px] font-medium">
            {label}
          </div>
        </div>
      </Card>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { value: 14, label: 'Years of Experience' },
    { value: 50, suffix: '+', label: 'Project Completed' },
    { value: 1.5, suffix: 'K', label: 'Happy Clients', decimal: true },
    { value: 14, label: 'Years of Experience' },
  ];

  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 justify-items-center">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
