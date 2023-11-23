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
        "diagonal-stripes":
          "linear-gradient(135deg, #C02A2E 0%, #C02A2E 33%, #050517ff 33%, #050517ff 66%, #C02A2E 66%, #C02A2E 100%)",
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
      spacing: {
        "1/3": "33.333333%",
        "2/3": "66.666667%",
      },
    },
  },
  plugins: [],
};

export default config;
