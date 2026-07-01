import { radius } from "./tokens";

// Tailwind theme extension — consumed by apps/web/tailwind.config.ts
export const tailwindTheme = {
  container: {
    center: true,
    padding: "2rem",
    screens: { "2xl": "1400px" },
  },
  extend: {
    colors: {
      border:      "hsl(var(--border))",
      input:       "hsl(var(--input))",
      ring:        "hsl(var(--ring))",
      background:  "hsl(var(--background))",
      foreground:  "hsl(var(--foreground))",
      primary: {
        DEFAULT:    "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
        glow:       "hsl(var(--primary-glow))",
      },
      secondary: {
        DEFAULT:    "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT:    "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      warning: {
        DEFAULT:    "hsl(var(--warning))",
        foreground: "hsl(var(--warning-foreground))",
      },
      muted: {
        DEFAULT:    "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT:    "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT:    "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT:    "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
    },
    borderRadius: {
      lg: radius.base,
      md: `calc(${radius.base} - 2px)`,
      sm: `calc(${radius.base} - 4px)`,
    },
    fontFamily: {
      display: ["Sora", "system-ui", "sans-serif"],
      body:    ["Manrope", "system-ui", "sans-serif"],
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to:   { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to:   { height: "0" },
      },
      "pulse-ring": {
        "0%":   { transform: "scale(1)", opacity: "0.7" },
        "100%": { transform: "scale(1.6)", opacity: "0" },
      },
      breathe: {
        "0%, 100%": { transform: "scale(1)", opacity: "0.85" },
        "50%":      { transform: "scale(1.15)", opacity: "1" },
      },
      "float-slow": {
        "0%, 100%": { transform: "translateY(0px)" },
        "50%":      { transform: "translateY(-12px)" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up":   "accordion-up 0.2s ease-out",
      "pulse-ring":     "pulse-ring 2s ease-out infinite",
      breathe:          "breathe 4s ease-in-out infinite",
      "float-slow":     "float-slow 6s ease-in-out infinite",
    },
  },
} as const;
