'use client';

import { useCallback } from 'react';

interface ScrollDownIndicatorProps {
  targetId: string;
}

export function ScrollDownIndicator({ targetId }: ScrollDownIndicatorProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Smooth scroll to the target element
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    },
    [targetId],
  );

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
      <button
        onClick={handleClick}
        className="text-white flex flex-col items-center bg-transparent border-none cursor-pointer"
      >
        <span className="mb-2">Scroll Down</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
