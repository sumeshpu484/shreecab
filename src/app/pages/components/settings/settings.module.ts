import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { CabRegComponent } from './cab-reg/cab-reg.component';
import { ThemeModule } from '../../../@theme/theme.module';

@NgModule({
  imports: [
    ThemeModule,
    SettingsRoutingModule
  ],
  declarations: [SettingsRoutingModule.components]
})
export class SettingsModule { }
