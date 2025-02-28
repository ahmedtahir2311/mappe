'use client';

import { Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useSidebar } from '@/lib/context/sidebar-context';

interface TopNavbarProps {
  className?: string;
}

export function TopNavbar({ className = '' }: TopNavbarProps) {
  const { toggle } = useSidebar();

  return (
    <div
      className={`fixed top-0 right-0 z-20 flex items-center justify-end gap-4 p-4 ${className}`}
    >
      <ThemeToggle />
      <button
        onClick={toggle}
        className="rounded-md bg-[rgb(var(--background-secondary))] p-2 text-[rgb(var(--text-primary))] transition-colors hover:bg-[rgb(var(--primary-main))] hover:text-white"
        aria-label="Toggle sidebar"
      >
        <Menu size={24} />
      </button>
    </div>
  );
}
