'use client';

import React, { useState, useEffect, ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils/cn';

// Define button variants using class-variance-authority
const buttonVariants = cva(
  // Base styles for all buttons
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:shadow-none active:scale-95',
  {
    variants: {
      // Variant: primary, secondary, danger, success
      variant: {
        primary: '',
        secondary: '',
        danger: '',
        success: '',
      },
      // Style: contained, outlined, simple
      buttonStyle: {
        contained: '',
        outlined: 'border-2',
        simple: 'bg-transparent',
      },
      // Size: sm, md, lg
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4',
        lg: 'h-12 px-6 text-lg',
      },
    },
    // Default styles for each combination
    compoundVariants: [
      // Primary variants
      {
        variant: 'primary',
        buttonStyle: 'contained',
        className:
          'bg-[rgb(var(--primary-main))] text-white hover:bg-[rgb(var(--primary-main))] hover:opacity-90 hover:shadow-md hover:shadow-[rgb(var(--primary-main))]/20 hover:-translate-y-[2px]',
      },
      {
        variant: 'primary',
        buttonStyle: 'outlined',
        className:
          'border-[rgb(var(--primary-main))] text-[rgb(var(--primary-main))] hover:bg-[rgb(var(--primary-main))] hover:bg-opacity-10 hover:shadow-sm hover:shadow-[rgb(var(--primary-main))]/10 hover:-translate-y-[1px]',
      },
      {
        variant: 'primary',
        buttonStyle: 'simple',
        className:
          'text-[rgb(var(--primary-main))] hover:bg-[rgb(var(--primary-main))] hover:bg-opacity-10 hover:-translate-y-[1px]',
      },

      // Secondary variants
      {
        variant: 'secondary',
        buttonStyle: 'contained',
        className:
          'bg-[rgb(var(--background-secondary))] text-[rgb(var(--text-primary))] hover:bg-[rgb(var(--background-secondary))] hover:opacity-80 hover:shadow-md hover:shadow-[rgb(var(--text-secondary))]/10 hover:-translate-y-[2px]',
      },
      {
        variant: 'secondary',
        buttonStyle: 'outlined',
        className:
          'border-[rgb(var(--background-secondary))] text-[rgb(var(--text-primary))] hover:bg-[rgb(var(--background-secondary))] hover:bg-opacity-10 hover:shadow-sm hover:-translate-y-[1px]',
      },
      {
        variant: 'secondary',
        buttonStyle: 'simple',
        className:
          'text-[rgb(var(--text-primary))] hover:bg-[rgb(var(--background-secondary))] hover:bg-opacity-20 hover:-translate-y-[1px]',
      },

      // Danger variants
      {
        variant: 'danger',
        buttonStyle: 'contained',
        className:
          'bg-[rgb(var(--danger-main))] text-white hover:bg-[rgb(var(--danger-main))] hover:opacity-90 hover:shadow-md hover:shadow-[rgb(var(--danger-main))]/20 hover:-translate-y-[2px]',
      },
      {
        variant: 'danger',
        buttonStyle: 'outlined',
        className:
          'border-[rgb(var(--danger-main))] text-[rgb(var(--danger-main))] hover:bg-[rgb(var(--danger-main))] hover:bg-opacity-10 hover:shadow-sm hover:shadow-[rgb(var(--danger-main))]/10 hover:-translate-y-[1px]',
      },
      {
        variant: 'danger',
        buttonStyle: 'simple',
        className:
          'text-[rgb(var(--danger-main))] hover:bg-[rgb(var(--danger-main))] hover:bg-opacity-10 hover:-translate-y-[1px]',
      },

      // Success variants
      {
        variant: 'success',
        buttonStyle: 'contained',
        className:
          'bg-[rgb(var(--success-main))] text-white hover:bg-[rgb(var(--success-main))] hover:opacity-90 hover:shadow-md hover:shadow-[rgb(var(--success-main))]/20 hover:-translate-y-[2px]',
      },
      {
        variant: 'success',
        buttonStyle: 'outlined',
        className:
          'border-[rgb(var(--success-main))] text-[rgb(var(--success-main))] hover:bg-[rgb(var(--success-main))] hover:bg-opacity-10 hover:shadow-sm hover:shadow-[rgb(var(--success-main))]/10 hover:-translate-y-[1px]',
      },
      {
        variant: 'success',
        buttonStyle: 'simple',
        className:
          'text-[rgb(var(--success-main))] hover:bg-[rgb(var(--success-main))] hover:bg-opacity-10 hover:-translate-y-[1px]',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      buttonStyle: 'contained',
      size: 'md',
    },
  },
);

// Ripple interface
interface Ripple {
  x: number;
  y: number;
  size: number;
  id: number;
}

// Define the props for our button component
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  // Optional ripple effect
  withRipple?: boolean;
  rippleColor?: string;
  rippleDuration?: number;
}

