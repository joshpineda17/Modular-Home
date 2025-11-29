"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "El Desafío", href: "#contexto" },
  { name: "Materiales", href: "#materiales" },
  { name: "Modular Home", href: "#como-funciona" },
  { name: "Ecosistema", href: "#ecosistema" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm border-b border-border/50" : "bg-transparent"
      )}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
             <button onClick={() => handleScrollTo("#hero")} aria-label="Scroll to top" className="font-headline font-bold text-xl tracking-tight text-foreground">
                Modular Homes
            </button>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScrollTo(link.href)}
                className="font-medium text-foreground hover:text-primary transition-colors text-sm"
              >
                {link.name}
              </button>
            ))}
          </nav>
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-background">
                <div className="flex flex-col h-full py-6">
                   <div className="mb-8">
                    <button onClick={() => handleScrollTo("#hero")} aria-label="Scroll to top" className="font-headline font-bold text-xl tracking-tight">
                      Modular Homes
                    </button>
                  </div>
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <button
                        key={link.name}
                        onClick={() => handleScrollTo(link.href)}
                        className="text-lg font-medium text-left text-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </button>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
