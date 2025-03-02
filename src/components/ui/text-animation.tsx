'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils/cn';

// Animation types
export type AnimationStyle =
  | 'bounce'
  | 'wave'
  | 'pulse'
  | 'shake'
  | 'flip'
  | 'fade'
  | 'scale'
  | 'none';

interface TextAnimationProps {
  text: string;
  className?: string;
  charClassName?: string;
  activeCharClassName?: string;
  animationStyle?: AnimationStyle;
  delay?: number;
  duration?: number;
  infinite?: boolean;
  sequential?: boolean;
  staggerDelay?: number;
  onComplete?: () => void;
  customAnimation?: string;
  hoverToAnimate?: boolean;
}

export const TextAnimation: React.FC<TextAnimationProps> = ({
  text,
  className = '',
  charClassName = '',
  activeCharClassName = 'text-[rgb(var(--primary-main))]',
  animationStyle = 'bounce',
  delay = 0,
  duration = 300,
  infinite = true,
  sequential = true,
  staggerDelay = 50,
  onComplete,
  customAnimation = '',
  hoverToAnimate = false,
}) => {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const characters = text.split('');

  // Get animation class based on style
  const getAnimationClass = (isActive: boolean): string => {
    if (!isActive) return '';
    if (customAnimation) return customAnimation;

    switch (animationStyle) {
      case 'bounce':
        return 'animate-text-bounce';
      case 'wave':
        return 'animate-text-wave';
      case 'pulse':
        return 'transform scale-125';
      case 'shake':
        return 'animate-text-shake';
      case 'flip':
        return 'transform rotateX(180deg)';
      case 'fade':
        return 'opacity-50';
      case 'scale':
        return 'transform scale-150';
      case 'none':
        return '';
      default:
        return 'animate-text-bounce';
    }
  };

  // Start animation after initial delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  // Handle animation logic
  useEffect(() => {
    if (!isAnimating) return;
    if (hoverToAnimate && !isHovering) {
      setActiveIndices([]);
      return;
    }

    const timeouts: NodeJS.Timeout[] = [];

    const animateCharacters = () => {
      if (sequential) {
        // Sequential animation (one character at a time)
        characters.forEach((_, index) => {
          const timeout = setTimeout(() => {
            setActiveIndices((prev) => [...prev, index]);

            // Remove active class after animation duration
            const removeTimeout = setTimeout(() => {
              setActiveIndices((prev) => prev.filter((i) => i !== index));

              // Check if animation is complete
              if (index === characters.length - 1) {
                if (onComplete) onComplete();

                // If infinite, restart animation after a pause
                if (infinite && (isHovering || !hoverToAnimate)) {
                  const restartTimeout = setTimeout(() => {
                    animateCharacters();
                  }, duration * 2);
                  timeouts.push(restartTimeout);
                }
              }
            }, duration);

            timeouts.push(removeTimeout);
          }, index * staggerDelay);

          timeouts.push(timeout);
        });
      } else {
        // All characters animate together
        setActiveIndices(characters.map((_, i) => i));

        const removeTimeout = setTimeout(() => {
          setActiveIndices([]);
          if (onComplete) onComplete();

          // If infinite, restart animation after a pause
          if (infinite && (isHovering || !hoverToAnimate)) {
            const restartTimeout = setTimeout(() => {
              animateCharacters();
            }, duration);
            timeouts.push(restartTimeout);
          }
        }, duration);

        timeouts.push(removeTimeout);
      }
    };

    animateCharacters();

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [
    characters,
    duration,
    infinite,
    isAnimating,
    onComplete,
    sequential,
    staggerDelay,
    hoverToAnimate,
    isHovering,
  ]);

  // Handle hover events
  const handleMouseEnter = () => {
    if (hoverToAnimate) {
      setIsHovering(true);
      setIsAnimating(true);
    }
  };

  const handleMouseLeave = () => {
    if (hoverToAnimate) {
      setIsHovering(false);
    }
  };

  return (
    <span className={className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {characters.map((char, index) => {
        const isActive = activeIndices.includes(index);
        return (
          <span
            key={`${char}-${index}`}
            className={cn(
              'inline-block transition-all',
              charClassName,
              isActive && activeCharClassName,
              isActive && getAnimationClass(isActive),
            )}
            style={{
              transitionDuration: `${duration}ms`,
              animationDuration: `${duration}ms`,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        );
      })}
    </span>
  );
};

export default TextAnimation;
