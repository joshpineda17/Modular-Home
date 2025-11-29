"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip } from "recharts"

import {
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const structuralData = [
  { property: "Tracción", bamboo: 90, steel: 100 },
  { property: "Compresión", bamboo: 100, wood: 80, concrete: 70, brick: 60 },
]

const chartConfig = {
  bamboo: { label: "Bambú", color: "hsl(var(--chart-1))" },
  steel: { label: "Acero", color: "hsl(var(--chart-4))" },
  wood: { label: "Madera", color: "hsl(var(--chart-2))" },
  concrete: { label: "Hormigón", color: "hsl(var(--chart-5))" },
  brick: { label: "Ladrillo", color: "hsl(var(--chart-3))" },
}

export function BambooPropertiesChart() {
  return (
    <Card className="bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="font-headline">Propiedades Estructurales</CardTitle>
        <CardDescription>Comparativo de rendimiento (valores relativos)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-8">
          <div>
            <h4 className="mb-2 font-semibold">Tracción</h4>
            <ChartContainer config={chartConfig} className="h-[150px] w-full">
              <BarChart data={[structuralData[0]]} layout="vertical" accessibilityLayer>
                <YAxis
                  type="category"
                  dataKey="property"
                  tickLine={false}
                  axisLine={false}
                  tick={false}
                />
                <XAxis type="number" hide />
                <Tooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <Legend />
                <Bar dataKey="bamboo" fill="var(--color-bamboo)" radius={5} barSize={30} name="Bambú (Comparable al acero)" />
                <Bar dataKey="steel" fill="var(--color-steel)" radius={5} barSize={30} name="Acero" />
              </BarChart>
            </ChartContainer>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Compresión</h4>
            <ChartContainer config={chartConfig} className="h-[250px] w-full">
              <BarChart data={[structuralData[1]]} layout="vertical" accessibilityLayer>
                <YAxis
                  type="category"
                  dataKey="property"
                  tickLine={false}
                  axisLine={false}
                  tick={false}
                />
                <XAxis type="number" hide />
                <Tooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <Legend />
                <Bar dataKey="bamboo" fill="var(--color-bamboo)" radius={5} barSize={30} name="Bambú (Superior)" />
                <Bar dataKey="wood" fill="var(--color-wood)" radius={5} barSize={30} name="Madera" />
                <Bar dataKey="concrete" fill="var(--color-concrete)" radius={5} barSize={30} name="Hormigón" />
                <Bar dataKey="brick" fill="var(--color-brick)" radius={5} barSize={30} name="Ladrillo" />
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
