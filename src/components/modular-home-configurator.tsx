"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, RotateCcw } from "lucide-react"
import { cn } from "@/lib/utils"

type Module = {
  id: number
  type: "base" | "floor" | "extension"
}

const HouseModule = ({ className, roofClassName, isBase = false }: { className?: string; roofClassName?: string; isBase?: boolean }) => (
    <div className={cn("relative w-full h-full bg-slate-200 shadow-inner rounded-b-md border-b-4 border-slate-300", className)}>
        {/* Roof */}
        <div className={cn("absolute -top-5 left-0 w-full h-6 bg-red-700/90 skew-y-[-10deg] rounded-t-sm", roofClassName)} />
        <div className={cn("absolute -top-4 left-0 w-full h-4 bg-red-700", roofClassName)} />
        
        {/* Body */}
        <div className="w-full h-full flex items-center justify-center p-2">
            {/* Window */}
            <div className="w-1/2 h-1/3 bg-slate-400/50 rounded-sm mt-2 border-2 border-slate-300/60" />
        </div>
         {/* Door for base module */}
         {isBase && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-2/5 bg-slate-400 rounded-t-sm" />}
    </div>
);


export function ModularHomeConfigurator() {
  const [modules, setModules] = useState<Module[]>([{ id: 1, type: "base" }])
  const hasSecondFloor = modules.some(m => m.type === 'floor');
  const hasExtension = modules.some(m => m.type === 'extension');

  const addModule = (type: "floor" | "extension") => {
    if (type === 'floor' && hasSecondFloor) return;
    if (type === 'extension' && hasExtension) return;

    setModules(prev => [...prev, { id: Date.now(), type }])
  }

  const reset = () => {
    setModules([{ id: 1, type: "base" }])
  }

  return (
    <Card className="bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="font-headline">Configurador de "Modular Home"</CardTitle>
        <CardDescription>Visualice cómo su vivienda puede crecer con usted.</CardDescription>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-4">
          <p className="text-muted-foreground">Utilice los botones para añadir módulos a su hogar. Un sistema tipo "Lego" que permite armar la vivienda por etapas.</p>
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => addModule("floor")} disabled={hasSecondFloor}>
              <Plus className="mr-2 h-4 w-4" /> Añadir Segundo Piso
            </Button>
            <Button onClick={() => addModule("extension")} disabled={hasExtension} variant="secondary">
              <Plus className="mr-2 h-4 w-4" /> Añadir Extensión
            </Button>
          </div>
          <Button onClick={reset} variant="outline" className="mt-4 w-full sm:w-auto">
            <RotateCcw className="mr-2 h-4 w-4" />
            Reiniciar
          </Button>
        </div>

        {/* Visualizer */}
        <div className="relative min-h-[300px] w-full flex justify-center items-end p-4 bg-muted/30 rounded-lg border border-dashed">
            <div className="relative w-36 h-28">
                {/* Base Module */}
                <div className="absolute bottom-0 left-0 w-full h-full transition-all duration-300">
                   <HouseModule className="bg-green-500" isBase={true} />
                </div>
                
                {/* Extension */}
                <div className={cn(
                    "absolute bottom-0 -right-[110%] w-full h-full transition-all duration-500 ease-in-out",
                    hasExtension ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-90'
                )}>
                    <HouseModule className="bg-blue-500" isBase={true} />
                </div>

                {/* Second Floor on Base */}
                 <div className={cn(
                    "absolute bottom-[100%] left-0 w-full h-full transition-all duration-500 ease-in-out",
                    hasSecondFloor ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-4'
                )}>
                    <HouseModule className="bg-yellow-400" />
                </div>
                
                 {/* Second Floor on Extension */}
                 <div className={cn(
                    "absolute bottom-[100%] -right-[110%] w-full h-full transition-all duration-500 ease-in-out delay-100",
                    (hasExtension && hasSecondFloor) ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-4'
                )}>
                    <HouseModule className="bg-yellow-400" />
                </div>
            </div>
        </div>
      </CardContent>
    </Card>
  )
}
