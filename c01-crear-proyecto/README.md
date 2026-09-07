# 📦 C01 — Crear Proyecto

Configuración inicial del entorno y del compilador de TypeScript. Este módulo sirve como **plantilla base** para los siguientes.

---

## 🪜 Pasos para crear el proyecto (desde cero)

1. **Crear el `package.json`:**
   ```bash
   npm init -y
   ```
   Genera un `package.json` por defecto respondiendo "sí" a todo. Después se ajustan `name`, `type`, `scripts`, etc.

2. **Instalar dependencias:**
   ```bash
   npm install -D typescript tsx   # -D: solo desarrollo
   npm install express             # sin -D: dependencia de producción
   ```
   `tsc` (compilador) y `tsx` (ejecutar TS directo) solo hacen falta mientras desarrollás → `-D`. Las librerías que tu código necesita al correr (servidores, frameworks…) van **sin** `-D`.

3. **Generar el `tsconfig.json`:**
   ```bash
   npx tsc --init
   ```
   Crea un `tsconfig.json` comentado con todas las opciones disponibles. Luego se reemplaza por la **configuración recomendada** (abajo, en la sección ⚙️).

4. **Configurar el sistema de módulos:** decidir ESM o CommonJS y declararlo en los **dos** lugares (ver "La regla de oro de los módulos").

5. **Compilar y entender `dist/`:**
   ```bash
   npm run build   # tsc: compila el TS de src/ → JS en dist/
   npm start       # node dist/index.js: ejecuta el JS ya compilado
   ```
   `dist/` (de *distribution*) es la carpeta de **salida** del compilador. No se escribe ni se edita a mano: solo contiene el JS generado y, si la borrás, `npm run build` la recrea. Para ejecutar TS directo **sin** compilar existe `npm run dev` (con `tsx`).

---

## 🗂️ Estructura

```
c01-crear-proyecto/
├── package.json      # Metadatos del proyecto, scripts y dependencias
├── tsconfig.json     # Configuración del compilador de TypeScript
├── src/              # Código fuente (TypeScript)
│   ├── index.ts      # Punto de entrada
│   └── utils.ts      # Módulo de ejemplo (import/export)
└── dist/             # Código compilado (JavaScript) — no se escribe a mano
```

---

## 📄 package.json

Define al proyecto ante Node.js y npm.

```json
{
  "name": "c01-crear-proyecto",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "tsx src/index.ts"
  },
  "devDependencies": {
    "tsx": "^4.19.4",
    "typescript": "^7.0.2"
  }
}
```

| Campo         | Qué hace |
|---------------|----------|
| `name`        | Nombre del paquete (minúsculas, sin espacios). |
| `version`     | Versión semántica del proyecto. |
| `private`     | Evita que se publique por accidente en npm. |
| `type`        | Sistema de módulos. `"module"` = ESModules (`import/export`); `"commonjs"` = `require`. |
| `scripts`     | Comandos abreviados: `npm run build`, `npm start`, `npm run dev`. |
| `devDependencies` | Dependencias solo de desarrollo (NO van al "producto final"). |

> ⚠️ **El error #1 de estos proyectos:** olvidar `"type": "module"` y que Node interprete los `import` como CommonJS. JS fue CommonJS años y ahora es ESM; los dos sistemas conviven y hay que declarar cuál usas.

---

## ⚙️ tsconfig.json

Le dice al compilador *cómo* traducir tu TypeScript a JavaScript.

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "sourceMap": true,
    "noEmitOnError": true
  },
  "include": ["src"]
}
```

| Opción              | Qué hace |
|---------------------|----------|
| `target`            | Versión de JavaScript a emitir (ES2022 es la estándar en Node moderno). |
| `module`            | Formato de módulos que genera. `NodeNext` = ESM nativo de Node. Debe **coincidir** con `"type"` del `package.json`. |
| `moduleResolution`  | Cómo resuelve los `import`. Debe ir a la par de `module`. |
| `rootDir`           | Carpeta de entrada del fuente. |
| `outDir`            | Dónde escribe el JS compilado. |
| `strict`            | Activa el tipado estricto **completo**. Sin esto TS es "JavaScript con comentarios". |
| `esModuleInterop`   | Permite `import` limpio de librerías CommonJS. |
| `skipLibCheck`      | No revisa tipos dentro de los `.d.ts` de librerías (más velocidad). |
| `noUnusedLocals` / `noUnusedParameters` | Error si hay variables/parámetros sin usar. |
| `sourceMap`         | Genera `.map` para depurar el TS desde el navegador/Node. |
| `noEmitOnError`     | Si hay errores de tipos, no genera JS. |

### 🔎 La regla de oro de los módulos

```
"type": "module"  +  module/moduleResolution: "NodeNext"   →  import/export ✅
"type": "commonjs"  +  module: "CommonJS"                  →  require ✅
```

Si mezclás los dos lados, todo se rompe. **TS no decide los módulos solo**: depende del contexto que declares en `package.json`.

### 🧩 Detalle que sorprende: la extensión `.js`

Con `NodeNext`, los imports relativos **se escriben con `.js` en el código fuente**:

```ts
import { saludar } from './utils.js'; // ✅ así debe ir
import { saludar } from './utils';    // ❌ error en NodeNext
```

No es un error: el TypeScript se compila a `.js` **sin renombrar**, y Node ESM exige la extensión real. Normal que parezca raro al principio.

---

## 🚀 Ejecutar

```bash
npm install        # instala dependencias (1ra vez)
npm run build      # compila TS → dist/
npm start          # corre el JS ya compilado (dist/index.js)
npm run dev        # corre el TS directo con tsx (sin compilar)
```

- **`tsx`** ejecuta TypeScript al vuelo. Es el sucesor moderno de `ts-node` y permite `tsx watch` para recargar al guardar.
- `dist/` se puede borrar/regenerar siempre: **nunca se edita a mano**.

---

### 📌 Resumen para llevártelo

1. Cada proyecto Node declara su sistema de módulos en `package.json` con `"type"`.
2. `tsconfig.json` debe **reflejar** ese contexto (`module`/`moduleResolution`).
3. `strict: true` siempre mientras aprendés.
4. Compilar (`npm run build`) y ejecutar TS directo (`npm run dev`) son dos flujos válidos.
5. El código va en `src/`, el JS generado en `dist/`.