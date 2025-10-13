import { Component, Input, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css'],
})
export class EntradaComponent implements OnInit {
  @Input()
  public entrada: Entrada;

  constructor() {
    //Init the of array entrada for DataBinding
    this.entrada = {
      title: '',
      body: '',
      id: 1,
      userId: 1,
    };
  }

  ngOnInit(): void {}
}
