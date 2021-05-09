import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntertainmentCategoriesPageRoutingModule } from './entertainment-categories-routing.module';

import { EntertainmentCategoriesPage } from './entertainment-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntertainmentCategoriesPageRoutingModule
  ],
  declarations: [EntertainmentCategoriesPage]
})
export class EntertainmentCategoriesPageModule {}
