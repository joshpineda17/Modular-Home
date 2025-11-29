import { cn } from "@/lib/utils"
import Image from "next/image"

export function Logo({ className, width = 40, height = 32 }: { className?: string, width?: number, height?: number }) {
  return (
    <div className={cn("flex items-center gap-3 text-foreground", className)}>
      <Image src="https://i.imgur.com/Ehocf9i.jpeg" alt="Modular Homes Logo" width={width} height={height} />
      <span className="font-headline font-bold text-xl tracking-tight">Modular Homes</span>
    </div>
  )
}
