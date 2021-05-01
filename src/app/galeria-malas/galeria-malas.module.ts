import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleriaMalasPageRoutingModule } from './galeria-malas-routing.module';

import { GaleriaMalasPage } from './galeria-malas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleriaMalasPageRoutingModule
  ],
  declarations: [GaleriaMalasPage]
})
export class GaleriaMalasPageModule {}
