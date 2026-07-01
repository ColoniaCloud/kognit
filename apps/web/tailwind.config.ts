import type { Config } from "tailwindcss";
import { tailwindTheme } from "@kognit/tokens";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: tailwindTheme,
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
