import { Component, OnInit } from '@angular/core';
import { Conceptos, ListaConceptos } from '../../interface/conceptos';

@Component({
  selector: 'app-lista-conceptos',
  templateUrl: './lista-conceptos.component.html',
  styleUrls: ['./lista-conceptos.component.scss']
})
export class ListaConceptosComponent implements OnInit {

  Lista = ListaConceptos;
  
  constructor() { }

  ngOnInit(): void {
  }

}
