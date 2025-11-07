import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInput {

  // `input` es una nueva forma de pasar datos desde un componente padre a un componente hijo.
  // Se utiliza para definir propiedades que el componente hijo puede recibir.
  // En el HTML del componente padre, se implementa de la siguiente manera:
  // <country-search-input [placeHolder]="'Search by Capital'"></country-search-input>
  placeHolder= input('Search by Capital');

  // `output` es una nueva forma de emitir eventos desde un componente hijo a un componente padre.
  // Se utiliza como una señal y se puede emitir un valor llamando a `this.value.emit(someValue)` o `this.value.emit(txtSearch.value)`.
  // En el HTML del componente padre, se implementa de la siguiente manera:
  // <country-search-input (value)="handleValue($event)"></country-search-input>
  value= output<string>();
}
