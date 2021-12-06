import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ListaConceptosComponent } from '../app/pages/lista-conceptos/lista-conceptos.component';
import { HomeComponent } from '../app/pages/home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'concepto', component:ListaConceptosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
