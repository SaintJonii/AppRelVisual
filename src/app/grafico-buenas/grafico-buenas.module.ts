import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraficoBuenasPageRoutingModule } from './grafico-buenas-routing.module';

import { GraficoBuenasPage } from './grafico-buenas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraficoBuenasPageRoutingModule
  ],
  declarations: [GraficoBuenasPage]
})
export class GraficoBuenasPageModule {}
