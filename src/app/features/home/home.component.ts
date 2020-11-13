import { Component } from '@angular/core';
import { CounterService } from '../../shared/widgets/counter/counter.service';

@Component({
  selector: 'fb-home',
  template: `
    <fb-home-carousel></fb-home-carousel>
    <fb-home-news></fb-home-news>
    <fb-counter></fb-counter>

    Created by <span fbUrl="http://www.fabiobiondi.io">Fabio Biondi</span>
  `,
})
export class HomeComponent {}
