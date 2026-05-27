import { Button, Badge, Card, Input, Heading, Text } from "@/components/brand"

export function ComponentsSection() {
  return (
    <section id="components" className="flex flex-col gap-12">
      <div>
        <h2 className="font-display text-2xl font-bold text-foreground mb-1">Components</h2>
        <p className="text-sm font-sans text-muted">Brand UI components — all variants</p>
      </div>

      {/* Badge */}
      <div className="flex flex-col gap-4">
        <p className="text-xs font-mono text-muted uppercase tracking-widest">Badge</p>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="outline-green">Energi med omtanke</Badge>
          <Badge variant="outline-black">Lovel App</Badge>
          <Badge variant="fill-green">Våra elavtal</Badge>
          <Badge variant="fill-dark">Tilläggstjänster</Badge>
        </div>
        <div className="flex flex-wrap items-center gap-3 rounded-3xl bg-primary p-4">
          <Badge variant="outline-light">Om Oss</Badge>
          <Badge variant="outline-light">Tilläggstjänster</Badge>
        </div>
      </div>

      {/* Button */}
      <div className="flex flex-col gap-4">
        <p className="text-xs font-mono text-muted uppercase tracking-widest">Button</p>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary" size="lg" icon>Teckna elavtal</Button>
          <Button variant="dark" size="lg" icon>Läs mer</Button>
          <Button variant="ghost" size="lg" icon>Se alla</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary" size="lg" icon>Large (16px 24px)</Button>
          <Button variant="primary" size="md" icon>Medium (8px 24px)</Button>
          <Button variant="primary" size="sm" icon>Small</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary" size="lg">Without icon</Button>
          <Button variant="primary" size="lg" disabled icon>Disabled</Button>
        </div>
      </div>

      {/* Card */}
      <div className="flex flex-col gap-4">
        <p className="text-xs font-mono text-muted uppercase tracking-widest">Card</p>
        <div className="grid grid-cols-2 gap-4 max-w-2xl">
          <Card variant="default">
            <Heading as="h4">Default</Heading>
            <Text variant="muted" className="mt-2">Border card on white background.</Text>
            <div className="mt-4">
              <Button variant="primary" size="sm" icon>Action</Button>
            </div>
          </Card>
          <Card variant="green">
            <Heading as="h4" className="text-white">Kontroll</Heading>
            <Text className="mt-2 text-white/80">Se vad du förbrukar och när du förbrukar det.</Text>
          </Card>
          <Card variant="dark-green">
            <Heading as="h4" className="text-white">Realtidsmätning</Heading>
            <Text className="mt-2 text-white/80">Lär dig om dina effekttoppar.</Text>
          </Card>
          <Card variant="darkest-green">
            <Heading as="h4" className="text-white">Smart styrning</Heading>
            <Text className="mt-2 text-white/80">Ladda elbilen när priset är som lägst.</Text>
          </Card>
        </div>
      </div>

      {/* Input */}
      <div className="flex flex-col gap-4">
        <p className="text-xs font-mono text-muted uppercase tracking-widest">Input</p>
        <div className="flex flex-col gap-4 max-w-sm">
          <Input label="Label" placeholder="Placeholder text" />
          <Input
            label="With error"
            placeholder="Placeholder text"
            defaultValue="bad input"
            error="This field is required"
          />
        </div>
      </div>
    </section>
  )
}
