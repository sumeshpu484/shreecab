import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { MapsModule } from '../../maps/maps.module';

@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    MapsModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
