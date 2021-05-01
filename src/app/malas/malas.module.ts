import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MalasPageRoutingModule } from './malas-routing.module';

import { MalasPage } from './malas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MalasPageRoutingModule
  ],
  declarations: [MalasPage]
})
export class MalasPageModule {}
