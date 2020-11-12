import { Component } from '@angular/core';

@Component({
  selector: 'fb-home-carousel',
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
  `,
})
export class HomeCarouselComponent {

}
