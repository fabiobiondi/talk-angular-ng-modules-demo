import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCarouselComponent } from './home-carousel.component';
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
  declarations: [HomeCarouselComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HomeCarouselComponent]
})
export class HomeCarouselModule { }
