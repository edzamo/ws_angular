import { ChangeDetectionStrategy, Component } from '@angular/core';
import { reactiveRoutes } from '../../../reactive/reactive.router';
import { title } from 'process';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface menuItem {
  title: string;
  route: string;
}

const reactiveItems = reactiveRoutes[0].children ?? [];

@Component({
  selector: 'app-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenu {
  reactiveMenu: menuItem[] = reactiveItems
    .filter((item) => item.path !== '**')
    .map((item) => ({
      route: `reactive/${item.path}`,
      title: `${item.title}`,
    }));

  authMenu: menuItem[] = [
    {
      title: 'Register',
      route: './auth',
    },
  ];

  countryMenu: menuItem[] = [
    {
      title: 'Countries',
      route: './country',
    },
  ];
}
