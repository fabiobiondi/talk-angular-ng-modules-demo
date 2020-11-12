import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeNewsModule } from './home-news/home-news.module';
import { HomeCarouselModule } from './home-carousel/home-carousel.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomeNewsModule,
    HomeCarouselModule,
    SharedModule,
  ]
})
export class HomeModule { }
