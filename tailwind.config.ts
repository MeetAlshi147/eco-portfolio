import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canopy: {
          50: "#eef4ef",
          100: "#d7e6da",
          200: "#b0cdb6",
          300: "#87b391",
          400: "#5e9971",
          500: "#437a57",
          600: "#375f44", // primary brand green
          700: "#2f5c43",
          800: "#234432",
          900: "#182f23",
          950: "#0e1f17",
        },
        sprout: {
          50: "#f4faf3",
          100: "#e6f4e3",
          200: "#cfe9cb",
          300: "#bee3c4",
          400: "#9dd0a7",
          500: "#7bb98a",
        },
        sand: {
          50: "#fbf9f4",
          100: "#f6f1e4",
          200: "#f0e9d6",
          300: "#e6dbc0",
        },
        soil: {
          300: "#d3ac8a",
          400: "#c1946e",
          500: "#b08463",
          600: "#93694c",
          700: "#75513a",
        },
        ink: {
          DEFAULT: "#16241c",
          800: "#1c2e23",
          900: "#12201a",
          950: "#0c1712",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(24, 47, 35, 0.10)",
        "glass-dark": "0 8px 32px 0 rgba(0, 0, 0, 0.35)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "blob": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(20px,-30px) scale(1.05)" },
          "66%": { transform: "translate(-15px,15px) scale(0.97)" },
        },
        "draw": {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease forwards",
        "blob": "blob 12s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
