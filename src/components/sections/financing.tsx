import { AnimatedSection } from "@/components/animated-section"
import { FinancingSimulator } from "@/components/financing-simulator"

export default function FinancingSection() {
  return (
    <section id="financiamiento" className="pt-16 sm:pt-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
              Financiamiento a tu Medida
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Haz realidad tu sueño de tener casa propia. Te ofrecemos planes accesibles.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay="duration-1000">
          <FinancingSimulator />
        </AnimatedSection>
      </div>
    </section>
  )
}
