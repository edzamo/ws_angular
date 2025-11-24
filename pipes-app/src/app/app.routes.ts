import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'basic',
        title: 'Basic Page',
        loadComponent: () => import('./page/basic-page/basic-page'),  
    },
    {
        path: 'custom',
        title: 'Custom Page',
        loadComponent: () => import('./page/custom-page/custom-page'),
    },
    {
        path: 'numbers',
        title: 'Numbers Page',
        loadComponent: () => import('./page/numbers-page/numbers-page'),
    },
    {
        path: 'uncommon',
        title: 'Uncommon Page',
        loadComponent: () => import('./page/uncommon-page/uncommon-page'),
    },
    {
        path: '**',
        redirectTo: 'basic',
        
    },
];
