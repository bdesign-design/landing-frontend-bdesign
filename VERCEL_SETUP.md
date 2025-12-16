# Configuración de Variables de Entorno en Vercel

## Paso 1: Ir a Vercel Dashboard
1. Ve a: https://vercel.com/dashboard
2. Selecciona tu proyecto: `landing-frontend-bdesign`

## Paso 2: Configurar Variables de Entorno
1. Ve a: **Settings** → **Environment Variables**
2. Agrega la siguiente variable:

### Variable Requerida:
```
Name: DATABASE_URL
Value: postgresql://neondb_owner:npg_izqG8x1hvlQb@ep-frosty-smoke-acotz4sh-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require
```

3. Selecciona los entornos: **Production**, **Preview**, y **Development**
4. Click en **Save**

## Paso 3: Redeploy
1. Ve a: **Deployments**
2. Click en los 3 puntos (...) del último deployment
3. Click en **Redeploy**

## Verificación
Una vez desplegado, prueba:
- https://www.bdesign.agency/api/contact (debe retornar vacío o contactos)
- El formulario de contacto debe guardar en la base de datos

## Consultar la Base de Datos
Para ver los contactos guardados, puedes usar el cliente de Neon:
```bash
psql 'postgresql://neondb_owner:npg_izqG8x1hvlQb@ep-frosty-smoke-acotz4sh-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
```

Luego ejecutar:
```sql
SELECT * FROM contactos ORDER BY fecha_creacion DESC;
```
