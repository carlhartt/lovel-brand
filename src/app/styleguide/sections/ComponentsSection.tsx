import { Button, Badge, Card, Input, Heading, Text } from "@/components/brand"

export function ComponentsSection() {
  return (
    <section id="components" className="flex flex-col gap-12">
      <div>
        <h2 className="font-display text-2xl font-bold text-foreground mb-1">Components</h2>
        <p className="text-sm font-sans text-muted">Brand UI components — all variants</p>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-xs font-mono text-muted uppercase tracking-widest">Button</p>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-xs font-mono text-muted uppercase tracking-widest">Badge</p>
        <div className="flex flex-wrap items-center gap-3">
          <Badge>Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="muted">Muted</Badge>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-xs font-mono text-muted uppercase tracking-widest">Card</p>
        <Card className="max-w-sm">
          <Heading as="h4">Card title</Heading>
          <Text variant="muted" className="mt-2">
            Card description goes here. Compose content freely inside.
          </Text>
          <div className="mt-4">
            <Button variant="primary" size="sm">Action</Button>
          </div>
        </Card>
      </div>

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
