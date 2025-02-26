'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { Tooltip } from './tooltip';

interface MenuItemProps {
  icon: ReactNode;
  text: string;
  href: string;
  isOpen: boolean;
}

export function MenuItem({ icon, text, href, isOpen }: MenuItemProps) {
  const linkContent = (
    <>
      <div className="flex-shrink-0">{icon}</div>
      {isOpen && <span className="truncate text-base font-medium">{text}</span>}
    </>
  );

  return isOpen ? (
    <Link
      href={href}
      className="flex items-center gap-3 p-2 px-4 rounded-lg hover:bg-[rgb(var(--primary-main))] hover:text-white"
    >
      {linkContent}
    </Link>
  ) : (
    <Tooltip content={text} position="right">
      <Link
        href={href}
        className="flex items-center justify-center p-2 rounded-lg hover:bg-[rgb(var(--primary-main))] hover:text-white"
      >
        {linkContent}
      </Link>
    </Tooltip>
  );
}
