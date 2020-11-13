import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from './components/box.component';
import { ColComponent } from './components/col.component';
import { GridComponent } from './components/grid.component';
import { UrlDirective } from './directives/url.directive';

@NgModule({
  declarations: [
    BoxComponent,
    ColComponent,
    GridComponent,
    UrlDirective,
  ],
  exports: [
    BoxComponent,
    ColComponent,
    GridComponent,
    UrlDirective,
  ],
  imports: [
    CommonModule
  ],
})
export class UikitModule { }
