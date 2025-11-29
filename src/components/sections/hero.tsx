"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"

export default function HeroSection() {
  const scrollToRoadmap = () => {
    document.getElementById("como-funciona")?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-end justify-center text-center text-white pb-20 sm:pb-24">
      <Image
        src="https://i.imgur.com/Ehocf9i.jpeg"
        alt="Modular Homes Logo Background"
        fill
        priority
        className="object-contain"
      />
      <div className="absolute inset-0 bg-black/50" />
      <AnimatedSection className="relative z-10 px-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline">
          Viviendas que Crecen Contigo
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-neutral-200">
          Un sistema constructivo inteligente, accesible y escalable. Comienza con una pieza, construye un legado.
        </p>
        <div className="mt-10">
          <Button size="lg" onClick={scrollToRoadmap}>
            Diseña tu Módulo
          </Button>
        </div>
      </AnimatedSection>
    </section>
  )
}
