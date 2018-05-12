import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  }, 
  {path:'settings',loadChildren:'app/pages/components/settings/settings.module#SettingsModule'},
  {path:'trip-details',loadChildren:'app/pages/components/trip-details/trip-details.module#TripDetailsModule'},
  {
    path: '',
    redirectTo: 'settings',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
