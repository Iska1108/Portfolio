import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        mono: ["Space Grotesk", "monospace"],
      },
      colors: {
        brand: {
          dark: "#0f172a",
          light: "#e2e8f0",
          accent: "#38bdf8",
          secondary: "#818cf8",
          purple: "#c084fc",
        },
      },
      animation: {
        blob: "blob 7s infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
