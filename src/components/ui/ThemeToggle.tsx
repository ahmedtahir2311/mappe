"use client";

import { Moon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className='rounded-md bg-[rgb(var(--background-secondary))] p-2 text-[rgb(var(--text-primary))] transition-colors hover:bg-[rgb(var(--primary-main))] hover:text-white'
      aria-label='Toggle theme'
    >
      {theme === "dark" ? (
        // Sun icon for light mode
        <SunIcon size={24} />
      ) : (
        // Moon icon for dark mode
        <Moon size={24} />
      )}
    </button>
  );
}
