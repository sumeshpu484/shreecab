import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRegRoutingModule } from './comapny-reg-routing.module';
import { ThemeModule } from '../../../../../@theme/theme.module';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  imports: [
    ThemeModule,
    CompanyRegRoutingModule,
    AgmCoreModule,
  ],
  declarations: []
})
export class CompnayRegModule { }
