import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, #C91C04 0%, #D81E05 33.33%, #4B0900 66.67%, #4B0900 100%)",
      },
      boxShadow: {
        custom: "0 5px 10px 0 rgba(0, 0, 0, 0.1)",
        down: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        customGray: "rgba(74, 74, 74, 0.82)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
