import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",       // primary background — deep chauffeur navy
        panel: "#121D30",     // card / section surface
        panelLine: "#223049", // hairline dividers on dark
        paper: "#F5F3EC",     // light section background
        cream: "#FBFAF6",     // lightest surface
        brass: "#C89B3C",     // signature accent — brass trim
        brassDim: "#8A6B27",
        slate: "#8B93A7",     // secondary text on dark
        graphite: "#3A4152",  // secondary text on light
        // Landing page palette (mirrors limoiq.app)
        iq: {
          bg: "#0E0E11",      // page background
          deep: "#09090B",    // hero gradient base / text on gold
          bar: "#0C0C0F",     // header bar
          card: "#101014",    // feature bands
          line: "#242429",    // hairlines
          gold: "#D4AF35",    // accent
          tint: "#242318",    // gold-tinted pill background
          text: "#F2F2F2",    // headings on dark
          body: "#D1D5DC",    // hero copy
          muted: "#A1A1AA",   // secondary copy
          slate: "#8B93A7",   // inactive tabs
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-manrope)", "system-ui", "sans-serif"],
        "tour-title": ["var(--font-playfair-display)", "Georgia", "serif"],
        "tour-body": ["var(--font-inter)", "system-ui", "sans-serif"],
        "iq-display": ["var(--font-playfair-display)", "Georgia", "serif"],
        iq: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "iq-fade": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "iq-fade": "iq-fade 400ms ease-out",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
