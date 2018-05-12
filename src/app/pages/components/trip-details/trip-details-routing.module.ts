import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripDetailsComponent } from './trip-details.component';
import { TripInfoComponent } from './trip-info/trip-info.component';

const routes: Routes = [{
  path:'',component:TripDetailsComponent,children:[{
    path:''
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripDetailsRoutingModule {
  static components=[TripDetailsComponent,TripInfoComponent]
 }
