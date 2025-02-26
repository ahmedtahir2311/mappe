'use client';

import Image from 'next/image';

interface LogoProps {
  isExpanded?: boolean;
}

export function Logo({ isExpanded = false }: LogoProps) {
  return (
    <div
      className={`flex justify-center items-center ${
        isExpanded ? 'justify-start' : 'justify-center'
      }`}
    >
      <div className="relative h-10 w-10 flex items-center justify-center">
        {/* Custom SVG Logo */}
        <Image
          className="dark:invert"
          src="/assets/logo-dark.svg"
          alt="Logo"
          width={32}
          height={32}
        />
      </div>
    </div>
  );
}
