import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Link as LinkIcon, Scaling, ShieldCheck, Recycle, Zap, DollarSign, Layers3, Leaf } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { ModularHomeConfigurator } from "@/components/modular-home-configurator"
import { FinancingSimulator } from "../financing-simulator"
import Image from "next/image"

const steps = [
  {
    icon: Rocket,
    title: "Paso 1: Inicia",
    description: "Adquiere tu primer módulo. Una solución accesible diseñada para jóvenes y como primer hogar, rompiendo las barreras de entrada al mercado inmobiliario.",
  },
  {
    icon: LinkIcon,
    title: "Paso 2: Conecta",
    description: "Utiliza nuestros conectores patentados de caucho y PVC reciclado para unir módulos de forma segura y eficiente, garantizando una estructura sólida.",
  },
  {
    icon: Scaling,
    title: "Paso 3: Crece",
    description: "Expande tu vivienda según tus necesidades. Añade un segundo piso o extiende la planta baja a tu propio ritmo, sin grandes obras ni complicaciones.",
  },
]

const advantages = [
  {
    icon: Zap,
    title: "Velocidad Récord",
    description: "Lo que tradicionalmente toma meses, nosotros lo instalamos en menos de una semana, reduciendo costos y tiempos de espera.",
  },
  {
    icon: DollarSign,
    title: "Accesibilidad Real",
    description: "Una alternativa económicamente viable frente a los $90,000 promedio de las viviendas tradicionales en el mercado.",
  },
  {
    icon: Layers3,
    title: "Escalabilidad",
    description: "El usuario puede añadir módulos (segundo piso o extensión) a su propio ritmo, adaptando la vivienda a sus necesidades cambiantes.",
  },
  {
    icon: Leaf,
    title: "Sostenibilidad Integrada",
    description: "Aporta a un país más verde. Nuestro sistema reduce la huella de carbono mediante el uso de materiales reciclados y ecológicos.",
  },
]


export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-secondary/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
              Modular Home - Viviendas que Crecen Contigo
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
              "Es como armar bloques, pero en la vida real". Nuestra filosofía es que tu hogar debe crecer contigo. Comienzas con una pieza y construyes un legado.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
             <AnimatedSection key={step.title} delay={`duration-${700 + index * 150}`}>
               <Card className="h-full text-center">
                 <CardHeader className="flex flex-col items-center">
                   <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                     <step.icon className="h-6 w-6" />
                   </div>
                   <CardTitle className="mt-4 font-headline">{step.title}</CardTitle>
                 </CardHeader>
                 <CardContent>
                   <p className="text-muted-foreground">{step.description}</p>
                 </CardContent>
               </Card>
             </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16">
           <div className="text-center mb-12">
            <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl font-headline">
              Ventajas del Sistema Modular
            </h3>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Más rápido, más accesible y mejor para el planeta.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage, index) => (
            <AnimatedSection key={advantage.title} delay={`duration-${700 + index * 100}`}>
              <Card className="h-full text-center hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
                <CardHeader className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <advantage.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="mt-4 font-headline">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">El ADN del Módulo</CardTitle>
              <CardDescription>
                Cada módulo prefabricado está diseñado para ser eficiente, sostenible y duradero, utilizando materiales inteligentes y estandarizados para optimizar recursos.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                 <div>
                  <h3 className="font-semibold text-lg flex items-center gap-2"><ShieldCheck className="text-primary"/>Núcleo Estructural: Hormigón Ecológico</h3>
                  <p className="text-muted-foreground mt-2">
                    Utilizamos un hormigón más sostenible que el tradicional para crear una estructura prefabricada resistente y segura. Esto garantiza la durabilidad de tu hogar y acelera la construcción a menos de una semana.
                  </p>
                </div>
                 <div>
                  <h3 className="font-semibold text-lg flex items-center gap-2"><Recycle className="text-primary"/>Acabados de Economía Circular</h3>
                  <p className="text-muted-foreground mt-2">
                    Puertas, ventanas, canaletas y conectores están fabricados con PVC y caucho reciclado, reduciendo la huella ambiental y los costos para hacerlo más accesible.
                  </p>
                </div>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h4 className="font-semibold text-foreground">Metáfora de la Modularidad</h4>
                <blockquote className="mt-2 text-muted-foreground italic border-l-2 border-primary pl-4">
                  "Mientras que una casa tradicional es una escultura de una sola pieza que, para cambiarla, debes romper y empezar de nuevo, una casa modular es como un juego de bloques que permite añadir, quitar o reconfigurar piezas fácilmente."
                </blockquote>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
        
        <AnimatedSection className="mt-16">
          <Card>
            <CardHeader>
                <CardTitle className="font-headline">Así se ve tu Futuro Hogar</CardTitle>
                <CardDescription>Una visualización de cómo los módulos se combinan para formar un hogar moderno y funcional.</CardDescription>
            </CardHeader>
            <CardContent>
                 <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                    <Image 
                        src="https://i.imgur.com/fjHm33R.jpeg" 
                        alt="Visualización del proyecto Modular Home"
                        fill
                        className="object-cover"
                        data-ai-hint="modern modular home"
                    />
                </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection className="mt-16">
            <ModularHomeConfigurator />
        </AnimatedSection>

        <AnimatedSection className="mt-16">
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
