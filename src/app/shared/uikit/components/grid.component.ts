import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fb-grid',
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    .grid {
      display: flex;
    }
  `]
})
export class GridComponent implements OnInit {
  @HostBinding() className = 'grid';
  constructor() { }

  ngOnInit(): void {
  }

}
