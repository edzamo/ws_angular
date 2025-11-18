import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Country } from '../../interfaces/country-last-interfaces';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'country-list',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class List { 

  /**
   * Define una propiedad de entrada (input) obligatoria llamada `countries`.
   * El valor de esta propiedad debe ser un array de objetos de tipo `Country`.
   * Utiliza la nueva sintaxis de señales de Angular para las entradas de componentes.
   */
  countries= input.required<Country[]>();

  errorMessage = input<string|null|unknown>();
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);


}
