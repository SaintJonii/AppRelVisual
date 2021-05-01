import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleriaMisMalasPageRoutingModule } from './galeria-mis-malas-routing.module';

import { GaleriaMisMalasPage } from './galeria-mis-malas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleriaMisMalasPageRoutingModule
  ],
  declarations: [GaleriaMisMalasPage]
})
export class GaleriaMisMalasPageModule {}
