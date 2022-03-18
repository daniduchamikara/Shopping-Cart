import { Component } from '@angular/core';

@Component({
  selector: 'body',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gadget-mart-client';
}
