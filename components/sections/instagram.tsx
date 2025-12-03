export function Instagram() {
  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              SÍGUENOS EN INSTAGRAM
            </h2>
            <p className="text-background/80 mb-2">
              PARA VER NUESTROS ÚLTIMOS DISEÑOS
            </p>
            <p className="text-background/80">
              E INSTALACIONES
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mb-8">
            {/* Placeholders para posts de Instagram - 8 espacios */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="aspect-square bg-background/10 rounded overflow-hidden hover:opacity-80 transition-opacity cursor-pointer"
              >
                {/* Reemplaza con tus imágenes de Instagram */}
                <div className="w-full h-full flex items-center justify-center text-xs text-background/50">
                  Post {item}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            {/* Reemplaza con tu usuario de Instagram */}
            <a
              href="https://instagram.com/tu_usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-background hover:text-background/80 transition-colors font-medium"
            >
              @bdesign.pe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
