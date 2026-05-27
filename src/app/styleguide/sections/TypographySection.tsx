import { Heading, Text } from "@/components/brand"
import { TypeSpecimen } from "../_components/TypeSpecimen"

export function TypographySection() {
  return (
    <section id="typography" className="flex flex-col gap-8">
      <div>
        <h2 className="font-display text-2xl font-bold text-foreground mb-1">Typography</h2>
        <p className="text-sm font-sans text-muted">
          NeuePower for display headings · DM Sans for body · DM Mono for code
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <TypeSpecimen label="Heading / H1" meta="NeuePower 700 · text-5xl · 48px">
          <Heading as="h1">The quick brown fox</Heading>
        </TypeSpecimen>
        <TypeSpecimen label="Heading / H2" meta="NeuePower 700 · text-4xl · 36px">
          <Heading as="h2">The quick brown fox</Heading>
        </TypeSpecimen>
        <TypeSpecimen label="Heading / H3" meta="NeuePower 700 · text-3xl · 30px">
          <Heading as="h3">The quick brown fox</Heading>
        </TypeSpecimen>
        <TypeSpecimen label="Heading / H4" meta="NeuePower 700 · text-2xl · 24px">
          <Heading as="h4">The quick brown fox</Heading>
        </TypeSpecimen>
        <TypeSpecimen label="Heading / H5" meta="NeuePower 700 · text-xl · 20px">
          <Heading as="h5">The quick brown fox</Heading>
        </TypeSpecimen>
        <TypeSpecimen label="Text / Lead" meta="DM Sans 500 · text-lg">
          <Text variant="lead" size="lg">
            The quick brown fox jumps over the lazy dog.
          </Text>
        </TypeSpecimen>
        <TypeSpecimen label="Text / Default" meta="DM Sans 400 · text-base">
          <Text>The quick brown fox jumps over the lazy dog.</Text>
        </TypeSpecimen>
        <TypeSpecimen label="Text / Muted" meta="DM Sans 400 · text-base · color-muted">
          <Text variant="muted">The quick brown fox jumps over the lazy dog.</Text>
        </TypeSpecimen>
        <TypeSpecimen label="Text / Small" meta="DM Sans 400 · text-sm">
          <Text size="sm">The quick brown fox jumps over the lazy dog.</Text>
        </TypeSpecimen>
        <TypeSpecimen label="Text / Mono" meta="DM Mono 400 · text-base">
          <Text variant="mono">{"const brand = 'Lovel'"}</Text>
        </TypeSpecimen>
      </div>
    </section>
  )
}
