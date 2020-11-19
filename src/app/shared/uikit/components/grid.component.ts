import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fb-grid',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host.grid { display: flex }
  `]
})
export class GridComponent {
  @HostBinding() className = 'grid';

}
