"use client";

import { useState } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phone-input";

// Esquema de validación con Zod
const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido").optional().or(z.literal("")),
  telefono: z.string().min(9, "Teléfono debe tener al menos 9 dígitos").optional().or(z.literal("")),
  descripcion: z.string().min(10, "Por favor describe tu proyecto con más detalle"),
});

type ContactForm = z.infer<typeof contactSchema>;

export function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    nombre: "",
    email: "",
    telefono: "",
    descripcion: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    // Validar con Zod
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.issues.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as keyof ContactForm] = error.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Guardar en la base de datos
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al guardar el contacto');
      }

      // Mostrar mensaje de éxito
      setIsSuccess(true);
      
      // Limpiar formulario
      setFormData({ nombre: "", email: "", telefono: "", descripcion: "" });
      setIsSubmitting(false);

      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error:', error);
      setErrors({ nombre: 'Hubo un error. Por favor intenta nuevamente.' });
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Card con dos columnas */}
          <div
            className="bg-card border border-border/40 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Columna izquierda - Información */}
              <div className="bg-muted/30 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-normal mb-4 text-foreground">
                  Conversemos sobre tu proyecto
                </h2>
                <p className="text-muted-foreground text-sm mb-10">
                  Completa el formulario y nos pondremos en contacto contigo de inmediato
                </p>

                {/* Bondades */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 mt-1 shrink-0">
                      <svg fill="currentColor" viewBox="0 0 20 20" className="text-foreground">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Compromiso con la Calidad</p>
                      <p className="text-sm text-muted-foreground">Cada proyecto refleja tu estilo y necesidades</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 mt-1 shrink-0">
                      <svg fill="currentColor" viewBox="0 0 20 20" className="text-foreground">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Atención al Detalle</p>
                      <p className="text-sm text-muted-foreground">Cuidamos cada elemento de tu espacio</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 mt-1 shrink-0">
                      <svg fill="currentColor" viewBox="0 0 20 20" className="text-foreground">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Asesoría Completa</p>
                      <p className="text-sm text-muted-foreground">Te acompañamos en todo el proceso</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna derecha - Formulario */}
              <div className="p-8 md:p-12 bg-background">
                {/* Mensaje de éxito */}
                {isSuccess && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-medium text-green-800 dark:text-green-200">¡Mensaje enviado correctamente!</p>
                        <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                          Gracias por contactarnos. Nos pondremos en contacto contigo a la brevedad.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Nombre */}
                  <div className="space-y-2">
                    <Label htmlFor="nombre" className="text-sm text-foreground">
                      Nombre *
                    </Label>
                    <Input
                      id="nombre"
                      type="text"
                      placeholder="Tu nombre completo"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className={`h-11 ${errors.nombre ? 'border-red-500' : ''}`}
                    />
                    {errors.nombre && (
                      <p className="text-xs text-red-500">{errors.nombre}</p>
                    )}
                  </div>

                  {/* Email y Teléfono */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm text-foreground">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`h-11 ${errors.email ? 'border-red-500' : ''}`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500">{errors.email}</p>
                      )}
                    <div className="space-y-2">
                      <Label htmlFor="telefono" className="text-sm text-foreground">
                        Teléfono
                      </Label>
                      <PhoneInput
                        id="telefono"
                        placeholder="999 999 999"
                        value={formData.telefono}
                        onChange={(value) => setFormData({ ...formData, telefono: value || "" })}
                        defaultCountry="PE"
                        className={errors.telefono ? 'border-red-500' : ''}
                      />
                      {errors.telefono && (
                        <p className="text-xs text-red-500">{errors.telefono}</p>
                      )}
                    </div> className="text-xs text-red-500">{errors.telefono}</p>
                      )}
                    </div>
                  </div>

                  {/* Descripción */}
                  <div className="space-y-2">
                    <Label htmlFor="descripcion" className="text-sm text-foreground">
                      Tu proyecto *
                    </Label>
                    <Textarea
                      id="descripcion"
                      placeholder="Cuéntanos qué espacio quieres transformar..."
                      value={formData.descripcion}
                      onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                      rows={4}
                      className={`resize-none ${errors.descripcion ? 'border-red-500' : ''}`}
                    />
                    {errors.descripcion && (
                      <p className="text-xs text-red-500">{errors.descripcion}</p>
                    )}
                  </div>

                  {/* Botón */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-foreground text-background py-3.5 text-sm font-medium hover:bg-foreground/90 transition-colors duration-200 rounded-sm disabled:opacity-50"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
