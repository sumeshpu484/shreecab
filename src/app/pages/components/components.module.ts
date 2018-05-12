import { NgModule } from '@angular/core';

import { TreeModule } from 'ng2-tree';
import { ToasterModule } from 'angular2-toaster';

import { ThemeModule } from '../../@theme/theme.module';
import { ComponentsRoutingModule, routedComponents } from './components-routing.module';
import { TripDetailsComponent } from './trip-details/trip-details.component';

@NgModule({
  imports: [
    ThemeModule,
    ComponentsRoutingModule,
    TreeModule,
    ToasterModule,
  ],
  declarations: [
    ...routedComponents,
    TripDetailsComponent,
    
  ],
})
export class ComponentsModule { }
