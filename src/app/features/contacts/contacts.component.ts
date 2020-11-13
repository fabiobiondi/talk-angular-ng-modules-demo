import { Component } from '@angular/core';
import { CounterService } from '../../shared/widgets/counter/counter.service';

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

    <fb-counter></fb-counter>
  `,
})
export class ContactsComponent {}
