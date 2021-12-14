import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Conceptos, ListaConceptos } from '../../interface/conceptos';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalle-concepto',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './detalle-concepto.component.html',
  styleUrls: ['./detalle-concepto.component.scss']
})
export class DetalleConceptoComponent implements OnInit {

  Lista:Array<Conceptos> = ListaConceptos;
  conceptId: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.conceptId = parseInt(this.route.snapshot.paramMap.get('id') as string);

  }



}
