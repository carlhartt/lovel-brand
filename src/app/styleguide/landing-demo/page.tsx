import { Heading, Text, Button, Badge, Card, Input } from "@/components/brand"

const features = [
  {
    badge: "Nutrition",
    title: "Built around your body",
    body: "Personalized meal plans that adapt to your health goals, dietary needs, and lifestyle — no one-size-fits-all approaches.",
  },
  {
    badge: "Movement",
    title: "Move in ways you love",
    body: "Discover workouts that feel good and actually stick. From yoga at home to strength training at the gym.",
  },
  {
    badge: "Mindset",
    title: "Rest is part of the work",
    body: "Sleep tracking, breathwork, and mindfulness practices woven into your daily routine without extra effort.",
  },
]

export default function LandingDemoPage() {
  return (
    <div className="flex flex-col gap-24">

      {/* Hero */}
      <section className="flex flex-col gap-6 pt-6">
        <Badge variant="outline-green">Now in early access</Badge>
        <Heading as="h1" className="max-w-2xl">
          Wellness that fits your actual life
        </Heading>
        <Text variant="muted" size="lg" className="max-w-xl">
          Lovel brings together nutrition, movement, and mindset into one calm, intentional place — designed to support you, not overwhelm you.
        </Text>
        <div className="flex items-center gap-3 pt-2">
          <Button size="lg">Get early access</Button>
          <Button size="lg" variant="ghost">See how it works</Button>
        </div>
      </section>

      {/* Features */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <Heading as="h2">Everything in one place</Heading>
          <Text variant="muted">Three pillars, one seamless experience.</Text>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {features.map((f) => (
            <Card key={f.badge} className="flex flex-col gap-3">
              <Badge variant="outline-black">{f.badge}</Badge>
              <Heading as="h4">{f.title}</Heading>
              <Text variant="muted" size="sm">{f.body}</Text>
            </Card>
          ))}
        </div>
      </section>

      {/* Social proof */}
      <section className="flex flex-col gap-6">
        <Heading as="h2">What members are saying</Heading>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Card className="flex flex-col gap-3">
            <Text variant="medium">"Finally something that doesn't make me feel like I'm failing."</Text>
            <Text variant="muted" size="sm">— Maya R., member since Jan 2025</Text>
          </Card>
          <Card className="flex flex-col gap-3">
            <Text variant="medium">"I've tried every app. Lovel is the first one I actually open every day."</Text>
            <Text variant="muted" size="sm">— Theo K., member since Mar 2025</Text>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl bg-primary-surface border border-primary-light p-10 flex flex-col gap-6 max-w-xl">
        <div className="flex flex-col gap-2">
          <Badge variant="outline-green">Limited spots</Badge>
          <Heading as="h3">Join the waitlist</Heading>
          <Text variant="muted">Be the first to know when we open new memberships.</Text>
        </div>
        <div className="flex flex-col gap-3">
          <Input label="Email address" type="email" placeholder="you@example.com" />
          <Button className="self-start">Request access</Button>
        </div>
        <Text variant="muted" size="sm">No spam. Unsubscribe any time.</Text>
      </section>

    </div>
  )
}
