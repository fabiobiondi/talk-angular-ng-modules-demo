import { Component, HostBinding, Input, OnInit } from '@angular/core';

enum Sizes {
  xs = 50,
  sm = 100,
  md = 150,
  xl = 220,
}

enum Backgrounds {
  primary = '#F1F1F1',
  highlight = '#615375',
  warning = '#E5625C',
}

enum TextColors {
  primary = '#222',
  highlight = 'white',
  warning = 'white',
}

type Color = typeof Backgrounds;

@Component({
  selector: 'fb-box',
  template: `
    <div
      class="box"
      style="display: flex; align-items: center;  justify-content: center"
      [style.height.px]="SIZES[size]"
      [style.padding]="padding ? 20 : 10"
      [style.color]="TEXT[bg]"
      [style.background-color]="BG[bg]"
      [style.justify-content]="alignCenter ? 'center' : null"
    >
      <img src="assets/logo.png" alt="logo" *ngIf="showLogo" style="padding: 2rem">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .box {
      background-color: #F1F1F1;
      /*padding: 20px;*/
      border-radius: 20px;
      color: #777;
      margin-top: 5px;
    }
  `]
})
export class BoxComponent {
  SIZES = Sizes;
  BG = Backgrounds;
  TEXT = TextColors;
  @Input() size: 'xs' | 'sm' | 'md' | 'xl' | null = 'xs';
  @Input() alignCenter = true;
  @Input() bg: string =  Backgrounds.primary;
  @Input() showLogo = false;
  @Input() padding = true;
}
