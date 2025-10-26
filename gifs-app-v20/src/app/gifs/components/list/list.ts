import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ListItem } from './list-item/list-item';

@Component({
  selector: 'list',
  imports: [ListItem],
  templateUrl: './list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class List {
  listUrl = input.required<string[]>();
}
