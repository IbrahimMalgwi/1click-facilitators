import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { ink: "#0B1926", ivory: "#F4F0E8", bronze: "#9B7653", stone: "#D8D1C5", forest: "#243D35", wine: "#6C2837" },
      fontFamily: { sans: ["var(--font-manrope)"], serif: ["var(--font-cormorant)"] }
    }
  },
  plugins: []
} satisfies Config;
