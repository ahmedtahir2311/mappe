'use client';

import { Sidebar } from './sidebar';
import { TopNavbar } from './top-navbar';
import { useSidebar } from '@/lib/context/sidebar-context';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const { isOpen } = useSidebar();

  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar component */}
      <Sidebar />

      {/* Top Navbar */}
      <TopNavbar />

      {/* Main content area that adjusts width based on sidebar state */}
      <main
        className={`flex-grow transition-layout ${
          isOpen ? 'ml-60' : 'ml-8'
        } overflow-y-auto scroll-smooth`}
      >
        {children}
      </main>
    </div>
  );
}
