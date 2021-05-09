import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntertainmentCategoriesPage } from './entertainment-categories.page';

const routes: Routes = [
  {
    path: '',
    component: EntertainmentCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntertainmentCategoriesPageRoutingModule {}
