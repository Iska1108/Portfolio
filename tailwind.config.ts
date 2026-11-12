import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Archivo", "Noto Sans KR", "sans-serif"],
        display: ["Archivo", "Noto Sans KR", "sans-serif"],
        mono: ["Archivo", "Noto Sans KR", "sans-serif"],
      },
      colors: {
        paper: "#F1F2EF", // blanc du dobok
        graphite: "#4D4D4D",
        hong: "#D40000", // rouge du coin Hong, lisible sur fond clair
        brand: {
          dark: "#000000",
          light: "#F1F2EF",
          accent: "#FF3B2F", // même rouge, éclairci pour les fonds noirs (pages projets)
          secondary: "#FF6B5E",
          purple: "#BDBDBD",
        },
        // gris neutres : les pages projets passent en noir et blanc
        slate: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#8A8A8A",
          600: "#525252",
          700: "#3A3A3A",
          800: "#262626",
          900: "#171717",
          950: "#0A0A0A",
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "bar-in": "barIn 0.9s cubic-bezier(.7,0,.2,1) 0.2s both",
        "spin-slow": "spin 12s linear infinite",
        rise: "rise 0.9s cubic-bezier(.2,.8,.2,1) both",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        rise: {
          "0%": { transform: "translateY(105%)" },
          "100%": { transform: "translateY(0)" },
        },
        barIn: {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
