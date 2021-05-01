import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraficoMalasPage } from './grafico-malas.page';

const routes: Routes = [
  {
    path: '',
    component: GraficoMalasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraficoMalasPageRoutingModule {}
