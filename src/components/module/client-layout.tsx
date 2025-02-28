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
    <div className="flex h-screen w-full overflow-hidden">
      {/* Sidebar component */}
      <Sidebar />

      {/* Top Navbar */}
      <TopNavbar />

      {/* Main content area that adjusts width based on sidebar state */}
      <main className={`flex-grow transition-layout ${isOpen ? 'ml-72' : 'ml-20'}`}>
        {children}
      </main>
    </div>
  );
}
