import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaleriaBuenasPage } from './galeria-buenas.page';

const routes: Routes = [
  {
    path: '',
    component: GaleriaBuenasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaleriaBuenasPageRoutingModule {}
