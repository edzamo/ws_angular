import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'reactive',
    // Este router solo exporta reactiveRouter (named export), por eso se accede con .then()
    loadChildren: () => import('./reactive/reactive.router').then((mo) => mo.reactiveRoutes),
  },
  {
    path: 'auth',
    // Este router exporta sus rutas como default, así que no hace falta .then()
    loadChildren: () => import('./auth/auth.router'),
  },
  {
    path: 'country',
    loadChildren: () => import('./country/country.router').then((mo) => mo.countryRoutes),
  },
  {
    path:'**',
    redirectTo:'reactive'
  }
];
