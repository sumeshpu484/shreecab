import { NgModule } from '@angular/core';
import { ThemeModule } from '../../../../@theme/theme.module';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyService } from '../../../service/settings/company.service';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    ThemeModule,
    AgmCoreModule,
    CompanyRoutingModule
  ],
  declarations: [CompanyRoutingModule.components],
  providers:[CompanyService]
})
export class CompanyModule {
  
 }
