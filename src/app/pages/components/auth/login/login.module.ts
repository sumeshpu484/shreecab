import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbLayoutModule } from '@nebular/theme';
import { ThemeModule } from '../../../../@theme/theme.module';
import { LoginService } from '../../../service/login.service';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    NbLayoutModule,
    ThemeModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginRoutingModule.components
  ],providers:[LoginService]
})
export class LoginModule { }
