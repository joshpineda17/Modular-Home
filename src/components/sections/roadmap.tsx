import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Building, Beaker } from "lucide-react"

const horizons = [
  {
    icon: Clock,
    title: "Ahora",
    description: "Optimizar sistemas actuales y escalar soluciones probadas (Bambú + Políticas).",
  },
  {
    icon: Building,
    title: "Próximo",
    description: "Construir modelos de negocio emergentes para transformar el mercado (Sistemas Industrializados).",
  },
  {
    icon: Beaker,
    title: "Futuro",
    description: "Crear las opciones del mañana mediante I+D de vanguardia (Biotecnología).",
  },
]

export default function RoadmapSection() {
  return (
    <section id="hoja-de-ruta" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
              La Hoja de Ruta: Los Tres Horizontes
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Una estrategia de innovación dividida en tres tiempos.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {horizons.map((horizon, index) => (
            <AnimatedSection key={horizon.title} delay={`duration-${700 + index * 150}`}>
              <Card className="h-full text-center hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
                <CardHeader className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <horizon.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="mt-4 font-headline">{horizon.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{horizon.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
