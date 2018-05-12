import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
    
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet>
      
      </router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
  public config: ToasterConfig = 
        new ToasterConfig({
            showCloseButton: true, 
            tapToDismiss: false, 
            timeout: 0
        });
}
