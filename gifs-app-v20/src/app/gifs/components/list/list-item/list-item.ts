import {  Component, input } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gif.interface';

@Component({
  selector: 'list-item',
  imports: [],
  templateUrl: './list-item.html'
})
export class ListItem { 

  url = input.required<string>();

}
