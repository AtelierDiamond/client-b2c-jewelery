import { Playwrite_US_Modern } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        droid: ['var(--droid-serif)'],
        dejavu: ['var(--dejavu-serif)'],
        montserrat: ['var(--font-montserrat)'],
        beaufortextended: ['var(--beaufortextended)'],
        playwrite: ['var(--Playwrite_US_Modern)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
