import { Routes } from '@angular/router';
import { CountryLayout } from './layout/CountryLayout/CountryLayout';
import { ByCapital } from './pages/by-capital/by-capital';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children: [
      {
        path: 'by-capital',
        component: ByCapital,
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
];

export default countryRoutes;
