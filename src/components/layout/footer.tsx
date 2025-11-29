"use client"

const navLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Contacto", href: "https://wa.me/50379870945" },
  { name: "Prensa", href: "#" },
]

export default function Footer() {
  const scrollTo = (id: string) => {
    if (id.startsWith("#")) {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.open(id, '_blank');
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
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>
        <div className="text-sm text-muted-foreground">
          <p>Equipo 46</p>
        </div>
      </div>
    </footer>
  )
}
