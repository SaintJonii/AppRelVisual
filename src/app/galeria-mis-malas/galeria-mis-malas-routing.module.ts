import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaleriaMisMalasPage } from './galeria-mis-malas.page';

const routes: Routes = [
  {
    path: '',
    component: GaleriaMisMalasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaleriaMisMalasPageRoutingModule {}
