import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleriaBuenasPageRoutingModule } from './galeria-buenas-routing.module';

import { GaleriaBuenasPage } from './galeria-buenas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleriaBuenasPageRoutingModule
  ],
  declarations: [GaleriaBuenasPage]
})
export class GaleriaBuenasPageModule {}
