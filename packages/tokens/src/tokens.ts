// ─── Primitive palette (HSL channel values, no hsl() wrapper) ────────────────

export const palette = {
  teal: {
    primary:  "174 72% 42%",
    glow:     "158 70% 60%",
    deep:     "174 60% 18%",
    darkBase: "188 60% 12%",
    darkBg:   "188 50% 6%",
    darkCard: "188 45% 9%",
  },
  mint: {
    accent:   "152 65% 65%",
    accentDk: "152 60% 50%",
  },
  neutral: {
    bgLight:  "180 33% 98%",
    bgSoft:   "180 40% 95%",
    muted:    "180 25% 94%",
    border:   "180 25% 90%",
    mFg:      "188 20% 42%",
    darkMut:  "188 40% 14%",
    darkBord: "188 40% 16%",
    darkFg:   "180 15% 65%",
    darkText: "180 30% 96%",
    white:    "0 0% 100%",
  },
  coral: {
    danger:   "8 78% 58%",
    warning:  "28 90% 58%",
    dangerSt: "20 90% 62%",
  },
} as const;

// ─── Semantic tokens – Light ──────────────────────────────────────────────────

export const semanticLight = {
  background:           palette.neutral.bgLight,
  foreground:           palette.teal.darkBase,

  card:                 palette.neutral.white,
  "card-foreground":    palette.teal.darkBase,

  popover:              palette.neutral.white,
  "popover-foreground": palette.teal.darkBase,

  primary:              palette.teal.primary,
  "primary-foreground": palette.neutral.white,
  "primary-glow":       palette.teal.glow,

  accent:               palette.mint.accent,
  "accent-foreground":  palette.teal.darkBase,

  secondary:            palette.neutral.bgSoft,
  "secondary-foreground": "188 60% 18%",

  muted:                palette.neutral.muted,
  "muted-foreground":   palette.neutral.mFg,

  destructive:          palette.coral.danger,
  "destructive-foreground": palette.neutral.white,

  warning:              palette.coral.warning,
  "warning-foreground": palette.neutral.white,

  border:               palette.neutral.border,
  input:                palette.neutral.border,
  ring:                 palette.teal.primary,
} as const;

// ─── Semantic tokens – Dark ───────────────────────────────────────────────────

export const semanticDark = {
  background:           palette.teal.darkBg,
  foreground:           palette.neutral.darkText,

  card:                 palette.teal.darkCard,
  "card-foreground":    palette.neutral.darkText,

  popover:              palette.teal.darkCard,
  "popover-foreground": palette.neutral.darkText,

  primary:              palette.teal.glow,
  "primary-foreground": "188 60% 8%",

  accent:               palette.mint.accentDk,
  "accent-foreground":  "188 60% 8%",

  secondary:            "188 40% 14%",
  "secondary-foreground": palette.neutral.darkText,

  muted:                "188 40% 14%",
  "muted-foreground":   palette.neutral.darkFg,

  border:               palette.neutral.darkBord,
  input:                palette.neutral.darkBord,
  ring:                 palette.teal.glow,
} as const;

// ─── Typography ───────────────────────────────────────────────────────────────

export const typography = {
  fontDisplay: "'Sora', system-ui, sans-serif",
  fontBody:    "'Manrope', system-ui, sans-serif",
  googleFonts: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Manrope:wght@300;400;500;600;700&display=swap",
} as const;

// ─── Spacing & radius ─────────────────────────────────────────────────────────

export const radius = {
  base: "1.25rem",
} as const;

// ─── Gradients ────────────────────────────────────────────────────────────────

export const gradients = {
  primary:   `linear-gradient(135deg, hsl(${palette.teal.primary}), hsl(${palette.teal.glow}))`,
  soft:      `linear-gradient(160deg, hsl(180 60% 96%), hsl(152 60% 94%))`,
  emergency: `linear-gradient(135deg, hsl(${palette.coral.danger}), hsl(${palette.coral.dangerSt}))`,
  hero:      `radial-gradient(circle at 20% 0%, hsl(${palette.teal.glow} / 0.25), transparent 50%), radial-gradient(circle at 80% 100%, hsl(${palette.teal.primary} / 0.20), transparent 50%), linear-gradient(180deg, hsl(${palette.neutral.bgLight}), hsl(${palette.neutral.bgSoft}))`,
  deep:      `linear-gradient(160deg, hsl(${palette.teal.darkBase}), hsl(${palette.teal.deep}))`,
} as const;

// ─── Shadows ──────────────────────────────────────────────────────────────────

export const shadows = {
  soft:      `0 4px 24px -8px hsl(174 60% 30% / 0.15)`,
  card:      `0 8px 32px -12px hsl(174 50% 25% / 0.18)`,
  glow:      `0 0 60px hsl(${palette.teal.glow} / 0.45)`,
  emergency: `0 12px 40px -8px hsl(${palette.coral.danger} / 0.45)`,
} as const;

// ─── Transitions ──────────────────────────────────────────────────────────────

export const transitions = {
  smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
  spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
} as const;
