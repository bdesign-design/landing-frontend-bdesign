"use client";

import Image from "next/image";

export function Services() {
  const services = [
    {
      number: "01",
      title: "CONSULTORÍA Y DISEÑO DE ESPACIOS",
      description: "Desde la conceptualización hasta el styling final, transformamos tus ideas en proyectos arquitectónicos completos. Ofrecemos consultoría, planning estratégico y diseño integral para crear ambientes que reflejen tu estilo de vida.",
      image: "/servicio-diseno.webp",
      align: "right"
    },
    {
      number: "02",
      title: "IMPLEMENTACIÓN Y AMOBLAMIENTO",
      description: "Ejecutamos cada detalle con precisión. Fabricamos mobiliario a medida, coordinamos la implementación completa y nos encargamos del amoblamiento de tu espacio, garantizando calidad y funcionalidad en cada elemento.",
      image: "/servicio-muebles.jpeg",
      align: "left"
    }
  ];

  return (
    <section id="servicios" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Título principal */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-sm md:text-base text-muted-foreground mb-4 tracking-wider uppercase">
            Hacemos realidad tus ideas
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground">
            NUESTROS
          </h2>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground">
            SERVICIOS
          </h2>
        </div>

        {/* Servicios */}
        <div className="space-y-24 md:space-y-32 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`flex flex-col ${service.align === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
            >
              {/* Contenido de texto */}
              <div className="flex-1 space-y-4">
                <div>
                  {/* Número pequeño arriba */}
                  <span className="font-extrabold text-foreground tracking-wider mb-2 inline-block">
                    ({service.number.replace('0', '')})
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Imagen */}
              <div className="flex-1 w-full">
                <div className="relative aspect-4/3 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
