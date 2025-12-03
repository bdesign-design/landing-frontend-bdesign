"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export function Gallery() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "DISEÑO DE INTERIORES",
      description: "A lo largo de todo el proceso de construcción, prestamos atención meticulosa a cada detalle y al entorno circundante. Desde la selección de materiales de la más alta calidad hasta la instalación precisa de cada elemento.",
      location: "Lima, Perú",
      days: "20 días",
      mainMedia: {
        type: "image" as const,
        src: "/portfolio/render_final.webp",
        alt: "Proyecto terminado"
      },
      gallery: [
        { type: "image" as const, src: "/portfolio/cuarto-personal.jpeg", alt: "Cuarto personal" },
        { type: "image" as const, src: "/portfolio/contruyendo-sala.jpeg", alt: "Construyendo sala" },
        { type: "video" as const, src: "/portfolio/video-cuarto-personal.mov", alt: "Video cuarto personal" },
        { type: "image" as const, src: "/portfolio/revisando-sala.webp", alt: "Revisando sala" },
        { type: "video" as const, src: "/portfolio/video-sala.mov", alt: "Video sala" },
        { type: "video" as const, src: "/portfolio/trabajando-proyecto.mp4", alt: "Trabajando en proyecto" },
      ]
    }
  ];

  return (
    <section id="portafolio" className="py-8 md:py-12 bg-background relative">
      {/* Texto vertical */}
      <div className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 z-10">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/80 font-light" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          cuidamos el más mínimo detalle
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6" ref={galleryRef}>
        {/* Header */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
            <span className="text-foreground block">NUESTRO</span>
            <span className="text-muted-foreground block ml-0 sm:ml-4 md:ml-8 lg:ml-16">PORTAFOLIO</span>
          </h2>
        </div>

        {/* Projects */}
        {projects.map((project, projectIndex) => (
          <div key={project.id} className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-1">
              {/* Imagen/Video principal - Columna izquierda */}
              <div className="lg:col-span-5 relative group">

                {/* Media principal */}
                <div className="relative h-[350px] md:h-[480px] rounded-md overflow-hidden shadow-lg">
                  {project.mainMedia.type === "image" ? (
                    <Image
                      src={project.mainMedia.src}
                      alt={project.mainMedia.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <video
                      src={project.mainMedia.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
              </div>

              {/* Galería - Columna derecha */}
              <div className="lg:col-span-7">
                {/* Grid de galería */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
                  {project.gallery.map((media, index) => (
                    <div
                      key={index}
                      className="relative aspect-4/3 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
                      onMouseEnter={() => setHoveredProject(index)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      {media.type === "image" ? (
                        <Image
                          src={media.src}
                          alt={media.alt}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <video
                          src={media.src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      )}
                      {/* Overlay en hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Call to action */}
        <div className="text-center mt-8">
          <p className="text-sm md:text-base text-muted-foreground mb-4">
            Síguenos en nuestras redes sociales para ver más proyectos
          </p>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.instagram.com/b.design2111/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-foreground/70 transition-colors font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61554683582193"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-foreground/70 transition-colors font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
            <a
              href="https://www.tiktok.com/@b..design?lang=es-419"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-foreground/70 transition-colors font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}