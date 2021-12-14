import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ListaConceptosComponent } from '../app/pages/lista-conceptos/lista-conceptos.component';
import { HomeComponent } from '../app/pages/home/home.component';
import { DetalleConceptoComponent } from '../app/pages/detalle-concepto/detalle-concepto.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'concepto', component:ListaConceptosComponent},
  {path: 'concepto/:id', component:DetalleConceptoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
