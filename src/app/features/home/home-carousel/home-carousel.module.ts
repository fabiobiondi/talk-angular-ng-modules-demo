import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCarouselComponent } from './home-carousel.component';
import { UikitModule } from '../../../shared/uikit/uikit.module';

@NgModule({
  declarations: [HomeCarouselComponent],
  imports: [
    CommonModule,
    UikitModule
  ],
  exports: [HomeCarouselComponent]
})
export class HomeCarouselModule { }
