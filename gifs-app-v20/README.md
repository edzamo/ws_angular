# GifsAppV20

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Tailwind CSS

This project is configured to use [Tailwind CSS](https://tailwindcss.com/). For more details on how to integrate Tailwind CSS with an Angular project, you can check the official guide:

[Install Tailwind CSS with Angular](https://tailwindcss.com/docs/installation/framework-guides/angular)

## Plantilla del Dashboard

La interfaz de usuario de este proyecto se basa en la siguiente plantilla de dashboard de Creative Tim. Esta plantilla está construida con Tailwind CSS y se utilizará como referencia para el diseño y los componentes de la aplicación.

[Dashboard Navigation Component](https://www.creative-tim.com/twcomponents/component/dashboard-navigation)

## Iconos

Para la iconografía del proyecto, se utilizará la librería [Font Awesome](https://fontawesome.com/). Los iconos se importarán desde el siguiente CDN:

[Font Awesome CDN](https://cdnjs.com/libraries/font-awesome)

## Flowbite

Para la creación de interfaces de usuario dinámicas y componentes interactivos, este proyecto utiliza [Flowbite](https://flowbite.com/). Flowbite es una librería de componentes de código abierto construida sobre las clases de utilidad de Tailwind CSS.

## Comunicación entre Componentes con Signals

Este proyecto utiliza **Angular Signals** para una gestión de estado reactiva y eficiente. La comunicación de datos desde componentes padres a hijos se realiza a través de **Input Signals**.

### ¿Cómo funciona?

Los `Inputs` de los componentes se declaran con la función `input()` en lugar del decorador `@Input()`. Esto crea un `Signal` que contiene el valor pasado desde el componente padre.

```typescript
// Componente hijo que recibe un dato
import { Component, input } from '@angular/core';

@Component({ ... })
export class ChildComponent {
  // Declara una entrada obligatoria como un Signal de solo lectura.
  data = input.required<string>(); 

  // Para usar el valor en la plantilla, se invoca como una función: data()
}
```

### Flujo de Datos en el Proyecto

1.  El componente `TrendingPage` (padre) define una lista de URLs.
2.  Pasa esta lista al componente `List` (hijo) a través de un *property binding*: `<list [listUrl]="miListaDeUrls">`.
3.  El componente `List` recibe el array en su `input` signal: `listUrl = input.required<string[]>()`.
4.  `List` itera sobre el array (`@for (url of listUrl(); ...)` y por cada elemento, renderiza un componente `ListItem` (nieto), pasándole la URL individual: `<list-item [url]="url">`.
5.  El componente `ListItem` recibe la URL en su propio `input` signal: `url = input.required<string>()` y la usa para mostrar la imagen.

Este enfoque aprovecha la reactividad granular de los Signals para optimizar las actualizaciones del DOM, mejorando el rendimiento de la aplicación.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
