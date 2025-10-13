import { InfoServicio } from '../../shared/objetos/InfoServicio';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-portal-main',
  templateUrl: './portal-main.component.html',
  styleUrls: ['./portal-main.component.css'],

})


export class PortalMainComponent implements OnInit {

  tiles: InfoServicio[] = [
    {
      color: 'lightblue', cols: 1, rows: 1,
      servicio: 'Catálogo Nacional de Cualificaciones para Operadores de Capacitación',
      tipoServicio: 'CNC',
      logo: 'maletin_2_24px',
      leyenda: 'Contiene todas las cualificaciones profesionales de significancia para el sector ' +
        'productivo y sobre las cuales los Operadores de Capacitación calificados por la SETEC pueden capacitar.',
      url: 'www.google.com',
      refUrl: ''
    },
    {
      cols: 1, rows: 1, color: 'lightgreen',
      servicio: 'Operadores de Capacitación',
      tipoServicio: 'OC',
      logo: 'birrete_2_24px',
      leyenda: 'Si estás interesado en capacitarte, en esta sección podrás encontrar a todos los Operadores ' +
        'de Capacitación calificados por la SETEC a nivel nacional. Puedes buscar la información por ubicación geográfica,' +
        ' oferta en capacitación continua/competencias laborales o nombre de la institución y comunicarte directamente con ellos.',
      url: 'www.google.com',
      refUrl: ''
    },
    {
      cols: 1, rows: 1, color: 'lightpink',
      servicio: 'Personas Capacitadas por Operadores de Capacitación',
      tipoServicio: 'OC',
      logo: 'sociologia_2_24px',
      leyenda: 'Si estás interesado en conocer las personas capacitadas, en esta sección podrás encontrar la ' +
        'validación de todas las personas capacitadas por nuestros Operadores de Capacitación calificados por la SETEC a nivel nacional.' +
        ' Puedes buscar la información por número de cédula, nombres y/o apellidos y por el nombre del curso.',
      url: 'www.google.com',
      refUrl: ''
    },
    {
      cols: 1, rows: 1, color: '#DDBDF1',
      servicio: 'Organismos Evaluadores de la Conformidad',
      tipoServicio: 'OEC',
      logo: 'universidad_2_24px',
      leyenda: 'Si estás interesado en certificar tu experiencia, en esta sección podrás encontrar a todos los Organismos Evaluadores ' +
        'de la Conformidad reconocidos por la SETEC a nivel nacional. Puedes buscar la información por ubicación geográfica, ' +
        'perfil o nombre de la institución y comunicarte directamente con ellos.',
      url: 'www.google.com',
      refUrl: ''
    },
    {
      cols: 1, rows: 1, color: '#DDBDF1',
      servicio: 'Personas Certificadas',
      tipoServicio: 'OEC',
      logo: 'estudiante_2_24px',
      leyenda: 'Si estás interesado en contratar personas que cuenten con Certificación por Competencias Laborales, aquí podrás encontrar' +
        ' la validación de todos los ciudadanos certificados a nivel nacional. Puedes buscar la información por perfil, número de cédula,' +
        ' nombres y/o apellidos y comunicarte directamente con ellos.',
      url: 'www.google.com',
      refUrl: ''
    },
    {
      cols: 1, rows: 1, color: '#DDBDF1',
      servicio: 'Capacitadores Independientes',
      tipoServicio: 'CI',
      logo: 'profesor_2_24px',
      leyenda: 'Si estás interesado en capacitarte, en esta sección podrás encontrar a todos los Capacitadores Independientes calificados' +
        ' por la SETEC a nivel nacional. Puedes buscar la información por número de cédula y/o apellidos y comunicarte directamente ' +
        'con ellos.',
      url: 'www.google.com',
      refUrl: ''
    },
    {
      cols: 3, rows: 1, color: 'lightgreen',
      servicio: 'Personas Capacitadas por Capacitadores Independientes',
      tipoServicio: 'CI',
      logo: 'presentacion_2_24px',
      leyenda: 'Si estás interesado en conocer las personas capacitadas, en esta sección podrás encontrar la validación de todas las ' +
        'personas capacitadas por nuestros Capacitadores Independientes calificados por la SETEC a nivel nacional. Puedes buscar la ' +
        'información por número de cédula, nombres y/o apellidos y por el nombre del curso.',
      url: 'www.google.com',
      refUrl: ''
    }
  ];


  constructor() {

  }

  ngOnInit() {

  }




}
