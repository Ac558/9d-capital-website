import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#0F1B2D",
        obsidian: "#0D0D0D",
        parchment: "#F8F5F0",
        "warm-sand": "#EDE8E0",
        marble: "#FAFAF7",
        "text-primary": "#1A1A1A",
        "text-secondary": "#5C5C6B",
        gold: "#B8943F",
        "gold-hover": "#A37E2F",
        "gold-light": "#D4B06A",
        burgundy: "#6B1D2A",
        "forest": "#1A3A2A",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "DM Sans", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
        prose: "680px",
      },
    },
  },
  plugins: [],
};
export default config;
