import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuenasPage } from './buenas.page';

const routes: Routes = [
  {
    path: '',
    component: BuenasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuenasPageRoutingModule {}
