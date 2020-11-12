import { Component } from '@angular/core';

@Component({
  selector: 'fb-catalog',
  template: `

    <div class="content">
      <div class="text-2" routerLinkActive="text-active" routerLink="products">products</div>
      <div class="text-2" routerLinkActive="text-active" routerLink="offers">offers</div>
      <div class="text-2" routerLinkActive="text-active" routerLink="last-minute">last-minute</div>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .content {
      border-top: 1px dotted #ccc;
      border-bottom: 1px dotted #ccc;
    }
  `]
})
export class CatalogComponent { }
