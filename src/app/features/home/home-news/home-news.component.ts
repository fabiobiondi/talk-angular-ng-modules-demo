import { Component } from '@angular/core';

@Component({
  selector: 'fb-home-news',
  template: `
    <fb-grid>
      <fb-col>
        <fb-box size="md">1</fb-box>
      </fb-col>
      <fb-col>
        <fb-box size="md">2</fb-box>
      </fb-col>
      <fb-col>
        <fb-box size="md">3</fb-box>
      </fb-col>
      <fb-col>
        <fb-box size="md">4</fb-box>
      </fb-col>
    </fb-grid>

  `,
})
export class HomeNewsComponent { }
