import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleriaMisBuenasPageRoutingModule } from './galeria-mis-buenas-routing.module';

import { GaleriaMisBuenasPage } from './galeria-mis-buenas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleriaMisBuenasPageRoutingModule
  ],
  declarations: [GaleriaMisBuenasPage]
})
export class GaleriaMisBuenasPageModule {}
