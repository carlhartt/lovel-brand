# Lovel Brand Styleguide — Design Spec

**Date:** 2026-05-27
**Status:** Approved

## Overview

Replace the existing minified HTML styleguide (`public/styleguide.html` + `src/app/styleguide/route.ts`) with a proper component-based styleguide using Next.js App Router. Define brand design tokens as Tailwind v4 CSS variables. Create reusable brand components in `src/components/brand/`. The styleguide page documents and renders those real components — nothing mocked.

This system serves two audiences: developers building with the brand, and LLM agents reading the repo as a source of truth for brand decisions.

---

## 1. Token Architecture

All brand tokens live in `src/app/globals.css`. Two layers:

### Layer 1 — Primitive palette (`:root`)

Raw values, named by palette and scale. These are plain CSS custom properties, not Tailwind utilities.

```css
:root {
  /* Sage / Green */
  --sage-50:  #EFFFF5;
  --sage-300: #84C8AA;
  --sage-600: #099256;
  --sage-800: #1A5E40;
  --sage-950: #28352F;

  /* Ink / Neutral */
  --ink-950: #282B2B;
  --ink-500: #666666;
  --ink-200: #E6E6E6;
  --ink-100: #F0F0F0;
  --ink-50:  #F7F7F7;
}
```

### Layer 2 — Semantic aliases (`@theme inline`)

Maps primitives to intent-based names. These generate Tailwind utility classes (`bg-primary`, `text-muted`, `border-border`, etc).

```css
@theme inline {
  --color-primary:         var(--sage-800);
  --color-primary-hover:   var(--sage-950);
  --color-primary-light:   var(--sage-300);
  --color-primary-surface: var(--sage-50);
  --color-accent:          var(--sage-600);

  --color-foreground: var(--ink-950);
  --color-muted:      var(--ink-500);
  --color-border:     var(--ink-200);
  --color-subtle:     var(--ink-100);
  --color-surface:    var(--ink-50);
  --color-background: #ffffff;

  --font-display: "NeuePower", sans-serif;
  --font-sans:    "DM Sans", sans-serif;
  --font-mono:    "DM Mono", monospace;
}
```

**Rule:** No raw hex values appear in component files. Components use only semantic Tailwind classes.

---

## 2. Font Setup

### NeuePower (display/headings)
- Weight: 700 only
- Usage: H1–H5
- Source: woff2 embedded in current `public/styleguide.html` — extract base64 data and write to `public/fonts/NeuePower-Bold.woff2`
- Declaration in `globals.css`:

```css
@font-face {
  font-family: "NeuePower";
  font-weight: 700;
  src: url("/fonts/NeuePower-Bold.woff2") format("woff2");
  font-display: swap;
}
```

### DM Sans + DM Mono (body + code)
- Loaded via `next/font/google` in `src/app/layout.tsx`
- CSS variables injected onto `<html>` element, picked up by `@theme inline`

```tsx
const dmSans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] })
const dmMono = DM_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500"] })
```

### Type scale (Heading component)

| Level | Size class | Usage |
|-------|-----------|-------|
| H1 | `text-5xl` | Hero |
| H2 | `text-4xl` | Page section |
| H3 | `text-3xl` | Subsection |
| H4 | `text-2xl` | Card title |
| H5 | `text-xl`  | Label heading |

---

## 3. Brand Components

Location: `src/components/brand/`

All components export from `src/components/brand/index.ts` (barrel export).

### File structure

```
src/components/brand/
  index.ts
  Heading.tsx
  Text.tsx
  Button.tsx
  Badge.tsx
  Card.tsx
  Input.tsx
```

### Component specs

**`Heading`** — polymorphic, renders semantic HTML tag via `as` prop. Font: NeuePower 700 (`font-display`). Accepts `as: "h1" | "h2" | "h3" | "h4" | "h5"`, maps to type scale above.

```tsx
<Heading as="h1">Hero text</Heading>
<Heading as="h3">Section title</Heading>
```

**`Text`** — general body text with variants. Font: DM Sans (`font-sans`) or DM Mono (`font-mono`).

Props:
- `variant`: `"default" | "muted" | "mono" | "lead"` (default: `"default"`)
- `size`: `"sm" | "base" | "lg"` (default: `"base"`)
- `as`: any inline/block element (default: `"p"`)

```tsx
<Text>Default body copy</Text>
<Text variant="muted" size="sm">Caption</Text>
<Text variant="mono">console.log()</Text>
<Text variant="lead" size="lg">Lead paragraph</Text>
```

**`Button`** — variants + sizes.

Props:
- `variant`: `"primary" | "secondary" | "ghost"`
- `size`: `"sm" | "md" | "lg"` (default: `"md"`)

```tsx
<Button variant="primary">Get started</Button>
<Button variant="ghost" size="sm">Cancel</Button>
```

**`Badge`** — small chip label.

Props:
- `variant`: `"default" | "primary" | "muted"`

```tsx
<Badge>New</Badge>
<Badge variant="primary">Active</Badge>
```

**`Card`** — simple surface container. No compound sub-components. Callers compose content freely inside.

Props:
- `className`: passthrough for layout overrides

```tsx
<Card>
  <Heading as="h4">Card title</Heading>
  <Text variant="muted">Description here</Text>
</Card>
```

**`Input`** — text input with optional label and error state.

Props:
- `label`: string
- `error`: string
- `placeholder`, `id`, standard input attrs

---

## 4. Styleguide Page

### File structure

```
src/app/styleguide/
  page.tsx                  ← assembles all sections, replaces route.ts
  layout.tsx                ← sticky sidebar nav + content area
  _components/              ← display helpers (not brand components)
    Swatch.tsx              ← color swatch: token name + hex value
    TypeSpecimen.tsx        ← live type sample with metadata label
    TokenRow.tsx            ← name | value | preview table row
    SpacingBar.tsx          ← visual bar for spacing scale
  sections/
    ColorsSection.tsx       ← primitive palette + semantic aliases
    TypographySection.tsx   ← Heading levels + Text variants
    SpacingSection.tsx      ← Tailwind spacing scale
    ComponentsSection.tsx   ← all brand components, all variants
```

The `_components/` prefix uses Next.js private folder convention — not treated as routes.

### Layout

Sticky left sidebar with anchor links (`#colors`, `#typography`, `#spacing`, `#components`). Main content scrolls on the right. Pure Tailwind, no extra dependencies.

### Styleguide integrity rule

The styleguide renders real brand components (`<Button>`, `<Heading>`, etc) — no mockups. If a component changes, the styleguide reflects it automatically.

---

## 5. Conventions for LLM Agents

- **Color source of truth:** `src/app/globals.css` — `@theme inline` block
- **Component source of truth:** `src/components/brand/index.ts` (barrel exports) and individual files
- **No raw hex in components** — always use semantic Tailwind class names
- **No styleguide-only logic in brand components** — brand components must be usable in production pages as-is
- **Naming follows shadcn conventions** for UI components; typography uses `Heading` + `Text`

---

## Out of scope (for now)

- Dark mode token layer
- shadcn compound `Card` sub-components (`CardHeader`, `CardContent`, etc)
- Form validation / `FormField` wrapper
- Icon system
- Animation tokens
