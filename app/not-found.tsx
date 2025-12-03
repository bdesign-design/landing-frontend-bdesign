import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Página no encontrada
        </h2>
        <p className="text-muted-foreground mb-8">
          Lo sentimos, la página que buscas no existe.
        </p>
        <Link
          href="/"
          className="inline-block bg-foreground text-background px-6 py-3 rounded-sm font-medium hover:bg-foreground/90 transition-colors duration-300"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
