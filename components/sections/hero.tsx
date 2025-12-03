"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen w-screen flex items-center justify-start overflow-hidden bg-background">
      {/* Imagen de fondo hero */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Diseño de interiores y muebles de melamine a medida en Lima - B.Design"
          className="object-cover object-[50%_30%] md:object-center"
          priority
          fill
          quality={100}
          sizes="100vw"
        />
        {/* Overlay con gradiente para mejor legibilidad del texto */}
        <div className="absolute inset-0 bg-linear-to-r from-background/50 via-background/50 to-transparent" />
      </div>

      {/* Texto vertical lateral - Solo desktop */}
      {/* <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 z-20">
        <p 
          className="text-foreground/80 text-base tracking-[0.3em] font-[family-name:var(--font-story-script)]"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            letterSpacing: '0.3em'
          }}
        >
          Transformando espacios en experiencias
        </p>
      </div> */}

      {/* Estadísticas flotantes - Solo desktop */}
      <div className="hidden xl:flex absolute right-12 top-1/2 -translate-y-1/2 z-20 flex-col gap-8">
        {/* Card 1 */}
        <div className="bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-lg p-6 min-w-[180px] hover:shadow-lg transition-all duration-300">
          <p className="text-4xl font-light text-foreground mb-2">+5</p>
          <p className="text-sm text-muted-foreground leading-snug">Años de<br />experiencia</p>
        </div>
        
        {/* Card 2 */}
        <div className="bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-lg p-6 min-w-[180px] hover:shadow-lg transition-all duration-300">
          <p className="text-4xl font-light text-foreground mb-2">+50</p>
          <p className="text-sm text-muted-foreground leading-snug">Proyectos<br />culminados</p>
        </div>
        
        {/* Card 3 */}
        <div className="bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-lg p-6 min-w-[180px] hover:shadow-lg transition-all duration-300">
          <p className="text-4xl font-light text-foreground mb-2">100%</p>
          <p className="text-sm text-muted-foreground leading-snug">Satisfacción<br />garantizada</p>
        </div>
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        {/* Contenedor alineado a la izquierda con más margen */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 max-w-2xl ml-0 sm:ml-4 md:ml-8 lg:ml-12">
          {/* Título principal - lado izquierdo */}
          <h1
            className="font-black text-foreground leading-tight select-none"
            style={{
              fontSize: 'clamp(36px, 6vw, 80px)',
              letterSpacing: '-0.02em'
            }}
          >
            Elegancia esencial
            <br className="md:hidden" />
            <span className="hidden md:inline"> </span>
            <span className="whitespace-nowrap">Diseño que trasciende</span>
          </h1>

          {/* Botón - lado izquierdo */}
          <button
            className="self-start bg-foreground text-background px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base md:text-lg font-medium hover:bg-foreground/90 transition-all duration-300 rounded-sm shadow-lg hover:shadow-xl"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conversemos sobre tu proyecto
          </button>
        </div>
      </div>
    </section>
  );
}
