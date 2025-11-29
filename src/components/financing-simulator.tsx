"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Users, User } from "lucide-react"

const financingSchema = z.object({
  applicants: z.enum(["1", "2"]).default("2"),
})

const programsData = {
  "1": {
    title: "Escenario Individual",
    icon: User,
    description: "Basado en 1 solicitante (salario mínimo), empleado, vivienda nueva, casa, 18-29 años, ingresos de $408.80, valor de $40,000. El financiamiento es parcial, lo que te anima a buscar un co-deudor o iniciar con un módulo más pequeño.",
    income: 408.80,
    programs: [
      {
        name: "VIVIENDA NUEVA",
        toFinance: 17378.20,
        monthlyPayment: 122.55,
      },
      {
        name: "PROGRAMA CASA JOVEN",
        toFinance: 23120.33,
        monthlyPayment: 124.33,
        conditions: true,
      },
    ]
  },
  "2": {
    title: "Escenario Pareja/Familia",
    icon: Users,
    description: "Basado en 2 solicitantes, empleados, vivienda nueva, casa, 18-29 años, ingresos consolidados de $817.60, valor de $40,000. ¡El escenario ideal para acceder al 100% de financiamiento!",
    income: 817.60,
    programs: [
       {
        name: "VIVIENDA NUEVA",
        toFinance: 34756.41,
        monthlyPayment: 249.08,
      },
      {
        name: "PROGRAMA CASA JOVEN",
        toFinance: 40000,
        monthlyPayment: 222.55,
        conditions: true,
        highlight: true,
      },
    ]
  }
};

export function FinancingSimulator() {
  const form = useForm<z.infer<typeof financingSchema>>({
    resolver: zodResolver(financingSchema),
    defaultValues: {
      applicants: "2",
    },
  });

  const applicants = form.watch("applicants");

  function formatCurrency(value: number) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="font-headline">Simulador de Financiamiento</CardTitle>
        <CardDescription>
          Es barato porque es modular, y es pagable porque tienes opciones de financiamiento. Basado en cálculos del FSV.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="mb-8">
            <FormField
              control={form.control}
              name="applicants"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Número de solicitantes</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex items-center space-x-4"
                    >
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="1" />
                        </FormControl>
                        <FormLabel className="font-normal">1 Solicitante</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="2" />
                        </FormControl>
                        <FormLabel className="font-normal">2 Solicitantes</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {Object.entries(programsData).map(([key, data]) => {
            const Icon = data.icon;
            const isSelected = applicants === key;

            return (
              <Card key={key} className={isSelected ? `border-primary ring-2 ring-primary` : `opacity-70`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-headline">
                    <Icon className="h-6 w-6 text-primary" />
                    {data.title}
                  </CardTitle>
                  <CardDescription>{data.description}</CardDescription>
                </CardHeader>
                <CardContent className="overflow-x-auto">
                   <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Programa</TableHead>
                          <TableHead>Monto a financiar</TableHead>
                          <TableHead className="text-right">Cuota Mensual</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {data.programs.map((program) => {
                          const incomePercentage = ((program.monthlyPayment / data.income) * 100).toFixed(1);
                          return (
                            <TableRow key={program.name} className={program.highlight ? 'bg-primary/10' : ''}>
                              <TableCell className="font-medium">
                                {program.name}
                                {program.conditions && <div className="text-xs text-primary">Ver condiciones</div>}
                              </TableCell>
                              <TableCell>{formatCurrency(program.toFinance)}</TableCell>
                              <TableCell className={`text-right font-bold ${program.highlight ? 'text-primary' : ''}`}>
                                <div>{formatCurrency(program.monthlyPayment)}</div>
                                <div className="text-xs font-normal text-muted-foreground">{incomePercentage}% de tus ingresos</div>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
