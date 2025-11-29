"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import Link from "next/link"

const navLinks = [
  { name: "Inicio", href: "/#hero" },
  { name: "El Desafío", href: "/#contexto" },
  { name: "Modular Home", href: "/#como-funciona" },
  { name: "Ecosistema", href: "/#ecosistema" },
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

  const handleScrollTo = (id: string, e: React.MouseEvent<HTMLButtonElement>) => {
    if (id.startsWith('/#')) {
        e.preventDefault();
        const elementId = id.substring(2); // Remove '/#'
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        } else {
            // Fallback for when element is not on the same page
            window.location.href = id;
        }
    }
    // Let Next.js Link handle other URLs
    setMobileMenuOpen(false);
  };

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
             <Link href="/#hero" aria-label="Scroll to top" className="font-headline font-bold text-xl tracking-tight text-foreground" onClick={(e) => handleScrollTo('/#hero', e as any)}>
                Modular Homes
            </Link>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} passHref>
                <button
                  onClick={(e) => handleScrollTo(link.href, e)}
                  className="font-medium text-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </button>
              </Link>
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
                    <Link href="/#hero" aria-label="Scroll to top" className="font-headline font-bold text-xl tracking-tight" onClick={(e) => handleScrollTo('/#hero', e as any)}>
                      Modular Homes
                    </Link>
                  </div>
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                       <Link key={link.name} href={link.href} passHref>
                        <button
                            onClick={(e) => handleScrollTo(link.href, e)}
                            className="text-lg font-medium text-left text-foreground hover:text-primary transition-colors"
                        >
                            {link.name}
                        </button>
                      </Link>
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
