'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SidebarToggleProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export function SidebarToggle({ isOpen, onClick, className = '' }: SidebarToggleProps) {
  return (
    <button
      onClick={onClick}
      className={`absolute -right-5 transform bg-[rgb(var(--primary-main))] text-white rounded-full p-1 shadow-md hover:opacity-80 ${className}`}
      aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
    >
      {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
    </button>
  );
}
