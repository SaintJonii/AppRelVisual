import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaleriaMalasPage } from './galeria-malas.page';

const routes: Routes = [
  {
    path: '',
    component: GaleriaMalasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaleriaMalasPageRoutingModule {}
