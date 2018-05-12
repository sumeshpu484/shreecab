import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { DriverRegComponent } from './driver-reg/driver-reg.component';
import { CabRegComponent } from './cab-reg/cab-reg.component';
import { AddRouteComponent } from './add-route/add-route.component'
import { AddTransportAdminComponent } from './add-transport-admin/add-transport-admin.component';
import { CompanyComponent } from './company/company.component';

const routes: Routes = [{
  path: '', component: SettingsComponent, children: [
    {
      path: 'add-driver', component: DriverRegComponent,
    }, 
    {path:'add-car',component:CabRegComponent},
    {path:'add-company',loadChildren:'app/pages/components/settings/company/company.module#CompanyModule'},
    {path: 'add-route', component: AddRouteComponent },
    {path: 'add-trans-admin', component: AddTransportAdminComponent},
    {path:'',redirectTo: 'add-company',
    pathMatch: 'full',}
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
}) 
export class SettingsRoutingModule {
  static components=[SettingsComponent, DriverRegComponent, CabRegComponent, AddRouteComponent, AddTransportAdminComponent]
 }
