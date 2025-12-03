export function Catalog() {
  const categories = [
    { name: "Cocinas", description: "Funcionales y elegantes" },
    { name: "Closets", description: "Orden con estilo" },
    { name: "Escritorios", description: "Tu espacio de trabajo ideal" },
    { name: "Muebles de sala", description: "Confort y diseño" },
    { name: "Repisas", description: "Optimiza cada rincón" },
    { name: "Proyectos personalizados", description: "Lo que imagines" },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground mb-4 tracking-wider">NUESTRO CATÁLOGO</p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-2">
            COCINAS, CLOSETS, ESCRITORIOS,
          </h2>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-2">
            MUEBLES DE SALA, REPISAS
          </h2>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            & MÁS
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              {/* Placeholder para imagen de categoría */}
              <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden">
                {/* Reemplaza con tu imagen */}
                <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 group-hover:bg-primary/5 transition-colors">
                  <p className="text-sm font-medium text-foreground">{category.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
