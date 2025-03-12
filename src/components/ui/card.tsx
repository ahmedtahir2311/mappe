'use client';

import React, { useState, useRef } from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      ref={cardRef}
      className={`relative rounded-2xl overflow-hidden p-0.5`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Border effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          borderRadius: '16px',
          // border: '1px solid rgb(var(--text-secondary))',
          background: isHovering
            ? `
              linear-gradient(to right, 
                transparent, 
                transparent calc(${Math.max(
                  0,
                  (position.x / (cardRef.current?.offsetWidth ?? 1)) * 100 - 20,
                )}%), 
                rgba(101, 96, 255, ${Math.max(
                  0,
                  1 - Math.abs(position.x / (cardRef.current?.offsetWidth ?? 1) - 0.5) * 2,
                )}), 
                transparent calc(${Math.min(
                  100,
                  (position.x / (cardRef.current?.offsetWidth ?? 1)) * 100 + 20,
                )}%), 
                transparent),
              linear-gradient(to bottom, 
                transparent, 
                transparent calc(${Math.max(
                  0,
                  (position.y / (cardRef.current?.offsetHeight ?? 1)) * 100 - 20,
                )}%), 
                rgba(101, 96, 255, ${Math.max(
                  0,
                  1 - Math.abs(position.y / (cardRef.current?.offsetHeight ?? 1) - 0.5) * 2,
                )}), 
                transparent calc(${Math.min(
                  100,
                  (position.y / (cardRef.current?.offsetHeight ?? 1)) * 100 + 20,
                )}%), 
                transparent)
            `
            : '',
        }}
      />

      {/* Content */}
      <div
        className={`bg-[rgb(var(--background-secondary))] rounded-xl p-6 relative z-10 flex items-center justify-center  ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
