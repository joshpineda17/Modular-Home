import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sprout, FlaskConical, Target, Link as LinkIcon } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { BambooPropertiesChart } from "../bamboo-properties-chart";
import { HausPolicyTable } from "../haus-policy-table";
import { MaterialComparisonTool } from "../material-comparison-tool";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FutureSection() {
    const myceliumImage = PlaceHolderImages.find(p => p.id === 'mycelium-material');

  return (
    <section id="futuro" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                Ingeniería de Materiales: El ADN del Futuro
                </h2>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                  Una fusión de inspiración natural y biotecnología de vanguardia.
                </p>
            </div>
        </AnimatedSection>

        <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="bamboo">
            <AccordionItem value="bamboo">
                 <AnimatedSection delay="duration-700">
                    <Card className="overflow-hidden">
                        <AccordionTrigger className="w-full p-0 hover:no-underline">
                             <CardHeader className="p-6 text-left w-full">
                                <CardTitle className="font-headline flex items-center gap-3 text-2xl">
                                    <Sprout className="h-8 w-8 text-primary"/>
                                    Bambú - El Acero de la Naturaleza
                                </CardTitle>
                                <CardDescription>
                                El bambú es mucho más que una planta: es un material de ingeniería natural con un potencial transformador. Su rápido crecimiento, su capacidad para secuestrar carbono y una asombrosa relación resistencia-peso lo posicionan como un pilar en la construcción sostenible y sismorresistente.
                                </CardDescription>
                            </CardHeader>
                        </AccordionTrigger>
                        <AccordionContent>
                            <CardContent className="p-0">
                                <div className="grid md:grid-cols-2 gap-x-6 items-start">
                                    <div className="p-6 pt-0 space-y-6">
                                        <p className="text-muted-foreground">
                                        Al industrializarlo, creamos un material estandarizado, prefabricado y reutilizable. Su huella de carbono es negativa y se regenera sin replantación, consolidándose como un campeón de la sostenibilidad. Es comparable al acero en tracción y superior al hormigón en compresión, lo que lo hace ideal para zonas sísmicas.
                                        </p>

                                        <Card>
                                        <CardHeader>
                                            <CardTitle className="font-headline text-xl">Iniciativa Nacional: Programa de Bambú</CardTitle>
                                            <CardDescription>
                                            El Gobierno de El Salvador, a través del Ministerio de Agricultura y Ganadería, está impulsando activamente el cultivo y la agroindustria del bambú como una estrategia nacional para el desarrollo sostenible.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <p className="text-muted-foreground text-sm">
                                            El Programa Nacional de Bambú busca recuperar tierras productivas, con una proyección de intervenir más de 60,000 hectáreas. Esta iniciativa no solo beneficia el medio ambiente mediante la protección del suelo y la captura de CO2, sino que también genera oportunidades económicas para los productores locales.
                                            </p>
                                            <Button asChild>
                                            <Link href="https://www.mag.gob.sv/2023/06/21/el-programa-nacional-de-bambu-impulsa-el-desarrollo-de-los-productores-de-santo-tomas/" target="_blank" rel="noopener noreferrer">
                                                <LinkIcon className="mr-2" />
                                                Leer más sobre el programa
                                            </Link>
                                            </Button>
                                        </CardContent>
                                        </Card>

                                        <BambooPropertiesChart />
                                        <MaterialComparisonTool />
                                    </div>
                                    <div className="bg-muted p-6 h-full">
                                    <h3 className="font-headline text-xl mb-4">Política HAUS: Incentivos a la Construcción Sostenible</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Para impulsar el uso de materiales como el bambú, la normativa HAUS de la OPAMSS ofrece incentivos clave a los desarrolladores, como incrementos de altura y edificabilidad, haciendo la construcción sostenible una opción más rentable.</p>
                                    <HausPolicyTable />
                                    </div>
                                </div>
                            </CardContent>
                        </AccordionContent>
                    </Card>
                 </AnimatedSection>
            </AccordionItem>

            <AccordionItem value="bio-fabrication">
                <AnimatedSection delay="duration-900" id="biofabricacion">
                    <Card className="overflow-hidden">
                        <AccordionTrigger className="w-full p-0 hover:no-underline">
                            <CardHeader className="p-6 text-left w-full">
                                <CardTitle className="font-headline flex items-center gap-3 text-2xl">
                                    <FlaskConical className="h-8 w-8 text-accent"/>
                                    Bio-Fabricación - "Cultivar, no Fabricar"
                                </CardTitle>
                                <CardDescription>
                                La frontera más vanguardista es pasar de "fabricar" a "cultivar" materiales. Aquí es donde la biotecnología y la ciencia ficción se encuentran para crear la próxima generación de viviendas regenerativas.
                                </CardDescription>
                            </CardHeader>
                        </AccordionTrigger>
                        <AccordionContent>
                            <CardContent className="p-0">
                                <div className="grid md:grid-cols-2 gap-x-6 items-center">
                                        <div className="p-6 pt-0 space-y-4">
                                            <p className="text-muted-foreground">
                                            Utilizamos el <strong>micelio</strong> (las raíces de los hongos) como un aglutinante natural que compacta residuos agrícolas (como el bagazo de café) para crear materiales de construcción sólidos, ligeros y 100% biodegradables. El objetivo final es desarrollar una <strong>"bio-tinta"</strong> para impresoras 3D, permitiéndonos "programar" las propiedades del material.
                                            </p>
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle className="text-xl font-semibold flex items-center gap-2">
                                                    <Target className="text-accent"/>
                                                    Metas Técnicas y Materiales Programables
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="space-y-4">
                                                <p className="text-muted-foreground">Buscamos superar una resistencia a la compresión de 2.5 MPa y crear un material totalmente incombustible. Esta tecnología nos permitirá diseñar paneles con porosidad variable, optimizando el aislamiento térmico, el peso y la absorción acústica según las necesidades de cada espacio. Es la arquitectura del futuro, hoy.</p>
                                                </CardContent>
                                            </Card>
                                        </div>
                                        {myceliumImage && (
                                            <div className="h-full w-full">
                                                <Image 
                                                    src={myceliumImage.imageUrl}
                                                    alt={myceliumImage.description}
                                                    width={600}
                                                    height={450}
                                                    className="object-cover w-full h-full"
                                                    data-ai-hint={myceliumImage.imageHint}
                                                />
                                            </div>
                                        )}
                                </div>
                            </CardContent>
                        </AccordionContent>
                    </Card>
                </AnimatedSection>
            </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
