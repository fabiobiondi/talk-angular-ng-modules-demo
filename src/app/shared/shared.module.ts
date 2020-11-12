import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from './uikit/components/box.component';
import { ColComponent } from './uikit/components/col.component';
import { GridComponent } from './uikit/components/grid.component';
import { UrlDirective } from './uikit/directives/url.directive';
import { CounterService } from './utils/counter.service';

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
  providers: [
  ]
})
export class SharedModule { }
