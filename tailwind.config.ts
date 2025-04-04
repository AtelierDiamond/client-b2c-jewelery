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
        montserrat: ['var(--font-montserrat)'],
        dejavu: ["DejaVu Serif"],
        beaufort: ["Beaufort Extended"],
        playwrite: ["Playwrite US Modern"],
      },
    },
  },
  plugins: [],
} satisfies Config;
