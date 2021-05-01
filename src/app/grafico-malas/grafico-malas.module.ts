import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraficoMalasPageRoutingModule } from './grafico-malas-routing.module';

import { GraficoMalasPage } from './grafico-malas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraficoMalasPageRoutingModule
  ],
  declarations: [GraficoMalasPage]
})
export class GraficoMalasPageModule {}
