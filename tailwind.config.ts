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
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
