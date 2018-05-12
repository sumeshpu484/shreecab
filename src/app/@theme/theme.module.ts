import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  NbActionsModule,
  NbCardModule,
  NbLayoutModule,
  NbMenuModule,
  NbRouteTabsetModule,
  NbSearchModule,
  NbSidebarModule,
  NbTabsetModule,
  NbThemeModule,
  NbUserModule,
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule,
} from '@nebular/theme';

import {MatInputModule,MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatTableModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatTabsModule} from '@angular/material';

import { NbSecurityModule } from '@nebular/security';

import {
  FooterComponent,
  HeaderComponent,
  // SearchInputComponent,
  ThemeSettingsComponent,
  // ThemeSwitcherComponent,
  TinyMCEComponent,
} from './components';
import { CapitalizePipe, PluralPipe, RoundPipe, TimingPipe } from './pipes';
import {
  SampleLayoutComponent,
} from './layouts';
import { DEFAULT_THEME } from './styles/theme.default';
import { COSMIC_THEME } from './styles/theme.cosmic';
import { ToastrModule } from 'ngx-toastr';
import { StatusCardComponent } from './components/shared/status-card/status-card.component';
const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];
const MAT_MODULES=[MatInputModule,MatButtonModule,
  MatIconModule,MatListModule,MatSidenavModule,
  MatTableModule,MatCheckboxModule,MatTabsModule,
  MatDatepickerModule,MatNativeDateModule  ]
const NB_MODULES = [
  NbCardModule,
  NbLayoutModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule,
  NgbModule,
  NbSecurityModule, // *nbIsGranted directive
];

const COMPONENTS = [
  // ThemeSwitcherComponent,
  HeaderComponent,
  FooterComponent,
  // SearchInputComponent,
  ThemeSettingsComponent,
  TinyMCEComponent,
  
  SampleLayoutComponent,
  StatusCardComponent
];

const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
];

const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot(
    {
      name: 'default',
    },
    [ COSMIC_THEME,DEFAULT_THEME ],
  ).providers,
  ...NbSidebarModule.forRoot().providers,
  ...NbMenuModule.forRoot().providers,
  ToastrModule.forRoot().providers,
];


@NgModule({
  imports: [...BASE_MODULES, ...NB_MODULES,...MAT_MODULES],
  exports: [...BASE_MODULES, ...NB_MODULES, ...MAT_MODULES,...COMPONENTS, ...PIPES],
  declarations: [...COMPONENTS, ...PIPES],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [...NB_THEME_PROVIDERS],
    };
  }
}
