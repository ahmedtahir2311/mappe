'use client';

import { ReactNode } from 'react';

interface TooltipProps {
  children: ReactNode;
  content: string;
  position?: 'right' | 'top' | 'bottom' | 'left';
}

export function Tooltip({ children, content, position = 'right' }: TooltipProps) {
  const positionClasses = {
    right: 'left-full ml-2',
    left: 'right-full mr-2',
    top: 'bottom-full mb-2',
    bottom: 'top-full mt-2',
  };

  return (
    <div className="relative group">
      {children}
      <div
        className={`absolute ${positionClasses[position]} z-20 px-2 py-1 text-xs font-medium text-white bg-[rgb(var(--primary-main))] rounded-md whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200`}
      >
        {content}
        {/* Arrow */}
        {position === 'right' && (
          <div className="absolute top-1/2 -left-1 -translate-y-1/2 border-4 border-transparent border-r-[rgb(var(--primary-main))]" />
        )}
        {position === 'left' && (
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-[rgb(var(--primary-main))]" />
        )}
        {position === 'top' && (
          <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 border-4 border-transparent border-t-[rgb(var(--primary-main))]" />
        )}
        {position === 'bottom' && (
          <div className="absolute left-1/2 -top-1 -translate-x-1/2 border-4 border-transparent border-b-[rgb(var(--primary-main))]" />
        )}
      </div>
    </div>
  );
}
