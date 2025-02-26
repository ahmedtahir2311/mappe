'use client';

import {
  Home,
  Info,
  Briefcase,
  FileText,
  FolderKanban,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from 'lucide-react';
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
      className={`fixed top-0 left-0 h-full bg-[rgb(var(--background-secondary))] shadow-md transition-layout z-10 ${
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
            <li>
              <MenuItem icon={<Home size={22} />} text="Home" href="/" isOpen={isOpen} />
            </li>
            <li>
              <MenuItem icon={<Info size={22} />} text="About" href="/about" isOpen={isOpen} />
            </li>
            <li>
              <MenuItem
                icon={<Briefcase size={22} />}
                text="Services"
                href="/services"
                isOpen={isOpen}
              />
            </li>
            <li>
              <MenuItem icon={<FileText size={22} />} text="Blog" href="/blog" isOpen={isOpen} />
            </li>
            <li>
              <MenuItem
                icon={<FolderKanban size={22} />}
                text="Projects"
                href="/projects"
                isOpen={isOpen}
              />
            </li>
            <li>
              <MenuItem icon={<Mail size={22} />} text="Contact" href="/contact" isOpen={isOpen} />
            </li>
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
            <SocialItem icon={<Github size={18} />} href="https://github.com" label="GitHub" />
            <SocialItem
              icon={<Linkedin size={18} />}
              href="https://linkedin.com"
              label="LinkedIn"
            />
            <SocialItem icon={<Twitter size={18} />} href="https://twitter.com" label="Twitter" />
            <SocialItem
              icon={<Instagram size={18} />}
              href="https://instagram.com"
              label="Instagram"
            />
          </div>
        </div>
      </div>

      {/* Toggle button */}
      <SidebarToggle isOpen={isOpen} onClick={toggle} className="top-[100px] -translate-y-1/2" />
    </div>
  );
}
