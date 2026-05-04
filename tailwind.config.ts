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
        gold: {
          primary: "#b58516",
          light: "#ebbf5b",
          cream: "#f9edd1",
        },
        brand: {
          black: "#0a0a0a",
          white: "#ffffff",
          cream: "#f9edd1",
          dark: "#111111",
          charcoal: "#1a1a1a",
          muted: "#6b6b6b",
          border: "#2a2a2a",
        },
      },
      fontFamily: {
        josefin: ["var(--font-josefin)", "sans-serif"],
        tajawal: ["var(--font-tajawal)", "sans-serif"],
        sans: ["var(--font-josefin)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #b58516 0%, #ebbf5b 50%, #b58516 100%)",
        "gold-subtle":
          "linear-gradient(135deg, #b5851610 0%, #ebbf5b20 50%, #b5851610 100%)",
        "dark-gradient": "linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)",
        "hero-overlay":
          "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)",
        "card-overlay":
          "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 60%)",
      },
      animation: {
        "gold-pulse": "goldPulse 3s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        goldPulse: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "section": "7.5rem",
      },
      maxWidth: {
        "8xl": "1400px",
        "9xl": "1600px",
      },
      letterSpacing: {
        widest: "0.3em",
        ultra: "0.5em",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
    },
  },
  plugins: [],
};

export default config;
