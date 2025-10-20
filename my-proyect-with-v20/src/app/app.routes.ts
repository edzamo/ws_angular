import { Routes } from '@angular/router';
import { ApplicationInfo } from './components/application-info/application-info';
import { HeroPage } from './components/hero-page/hero-page';
import { DragonballPage } from './components/dragonball-page/dragonball-page';

export const routes: Routes = [
  {
    path: '',
    component: ApplicationInfo,
  },
  {
    path: 'hero',
    component: HeroPage,
  },
  {
    path: 'dragonball',
    component: DragonballPage,
  },
  {
    path: '**', // for all the routes that are not defined, redirect to the home page
    redirectTo: '',
  },
];
