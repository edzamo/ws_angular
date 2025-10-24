# 🚀 Guía de Inicio Rápida para tu Proyecto Angular

¡Bienvenido, developer! Esta guía está diseñada para ser tu compañera de viaje mientras exploras y construyes con Angular. Aquí encontrarás los comandos esenciales, una explicación de la estructura del proyecto y los conceptos clave que necesitas para empezar.

## 🛠️ Comandos Esenciales de Angular CLI

La Interfaz de Línea de Comandos (CLI) de Angular es tu herramienta más poderosa. Aquí están los comandos más comunes con su forma corta y larga.

| Tarea | Comando Largo | Comando Corto | Descripción |
| :--- | :--- | :--- | :--- |
| Crear un nuevo proyecto | `ng new <nombre-proyecto>` | `ng n <nombre-proyecto>` | Genera una nueva aplicación de Angular con toda la estructura base. |
| Iniciar el servidor | `ng serve` | `ng s` | Compila y levanta un servidor de desarrollo local en `http://localhost:4200/`. |
| Generar componentes, etc. | `ng generate <schematic> <nombre>` | `ng g <schematic> <nombre>` | Crea nuevos archivos (componentes, módulos, servicios, etc.) |
| Compilar para producción | `ng build` | `ng b` | Compila la aplicación en la carpeta `dist/`, optimizada para producción. |
| Ejecutar pruebas unitarias | `ng test` | `ng t` | Ejecuta las pruebas unitarias con Karma y Jasmine. |

**Ejemplos de `ng generate`:**
*   `ng generate component mi-componente` -> `ng g c mi-componente`
*   `ng generate service mi-servicio` -> `ng g s mi-servicio`
*   `ng generate module mi-modulo` -> `ng g m mi-modulo`

---

## 📂 ¿Qué Contiene un Proyecto Angular?

Cuando creas un proyecto, Angular CLI genera una estructura de carpetas y archivos bien organizada. Aquí te explico los más importantes:

*   `angular.json`: El corazón de la configuración de tu proyecto para la CLI. Aquí se definen las opciones de build, serve, test, y más.
*   `package.json`: Define los scripts de npm (como `start`, `build`) y lista todas las dependencias (librerías) que tu proyecto necesita.
*   `node_modules/`: Carpeta donde se descargan e instalan todas las dependencias listadas en `package.json`.
*   `tsconfig.json`: Archivo de configuración para el compilador de TypeScript. Le dice a TypeScript cómo compilar tus archivos `.ts` a JavaScript.
*   `src/`: ¡Aquí es donde ocurre la magia! Es la carpeta principal que contiene todo el código fuente de tu aplicación.
    *   `index.html`: La única página HTML de tu aplicación. Angular inyectará tu aplicación dentro de la etiqueta `<app-root></app-root>`.
    *   `main.ts`: El punto de entrada de tu aplicación. Es el primer archivo que se ejecuta y se encarga de arrancar Angular y tu módulo principal.
    *   `styles.css` (o `.scss`): Para tus estilos globales que aplicarán a toda la aplicación.
    *   `app/`: La carpeta más importante de tu aplicación. Contiene el componente y módulo raíz.
        *   `app.component.ts`: La lógica del componente principal (la vista raíz).
        *   `app.component.html`: La plantilla HTML del componente principal.
        *   `app.component.css`: Los estilos específicos para el componente principal.
        *   `app.config.ts`: (En proyectos standalone) Configuración principal de la aplicación, como los providers y las rutas.
        *   `app.routes.ts`: (En proyectos standalone) Define las rutas de navegación de tu aplicación.

---
## 📁 Resumen de Archivos y Carpetas Generados por Defecto (Angular v20)

Aquí tienes un resumen de los archivos y carpetas más importantes que se generan al crear un nuevo proyecto Angular en la versión 20, junto con su propósito principal:

| Archivo/Carpeta | Propósito |
| :-------------- | :-------- |
| `src/app` | Código de la aplicación (componentes, rutas, servicios) |
| `src/assets/` | Archivos estáticos (imágenes, iconos, etc.) |
| `src/environments/` | Configuración específica del entorno (desarrollo, producción) |
| `src/main.ts` | Punto de entrada principal de la aplicación |
| `angular.json` | Configuración de compilación y del proyecto |
| `package.json` | Dependencias del proyecto y scripts de npm |
| `tsconfig*.json` | Configuraciones del compilador de TypeScript |
| `.editorconfig` | Reglas de estilo de código para editores |
| `.gitignore` | Reglas para ignorar archivos en el control de versiones de Git |
| `README.md` | Guía y descripción del proyecto |

## 🧩 ¿Qué es un Módulo? (NgModule)

Un **módulo** en Angular es un contenedor que agrupa componentes, directivas, pipes y servicios que están relacionados. Actúa como un "paquete" de funcionalidades.

