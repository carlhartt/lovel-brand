import { Heading, Text } from "@/components/brand"
import { TypeSpecimen } from "../_components/TypeSpecimen"

export function TypographySection() {
  return (
    <section id="typography" className="flex flex-col gap-8">
      <div>
        <h2 className="font-display text-2xl font-bold text-foreground mb-1">Typography</h2>
        <p className="text-sm font-sans text-muted">
          NeuePower for display headings · DM Sans for body · DM Mono for labels
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <TypeSpecimen label="Heading / H1" meta="NeuePower 700 · 64px · -2px tracking">
          <Heading as="h1">The quick brown fox</Heading>
        </TypeSpecimen>
        <TypeSpecimen label="Heading / H2" meta="NeuePower 700 · 48px · -1.5px tracking">
          <Heading as="h2">The quick brown fox</Heading>
        </TypeSpecimen>
        <TypeSpecimen label="Heading / H3" meta="NeuePower 700 · 32px · -0.1px tracking">
          <Heading as="h3">The quick brown fox</Heading>
        </TypeSpecimen>
        <TypeSpecimen label="Heading / H4" meta="NeuePower 700 · 24px · -0.5px tracking">
          <Heading as="h4">The quick brown fox</Heading>
        </TypeSpecimen>
        <TypeSpecimen label="Heading / H5" meta="NeuePower 700 · 20px · -0.1px tracking">
          <Heading as="h5">The quick brown fox</Heading>
        </TypeSpecimen>
        <TypeSpecimen label="Body / 24M" meta="DM Sans 500 · 24px">
          <Text variant="medium" size="2xl">The quick brown fox jumps over the lazy dog.</Text>
        </TypeSpecimen>
        <TypeSpecimen label="Body / 20R" meta="DM Sans 400 · 20px">
          <Text size="xl">The quick brown fox jumps over the lazy dog.</Text>
        </TypeSpecimen>
        <TypeSpecimen label="Body / 18R" meta="DM Sans 400 · 18px">
          <Text size="lg">The quick brown fox jumps over the lazy dog.</Text>
        </TypeSpecimen>
        <TypeSpecimen label="Body / 16R" meta="DM Sans 400 · 16px">
          <Text>The quick brown fox jumps over the lazy dog.</Text>
        </TypeSpecimen>
        <TypeSpecimen label="Body / 16M" meta="DM Sans 500 · 16px">
          <Text variant="medium">The quick brown fox jumps over the lazy dog.</Text>
        </TypeSpecimen>
        <TypeSpecimen label="Body / 14R" meta="DM Sans 400 · 14px">
          <Text size="sm">The quick brown fox jumps over the lazy dog.</Text>
        </TypeSpecimen>
        <TypeSpecimen label="Body / 12R" meta="DM Sans 400 · 12px">
          <Text variant="muted" size="xs">The quick brown fox jumps over the lazy dog.</Text>
        </TypeSpecimen>
        <TypeSpecimen label="Mono / Label" meta="DM Mono 500 · 10px · uppercase · 1.3px tracking">
          <Text variant="mono" size="xs">Lovel Green · Primary</Text>
        </TypeSpecimen>
      </div>
    </section>
  )
}