// Create the Button component
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      buttonStyle,
      size,
      withRipple = false,
      rippleColor,
      rippleDuration = 600,
      children,
      onClick,
      ...props
    },
    ref,
  ) => {
    // Ripple effect state
    const [ripples, setRipples] = useState<Ripple[]>([]);
    const [nextId, setNextId] = useState(0);

    // Clean up ripples after they've animated
    useEffect(() => {
      if (ripples.length > 0) {
        const timeoutId = setTimeout(() => {
          setRipples([]);
        }, rippleDuration + 100);

        return () => clearTimeout(timeoutId);
      }
    }, [ripples, rippleDuration]);

    // Handle click for ripple effect
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (withRipple) {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();

        // Calculate ripple position and size
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Determine ripple size
        const size = Math.max(rect.width, rect.height) * 2;

        // Add new ripple
        const newRipple: Ripple = { x, y, size, id: nextId };
        setRipples([...ripples, newRipple]);
        setNextId(nextId + 1);
      }

      // Call the original onClick if it exists
      if (onClick) {
        onClick(e);
      }
    };

    // Determine ripple color based on button variant or custom color
    const getRippleColor = () => {
      if (rippleColor) return rippleColor;

      // Default ripple colors based on button variant and style
      if (variant === 'primary') {
        return buttonStyle === 'contained'
          ? 'rgba(255, 255, 255, 0.4)'
          : 'rgba(var(--primary-main), 0.2)';
      } else if (variant === 'secondary') {
        return buttonStyle === 'contained'
          ? 'rgba(0, 0, 0, 0.1)'
          : 'rgba(var(--background-secondary), 0.3)';
      } else if (variant === 'danger') {
        return buttonStyle === 'contained'
          ? 'rgba(255, 255, 255, 0.4)'
          : 'rgba(var(--danger-main), 0.2)';
      } else if (variant === 'success') {
        return buttonStyle === 'contained'
          ? 'rgba(255, 255, 255, 0.4)'
          : 'rgba(var(--success-main), 0.2)';
      }

      // Default fallback
      return 'rgba(255, 255, 255, 0.3)';
    };

    return (
      <button
        className={cn(
          buttonVariants({ variant, buttonStyle, size }),
          withRipple && 'relative overflow-hidden',
          className,
        )}
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        {children}

        {/* Ripple elements */}
        {withRipple &&
          ripples.map((ripple) => (
            <span
              key={ripple.id}
              className="absolute rounded-full pointer-events-none"
              style={{
                top: ripple.y - ripple.size / 2,
                left: ripple.x - ripple.size / 2,
                width: ripple.size,
                height: ripple.size,
                backgroundColor: getRippleColor(),
                animation: `ripple-animation ${rippleDuration}ms linear forwards`,
              }}
            />
          ))}

        {/* Add keyframes for the ripple animation */}
        {withRipple && (
          <style jsx global>{`
            @keyframes ripple-animation {
              0% {
                transform: scale(0);
                opacity: 0.5;
              }
              100% {
                transform: scale(1);
                opacity: 0;
              }
            }
          `}</style>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
