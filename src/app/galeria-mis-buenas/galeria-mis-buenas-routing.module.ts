import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaleriaMisBuenasPage } from './galeria-mis-buenas.page';

const routes: Routes = [
  {
    path: '',
    component: GaleriaMisBuenasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaleriaMisBuenasPageRoutingModule {}
