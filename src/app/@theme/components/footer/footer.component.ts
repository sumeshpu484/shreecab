import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by"> <b><a href="#" target="_blank"></a></b></span>
    <div class="socials">
      
    </div>
  `,
})
export class FooterComponent {
      // <a href="#" target="_blank" class="ion ion-social-github"></a>
      // <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      // <a href="#" target="_blank" class="ion ion-social-twitter"></a>
      // <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
}