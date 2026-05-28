---
name: brand-guidelines
description: Applies Lovel's official brand colors and typography to any artifact that benefits from Lovel's look-and-feel. Use when brand colors, style guidelines, visual formatting, or company design standards apply.
---

# Lovel Brand Styling

## Overview

Use this skill to apply Lovel's official brand identity to any artifact — components, pages, documents, or UI mockups.

**Keywords**: branding, corporate identity, visual identity, styling, brand colors, typography, Lovel brand, visual formatting, visual design, Tailwind, design tokens

## Brand Guidelines

### Colors

**Primitive Palette (CSS custom properties on `:root`):**

| Token | Value | Role |
|---|---|---|
| `--sage-50` | `#EFFFF5` | Lightest green surface |
| `--sage-300` | `#84C8AA` | Light green / primary-light |
| `--sage-600` | `#099256` | Accent green |
| `--sage-800` | `#1A5E40` | Primary green |
| `--sage-950` | `#28352F` | Deepest green / primary-hover |
| `--ink-950` | `#282B2B` | Foreground / near-black |
| `--ink-500` | `#666666` | Muted text |
| `--ink-200` | `#E6E6E6` | Border |
| `--ink-100` | `#F0F0F0` | Subtle background |
| `--ink-50` | `#F7F7F7` | Surface background |

**Semantic Tokens (`@theme inline` → Tailwind utilities):**

| Tailwind utility | Maps to | Use |
|---|---|---|
| `bg-primary` / `text-primary` | `--sage-800` `#1A5E40` | Primary brand color |
| `bg-primary-hover` | `--sage-950` `#28352F` | Hover state |
| `bg-primary-light` | `--sage-300` `#84C8AA` | Decorative light green |
| `bg-primary-surface` | `--sage-50` `#EFFFF5` | Tinted green surface |
| `bg-accent` | `--sage-600` `#099256` | CTA / action color |
| `text-foreground` | `--ink-950` `#282B2B` | Body text |
| `text-muted` | `--ink-500` `#666666` | Secondary / subdued text |
| `border-border` | `--ink-200` `#E6E6E6` | Default borders |
| `bg-subtle` | `--ink-100` `#F0F0F0` | Subtle dividers / inputs |
| `bg-surface` | `--ink-50` `#F7F7F7` | Page surface |
| `bg-background` | `#ffffff` | Base white |

### Typography

**Font Stack:**

| Role | Font | Tailwind class | Fallback |
|---|---|---|---|
| Display / Headings | NeuePower Bold 700 | `font-display` | `sans-serif` |
| Body text | DM Sans 400 / 500 / 700 | `font-sans` | `sans-serif` |
| Labels / Mono | DM Mono 400 / 500 | `font-mono` | `monospace` |

**Font loading:**
- `NeuePower` is a local web font served from `/fonts/NeuePower-Bold.woff2` via `@font-face` in `globals.css`
- `DM Sans` and `DM Mono` are loaded via `next/font/google` in `app/layout.tsx`, injected as `--dm-sans` / `--dm-mono` CSS variables

**Type Scale (`src/components/brand/Heading.tsx`):**

| Level | Size | Tracking | Line-height | Usage |
|---|---|---|---|---|
| H1 | 64px | −2px | 100% | Hero / page titles |
| H2 | 48px | −1.5px | 105% | Section titles |
| H3 | 32px | −0.1px | 110% | Sub-section headers |
| H4 | 24px | −0.5px | 120% | Card / component titles |
| H5 | 20px | −0.1px | 110% | Small headings |

**Body Text (`src/components/brand/Text.tsx`):**

| Variant | Weight | Notes |
|---|---|---|
| `default` | 400 | Standard body copy, `text-foreground` |
| `muted` | 400 | Secondary copy, `text-muted` |
| `medium` | 500 | Emphasized body |
| `mono` | 500 | Uppercase labels, `tracking-widest` |

Sizes: `xs` 12px · `sm` 14px · `base` 16px · `lg` 18px · `xl` 20px · `2xl` 24px

## Components

All brand components live in `src/components/brand/` and are exported from `src/components/brand/index.ts`.

### Button (`Button.tsx`)

```tsx
<Button variant="primary" size="lg" icon>Teckna elavtal</Button>
<Button variant="dark" size="lg" icon>Läs mer</Button>
<Button variant="ghost" size="lg" icon>Se alla</Button>
```

- Shape: `rounded-full`
- Variants: `primary` (accent green), `dark` (foreground), `ghost` (primary-surface)
- Sizes: `sm` `md` `lg`
- `icon` prop appends a caret-right SVG

### Badge (`Badge.tsx`)

```tsx
<Badge variant="outline-green">Energi med omtanke</Badge>
<Badge variant="fill-green">Våra elavtal</Badge>
<Badge variant="fill-dark">Tilläggstjänster</Badge>
<Badge variant="outline-light">Om Oss</Badge>  {/* on dark bg */}
```

- Shape: `rounded-full`; text: `font-mono uppercase tracking-[1.3px] text-[10px]`
- Variants: `outline-green` `outline-light` `outline-black` `fill-green` `fill-dark`

### Card (`Card.tsx`)

- Variants: `default` (white/border), `green` (sage-600), `dark-green` (sage-800), `darkest-green` (sage-950)
- Use white text (`text-white`, `text-white/80`) on colored card variants

### Heading (`Heading.tsx`)

```tsx
<Heading as="h1">Page Title</Heading>
<Heading as="h3">Section Header</Heading>
```

### Text (`Text.tsx`)

```tsx
<Text>Body copy</Text>
<Text variant="muted" size="sm">Secondary text</Text>
<Text variant="mono" size="xs">LABEL / TAG</Text>
```

## Technical Details

### Tailwind Setup

- Uses Tailwind v4 with `@import "tailwindcss"` and `@theme inline` for semantic token registration
- All custom colors are registered as `--color-*` variables, making them available as standard Tailwind utilities (`bg-primary`, `text-muted`, `border-border`, etc.)
- No `tailwind.config.js` — configuration lives entirely in `globals.css`

### Spacing

- Standard Tailwind 4px base unit scale
- Key values: 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96px

### Applying the Brand

When styling a new page or component:
1. Use `font-display` for any heading-level text
2. Use `font-sans` for body and UI text
3. Use `font-mono` for labels, tags, and code
4. Use `bg-accent` / `text-white` for primary CTAs
5. Use `text-foreground` / `text-muted` for body hierarchy
6. Use `bg-surface` or `bg-background` as page backgrounds
7. Use `border-border` for all dividers and input borders
8. Reference `src/components/brand/` components before building custom ones
