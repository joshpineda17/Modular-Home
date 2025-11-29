import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sprout, Building, FlaskConical } from "lucide-react"

export default function EcosystemSection() {
  return (
    <section id="ecosistema" className="py-16 sm:py-24 bg-secondary/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
              El Ecosistema Integrado
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              El éxito reside en la sinergia entre la naturaleza, la política, la innovación y la biotecnología.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection delay="duration-700">
            <Card className="h-full text-center">
              <CardHeader className="items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Sprout className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4 font-headline">La Base</CardTitle>
                <CardDescription>Materiales y Políticas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Combinamos el potencial del bambú con incentivos de la política HAUS para crear una base sólida y sostenible.</p>
              </CardContent>
            </Card>
          </AnimatedSection>
          <AnimatedSection delay="duration-900">
            <Card className="h-full text-center">
              <CardHeader className="items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Building className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4 font-headline">La Aceleración</CardTitle>
                <CardDescription>Modelos Escalables</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">"Modular Home" traduce la sostenibilidad en un modelo de negocio accesible y adaptable a las necesidades de las personas.</p>
              </CardContent>
            </Card>
          </AnimatedSection>
          <AnimatedSection delay="duration-1100">
            <Card className="h-full text-center">
              <CardHeader className="items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <FlaskConical className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4 font-headline">La Evolución</CardTitle>
                <CardDescription>Materiales Regenerativos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Investigamos y desarrollamos materiales del futuro como el micelio para construir viviendas que curan el planeta.</p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
