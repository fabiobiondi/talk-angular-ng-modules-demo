import { Component } from '@angular/core';

@Component({
  selector: 'fb-root',
  template: `
    <div class="container">
      <fb-navbar></fb-navbar>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {}
