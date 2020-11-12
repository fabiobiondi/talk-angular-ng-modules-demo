import { Component } from '@angular/core';
import { CounterService } from '../shared/utils/counter.service';

@Component({
  selector: 'fb-home',
  template: `
    <fb-grid>
      <fb-col>
        <fb-box size="xl" [showLogo]="true"></fb-box>
      </fb-col>
    </fb-grid>

    <fb-grid>
      <fb-col>
        <fb-box size="md" [showLogo]="true"></fb-box>
      </fb-col>
      <fb-col>
        <fb-box size="md" [showLogo]="true"></fb-box>
      </fb-col>
    </fb-grid>


    <fb-grid>
      <fb-col>
        <fb-box size="md">1</fb-box>
      </fb-col>
      <fb-col>
        <fb-box size="md">2</fb-box>
      </fb-col>
      <fb-col>
        <fb-box size="md">3</fb-box>
      </fb-col>
      <fb-col>
        <fb-box size="md">4</fb-box>
      </fb-col>
    </fb-grid>

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

  `,
})
export class HomeComponent {
  constructor(public countService: CounterService) { }
}
