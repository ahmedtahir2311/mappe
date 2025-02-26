import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        nunito: ["var(--font-nunito)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          main: "#FF004F",
          blue: "#305CDE",
        },
        light: {
          background: {
            primary: "#ffffff",
            secondary: "#f5f5f5",
          },
          text: {
            primary: "#000000",
            secondary: "#36454F",
          },
        },
        dark: {
          background: {
            primary: "#060606",
            secondary: "#141414",
          },
          text: {
            primary: "#FFFFFF",
            secondary: "#EEEEEE",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
