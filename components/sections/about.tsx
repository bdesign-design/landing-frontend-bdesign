"use client";

import Image from "next/image";

export function About() {
    return (
        <section id="nosotros" className="py-20 md:py-24 bg-background">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Columna izquierda - Imagen */}
                        <div className="relative group">
                            <div className="relative h-[400px] md:h-[500px] rounded overflow-hidden">
                                <Image
                                    src="/imagen-personal-bdesign.png"
                                    alt="Arquitecto egresado UNI especialista en diseño de interiores y muebles de melamine Lima"
                                    fill
                                    className="object-contain group-hover:scale-105 transition-all duration-700 ease-out"
                                    priority
                                />
                                {/* Overlay sutil en hover */}
                                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-all duration-500" />
                            </div>
                            {/* Detalle decorativo */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-foreground/20 rounded -z-10 group-hover:border-foreground/40 transition-all duration-500" />
                        </div>

                        {/* Columna derecha - Contenido */}
                        <div>
                            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                                Sobre nosotros
                            </p>
                            <h2 className="text-3xl md:text-4xl font-normal mb-6 text-foreground">
                                Transformamos espacios en experiencias únicas
                            </h2>

                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Egresado de la Universidad Nacional de Ingeniería (UNI) con más de 5 años de experiencia
                                    en proyectos arquitectónicos, me apasiona crear ambientes que reflejen la personalidad
                                    de cada cliente.
                                </p>
                                <p>
                                    Mi enfoque se centra en entender tus necesidades, maximizar el potencial de cada espacio
                                    y cuidar cada detalle del proceso, desde el concepto inicial hasta la ejecución final.
                                </p>
                                <p>
                                    Trabajo con dedicación para ofrecerte un servicio integral que combine funcionalidad,
                                    estética y calidad. Tu espacio no solo debe ser hermoso, sino también práctico y único.
                                </p>
                            </div>

                            {/* Estadísticas */}
                            <div className="grid grid-cols-2 gap-8 mt-10 pt-8 border-t border-border/50">
                                <div>
                                    <p className="text-3xl font-light text-foreground mb-1">+5</p>
                                    <p className="text-sm text-muted-foreground">Años de experiencia</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-light text-foreground mb-1">+50</p>
                                    <p className="text-sm text-muted-foreground">Proyectos culminados</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
