import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fb-col',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host.col { flex-grow: 1; margin: 5px }
    :host..col:first-child { margin-left: 0 }
    :host..col:last-child { margin-right: 0 }
  `]
})
export class ColComponent {
  @HostBinding() className = 'col';


}
