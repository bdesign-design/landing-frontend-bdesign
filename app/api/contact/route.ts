import { sql } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Schema de validación
const contactSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido').optional(),
  telefono: z.string().min(9, 'El teléfono debe tener al menos 9 caracteres').optional(),
  descripcion: z.string().min(10, 'La descripción debe tener al menos 10 caracteres'),
});

// Crear tabla si no existe
async function initDB() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS contactos (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(255) NOT NULL,
        email VARCHAR(255),
        telefono VARCHAR(50),
        descripcion TEXT NOT NULL,
        fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
  } catch (error) {
    console.error('Error creando tabla:', error);
  }
}

export async function POST(request: NextRequest) {
  try {
    // Verificar que exista la variable de entorno
    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        { error: 'Base de datos no configurada' },
        { status: 500 }
      );
    }

    // Inicializar DB
    await initDB();

    // Parsear el body
    const body = await request.json();
    
    // Validar datos
    const result = contactSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: result.error.issues },
        { status: 400 }
      );
    }

    const { nombre, email, telefono, descripcion } = result.data;

    // Insertar en la base de datos
    const inserted = await sql`
      INSERT INTO contactos (nombre, email, telefono, descripcion)
      VALUES (${nombre}, ${email || null}, ${telefono || null}, ${descripcion})
      RETURNING id, nombre, email, telefono, descripcion, fecha_creacion
    `;

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contacto guardado exitosamente',
        data: inserted[0]
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error guardando contacto:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// Opcional: Endpoint GET para listar contactos
export async function GET() {
  try {
    // Verificar que exista la variable de entorno
    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        { error: 'Base de datos no configurada' },
        { status: 500 }
      );
    }

    await initDB();
    
    const contactos = await sql`
      SELECT id, nombre, email, telefono, descripcion, fecha_creacion
      FROM contactos
      ORDER BY fecha_creacion DESC
      LIMIT 50
    `;

    return NextResponse.json({ contactos });
  } catch (error) {
    console.error('Error obteniendo contactos:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
