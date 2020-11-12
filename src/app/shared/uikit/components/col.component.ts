import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fb-col',
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    .col {
      flex-grow: 1;
      margin: 5px;
    }

    .col:first-child {
      margin-left: 0;
    }

    .col:last-child {
      margin-right: 0;
    }
  `]
})
export class ColComponent {
  @HostBinding() className = 'col';


}
