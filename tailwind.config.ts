import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      backgroundColor: {
        skin: {
          base: "var(--bg-color-primary)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      textColor: {
        skin: {
          base: "var(--color-text-primary)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
