'use client';

import { ReactNode } from 'react';
import { Tooltip } from './tooltip';

interface SocialItemProps {
  icon: ReactNode;
  href: string;
  label: string;
  showTooltip?: boolean;
}

export function SocialItem({ icon, href, label, showTooltip = false }: SocialItemProps) {
  const socialLink = (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-1.5 rounded-full hover:bg-[rgb(var(--primary-main))] hover:text-white"
    >
      {icon}
    </a>
  );

  return showTooltip ? (
    <Tooltip content={label} position="right">
      {socialLink}
    </Tooltip>
  ) : (
    socialLink
  );
}
