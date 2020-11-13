import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'fb-counter',
  template: `
    <div style="font-style: italic; margin: 1rem 0;">
      Global Counter: {{counterService.value}}
    </div>
  `,
})
export class CounterComponent {
  constructor(public counterService: CounterService) {
    this.counterService.inc();
  }
}
