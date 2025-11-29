"use client"

import Link from "next/link";

const navLinks = [
  { name: "Inicio", href: "/#hero" },
  { name: "Contacto", href: "https://wa.me/50379870945" },
  { name: "Futuro", href: "/futuro" },
]

export default function Footer() {
  const handleNavigation = (href: string, e: React.MouseEvent<HTMLButtonElement>) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const elementId = href.substring(2);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    } else if (href.startsWith("http") || href.startsWith("https")) {
       e.preventDefault();
       window.open(href, '_blank');
    }
  }

  return (
    <footer className="bg-background/80 border-t border-border/50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        <div className="flex flex-col items-center md:items-start gap-4">
            <span className="font-headline font-bold text-xl tracking-tight">Modular Homes</span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} passHref>
              <button
                onClick={(e) => handleNavigation(link.href, e)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            </Link>
          ))}
        </div>
        <div className="text-sm text-muted-foreground">
          <p>Equipo 46</p>
        </div>
      </div>
    </footer>
  )
}
