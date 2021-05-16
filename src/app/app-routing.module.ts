import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'weather',
    loadChildren: () => import('./weather/weather.module').then( m => m.WeatherPageModule)
  },
  {
    path: 'politics',
    loadChildren: () => import('./politics/politics.module').then( m => m.PoliticsPageModule)
  },
  {
    path: 'entertainment',
    loadChildren: () => import('./entertainment/entertainment.module').then( m => m.EntertainmentPageModule)
  },
  {
    path: 'science',
    loadChildren: () => import('./science/science.module').then( m => m.SciencePageModule)
  },
  {
    path: 'business',
    loadChildren: () => import('./business/business.module').then( m => m.BusinessPageModule)
  },
  {
    path: 'days',
    loadChildren: () => import('./days/days.module').then( m => m.DaysPageModule)
  },
  {
    path: 'entertainment-categories',
    loadChildren: () => import('./entertainment-categories/entertainment-categories.module').then( m => m.EntertainmentCategoriesPageModule)
  },
  {
    path: 'status',
    loadChildren: () => import('./status/status.module').then( m => m.StatusPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
