'use client';

import { Home, Info, Briefcase, FolderKanban, Mail, Github, Linkedin } from 'lucide-react';
import { useSidebar } from '@/lib/context/sidebar-context';
import { MenuItem } from '@/components/ui/menu-item';
import { SocialItem } from '@/components/ui/social-item';
import { Logo } from '@/components/ui/logo';
import { SidebarToggle } from '@/components/ui/sidebar-toggle';

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
            {socialItems.map((x) => {
              return <SocialItem href={x.href} icon={x.icon} label={x.label} key={x.label} />;
            })}
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

const socialItems = [
  {
    label: 'GitHub',
    icon: <Github size={18} />,
    href: 'https://github.com',
  },
  {
    label: 'LinkedIn',
    icon: <Linkedin size={18} />,
    href: 'https://linkedin.com',
  },
  {
    icon: (
      <svg
        width={20}
        height={20}
        fill="currentColor"
        viewBox="0 0 24 24"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <title>Upwork icon</title>
          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"></path>
        </g>
      </svg>
    ),
    href: '"https://upwork.com/freelancers/ahmedtahir2311"',
    label: 'Upwork',
  },
];
