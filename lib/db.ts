import { neon } from '@neondatabase/serverless';

// Permitir que compile sin la variable (se necesitará en runtime)
const DATABASE_URL = process.env.DATABASE_URL || '';

export const sql = neon(DATABASE_URL);
