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

  listaConceptos:Array<Conceptos> = ListaConceptos;
  conceptId: number = 0;
  concept: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.conceptId = parseInt(this.route.snapshot.paramMap.get('id') as string);
    this.concept = this.listaConceptos.find( concepto => concepto.id == this.conceptId);
  
    scrollTo(0,0);

  }



}
