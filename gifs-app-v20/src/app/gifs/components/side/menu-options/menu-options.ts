import {  Component, inject } from '@angular/core';

import { RouterLink, RouterLinkActive } from "@angular/router";
import { MenuOption } from 'src/app/gifs/interfaces/menuOption';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-options.html',
})
export class MenuOptions {

  gifService = inject(GifsService);



  menuOptions: MenuOption[] = [
    {
      label: 'Trending',
      icon: 'fa-solid fa-chart-line',
      route: '/dashboard/trending',
      subLabel: 'Gifs Populars',
    },
    {
      label: 'Search',
      icon: 'fa-solid fa-magnifying-glass',
      route: '/dashboard/search',
      subLabel: 'Search gifs',
    },
  ];
}
