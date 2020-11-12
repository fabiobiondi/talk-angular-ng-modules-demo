import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[fbUrl]'
})
export class UrlDirective {
  @Input() fbUrl: string;
  @HostBinding('style.cursor') cursor = 'pointer';
  @HostBinding('style.color') color = 'purple';

  @HostListener('click')
  clickHandler(): void {
    window.open(this.fbUrl);
  }
}
