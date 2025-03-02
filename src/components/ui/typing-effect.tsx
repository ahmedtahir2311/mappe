'use client';

import { useState, useEffect } from 'react';

interface TypingEffectProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
  className?: string;
}

export const TypingEffect = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 1000,
  className = '',
}: TypingEffectProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Find the longest word to set the minimum height
  const longestWord = words.reduce(
    (longest, word) => (word.length > longest.length ? word : longest),
    '',
  );

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        // Current word being processed
        const currentWord = words[currentWordIndex];

        // If deleting, remove the last character
        if (isDeleting) {
          setCurrentText((prev) => prev.slice(0, -1));
        } else {
          // If typing, add the next character
          setCurrentText((prev) => currentWord.slice(0, prev.length + 1));
        }

        // Determine next state
        if (!isDeleting && currentText === currentWord) {
          // Finished typing current word, start deleting after delay
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        } else if (isDeleting && currentText === '') {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentWordIndex,
    isDeleting,
    words,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords,
  ]);

  return (
    <div
      className={`inline-block ${className}`}
      style={{
        minHeight: '1.2em',
        minWidth: `${longestWord.length * 0.6}em`,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <span className="absolute">
        {currentText}
        <span
          className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}
        >
          |
        </span>
      </span>
    </div>
  );
};
