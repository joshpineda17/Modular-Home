import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Globe } from "lucide-react"

export default function ContextSection() {
  return (
    <section id="contexto" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
              Personas y Planeta: La Crisis Humana y Planetaria
            </h2>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection delay="duration-700">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary"/>
                  La Realidad Social
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>El <strong>80% de los salvadoreños</strong> vive en condiciones de vivienda inadecuadas.</p>
                <p>El salario mínimo actual no cubre el costo de una vivienda digna debido al elevado costo de los materiales tradicionales.</p>
              </CardContent>
            </Card>
          </AnimatedSection>
          <AnimatedSection delay="duration-1000">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-primary"/>
                  El Impacto Ambiental
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>La industria depende de materiales con alta huella de carbono como el hormigón y plásticos derivados del petróleo.</p>
                <p>Existe una necesidad urgente de transición hacia alternativas sostenibles y regenerativas.</p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-12">
          <blockquote className="text-center text-xl sm:text-2xl font-semibold text-foreground italic border-l-4 border-primary pl-6">
            "El futuro de la construcción no es una única solución, sino un ecosistema inteligente."
          </blockquote>
        </AnimatedSection>
      </div>
    </section>
  )
}
