'use client';

import { Home, Info, Briefcase, FolderKanban, Mail } from 'lucide-react';
import { useSidebar } from '@/lib/context/sidebar-context';
import { MenuItem } from '@/components/ui/menu-item';
import { Logo } from '@/components/ui/logo';
import { SidebarToggle } from '@/components/ui/sidebar-toggle';
import { ThemeToggle } from '@/components/ui/theme-toggle';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className = '' }: SidebarProps) {
  const { isOpen, toggle } = useSidebar();

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-[rgb(var(--background-secondary))] shadow-md transition-layout z-30 ${
        isOpen ? 'w-72' : 'w-20'
      } ${className}`}
    >
      {/* Sidebar content container - using flex to create 3 sections */}
      <div className="h-full flex flex-col justify-between py-6">
        {/* Top section - Logo */}
        <div className={`${isOpen ? 'px-5' : 'px-3'}`}>
          <Logo isExpanded={isOpen} />
        </div>

        {/* Middle section - Menu Items */}
        <nav className={`flex-grow mt-16 ${isOpen ? 'px-5' : 'px-3'}`}>
          <ul className="space-y-3">
            {menuItems.map((x) => {
              return (
                <li key={x.name}>
                  <MenuItem icon={x.icon} text={x.name} href={x.href} isOpen={isOpen} />
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Divider line */}
        <div className={`mx-auto w-full ${isOpen ? 'px-5' : 'px-3'} mb-4`}>
          <div className="h-px bg-[rgb(var(--text-secondary))] opacity-20"></div>
        </div>

        {/* Bottom section - Social Links */}
        <div className={`${isOpen ? 'px-4' : 'px-3'}`}>
          <div
            className={`flex flex-wrap ${
              isOpen ? 'justify-start gap-2' : 'flex-col items-center gap-4'
            }`}
          >
            <ThemeToggle />
            {/* {socialItems.map((x) => {
              return <SocialItem href={x.href} icon={x.icon} label={x.label} key={x.label} />;
            })} */}
          </div>
        </div>
      </div>

      {/* Toggle button */}
      <SidebarToggle isOpen={isOpen} onClick={toggle} className="top-[100px] -translate-y-1/2" />
    </div>
  );
}

const menuItems = [
  {
    name: 'Origin Point',
    icon: <Home size={22} />,
    href: '#',
  },
  {
    name: 'The Journey',
    icon: <Info size={22} />,
    href: '#about',
  },
  {
    name: 'Beyond the Basics',
    icon: <Briefcase size={22} />,
    href: '#services',
  },
  {
    name: 'Case Studies',
    icon: <FolderKanban size={22} />,
    href: '#projects',
  },
  {
    name: 'Get in Touch',
    icon: <Mail size={22} />,
    href: '#contact',
  },
];
