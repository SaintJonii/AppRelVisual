import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuenasPageRoutingModule } from './buenas-routing.module';

import { BuenasPage } from './buenas.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuenasPageRoutingModule
  ],
  declarations: [BuenasPage]
})
export class BuenasPageModule {}
