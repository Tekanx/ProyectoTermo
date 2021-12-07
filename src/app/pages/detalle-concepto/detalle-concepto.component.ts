import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-detalle-concepto',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './detalle-concepto.component.html',
  styleUrls: ['./detalle-concepto.component.scss']
})
export class DetalleConceptoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
