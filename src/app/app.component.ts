import { Component } from '@angular/core';

@Component({
  selector: 'fb-root',
  template: `
    <div class="container">
      <fb-navbar></fb-navbar>
      <router-outlet></router-outlet>
      Created by <span fbUrl="http://www.fabiobiondi.io">Fabio Biondi</span>
    </div>
  `,
  styles: []
})
export class AppComponent {}
