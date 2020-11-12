import { Component } from '@angular/core';
import { CounterService } from './shared/utils/counter.service';

@Component({
  selector: 'fb-root',
  template: `
    <div class="container">
      <fb-navbar></fb-navbar>
      <router-outlet></router-outlet>
      Created by <span fbUrl="http://www.fabiobiondi.io">Fabio Biondi</span>
  `,
  styles: []
})
export class AppComponent {


}
