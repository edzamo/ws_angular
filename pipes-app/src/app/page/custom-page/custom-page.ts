import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { heroes } from '../data/heroes.data';
import { CanFyPipe } from '../../pipes/can-fly.pipe';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { Hero } from '../../interfaces/hero.interface';


@Component({
  selector: 'app-custom-page',
  imports: [ ToggleCasePipe,
    ToggleCasePipe,
    CanFyPipe,
    HeroTextColorPipe,
    HeroTextColorPipe,
    TitleCasePipe,
    HeroCreatorPipe,
    HeroSortByPipe,
    HeroFilterPipe,
  ],
  templateUrl: './custom-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomPage { 
  name = signal('Edwin Zamora');

  upperCase = signal(true);

  heroes = signal(heroes);

  sortBy = signal<keyof Hero | null>(null);

  searchQuery = signal('');


}
