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
        gray: "#797596ff",
        green: "#a2d729ff",
        red: "#C02A2E",
        darkBlue: "#060b19ff",
        black: "#050517ff",
        white: "#c7c7c7",
        borderColor: "#ffffff80",
      },
      backgroundImage: {
        "conic-to-t": "conic-gradient(at top, var(--tw-gradient-stops))",
        "conic-colors": "conic-gradient(var(--tw-gradient-stops))",
        "text-gradient": "linear-gradient(45deg, #ececec, red)",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
