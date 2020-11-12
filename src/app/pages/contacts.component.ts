import { Component, OnInit } from '@angular/core';
import { CounterService } from '../shared/utils/counter.service';

@Component({
  selector: 'fb-contacts',
  template: `
      <fb-grid>
        <fb-col>
        </fb-col>
        <fb-col>
          <fb-box [showLogo]="false" size="xs"></fb-box>
          <fb-box [showLogo]="false" size="xs"></fb-box>
          <fb-box [showLogo]="false" bg="highlight" size="xs">SUBMIT</fb-box>
        </fb-col>
        <fb-col>
        </fb-col>
      </fb-grid>


      <div style="width: 200px; margin: 0 auto">
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
export class ContactsComponent {
  constructor(public countService: CounterService) { }
}
