import { Component } from '@angular/core';

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
