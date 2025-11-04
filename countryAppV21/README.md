# CountryAppV21

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

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

En esta sección aprenderemos y reforzaremos temas como:

* Rutas hijas
* Rutas Anidadas
* Creación y comunicación entre componentes
* Tailwind y DaisyUI
* Archivo de rutas por feature / module
* Carga perezosa de módulos de rutas

El objetivo es armar la aplicación que luego haremos funcionar.

## Tecnologías a utilizar

### Tailwind CSS

Tailwind CSS is an open-source, utility-first CSS framework designed for rapidly building modern websites. Unlike traditional CSS frameworks that provide pre-defined components (like buttons or cards), Tailwind offers a set of low-level "utility" CSS classes that can be composed directly in your HTML markup to style elements.

### DaisyUI

DaisyUI is a free, open-source component library that functions as a plugin for Tailwind CSS, designed to streamline and accelerate web development. It provides a collection of pre-made, editable UI elements and semantic class names, aiming to reduce the verbose markup often associated with using Tailwind CSS directly.

## Instalación

### Tailwind CSS

1. **Install Tailwind CSS:**

```bash
npm install -D tailwindcss postcss autoprefixer
```

2. **Create configuration files:**

```bash
npx tailwindcss init
```

3. **Configure template paths:**

Add the paths to all of your template files in your `tailwind.config.js` file.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. **Add Tailwind directives to your CSS:**

Add the `@tailwind` directives for each of Tailwind’s layers to your main CSS file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### DaisyUI

1. **Install DaisyUI:**

```bash
npm i -D daisyui@latest
```

2. **Add DaisyUI to your Tailwind config:**

```js
// tailwind.config.js
module.exports = {
  // ...
  plugins: [require("daisyui")],
}
```
