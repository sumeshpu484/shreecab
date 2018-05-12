import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripDetailsRoutingModule } from './trip-details-routing.module';
import { ThemeModule } from '../../../@theme/theme.module';
import { TripInfoComponent } from './trip-info/trip-info.component';

@NgModule({
  imports: [
    ThemeModule,
    TripDetailsRoutingModule
  ],
  declarations: [
    TripDetailsRoutingModule.components,
    TripInfoComponent
  ]
})
export class TripDetailsModule { }