*   **Propósito**: Organizar la aplicación en bloques lógicos y funcionales. Cada aplicación tiene al menos un módulo raíz, llamado `AppModule`.
*   **Standalone vs. NgModules**: Con las versiones recientes de Angular, los **componentes standalone** son la opción por defecto. Esto significa que los componentes ya no necesitan ser declarados en un `NgModule` para ser utilizados, simplificando la estructura. Sin embargo, el concepto de módulo sigue siendo útil para organizar la lógica de negocio y las rutas en aplicaciones grandes.

**Comando para generar un módulo:**

```bash
# Genera un módulo llamado 'mi-modulo'
ng generate module mi-modulo
# Alias: ng g m mi-modulo
```

---

## 🗺️ ¿Qué es el Routing?

El **Routing** (o enrutamiento) es el mecanismo que permite la navegación entre diferentes "páginas" o vistas en tu aplicación de página única (SPA).

*   **¿Cómo funciona?**: El Router de Angular interpreta la URL del navegador y muestra el componente que corresponde a esa ruta.
*   **`app.routes.ts`**: En los proyectos modernos con componentes standalone, las rutas se definen en un array dentro de este archivo. Cada objeto en el array mapea una ruta (path) a un componente (component).

**Ejemplo de una definición de ruta:**

```typescript
// En app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Ruta por defecto
    { path: 'about', component: AboutComponent } // Ruta para /about
];
```

Para que el enrutamiento funcione, necesitas tener una etiqueta `<router-outlet></router-outlet>` en tu plantilla principal (`app.component.html`), que es donde Angular renderizará el componente correspondiente a la ruta activa.

---

## ⚡️ ¿Qué son las Signals?

Las **Signals** son la nueva forma de manejar el estado y la reactividad en Angular, introducidas para mejorar el rendimiento y simplificar el desarrollo.

*   **¿Qué son?**: Una Signal es un "envoltorio" (wrapper) alrededor de un valor que puede notificar a las partes interesadas cuando ese valor cambia.
*   **¿Por qué son importantes?**: Permiten a Angular saber exactamente qué parte de la vista necesita ser actualizada cuando un estado cambia, en lugar de tener que revisar toda la aplicación. Esto hace que la detección de cambios sea mucho más eficiente.
*   **Tipos de Signals**:
    *   **`signal()`**: Para crear una signal escribible. Puedes cambiar su valor con `.set()` o `.update()`.
    *   **`computed()`**: Para crear una signal de solo lectura cuyo valor se deriva de otras signals. Se recalcula automáticamente cuando una de sus dependencias cambia.
    *   **`effect()`**: Para ejecutar código con efectos secundarios (como logging, llamadas a API) cada vez que una de sus dependencias cambia.

**Ejemplo de uso de Signals:**

```typescript
import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  template: `
    <p>Contador: {{ contador() }}</p>
    <p>Doble: {{ doble() }}</p>
    <button (click)="incrementar()">Incrementar</button>
  `
})
export class ContadorComponent {
  // 1. Creamos una signal escribible con valor inicial 0
  contador = signal(0);

  // 2. Creamos una signal computada que depende de 'contador'
  doble = computed(() => this.contador() * 2);

  incrementar() {
    // 3. Actualizamos el valor de la signal
    this.contador.update(valor => valor + 1);
  }
}
```
# ⚡️ Angular Moderno — Signals y Nuevos Flujos de Control

Guía rápida y completa sobre las **novedades de Angular 16 y 17**, que introducen un **nuevo modelo reactivo** y **sintaxis declarativa moderna**.

---

## 🧠 Signals (Angular 16)

### ¿Qué es un Signal?

Un **signal** es una **variable reactiva** que:
- Guarda un valor.
- Notifica automáticamente a Angular cuando cambia.
- Hace que la vista (template) se actualice sin necesidad de `ChangeDetectionStrategy` o `async pipe`.

👉 En resumen:  
Un **signal** es una forma más simple y predecible de manejar estado reactivo dentro de los componentes, sin depender de RxJS para casos simples.

---

### 📦 Ejemplo básico

```typescript
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h2>Count: {{ count() }}</h2>
    <button (click)="increment()">Increment</button>
  `
})
export class CounterComponent {
  count = signal(0); // Declaras un signal con valor inicial

  increment() {
    this.count.set(this.count() + 1); // Actualizas el valor del signal
  }
}
```

🟢 Angular actualizará automáticamente la vista cuando el valor cambie.

---

### ⚙️ Operaciones comunes con Signals

| Operación | Descripción | Ejemplo |
|------------|--------------|----------|
| `signal(initialValue)` | Crea un signal | `user = signal('Edwin')` |
| `.set(value)` | Reemplaza el valor | `user.set('Zamora')` |
| `.update(fn)` | Actualiza basado en el valor actual | `count.update(c => c + 1)` |
| `.mutate(fn)` | Modifica un objeto/array directamente | `list.mutate(arr => arr.push('item'))` |
| `.computed(fn)` | Crea un valor derivado | `double = computed(() => count() * 2)` |
| `.effect(fn)` | Reacciona a cambios | `effect(() => console.log(count()))` |

---

### 🚀 Cuándo usar Signals

Usa **signals** cuando:
- Manejas **estado local** dentro del componente.
- Quieres **reacciones automáticas** al cambio de valores.
- Deseas **simplicidad y rendimiento** sin RxJS.

Ejemplo:
```typescript
isLoggedIn = signal(false);

