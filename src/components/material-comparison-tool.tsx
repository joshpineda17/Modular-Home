"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Loader2, ChevronsRight } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const materials = [
  { id: "bamboo", label: "Bambú" },
  { id: "concrete", label: "Hormigón" },
  { id: "steel", label: "Acero" },
] as const

const FormSchema = z.object({
  materials: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Debe seleccionar al menos un material.",
  }),
})

export function MaterialComparisonTool() {
  const [isLoading, setIsLoading] = useState(false)
  const [comparisonResult, setComparisonResult] = useState<string | null>(null)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      materials: ["bamboo"],
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true)
    setComparisonResult(null)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
      // Mapped mock data based on selection
      let result = "### Análisis Comparativo de Materiales\n\n";
      if (data.materials.includes('bamboo')) {
        result += `**Bambú:**\n- *Impacto Ambiental:* Recurso altamente renovable con una huella de carbono negativa. Crece rápidamente y secuestra CO2.\n- *Propiedades Estructurales:* Excelente relación resistencia-peso. Su flexibilidad lo hace ideal para zonas sísmicas. Comparable al acero en resistencia a la tracción.\n\n`;
      }
      if (data.materials.includes('concrete')) {
        result += `**Hormigón:**\n- *Impacto Ambiental:* La producción de cemento es responsable de ~8% de las emisiones globales de CO2. Uso intensivo de agua y recursos no renovables.\n- *Propiedades Estructurales:* Alta resistencia a la compresión, pero débil en tracción (requiere refuerzo de acero). Es pesado y susceptible a agrietarse.\n\n`;
      }
      if (data.materials.includes('steel')) {
        result += `**Acero:**\n- *Impacto Ambiental:* Proceso de producción muy intensivo en energía. Aunque es altamente reciclable, el proceso sigue teniendo una huella de carbono considerable.\n- *Propiedades Estructurales:* Alta resistencia a la tracción y compresión. Material dúctil y predecible, pero vulnerable a la corrosión si no se protege.\n\n`;
      }

      setComparisonResult(result);
    } catch (error) {
      console.error("Error generating mock comparison:", error)
      toast({
        variant: "destructive",
        title: "Error en la comparación",
        description: "No se pudo obtener la comparación de materiales simulada.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
            <ChevronsRight className="text-primary"/>
            Herramienta de Comparación de Materiales
        </CardTitle>
        <CardDescription>
          Seleccione los materiales para comparar su impacto ambiental y propiedades estructurales.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="materials"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">Materiales</FormLabel>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {materials.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="materials"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4 hover:bg-accent/20 transition-colors"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, item.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item.id
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Comparando...
                </>
              ) : (
                "Comparar Materiales"
              )}
            </Button>
          </form>
        </Form>

        {isLoading && (
          <div className="mt-6 text-center">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
            <p className="mt-2 text-muted-foreground">Generando análisis...</p>
          </div>
        )}

        {comparisonResult && (
          <Card className="mt-6 bg-background">
            <CardHeader>
              <CardTitle className="font-headline">Resultado de la Comparación</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none text-foreground dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: comparisonResult.replace(/\n/g, '<br />').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>') }}
              />
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  )
}
