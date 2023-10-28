import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import aspectRatio from "@tailwindcss/aspect-ratio";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "325px",
      sm: "600px",
      md: "800px",
      "2md": "900px",
      lg: "1000px",
      xl: "1300px",
      "2xl": "1500px",
      dark: { raw: "(prefers-color-scheme: dark)" },
    },
    extend: {
      colors: {
        mainBackground: "rgb(255, 251, 241)",
      },
      fontFamily: {
        ibmPlexMono: ["IBM Plex Mono", "monospace"],
        nunito: ["Nunito", "sans-serif"],
        oi: ["Oi", "serif"],
        fredoka: ["Fredoka", "sans-serif"],
        ultra: ["Ultra", "serif"],
        erica: ["Erica One", "sans-serif"],
        darkerGrotesque: ["Darker Grotesque", "sans-serif"],
      },
    },
  },
  plugins: [daisyui, aspectRatio],
};
export default config;
