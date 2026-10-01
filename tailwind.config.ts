import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#060606",
        surface: {
          50: "#1A1A1A",
          100: "#141414",
          200: "#0F0F0F",
          300: "#0A0A0A",
        },
        checkmate: {
          gold: "#D4AF37",
          "gold-bright": "#F4C430",
          "gold-dim": "#8C7324",
          crimson: "#A6192E",
        },
        emotions: {
          red: "#E50914",
          "red-hover": "#FF1E27",
          acid: "#CCFF00",
          "acid-dim": "#99BF00",
        },
        editorial: {
          white: "#F5F5F5",
          muted: "#888888",
          dark: "#333333",
          border: "#1F1F1F",
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        ultra: "0.25em",
        tighter: "-0.04em",
        tightest: "-0.06em",
      },
      animation: {
        "marquee": "marquee 35s linear infinite",
        "marquee-fast": "marquee 20s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
