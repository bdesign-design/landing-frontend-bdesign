export function Values() {
  const values = [
    {
      title: "DISEÑO SOSTENIBLE",
      description: "Trabajamos con melamine de calidad, optimizando cada centímetro para crear muebles duraderos que respetan tu inversión y el medio ambiente.",
    },
    {
      title: "PENSADO PARA TI",
      description: "No hacemos muebles estándar. Cada proyecto nace de escuchar tus necesidades reales y diseñar soluciones que se adaptan a tu vida, no al revés.",
    },
    {
      title: "HECHO CON PRECISIÓN",
      description: "Detrás de cada pieza hay dedicación artesanal y atención al detalle. Porque lo que hacemos habla de nosotros, y queremos que hable bien.",
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <h3 className="text-sm font-semibold tracking-wider mb-4 text-foreground">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
