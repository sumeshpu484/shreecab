import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company.component';
import { CompanyRegComponent } from './comapny-reg/company-reg.component';
import { ShiftComponent } from './comapny-reg/shift/shift.component';
import { LocationComponent } from './comapny-reg/location/location.component';

const routes: Routes = [
  {path:'',component:CompanyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { 
  static components=[CompanyComponent,CompanyRegComponent,ShiftComponent,LocationComponent];
}
