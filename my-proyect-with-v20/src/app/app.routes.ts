import { Routes } from '@angular/router';
import { HeroPage } from './hero-page/hero-page';
import { ApplicationInfo } from './application-info/application-info';

export const routes: Routes = [
    {
        path: '',
        component: ApplicationInfo,
        
    },
    {
        path: 'hero',
        component:  HeroPage
    }
];
