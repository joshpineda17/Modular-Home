import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

const incentiveTypes = [
  { incentive: "a) Formativos: Capacitación", c1_low: true, c1_high: true, c2_low: true, c2_high: true, c3_low: true, c3_high: true },
  { incentive: "a) Formativos: Asesoría", c1_low: true, c1_high: true, c2_low: true, c2_high: true, c3_low: true, c3_high: true },
  { incentive: "a) Formativos: Biblioteca en línea", c1_low: false, c1_high: true, c2_low: false, c2_high: true, c3_low: false, c3_high: true },
  { incentive: "b) Procedimiento simplificado: Trámites Previos", c1_low: true, c1_high: true, c2_low: true, c2_high: true, c3_low: true, c3_high: true },
  { incentive: "b) Proc. simplificado: Descuento 20% Vía Rápida", c1_low: false, c1_high: true, c2_low: false, c2_high: true, c3_low: false, c3_high: false },
  { incentive: "c) Incentivos sociales", c1_low: true, c1_high: true, c2_low: true, c2_high: true, c3_low: true, c3_high: true },
  { incentive: "d) Urbanísticos: Incremento de altura", c1_low: true, c1_high: true, c2_low: true, c2_high: true, c3_low: true, c3_high: true },
  { incentive: "d) Urbanísticos: Incremento de edificabilidad", c1_low: false, c1_high: true, c2_low: true, c2_high: true, c3_low: true, c3_high: true },
  { incentive_short: "d) Urbanísticos: Incremento de impermeabilización", incentive: "d) Urbanísticos: Incremento de impermeabilización", c1_low: false, c1_high: false, c2_low: false, c2_high: true, c3_low: true, c3_high: true },
  { incentive: "e) Incentivos Financieros", c1_low: true, c1_high: true, c2_low: true, c2_high: true, c3_low: true, c3_high: true },
];

const urbanisticIncentives = [
  { category: 1, score: "44 a 79", edificabilidad: "N/A", impermeabilizacion: "N/A", altura: 1 },
  { category: 1, score: "80 a 92", edificabilidad: "0.50", impermeabilizacion: "N/A", altura: 2 },
  { category: 2, score: "44 a 79", edificabilidad: "0.25", impermeabilizacion: "N/A", altura: 1 },
  { category: 2, score: "80 a 92", edificabilidad: "0.50", impermeabilizacion: "2%", altura: 2 },
  { category: 3, score: "44 a 79", edificabilidad: "0.25", impermeabilizacion: "2%", altura: 1 },
  { category: 3, score: "80 a 92", edificabilidad: "0.50", impermeabilizacion: "5%", altura: 2 },
];

export function HausPolicyTable() {
  const CheckIcon = () => <Check className="w-5 h-5 text-green-600 mx-auto" />;
  const XIcon = () => <X className="w-5 h-5 text-red-600 mx-auto" />;

  return (
    <Card className="bg-card/80 backdrop-blur-sm w-full">
      <CardHeader>
        <CardTitle className="font-headline">Política HAUS: Incentivos a la Construcción Sostenible</CardTitle>
        <CardDescription>
          La normativa de Hábitats Urbanos Sostenibles (HAUS) de la OPAMSS estimula prácticas sostenibles mediante incentivos. Los proyectos se clasifican en 3 categorías, cada una con rangos de puntuación, para acceder a beneficios.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div>
            <h3 className="font-semibold text-lg mb-4">Detalle de los Incentivos Urbanísticos</h3>
            <p className="text-sm text-muted-foreground mb-4">El interesado puede elegir únicamente uno de los siguientes incrementos normativos: índice de edificabilidad, porcentaje de impermeabilización o altura.</p>
            <div className="overflow-x-auto">
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead className="font-semibold">Categoría</TableHead>
                    <TableHead className="font-semibold">Puntaje</TableHead>
                    <TableHead className="font-semibold text-center">Índice de Edificabilidad</TableHead>
                    <TableHead className="font-semibold text-center">% de Impermeabilización</TableHead>
                    <TableHead className="font-semibold text-center">Altura (Niveles)</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {urbanisticIncentives.map((item) => (
                    <TableRow key={`${item.category}-${item.score}`}>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>{item.score}</TableCell>
                    <TableCell className="text-center">{item.edificabilidad}</TableCell>
                    <TableCell className="text-center">{item.impermeabilizacion}</TableCell>
                    <TableCell className="text-center">{item.altura}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </div>
        </div>
      </CardContent>
    </Card>
  )
}
