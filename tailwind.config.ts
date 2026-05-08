import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        green: {
          deep: "#1F3D33",
          forest: "#142821"
        },
        gold: {
          muted: "#B89B5E",
          pale: "#D8C79D"
        },
        ivory: "#F8F5EF",
        beige: "#EFE8DA",
        charcoal: "#1E1E1E",
        muted: "#6E6A63"
      },
      fontFamily: {
        serif: ["Libre Baskerville", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["Source Sans 3", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        line: "0 18px 50px rgba(20, 40, 33, 0.08)"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};

export default config;
