# Guía Maestra de Angular: De Cero a Experto

Este documento es una guía completa diseñada para llevar a un desarrollador desde los conceptos más básicos de Angular hasta un entendimiento profundo de su arquitectura y funcionamiento interno.

![Angular Logo](https://angular.io/assets/images/logos/angular/angular.svg)

---

## 1. Introducción: ¿Qué es Angular?

Angular es una plataforma y framework de desarrollo, mantenido por Google, para construir aplicaciones de una sola página (SPAs) eficientes y sofisticadas. Está escrito en **TypeScript**, un superconjunto de JavaScript que añade tipado estático, lo cual ayuda a construir aplicaciones más robustas y mantenibles.

---

## 2. Los Bloques de Construcción Fundamentales

Toda aplicación en Angular está construida a partir de una serie de "bloques" o conceptos clave. Entender cada uno es el primer paso para dominar el framework.

![Arquitectura de Angular](https://angular.io/assets/images/guide/architecture/overview.png)

### Módulos (`NgModule`)

Piensa en los módulos como **cajas organizadoras**. Cada aplicación tiene al menos un módulo raíz (`AppModule`) que arranca la aplicación. Los módulos agrupan piezas relacionadas (componentes, servicios, etc.) y pueden importar la funcionalidad de otros módulos.

Un módulo es una clase decorada con `@NgModule`.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ // Piezas "visibles" que pertenecen a este módulo.
    AppComponent
  ],
  imports: [ // Otros módulos cuyas clases exportadas son necesarias.
    BrowserModule
  ],
  providers: [], // Servicios disponibles para los componentes de este módulo.
  bootstrap: [AppComponent] // El componente raíz que se carga al iniciar.
})
export class AppModule { }
```

### Componentes

Los componentes son los bloques de construcción básicos de la UI en una aplicación Angular. Un componente controla una porción de la pantalla llamada "vista". Cada componente consiste en:

1.  Una **clase** de TypeScript con un decorador `@Component()` que maneja la lógica.
2.  Una **plantilla** HTML que define la vista.
3.  **Estilos** CSS específicos para esa plantilla.

!Componente y Plantilla

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Etiqueta CSS para usar este componente en el HTML
  templateUrl: './app.component.html', // Ruta a la plantilla HTML
  styleUrls: ['./app.component.css'] // Ruta a los estilos
})
export class AppComponent {
  title = 'mi-app'; // Lógica y datos del componente
}
```

### Servicios e Inyección de Dependencias

Los servicios son clases que encapsulan lógica de negocio o datos que no están asociados a una vista específica. Los componentes pueden delegar tareas como obtener datos de un servidor a un servicio.

Angular utiliza la **Inyección de Dependencias (DI)** para proporcionar a los componentes las instancias de servicios que necesitan.

### Enlace de Datos (Data Binding)

El enlace de datos es el mecanismo que sincroniza los datos entre la clase del componente (el modelo) y su plantilla (la vista). Facilita la comunicación entre ambas partes.

