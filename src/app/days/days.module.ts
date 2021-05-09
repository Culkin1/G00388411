import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaysPageRoutingModule } from './days-routing.module';

import { DaysPage } from './days.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaysPageRoutingModule
  ],
  exports: [DaysPage],
  declarations: [DaysPage]
})
export class DaysPageModule {}
