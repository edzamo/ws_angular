import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ListItem } from './list-item/list-item';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'list',
  imports: [ListItem],
  templateUrl: './list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class List {
  gifList = input.required<Gif[]>();
}
