import { Routes } from '@angular/router';
import { HomePage } from './page/homePage/homePage';
import { AboutPage } from './page/aboutPage/aboutPage';
import { ContactPage } from './page/contactPage/contactPage';

export const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'about', component: AboutPage },
    { path: 'contact', component: ContactPage },
    { path: '**', redirectTo: '' },
  ];
