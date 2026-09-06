# 📘 Aprende TypeScript

¡Hola, bienvenido/a al repositorio definitivo para dominar **TypeScript** de básico a avanzado 😁! Este proyecto está diseñado como una guía práctica para llevar tus habilidades de desarrollo al siguiente nivel agregando un sistema de tipado robusto a tus aplicaciones.

El contenido sigue una estructura de carpetas clara y progresiva, repleta de ejemplos comentados.
---

## 🎯 Requisitos Previos

Para aprender fácilmente este curso, es importante que cuentes con los siguientes conocimientos y herramientas:

* **Dominio básico de JavaScript:** Si necesitas repasar o aprender desde cero las bases del lenguaje (asincronía, estructuras de control, etc.), te recomiendo visitar primero mi repositorio anterior: [aprende-js](https://github.com/juanvillar-dev/aprende-js.git).
* **Entorno de ejecución:** Tener instalado **Node.js** (versión LTS recomendada) en tu sistema.
* **Gestor de paquetes:** Familiaridad con **npm** (incluido con Node) o equivalentes como *pnpm* o *yarn*.

---

## 📂 Estructura del Curso y Temario

El repositorio está organizado en módulos numerados. Cada carpeta representa un proyecto independiente con su propia configuración de `tsconfig.json` y dependencias.

### 🏗️ 01. Crear Proyecto (`c01-crear-proyecto`)
* Configuración inicial del entorno y del compilador de TypeScript.

### ✍️ 02. Sintaxis y Tipado (`c02-sintaxis-tipado`)
* **Fundamentos:** Tipos Básicos (`E01`) y Funciones (`E02`).
* **Modelado de Datos:** Tipos Personalizados (`E03`), Interfaces (`E04`) y Operadores (`E05`).
* **Genéricos:** Introducción a Generics (`E06`).
* **Tipado Avanzado:** Uso de Utility Types (`E07`), Conditional Types (`E08`) y Mapped Types (`E09`).

### 🧩 03. Sintaxis y POO (`c03-sintaxis-poo`)
* **Estructura de Clases:** Creación de Clases (`E01`), Modificadores de Acceso (`E02`) y Otros Modificadores (`E03`).
* **Pilares de POO:** Herencia (`E04`), Clases Abstractas (`E05`) e implementación de Interfaces (`E06`).
* **Reutilización:** Aplicación de Genéricos en el contexto de orientación a objetos (`E07`).

### 🗂️ 04. Organización (`c04-organizacion`)
* Conceptos clave para modularizar y estructurar código limpio:
  * Declaration Merging (`E00`)
  * Decorators (`E00`)
  * Enums (`E00`)
  * Generics en profundidad (`E00`)
  * Narrowing (`E00`)

### 🎨 05. Patrones de Diseño (`c05-patrones-disenio`)
Resolución de problemas arquitectónicos comunes divididos por categorías clásicas:
* **Creacionales:** Singleton (`E1`), Factory Method (`E2`), Abstract Factory (`E3`), Builder (`E4`) y Prototype (`E5`).
* **Estructurales:** Adapter (`E1`), Decorator (`E2`) y Composite (`E3`).
* **Comportamiento:** Ejemplos prácticos y guías de implementación.

---

## 🚀 Cómo Ejecutar los Ejemplos

Cada módulo cuenta con su propio archivo `package.json`. Para probar cualquier archivo de código de manera local:

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com
   ```
2. **Navega a la carpeta del módulo que deseas estudiar, por ejemplo:**
   ```bash
   cd c02-sintaxis-tipado
   ```
3. **Instala las dependencias necesarias:**
   ```bash
   npm install
   ```
4. **Ejecuta el punto de entrada o los scripts configurados:**
   ```bash
   npm start
   ```

---

## 👨‍💻 Autoría y Comunidad

Creado por **Juan Villar**. El contenido de este repositorio ha sido cuidadosamente recopilado, estructurado y adaptado a partir de documentación oficial, ayuda de herramientas y práctica personal con el fin de ofrecer un camino de aprendizaje autodidacta, claro y efectivo 🚀.

Si este material te resulta de ayuda para mejorar como desarrollador/a, ¡no olvides dejar una ⭐ en el repositorio para apoyar el proyecto 😊!
