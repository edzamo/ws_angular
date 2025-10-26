import {  Component, input } from '@angular/core';

@Component({
  selector: 'list-item',
  imports: [],
  templateUrl: './list-item.html'
})
export class ListItem { 

  url = input.required<string>();

}
