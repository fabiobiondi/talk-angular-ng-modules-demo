import { Component } from '@angular/core';

@Component({
  selector: 'fb-products',
  template: `

    <fb-grid>
      <fb-col>
        <fb-box [alignCenter]="false" size="sm" [showLogo]="true">PRODUCT 1</fb-box>
        <fb-box [alignCenter]="false" size="sm" [showLogo]="true">PRODUCT 2</fb-box>
        <fb-box [alignCenter]="false" size="sm" [showLogo]="true">PRODUCT 3</fb-box>
      </fb-col>
    </fb-grid>
  `,
  styles: [
  ]
})
export class ProductsComponent {

}