![Data Binding en Angular](https://angular.io/assets/images/guide/architecture/databinding.png)

*   **Desde el Componente a la Vista:**
    *   **Interpolación `{{valor}}`**: Muestra valores de la clase en el HTML.
    *   **Enlace de Propiedad `[propiedad]="valor"`**: Asigna un valor a una propiedad de un elemento HTML.
*   **Desde la Vista al Componente:**
    *   **Enlace de Evento `(evento)="handler()"`**: Ejecuta una función de la clase cuando ocurre un evento en la vista (como un clic).
*   **Enlace de Doble Vía `[(ngModel)]="propiedad"`**: Combina el enlace de propiedad y de evento para mantener sincronizados los datos en ambas direcciones, muy común en formularios.

### El DOM y la Detección de Cambios

#### ¿Qué es el DOM?

El **DOM (Document Object Model)** o Modelo de Objetos del Documento es una representación en memoria de la estructura de un documento HTML. Es un árbol de nodos donde cada nodo representa una parte de la página (como un elemento `<div>`, un párrafo `<p>` o un texto).

JavaScript puede interactuar con el DOM para leer o modificar el contenido, la estructura y el estilo de una página web de forma dinámica. Sin embargo, manipular el DOM directamente puede ser complejo y afectar el rendimiento si no se hace de manera eficiente.

#### El Proceso de Angular para Actualizar la Vista

Angular abstrae la manipulación directa del DOM para que los desarrolladores no tengan que hacerlo. En su lugar, Angular se encarga de actualizar la vista de manera eficiente a través de un proceso llamado **Detección de Cambios (Change Detection)**.

El flujo de trabajo es el siguiente:

1.  **Estado del Componente**: Cada componente tiene un estado, que son los valores de sus propiedades (por ejemplo, `title = 'mi-app'`).
2.  **Renderizado Inicial**: Angular renderiza la vista inicial basándose en el estado actual de los componentes.
3.  **Eventos Asíncronos**: Cuando ocurre un evento que puede cambiar el estado de la aplicación (como un clic del usuario, una respuesta de una API o un temporizador `setTimeout`), se activa el mecanismo de detección de cambios de Angular.
4.  **Detección de Cambios**: Angular recorre el árbol de componentes de arriba hacia abajo y compara el valor actual de las propiedades con su valor anterior.
5.  **Actualización del DOM**: Si Angular detecta un cambio en alguna propiedad que está enlazada a la plantilla, actualiza **únicamente la parte específica del DOM** que necesita ser modificada.

Este enfoque es mucho más eficiente que volver a renderizar toda la página, lo que resulta en aplicaciones más rápidas y fluidas. El desarrollador solo se preocupa por cambiar los datos del componente, y Angular se encarga del resto.

### Ciclo de Vida del Componente

Desde que Angular crea un componente hasta que lo destruye, este pasa por un ciclo de vida con varias fases. Angular nos ofrece "ganchos" (hooks), que son métodos que podemos implementar en nuestras clases de componentes para ejecutar código en momentos clave de este ciclo.

El flujo de ejecución de los ganchos más comunes es el siguiente:

![Diagrama del Ciclo de Vida del Componente](https://angular.io/assets/images/guide/lifecycle-hooks/hooks-in-sequence.png)

1.  **`constructor()`**: No es un hook de Angular, sino de la clase TypeScript. Es el primer método que se ejecuta. Se usa para la inyección de dependencias, pero no se debe poner lógica compleja aquí. El componente aún no ha sido inicializado.

2.  **`ngOnChanges()`**: Se ejecuta antes de `ngOnInit()` y cada vez que Angular detecta un cambio en las propiedades de entrada del componente (las decoradas con `@Input()`).

3.  **`ngOnInit()`**: Se ejecuta **una sola vez** después del primer `ngOnChanges()`. Es el lugar ideal para poner la lógica de inicialización del componente, como la carga de datos desde un servicio.

4.  **`ngDoCheck()`**: Se ejecuta en cada ciclo de detección de cambios, justo después de `ngOnChanges()` y `ngOnInit()`. Permite implementar una lógica de verificación de cambios personalizada.

5.  **`ngAfterContentInit()`**: Se ejecuta **una sola vez** después de que Angular proyecta contenido externo en la vista del componente (usando `<ng-content>`).

6.  **`ngAfterViewInit()`**: Se ejecuta **una sola vez** después de que la vista del componente y las vistas de sus hijos han sido completamente inicializadas. Es el lugar ideal para interactuar con elementos del DOM de la plantilla (por ejemplo, con `@ViewChild`).

7.  **`ngOnDestroy()`**: Se ejecuta justo antes de que Angular destruya el componente. Es fundamental para liberar recursos, desuscribirse de `Observables` y evitar fugas de memoria.

#### Ejemplo de Implementación:

```typescript
import { Component, OnInit, OnChanges, OnDestroy, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  template: `<h1>{{ miPropiedad }}</h1>`
})
export class CicloVidaComponent implements OnInit, OnChanges, OnDestroy {

  @Input() miPropiedad: string;

  constructor() {
    console.log('1. constructor: La propiedad aún no está disponible.');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges: Se detectó un cambio en las propiedades.', changes);
  }

  ngOnInit(): void {
    console.log('3. ngOnInit: Componente inicializado. Ideal para cargar datos.');
  }

  ngOnDestroy(): void {
    console.log('X. ngOnDestroy: Componente a punto de ser destruido. ¡A limpiar!');
  }
}
```

## Angular CLI (Interfaz de Línea de Comandos)

Angular CLI es una herramienta fundamental para inicializar, desarrollar, andamios y mantener aplicaciones Angular directamente desde un shell de comandos.

### Crear una nueva aplicación

```bash
ng new nombre-de-la-aplicacion
```

### Levantar el servidor de desarrollo

Este comando compila la aplicación y la sirve en un servidor local (usualmente `http://localhost:4200/`). La aplicación se recarga automáticamente cuando cambias algún archivo fuente.

```bash
ng serve
# O su versión corta
ng s
```

### Generar artefactos

Puedes generar componentes, módulos, servicios y más con el comando `ng generate`.

**Componente:**
*   Comando largo: `ng generate component nombre-del-componente`
*   Comando corto: `ng g c nombre-del-componente`

**Módulo:**
*   Comando largo: `ng generate module nombre-del-modulo`
*   Comando corto: `ng g m nombre-del-modulo`

**Servicio:**
*   Comando largo: `ng generate service nombre-del-servicio`
*   Comando corto: `ng g s nombre-del-servicio`