effect(() => {
  if (isLoggedIn()) {
    console.log('User logged in!');
  }
});
```

---

### ⚖️ Signals vs Observables

| Caso | Usa Signals | Usa Observables |
|------|--------------|----------------|
| Estado local simple (contador, toggles, formularios) | ✅ | ❌ |
| Datos asíncronos (HTTP, WebSocket) | ⚠️ Posible, pero no ideal | ✅ |
| Reacciones en la vista | ✅ | ✅ |
| Coordinación de múltiples streams | ❌ | ✅ |

---

## 🆕 Nuevos Flujos de Control en Angular (`@if`, `@for`, `@switch`)

Desde **Angular 17**, se introdujeron **nuevas directivas de control de flujo** que reemplazan a las tradicionales `*ngIf`, `*ngFor` y `*ngSwitch`.  
Estas nuevas sintaxis son **más expresivas, rápidas y legibles**.

---

### 🔍 ¿Por qué este cambio?

Las antiguas directivas (`*ngIf`, `*ngFor`, etc.) eran potentes, pero:
- Tenían sintaxis basada en asterisco (`*`) poco intuitiva.  
- No podían anidarse fácilmente sin `<ng-container>`.  
- No ofrecían control total del bloque “else”.

Los nuevos flujos usan una **sintaxis declarativa moderna**, parecida a estructuras nativas de JavaScript (`if`, `for`, `switch`), pero integrada con Angular.

---

### 🧩 1. `@if` — Condicionales más claros

#### Antes
```html
<div *ngIf="isLoggedIn; else notLogged">
  Bienvenido, usuario!
</div>
<ng-template #notLogged>
  <p>Por favor inicia sesión.</p>
</ng-template>
```

#### Ahora
```html
@if (isLoggedIn) {
  <p>Bienvenido, usuario!</p>
} @else {
  <p>Por favor inicia sesión.</p>
}
```

✅ **Ventajas:**
- No necesitas `<ng-template>` ni referencias.
- Más parecido a un `if/else` real.
- Sintaxis más limpia y mantenible.

---

### 🔁 2. `@for` — Iteraciones más simples y rápidas

#### Antes
```html
<ul>
  <li *ngFor="let item of items; trackBy: trackById">{{ item.name }}</li>
</ul>
```

#### Ahora
```html
<ul>
  @for (item of items; track item.id) {
    <li>{{ item.name }}</li>
  }
</ul>
```

✅ **Ventajas:**
- Sintaxis más limpia y cercana a JavaScript.
- Mejor rendimiento (usa la nueva render pipeline).
- Soporta bloque `@empty` para listas vacías.

Ejemplo con `@empty`:
```html
<ul>
  @for (item of items; track item.id) {
    <li>{{ item.name }}</li>
  } @empty {
    <li>No hay elementos.</li>
  }
</ul>
```

---

### 🔄 3. `@switch` — Condiciones múltiples

#### Antes
```html
<div [ngSwitch]="status">
  <p *ngSwitchCase="'success'">Operación exitosa</p>
  <p *ngSwitchCase="'error'">Hubo un error</p>
  <p *ngSwitchDefault>Estado desconocido</p>
</div>
```

#### Ahora
```html
@switch (status) {
  @case ('success') {
    <p>Operación exitosa</p>
  }
  @case ('error') {
    <p>Hubo un error</p>
  }
  @default {
    <p>Estado desconocido</p>
  }
}
```

✅ **Ventajas:**
- Sin `ngSwitchCase` ni `ngSwitchDefault` externos.
- Estructura clara y coherente.

---

### ⚡️ Beneficios generales de los nuevos flujos

| Beneficio | Descripción |
|------------|--------------|
| 💡 Sintaxis moderna | Similar a estructuras `if`, `for`, `switch` reales. |
| 🧱 Anidación natural | Puedes combinar `@if`, `@for`, `@switch` sin `<ng-container>`. |
| 🚀 Mejor rendimiento | Usa la nueva **render pipeline** interna. |
| 🧼 Código más limpio | Más legible y mantenible. |

---

### 🧠 Ejemplo completo

```html
<section>
  @if (user()) {
    <h2>Hola {{ user().name }}</h2>
    <ul>
      @for (task of user().tasks; track task.id) {
        <li>{{ task.title }}</li>
      } @empty {
        <li>No hay tareas asignadas</li>
      }
    </ul>
  } @else {
    <p>No hay usuario logueado.</p>
  }
</section>
```

---

## 📚 Conclusión

- **Signals (Angular 16)**: nueva forma de manejar estado reactivo simple y eficiente.  
- **Flujos de control (`@if`, `@for`, `@switch`) (Angular 17)**: sintaxis declarativa moderna y legible.  
- Juntos, representan el nuevo **Angular declarativo y reactivo**, más cercano a frameworks modernos como React o Svelte, pero manteniendo el poder y la estructura de Angular.

---
