import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#00CC66",
        secondary: "#1A1B23",
        third: "#1727E5",
        primaryDark: "#1A1B23",
        secondaryDark: "#F1F1F1",
        thirdDark: "#00CC66"
      },
      fontFamily: {
        arabic: ["Cairo", "sans-serif"],
        english: ["Outfit", "sans-serif"]
      },
      animation: {
        spinClockwise: 'spinClockwise 2s linear infinite',
      },
      keyframes: {
        spinClockwise: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
