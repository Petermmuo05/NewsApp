import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        "max-lg": { max: "1000px" },
        "min-lg": { min: "1200px" },
        "min-xl": { min: "1000px" },
        "trans-meal": { min: "700px", max: "1300px" },
        "trans-range": { min: "0px", max: "650px" },
        "max-sm": { max: "600px" },

        "min-sm": { min: "600px" },
        "max-800": { max: "800px" },
        "min-800": { min: "800px" },

        // You can also add other custom breakpoints here
      },
    },
  },
  plugins: [],
} satisfies Config;
