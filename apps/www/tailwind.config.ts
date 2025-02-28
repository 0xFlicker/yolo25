import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background, #ffffff)",
        foreground: "var(--foreground, #111111)",
        primary: "#45489E", // brand-200
        secondary: "#2b2e71", // brand-300
        muted: "#cbcbcc", // brand-50
        accent: "#ababcb", // brand-100
        offset: "#0a1644", // brand-400
        dark1: "#111111",
        dark2: "#020202",
        brand: {
          50: "#cbcbcc",
          100: "#ababcb",
          200: "#45489E",
          300: "#2b2e71",
          400: "#0a1644",
          500: "#111111",
          600: "#020202",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
