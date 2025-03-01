'use client';

import { useCallback, ReactNode } from 'react';

interface SmoothScrollLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function SmoothScrollLink({ href, children, className = '' }: SmoothScrollLinkProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();

      if (href.startsWith('#')) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    },
    [href],
  );

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
