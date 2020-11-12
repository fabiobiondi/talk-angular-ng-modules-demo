import { Component } from '@angular/core';
import { CounterService } from '../../shared/utils/counter.service';

@Component({
  selector: 'fb-home',
  template: `
    <fb-home-carousel></fb-home-carousel>
    <fb-home-news></fb-home-news>

    <div style="width: 200px">
      <fb-grid>
        <fb-col>
          <fb-box (click)="countService.dec()" bg="warning">dec</fb-box>
        </fb-col>
        <fb-col>
          <fb-box>
            <div class="text-2">{{countService.value}}</div>
          </fb-box>
        </fb-col>
        <fb-col>
          <fb-box (click)="countService.inc()" bg="warning">inc</fb-box>
        </fb-col>
      </fb-grid>
    </div>

    Created by <span fbUrl="http://www.fabiobiondi.io">Fabio Biondi</span>

  `,
})
export class HomeComponent {
  constructor(public countService: CounterService) { }
}
