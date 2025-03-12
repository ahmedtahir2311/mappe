import React from 'react';

interface VerticalTextProps {
  text: string;
  className?: string;
}

const VerticalText = ({ text, className = '' }: VerticalTextProps) => {
  return (
    <div
      className={`rotate-180 tracking-widest text-transparent [-webkit-text-stroke:1px_rgb(var(--primary-main))] [text-stroke:1px_rgb(var(--primary-main))] [writing-mode:vertical-rl] [text-orientation:mixed] text-4xl text-[rgb(var(--primary-main))] uppercase ${className}`}
    >
      {text}
    </div>
  );
};

export default VerticalText;
