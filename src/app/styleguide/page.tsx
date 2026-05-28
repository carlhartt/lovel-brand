import { OverviewSection }   from "./sections/OverviewSection"
import { ColorsSection }     from "./sections/ColorsSection"
import { TypographySection } from "./sections/TypographySection"
import { SpacingSection }    from "./sections/SpacingSection"
import { ComponentsSection } from "./sections/ComponentsSection"

export default function StyleguidePage() {
  return (
    <>
      <OverviewSection />
      <ColorsSection />
      <TypographySection />
      <SpacingSection />
      <ComponentsSection />
    </>
  )
}
